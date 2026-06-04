import { useState } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface Step {
  title: string;
  desc: string;
  details: string[];
}

interface InteractiveStepperProps {
  steps: Step[];
  className?: string;
}

export function InteractiveStepper({ steps, className }: InteractiveStepperProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={cn("w-full max-w-5xl mx-auto", className)}>
        {/* Horizontal Navigation */}
        <div className="relative py-8 mb-8 hidden md:block">
            {/* Connecting Line */}
            <div className="absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-brand-soft-neutral z-0"></div>
            
            <div className="grid grid-cols-5 gap-4 relative z-10">
                {steps.map((item, idx) => (
                  <button 
                      key={idx} 
                      onClick={() => setActiveStep(idx)}
                      className="flex flex-col items-center text-center group focus:outline-none"
                  >
                     {/* Step Circle */}
                     <div className={cn(
                         "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mb-4 transition-all duration-300 shadow-sm border-4",
                         activeStep === idx 
                          ? "bg-brand-deep-teal text-white border-brand-soft-teal scale-110" 
                          : "bg-white text-brand-primary-text border-brand-soft-neutral group-hover:border-brand-soft-teal/50"
                     )}>
                        {idx + 1}
                     </div>
                     <h4 className={cn("mb-2 text-base font-medium leading-tight transition-colors", activeStep === idx ? "text-brand-deep-teal font-semibold" : "text-brand-secondary-text group-hover:text-brand-primary-text")}>
                        {item.title}
                     </h4>
                  </button>
                ))}
            </div>
        </div>

        {/* Mobile Navigation (Dropdown-like or simple list) */}
        <div className="md:hidden flex flex-col gap-2 mb-8 justify-center items-stretch">
             {steps.map((item, idx) => (
                  <button 
                      key={idx} 
                      onClick={() => setActiveStep(idx)}
                      className={cn(
                          "px-4 py-3 rounded-xl text-base font-semibold border transition-all text-left flex items-center gap-3",
                          activeStep === idx
                           ? "bg-brand-deep-teal text-white border-brand-deep-teal shadow-md"
                           : "bg-white text-brand-secondary-text border-brand-soft-neutral hover:border-brand-soft-teal hover:bg-brand-warm-white"
                      )}
                  >
                        <div className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0",
                            activeStep === idx ? "bg-white text-brand-deep-teal" : "bg-brand-soft-neutral/50 text-brand-primary-text"
                        )}>
                            {idx + 1}
                        </div>
                        <span className="flex-1">{item.title}</span>
                  </button>
             ))}
        </div>

        {/* Active Content Area */}
        <div className="bg-white rounded-2xl border border-brand-soft-neutral p-8 md:p-12 shadow-sm relative overflow-hidden min-h-[300px] flex items-center">
            {/* Decorative background number */}
            <div className="absolute -right-8 -bottom-16 text-[200px] font-accent font-black text-brand-soft-neutral/30 pointer-events-none select-none leading-none">
                {activeStep + 1}
            </div>
            
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-full"
                >
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="text-sm font-bold tracking-widest uppercase text-brand-soft-teal mb-3">Phase {activeStep + 1}</div>
                            <h3 className="text-3xl font-medium text-brand-deep-teal mb-4 tracking-tight">{steps[activeStep].title}</h3>
                            <p className="text-brand-secondary-text text-lg leading-relaxed mb-6">
                                {steps[activeStep].desc}
                            </p>
                        </div>
                        <div className="bg-brand-warm-white p-6 rounded-xl border border-brand-soft-neutral/50">
                            <h4 className="text-base font-semibold uppercase tracking-widest text-brand-primary-text mb-4">What happens here</h4>
                            <ul className="space-y-4">
                                {steps[activeStep].details.map((detail, dIdx) => (
                                    <li key={dIdx} className="flex items-start gap-3 text-brand-secondary-text text-base">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0 mt-0.5" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
  );
}
