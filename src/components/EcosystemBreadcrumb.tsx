import React from 'react';
import { cn } from '../lib/utils';
import { Check } from 'lucide-react';

export interface EcosystemBreadcrumbProps {
    currentLevel: 1 | 2 | 3 | 4;
    theme?: 'dark' | 'light' | 'tint' | 'white';
    className?: string;
}

export const EcosystemBreadcrumb = ({ currentLevel, theme = 'light', className }: EcosystemBreadcrumbProps) => {
    const levels = [
        { num: 1, label: "Level 1", desc: "Practitioners Course", href: "/level-1" },
        { num: 2, label: "Level 2", desc: "Advance Practitioner", href: "/level-2" },
        { num: 3, label: "Level 3", desc: "Professional Practitioner", href: "/level-3" },
        { num: 4, label: "Level 4", desc: "Master Practitioner", href: "/level-4" }
    ];

    const isDark = theme === 'dark';

    return (
        <div className={cn("w-full py-4 flex flex-col items-start md:items-center", className)}>
            <div className="flex items-center justify-start md:justify-center w-full gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 hide-scrollbar md:flex-wrap">
                {levels.map((level, idx) => {
                    const isCompleted = level.num < currentLevel;
                    const isCurrent = level.num === currentLevel;

                    return (
                        <React.Fragment key={level.num}>
                            <a 
                                href={level.href}
                                className={cn(
                                    "flex items-center gap-2 md:gap-3 p-1.5 pr-4 md:px-4 md:py-2 rounded-full transition-colors shrink-0",
                                    isCurrent ? (isDark ? "bg-white/10 border border-white/20" : "bg-brand-structural-navy/5 border border-brand-structural-navy/10") : "hover:bg-brand-structural-navy/5",
                                    isCurrent && !isDark && "bg-white border border-brand-soft-neutral shadow-sm"
                                )}
                            >
                                <div className={cn(
                                    "w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all",
                                    isCompleted ? "bg-brand-soft-teal text-white" : 
                                    isCurrent ? (isDark ? "bg-brand-soft-teal text-white" : "bg-brand-structural-navy text-white") : 
                                    (isDark ? "bg-white/5 text-white/30" : "bg-brand-soft-neutral/30 text-brand-secondary-text shadow-inner")
                                )}>
                                    {isCompleted ? <Check className="w-3 h-3 md:w-4 md:h-4" /> : level.num}
                                </div>
                                <div className="flex flex-col">
                                    <span className={cn(
                                        "text-xs md:text-sm font-bold leading-none tracking-wide uppercase",
                                        isCurrent ? (isDark ? "text-white" : "text-brand-structural-navy") : 
                                        isCompleted ? (isDark ? "text-white/80" : "text-brand-deep-teal") : 
                                        (isDark ? "text-white/40" : "text-brand-secondary-text")
                                    )}>{level.label}</span>
                                    <span className={cn(
                                        "hidden md:block text-xs font-medium mt-0.5",
                                        isCurrent ? (isDark ? "text-white/70" : "text-brand-secondary-text") : 
                                        (isDark ? "text-white/30" : "text-brand-secondary-text/50")
                                    )}>{level.desc}</span>
                                </div>
                            </a>
                            {idx < levels.length - 1 && (
                                <div className={cn(
                                    "shrink-0 w-4 h-[1px] md:w-8 lg:w-12",
                                    isCompleted ? "bg-brand-soft-teal/50" : (isDark ? "bg-white/10" : "bg-brand-soft-neutral/50")
                                )} />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}
