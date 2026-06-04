import React from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { Share2, DollarSign, BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export function AffiliateProgram() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <Section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-soft-teal/5 md:bg-brand-soft-teal/10 -skew-x-12 transform origin-top-right z-0"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-soft-teal/10 text-brand-soft-teal rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                        <Share2 className="w-4 h-4" aria-hidden="true" /> Partner With Us
                    </div>
                    <Heading level={1} className="text-brand-structural-navy mb-6">
                        Join the ICHARS Affiliate Program
                    </Heading>
                    <Text size="lg" className="text-brand-secondary-text mb-8 max-w-2xl mx-auto">
                        Partner with a leading institute in cognitive hypnotic methodologies. Help us spread transformational education while earning meaningful commissions.
                    </Text>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button href="#join-now" className="w-full sm:w-auto px-8 py-4">Sign Up Now</Button>
                        <Button variant="outline" href="#benefits" className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-sm">Discover Benefits</Button>
                    </div>
                </div>
            </Section>

            {/* Benefits Section */}
            <Section id="benefits" theme="white" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <Heading level={2} className="text-brand-deep-teal mb-4">Program Benefits</Heading>
                    <Text size="lg">Why partner with ICHARS?</Text>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <DollarSign className="w-6 h-6" aria-hidden="true" />, title: "Generous Commissions", desc: "Earn competitive commissions on every successful enrollment in our CHC, CHP, and other specialized programs." },
                        { icon: <BookOpen className="w-6 h-6" aria-hidden="true" />, title: "High-Quality Programs", desc: "Promote comprehensive, well-structured, and globally recognized curriculum that genuinely benefits practitioners." },
                        { icon: <Users className="w-6 h-6" aria-hidden="true" />, title: "Dedicated Support", desc: "Gain access to promotional materials, brand guides, and dedicated support to help you maximize your success." }
                    ].map((benefit, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-soft-neutral">
                            <div className="w-12 h-12 bg-brand-soft-teal/10 text-brand-soft-teal rounded-xl flex items-center justify-center mb-6">
                                {benefit.icon}
                            </div>
                            <Heading level={4} className="text-brand-structural-navy mb-3">{benefit.title}</Heading>
                            <Text size="sm" className="mb-0 leading-relaxed text-brand-secondary-text">{benefit.desc}</Text>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Perfect Partners */}
            <Section id="join-now" theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Who is this for?</div>
                        <Heading level={2} className="text-brand-deep-teal mb-6">Perfect Partners</Heading>
                        <Text size="lg" className="mb-8">
                            Our affiliate program is designed for individuals and organizations who share our passion for high-quality psychology, coaching, and therapeutic education.
                        </Text>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Psychology educators and professors",
                                "Mental health and coaching influencers",
                                "Practitioners with an established audience",
                                "Educational and career counselors",
                                "Wellness and mental health bloggers"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0 mt-0.5" />
                                    <span className="text-brand-structural-navy">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-soft-neutral">
                        <Heading level={3} className="text-brand-structural-navy mb-8 text-center">How to Join?</Heading>
                        <div className="space-y-8">
                            {[
                                { step: "1", title: "Apply", desc: "Fill out our simple affiliate application form with details about how you plan to promote ICHARS." },
                                { step: "2", title: "Get Approved", desc: "Our team will review your application to ensure a good fit for our brand values." },
                                { step: "3", title: "Promote & Earn", desc: "Access your unique referral links and start earning commissions for every successful enrollment." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-deep-teal text-white flex items-center justify-center font-bold shrink-0">
                                        {step.step}
                                    </div>
                                    <div>
                                        <div className="font-bold text-brand-structural-navy mb-1">{step.title}</div>
                                        <Text size="sm" className="mb-0 text-brand-secondary-text">{step.desc}</Text>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section className="border-t border-brand-soft-neutral/30 bg-brand-structural-navy text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <Heading level={2} className="text-white mb-6">Ready to become an ICHARS Affiliate?</Heading>
                    <Text size="lg" className="text-white/80 mb-10">
                        Join our network of partners and help us bring sophisticated, framework-based therapeutic and coaching education to more practitioners.
                    </Text>
                    <Button variant="secondary" className="px-10 py-5 text-lg" href="#join-now">
                        Apply to the Program <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                    </Button>
                </div>
            </Section>
        </div>
    );
}
