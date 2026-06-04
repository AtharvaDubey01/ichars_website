import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { FadeIn } from './FadeIn';

export interface CurriculumModule {
    title: string;
    icon: React.ReactNode;
    topics: string[];
}

interface CurriculumAccordionProps {
    curriculum: CurriculumModule[];
    accentColorClass?: string; // e.g. "bg-brand-soft-teal"
    isDark?: boolean;
}

export const CurriculumAccordion = ({ curriculum, accentColorClass = "bg-brand-soft-teal", isDark = false }: CurriculumAccordionProps) => {
    const [activeModule, setActiveModule] = useState<number | null>(0);

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            {curriculum.map((module, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                    <div className={cn("border rounded-2xl overflow-hidden shadow-sm transition-colors", isDark ? "bg-white/5 border-white/10 hover:border-white/20" : "bg-white border-brand-soft-neutral hover:border-brand-soft-teal/30")}>
                        <button
                            className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                            onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                            aria-expanded={activeModule === idx}
                            aria-controls={`module-content-${idx}`}
                        >
                            <div className="flex items-center gap-4 text-left">
                                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0", activeModule === idx ? `${accentColorClass} text-white` : (isDark ? "bg-white/10 text-brand-soft-teal" : "bg-brand-warm-white text-brand-soft-teal shadow-sm"))}>
                                    {module.icon}
                                </div>
                                <span className={cn("font-bold text-lg", activeModule === idx ? (isDark ? "text-white" : "text-brand-deep-teal") : (isDark ? "text-white/80" : "text-brand-structural-navy"))}>
                                    {module.title}
                                </span>
                            </div>
                            <div className={cn("shrink-0 ml-4", isDark ? "text-white/50" : "text-brand-secondary-text")}>
                                {activeModule === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </div>
                        </button>
                        
                        <div id={`module-content-${idx}`} className={cn("px-6 overflow-hidden transition-all duration-300 ease-in-out", activeModule === idx ? "max-h-[800px] pb-6 opacity-100" : "max-h-0 opacity-0")}>
                            <div className="pl-14">
                                <ul className={cn("space-y-3 border-l-2 pl-4 py-2", isDark ? "border-white/10" : "border-brand-soft-neutral/50")}>
                                    {module.topics.map((topic, i) => (
                                        <li key={i} className={cn("flex items-start gap-3 text-[15px] leading-relaxed", isDark ? "text-white/70" : "text-brand-secondary-text")}>
                                            <span className={cn("w-1.5 h-1.5 rounded-full shrink-0 mt-2", isDark ? "bg-white/30" : "bg-brand-soft-teal/50")} />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    );
};
