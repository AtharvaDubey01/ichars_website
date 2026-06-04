import React from 'react';
import { Section, Heading, Text, Button } from './Blocks';
import { FadeIn } from './FadeIn';
import { Star, CheckCircle2, ArrowRight, PlayCircle, Video } from 'lucide-react';
import { cn } from '../lib/utils';
import { CheckList, CheckListItem } from './CheckList';
import { EcosystemBreadcrumb } from './EcosystemBreadcrumb';

export interface LevelHeroProps {
    badgeText: string;
    title: string;
    description: React.ReactNode;
    ratingText: React.ReactNode;
    enrollText: string;
    consultationText: string;
    videoImageUrl?: string;
    videoEmbedUrl?: string;
    videoBadgeLine1: string;
    videoBadgeLine2: string;
    videoBadgeIcon?: React.ReactNode;
    videoBadgeIconClass?: string;
    badgeColorClass?: string;
    dotColorClass?: string;
    gradientClass?: string;
    checklistItems?: (React.ReactNode | CheckListItem)[];
    theme?: 'tint' | 'dark' | 'white';
    currentLevel?: 1 | 2 | 3 | 4;
}

export const LevelHero = ({
    badgeText,
    title,
    description,
    ratingText,
    enrollText,
    consultationText,
    videoImageUrl,
    videoEmbedUrl,
    videoBadgeLine1,
    videoBadgeLine2,
    videoBadgeIcon = <Video className="w-6 h-6" />,
    videoBadgeIconClass = "bg-brand-soft-teal/10 text-brand-soft-teal",
    badgeColorClass = "bg-brand-soft-teal/10 text-brand-soft-teal",
    dotColorClass = "bg-brand-soft-teal",
    gradientClass = "bg-[radial-gradient(circle_at_100%_0%,#4A6B82_0%,transparent_50%)]",
    checklistItems = ["Safe & Secure", "7-Day Guarantee*"],
    theme = "tint",
    currentLevel
}: LevelHeroProps) => {
    const isDark = theme === 'dark';
    return (
        <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden" theme={theme}>
            <div className={cn("absolute inset-0 opacity-10 pointer-events-none", gradientClass)} />
            
            {currentLevel && (
                <div className="relative z-20 mb-8 md:mb-12 border-b border-brand-soft-neutral/20 pb-4">
                    <EcosystemBreadcrumb currentLevel={currentLevel} theme={theme === 'dark' ? 'dark' : 'light'} />
                </div>
            )}

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <FadeIn>
                    <div className={cn("text-[11px] font-bold tracking-widest uppercase mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full", badgeColorClass)}>
                        <span className={cn("w-2 h-2 rounded-full animate-pulse", dotColorClass)} />
                        {badgeText}
                    </div>
                    <Heading level={1} className={cn("mb-6 text-4xl lg:text-5xl leading-tight", isDark ? "text-white" : "text-brand-structural-navy")}>
                        {title}
                    </Heading>
                    <Text size="lg" className={cn("mb-8 font-light", isDark ? "text-white/80" : "text-brand-structural-navy")}>
                        {description}
                    </Text>
                    
                    <div className={cn("flex flex-wrap items-center gap-4 mb-8 p-4 rounded-xl border backdrop-blur-sm", isDark ? "bg-white/5 border-white/10" : "bg-white/60 border-brand-soft-neutral/50")}>
                        <div className="flex text-brand-accent-orange">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                        </div>
                        <span className={cn("text-base font-medium", isDark ? "text-white/80" : "text-brand-secondary-text")}>
                            {ratingText}
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button href="#enroll" className="px-8 py-4 w-full sm:w-auto text-lg">{enrollText}</Button>
                        <Button href="#consultation" variant="outline" className={cn("px-8 py-4 w-full sm:w-auto text-lg group", isDark ? "bg-white/10 text-white border-white/20 hover:bg-white/20" : "bg-white text-brand-structural-navy hover:text-brand-structural-navy border-brand-soft-neutral hover:bg-brand-warm-white")}>
                            {consultationText}
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                    
                    <CheckList 
                        items={checklistItems}
                        className="mt-8 flex flex-wrap items-center gap-6 space-y-0"
                        itemClassName={cn("items-center text-base font-medium gap-2 mb-0", isDark ? "text-white/70" : "text-brand-secondary-text")}
                        iconClassName="w-4 h-4 mt-0"
                    />
                </FadeIn>

                <FadeIn delay={0.2} className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group cursor-pointer border border-brand-soft-neutral bg-brand-structural-navy">
                        {videoEmbedUrl ? (
                            <iframe 
                                className="w-full h-full absolute inset-0"
                                src={videoEmbedUrl} 
                                title="Course Preview"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        ) : (
                            <>
                                <img 
                                    src={videoImageUrl} 
                                    alt="Classroom preview"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-brand-structural-navy/40 group-hover:bg-brand-structural-navy/30 transition-colors" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transition-transform">
                                        <PlayCircle className="w-10 h-10 text-white fill-brand-soft-teal/20" />
                                    </div>
                                    <span className="text-white font-medium tracking-wide drop-shadow-md">Watch Course Preview</span>
                                </div>
                            </>
                        )}
                    </div>
                    
                    {/* Floating Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-brand-soft-neutral flex items-center gap-4 animate-bounce-slow">
                        <div className={cn("p-3 rounded-full", videoBadgeIconClass)}>
                            {videoBadgeIcon}
                        </div>
                        <div>
                            <div className="text-base font-bold text-brand-structural-navy">{videoBadgeLine1}</div>
                            <div className="text-sm text-brand-secondary-text">{videoBadgeLine2}</div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </Section>
    );
};
