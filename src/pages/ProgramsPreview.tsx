import React, { useState } from 'react';
import { Section, Heading, Text, Grid, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { VideoTestimonialGrid } from '../components/VideoTestimonialGrid';
import { 
  ArrowRight, Layers, Users, GraduationCap, Compass, Network, 
  BrainCircuit, Target, Map, BookOpen, Lightbulb, GitMerge, 
  FileCheck, CheckCircle2, MessageSquare, Crosshair, Megaphone, 
  Sparkles, Check, Play 
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function ProgramsPreview() {
    const [activeCourse, setActiveCourse] = useState<string | null>(null);
    const [activeStage, setActiveStage] = useState<number>(1);

    const scrollToStage = (stageId: string) => {
        const el = document.getElementById(stageId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="bg-brand-warm-white text-brand-primary-text min-h-screen">
            {/* HERO SECTION - Refined and Calm */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-warm-white overflow-hidden">
                <div className="mx-auto w-full max-w-4xl px-6 relative z-10 text-center flex flex-col items-center">
                    <FadeIn>
                        <div className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase mb-6 font-mono">The ICHARS Ecosystem</div>
                        <Heading level={1} className="text-brand-deep-teal mb-6 text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight leading-tight">
                            You are not choosing a course.<br />
                            <span className="text-brand-structural-navy font-medium md:text-5xl lg:text-6xl">You are building clinical structure.</span>
                        </Heading>
                        <Text className="text-lg md:text-xl text-brand-secondary-text max-w-2xl mx-auto leading-relaxed mb-12">
                            Our training ecosystem integrates independent, self-paced learning with collaborative, guided application to move you from theoretical observation to confident practitioner.
                        </Text>
                        
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-brand-structural-navy font-medium border-t border-brand-soft-neutral/40 pt-8 max-w-2xl mx-auto">
                            <span className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest font-mono mr-2">Ecosystem Map:</span>
                            <a href="#environments" className="hover:text-brand-deep-teal transition-colors">1. Pacing</a>
                            <a href="#programs" className="hover:text-brand-deep-teal transition-colors">2. Core Programs</a>
                            <a href="#targeted" className="hover:text-brand-deep-teal transition-colors">3. Targeted Skill-Building</a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* SECTION 2: THE TWO LEARNING ENVIRONMENTS */}
            <Section theme="tint" id="environments" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase mb-4 font-mono">Pacing Mechanisms</div>
                    <Heading level={2} className="text-brand-deep-teal mb-6">Two Primary Learning Environments</Heading>
                    <Text className="text-lg">
                        Different practitioners develop differently. Rather than forcing you into a single standard format, our ecosystem is built around two supportive pathways.
                    </Text>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-soft-neutral/50 border border-brand-soft-neutral/60 rounded-3xl overflow-hidden shadow-sm">
                    {/* Flexible Programs */}
                    <div className="bg-white p-10 lg:p-14 flex flex-col group">
                        <div className="text-xs font-mono font-bold text-brand-secondary-text tracking-widest uppercase mb-8 pb-3 border-b border-brand-soft-neutral/30 flex items-center justify-between">
                            <span>Flexible Self-Paced Track</span>
                            <Layers className="w-4 h-4" />
                        </div>
                        <Heading level={3} className="text-2xl mb-4 text-brand-structural-navy">Independent & Reflection-Oriented</Heading>
                        <Text className="text-brand-secondary-text text-base leading-relaxed mb-8 flex-1">
                            Access our core curriculum on a self-paced track. Best suited for practitioners who prefer dynamic schedule integration, independent reflection, and self-directed developmental intervals without losing access to structured curriculum.
                        </Text>
                        <ul className="space-y-4 font-medium">
                            <li className="flex items-start gap-3 text-brand-structural-navy text-base">
                                <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                <span>Structured self-paced modules & assessments</span>
                            </li>
                            <li className="flex items-start gap-3 text-brand-structural-navy text-base">
                                <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                <span>Flexible level transition times based on your own schedule</span>
                            </li>
                        </ul>
                    </div>

                    {/* Guided Cohorts */}
                    <div className="bg-brand-structural-navy text-white p-10 lg:p-14 relative overflow-hidden flex flex-col group">
                        <div className="text-xs font-mono font-bold text-brand-soft-teal tracking-widest uppercase mb-8 pb-3 border-b border-white/10 relative z-10 flex items-center justify-between">
                            <span>Interactive Guided Cohorts</span>
                            <Users className="w-4 h-4" />
                        </div>
                        <Heading level={3} className="text-2xl mb-4 relative z-10">Collaborative & Application-Focused</Heading>
                        <Text className="text-white/80 text-base leading-relaxed mb-8 relative z-10 flex-1">
                            Learn in real-time alongside other professional practitioners. Best suited for those who benefit from collaborative discussions, interactive live classes, case analyses, and instant direct mentor feedback.
                        </Text>
                        <ul className="space-y-4 font-medium relative z-10">
                            <li className="flex items-start gap-3 text-white text-base">
                                <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                <span>Live interactive case discussions and peer review</span>
                            </li>
                            <li className="flex items-start gap-3 text-white text-base">
                                <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                <span>Real-time supervised sessions and instant mentor feedback</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>

            {/* SECTION 3: CORE PROGRAMS DIRECTORY */}
            <Section theme="white" id="programs">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase mb-4 font-mono">Curriculum</div>
                    <Heading level={2} className="text-brand-deep-teal mb-6">Structured Program Directory</Heading>
                    <Text className="text-lg">
                        Select either our foundational common entry block, commit fully to a comprehensive diploma path, or engage in targeted clinical skill-building.
                    </Text>
                </div>

                {/* NON-CLINICAL PRACTITIONERS CALLOUT */}
                <div className="max-w-5xl mx-auto mb-16">
                    <FadeIn>
                        <div className="bg-brand-soft-neutral/10 border border-brand-soft-neutral/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm relative overflow-hidden">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-brand-soft-neutral/30 shadow-sm">
                                <Compass className="w-6 h-6 text-brand-soft-teal" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-lg font-bold text-brand-structural-navy mb-1">Ecosystem Expansion: The Advanced Non-Clinical Pathway</h3>
                                <p className="text-brand-secondary-text text-base mb-4 md:mb-0">
                                    Our practitioner ecosystem has expanded. Professionals guiding human transformation without a clinical background now have a dedicated advanced route beyond Level 2.
                                </p>
                            </div>
                            <Button href="#chcp-announcement" variant="outline" className="border-brand-soft-teal text-brand-deep-teal hover:bg-brand-soft-teal hover:text-white shrink-0 bg-white">
                                Explore CHCP Pathway <ArrowRight className="inline-block w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Sub-Section A: Diplomas & Foundations */}
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                    {/* Level 1 Build Block */}
                    <FadeIn>
                        <div className="bg-brand-warm-white/50 border border-brand-soft-neutral shadow-sm rounded-3xl p-8 flex flex-col h-full group hover:border-brand-soft-teal/30 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-white text-brand-deep-teal rounded-xl flex items-center justify-center mb-6 shadow-sm border border-brand-soft-neutral/30">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-3">The Common Entry Foundation</div>
                            <Heading level={3} className="text-2xl mb-4">Start with Level 1</Heading>
                            <Text className="text-base mb-8 flex-1 leading-relaxed text-brand-secondary-text">
                                Want to evaluate our framework before a full diploma? Start with <strong className="text-brand-structural-navy">Level 1: Practitioners Course</strong>. 
                                This is the mandatory, shared foundational block for both Coaching (CHC) and Clinical Psychotherapy (CHP) tracks.
                            </Text>
                            <Button href="#level-1" className="w-full">Explore Level 1 Details</Button>
                        </div>
                    </FadeIn>

                    {/* Full Diplomas */}
                    <FadeIn delay={0.1}>
                        <div className="bg-brand-structural-navy border border-brand-structural-navy shadow-lg rounded-3xl p-8 flex flex-col h-full text-white group hover:shadow-xl transition-all relative overflow-hidden">
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                    <BrainCircuit className="w-6 h-6" />
                                </div>
                                <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-3">The Complete Growth Pathway</div>
                                <Heading level={3} className="text-2xl mb-4 text-white">Enroll in a Full Diploma</Heading>
                                <Text className="text-base text-white/80 mb-8 flex-1 leading-relaxed">
                                    The comprehensive Diploma program leading to CHP or CHCP Certification.
                                </Text>
                                
                                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl flex flex-col">
                                    <a href="#chc" className="group/link flex items-center justify-between p-4 hover:bg-white/10 transition-colors border-b border-white/10">
                                        <div>
                                            <div className="font-bold text-white text-base">CHC Diploma</div>
                                            <div className="text-sm text-white/60 mt-1">For Coaches & HR (Levels 1-2)</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-brand-soft-teal group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                    <a href="#chp" className="group/link flex items-center justify-between p-4 hover:bg-white/10 transition-colors">
                                        <div>
                                            <div className="font-bold text-white text-base">CHP Diploma</div>
                                            <div className="text-sm text-white/60 mt-1">For Psychologists & Therapists (Levels 1-4)</div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-brand-soft-teal group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Sub-Section B: Targeted Skill Building */}
                <div id="targeted" className="max-w-5xl mx-auto border-t border-brand-soft-neutral/50 pt-16 mt-8">
                    <div className="text-center mb-10">
                        <Heading level={3} className="text-brand-structural-navy mb-3">Targeted Skill-Building</Heading>
                        <Text className="text-brand-secondary-text max-w-2xl mx-auto text-base">Focused, self-contained methodologies for practicing professionals looking to master specific interaction techniques.</Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Eclectic Psychotherapy", desc: "Integrate diverse methodologies into a unified clinical framework.", icon: <BookOpen className="w-4 h-4" /> },
                            { title: "Conversational Hypnosis", desc: "Apply coaching suggestion structures organically in rapid conversations.", icon: <MessageSquare className="w-4 h-4" /> },
                            { title: "NLP Meta Model", desc: "Master exact linguistic questioning to locate deep problem boundaries.", icon: <Crosshair className="w-4 h-4" /> },
                            { title: "Metaphors in Coaching", desc: "Construct symbolic stories to bypass rigid cognitive resistance.", icon: <Compass className="w-4 h-4" /> },
                            { title: "SOFT SEA Brand Building", desc: "A structural intake framework to establish niche brand clarity.", icon: <Megaphone className="w-4 h-4" /> }
                        ].map((course, i) => (
                            <FadeIn key={i} delay={i * 0.05} className="bg-brand-warm-white/40 border border-brand-soft-neutral/70 rounded-2xl p-6 hover:shadow-sm hover:border-brand-soft-teal/30 transition-all">
                                <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-brand-soft-neutral/50 text-brand-soft-teal flex items-center justify-center mb-4">
                                    {course.icon}
                                </div>
                                <Heading level={4} className="text-[15px] font-bold text-brand-structural-navy mb-2 leading-snug">{course.title}</Heading>
                                <Text className="text-[13px] text-brand-secondary-text leading-relaxed">{course.desc}</Text>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            

            {/* SECTION 6: EXTENDED POST-TRAINING SUPPORT */}
            <Section theme="neutral" id="continuity" className="border-y border-brand-soft-neutral/30 bg-brand-warm-white">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-4 font-mono">Ecosystem Support</div>
                    <Heading level={2} className="text-brand-deep-teal mb-6">Extended Support & Lifelong Reflection</Heading>
                    <Text className="text-lg max-w-2xl mx-auto text-brand-secondary-text">
                        The real challenges of a practitioner show up after the classroom session ends. Our ecosystem is custom-designed to prevent isolation when navigating actual complex client cases.
                    </Text>
                </div>

                <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden">
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <Heading level={4} className="text-brand-structural-navy mb-4 text-xl font-bold">Never Practice in Isolation</Heading>
                            <Text className="text-brand-secondary-text mb-6 text-base leading-relaxed">
                                We believe a training provider's responsibility is to provide safe, ongoing integration infrastructure. We protect your professional health with long-term resources:
                            </Text>
                            <ul className="space-y-4">
                                {[
                                    "Ongoing masterclass case-discussion sessions",
                                    "Regular peer reflection and co-supervision cohorts",
                                    "Free access to curriculum framework updates",
                                    "Private diagnostic databases and research libraries"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-base font-medium text-brand-structural-navy items-start">
                                        <FileCheck className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-brand-structural-navy text-white p-8 rounded-2xl shadow-lg border border-brand-soft-neutral/20 flex flex-col justify-center min-h-[220px]">
                            <Heading level={4} className="text-brand-soft-teal mb-4 font-bold text-center text-lg">Our Long-Term Philosophy</Heading>
                            <Text className="text-white/80 italic text-sm leading-relaxed text-center">
                                "The ecosystem model means you are not buying access to closed video galleries or brief weekend masterclasses. You are entering a supportive framework specifically designed to help you integrate clinical theory safely and successfully navigate real practice for years."
                            </Text>
                        </div>
                    </div>
                </div>
            </Section>

            {/* VIDEO TESTIMONIALS */}
            <Section theme="white">
                <VideoTestimonialGrid 
                    title="Hear from Our Practitioners"
                    subtitle="Watch how entering a unified ecosystem has structured their clinical growth."
                    testimonials={[
                        {
                            thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
                            name: "Sarah Jenkins",
                            role: "Psychotherapist",
                            quote: "I finally felt like there was a structured progress map tailored to my clinical needs. The live supervision and continuous case reflections have defined my growth."
                        },
                        {
                            thumbnailUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
                            name: "Dr. Michael Chen",
                            role: "Executive Coach",
                            quote: "A beautifully structured ecosystem for advanced change practitioners. Transitioning between independent reading and structured cohort practice felt incredibly intuitive."
                        },
                        {
                            thumbnailUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
                            name: "Riya Sharma",
                            role: "Psychology Graduate",
                            quote: "It's so much more than a course—it's entry into an active clinical community. Seeing concepts in live clinical video recordings made my theory finally translate to real practice."
                        }
                    ]}
                />
            </Section>

            {/* SECTION 7: PHILOSOPHY CTA */}
            <Section theme="tint">
                <div className="max-w-4xl mx-auto text-center">
                    <GitMerge className="w-12 h-12 text-brand-soft-teal mx-auto mb-6" />
                    <Heading level={2} className="text-brand-deep-teal mb-6">Integrative Growth Does Not Happen All at Once</Heading>
                    <Text className="text-lg max-w-3xl mx-auto mb-12 text-brand-secondary-text">
                        The ultimate core of the ICHARS ecosystem is flexible progression. Professional capability is rarely linear. Start exactly where you are, advance when you have consolidated previous levels, and transition dynamically between independent reading and guided group feedback.
                    </Text>

                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white border border-brand-soft-neutral rounded-full px-6 py-3 text-base font-semibold text-brand-structural-navy shadow-sm">
                            No pressure to define your entire future layout on day one
                        </div>
                        <div className="bg-white border border-brand-soft-neutral rounded-full px-6 py-3 text-base font-semibold text-brand-structural-navy shadow-sm">
                            Step-by-step level progression allows organic skill consolidation
                        </div>
                    </div>
                </div>
            </Section>

            {/* CENTRAL DYNAMIC PREVIEW NAV NAVIGATOR */}
            <section className="py-24 bg-brand-structural-navy text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <FadeIn>
                        <Heading level={2} className="text-white mb-6">Ready to Define Your Adaptive Evolution?</Heading>
                        <Text className="text-brand-warm-white/90 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                            Take the first intentional step in your practitioner evolution. Use our interactive starting-point wizard, or schedule a customized discussion with an adviser.
                        </Text>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="#start" className="w-full sm:w-auto px-10 py-4 bg-brand-soft-teal hover:bg-brand-deep-teal text-white shadow-lg shadow-brand-soft-teal/20 text-lg">
                                Find Your Starting Point
                            </Button>
                            <Button href="#consultation" variant="outline" className="w-full sm:w-auto px-8 py-4 border-white/20 text-white hover:bg-white/10 hover:text-white">
                                Book a Consultation
                            </Button>
                        </div>
                        
                        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-base text-white/70">
                             <a href="#programs" className="hover:text-brand-soft-teal font-medium transition-colors flex items-center gap-1">Explore Core Programs <ArrowRight className="w-4 h-4"/></a>
                             <span className="hidden sm:inline opacity-30">|</span>
                             <a href="#targeted" className="hover:text-brand-soft-teal font-medium transition-colors flex items-center gap-1">View Targeted Skill-Building <ArrowRight className="w-4 h-4"/></a>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
