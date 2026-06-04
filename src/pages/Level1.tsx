import { useState } from 'react';
import { Section, Heading, Text, Button, Card, Grid } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { 
    Calendar, Clock, Video, Users, CheckCircle2, ChevronDown, 
    ChevronUp, Star, Award, BookOpen, Brain, MessageCircle,
    PlayCircle, ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { LevelHero } from '../components/LevelHero';
import { CurriculumAccordion } from '../components/CurriculumAccordion';

export const Level1 = () => {

    const schedule = [
        {
            type: "Weekday",
            date: "Jun 1 to Jun 19",
            days: "Mon-Fri",
            time: "02:30 pm to 06:00 pm",
            timezone: "IST (GMT+5.30)",
            facilitator: "Dhivyaraksha Pajni"
        },
        {
            type: "Weekend",
            date: "Jul 4 to Jul 19",
            days: "Every Saturday, Sunday",
            time: "10:30 am to 06:00 pm",
            timezone: "IST (GMT+5.30)",
            facilitator: "Misba Shah"
        }
    ];

    const curriculum = [
        {
            title: "Practitioners Course in Coaching & Therapy",
            icon: <BookOpen className="w-5 h-5" />,
            topics: [
                "Coaching vs Therapy: Similarities, Differences, Boundaries",
                "Pre-Coaching Interviews and Discovery Sessions",
                "Introduction to CHCP Model (Cognitive Hypnotic Coaching & Psychotherapy)",
                "Coaching Session Flow: Structure and Documentation"
            ]
        },
        {
            title: "Understanding the Mind",
            icon: <Brain className="w-5 h-5" />,
            topics: [
                "Conscious, Subconscious & Critical Filter",
                "Laws of Suggestibility",
                "Suggestibility: Meaning, Applications, and Types",
                "Conditioning the Mind: How Habits and Patterns Form"
            ]
        },
        {
            title: "Diagnostic Frameworks",
            icon: <Calendar className="w-5 h-5" />,
            topics: [
                "Coaching Models: GROW, T-GROW, RE-GROW, SOFT SEA™",
                "ABCDE Model (REBT) & SOR Model (Behavioral Psychology)",
                "Body Syndrome, Breakdown Cycle",
                "FLIP Model for Emotional Intelligence",
                "Questioning the Self: Belief-Thought-Emotion Connections"
            ]
        },
        {
            title: "Hypnosis Fundamentals",
            icon: <Users className="w-5 h-5" />,
            topics: [
                "History, Myths & Misconceptions",
                "Hypnosis as a State vs Process",
                "Depth of Hypnosis: Testing & Application",
                "Hypnotic Suggestions: Designing for Impact",
                "Reconditioning & Imagery for Change",
                "Re-hypnosis and Waking-Up Process"
            ]
        },
        {
            title: "Hypnotic Inductions (Hands-On)",
            icon: <MessageCircle className="w-5 h-5" />,
            topics: [
                "Balloon-Book Induction",
                "Hand Movement & Hand Magnetism",
                "Betty Erickson (3-2-1) Induction",
                "Handshake Interrupt Induction",
                "Reverse Count Induction",
                "Auto Dual Induction",
                "Arm Raising Induction",
                "Past Experience Induction",
                "Dave Elman Induction"
            ]
        },
        {
            title: "NLP & Emotional Intelligence",
            icon: <CheckCircle2 className="w-5 h-5" />,
            topics: [
                "History of NLP",
                "NLP Presuppositions",
                "Types of Anchors"
            ]
        },
        {
            title: "Change Work & Emotional Conditioning",
            icon: <Award className="w-5 h-5" />,
            topics: [
                "Anchoring Techniques for Positive Emotional States",
                "IF-Then Protocol for Thought Restructuring",
                "Hypnotic Suggestion Loops & Self-Hypnosis Protocols",
                "Confidence Building & Goal Setting",
                "Meditation & Deep Relaxation for Self-Regulation"
            ]
        },
        {
            title: "Psychoeducation for Clients",
            icon: <BookOpen className="w-5 h-5" />,
            topics: [
                "Teaching Positive Thinking: Benefits vs Fallacies",
                "Meditation: Types, Timing & Contraindications",
                "Emotional Intelligence using FLIP",
                "Mindfulness & State Management"
            ]
        }
    ];

    const testimonials = [
        {
            name: "Suma Wilson",
            review: "Had the best experience in level one with Dhivyaraksha ma'am. Am thankful to ICHARS for bringing the best sincere efficient, such professional tutor for us. I feel confident now to be a coach to whatever I learned in Level 1."
        },
        {
            name: "Gautam Mahanta",
            review: "I attended ICHARS' CHCP level 1. It has been a wonderful journey so far. The sessions were structured and systematic. Practicing everything that we learned made the entire process engaging."
        },
        {
            name: "Fauzia Ansari",
            review: "ICHARS Level 1 coaching is a transformative journey, offering practical, hands-on learning that empowers you to holistically approach therapeutic practices. The program's unique approach involves personalized guidance."
        }
    ];

    const facilitators = [
        {
            name: "Misba Shah",
            role: "Director ICHARS and ICHARS Support Foundation",
            desc: "A dedicated and passionate trainer cum facilitator with extensive experience in Life Coaching, Human resources and performance enhancement. As a psychologist, she focuses on helping people overcome blocks that stop them from loving and appreciating themselves."
        },
        {
            name: "Nitin Shah",
            role: "CEO ICHARS and Director ICHARS Support Foundation",
            desc: "An author, educator, psychologist & Cognitive Hypnotic Coach who is the brains behind the various courses offered by ICHARS. For more than a decade he has passionately been mentoring and supporting psychologists."
        },
        {
            name: "Mamta Sharma",
            role: "Director ICHARS Support Foundation",
            desc: "With a passion for understanding how the mind works, she uses her expertise as a Life Coach to help individuals nurture and develop their mental abilities."
        },
        {
            name: "Dhivyaraksha Pajni",
            role: "Trainer",
            desc: "As a Life Transformation Strategist, a wellness professional and a Certified Cognitive Hypnotic Coach who supports individuals make progress in their lives so that they have a greater fulfilment."
        }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text">
            <LevelHero 
                currentLevel={1}
                badgeText="Cognitive Hypnotic Coaching™ (CHC)"
                title="Practitioners Course in Cognitive Hypnotic Coaching"
                description={<>Transform your coaching skills and create profound, lasting change. Master the integration of <strong>Hypnosis, SFBT, NLP, CBT, and Advanced Coaching Models</strong> in one comprehensive framework.</>}
                ratingText={<>Rated <strong>5.0/5</strong> by Global Practitioners</>}
                enrollText="Enroll Now - $849"
                consultationText="Book a Free Call"
                videoImageUrl="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                videoBadgeLine1="100% Online"
                videoBadgeLine2="Live Interactive Sessions"
            />

            {/* 2. UPCOMING SCHEDULE */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30">
                <div className="max-w-3xl mb-12">
                     <Heading level={2} className="text-brand-deep-teal mb-4">Upcoming Schedule</Heading>
                     <Text>Flexible options to fit your availability. Choose between weekday and weekend batches.</Text>
                </div>
                
                <Grid cols={2} className="max-w-5xl">
                    {schedule.map((batch, idx) => (
                        <Card key={idx} className="rounded-2xl relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                            <div className="absolute top-0 right-0 bg-brand-structural-navy text-white text-xs uppercase font-bold tracking-widest py-1 px-3 rounded-bl-lg">
                                {batch.type}
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-brand-soft-teal/10 rounded-full flex items-center justify-center text-brand-soft-teal">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-structural-navy text-lg">{batch.date}</h4>
                                    <span className="text-base text-brand-secondary-text">{batch.days}</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-base text-brand-structural-navy">
                                    <Clock className="w-4 h-4 text-brand-secondary-text shrink-0" /> 
                                    {batch.time} <span className="text-brand-secondary-text text-sm">({batch.timezone})</span>
                                </div>
                                <div className="flex items-center gap-3 text-base text-brand-structural-navy">
                                    <Users className="w-4 h-4 text-brand-secondary-text shrink-0" /> 
                                    Facilitator: <span className="font-medium">{batch.facilitator}</span>
                                </div>
                            </div>
                            
                            <Button href="#enroll" variant="outline" className="w-full justify-center group-hover:bg-brand-deep-teal group-hover:text-white mt-auto">Select This Batch</Button>
                        </Card>
                    ))}
                </Grid>
            </Section>

            {/* 3. READY TO COACH / VISUAL OVERVIEW */}
            <Section theme="tint">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4">
                            <Brain className="w-4 h-4" /> Why Choose This Course
                        </div>
                        <Heading level={2} className="text-brand-deep-teal mb-6 text-3xl md:text-4xl">
                            Coach with Absolute Confidence & Precision
                        </Heading>
                        <Text className="mb-6 text-brand-structural-navy text-lg">
                            Go beyond traditional conversation. Develop skills to help clients assess and overcome both conscious and unconscious blocks.
                        </Text>
                        
                        <div className="space-y-6 mt-8">
                            {[
                                {
                                    title: "Integrative Approach",
                                    desc: "Blend hypnosis, NLP, emotional intelligence, and diagnostics into a unified framework."
                                },
                                {
                                    title: "Practical Application",
                                    desc: "60% of the course is focused on demonstration and hands-on practice, not just theory."
                                },
                                {
                                    title: "Proven Results",
                                    desc: "Backed by 11+ years of clinical application and continuous refinement."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-soft-teal/10 flex items-center justify-center shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal" />
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
                        <div className="absolute inset-0 bg-brand-soft-teal/10 rotate-3 rounded-3xl" />
                        <Card className="rounded-3xl p-8 relative bg-white shadow-xl border-brand-soft-neutral z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-brand-structural-navy rounded-full text-white flex items-center justify-center mb-6">
                                <Users className="w-8 h-8" />
                            </div>
                            <Heading level={3} className="text-brand-structural-navy mb-4">Who Should Enroll?</Heading>
                            <div className="space-y-4 w-full text-left mt-4 border-t border-brand-soft-neutral/30 pt-6">
                                <div className="bg-brand-warm-white p-4 rounded-xl border border-brand-soft-neutral/50">
                                    <div className="font-bold text-brand-structural-navy mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-brand-soft-teal" /> Life Coaches
                                    </div>
                                    <div className="text-base text-brand-secondary-text">Enhance your toolkit with powerful cognitive and hypnotic techniques.</div>
                                </div>
                                <div className="bg-brand-warm-white p-4 rounded-xl border border-brand-soft-neutral/50">
                                    <div className="font-bold text-brand-structural-navy mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-brand-accent-orange" /> Psychologists
                                    </div>
                                    <div className="text-base text-brand-secondary-text">Integrate coaching frameworks into your therapeutic practice for a holistic approach.</div>
                                </div>
                                <div className="bg-brand-warm-white p-4 rounded-xl border border-brand-soft-neutral/50">
                                    <div className="font-bold text-brand-structural-navy mb-1 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-brand-deep-teal" /> Wellness Practitioners
                                    </div>
                                    <div className="text-base text-brand-secondary-text">Offer comprehensive support by combining hypnosis, CBT, NLP, and mindfulness.</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* 4. CURRICULUM */}
            <Section theme="white">
                <div className="max-w-3xl mb-12">
                     <Heading level={2} className="text-brand-deep-teal mb-4">Full Curriculum Breakdown</Heading>
                     <Text>A detailed look into exactly what you will master during this comprehensive program.</Text>
                </div>
                
                <CurriculumAccordion curriculum={curriculum} />
            </Section>

            {/* 5. OUTCOMES */}
            <Section theme="dark" className="text-center">
                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="text-white mb-6">What You'll Be Able to Do</Heading>
                    <Text className="text-white/80 max-w-2xl mx-auto mb-12">
                        You will not only be able to put your learning to action, but also get the <strong>hands-on experience</strong> that will give you the <strong>confidence to start</strong> working with clients right after the completion of the course.
                    </Text>

                    <Grid cols={2} className="text-left mb-16">
                        {[
                            "Start taking one-on-one coaching sessions professionally",
                            "Use hypnosis and coaching models to help clients reach goals",
                            "Conduct impactful self-development or client-based change work",
                            "Prepare confidently for Level 2 (Advanced Coaching & Diagnostics)"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                                <Award className="w-6 h-6 text-brand-soft-teal shrink-0" />
                                <span className="font-medium text-white/90">{item}</span>
                            </div>
                        ))}
                    </Grid>
                </div>
            </Section>

            {/* 6. TESTIMONIALS */}
            <Section theme="tint">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-4">What Our Practitioners Say</Heading>
                    <div className="flex items-center justify-center gap-1 text-brand-accent-orange mb-2">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current" />)}
                    </div>
                    <Text size="sm" className="font-bold uppercase tracking-widest">Rated 5 out of 5 stars</Text>
                </div>

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
            </Section>

            {/* 7. FACILITATORS */}
            <Section theme="white">
                <div className="">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-brand-soft-teal font-bold uppercase tracking-widest text-xs mb-4">
                            Expert Guidance
                        </div>
                        <Heading level={2} className="text-brand-deep-teal mb-4">Your Facilitators</Heading>
                        <Text>Learn from leading professionals with decades of combined clinical and coaching experience.</Text>
                    </div>
                
                    <Grid cols={2} className="lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                        {facilitators.map((f, idx) => {
                            // Map names to specific unspash/placeholder portraits to make it look premium
                            const portraits = [
                                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", // Misba (Professional woman)
                                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", // Nitin (Professional man)
                                "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400", // Mamta
                                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400"  // Dhivyaraksha
                            ];
                            
                            return (
                                <Card key={idx} className="overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col sm:flex-row h-full border border-brand-soft-neutral/50 shadow-sm bg-white">
                                    <div className="sm:w-48 shrink-0 overflow-hidden relative">
                                        <img 
                                            src={portraits[idx]} 
                                            alt={f.name}
                                            className="w-full h-48 sm:h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-center">
                                        <h4 className="font-bold text-xl text-brand-structural-navy leading-tight mb-1">{f.name}</h4>
                                        <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">{f.role}</div>
                                        <Text size="sm" className="text-brand-secondary-text mb-0 leading-relaxed">
                                            {f.desc}
                                        </Text>
                                    </div>
                                </Card>
                            )
                        })}
                    </Grid>
                </div>
            </Section>

            {/* 8. WHAT NEXT */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral shadow-sm flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Next Step</div>
                        <Heading level={3} className="text-2xl text-brand-structural-navy mb-4">
                            Level 2: Cognitive Hypnotic Coaching – Advance Practitioner
                        </Heading>
                        <Text size="sm" className="mb-6 font-medium text-brand-secondary-text">
                            <strong>Topics:</strong> Metaphors, Dream Work, Conversational Hypnosis, NLP Meta Models and more.<br/><br/>
                            <strong>Outcome:</strong> Work with unconscious beliefs, values and positive intentions using a client-centered dynamic approach that adapts as per the requirements of the clients.
                        </Text>
                        <Button variant="outline" href="#level-2" className="bg-transparent text-base py-2">View Level 2 Details</Button>
                    </div>
                </div>
            </Section>
            
            {/* 9. BOTTOM CTA */}
            <Section theme="dark" className="text-center border-t border-white/10">
                <div className="max-w-4xl mx-auto relative z-10">
                    <Heading level={2} className="text-white mb-6">Begin Your Journey with a Strong Foundation</Heading>
                    <Text size="lg" className="text-white/80 mb-10 max-w-2xl mx-auto">
                        Empower yourself with tools that not only help your clients transform but also lead to your own emotional and professional growth.
                    </Text>
                    
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl inline-block mb-10">
                        <div className="text-3xl font-bold text-brand-soft-teal mb-6">$USD 849</div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <Button href="#enroll" className="w-full sm:w-auto px-10 py-4 bg-brand-soft-teal text-brand-structural-navy hover:bg-white transition-colors">Enroll Now</Button>
                        </div>
                    </div>
                    
                    <div className="text-base text-white/50 max-w-3xl mx-auto mt-8 border-t border-white/10 pt-8 text-left">
                        <strong>Terms and Conditions:</strong> Money-back guarantee is only applicable for participants who have attended the live class for the complete duration (7 days limit). Certificates will only be issued to participants who have attended the complete course and have completed all the practice sessions during the course.
                    </div>
                </div>
            </Section>

        </div>
    );
};
