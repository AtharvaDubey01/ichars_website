import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { MonitorPlay, Clock, Calendar, ArrowRight, Video, CalendarDays } from 'lucide-react';

export const Webinars = () => {
    return (
        <div className="bg-brand-warm-white text-brand-primary-text mb-20 md:mb-32">
            
            {/* HERO SECTION */}
            <Section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden border-b border-brand-soft-neutral/30">
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-soft-teal/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2" />
                </div>
                
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-structural-navy/5 border border-brand-structural-navy/10 text-brand-structural-navy font-medium text-sm tracking-wide uppercase mb-6">
                            <MonitorPlay className="w-4 h-4 text-brand-deep-teal" />
                            Upcoming Professional Development
                        </div>
                        <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl text-brand-structural-navy font-bold mb-6 tracking-tight">
                            Webinars & Masterclasses
                        </Heading>
                        <Text className="text-lg md:text-xl text-brand-secondary-text mb-10 max-w-2xl mx-auto">
                            Elevate your practice with our live sessions. Learn structured frameworks from expert practitioners to achieve lasting results.
                        </Text>
                    </FadeIn>
                </div>
            </Section>

            {/* UPCOMING WEBINARS / MASTERCLASSES spotlight */}
            <Section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <Heading level={2} className="text-3xl font-bold text-brand-structural-navy mb-4">Masterclass Spotlight</Heading>
                        <Text className="max-w-2xl mx-auto text-brand-secondary-text">Deep dive into specialized psychological approaches with our interactive online events.</Text>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        
                        {/* Masterclass 1 */}
                        <FadeIn delay={0.1} className="group bg-white rounded-3xl border border-brand-soft-neutral shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                            <div className="aspect-video bg-brand-structural-navy relative overflow-hidden flex items-center justify-center p-8 text-center border-b border-brand-soft-neutral/30">
                                <div className="absolute inset-0 bg-[#6EBAB5]/10" />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-structural-navy/90 to-transparent" />
                                <div className="relative z-10">
                                    <div className="text-white/70 font-bold text-sm uppercase tracking-widest mb-3">3-Day Intensive</div>
                                    <h3 className="text-xl md:text-2xl font-bold font-heading text-white leading-snug">
                                        Cognitive Hypnotic Psychotherapy
                                    </h3>
                                </div>
                            </div>
                            
                            <div className="p-8 flex-1 flex flex-col">
                                <Text className="text-brand-secondary-text text-base mb-6 flex-1">
                                    Understand the core principles of an eclectic timeline-based therapeutic approach combining clinical hypnotherapy, NLP, and cognitive behaviour frameworks.
                                </Text>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-base font-medium text-brand-structural-navy">
                                        <CalendarDays className="w-5 h-5 text-brand-soft-teal" />
                                        <span>October 15-17, 2026</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base font-medium text-brand-structural-navy">
                                        <Clock className="w-5 h-5 text-brand-soft-teal" />
                                        <span>7:30 PM - 9:30 PM (IST)</span>
                                    </div>
                                </div>
                                <Button href="#register" className="w-full justify-center px-6 py-3">Reserve Your Spot</Button>
                            </div>
                        </FadeIn>

                        {/* Masterclass 2 */}
                        <FadeIn delay={0.2} className="group bg-white rounded-3xl border border-brand-soft-neutral shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
                            <div className="aspect-video bg-[#F5B461]/20 relative overflow-hidden flex items-center justify-center p-8 text-center border-b border-brand-soft-neutral/30">
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-structural-navy/90 to-transparent" />
                                <div className="relative z-10">
                                    <div className="text-white/70 font-bold text-sm uppercase tracking-widest mb-3">Professional Development</div>
                                    <h3 className="text-xl md:text-2xl font-bold font-heading text-white leading-snug">
                                        Beyond Band-Aids:<br/>School Counselling Process
                                    </h3>
                                </div>
                            </div>
                            
                            <div className="p-8 flex-1 flex flex-col">
                                <Text className="text-brand-secondary-text text-base mb-6 flex-1">
                                    Move beyond temporary behavioral fixes. Learn the integrated framework for identifying and addressing the root causes of socio-emotional and academic challenges in students.
                                </Text>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-base font-medium text-brand-structural-navy">
                                        <CalendarDays className="w-5 h-5 text-[#F5B461]" />
                                        <span>November 05, 2026</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base font-medium text-brand-structural-navy">
                                        <Clock className="w-5 h-5 text-[#F5B461]" />
                                        <span>10:30 AM - 1:00 PM (IST)</span>
                                    </div>
                                </div>
                                <Button href="#register" className="w-full justify-center bg-brand-structural-navy hover:bg-brand-structural-depth px-6 py-3">Register for Free</Button>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </Section>

            {/* FREE WEBINARS AND RECORDINGS */}
            <Section className="py-20 bg-brand-warm-white border-y border-brand-soft-neutral/30">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Heading level={2} className="text-3xl font-bold text-brand-structural-navy mb-6">Looking for more resources?</Heading>
                    <Text className="max-w-2xl mx-auto text-brand-secondary-text mb-10">
                        Join our practitioner community to access previous masterclass recordings, case-study breakdowns, and short-form conversational webinars designed for continuous learning.
                    </Text>
                    <Button variant="outline" href="#join-community" className="border-brand-structural-navy text-brand-structural-navy px-8 py-3">Browse Past Recordings</Button>
                </div>
            </Section>

        </div>
    );
};
