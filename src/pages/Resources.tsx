import React from 'react';
import { Section, Heading, Text, Button, Card, Grid } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';

export const Resources = () => {
    return (
        <div className="pt-24 font-body">
            {/* HERO SECTION */}
            <Section theme="white" className="pt-16 pb-24 md:pt-24 md:pb-32">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <FadeIn>
                        <Heading level={1} className="mb-6">
                            Practitioner Resources & Insights
                        </Heading>
                        <Text size="xl" muted className="mb-10 max-w-2xl mx-auto">
                            A curated collection of tools, research, and insights to help you navigate 
                            complexity and develop a deeper, more intentional practitioner identity.
                        </Text>
                    </FadeIn>
                </div>
            </Section>

            {/* AI PRACTICE ASSISTANTS */}
            <Section theme="neutral" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Heading level={2} className="mb-4">AI Practice Assistants</Heading>
                        <Text size="lg" muted className="max-w-3xl mx-auto">
                            Interactive tools designed to demonstrate the difference between standard approaches 
                            and structured, framework-based therapeutic thinking.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <FadeIn delay={0.1}>
                            <Card className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-base font-bold text-brand-soft-teal uppercase tracking-widest mb-3">For Psychologists & Therapists</div>
                                    <Heading level={3} className="text-xl mb-4">Therapy Plan Integrator</Heading>
                                    <Text muted className="mb-6">
                                        Share the therapeutic approach you are trained in and a client challenge. 
                                        Get a therapy plan based on your current approach, and see how integrating 
                                        Cognitive Hypnotic Psychotherapy (CHP) can further enhance its effectiveness.
                                    </Text>
                                </div>
                                <div>
                                    <Button variant="outline" className="w-full">Try the Integrator (Coming Soon)</Button>
                                </div>
                            </Card>
                        </FadeIn>
                        
                        <FadeIn delay={0.2}>
                            <Card className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="text-base font-bold text-brand-soft-teal uppercase tracking-widest mb-3">For Coaches</div>
                                    <Heading level={3} className="text-xl mb-4">Coaching Approach Comparator</Heading>
                                    <Text muted className="mb-6">
                                        Share a specific client challenge you are facing. This tool will help you 
                                        understand how traditional surface-level coaching addresses it, and compare 
                                        it with the deeper, transformational resolution offered by Cognitive Hypnotic Coaching (CHC).
                                    </Text>
                                </div>
                                <div>
                                    <Button variant="outline" className="w-full">Try the Comparator (Coming Soon)</Button>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* RESEARCH & EVIDENCE */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <FadeIn>
                                <div className="text-base font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Empirical Foundations</div>
                                <Heading level={2} className="mb-6">The Science of Integration</Heading>
                                <Text muted className="mb-6">
                                    Meaningful practitioner development is grounded in evidence. We maintain a comprehensive 
                                    database of over 100 peer-reviewed research papers exploring the efficacy of integrating 
                                    cognitive, behavioral, psychodynamic, and hypnotic elements in therapy.
                                </Text>
                                <Text muted className="mb-8">
                                    Explore the clinical studies validating the integrative philosophies behind CHC and CHP.
                                </Text>
                                <Button href="#research">Access the Research Repository</Button>
                            </FadeIn>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <FadeIn delay={0.2}>
                                <div className="bg-brand-soft-neutral/30 p-8 rounded-3xl border border-brand-soft-neutral/50">
                                    <div className="flex flex-col gap-6">
                                        <div className="bg-white p-4 rounded-xl border border-brand-soft-neutral flex items-start gap-4">
                                            <div className="bg-brand-soft-teal/10 p-3 rounded-lg text-brand-deep-teal">
                                                <svg xmlns="http://www.0000.com/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-brand-structural-navy mb-1">Efficacy of Integrative Models</div>
                                                <div className="text-base text-brand-primary-text/70">34 papers on combined modality outcomes</div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-brand-soft-neutral flex items-start gap-4">
                                            <div className="bg-brand-soft-teal/10 p-3 rounded-lg text-brand-deep-teal">
                                                <svg xmlns="http://www.0000.com/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-brand-structural-navy mb-1">Hypnosis in Clinical Practice</div>
                                                <div className="text-base text-brand-primary-text/70">42 papers on cognitive hypnotic acceleration</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CONSISTENT LEARNING (PODCAST & NEWSLETTERS) */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Heading level={2} className="mb-4">Continuous Learning</Heading>
                        <Text size="lg" muted className="max-w-2xl mx-auto">
                            Practitioner capability develops over time. Stay engaged with layered human 
                            understanding through our weekly and bi-weekly insights.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FadeIn delay={0.1}>
                            <Card className="text-center h-full">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand-soft-neutral">
                                    <svg xmlns="http://www.0000.com/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF0000]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                                </div>
                                <Heading level={4} className="mb-2">Weekly Podcast</Heading>
                                <div className="text-base font-semibold text-brand-soft-teal mb-4">YOUTUBE</div>
                                <Text muted className="mb-6 flex-grow">
                                    Deep-dive discussions on therapeutic strategies, conceptualizing complex cases, 
                                    and the realities of practitioner development.
                                </Text>
                                <Button variant="outline" href="https://www.youtube.com/icharsonline/" target="_blank" rel="noopener noreferrer" className="w-full">Watch & Subscribe</Button>
                            </Card>
                        </FadeIn>
                        
                        <FadeIn delay={0.2}>
                            <Card className="text-center h-full">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand-soft-neutral">
                                    <svg xmlns="http://www.0000.com/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                                </div>
                                <Heading level={4} className="mb-2">Professional Insights</Heading>
                                <div className="text-base font-semibold text-brand-soft-teal mb-4">LINKEDIN NEWSLETTER (WEEKLY)</div>
                                <Text muted className="mb-6 flex-grow">
                                    Structured frameworks and practitioner reflections delivered to your professional 
                                    feed every week.
                                </Text>
                                <Button variant="outline" href="https://www.linkedin.com/school/icharsonline/" target="_blank" rel="noopener noreferrer" className="w-full">Subscribe on LinkedIn</Button>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <Card className="text-center h-full">
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand-soft-neutral">
                                    <svg xmlns="http://www.0000.com/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-deep-teal"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                </div>
                                <Heading level={4} className="mb-2">Ecosystem Updates</Heading>
                                <div className="text-base font-semibold text-brand-soft-teal mb-4">ICHARS NEWSLETTER (BI-WEEKLY)</div>
                                <Text muted className="mb-6 flex-grow">
                                    Curated articles, upcoming cohort announcements, and exclusive practitioner 
                                    resources sent straight to your inbox.
                                </Text>
                                <Button variant="outline" href="#subscribe" className="w-full">Join the Mailing List</Button>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* ARTICLES & BLOGS */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
                        <div className="max-w-2xl">
                            <Heading level={2} className="mb-4">From the Blog</Heading>
                            <Text muted>
                                Read our latest articles on cognitive hypnotic approaches, integration methods, 
                                and practical concepts for everyday therapy and coaching.
                            </Text>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <Button href="#blog" variant="secondary">View All Articles</Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CURATED RECOMMENDATIONS & COMMUNITY */}
            <Section theme="neutral" className="border-t border-brand-soft-neutral/30 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <FadeIn delay={0.1}>
                            <Card className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="bg-brand-soft-teal/10 w-12 h-12 rounded-xl flex items-center justify-center text-brand-deep-teal mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                                    </div>
                                    <Heading level={3} className="text-xl mb-4">Recommended Books</Heading>
                                    <Text muted className="mb-6">
                                        Books focusing on core concepts and applications. Explore our curated reading list 
                                        recommended for all coaches and therapists seeking to deepen their understanding of 
                                        human complexity.
                                    </Text>
                                </div>
                                <div>
                                    <a href="#recommended-books" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors">
                                        Explore Books <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </a>
                                </div>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Card className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="bg-brand-soft-teal/10 w-12 h-12 rounded-xl flex items-center justify-center text-brand-deep-teal mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    </div>
                                    <Heading level={3} className="text-xl mb-4">Join the Community</Heading>
                                    <Text muted className="mb-6">
                                        Practitioner development becomes more sustainable when learning is not isolated. 
                                        Connect with our global community of coaches, therapists, and psychology students 
                                        engaged in reflective development.
                                    </Text>
                                </div>
                                <div>
                                    <a href="https://www.facebook.com/groups/icharsonline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors">
                                        Join our Group <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </a>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </Section>
        </div>
    );
};
