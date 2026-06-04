import React from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { CheckCircle2, ArrowRight, Calendar, LayoutTemplate } from 'lucide-react';

export const ProspectusSuccessRelationship = () => {
    return (
        <div className="pt-24 min-h-screen bg-brand-warm-white">
            <Section className="pb-20 pt-4 md:pt-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="w-16 h-16 bg-brand-soft-teal/20 text-brand-soft-teal rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <Heading level={1} className="text-4xl md:text-5xl text-brand-structural-navy mb-6">
                        Check Your Inbox!
                    </Heading>
                    <Text size="lg" className="text-brand-secondary-text mb-4">
                        The <strong>Relationship Counseling Specialization</strong> prospectus has been sent to your email. It should arrive within the next 5 minutes.
                    </Text>
                    <Text className="text-brand-secondary-text text-base mb-8">
                        If you don't see it, please check your spam or promotions folder.
                    </Text>
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
                                Have questions about eligibility or integrating this specialization into your existing practice? Let's talk.
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
                                Learn how this specialization builds upon our core Cognitive Hypnotic methodologies in the wider ICHARS ecosystem.
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
