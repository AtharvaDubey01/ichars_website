import { useState } from 'react';
import { Section, Heading, Text, Button, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { 
    ArrowRight, 
    ArrowDown,
    BookOpen,
    Eye,
    MessageSquare,
    Users,
    Activity,
    Compass,
    CheckCircle2,
    PlayCircle,
    LayoutTemplate,
    Network,
    Quote
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export const Internship = () => {
    return (
        <div className="bg-brand-warm-white text-brand-primary-text">
            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-warm-white relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <FadeIn>
                        <div className="flex flex-wrap items-center gap-3 justify-center mb-6">
                            <span className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase bg-brand-soft-teal/10 px-3 py-1.5 rounded-full border border-brand-soft-teal/20">Free Online Internship</span>
                            <span className="text-xs font-bold tracking-widest text-brand-structural-navy uppercase bg-white px-3 py-1.5 rounded-full border border-brand-soft-neutral/50 shadow-sm">6 Weeks • 60 Hours</span>
                            <span className="text-xs font-bold tracking-widest text-brand-structural-navy uppercase bg-white px-3 py-1.5 rounded-full border border-brand-soft-neutral/50 shadow-sm">For Psychology Students</span>
                        </div>
                        <Heading level={1} className="text-brand-deep-teal mb-6">
                            Bridge the gap between academic theory<br/>
                            <span className="text-brand-structural-navy font-medium text-3xl md:text-5xl mt-4 block">and integrated real-world application.</span>
                        </Heading>
                        <Text size="lg" className="text-brand-secondary-text mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Centered on <strong>Eclectic Psychotherapy</strong>, this 6-week program teaches you how to combine various therapeutic approaches into a single, unified, and holistic framework to offer comprehensive treatment.
                        </Text>
                    </FadeIn>

                    {/* Integrated Video Component */}
                    <FadeIn delay={0.2} className="w-full max-w-3xl mx-auto mb-10 w-full">
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[16/9] bg-brand-warm-white rounded-2xl border border-brand-soft-neutral/50 shadow-sm overflow-hidden flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-105">
                                    <div className="w-16 h-16 rounded-full bg-brand-structural-navy text-white shadow-md flex items-center justify-center group-hover:bg-brand-soft-teal transition-colors duration-300">
                                        <PlayCircle className="w-8 h-8 ml-1" />
                                    </div>
                                    <span className="text-base font-bold text-brand-structural-navy tracking-widest uppercase">Watch Overview</span>
                                </div>
                                <div className="absolute bottom-4 right-6 text-xs font-mono text-brand-secondary-text/80 uppercase tracking-widest">
                                    03:45
                                </div>
                                <div className="absolute bottom-4 left-6 text-xs font-mono text-brand-secondary-text/80 uppercase tracking-widest hidden sm:block">
                                    Internship Brief
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. THE PARADIGM SHIFT (Consolidated Focus & Why Pursue It) */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">The Paradigm Shift: Eclectic Mastery</Heading>
                    <Heading level={3} className="text-xl md:text-2xl text-brand-structural-navy font-light max-w-3xl mx-auto leading-relaxed">
                        Transition from viewing isolated psychological models to navigating a systematic, unified framework. 
                    </Heading>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    {/* The Problem & Solution Column */}
                    <div className="space-y-8">
                        <div className="bg-brand-warm-white p-8 rounded-3xl border border-brand-soft-neutral/50">
                            <span className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase block mb-4">The Academic Gap</span>
                            <Text className="text-brand-structural-navy mb-6 text-lg font-medium leading-snug">
                                University education offers thorough theory but rarely teaches dynamic, real-time application.
                            </Text>
                            <Text className="text-brand-secondary-text mb-0 text-base">
                                Rather than viewing psychological schools of thought in isolation, this program trains you to see a client holistically—recognizing cognitive distortions, behavioral habits, and psychodynamic defense mechanisms as interconnected layers.
                            </Text>
                        </div>
                        <div className="pl-8 border-l-2 border-brand-soft-teal">
                            <span className="font-bold text-brand-structural-navy block mb-2 text-lg">Truly Client-Centered</span>
                            <Text className="text-base text-brand-secondary-text mb-0">Build the flexibility to integrate diverse tools rather than forcing the individual to fit a single therapeutic model.</Text>
                        </div>
                    </div>
                    
                    {/* The 3 Pillars of the Shift */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-brand-soft-neutral/40 shadow-sm flex flex-col h-full hover:border-brand-soft-teal/40 transition-colors">
                            <Compass className="w-6 h-6 text-brand-soft-teal mb-5" />
                            <span className="font-bold text-brand-structural-navy block mb-3 text-lg">Structured Therapeutic Thinking</span>
                            <Text className="text-base text-brand-secondary-text mb-0">Gain a systematic cognitive roadmap to transition smoothly from unstructured data gathering to clear, clinical decision-making without "clinical overwhelm".</Text>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-brand-soft-neutral/40 shadow-sm flex flex-col h-full hover:border-brand-soft-teal/40 transition-colors">
                            <Network className="w-6 h-6 text-brand-soft-teal mb-5" />
                            <span className="font-bold text-brand-structural-navy block mb-3 text-lg">Master "De-Layering"</span>
                            <Text className="text-base text-brand-secondary-text mb-0">Train to peel back the layers of a presenting problem, structurally untangling the conscious hindrances from unconscious drives.</Text>
                        </div>
                        <div className="bg-brand-structural-navy text-white p-8 rounded-2xl shadow-lg sm:col-span-2 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 shrink-0 flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-brand-soft-teal" />
                            </div>
                            <div>
                                <span className="font-bold text-white block mb-2 text-lg text-center sm:text-left">Active Recall via Knowledge Synthesis</span>
                                <Text className="text-base text-white/70 mb-0 text-center sm:text-left">By translating complex theories into visual social media formats, you internalize material deeply while building modern digital communication skills.</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. THE ECOSYSTEM: WHAT IT INCLUDES */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">Program Architecture</Heading>
                    <Text className="text-lg text-brand-secondary-text">A 60-hour immersive ecosystem demanding ~10 hours of weekly engagement.</Text>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {/* Main Pillar: Curriculum */}
                    <div className="md:col-span-2 bg-white p-10 rounded-3xl border border-brand-soft-neutral/40 shadow-sm">
                        <div className="flex items-center gap-4 mb-8">
                            <LayoutTemplate className="w-8 h-8 text-brand-soft-teal" />
                            <Heading level={3} className="text-2xl text-brand-structural-navy mb-0">The 4-Step Clinical Framework</Heading>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <Text className="text-base font-bold text-brand-structural-navy mb-4 uppercase tracking-wider">Methodology</Text>
                                <ul className="space-y-4">
                                    <li className="flex gap-3 text-base text-brand-secondary-text"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> Identify the client’s presenting problem.</li>
                                    <li className="flex gap-3 text-base text-brand-secondary-text"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> Define clear, desired behavioral outcomes.</li>
                                    <li className="flex gap-3 text-base text-brand-secondary-text"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> De-layer core psychological hindrances.</li>
                                    <li className="flex gap-3 text-base text-brand-secondary-text"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> Systematically apply integrated techniques.</li>
                                </ul>
                            </div>
                            <div>
                                <Text className="text-base font-bold text-brand-structural-navy mb-4 uppercase tracking-wider">Integrated Modalities</Text>
                                <div className="flex flex-wrap gap-2">
                                    {["Cognitive", "Behavioural", "Humanistic", "Psychodynamics", "Hypnosis", "NLP", "Mindfulness", "Metaphors"].map((tag, i) => (
                                        <span key={i} className="text-sm bg-brand-warm-white border border-brand-soft-neutral/60 px-3 py-1.5 rounded-md text-brand-structural-navy text-center">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary: Weekly Rhythm */}
                    <div className="bg-brand-structural-navy text-white p-10 rounded-3xl border border-brand-structural-depth shadow-lg flex flex-col justify-between">
                        <div>
                            <Activity className="w-8 h-8 text-brand-soft-teal mb-6" />
                            <Heading level={3} className="text-xl mb-6 text-white">Weekly Rhythm</Heading>
                            <ul className="space-y-5">
                                <li>
                                    <span className="font-bold text-white text-base block">Video Learning</span>
                                    <span className="text-sm text-white/70">4-5 hours of foundational modules.</span>
                                </li>
                                <li>
                                    <span className="font-bold text-white text-base block">Interactive Mentorship</span>
                                    <span className="text-sm text-white/70">Live Q&A and active case discussions.</span>
                                </li>
                                <li>
                                    <span className="font-bold text-white text-base block">Synthesis & Final</span>
                                    <span className="text-sm text-white/70">Social media task creations & presentation.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Tertiary Full Width: Deliverables */}
                    <div className="md:col-span-3 bg-brand-soft-teal/5 p-8 rounded-3xl border border-brand-soft-teal/20 flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                                <CheckCircle2 className="w-6 h-6 text-brand-soft-teal" />
                            </div>
                            <div>
                                <span className="font-bold text-brand-structural-navy block text-lg mb-1">Dual Certification & Access</span>
                                <span className="text-base text-brand-secondary-text">Earn independent <em>Course Completion</em> and <em>Internship Completion</em> certificates, plus ongoing material access.</span>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-deep-teal bg-white px-4 py-2 rounded-full border border-brand-soft-teal/30">Free Open Access</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. WHAT IT DOES NOT INCLUDE */}
            <Section theme="dark" className="bg-brand-deep-teal">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Setting Clear Expectations</div>
                        <Heading level={2} className="text-white mb-6">What the Internship<br/>does NOT include</Heading>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                            <span className="text-base font-bold text-white block mb-2 uppercase tracking-widest">No Direct Client Work</span>
                            <span className="text-base text-white/70 block leading-relaxed">This foundational internship focuses entirely on conceptual mastery and practical application processes. You will not work directly with live clients or manage active caseloads (reserved for extended training programs).</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                            <span className="text-base font-bold text-white block mb-2 uppercase tracking-widest">No Financial Cost</span>
                            <span className="text-base text-white/70 block leading-relaxed">It does not require an enrollment or tuition fee for accepted students who follow the onboarding steps.</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. ONBOARDING & ELIGIBILITY */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">Alignment & Onboarding</Heading>
                    <Text className="text-lg text-brand-secondary-text max-w-2xl mx-auto">
                        A rigorous, structured alignment process to guarantee deep commitment. Requires a minimum of a <strong className="text-brand-structural-navy">2nd-year BA/BSc in Psychology</strong> to participate.
                    </Text>
                </div>

                {/* Phased Pipeline representation instead of a 7-step scroll */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                    {/* Phase 1 */}
                    <div className="bg-brand-warm-white border border-brand-soft-neutral/50 rounded-2xl p-8">
                        <span className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6 block">01 / Initiation</span>
                        <div className="space-y-6">
                            <div>
                                <span className="font-bold text-brand-structural-navy block mb-1">1. Initial Application</span>
                                <span className="text-base text-brand-secondary-text leading-relaxed">Click "Apply Now" to begin the formal process.</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-structural-navy block mb-1">2. Cohort Integration</span>
                                <span className="text-base text-brand-secondary-text leading-relaxed">Enter the dedicated WhatsApp group securely upon applying.</span>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="bg-brand-warm-white border border-brand-soft-neutral/50 rounded-2xl p-8">
                        <span className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6 block">02 / Alignment</span>
                        <div className="space-y-6">
                            <div>
                                <span className="font-bold text-brand-structural-navy block mb-1">3. Information Webinar</span>
                                <span className="text-base text-brand-secondary-text leading-relaxed">Understand the full scope and responsibilities.</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-structural-navy block mb-1">4. Operational Orientation</span>
                                <span className="text-base text-brand-secondary-text leading-relaxed">Review the rigorous 6-week curriculum structure.</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-structural-navy block mb-1">5. Formal Confirmation</span>
                                <span className="text-base text-brand-secondary-text leading-relaxed">Commit explicitly to the 60-hour program.</span>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="bg-white border-2 border-brand-soft-teal/20 shadow-sm rounded-2xl p-8">
                        <span className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6 block">03 / Access</span>
                        <div className="space-y-6">
                            <div>
                                <span className="font-bold text-brand-structural-navy block mb-1">6. Official Onboarding</span>
                                <span className="text-base text-brand-secondary-text leading-relaxed">Gain open access to the interactive learning environment.</span>
                            </div>
                            <div>
                                <span className="font-bold text-brand-structural-navy block mb-1">7. Verification</span>
                                <span className="text-base text-brand-secondary-text leading-relaxed">Submit academic records to finalize internship standing.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 7. NEXT STEP */}
            <Section theme="dark" className="text-center relative overflow-hidden py-32">
                <div className="max-w-3xl mx-auto relative z-10">
                    <FadeIn>
                        <Heading level={2} className="text-white mb-6">Start building your clinical foundations</Heading>
                        <Text className="text-lg text-white/80 mb-10 font-light leading-relaxed">
                            Develop the ability to synthesize unique psychological frameworks and transform theoretical knowledge into actionable, integrative conversational skills.
                        </Text>
                        
                        <div className="flex justify-center">
                            <Button href="#apply-internship" className="w-full sm:w-auto px-10 py-5 text-lg shadow-lg shadow-brand-soft-teal/20">Apply for Free Internship</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};
