import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { ActionCard } from '../components/ActionCard';
import { cn } from '../lib/utils';
import { 
    MessageSquare, 
    Compass, 
    ArrowRight, 
    CheckCircle2, 
    Layers, 
    Map, 
    UserSearch, 
    Network
} from 'lucide-react';

export const Consultation = () => {
    return (
        <div className="bg-brand-warm-white text-brand-primary-text mb-20 md:mb-32">
            {/* 1. HERO & CALENDAR SECTION */}
            <Section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden border-b border-brand-soft-neutral/30">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-structural-navy/5 via-brand-warm-white to-brand-soft-teal/10" />
                
                <div className="max-w-6xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <FadeIn className="w-full flex flex-col items-start text-left">
                        <div className="text-xs md:text-sm font-bold tracking-widest text-[#6EBAB5] bg-[#6EBAB5]/10 px-4 py-2 rounded-full border border-[#6EBAB5]/20 uppercase mb-6 inline-flex items-center justify-center">
                            Developmental Clarity
                        </div>
                        <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl text-brand-structural-navy font-bold leading-tight mb-6">
                            Find your next developmental step.
                        </Heading>
                        <Text size="xl" className="text-brand-secondary-text mb-8 text-lg font-medium">
                            Sometimes the clearest path forward is found through a structured conversation. Book a free consultation to map out your practitioner journey.
                        </Text>
                        
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-soft-neutral/50 shadow-sm w-full">
                            <h3 className="text-base font-bold text-brand-structural-navy mb-4 border-b border-brand-soft-neutral/20 pb-3">We can help you navigate:</h3>
                            <ul className="space-y-4 text-base text-brand-secondary-text font-medium">
                                <li className="flex items-start gap-3"><Compass className="w-5 h-5 text-brand-soft-teal shrink-0" /> Where to begin your training</li>
                                <li className="flex items-start gap-3"><Layers className="w-5 h-5 text-brand-soft-teal shrink-0" /> Which program fits your current level</li>
                                <li className="flex items-start gap-3"><UserSearch className="w-5 h-5 text-brand-soft-teal shrink-0" /> What learning environment suits you</li>
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="relative">
                        <div className="bg-white rounded-[2rem] border border-brand-soft-neutral/50 p-4 shadow-xl relative min-h-[500px] flex flex-col justify-center">
                            <div className="bg-brand-warm-white/50 border border-brand-soft-neutral/50 rounded-xl p-8 flex flex-col items-center justify-center text-brand-secondary-text text-center h-full min-h-[460px]">
                                <MessageSquare className="w-12 h-12 mb-4 text-[#6EBAB5]" />
                                <span className="font-bold text-xl text-brand-structural-navy mb-2">Calendar Widget Placeholder</span>
                                <span className="text-base max-w-[280px]">The scheduling/calendar embed (e.g. Calendly, Acuity) will be placed here during integration.</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. WHAT HAPPENS DURING CONSULTATION */}
            <Section id="consultation-process" className="py-20 bg-brand-structural-navy text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft-teal rounded-full mix-blend-screen filter blur-3xl" />
                </div>
                
                <div className="max-w-5xl mx-auto px-4 relative z-10 grid lg:grid-cols-[1fr_300px] gap-12 items-center">
                    <div>
                        <div className="text-xs uppercase font-bold tracking-widest text-[#6EBAB5] mb-4">What Happens During the Consultation</div>
                        <Heading level={2} className="text-3xl md:text-4xl text-white font-bold mb-6">
                            A structured practitioner-guidance conversation focused on clarity, fit, and progression.
                        </Heading>
                        <Text size="lg" className="text-white/80 mb-8">
                            The consultation is designed as a reflective discussion. Depending on your situation, we may explore your background, learning preferences, long-term goals, and current confidence level.
                        </Text>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <h3 className="font-bold text-[#6EBAB5] text-base">We Help Clarify:</h3>
                                <ul className="space-y-2 text-base text-white/90">
                                    <li className="flex items-start gap-2">• Internship vs CHC vs CHP</li>
                                    <li className="flex items-start gap-2">• Programs vs Cohorts</li>
                                    <li className="flex items-start gap-2">• Foundational vs Advanced</li>
                                    <li className="flex items-start gap-2">• Readiness for specialization</li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-5 rounded-xl border border-white/20 backdrop-blur-sm">
                                <div className="text-base italic font-medium text-white/90 text-center">
                                    "The purpose is not selling the highest-level option. The purpose is helping you identify the most developmentally appropriate next step."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-xl text-left hidden lg:block border border-brand-soft-teal">
                        <h3 className="text-sm font-bold text-brand-structural-navy uppercase tracking-wide text-center mb-6">Conversational Flow</h3>
                        <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-brand-soft-neutral/30">
                            {[
                                "Current Background",
                                "Challenges & Questions",
                                "Goals & Preferences",
                                "Pathway Clarification",
                                "Suggested Direction"
                            ].map((step, i) => (
                                <div key={i} className="relative flex items-center gap-4 text-base font-semibold text-brand-structural-navy">
                                    <div className="w-6 h-6 rounded-full bg-brand-soft-teal/20 border-2 border-brand-soft-teal flex items-center justify-center shrink-0 z-10 bg-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" />
                                    </div>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. EXPLORE PATHWAYS REDIRECT */}
            <Section id="explore-paths" className="py-20 bg-brand-warm-white border-y border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <Heading level={2} className="text-3xl md:text-4xl text-brand-structural-navy font-bold mb-6">
                        Want to explore the pathways independently first?
                    </Heading>
                    <Text size="lg" className="text-brand-secondary-text mb-12">
                        If you prefer to understand the complete landscape of our programs, cohorts, and specializations before booking a consultation, we have dedicated resources to guide you.
                    </Text>
                    
                    <div className="grid sm:grid-cols-2 gap-6 text-left">
                        <ActionCard
                            title="Find Your Starting Point"
                            description="Use our interactive guide to map your current stage to the most developmentally appropriate next step."
                            icon={Map}
                            buttonText="Explore Starting Points"
                            href="#start"
                        />
                        <ActionCard
                            title="Discover the Ecosystem"
                            description="See how all our programs, cohorts, and specializations connect into one comprehensive practitioner framework."
                            icon={Network}
                            buttonText="View Full Ecosystem"
                            href="#programs"
                        />
                    </div>
                </div>
            </Section>

            {/* 4. WHAT PRACTITIONERS REALIZE */}
            <Section id="realizations" className="py-20 overflow-hidden bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <Heading level={2} className="text-3xl md:text-4xl text-brand-structural-navy font-bold mb-6">
                            What practitioners realize during the conversation.
                        </Heading>
                        <Text size="lg" className="text-brand-secondary-text max-w-2xl mx-auto">
                            Many enter the consultation feeling overwhelmed by options. The conversation helps them move from confusion about possibilities toward clarity about progression.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                before: "I thought I had to choose my specialization today.",
                                after: "I realized I just need to build stronger foundations first in CHC.",
                                role: "Coach"
                            },
                            {
                                before: "I was trying to compare every pathway endlessly.",
                                after: "The next clear step was obvious once we mapped out my current stage.",
                                role: "Psychology Student"
                            },
                            {
                                before: "I felt like I was collecting disconnected trainings.",
                                after: "We structured a clear path for integrative depth that made sense to me.",
                                role: "Therapist"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-brand-warm-white border border-brand-soft-neutral/50 rounded-2xl p-6 shadow-sm relative">
                                <div className="text-sm font-bold uppercase tracking-widest text-brand-soft-teal mb-4">{item.role} Snapshot</div>
                                <div className="space-y-4">
                                    <div className="relative pl-4 border-l-2 border-brand-soft-neutral/30">
                                        <div className="text-sm font-bold text-brand-secondary-text mb-1 uppercase">Entered Feeling</div>
                                        <p className="text-base font-medium text-brand-structural-navy/60 italic">"{item.before}"</p>
                                    </div>
                                    <div className="relative pl-4 border-l-2 border-brand-soft-teal/50">
                                        <div className="text-sm font-bold text-brand-structural-navy mb-1 uppercase">Left Realizing</div>
                                        <p className="text-base font-bold text-brand-structural-navy">"{item.after}"</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. FAQ PREVIEW */}
            <Section id="faq-preview" className="py-20 bg-brand-warm-white border-t border-brand-soft-neutral/30">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <Heading level={2} className="text-3xl md:text-4xl text-brand-structural-navy font-bold mb-6">
                        Still have questions?
                    </Heading>
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-brand-soft-neutral/50 shadow-sm text-left">
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-brand-soft-teal" /></div>
                                <div>
                                    <div className="font-bold text-brand-structural-navy mb-1">What if I do not feel ready yet?</div>
                                    <p className="text-base text-brand-secondary-text font-medium">Confidence usually develops during the process, not before it.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-brand-soft-teal" /></div>
                                <div>
                                    <div className="font-bold text-brand-structural-navy mb-1">Can I begin small and deepen later?</div>
                                    <p className="text-base text-brand-secondary-text font-medium">Yes. The ecosystem is explicitly designed for progressive refinement over time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="#faq" className="inline-flex flex-col items-center group font-bold text-brand-structural-navy hover:text-brand-soft-teal transition-colors">
                                <span>Read Comprehensive FAQ</span>
                                <div className="h-0.5 w-full bg-brand-soft-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

