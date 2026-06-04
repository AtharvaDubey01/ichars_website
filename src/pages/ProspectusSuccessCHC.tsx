import React from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { CheckCircle2, ArrowRight, Calendar, LayoutTemplate, PlayCircle } from 'lucide-react';

export const ProspectusSuccessCHC = () => {
    return (
        <div className="pt-24 min-h-screen bg-brand-warm-white">
            <Section className="pb-20 pt-4 md:pt-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="w-16 h-16 bg-[#6EBAB5]/20 text-[#6EBAB5] rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <Heading level={1} className="text-4xl md:text-5xl text-brand-structural-navy mb-6">
                        Check Your Inbox!
                    </Heading>
                    <Text size="lg" className="text-brand-secondary-text mb-4">
                        The <strong>Cognitive Hypnotic Coaching (CHC)</strong> prospectus has been sent to your email. It should arrive within the next 5 minutes.
                    </Text>
                    <Text className="text-brand-secondary-text text-base mb-8">
                        If you don't see it, please check your spam or promotions folder.
                    </Text>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="text-center mb-8">
                        <div className="text-xs uppercase font-bold tracking-widest text-[#6EBAB5] mb-2">Watch the Video</div>
                        <Heading level={2} className="text-2xl md:text-3xl text-brand-structural-navy mb-4">
                            While you wait, understand the CHC framework
                        </Heading>
                        <Text size="lg" className="text-brand-secondary-text max-w-2xl mx-auto">
                            If you've ever felt that traditional coaching tools don't go deep enough to create lasting behavioral change, this short video explains how an integrative framework addresses the true root of client resistance.
                        </Text>
                    </div>

                    <div className="bg-brand-structural-navy rounded-2xl overflow-hidden shadow-xl border border-brand-soft-neutral/30">
                        <div className="bg-[#1a2f40] px-6 py-4 border-b border-white/10 flex justify-between items-center">
                            <h2 className="text-white font-semibold">How CHC creates profound transformational change</h2>
                            <span className="text-[#6EBAB5] text-base font-medium">16:00</span>
                        </div>
                        <div className="aspect-video bg-[#0a151d] relative group cursor-pointer flex justify-center items-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6EBAB5]/10 to-transparent opacity-50" />
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6EBAB5]/20 transition-all duration-300 z-10">
                                <PlayCircle className="w-10 h-10 text-white ml-1" />
                            </div>
                            <div className="absolute bottom-6 text-center w-full z-10 px-4">
                                <p className="text-white/70 text-base">Video Player Placeholder (Wistia/YouTube Embed)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Heading level={2} className="text-2xl text-center text-brand-structural-navy mb-10">
                        What would you like to do next?
                    </Heading>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-2xl border border-brand-soft-neutral/50 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <Heading level={3} className="text-xl text-brand-structural-navy mb-3">
                                Discuss Your Pathway
                            </Heading>
                            <Text size="sm" className="mb-6">
                                Unsure if CHC is the right starting point for your goals? Book a free consultation call to get clarity on the best learning pathway for you.
                            </Text>
                            <Button href="#consultation" variant="outline" className="w-full group">
                                Book a Free Consultation
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-brand-soft-neutral/50 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-[#6EBAB5]/10 text-brand-soft-teal rounded-xl flex items-center justify-center mb-6">
                                <LayoutTemplate className="w-6 h-6" />
                            </div>
                            <Heading level={3} className="text-xl text-brand-structural-navy mb-3">
                                Explore the Ecosystem
                            </Heading>
                            <Text size="sm" className="mb-6">
                                The CHC Diploma is part of a much wider ecosystem of practitioner development. See how all our programs, cohorts, and resources connect.
                            </Text>
                            <Button href="#programs" variant="outline" className="w-full group">
                                View the Full Ecosystem
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
