import { useState } from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { cn } from '../lib/utils';
import { 
    ArrowRight, 
    ArrowRightLeft,
    BrainCircuit,
    CheckCircle2,
    ChevronRight,
    Eye,
    Heart,
    Layers,
    Link,
    MessageSquare,
    Network,
    Play,
    Shield,
    Target,
    Users
} from 'lucide-react';

export const RelationshipSpecialization = () => {
    const [selectedPattern, setSelectedPattern] = useState<number | null>(null);

    const patterns = [
        { id: 1, text: "Emotional withdrawal patterns", icon: ArrowRightLeft },
        { id: 2, text: "Recurring conflict cycles", icon: ArrowRight },
        { id: 3, text: "Attachment dynamics", icon: Link },
        { id: 4, text: "Trust breakdowns", icon: Shield },
        { id: 5, text: "Emotional disconnection", icon: Network },
        { id: 6, text: "Identity conflicts in relationships", icon: Target },
        { id: 7, text: "Relational dependency patterns", icon: Heart }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text mb-20 md:mb-32">
            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative text-center border-b border-brand-soft-neutral/30 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-warm-white/40 via-brand-warm-white/80 to-brand-warm-white" />
                </div>
                
                <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
                    <FadeIn>
                        <div className="text-xs md:text-sm font-bold tracking-widest text-brand-structural-navy uppercase mb-6 inline-flex items-center gap-2 border border-brand-soft-neutral/50 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm">
                            <Heart className="w-3.5 h-3.5 text-brand-soft-teal" />
                            Relationship Coaching
                        </div>
                        <Heading level={1} className="text-3xl md:text-5xl lg:text-6xl text-brand-structural-navy font-bold leading-[1.15] tracking-tight mb-8">
                            Relationship struggles are rarely caused by communication alone.<br />
                            <span className="text-brand-soft-teal font-light block mt-4 text-2xl md:text-4xl">They are often driven by deeper emotional, relational, and unconscious patterns.</span>
                        </Heading>
                    </FadeIn>
                </div>

                <div className="max-w-6xl mx-auto px-4 relative z-20 mt-12 grid md:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
                    <FadeIn delay={0.2} className="space-y-6">
                        <Text size="base" className="text-brand-secondary-text">
                            Many couples genuinely care about each other, want the relationship to improve, understand the problem intellectually, and try to communicate more effectively.
                        </Text>
                        <Text size="base" className="text-brand-secondary-text">
                            <strong className="text-brand-structural-navy">And yet:</strong> the same arguments repeat, emotional reactions return, disconnection continues, trust erodes gradually, and relational patterns remain unchanged.
                        </Text>
                        <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal" />
                           <Text size="sm" className="font-semibold text-brand-structural-navy mb-3">
                               Because most relational struggles are not maintained only through words. They are shaped by:
                           </Text>
                           <ul className="text-sm md:text-base text-brand-secondary-text grid grid-cols-2 gap-2 mt-2">
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Attachment dynamics</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Emotional conditioning</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Unconscious expectations</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Identity-level fears</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Protection strategies</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Relational memory</li>
                           </ul>
                        </div>
                        <Text size="sm" className="font-semibold text-brand-structural-navy">
                            This is why meaningful relationship work requires more than communication coaching. It requires understanding the deeper relational system maintaining the experience.
                        </Text>
                    </FadeIn>

                    <FadeIn delay={0.3} className="relative hidden md:block h-full">
                        <div className="absolute inset-0 bg-brand-soft-teal/5 blur-3xl rounded-full" />
                        <div className="bg-white rounded-[32px] p-8 border border-brand-soft-neutral/50 shadow-lg relative z-10 flex flex-col items-center h-full overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-[0.15] mix-blend-luminosity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                            
                            <div className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy mb-8 border-b border-brand-soft-neutral/30 pb-4 w-full text-center relative z-10">
                                The Hidden Relationship System
                            </div>
                            
                            <div className="w-full flex-1 flex flex-col items-center justify-center space-y-2.5 relative z-10 text-center font-mono text-xs text-brand-structural-navy/80 font-medium pb-4">
                                <div className="px-5 py-2.5 border border-brand-soft-neutral/40 rounded-full bg-white/80 backdrop-blur-sm w-full max-w-[240px] shadow-sm transform transition-all group-hover:-translate-y-1">Surface Conflict</div>
                                <div className="h-4 w-px bg-brand-soft-neutral/40" />
                                <div className="px-5 py-2.5 border border-brand-soft-neutral/40 rounded-full bg-brand-warm-white/90 backdrop-blur-sm w-full max-w-[240px] shadow-sm transform transition-all group-hover:-translate-y-1">Emotional Trigger</div>
                                <div className="h-4 w-px bg-brand-soft-neutral/40" />
                                <div className="px-5 py-2.5 border border-brand-soft-neutral/40 rounded-full bg-brand-soft-neutral/10 backdrop-blur-sm w-full max-w-[240px] shadow-sm transform transition-all group-hover:-translate-y-1">Protection Pattern</div>
                                <div className="h-4 w-px bg-brand-soft-neutral/40" />
                                <div className="px-5 py-2.5 border border-brand-soft-neutral/40 rounded-full bg-brand-soft-neutral/20 backdrop-blur-sm w-full max-w-[240px] shadow-sm transform transition-all group-hover:-translate-y-1">Attachment Fear</div>
                                <div className="h-4 w-px bg-brand-soft-neutral/50" />
                                <div className="px-5 py-2.5 border border-brand-soft-neutral/50 rounded-full bg-brand-soft-neutral/30 backdrop-blur-sm w-full max-w-[240px] shadow-sm transform transition-all group-hover:-translate-y-1 text-brand-structural-navy font-bold">Identity-Level Meaning</div>
                                <div className="h-4 w-px bg-brand-soft-teal/50" />
                                <div className="px-5 py-3 border border-brand-soft-teal bg-brand-soft-teal/10 backdrop-blur-sm shadow-md text-brand-structural-navy font-bold rounded-full w-full max-w-[240px] transform transition-all group-hover:-translate-y-1">Relational Cycle</div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. WHY RELATIONSHIP PROBLEMS REPEAT */}
            <Section className="border-b border-brand-soft-neutral/30 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                     <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                         <div>
                             <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">The Illusion of Resolution</div>
                             <Heading level={2} className="text-brand-structural-navy mb-6">
                                 Many relationship patterns repeat because the deeper emotional system underneath them remains unchanged.
                             </Heading>
                             <Text size="base" className="text-brand-secondary-text mb-6">
                                 <span className="font-medium text-brand-structural-navy">Couples often repeat patterns</span> even after understanding the issue, discussing it repeatedly, making promises to change, attending sessions, or becoming emotionally aware.
                             </Text>
                             <Text size="base" className="text-brand-secondary-text mb-6">
                                 This happens because relational conflicts are rarely isolated events. They are often expressions of deeper emotional needs, attachment fears, unconscious expectations, unresolved emotional conditioning, or identity-level insecurity.
                             </Text>
                             
                             {/* Case Example */}
                             <div className="mt-10 bg-brand-structural-navy rounded-3xl p-6 md:p-8 border border-[#112635] shadow-lg relative overflow-hidden group">
                                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                 <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Case Example</div>
                                 <Heading level={4} className="text-white mb-4">"The Same Fight Keeps Returning"</Heading>
                                 <div className="space-y-4 text-base text-white/80">
                                     <p>A couple repeatedly argues about responsiveness.</p>
                                     <div className="pl-4 border-l-2 border-white/20">
                                         <p className="font-semibold text-white mb-1">At the surface:</p>
                                         <p>One partner feels ignored, the other feels controlled. Communication tools help temporarily.</p>
                                     </div>
                                     <div className="pl-4 border-l-2 border-brand-soft-teal">
                                         <p className="font-semibold text-white mb-1">Deeper exploration reveals:</p>
                                         <p>One partner experiences delayed responses as emotional abandonment. The other experiences repeated emotional demands as loss of autonomy.</p>
                                     </div>
                                     <p className="pt-2 font-medium text-white">The conflict is no longer simply "replying faster." It becomes attachment activation, emotional safety, identity protection, and relational interpretation.</p>
                                 </div>
                             </div>
                         </div>
                         
                         <div className="relative mt-12 md:mt-0">
                             <div className="absolute inset-0 bg-brand-structural-navy/5 blur-3xl rounded-[40px]" />
                             <div className="relative bg-white rounded-[40px] p-6 md:p-12 border border-brand-soft-neutral/50 shadow-xl">
                                  <div className="text-center font-bold text-sm uppercase tracking-widest text-brand-structural-navy mb-8">Repeating Relationship Loop</div>
                                  
                                  <div className="flex flex-col items-center space-y-4 relative z-10 w-full max-w-sm mx-auto">
                                      <div className="p-4 w-full text-center rounded-xl bg-brand-warm-white border border-brand-soft-neutral/50 text-base font-semibold text-brand-structural-navy z-10 relative">Trigger</div>
                                      <ArrowRight className="w-5 h-5 text-brand-soft-neutral/60 rotate-90" />
                                      
                                      <div className="p-4 w-full text-center rounded-xl bg-brand-warm-white border border-brand-soft-neutral/50 text-base font-semibold text-brand-structural-navy z-10 relative">Emotional Interpretation</div>
                                      <ArrowRight className="w-5 h-5 text-brand-soft-neutral/60 rotate-90" />
                                      
                                      <div className="p-4 w-full text-center rounded-xl bg-white border-2 border-brand-soft-teal/30 shadow-sm text-base font-semibold text-brand-structural-navy z-10 relative">Protective Reaction</div>
                                      <ArrowRight className="w-5 h-5 text-brand-soft-neutral/60 rotate-90" />
                                      
                                      <div className="p-4 w-full text-center rounded-xl bg-white border-2 border-brand-soft-teal/30 shadow-sm text-base font-semibold text-brand-structural-navy z-10 relative">Partner Reacts</div>
                                      <ArrowRight className="w-5 h-5 text-brand-soft-teal rotate-90" />
                                      
                                      <div className="p-4 w-full text-center rounded-xl bg-brand-structural-navy text-white text-base font-bold shadow-md transform scale-105 z-10 relative">Conflict Escalates</div>
                                      <ArrowRight className="w-5 h-5 text-brand-soft-teal rotate-90" />
                                      
                                      <div className="p-4 w-full text-center rounded-xl bg-brand-soft-teal/10 border-brand-soft-teal/20 text-brand-structural-navy text-base font-semibold z-10 relative">Emotional Reinforcement</div>
                                      
                                      {/* Loop Arrow Line */}
                                      <div className="absolute top-[30px] bottom-[30px] -right-3 sm:-right-8 w-6 sm:w-16 border-r-2 border-b-2 border-t-2 border-dashed border-brand-soft-neutral/40 rounded-r-3xl -z-0" />
                                      <div className="absolute top-[50%] -translate-y-1/2 -right-8 sm:-right-24 text-xs font-bold text-brand-secondary-text uppercase tracking-widest bg-white py-1 px-2 whitespace-nowrap transform rotate-90 sm:rotate-0">Pattern Repeats</div>
                                  </div>
                             </div>
                         </div>
                     </div>
                </div>
            </Section>

            {/* 3. UNDERSTANDING RELATIONAL PATTERNS */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <Heading level={2} className="text-brand-structural-navy mb-6">Relationship dynamics often operate as interconnected emotional systems.</Heading>
                     <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto">
                         In many relationships, patterns do not exist within one person alone. They emerge between partners, through repeated interaction, emotional responses, and unconscious role reinforcement.
                     </Text>
                </div>

                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                     <div className="md:col-span-5 space-y-6">
                         <div className="bg-white rounded-3xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group h-full flex flex-col">
                              <div className="h-48 relative overflow-hidden">
                                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
                                  <div className="absolute inset-0 bg-brand-structural-navy/20 mix-blend-multiply" />
                                  <div className="absolute bottom-4 left-4 right-4 text-white">
                                      <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-1 drop-shadow-md">Systemic Observation</div>
                                      <h4 className="text-lg font-bold drop-shadow-md">Observing the Between</h4>
                                  </div>
                              </div>
                              <div className="p-6 md:p-8 flex-1 flex flex-col">
                                  <Text size="sm" className="text-brand-secondary-text mb-6">
                                      Practitioners must learn to observe relational cycles, emotional reciprocity, pursuit-withdrawal dynamics, and protective positioning.
                                  </Text>
                                  <div className="bg-brand-warm-white p-5 rounded-2xl border border-brand-soft-neutral/50 mt-auto">
                                      <p className="text-sm font-bold text-brand-structural-navy uppercase tracking-widest mb-3 border-b border-brand-soft-neutral/30 pb-2">Example Dynamic</p>
                                      <p className="text-base text-brand-secondary-text leading-relaxed font-medium">
                                          One partner repeatedly pursues reassurance. The other repeatedly withdraws emotionally. Over time, both behaviors strengthen each other. The relationship becomes a self-reinforcing emotional system.
                                      </p>
                                  </div>
                              </div>
                         </div>
                     </div>

                     <div className="md:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-brand-soft-neutral/50 shadow-sm relative">
                          <Heading level={4} className="text-brand-structural-navy mb-2 text-center">What Relational Pattern Are You Most Drawn To?</Heading>
                          <Text size="sm" className="text-brand-secondary-text text-center mb-8">Select an area to reflect on your practitioner resonance.</Text>
                          
                          <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8">
                              {patterns.map((pattern) => (
                                  <button
                                     key={pattern.id}
                                     onClick={() => setSelectedPattern(selectedPattern === pattern.id ? null : pattern.id)}
                                     aria-expanded={selectedPattern === pattern.id}
                                     className={cn("px-4 py-3 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 text-base font-medium", 
                                        selectedPattern === pattern.id 
                                        ? "bg-brand-structural-navy border-brand-structural-navy text-white shadow-md transform scale-[1.02]" 
                                        : "bg-brand-warm-white border-brand-soft-neutral hover:border-brand-soft-teal hover:bg-white"
                                     )}
                                  >
                                      <pattern.icon className={cn("w-4 h-4 shrink-0", selectedPattern === pattern.id ? "text-brand-soft-teal" : "text-brand-secondary-text")} />
                                      <span>{pattern.text}</span>
                                  </button>
                              ))}
                          </div>

                          <div className={cn("overflow-hidden transition-all duration-500 max-w-xl mx-auto rounded-xl bg-brand-soft-teal/10 border border-brand-soft-teal/20 text-center", selectedPattern ? "max-h-40 opacity-100 p-6" : "max-h-0 opacity-0 p-0 border-transparent")}>
                                <Target className="w-6 h-6 text-brand-soft-teal mx-auto mb-3" />
                                <p className="text-base font-medium text-brand-structural-navy leading-relaxed">
                                    This indicates a resonance with deeper, systemic relational work. Specialized coaching provides the frameworks to turn this interest into structured, transformational capability.
                                </p>
                          </div>
                     </div>
                </div>
            </Section>

            {/* 4. EMOTIONAL & UNCONSCIOUS DYNAMICS */}
            <Section className="border-b border-brand-soft-neutral/30 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1573497161161-c3e73707e25c?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-warm-white via-white/80 to-transparent pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                    <div className="order-2 md:order-1 relative">
                         <div className="absolute inset-0 bg-brand-soft-teal/5 blur-3xl rounded-full" />
                         <div className="bg-white rounded-3xl p-8 border border-brand-soft-neutral/50 shadow-lg relative z-10 flex flex-col items-center max-w-sm mx-auto">
                              <div className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy mb-8 border-b border-brand-soft-neutral/30 pb-4 w-full text-center">
                                  Conscious vs Emotional Processing
                              </div>
                              
                              <div className="w-full space-y-6">
                                  <div className="p-5 rounded-2xl bg-brand-warm-white border border-brand-soft-neutral/50 text-center relative overflow-hidden">
                                      <div className="text-xs uppercase font-bold text-brand-secondary-text mb-2">Conscious Understanding</div>
                                      <p className="text-base font-semibold text-brand-structural-navy">"I know they care about me."</p>
                                  </div>
                                  
                                  <div className="flex justify-center relative">
                                      <div className="absolute inset-0 flex items-center justify-center -z-10 w-full">
                                          <div className="h-px bg-brand-soft-neutral/30 w-full" />
                                      </div>
                                      <div className="bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400 border border-brand-soft-neutral/30 rounded-full">
                                          Conflict Between Layers
                                      </div>
                                  </div>

                                  <div className="p-5 rounded-2xl bg-brand-structural-navy border border-[#112635] text-center shadow-md relative overflow-hidden">
                                      <div className="text-xs uppercase font-bold text-white/70 mb-2">Emotional Conditioning</div>
                                      <p className="text-base font-semibold text-white">"I still feel unsafe emotionally."</p>
                                  </div>
                                  
                                  <div className="flex justify-center">
                                      <ArrowRight className="w-5 h-5 text-brand-soft-neutral/60 rotate-90" />
                                  </div>

                                  <div className="p-5 rounded-2xl bg-white border border-brand-soft-teal/50 shadow-md text-center">
                                      <div className="text-xs uppercase font-bold text-brand-soft-teal mb-2">Relational Reaction</div>
                                      <p className="text-sm font-semibold text-brand-structural-navy">Withdrawal • Anger • Pursuit • Shutdown • Defensiveness</p>
                                  </div>
                              </div>
                         </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">Beneath Awareness</div>
                        <Heading level={2} className="text-brand-structural-navy mb-6">
                            Many relationship reactions are driven by emotional learning operating beneath conscious awareness.
                        </Heading>
                        <Text size="base" className="text-brand-secondary-text mb-6">
                            People do not enter relationships emotionally neutral. They bring past relational experiences, emotional conditioning, attachment learning, and identity beliefs.
                        </Text>
                        
                        <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50 mb-6">
                            <Text size="sm" className="font-semibold text-brand-structural-navy mb-2">
                                Emotional systems do not always respond to present logic.
                            </Text>
                            <Text size="sm" className="text-brand-secondary-text">
                                They often respond to emotional memory and conditioned meaning. This is why a partner may consciously know they are safe, yet emotionally react as though abandonment is occurring.
                            </Text>
                        </div>

                        <div className="space-y-3">
                            <div className="text-sm font-bold uppercase tracking-widest text-brand-structural-navy mb-2">Focus Areas for Practitioners:</div>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm md:text-base font-medium text-brand-secondary-text">
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal" /> Emotional processing</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal" /> Relational re-patterning</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal" /> Unconscious awareness</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal" /> Emotional regulation</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal" /> Attachment understanding</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal" /> Identity transformation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. LAYERED CONFLICTS & 6. IDENTITY/ATTACHMENT */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-4">Multi-Dimensional Observation</div>
                     <Heading level={2} className="text-brand-structural-navy mb-6">Relationship conflicts are often multi-layered, intersecting with identity and attachment.</Heading>
                     <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto">
                         Many conflicts appear straightforward, but deeper observation reveals multiple interacting layers. Relationships become emotionally activating because they intersect with safety, belonging, and identity.
                     </Text>
                </div>

                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                     <div className="bg-brand-warm-white rounded-3xl p-8 md:p-10 border border-brand-soft-neutral/50 shadow-sm relative group overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <Layers className="w-8 h-8 text-brand-soft-teal mb-6" />
                          <Heading level={4} className="text-brand-structural-navy mb-4">The Danger of Surface Focus</Heading>
                          <Text size="sm" className="text-brand-secondary-text mb-6">
                              Without layered understanding, sessions may remain symptom-focused, repetitive, and directionless. When practitioners understand how layers interact (communication, attachment, power, conditioning), the work becomes intentional and coherent.
                          </Text>
                          <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 shadow-sm relative z-10 flex flex-col gap-2">
                              <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-2 px-2">Case: "You Never Listen To Me"</div>
                              
                              <div className="w-full bg-brand-warm-white border border-brand-soft-neutral/50 rounded-lg p-3 relative flex justify-between items-center z-50 shadow-sm transition-transform hover:-translate-y-1">
                                  <span className="text-xs uppercase tracking-widest text-brand-secondary-text font-bold">Surface</span>
                                  <span className="text-sm font-semibold text-brand-structural-navy">Communication frustration</span>
                              </div>
                              <div className="w-[96%] mx-auto bg-brand-soft-neutral/10 border border-brand-soft-neutral/40 rounded-lg p-3 relative flex justify-between items-center -mt-4 pt-5 z-40 shadow-sm transition-transform hover:-translate-y-1">
                                  <span className="text-xs uppercase tracking-widest text-brand-secondary-text font-bold">Emotion</span>
                                  <span className="text-sm font-semibold text-brand-structural-navy">Feeling emotionally unseen</span>
                              </div>
                              <div className="w-[92%] mx-auto bg-brand-soft-neutral/20 border border-brand-soft-neutral/30 rounded-lg p-3 relative flex justify-between items-center -mt-4 pt-5 z-30 shadow-sm transition-transform hover:-translate-y-1">
                                  <span className="text-xs uppercase tracking-widest text-brand-structural-navy/60 font-bold">Attachment</span>
                                  <span className="text-sm font-semibold text-brand-structural-navy">Fear of abandonment</span>
                              </div>
                              <div className="w-[88%] mx-auto bg-brand-soft-teal/10 border border-brand-soft-teal/20 rounded-lg p-3 relative flex justify-between items-center -mt-4 pt-5 z-20 shadow-sm transition-transform hover:-translate-y-1">
                                  <span className="text-xs uppercase tracking-widest text-brand-soft-teal font-bold">Identity</span>
                                  <span className="text-sm font-semibold text-brand-structural-navy">"I do not matter emotionally."</span>
                              </div>
                              <div className="w-[84%] mx-auto bg-brand-structural-navy border border-[#112635] rounded-lg p-3 relative flex justify-between items-center -mt-4 pt-5 z-10 shadow-lg transition-transform hover:-translate-y-1">
                                  <span className="text-xs uppercase tracking-widest text-white/70 font-bold">Protection</span>
                                  <span className="text-sm font-semibold text-white">Anger + criticism</span>
                              </div>

                              <div className="mt-4 pt-3 flex items-center justify-between px-2">
                                  <span className="text-xs uppercase font-bold text-brand-soft-teal">Resulting Cycle:</span>
                                  <span className="text-sm font-bold text-brand-structural-navy">Partner withdraws → reinforces fear</span>
                              </div>
                          </div>
                     </div>

                     <div className="bg-brand-structural-navy rounded-3xl p-8 md:p-10 border border-[#112635] shadow-md relative text-white group overflow-hidden">
                          <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-soft-teal/10 rounded-tl-[100px] blur-[80px]" />
                          <Shield className="w-8 h-8 text-brand-soft-teal mb-6" />
                          <Heading level={4} className="text-white mb-4">Activation & Protection</Heading>
                          <Text size="sm" className="text-white/80 mb-6 relative z-10">
                              Relationships activate deep emotional survival responses. A conflict is rarely just about the disagreement; it may involve identity-level meaning and unconscious fear systems.
                          </Text>
                          <div className="space-y-4 relative z-10">
                              <p className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest">Requirements for Practitioners:</p>
                              <ul className="space-y-3 text-base text-white/90">
                                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> Remain emotionally grounded during intense activation</li>
                                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> Hold multiple perspectives simultaneously</li>
                                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> Understand emotional activation beneath behavior</li>
                                  <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> Avoid simplistic blame frameworks</li>
                              </ul>
                          </div>
                     </div>
                </div>
            </Section>

            {/* 7. PRACTITIONER POSITIONING & 8. EVOLUTION */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
                     
                     <div className="lg:col-span-5 relative space-y-6">
                         <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">Practitioner Depth</div>
                         <Heading level={2} className="text-brand-structural-navy mb-6">
                             Deeper relationship work requires more than surface intervention.
                         </Heading>
                         <Text size="base" className="text-brand-secondary-text mb-8">
                             Practitioners specializing in relationship work often need stronger capability in relational systems thinking, emotional process observation, and multi-perspective facilitation.
                         </Text>
                         
                         <div className="bg-white rounded-2xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden h-full flex flex-col">
                             <div className="h-32 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center shrink-0" />
                             <div className="absolute top-0 inset-x-0 h-32 bg-brand-structural-navy/20 mix-blend-multiply" />
                             <div className="p-6 md:p-8 flex-1">
                                 <Heading level={4} className="text-brand-structural-navy mb-4">Relationship Specialists Become Practitioners Who Can:</Heading>
                                 <ul className="space-y-3">
                                     {[
                                         "Understand conflict beneath the argument",
                                         "Recognize emotional and attachment dynamics quickly",
                                         "Identify recurring relational systems",
                                         "Facilitate emotional awareness between partners",
                                         "Help couples move beyond repetitive cycles"
                                     ].map((item, i) => (
                                         <li key={i} className="flex items-start gap-3 text-base font-medium text-brand-secondary-text leading-tight">
                                             <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                         </div>
                     </div>

                     <div className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-12 border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden">
                          <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-brand-warm-white to-transparent pointer-events-none" />
                          
                          <Heading level={3} className="text-brand-structural-navy mb-2 text-center md:text-left relative z-10">Practitioner Evolution</Heading>
                          <Text size="sm" className="text-brand-secondary-text mb-10 text-center md:text-left max-w-md relative z-10">
                              Over time, practitioners shift from reacting to arguments toward understanding the emotional architecture beneath them. Sessions become calmer, clearer, and more transformational.
                          </Text>

                          <div className="relative z-10 hidden md:block">
                              <div className="absolute top-[28px] bottom-[28px] left-[24px] w-1 bg-brand-soft-neutral/30 rounded-full" />
                              <div className="absolute top-[28px] left-[24px] w-1 bg-gradient-to-b from-brand-soft-teal/20 via-brand-soft-teal to-brand-structural-navy h-[80%] rounded-full" />
                              
                              <div className="space-y-8 relative">
                                  {[
                                      { title: "Communication Focus", desc: "Conflict reduction & behavioral change." },
                                      { title: "Conflict Pattern Recognition", desc: "Observing immediate problem-solving cycles." },
                                      { title: "Emotional Systems Understanding", desc: "Seeing the larger protective structures." },
                                      { title: "Attachment & Identity Awareness", desc: "Recognizing deep unconscious positioning." },
                                      { title: "Relational Transformation Facilitation", desc: "Deeper, sustainable relational change.", isLast: true }
                                  ].map((step, i) => (
                                      <div key={i} className={cn("flex items-start gap-6 transition-all duration-300", step.isLast ? "transform scale-[1.02] translate-x-2" : "")}>
                                          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm relative z-10", step.isLast ? "bg-brand-structural-navy border-4 border-brand-soft-teal/20 text-white" : "bg-white border-2 border-brand-soft-neutral/50 text-brand-soft-teal")}>
                                              <ArrowRight className={cn("w-5 h-5", step.isLast ? "rotate-90 text-brand-soft-teal" : "rotate-90 text-brand-soft-neutral")} />
                                          </div>
                                          <div className="pt-2">
                                              <h5 className={cn("text-base font-bold tracking-tight mb-1", step.isLast ? "text-brand-structural-navy text-base" : "text-brand-structural-navy/80")}>{step.title}</h5>
                                              <p className={cn("text-sm", step.isLast ? "text-brand-secondary-text font-medium" : "text-brand-secondary-text/70")}>{step.desc}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                          
                          {/* Mobile visual version (simplified) */}
                          <div className="md:hidden space-y-4">
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-brand-warm-white border border-brand-soft-neutral flex items-center justify-center shrink-0">1</div>
                                  <span className="text-sm font-semibold text-brand-secondary-text">Communication Focus</span>
                              </div>
                              <div className="w-0.5 h-4 bg-brand-soft-neutral/30 ml-4" />
                              <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-brand-warm-white border border-brand-soft-neutral flex items-center justify-center shrink-0">2</div>
                                  <span className="text-sm font-semibold text-brand-secondary-text">Pattern Recognition</span>
                              </div>
                              <div className="w-0.5 h-4 bg-brand-soft-teal/30 ml-4" />
                              <div className="flex items-center gap-3 p-3 bg-brand-structural-navy text-white rounded-xl shadow-md">
                                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0"><Target className="w-4 h-4 text-brand-soft-teal" /></div>
                                  <span className="text-sm font-semibold">Relational Transformation</span>
                              </div>
                          </div>
                     </div>
                </div>
            </Section>

            {/* 9. REAL TRANSFORMATION & VIDEO */}
            <Section className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto px-4 text-center mb-16">
                    <Heading level={2} className="text-brand-structural-navy mb-6">
                        Sustainable relationship change usually happens when deeper relational patterns become visible.
                    </Heading>
                    <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto">
                        This does not mean relationships suddenly become conflict-free. It means conflict becomes more understandable, emotional reactions become less automatic, and empathy becomes accessible.
                    </Text>
                </div>

                {/* Video Clip Placeholder */}
                <div className="max-w-4xl mx-auto px-4">
                    <button aria-label="Play video: Why Communication Alone Does Not Resolve Patterns" className="w-full text-left outline-none focus-visible:ring-4 focus-visible:ring-brand-soft-teal bg-brand-structural-navy rounded-3xl overflow-hidden relative group cursor-pointer border border-[#112635] shadow-2xl aspect-video md:aspect-[21/9]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#112635] via-brand-structural-navy/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-brand-soft-teal/20 backdrop-blur-sm border border-brand-soft-teal/50 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-soft-teal/30 group-hover:scale-110 shadow-lg">
                                <Play className="w-8 h-8 text-white pl-1" fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between opacity-90">
                            <div className="text-left">
                                <div className="text-xs uppercase tracking-widest text-brand-soft-teal font-bold mb-1">Practitioner Reflection</div>
                                <div className="text-white text-base md:text-lg font-medium leading-snug max-w-lg">Why Communication Alone Often Does Not Resolve Relationship Patterns</div>
                            </div>
                            <div className="text-white/60 text-base font-mono bg-[#112635]/80 px-3 py-1 rounded-full backdrop-blur-md hidden md:block">05:22</div>
                        </div>
                    </button>
                </div>
            </Section>

            {/* 10. IS THIS PATHWAY RIGHT FOR YOU? & 11. NEXT STEPS */}
            <Section theme="tint" className="pb-32 relative">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start mt-8">
                     
                     <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-soft-neutral/50 shadow-sm relative h-full">
                          <Heading level={3} className="text-brand-structural-navy mb-6">Is this pathway right for you?</Heading>
                          <Text size="sm" className="text-brand-secondary-text mb-6">
                              This pathway is usually most relevant after practitioners have already developed foundational capability. It may resonate strongly if you:
                          </Text>
                          <ul className="space-y-4 text-base font-medium text-brand-secondary-text">
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Are deeply interested in relationship dynamics and recurring patterns.</li>
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Are drawn toward emotionally layered work beyond surface communication.</li>
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Value attachment and emotional-process understanding.</li>
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Are comfortable working with emotional complexity and identity.</li>
                          </ul>
                     </div>

                     <div className="space-y-8 flex flex-col justify-center h-full">
                          <div className="text-center md:text-left">
                              <Heading level={2} className="text-brand-structural-navy mb-4">
                                  Specialization is about understanding the deeper emotional systems.
                              </Heading>
                              <Text size="sm" className="text-brand-secondary-text mb-8">
                                  For practitioners drawn toward this depth, relationship specialization often becomes deeply meaningful, professionally defining, and emotionally transformative work.
                              </Text>

                              <div className="flex flex-col gap-4">
                                  <Button variant="primary" className="justify-center w-full md:w-auto">
                                      Explore Relationship Coaching Pathway
                                  </Button>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <a href="#prospectus-success-relationship" className="flex items-center justify-center p-3 rounded-xl border border-brand-soft-neutral hover:border-brand-soft-teal text-base font-semibold text-brand-structural-navy bg-white transition-colors">
                                          Download Prospectus
                                      </a>
                                      <a href="#specialization-hub" className="flex items-center justify-center p-3 rounded-xl border border-brand-soft-neutral hover:border-brand-soft-teal text-base font-semibold text-brand-structural-navy bg-white transition-colors">
                                          Explore Other Pathways
                                      </a>
                                  </div>
                              </div>
                              <div className="mt-8">
                                  <a href="#start" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors">
                                      <MessageSquare className="w-4 h-4" /> Book a Developmental Clarity Conversation
                                  </a>
                              </div>
                          </div>
                          
                          {/* Internal Links Block */}
                          <div className="pt-8 border-t border-brand-soft-neutral/30 mt-auto">
                               <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary-text mb-4">Ecosystem Progression</div>
                               <div className="flex flex-wrap gap-2">
                                     <a href="#chp" className="px-3 py-1.5 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-lg text-sm font-medium text-brand-structural-navy hover:border-brand-soft-teal transition-colors">CHP (Deeper Psychotherapy)</a>
                                     <a href="#chc" className="px-3 py-1.5 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-lg text-sm font-medium text-brand-structural-navy hover:border-brand-soft-teal transition-colors">CHC (Coaching Foundations)</a>
                                     <a href="#cohorts" className="px-3 py-1.5 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-lg text-sm font-medium text-brand-structural-navy hover:border-brand-soft-teal transition-colors">Reflective Cohorts</a>
                               </div>
                          </div>
                     </div>

                </div>
            </Section>
        </div>
    );
};
