import { useState } from 'react';
import { Section, Heading, Text, Button, Card, Grid } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { 
    Calendar, Clock, Video, Users, CheckCircle2, ChevronDown, 
    ChevronUp, Star, Award, BookOpen, Brain, MessageCircle,
    PlayCircle, ArrowRight, Lightbulb, Compass, Shield
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { LevelHero } from '../components/LevelHero';
import { CurriculumAccordion } from '../components/CurriculumAccordion';

export const Level2 = () => {

    const schedule = [
        {
            type: "Weekend",
            date: "Jun 13 to Jul 12",
            days: "Every Saturday, Sunday",
            time: "10:00 am to 05:30 pm",
            timezone: "IST (GMT+5.30)",
            facilitator: "Nitin Shah"
        }
    ];

    const curriculum = [
        {
            title: "Psychoeducation & Foundational Skills",
            icon: <BookOpen className="w-5 h-5" />,
            topics: [
                "Core Concepts: Change vs Transformation",
                "Understanding Behaviors as Unconscious Strategies",
                "Internal Resourcing: Beliefs, Values, Identity",
                "Communication at Conscious & Unconscious Levels",
                "Specific vs Vague Language",
                "State Management for Coaches",
                "Empowering Clients: Psycho-Education Success Principles",
                "Mindfulness Practices (also used in change techniques)"
            ]
        },
        {
            title: "Diagnostic Tools & Analysis",
            icon: <Brain className="w-5 h-5" />,
            topics: [
                "Language & Behavioral Patterns",
                "Sensory Acuity & Representation System",
                "Lead System & Accessing Cues",
                "Surface & Deep Structure of Language",
                "Calibration and Utilization",
                "Advanced Rapport Building (Pacing and Leading)",
                "Modelling & Meta Models for Language Clarity",
                "Symbolic & Abstract Tools: Dream Interpretation & Introspection",
                "Metaphor Revelation & Abstract Technique",
                "Ecological Goal Setting & Diagnostic Techniques",
                "Perceptual Positions for Insight"
            ]
        },
        {
            title: "Change Processes & Transformational Techniques",
            icon: <Calendar className="w-5 h-5" />,
            topics: [
                "NLP & Subconscious Tools: SWISH & Submodality Techniques",
                "Anchoring Complex Emotional States",
                "N-Step Reframing & Parts Integration",
                "Levels of Transformation (Framing and Reframing)",
                "Hypnotic Inductions & Ericksonian Hypnosis (Script-Free Approaches)",
                "Conversational Hypnosis & Finger Signal Techniques",
                "Hypnotic Storytelling & Transformational Metaphors",
                "Metaphoric Change Work: Control, Release, Idyll Metaphors",
                "Real-World Application: Coaching for Life Purpose, Motivation, Weight Management",
                "Working with Pain and Psychosomatic Barriers",
                "Identifying Relapses & Positive Intentions"
            ]
        },
        {
            title: "Coaching Integration",
            icon: <Users className="w-5 h-5" />,
            topics: [
                "Coaching Session Flow, Documentation & Case Notes",
                "Bridging Techniques to Real Client Goals",
                "Integration of Tools into Structured Coaching Sessions"
            ]
        }
    ];

    const testimonials = [
        {
            name: "Suma Wilson",
            review: "I got the clear clarity to each topics we covered in the online modules and in class I feel confident now to be a coach to whatever I learned. This is worth every penny. Looking forward eagerly for level 2."
        },
        {
            name: "Gautam Mahanta",
            review: "I experienced self transformation during the entire course. The SOFT SEA framework that we learnt is quite effective yet simple and flexible. I gained a lot of confidence to work with clients."
        },
        {
            name: "Barkha Soni",
            review: "It was a complete game changer for me. Through hands on experience it has helped me gain confidence and develop skills to facilitate positive changes in both personal and professional settings."
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
                currentLevel={2}
                badgeText="Cognitive Hypnotic Coaching™ (CHC)"
                title="Advance Practitioner Course in Cognitive Hypnotic Coaching (Level 2)"
                description={<>Deepen your practice with Advanced Diagnostic Tools, Emotional Insight, and Conversational Change Work. Move beyond structured processes and master the intuitive art of symbolic change.</>}
                ratingText={<>Rated <strong>5.0/5</strong> by Global Practitioners</>}
                enrollText="Enroll Now - $1,427"
                consultationText="Regional Scholarships"
                videoEmbedUrl="https://www.youtube.com/embed/z-mD83W4hHQ?rel=0&showinfo=0"
                videoBadgeLine1="Watch Preview"
                videoBadgeLine2="Level 2 Insights"
                checklistItems={["Eligibility: Practitioners Course (Level 1) Required", "Live Demonstrations & Supervised Practice"]}
            />

            {/* 2. UPCOMING SCHEDULE */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30">
                <FadeIn>
                    <div className="max-w-3xl mb-12">
                         <Heading level={2} className="text-brand-deep-teal mb-4">Upcoming Schedule</Heading>
                         <Text>Secure your spot in the next cohort. Limited seats available to ensure personalized attention and supervised practice.</Text>
                    </div>
                </FadeIn>
                
                <FadeIn delay={0.2}>
                    <Grid cols={1} className="max-w-2xl">
                        {schedule.map((batch, idx) => (
                            <Card key={idx} className="rounded-2xl relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute top-0 right-0 bg-brand-structural-navy text-white text-xs uppercase font-bold tracking-widest py-1 px-3 rounded-bl-lg">
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
                                    <Button href="#enroll" className="w-full sm:w-auto shrink-0 px-8 py-3">Select Batch</Button>
                                </div>
                            </Card>
                        ))}
                    </Grid>
                </FadeIn>
            </Section>

            {/* 3. READY TO GO BEYOND */}
            <Section theme="tint">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4">
                            <Compass className="w-4 h-4" /> Going Deeper
                        </div>
                        <Heading level={2} className="text-brand-deep-teal mb-6 text-3xl md:text-4xl">
                            Ready to Go Beyond Surface-Level Coaching?
                        </Heading>
                        <Text className="mb-6 text-brand-structural-navy text-lg">
                            Level 2 is designed for coaches, psychologists, and mental health professionals who want to unlock deeper transformation by learning how to decode internal conflicts, access unconscious insights, and overcome emotional blocks.
                        </Text>
                        <Text className="mb-8 font-medium">
                            This level builds on the foundations from Level 1 and gives you powerful diagnostic, metaphor-based, and subconscious communication tools that enhance client breakthroughs.
                        </Text>
                        
                        <div className="space-y-6 mt-8">
                            {[
                                {
                                    title: "Uncover Real Reasons",
                                    desc: "Find the root behind client blocks, secondary gains, and self-sabotage."
                                },
                                {
                                    title: "Metaphor Integration",
                                    desc: "Use story and symbolic expression to work beyond logic and into the subconscious."
                                },
                                {
                                    title: "Subconscious Patterns",
                                    desc: "Understand resistance through language, body signals, and emotional metaphor."
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
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-soft-teal/10 -rotate-3 rounded-3xl" />
                        <Card className="rounded-3xl p-8 relative bg-brand-structural-navy shadow-xl z-10 text-white">
                            <Heading level={3} className="text-white mb-6">Course Structure</Heading>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="font-medium text-white/90">Theory & Discussions</span>
                                        <span className="text-2xl font-bold text-brand-soft-teal">45%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div className="bg-brand-soft-teal h-2 rounded-full w-[45%]"></div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="font-medium text-white/90">Demonstration & Practice</span>
                                        <span className="text-2xl font-bold text-brand-accent-orange">55%</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2">
                                        <div className="bg-brand-accent-orange h-2 rounded-full w-[55%]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <h4 className="font-bold mb-4">You won't just add new tools...</h4>
                                <Text size="sm" className="text-white/80 leading-relaxed">
                                    You'll experience a deep shift in how you work. Imagine guiding a client to clarity not through direct advice, but through their own inner metaphors and stories. Imagine the breakthroughs that happen when you decode subconscious resistance your client didn't even know existed.
                                </Text>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* INFOGRAPHIC: The Iceberg of the Mind */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn delay={0.2} className="order-2 lg:order-1 relative flex justify-center">
                        <div className="relative w-full max-w-md">
                            <svg viewBox="0 0 400 500" className="w-full h-auto drop-shadow-2xl rounded-3xl">
                                {/* Sky */}
                                <rect width="400" height="200" fill="#E8F4F8" />
                                {/* Water */}
                                <rect y="200" width="400" height="300" fill="#0A2540" />
                                
                                {/* Water Line */}
                                <path d="M0 200 Q 50 190 100 200 T 200 200 T 300 200 T 400 200" fill="none" stroke="#25A2A3" strokeWidth="3" opacity="0.6"/>
                                <path d="M0 200 Q 50 210 100 200 T 200 200 T 300 200 T 400 200" fill="none" stroke="#25A2A3" strokeWidth="3" opacity="0.3"/>
                                
                                {/* Iceberg Top */}
                                <path d="M120 200 L 160 90 L 190 60 L 220 110 L 280 200 Z" fill="#FFFFFF" />
                                <path d="M160 90 L 190 60 L 200 200 L 120 200 Z" fill="#F1F5F9" />
                                
                                {/* Iceberg Bottom */}
                                <path d="M120 200 L 90 280 L 130 420 L 210 470 L 270 390 L 310 280 L 280 200 Z" fill="#88C0D0" opacity="0.2"/>
                                <path d="M120 200 L 200 200 L 210 470 L 130 420 L 90 280 Z" fill="#88C0D0" opacity="0.5"/>
                                
                                <text x="100" y="40" fill="#0A2540" fontSize="12" fontWeight="bold" className="font-sans uppercase tracking-[0.2em] opacity-50">Conscious Mind</text>
                                <text x="210" y="140" fill="#0A2540" fontSize="16" fontWeight="bold" textAnchor="middle" className="font-sans drop-shadow-md">10%</text>
                                <text x="210" y="160" fill="#4B5563" fontSize="10" textAnchor="middle" className="font-sans">Logic, Willpower, Goals</text>
                                
                                <text x="100" y="460" fill="#FFFFFF" fontSize="12" fontWeight="bold" className="font-sans uppercase tracking-[0.2em] opacity-40">Subconscious Mind</text>
                                <text x="195" y="300" fill="#FFFFFF" fontSize="28" fontWeight="bold" textAnchor="middle" className="font-sans drop-shadow-lg">90%</text>
                                <text x="195" y="330" fill="#E5E7EB" fontSize="12" textAnchor="middle" className="font-sans">Beliefs, Emotions, Habits</text>
                                <text x="195" y="355" fill="#E5E7EB" fontSize="12" textAnchor="middle" className="font-sans">Identity, Values, Memories</text>
                            </svg>
                            <div className="absolute top-[35%] -left-2 sm:-left-6 bg-white px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-xl border border-brand-soft-neutral text-sm sm:text-base font-bold text-brand-structural-navy flex items-center gap-2 sm:gap-3 hover:-translate-y-1 transition-transform">
                                <span className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-brand-accent-orange animate-pulse"></span>
                                Level 1 Focus
                            </div>
                            <div className="absolute top-[65%] -right-2 sm:-right-6 bg-brand-soft-teal px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-xl border border-brand-deep-teal/20 text-sm sm:text-base font-bold text-white flex items-center gap-2 sm:gap-3 hover:-translate-y-1 transition-transform">
                                <span className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white animate-pulse"></span>
                                Level 2 Focus
                            </div>
                        </div>
                    </FadeIn>
                    <div className="order-1 lg:order-2">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4 bg-brand-soft-teal/10 px-3 py-1 rounded-full">
                                <Brain className="w-3 h-3" /> The Iceberg Model
                            </div>
                            <Heading level={2} className="text-brand-deep-teal mb-6">
                                Why Standard Coaching Only Scratches the Surface
                            </Heading>
                            <Text className="text-brand-structural-navy mb-6 text-lg">
                                If you've ever had a client who knows exactly what they need to do, but consistently fails to do it, you're observing a conflict between conscious willpower and subconscious programming.
                            </Text>
                            <Text className="font-medium text-brand-secondary-text mb-8 p-4 bg-brand-soft-teal/5 rounded-xl border border-brand-soft-teal/10">
                                In <strong className="text-brand-structural-navy">Level 2</strong>, we go beneath the waterline. You'll learn how to communicate directly with the subconscious structures that govern 90% of human behavior.
                            </Text>
                            
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-brand-accent-orange/10 p-2 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-brand-accent-orange" />
                                    </div>
                                    <div>
                                        <strong className="text-brand-structural-navy block mb-1">Above the Surface (Level 1)</strong>
                                        <span className="text-brand-secondary-text text-base">Goal setting, reframing thoughts, action plans, basic NLP, surface structural language.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-brand-soft-teal/10 p-2 rounded-lg shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal" />
                                    </div>
                                    <div>
                                        <strong className="text-brand-structural-navy block mb-1">Beneath the Surface (Level 2)</strong>
                                        <span className="text-brand-secondary-text text-base">Emotional anchors, symbolic representation, deep-rooted beliefs, identity-level shifts, trance-state metaphors.</span>
                                    </div>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* 4. CURRICULUM */}
            <Section theme="white">
                <FadeIn>
                    <div className="max-w-3xl mb-12">
                         <Heading level={2} className="text-brand-deep-teal mb-4">Advanced Curriculum</Heading>
                         <Text>A detailed breakdown of the specialized techniques you will master in Level 2.</Text>
                    </div>
                </FadeIn>
                
                <CurriculumAccordion curriculum={curriculum} />
            </Section>

            {/* 5. OUTCOMES */}
            <Section theme="dark" className="text-center">
                <FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <Heading level={2} className="text-white mb-6">What You'll Be Able to Do</Heading>
                        <Text className="text-white/80 max-w-2xl mx-auto mb-12">
                            Imagine the confidence you’ll feel working with complex emotional cases—using techniques few practitioners even know exist.
                        </Text>

                        <Grid cols={2} className="text-left mb-16">
                            {[
                                "Diagnose client blocks at symbolic, subconscious, and emotional levels",
                                "Work with deeper personal challenges without triggering resistance",
                                "Guide clients through complex emotional journeys using metaphor and mindfulness",
                                "Apply advanced behavioral management strategies in real-life coaching contexts",
                                "Break destructive habits and support habit transformation",
                                "Provide structured guidance in weight management and psychosomatic pain relief",
                                "Help clients prevent or overcome relapses by addressing secondary gains",
                                "Use hypnotic communication techniques to elevate impact in marketing and sales"
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 h-full">
                                        <Award className="w-6 h-6 text-brand-soft-teal shrink-0" />
                                        <span className="font-medium text-white/90">{item}</span>
                                    </div>
                                </FadeIn>
                            ))}
                        </Grid>
                    </div>
                </FadeIn>
            </Section>

            {/* 6. TESTIMONIALS */}
            <Section theme="tint">
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Heading level={2} className="text-brand-deep-teal mb-4">What Our Practitioners Say</Heading>
                        <div className="flex items-center justify-center gap-1 text-brand-accent-orange mb-2">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                        </div>
                        <Text size="sm" className="font-bold uppercase tracking-widest">Rated 5 out of 5 stars</Text>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <Grid cols={3} className="">
                        {testimonials.map((t, idx) => (
                            <Card key={idx} className="rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
                                <div className="flex text-brand-accent-orange mb-4">
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
            <Section theme="white">
                <FadeIn>
                    <div className="">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4">
                                Expert Guidance
                            </div>
                            <Heading level={2} className="text-brand-deep-teal mb-4">Your Facilitator</Heading>
                            <Text>Learn from the creator of the Cognitive Hypnotic Coaching framework.</Text>
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
                                            <Text className="text-brand-secondary-text mb-0 leading-relaxed text-lg">
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
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <FadeIn>
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <Heading level={2} className="text-brand-deep-teal mb-4">What Next after Level 2?</Heading>
                            <Text>Choose your specialization path to master deep therapeutic or niche-specific coaching.</Text>
                        </div>

                        <Grid cols={2}>
                            <Card className="rounded-3xl p-8 border-l-4 border-l-brand-soft-teal bg-white/80">
                                <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest mb-4">For Psychology & Medical Backgrounds</div>
                                <Heading level={3} className="text-xl text-brand-structural-navy mb-4">
                                    Level 3: Cognitive Hypnotic Psychotherapy
                                </Heading>
                                <ul className="space-y-2 mb-6 text-brand-secondary-text text-base">
                                    <li>• Work with trauma, repressed emotions, core conflicts</li>
                                    <li>• Apply therapeutic protocols for disorders and chronic issues</li>
                                    <li>• Prepare for clinical or deep therapeutic practice</li>
                                </ul>
                                <Button variant="outline" href="#level-3" className="w-full bg-white">View Details</Button>
                            </Card>
                            
                            <Card className="rounded-3xl p-8 border-l-4 border-l-brand-accent-orange bg-white/80">
                                <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest mb-4">For Coaches & Trainers</div>
                                <Heading level={3} className="text-xl text-brand-structural-navy mb-4">
                                    Relationship Coaching Certification
                                </Heading>
                                <ul className="space-y-2 mb-6 text-brand-secondary-text text-base">
                                    <li>• Resolve relational patterns and communication blocks</li>
                                    <li>• Needs mapping and attachment exploration</li>
                                    <li>• Perfect for expanding your practice into high-demand niches</li>
                                </ul>
                                <Button variant="outline" href="#relationship-specialization" className="w-full bg-white">View Details</Button>
                            </Card>
                        </Grid>
                    </div>
                </FadeIn>
            </Section>
            
            {/* 9. BOTTOM CTA */}
            <Section theme="dark" className="text-center border-t border-white/10">
                <div className="max-w-4xl mx-auto relative z-10">
                    <Heading level={2} className="text-white mb-6">Unlock Deeper Insights and Transformational Conversations</Heading>
                    <Text size="lg" className="text-white/80 mb-10 max-w-2xl mx-auto">
                        Level 2 helps you go from surface coaching to deep, nuanced, and emotionally intelligent transformation.
                    </Text>
                    
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl inline-block mb-10">
                        <div className="text-3xl font-bold text-brand-soft-teal mb-6">$USD 1,427</div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <Button href="#enroll" className="w-full sm:w-auto px-10 py-4 bg-brand-soft-teal text-brand-structural-navy hover:bg-white transition-colors">Enroll Now</Button>
                             <Button href="#consultation" variant="outline" className="w-full sm:w-auto px-10 py-4 border-white/30 text-white hover:bg-white/10">Book a Free Call</Button>
                        </div>
                    </div>
                </div>
            </Section>

        </div>
    );
};
