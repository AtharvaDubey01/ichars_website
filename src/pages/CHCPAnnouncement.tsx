import React from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { ArrowRight, BookOpen, Layers, Activity, ShieldCheck, Milestone } from 'lucide-react';

export function CHCPAnnouncement() {
    return (
        <React.Fragment>
            {/* HERO - Context */}
            <Section theme="tint" className="pt-32 pb-20 md:pt-40 md:pb-32 border-b border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-structural-navy/5 border border-brand-structural-navy/10 text-brand-structural-navy text-sm font-bold uppercase tracking-widest mb-8">
                        <Activity className="w-4 h-4 text-brand-soft-teal" />
                        Pathway Announcement
                    </div>
                    <Heading level={1} className="text-3xl md:text-5xl lg:text-6xl text-brand-structural-navy mb-6 tracking-tight leading-tight">
                        Expanding the Learning Journey
                    </Heading>
                    <Text size="lg" className="text-xl text-brand-secondary-text max-w-3xl mx-auto leading-relaxed">
                        For many years, ICHARS has focused on helping practitioners move beyond understanding concepts and techniques to developing clarity in how they think and respond in real situations. As our programs evolved, a new necessity emerged.
                    </Text>
                </div>
            </Section>

            {/* THE CONFLICT - Full width, generous negative space */}
            <Section theme="dark" className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <Heading level={2} className="text-2xl md:text-3xl text-white mb-8 font-light leading-relaxed">
                            Many participants completing our Coaching Diploma wanted to continue their journey into advanced psychodynamic concepts, but clinical restrictions prevented access.
                        </Heading>
                        <div className="w-16 h-1 bg-brand-soft-teal mx-auto mb-8"></div>
                        <Text className="text-lg text-white/80 max-w-2xl mx-auto">
                            This created an unintended situation: highly committed non-clinical professionals had no structured pathway to deepen their change-work competencies, while similar external programs lacked our integrated approach.
                        </Text>
                    </FadeIn>
                </div>
            </Section>

            {/* RESOLUTION & NEW PATHWAY */}
            <Section theme="white" className="py-24 md:py-32 border-b border-brand-soft-neutral/30 overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 relative">
                    <FadeIn>
                        <div className="text-center mb-20 relative">
                            {/* Subtle Motifs */}
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block opacity-[0.03]">
                                <Activity className="w-48 h-48 text-brand-structural-navy" />
                            </div>
                            <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block opacity-[0.03]">
                                <Layers className="w-48 h-48 text-brand-structural-navy" />
                            </div>
                            
                            <div className="inline-flex items-center justify-center gap-3 mb-6 w-full">
                                <div className="w-12 h-px bg-brand-soft-teal"></div>
                                <span className="uppercase tracking-widest text-sm font-bold text-brand-secondary-text">A New Direction</span>
                                <div className="w-12 h-px bg-brand-soft-teal"></div>
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-serif text-brand-structural-navy tracking-tight leading-tight mb-8">
                                Cognitive Hypnotic <br />
                                <span className="text-brand-deep-teal font-medium">Change Practitioner (CHCP)</span>
                            </h2>
                            <Text className="text-xl md:text-2xl text-brand-secondary-text max-w-3xl mx-auto font-light leading-relaxed">
                                Enabling professionals from diverse backgrounds to master advanced frameworks, structured thinking, and intervention design.
                            </Text>
                        </div>

                        {/* Pathway Architecture Visual */}
                        <div className="max-w-5xl mx-auto relative">
                            {/* Desktop connector line */}
                            <div className="hidden md:block absolute top-[140px] left-1/2 w-8 h-px bg-brand-soft-neutral/50 -translate-x-1/2"></div>
                            
                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                {/* Clinical Pathway */}
                                <div className="bg-brand-structural-navy text-white rounded-3xl p-10 flex flex-col items-center text-center shadow-xl relative overflow-hidden">
                                     <div className="absolute top-0 right-0 p-8 opacity-[0.04]">
                                        <Layers className="w-32 h-32" />
                                    </div>
                                    <h4 className="text-base uppercase tracking-widest font-bold text-brand-soft-teal mb-2">Clinical Pathway</h4>
                                    <p className="text-lg font-light text-white/80 mb-10 pb-6 border-b border-white/10 w-full relative z-10">For psychologists, psychiatrists & therapists</p>
                                    
                                    <div className="flex flex-col items-center w-full max-w-xs relative space-y-6 font-mono text-base">
                                        {/* Connecting Line behind items */}
                                        <div className="absolute top-4 bottom-4 left-1/2 w-px bg-brand-soft-teal/30 -translate-x-1/2 z-0"></div>
                                        
                                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 w-full z-10 shadow-sm transition-transform hover:scale-105">CHC Diploma</div>
                                        <div className="text-brand-soft-teal z-10"><ArrowRight className="w-5 h-5 rotate-90" /></div>
                                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 w-full z-10 shadow-sm transition-transform hover:scale-105">CHP Level 3</div>
                                        <div className="text-brand-soft-teal z-10"><ArrowRight className="w-5 h-5 rotate-90" /></div>
                                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 w-full z-10 shadow-sm transition-transform hover:scale-105">CHP Level 4</div>
                                    </div>
                                    
                                    <div className="mt-12 pt-8 border-t border-white/10 w-full relative z-10">
                                        <div className="text-xs uppercase tracking-widest text-white/60 font-bold mb-3">Results In</div>
                                        <div className="text-2xl font-serif text-white leading-tight">Cognitive Hypnotic Psychotherapist</div>
                                    </div>
                                </div>

                                {/* Structural Change Pathway */}
                                <div className="bg-brand-soft-neutral/10 text-brand-structural-navy rounded-3xl p-10 flex flex-col items-center text-center border border-brand-soft-neutral/50 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 p-8 opacity-[0.03]">
                                        <Activity className="w-32 h-32" />
                                    </div>
                                    <h4 className="text-base uppercase tracking-widest font-bold text-brand-deep-teal mb-2">Structural Change Pathway</h4>
                                    <p className="text-lg font-light text-brand-secondary-text mb-10 pb-6 border-b border-brand-soft-neutral/30 w-full relative z-10">For coaches, educators, healers & leaders</p>
                                    
                                    <div className="flex flex-col items-center w-full max-w-xs relative space-y-6 font-mono text-base h-full">
                                        {/* Connecting Line behind items */}
                                        <div className="absolute top-4 bottom-auto h-32 left-1/2 w-px bg-brand-deep-teal/20 -translate-x-1/2 z-0"></div>
                                        
                                        <div className="bg-white px-6 py-4 rounded-xl border border-brand-soft-neutral w-full z-10 shadow-md transition-transform hover:scale-105">CHC Diploma</div>
                                        <div className="text-brand-deep-teal z-10"><ArrowRight className="w-5 h-5 rotate-90" /></div>
                                        <div className="bg-brand-deep-teal text-white px-6 py-4 rounded-xl border border-brand-deep-teal w-full z-10 shadow-lg transition-transform hover:scale-105">CHCP Pathway</div>
                                        
                                    </div>
                                    
                                    <div className="mt-auto pt-8 border-t border-brand-soft-neutral/30 w-full relative z-10">
                                        <div className="text-xs uppercase tracking-widest text-brand-secondary-text font-bold mb-3">Results In</div>
                                        <div className="text-2xl font-serif text-brand-deep-teal font-medium leading-tight">Cognitive Hypnotic Change Practitioner</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </FadeIn>
                </div>
            </Section>

            {/* MERGED: CORE PRINCIPLES & ETHICS - Asymmetric layout */}
            <Section theme="tint" className="py-24 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <FadeIn>
                        <div className="grid md:grid-cols-12 gap-16 items-start">
                            {/* Left Column: Bold Statement */}
                            <div className="md:col-span-5 md:sticky md:top-32">
                                <ShieldCheck className="w-12 h-12 text-brand-soft-teal mb-8" />
                                <h2 className="text-3xl md:text-5xl text-brand-structural-navy font-serif tracking-tight leading-tight mb-8">
                                    Why we are opening the pathway to non-clinical professionals.
                                </h2>
                                <div className="border-l-4 border-brand-soft-teal pl-6 py-2">
                                    <p className="text-xl text-brand-deep-teal font-medium italic leading-relaxed">
                                        "The ability to think clearly has profound value across all helping professions."
                                    </p>
                                </div>
                            </div>
                            
                            {/* Right Column: Explanatory Text */}
                            <div className="md:col-span-7 space-y-16">
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-structural-navy mb-6 flex items-center gap-4">
                                        <span className="w-12 h-px bg-brand-soft-teal block"></span>
                                        Democratizing Change-Work
                                    </h3>
                                    <p className="text-brand-secondary-text leading-relaxed text-xl mb-4 font-light">
                                        We believe that learning how to understand human patterns, facilitate change, and think clearly in complex situations should not be limited only to those pursuing psychotherapy. 
                                    </p>
                                    <p className="text-brand-secondary-text leading-relaxed text-lg pb-12 border-b border-brand-soft-neutral/50">
                                        While professional titles may differ, structural thinking is universally applicable for anyone guiding human transformation—whether in coaching, education, or leadership.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-brand-structural-navy mb-6 flex items-center gap-4">
                                        <span className="w-12 h-px bg-brand-soft-teal block"></span>
                                        Preserving Clinical Boundaries
                                    </h3>
                                    <p className="text-brand-secondary-text leading-relaxed text-lg">
                                        Our commitment to professionalism remains absolute. The <strong>Cognitive Hypnotic Psychotherapy</strong> designation will continue to be strictly reserved for individuals meeting clinical mental health eligibility. The CHCP pathway preserves this integrity while opening a specialized advanced track for diverse professionals.
                                    </p>
                                </div>
                                
                                <div className="pt-12 border-t border-brand-soft-neutral/30">
                                    <p className="text-2xl text-brand-structural-navy font-serif italic font-light leading-relaxed mb-10">
                                        "We look forward to supporting more practitioners in continuing their growth, developing deeper clarity, and creating meaningful change in the lives of the people they serve."
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <Button href="#chp" size="lg">Explore Certification Pathways</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

        </React.Fragment>
    );
}
