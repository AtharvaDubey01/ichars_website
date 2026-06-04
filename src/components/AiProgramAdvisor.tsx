import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2, Sparkles, Check } from 'lucide-react';

// Helper function to extract selectable options from assistant response
const parseOptionsAndText = (content: string) => {
  const singleOptionRegex = /\[Option:\s*(.*?)\]/gi;
  const multiOptionRegex = /\[MultiOption:\s*(.*?)\]/gi;
  
  const options: string[] = [];
  const multiOptions: string[] = [];
  
  let match;
  const tempSingle = new RegExp(singleOptionRegex);
  while ((match = tempSingle.exec(content)) !== null) {
    options.push(match[1].trim());
  }
  
  const tempMulti = new RegExp(multiOptionRegex);
  while ((match = tempMulti.exec(content)) !== null) {
    multiOptions.push(match[1].trim());
  }
  
  // Clean all markers from the displayed message bubble
  let cleanText = content.replace(singleOptionRegex, '').replace(multiOptionRegex, '').trim();
  cleanText = cleanText.replace(/\n\s*\n+/g, '\n\n').trim();
  
  return { cleanText, options, multiOptions };
};

export const AiProgramAdvisor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([
    {
      role: 'assistant',
      content: "Hello! I am the ICHARS Program Advisor. I am here to help you design a customized, highly practical training and career roadmap.\n\nTo begin, what is your professional/academic background?\n\n[Option: Psychologist / Therapist]\n[Option: Social Worker / Counselor]\n[Option: Yoga Practitioner / Alternative Healer]\n[Option: Doctor / Medical Professional]\n[Option: Psychology Student / Graduate]\n[Option: Executive/Life Coach]\n[Option: Aspiring Coach (Career transitioner)]"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMultiIndices, setSelectedMultiIndices] = useState<Record<number, boolean>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timeout);
  }, [messages, isLoading, isOpen, selectedMultiIndices]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-advisor', handleOpen);
    return () => window.removeEventListener('open-ai-advisor', handleOpen);
  }, []);

  const submitMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    // Reset multi selection
    setSelectedMultiIndices({});
    const currentHistory = [...messages];
    // Add user message to history
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: currentHistory
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I am having trouble connecting right now. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    submitMessage(userMessage);
  };

  const handleOptionClick = (optionText: string) => {
    submitMessage(optionText);
  };

  const toggleMultiIndex = (idx: number) => {
    setSelectedMultiIndices(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleMultiSubmit = (multiOptions: string[]) => {
    const selectedOptions = multiOptions.filter((_, idx) => selectedMultiIndices[idx]);
    if (selectedOptions.length === 0) return;
    const combinedMessage = selectedOptions.join(', ');
    submitMessage(combinedMessage);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 bg-brand-deep-teal rounded-full shadow-lg flex items-center justify-center text-white hover:bg-brand-structural-navy transition-all duration-300 transform hover:scale-105 ${isOpen ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
        aria-label="Open AI Advisor"
      >
        <Sparkles className="w-6 h-6 absolute -top-1 -right-1 text-brand-accent-orange animate-pulse" size={16} />
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-[100] w-[390px] max-w-[calc(100vw-32px)] h-[620px] max-h-[calc(100vh-32px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-brand-structural-navy p-4 text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-soft-teal/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-brand-soft-teal" />
            </div>
            <div>
              <h3 className="font-medium text-base">Program Advisor</h3>
              <p className="text-xs text-brand-soft-teal">Powered by AI</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-brand-warm-white/50 flex flex-col gap-4">
          {messages.map((msg, idx) => {
            const { cleanText, options, multiOptions } = msg.role === 'assistant' 
              ? parseOptionsAndText(msg.content) 
              : { cleanText: msg.content, options: [], multiOptions: [] };
            
            const isLastAssistantMessage = msg.role === 'assistant' && idx === messages.length - 1;

            return (
              <div key={idx} className="flex flex-col gap-1 w-full">
                <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 ${msg.role === 'user' ? 'bg-brand-deep-teal text-white' : 'bg-brand-soft-neutral/30 text-brand-structural-navy'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`text-base p-3 rounded-2xl whitespace-pre-wrap ${msg.role === 'user' ? 'bg-brand-deep-teal text-white rounded-tr-sm' : 'bg-white border border-brand-soft-neutral/30 text-brand-primary-text rounded-tl-sm shadow-sm'}`}>
                    {cleanText}
                  </div>
                </div>

                {/* Single Options rendering */}
                {isLastAssistantMessage && options.length > 0 && !isLoading && (
                  <div className="flex flex-col gap-1.5 mt-2 mb-1 pl-11 max-w-[85%]">
                    {options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleOptionClick(opt)}
                        className="w-full text-left px-3.5 py-2 text-sm font-semibold rounded-xl border border-brand-soft-teal/30 text-brand-deep-teal bg-white hover:bg-brand-soft-teal hover:text-white hover:border-brand-soft-teal transition-all duration-200 shadow-sm leading-relaxed"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {/* Multi Options rendering */}
                {isLastAssistantMessage && multiOptions.length > 0 && !isLoading && (
                  <div className="flex flex-col gap-1.5 mt-2 mb-1 pl-11 max-w-[90%]">
                    <span className="text-xs text-brand-secondary-text font-medium mb-1">Select one or more:</span>
                    {multiOptions.map((mOpt, mIdx) => {
                      const isSelected = !!selectedMultiIndices[mIdx];
                      return (
                        <button
                          key={mIdx}
                          onClick={() => toggleMultiIndex(mIdx)}
                          className={`w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl border flex items-center justify-between transition-all duration-200 shadow-sm leading-relaxed ${
                            isSelected 
                              ? 'border-brand-deep-teal bg-brand-deep-teal/5 text-brand-deep-teal' 
                              : 'border-brand-soft-neutral/40 bg-white text-brand-primary-text hover:bg-brand-soft-neutral/10'
                          }`}
                        >
                          <span>{mOpt}</span>
                          <span className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            isSelected ? 'bg-brand-deep-teal border-brand-deep-teal text-white' : 'border-brand-soft-neutral/65 bg-white'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                        </button>
                      );
                    })}
                    <button
                      onClick={() => handleMultiSubmit(multiOptions)}
                      disabled={Object.values(selectedMultiIndices).filter(Boolean).length === 0}
                      className="mt-2 w-full py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-brand-deep-teal hover:bg-brand-structural-navy transition-colors rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Selections ({Object.values(selectedMultiIndices).filter(Boolean).length})
                    </button>
                  </div>
                )}
              </div>
            );
          })}
          {isLoading && (
            <div className="flex gap-3 max-w-[85%] self-start">
              <div className="shrink-0 w-8 h-8 rounded-full bg-brand-soft-neutral/30 text-brand-structural-navy flex items-center justify-center mt-1">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-base p-3 rounded-2xl bg-white border border-brand-soft-neutral/30 text-brand-primary-text rounded-tl-sm shadow-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-brand-soft-teal" />
                <span className="text-brand-secondary-text">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-brand-soft-neutral/30 shrink-0">
          <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response..."
              className="flex-1 bg-brand-soft-neutral/10 border border-brand-soft-neutral/30 rounded-full pl-4 pr-12 py-3 text-base focus:outline-none focus:border-brand-soft-teal focus:ring-1 focus:ring-brand-soft-teal transition-all"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 w-8 h-8 bg-brand-deep-teal rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:bg-brand-soft-neutral"
            >
              <Send className="w-4 h-4 ml-[2px]" />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-xs text-brand-secondary-text">Personalized Practitioner & Career Roadmap</span>
          </div>
        </div>
      </div>
    </>
  );
};
