import React, { useState } from 'react';
import { Section, Heading, Text, Button, Card, Grid } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { 
    Calendar, Clock, Video, Users, CheckCircle2, ChevronDown, 
    ChevronUp, Star, Award, BookOpen, Brain, 
    ArrowRight, Compass, Shield, Sparkles, Activity, Layers, ArrowUpCircle, Infinity, Lightbulb, Search
} from 'lucide-react';
import { cn } from '../lib/utils';

import { LevelHero } from '../components/LevelHero';
import { CurriculumAccordion } from '../components/CurriculumAccordion';

export const Level3 = () => {

    const schedule = [
        {
            type: "Weekend",
            date: "Aug 15 to Sep 13",
            days: "Every Saturday, Sunday",
            time: "10:00 am to 05:30 pm",
            timezone: "IST (GMT+5.30)",
            facilitator: "Nitin Shah"
        }
    ];

    const curriculum = [
        {
            title: "Psychoeducation",
            icon: <BookOpen className="w-5 h-5" />,
            topics: [
                "Relationship Counselling: Evolution, Stages, and Problem Areas",
                "Sexuality and Sexual Dysfunction",
                "Love Languages & Parataxic Distortion",
                "Homeostasis and Systemic Balance",
                "Macrocosm, Microcosm View of Emotions",
                "NLP Frames and Their Therapeutic Use",
                "Past-Present-Future Influence on Emotional Responses",
                "Parent / Adult / Child Model (Transactional Analysis)",
                "Passive Aggressive Behaviour",
                "Root Cause Identification in Complex Cases",
                "Working with Defense Mechanisms (Projection, Compensation, etc.)",
                "Interplay Between Physical & Emotional Feelings",
                "Persistent Patterns and Emotional Loops",
                "Multi-layered Behavioural Strategies",
                "Addictions and Compulsive Behaviours",
                "Mind-Body Integration Processes",
                "Catharsis and Its Limitations"
            ]
        },
        {
            title: "Diagnostic Techniques",
            icon: <Search className="w-5 h-5" />,
            topics: [
                "Core Issue Identification",
                "Delayering Emotions",
                "TOTE Model (Test-Operate-Test-Exit)",
                "Corrective Therapy Mapping",
                "Perceptual Positioning",
                "Paris Window Analysis",
                "Cost-Benefit Analysis (CBA) in Therapeutic Decision-Making"
            ]
        },
        {
            title: "Change Processes",
            icon: <Activity className="w-5 h-5" />,
            topics: [
                "Strategy Installation and Pattern Reprogramming",
                "Advanced Sub-modality Interventions",
                "Hypnodrama and Role Play-Based Integration",
                "Cord Cutting for Relationship Closure",
                "Void Management and Emotional Completion",
                "Hypnotic Ho'oponopono Process",
                "Inner Child Therapy and Healing Protocols",
                "Fast Phobia Technique",
                "Circle Therapy for Emotional Safety",
                "Desensitization Methods",
                "Reimprinting and Identity Restructuring",
                "Changing Personal History"
            ]
        }
    ];

    const testimonials = [
        {
            name: "Radhika M.",
            review: "Level 3 tied everything together. Bringing spiritual and metaphysical elements into a structured therapeutic setup has been a game changer for my practice and my clients' profound transformations."
        },
        {
            name: "Dr. Sanjay",
            review: "As a medical practitioner, the pain management and psychosomatic components of this level gave me alternative structural interventions that I could immediately apply with chronic patients."
        },
        {
            name: "Leena K.",
            review: "The regression and timeline therapies are phenomenally powerful. I am now confident to not just treat surface issues, but trace karmic patterns and rewrite deep, multi-generational narratives."
        }
    ];

    const facilitators = [
        {
            name: "Nitin Shah",
            role: "CEO ICHARS and Director ICHARS Support Foundation",
            desc: "An author, educator, psychologist & Cognitive Hypnotic Coach who is the brains behind the various courses offered by ICHARS. For more than a decade he has passionately been mentoring and supporting psychologists."
        }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text">
            <LevelHero 
                currentLevel={4}
                badgeText="Professional Practitioner (Level 3)"
                title="Professional Practitioner Course in Cognitive Hypnotic Psychotherapy"
                description={<>Step into the role of a clinical therapeutic change-maker. Move beyond symptom management and uncover deep emotional wounds and repressed experiences.</>}
                ratingText={<>Rated <strong>5.0/5</strong> by Past Participants</>}
                enrollText="Enroll Now - $1,427"
                consultationText="Regional Scholarships"
                videoEmbedUrl="https://www.youtube.com/embed/z-mD83W4hHQ?rel=0&showinfo=0"
                videoBadgeIcon={<Infinity className="w-6 h-6" />}
                videoBadgeIconClass="bg-brand-soft-teal/10 text-brand-soft-teal"
                videoBadgeLine1="Soul-Level Healing"
                videoBadgeLine2="Masterclass Preview"
                badgeColorClass="bg-brand-soft-teal/10 text-brand-soft-teal"
                dotColorClass="bg-brand-soft-teal"
                gradientClass="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent-orange via-transparent to-transparent"
                checklistItems={[
                    {
                        content: (
                            <React.Fragment>
                                Eligibility: Advance Practitioner (Level 2) Completed AND Pursuing/Completed Masters in Psychology/Social Work or Medical Practitioner.
                                <span className="block font-normal mt-1 opacity-80">
                                    Not a clinical professional? <a href="#chcp-announcement" className="text-brand-structural-navy underline hover:text-brand-deep-teal transition-colors font-medium">Explore the CHCP Advanced Pathway</a>
                                </span>
                            </React.Fragment>
                        ),
                        icon: <Shield className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                    },
                    {
                        content: "Dual Certification: CHP Advance Practitioner & NLP Professional Practitioner",
                        icon: <Award className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                    }
                ]}
            />

            {/* 2. UPCOMING SCHEDULE */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30">
                <FadeIn>
                    <div className="max-w-3xl mb-12">
                         <Heading level={2} className="text-brand-deep-teal mb-4">Upcoming Schedule</Heading>
                         <Text size="lg">Immerse yourself for 96 live hours of master-level instruction and continuous practice.</Text>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                    <Grid cols={1} className="max-w-2xl">
                        {schedule.map((batch, idx) => (
                            <Card key={idx} className="rounded-2xl relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute top-0 right-0 bg-brand-soft-teal text-white text-xs uppercase font-bold tracking-widest py-1 px-3 rounded-bl-lg">
                                    {batch.type}
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-brand-soft-teal/10 rounded-full flex items-center justify-center text-brand-soft-teal">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-brand-structural-navy text-lg">{batch.date}</h4>
                                                <span className="text-base text-brand-secondary-text">{batch.days}</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 text-base text-brand-structural-navy">
                                                <Clock className="w-4 h-4 text-brand-secondary-text shrink-0" /> 
                                                {batch.time} <span className="text-brand-secondary-text text-sm">({batch.timezone})</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-base text-brand-structural-navy">
                                                <Users className="w-4 h-4 text-brand-secondary-text shrink-0" /> 
                                                Facilitator: <span className="font-medium">{batch.facilitator}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button href="#enroll" className="w-full sm:w-auto shrink-0 px-8 py-3 bg-brand-soft-teal hover:bg-brand-soft-teal/90">Select Batch</Button>
                                </div>
                            </Card>
                        ))}
                    </Grid>
                </FadeIn>
            </Section>

            {/* 3. READY TO FACILITATE BREAKTHROUGHS */}
            <Section theme="tint">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4">
                                <Compass className="w-4 h-4" /> Professional Practitioner
                            </div>
                            <Heading level={2} className="text-brand-deep-teal mb-6 text-3xl md:text-4xl">
                                Ready to Facilitate Breakthroughs That Transform Body, Mind, and Soul?
                            </Heading>
                            <Text size="lg" className="mb-6 text-brand-structural-navy">
                                This level is designed for practitioners ready to masterfully integrate everything learned in Levels 1 to 3 and go beyond.
                            </Text>
                            <Text size="lg" className="mb-8 font-medium">
                                You will explore the interplay between psychological trauma, life purpose, and healing across lifetimes. Discover how to confidently create and deliver advanced therapy sessions tailored to each client's unique inner landscape.
                            </Text>
                            
                            <div className="space-y-6 mt-8">
                                {[
                                    {
                                        title: "Medical Hypnosis Applications",
                                        desc: "Apply advanced hypnosis to psychosomatic contexts—addressing pain, allergies, and physical imbalances."
                                    },
                                    {
                                        title: "Regression & Timeline Mastery",
                                        desc: "Lead structured, safe age regression, past life, and life-between-lives journeys."
                                    },
                                    {
                                        title: "Metaphysical Wisdom",
                                        desc: "Work ethically and powerfully with Higher Self, Spirit Guides, and White Light integration for deep symbolic healing."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-soft-teal/10 flex items-center justify-center shrink-0 mt-1">
                                            <Lightbulb className="w-5 h-5 text-brand-soft-teal" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-brand-structural-navy text-lg">{item.title}</h4>
                                            <p className="text-brand-secondary-text text-base mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                    
                    <div className="relative">
                        <FadeIn delay={0.3}>
                            <div className="absolute inset-0 bg-brand-soft-teal/10 -rotate-3 rounded-3xl" />
                            <Card className="rounded-3xl p-6 sm:p-8 relative bg-brand-structural-navy shadow-xl z-10 text-white">
                                <Heading level={3} className="text-white mb-6">Course Structure (96 Hrs Live)</Heading>
                                
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="font-medium text-white/90">Theory & Philosophy</span>
                                            <span className="text-2xl font-bold text-white/50">20%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <div className="bg-white/50 h-2 rounded-full w-[20%]"></div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="font-medium text-white/90">Clinical Discussions</span>
                                            <span className="text-2xl font-bold text-brand-soft-teal">20%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <div className="bg-brand-soft-teal h-2 rounded-full w-[20%]"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <span className="font-medium text-white/90">Demonstration & Practice</span>
                                            <span className="text-2xl font-bold text-brand-soft-teal">60%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <div className="bg-brand-soft-teal h-2 rounded-full w-[60%]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <h4 className="font-bold mb-4 flex items-center gap-2"><Layers className="w-5 h-5 text-brand-soft-teal" /> Massive Content Vault</h4>
                                    <Text size="sm" className="text-white/80 leading-relaxed m-0">
                                        You'll gain access to 120+ hours of essential post-workshop material in addition to your 96 live hours with expert facilitators, ensuring a lifetime of learning and reference.
                                    </Text>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* INFOGRAPHIC: The Integration Mastery */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn delay={0.2} className="relative flex justify-center order-2 lg:order-1">
                        <div className="relative w-full max-w-md">
                            <svg viewBox="0 0 400 400" className="w-full h-auto drop-shadow-2xl rounded-3xl">
                                <rect width="400" height="400" fill="#F8FAFC" />
                                
                                <path d="M200 50 L 350 300 L 50 300 Z" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                                
                                {/* Mind */}
                                <circle cx="200" cy="110" r="40" fill="var(--color-brand-soft-teal)" opacity="0.8" />
                                <text x="200" y="115" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" className="font-sans">MIND</text>
                                
                                {/* Body */}
                                <circle cx="120" cy="270" r="40" fill="var(--color-brand-accent-orange)" opacity="0.8" />
                                <text x="120" y="275" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" className="font-sans">BODY</text>
                                
                                {/* Soul */}
                                <circle cx="280" cy="270" r="40" fill="var(--color-brand-structural-navy)" opacity="0.8" />
                                <text x="280" y="275" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" className="font-sans">SOUL</text>
                                
                                {/* Integration Center */}
                                <circle cx="200" cy="220" r="50" fill="var(--color-brand-structural-depth)" />
                                <text x="200" y="215" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" className="uppercase tracking-widest font-sans">Level 3</text>
                                <text x="200" y="235" fill="#FFFFFF" fontSize="10" textAnchor="middle" className="font-sans text-white/50">Integration</text>
                                
                                <circle cx="200" cy="220" r="35" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.6">
                                    <animate attributeName="r" values="35; 45; 35" dur="4s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0.6; 0; 0.6" dur="4s" repeatCount="indefinite" />
                                </circle>

                            </svg>
                            <div className="absolute top-[20%] -left-2 sm:-left-6 bg-brand-soft-teal px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-xl border border-brand-soft-teal/20 text-sm sm:text-base font-bold text-white flex items-center gap-2 sm:gap-3 hover:-translate-y-1 transition-transform">
                                <Sparkles className="w-4 h-4 text-white" />
                                Complete Unity
                            </div>
                        </div>
                    </FadeIn>
                    <div className="order-1 lg:order-2">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4 bg-brand-soft-teal/10 px-3 py-1 rounded-full">
                                <Infinity className="w-4 h-4" /> The Professional Practitioner
                            </div>
                            <Heading level={2} className="text-brand-deep-teal mb-6">
                                Step into the Realm of Master-Level Therapy
                            </Heading>
                            <Text size="lg" className="text-brand-structural-navy mb-6">
                                At Level 3, psychological, emotional, somatic, and spiritual dimensions converge. This level expands your capability to design fully customized, transformational therapeutic journeys.
                            </Text>
                            
                            <ul className="space-y-6 mt-8">
                                <li className="flex items-start gap-4">
                                    <div className="bg-brand-soft-teal/10 p-2 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal" />
                                    </div>
                                    <div>
                                        <strong className="text-brand-structural-navy block mb-1">Blend Formats Seamlessly</strong>
                                        <span className="text-brand-secondary-text text-base">Flow effortlessly between coaching, psychotherapy, hypnosis, and spiritual practices in a single, congruent session.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-brand-soft-teal/10 p-2 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal" />
                                    </div>
                                    <div>
                                        <strong className="text-brand-structural-navy block mb-1">Empower Self-Validation</strong>
                                        <span className="text-brand-secondary-text text-base">Guide clients to find core truth from their inner wisdom and Higher Self rather than relying solely on clinical interpretation.</span>
                                    </div>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 4. CURRICULUM */}
            <Section theme="tint">
                <FadeIn>
                    <div className="max-w-3xl mb-12">
                         <Heading level={2} className="text-brand-deep-teal mb-4">Master-Level Curriculum</Heading>
                         <Text size="lg">An exhaustive deep-dive into spiritual integration, medical hypnosis, and regression therapies.</Text>
                    </div>
                </FadeIn>
                
                <CurriculumAccordion curriculum={curriculum} accentColorClass="bg-brand-soft-teal" />
            </Section>

            {/* 5. OUTCOMES */}
            <Section theme="dark" className="text-center relative">
                <div className="absolute inset-0 bg-brand-structural-depth z-0 overflow-hidden">
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent-orange/20 md:from-brand-accent-orange/40 via-transparent to-transparent opacity-50 blur-3xl" />
                </div>
                <FadeIn className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Heading level={2} className="text-white mb-6">What You'll Be Able to Do</Heading>
                        <Text className="text-white/80 max-w-2xl mx-auto mb-12">
                            Imagine knowing how to support a client in crisis—not just psychologically, but spiritually. Healing multidimensional wounds and creating a legacy of transformative change.
                        </Text>

                        <Grid cols={2} className="text-left mb-16">
                            {[
                                { text: "Confidently lead past life, age regression, and spiritual integration journeys", icon: <Infinity className="w-8 h-8 text-brand-soft-teal shrink-0" /> },
                                { text: "Design and deliver layered healing experiences across emotional and existential dimensions", icon: <Layers className="w-8 h-8 text-brand-soft-teal shrink-0" /> },
                                { text: "Work with complex symptoms and unresolved trauma at identity, soul, and energy levels", icon: <Sparkles className="w-8 h-8 text-brand-soft-teal shrink-0" /> },
                                { text: "Serve clients seeking deep healing for chronic, recurring patterns & medical issues", icon: <Activity className="w-8 h-8 text-brand-soft-teal shrink-0" /> },
                                { text: "Use advanced metaphor and higher self techniques to access the subconscious wisdom", icon: <Brain className="w-8 h-8 text-brand-soft-teal shrink-0" /> },
                                { text: "Elevate your credibility as a holistic therapist in clinical or alternative spaces", icon: <ArrowUpCircle className="w-8 h-8 text-brand-soft-teal shrink-0" /> },
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-start gap-4 sm:gap-6 h-full hover:bg-white/10 transition-colors">
                                        <div className="bg-brand-soft-teal/10 p-3 rounded-xl shrink-0">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium text-white/90 text-lg sm:pt-1">{item.text}</span>
                                    </div>
                                </FadeIn>
                            ))}
                        </Grid>
                    </div>
                </FadeIn>
            </Section>

            {/* 6. TESTIMONIALS */}
            <Section theme="white">
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Heading level={2} className="text-brand-deep-teal mb-4">What Our Practitioners Say</Heading>
                        <div className="flex items-center justify-center gap-1 text-brand-soft-teal mb-2">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                        </div>
                        <Text size="sm" className="font-bold uppercase tracking-widest">Rated 5 out of 5 stars</Text>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <Grid cols={3} className="">
                        {testimonials.map((t, idx) => (
                            <Card key={idx} className="rounded-3xl p-8 bg-brand-warm-white hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex text-brand-soft-teal mb-4">
                                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                                </div>
                                <Text size="sm" className="italic mb-6 text-brand-structural-navy flex-1">"{t.review}"</Text>
                                <div className="pt-4 border-t border-brand-soft-neutral/50 font-bold text-brand-deep-teal text-base">
                                    {t.name}
                                </div>
                            </Card>
                        ))}
                    </Grid>
                </FadeIn>
            </Section>

            {/* 7. FACILITATORS */}
            <Section theme="tint">
                <FadeIn>
                    <div>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4">
                                Expert Guidance
                            </div>
                            <Heading level={2} className="text-brand-deep-teal mb-4">Your Facilitator</Heading>
                            <Text size="lg">Learn from leading clinical educators with decades of combined experience.</Text>
                        </div>
                    
                        <div className="max-w-4xl mx-auto">
                            {facilitators.map((f, idx) => {
                                const portrait = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400";
                                return (
                                    <Card key={idx} className="overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col sm:flex-row h-full border border-brand-soft-neutral/50 shadow-sm bg-white p-0">
                                        <div className="sm:w-64 shrink-0 overflow-hidden relative">
                                            <img 
                                                src={portrait} 
                                                alt={f.name}
                                                className="w-full h-64 sm:h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                                            />
                                        </div>
                                        <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                                            <h4 className="font-bold text-3xl text-brand-structural-navy leading-tight mb-2">{f.name}</h4>
                                            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6">{f.role}</div>
                                            <Text size="lg" className="text-brand-secondary-text mb-0">
                                                {f.desc}
                                            </Text>
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 8. WHAT NEXT */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center">
                        <Heading level={2} className="text-brand-deep-teal mb-4">What Next after Level 3?</Heading>
                        <Text size="lg" className="mb-8">Continue evolving with advanced masterclasses, supervision, and niche certifications in the specialization hub.</Text>
                        <Button href="#specialization-hub" variant="outline" className="px-8 py-3">Explore Specializations</Button>
                    </div>
                </FadeIn>
            </Section>
            
            {/* 9. BOTTOM CTA */}
            <Section theme="dark" className="text-center border-t border-white/10">
                <div className="max-w-4xl mx-auto relative z-10">
                    <Heading level={2} className="text-white mb-6">Ready to Master the Art of Soul-Level Healing?</Heading>
                    <Text size="lg" className="text-white/80 mb-10 max-w-2xl mx-auto">
                        Step into the highest level of integrative therapy—where healing becomes transformation and transformation becomes legacy.
                    </Text>
                    
                    <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl inline-block mb-10 w-full sm:w-auto">
                        <div className="text-3xl font-bold text-brand-soft-teal mb-2">$USD 1,427</div>
                        <div className="text-base text-white/50 mb-6">7 day Money Back Guarantee*</div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <Button href="#enroll" className="w-full sm:w-auto px-10 py-4 bg-brand-soft-teal text-white hover:bg-brand-soft-teal/90 transition-colors">Enroll Now</Button>
                             <Button href="#consultation" variant="outline" className="w-full sm:w-auto px-10 py-4 border-white/30 text-white hover:bg-white/10">Book a Free Call</Button>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
};
