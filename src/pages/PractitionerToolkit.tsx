import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Section, Heading, Text, Button, Card, Grid } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';


const BioCard = ({ title, text, boldText }: { title: string; text: string; boldText: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const highlightVariables = (content: string) => {
        const parts = content.split(/(\[[^\]]+\])/g);
        return parts.map((part, index) => {
            if (part.startsWith('[') && part.endsWith(']')) {
                return <span key={index} className="text-brand-deep-teal bg-brand-soft-teal/30 px-1.5 py-0.5 rounded font-medium border border-brand-deep-teal/20 mx-0.5">{part}</span>;
            }
            if (part === boldText) {
                return <strong key={index} className="text-brand-structural-navy font-bold">{part}</strong>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    // To handle bold, we replace boldText with exact match
    const withBold = text.split(boldText);
    const renderContent = () => {
        if (withBold.length === 2) {
             return <>{highlightVariables(withBold[0])}<strong className="text-brand-structural-navy font-bold">{boldText}</strong>{highlightVariables(withBold[1])}</>;
        }
        return highlightVariables(text);
    };

    return (
        <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral p-6 rounded-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <Heading level={4} className="text-base text-brand-structural-navy m-0">{title}</Heading>
                <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-sm font-semibold text-brand-deep-teal bg-white border border-brand-deep-teal/30 px-3 py-1.5 rounded-full hover:bg-brand-soft-teal/30 transition-colors shadow-sm"
                >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? 'Copied!' : 'Copy text'}
                </button>
            </div>
            <div className="bg-white p-5 rounded-xl border border-brand-soft-neutral/50 text-base text-brand-secondary-text leading-relaxed shadow-inner">
                {renderContent()}
            </div>
        </Card>
    );
};

const ResourceCard = ({ title, description, href, embedHtml = false, imageUrl = '' }: { title: string; description: string; href: string; embedHtml?: boolean; imageUrl?: string; }) => {
    const [copied, setCopied] = useState(false);
    
    // For badges, provide embeddable HTML. For articles/links, provide the direct URL.
    const copyContent = embedHtml 
        ? `<a href=\"${href}\"><img src=\"${imageUrl}\" alt=\"${title}\" /></a>`
        : href;

    const handleCopy = () => {
        navigator.clipboard.writeText(copyContent);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <FadeIn>
            <Card className="flex flex-col h-full bg-white border-brand-soft-neutral shadow-sm hover:shadow-md transition-all p-6 rounded-2xl">
                {embedHtml && imageUrl && (
                    <div className="mb-6 bg-gradient-to-br from-[#f8fcfc] to-brand-soft-neutral/30 rounded-xl border border-brand-soft-neutral/60 flex items-center justify-center p-6 min-h-[180px] shadow-sm overflow-hidden relative group-hover:border-brand-soft-teal/50 transition-colors">
                        <img src={imageUrl} alt={title} className="max-h-36 object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                    </div>
                )}
                <div className="flex-grow">
                    <Heading level={4} className="mb-2 text-base text-brand-structural-navy leading-tight">
                        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-brand-deep-teal transition-colors">{title}</a>
                    </Heading>
                    <Text size="sm" muted className="mb-4">{description}</Text>
                </div>
                <div className="mt-4 pt-4 border-t border-brand-soft-neutral/50 flex flex-col gap-3">
                    <div className="text-sm text-brand-secondary-text bg-brand-soft-neutral/10 p-2.5 rounded overflow-x-auto whitespace-nowrap w-full font-mono border border-brand-soft-neutral/30">
                        {copyContent}
                    </div>
                    <button 
                        onClick={handleCopy}
                        className="flex justify-center items-center gap-1.5 text-sm font-semibold text-brand-structural-navy bg-white border border-brand-soft-neutral/50 px-3 py-2 rounded-lg hover:bg-brand-soft-neutral/10 transition-colors shadow-sm w-full cursor-pointer"
                    >
                        {copied ? <Check size={14} className="text-brand-deep-teal" /> : <Copy size={14} />}
                        {copied ? 'Copied' : (embedHtml ? 'Copy HTML Snippet' : 'Copy Link')}
                    </button>
                 </div>
            </Card>
        </FadeIn>
    );
};

export const PractitionerToolkit = () => {
    return (
        <div className="font-body pb-24">
            <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-brand-soft-neutral shadow-sm overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="max-w-7xl mx-auto px-6 py-4 flex gap-6 text-base font-semibold whitespace-nowrap">
                    <a href="#categories" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Asset Categories</a>
                    <a href="#articles" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Research & Articles</a>
                    <a href="#courses" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Courses</a>
                    <a href="#bio-templates" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Bio Templates</a>
                    <a href="#credentials" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Badges</a>
                    <a href="#media-assets" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Media Assets</a>
                </div>
            </div>

            {/* HERO SECTION */}
            <Section theme="white" className="pt-16 pb-24 md:pt-24 md:pb-32">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <FadeIn>
                        <Heading level={1} className="mb-6 text-4xl md:text-5xl font-accent text-brand-deep-teal">
                            Practitioner Toolkit & Media Hub
                        </Heading>
                        <Text size="xl" muted className="mb-10 max-w-2xl mx-auto">
                            A comprehensive resource hub designed to enrich your practice, enhance your platform, 
                            and help you communicate your expertise seamlessly to clients and peers.
                        </Text>
                        <div className="flex justify-center gap-4">
                            <Button href="#categories" variant="primary">Explore Assets</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* AUDIENCE PATHS */}
            <Section theme="neutral" className="border-t border-brand-soft-neutral/30 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <Grid cols={2} className="gap-6">
                        <FadeIn delay={0.1}>
                            <Card className="h-full flex flex-col p-6 border-t-4 border-t-brand-soft-teal hover:shadow-md transition-all bg-white border border-brand-soft-neutral shadow-sm">
                                <div className="mb-6 text-brand-deep-teal bg-brand-soft-teal/10 w-16 h-16 rounded-full flex items-center justify-center">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <Heading level={3} className="text-xl mb-4 font-heading text-brand-structural-navy">For ICHARS Practitioners</Heading>
                                <Text muted className="mb-6 flex-grow">
                                    Complement your training with clinical articles, theoretical frameworks, and 
                                    methodologies tailored to reinforce session concepts and communicate your 
                                    ICHARS qualifications effectively.
                                </Text>
                                <div>
                                    <Button variant="outline" href="#categories" className="w-full">Explore Practitioner Assets</Button>
                                </div>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Card className="h-full flex flex-col p-6 border-t-4 border-t-brand-primary-text hover:shadow-md transition-all bg-white border border-brand-soft-neutral shadow-sm">
                                <div className="mb-6 text-brand-structural-navy bg-brand-soft-neutral w-16 h-16 rounded-full flex items-center justify-center">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                                </div>
                                <Heading level={3} className="text-xl mb-4 font-heading text-brand-structural-navy">For Wellness Partners</Heading>
                                <Text muted className="mb-6 flex-grow">
                                    Elevate your content strategy with authoritative references, clinical insights, 
                                    and engaging multimedia resources to construct well-informed wellness narratives.
                                </Text>
                                <div>
                                    <Button variant="outline" href="#categories" className="w-full">Access Media & Content</Button>
                                </div>
                            </Card>
                        </FadeIn>
                    </Grid>
                </div>
            </Section>

            {/* RESOURCE CATEGORIES */}
            <Section theme="white" id="categories" className="border-t border-brand-soft-neutral/30 pb-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Heading level={2} className="mb-4">Asset Categories</Heading>
                        <Text size="lg" muted className="max-w-3xl mx-auto">
                            Curated tools designed to visually represent your expertise and deepen your clients' understanding.
                        </Text>
                    </div>

                    <Grid cols={3} className="gap-6">
                        <FadeIn delay={0.1}>
                            <Card className="flex flex-col h-full bg-brand-soft-neutral/10 p-6 rounded-2xl border border-brand-soft-neutral/50">
                                <div className="w-fit bg-white p-4 rounded-xl text-brand-deep-teal mb-6 shadow-sm border border-brand-soft-neutral">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 10 2 2 4-4"/></svg>
                                </div>
                                <Heading level={4} className="mb-3 font-heading text-lg text-brand-structural-navy">Badges & Credentials</Heading>
                                <Text muted className="mb-6">
                                    Official ICHARS credentials to host on your practice website, validating your training 
                                    in Cognitive Hypnotic Psychotherapy and Coaching.
                                </Text>
                                <a href="#credentials" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors mt-auto">
                                    View Digital Badges <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </a>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Card className="flex flex-col h-full bg-brand-soft-neutral/10 p-6 rounded-2xl border border-brand-soft-neutral/50">
                                <div className="w-fit bg-white p-4 rounded-xl text-brand-deep-teal mb-6 shadow-sm border border-brand-soft-neutral">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/><line x1="8" y1="8" x2="8.01" y2="8"/></svg>
                                </div>
                                <Heading level={4} className="mb-3 font-heading text-lg text-brand-structural-navy">Core Framework Articles</Heading>
                                <Text muted className="mb-6">
                                    Peer-reviewed articles, explanatory frameworks, and the conceptual philosophies of 
                                    ICHARS that you can link to for psychoeducation.
                                </Text>
                                <a href="#articles" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors mt-auto">
                                    Explore Articles <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </a>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <Card className="flex flex-col h-full bg-brand-soft-neutral/10 p-6 rounded-2xl border border-brand-soft-neutral/50">
                                <div className="w-fit bg-white p-4 rounded-xl text-brand-deep-teal mb-6 shadow-sm border border-brand-soft-neutral">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                                </div>
                                <Heading level={4} className="mb-3 font-heading text-lg text-brand-structural-navy">Brand & Press Materials</Heading>
                                <Text muted className="mb-6">
                                    Official logos, high-resolution media materials, and brand guidelines for 
                                    interviews, features, or affiliated marketing.
                                </Text>
                                <a href="#media-assets" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors mt-auto">
                                    Access Press Kit <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </a>
                            </Card>
                        </FadeIn>
                    </Grid>
                </div>
            </Section>

            {/* IN-DEPTH ARTICLES & RESEARCH PAPERS */}
            <Section theme="neutral" id="articles" className="border-t border-brand-soft-neutral/30 pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="mb-4 text-brand-structural-navy">In-depth Articles and Research Papers</Heading>
                        <Text size="lg" muted>
                            Core concepts, peer-reviewed papers, and masterclasses available for reference on your platform.
                        </Text>
                    </div>

                                        <Grid cols={3} className="gap-6 mb-8">
                        <ResourceCard title="What is Cognitive Hypnotic Coaching®?" description="Explore the most powerful and advance coaching approach" href="https://instituteofclinicalhypnosis.com/psychotherapy-coaching/what-is-cognitive-hypnotic-coaching/" />
                        <ResourceCard title="What is Cognitive Hypnotic Psychotherapy®?" description="Comprehensive Approach Unifies All Major Psychotherapy Methods" href="https://instituteofclinicalhypnosis.com/psychotherapy-coaching/unifying-approach-to-psychotherapy/" />
                        <ResourceCard title="Hypnosis" description="Exploring Hypnosis: Trance States, Pain Relief, Hallucinations" href="https://instituteofclinicalhypnosis.com/hypnosis/what-is-hypnosis/" />
                        <ResourceCard title="Neuro Linguistic Programming" description="Insightful Podcast: Explore Neuro-Linguistic Programming with Expert" href="https://instituteofclinicalhypnosis.com/nlp/defining-neuro-linguistic-programming-in-simple-terms/" />
                        <ResourceCard title="SOFT SEA COACHING MODEL" description="Comprehensive Guide: Master Coaching, Models, and Competencies" href="https://instituteofclinicalhypnosis.com/psychotherapy-coaching/what-is-coaching-and-coaching-models/" />
                        <ResourceCard title="Hypnotherapy" description="Complete guide to Hypnotherapy" href="https://instituteofclinicalhypnosis.com/hypnosis/what-is-hypnotherapy/" />
                        <ResourceCard title="Free Masterclass for Psychologists" description="Free Masterclass on Eclectic Approach to Psychotherapy (Youtube)" href="https://ichars.com/trutalk-4-therapists" />
                        <ResourceCard title="Youtube Masterclass on Happy Living" description="Masterclass on living a happy and fulfilling life" href="https://www.youtube.com/playlist?list=PLqqlTqGHoAuRS415Nr7rTRNllL5LveylW" />
                        <ResourceCard title="Therapeutic Techniques" description="Youtube Playlist with step by step guides for advance therapy techniques" href="https://ichars.com/yt-qt4t-playlist" />
                        <ResourceCard title="Research Papers" description="Research papers on integrative psychotherapy" href="https://instituteofclinicalhypnosis.com/psychotherapy-coaching/research-papers-on-integrated-approaches-to-psychotherapy/" />
                        <ResourceCard title="Psychotherapy Case Studies" description="Structured case studies of psychotherapy sessions" href="https://instituteofclinicalhypnosis.com/tag/case-study" />
                    </Grid>
                </div>
            </Section>

            {/* COURSES & AFFILIATION ASSETS */}
            <Section theme="white" id="courses" className="pb-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="mb-4 text-brand-structural-navy">Courses for Psychologists and Coaches</Heading>
                        <Text size="lg" muted>
                            Use these assets when referring peers or clients to specific professional capabilities. Ideal for affiliates.
                        </Text>
                    </div>

                                        <Grid cols={3} className="gap-6">
                        <ResourceCard title="ICHARS Courses" description="Advance skill building courses for Psychologists and Coaches" href="https://instituteofclinicalhypnosis.com/all-courses/" />
                        <ResourceCard title="Supervised Fellowship" description="Supervised Mentorship Program for Psychologists" href="https://instituteofclinicalhypnosis.com/about-us/work-with-us/fellowship-opportunities-for-psychologists-and-social-workers/" />
                        <ResourceCard title="Cognitive Hypnotic Coaching® Diploma" description="Advanced Coaching Curriculum for Client Transformation" href="https://instituteofclinicalhypnosis.com/cognitive-hypnotic-coaching-diploma/" />
                        <ResourceCard title="Cognitive Hypnotic Psychotherapy® Diploma" description="Developing advance therapeutic skills without running from workshop to workshop" href="https://instituteofclinicalhypnosis.com/cognitive-hypnotic-psychotherapy-diploma/" />
                        <ResourceCard title="Become a School Counsellor" description="Effectively support elementary school children in their social, emotional, and academic development" href="https://instituteofclinicalhypnosis.com/s-advanced-practitioner/pros-elementary-school-counselling-certification/" />
                    </Grid>
                </div>
            </Section>

            
            {/* INSTRUCTOR BRANDING KIT (SHOWCASE YOUR AFFILIATION) */}
            <Section theme="white" id="bio-templates" className="border-t border-brand-soft-neutral/30 pb-24 border-b">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <Heading level={2} className="mb-4 text-brand-structural-navy">Client-Centric Bio Templates</Heading>
                        <Text size="lg" muted className="max-w-3xl mx-auto mb-6">
                            A strong bio leads with the value you provide to clients, backed by the authority of your training. We've broken down how to naturally weave your ICHARS credentials into your professional presence.
                        </Text>
                    </div>

                    <div className="max-w-4xl mx-auto mb-16">
                        <Card className="bg-brand-deep-teal/5 border-brand-deep-teal/20 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start text-brand-structural-navy shadow-sm">
                            <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
                                <Check className="text-brand-deep-teal" size={24} />
                            </div>
                            <div>
                                <Heading level={4} className="mb-2 text-brand-structural-navy">The Modular Approach</Heading>
                                <Text size="sm" muted className="mb-4">Instead of a one-size-fits-all paragraph, use these modular snippets to build your bio across different platforms.</Text>
                                <ul className="list-disc pl-5 space-y-2 text-brand-secondary-text text-base">
                                    <li><strong>The Hook:</strong> For social media bios and LinkedIn headlines.</li>
                                    <li><strong>The Methodology:</strong> For your website's "My Approach" or "How I Work" section.</li>
                                    <li><strong>The Authority:</strong> The specific credential statement to place at the end of your bio or in a dedicated "Qualifications" section.</li>
                                </ul>
                            </div>
                        </Card>
                    </div>

                    <Grid cols={1} className="gap-6 lg:gap-12 max-w-5xl mx-auto">
                        {/* 1. SOCIAL BRANDING & HOOKS */}
                        <div>
                            <Heading level={3} className="text-xl mb-6 font-heading text-brand-deep-teal border-b border-brand-soft-neutral/50 pb-4">
                                1. The Hook (Headlines & Elevator Pitches)
                            </Heading>
                            <Grid cols={2} className="gap-6">
                                <BioCard 
                                    title="For Coaches" 
                                    boldText="Cognitive Hypnotic Coaching®"
                                    text="Empowering [professionals/leaders/parents] to overcome [specific challenge] and achieve [desired outcome] using Cognitive Hypnotic Coaching®." 
                                />
                                <BioCard 
                                    title="For Psychotherapists" 
                                    boldText="Cognitive Hypnotic Psychotherapy®"
                                    text="Helping individuals break free from [anxiety/past trauma/limiting patterns] using evidence-based Cognitive Hypnotic Psychotherapy®." 
                                />
                            </Grid>
                        </div>

                        {/* 2. EXPLAINING THE METHODOLOGY */}
                        <div>
                            <Heading level={3} className="text-xl mb-6 font-heading text-brand-deep-teal border-b border-brand-soft-neutral/50 pb-4">
                                2. The Methodology (For "My Approach")
                            </Heading>
                            <div className="space-y-6">
                                <BioCard 
                                    title="Explaining Coaching (Jargon-Free)" 
                                    boldText="subconscious patterns"
                                    text="My coaching goes beyond simply setting goals. Using integrative techniques, we will identify and realign the subconscious patterns that hold you back, bridging the gap between where you are and where you want to be." 
                                />
                                <BioCard 
                                    title="Explaining Psychotherapy (Jargon-Free)" 
                                    boldText="root cause"
                                    text="I use an integrative approach that blends subconscious work with conscious cognitive restructuring. This means we don't just talk about symptoms; we actively rewire the root cause to create lasting emotional freedom and behavioral change." 
                                />
                            </div>
                        </div>

                                                {/* 3. THE "ABOUT ME" MENTION */}
                        <div>
                            <Heading level={3} className="text-xl mb-6 font-heading text-brand-deep-teal border-b border-brand-soft-neutral/50 pb-4">
                                3. The "About Me" Mention (Natural Bio Inclusion)
                            </Heading>
                            <div className="space-y-6">
                                <BioCard 
                                    title="Focusing on the Client Impact" 
                                    boldText="Institute of Clinical Hypnosis and Related Sciences (ICHARS)"
                                    text="To ensure my clients get the most effective, lasting results, I completed my advanced training with the Institute of Clinical Hypnosis and Related Sciences (ICHARS). This allows me to combine traditional approaches with powerful subconscious techniques." 
                                />
                                <BioCard 
                                    title="Focusing on The Integrative Approach" 
                                    boldText="Cognitive Hypnotic Psychotherapy®"
                                    text="I am passionate about integrative care, which is why I sought my certification in Cognitive Hypnotic Psychotherapy® from ICHARS. By blending CBT, NLP, and clinical hypnosis, I can tailor every session to exactly what you need." 
                                />
                            </div>
                        </div>

                        {/* 4. THE FORMAL CREDENTIALS LIST */}
                        <div>
                            <Heading level={3} className="text-xl mb-6 font-heading text-brand-deep-teal border-b border-brand-soft-neutral/50 pb-4">
                                4. The Formal Credentials List (For your Education Section)
                            </Heading>
                            <div className="space-y-6">
                                <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral p-6 rounded-2xl">
                                    <Heading level={4} className="mb-2 text-base text-brand-structural-navy">Standard Formatting</Heading>
                                    <Text size="sm" muted className="mb-4">Use exactly this format when listing your certifications in a bulleted list alongside your university degrees.</Text>
                                    <div className="bg-white p-5 rounded-xl border border-brand-soft-neutral/50 text-base font-mono text-brand-secondary-text shadow-inner">
                                        <ul className="list-none space-y-3">
                                            <li>• <strong>Master Practitioner of Cognitive Hypnotic Psychotherapy®</strong><br/><span className="text-brand-soft-teal">Institute of Clinical Hypnosis and Related Sciences (ICHARS)</span></li>
                                            <li>• <strong>Certified Professional Cognitive Hypnotic Coach®</strong><br/><span className="text-brand-soft-teal">Institute of Clinical Hypnosis and Related Sciences (ICHARS)</span></li>
                                        </ul>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </div>
            </Section>
            <Section theme="neutral" id="credentials" className="pb-24 pt-24 border-b">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="mb-4 text-brand-structural-navy">Credentials & Badges</Heading>
                        <Text size="lg" muted>
                            Display your affiliation and completed capability programs on your website or signature.
                        </Text>
                    </div>

                                                            
                    <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm mb-12">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-brand-soft-neutral/50">
                                <div className="bg-brand-soft-teal/10 text-brand-deep-teal p-3 rounded-xl border border-brand-soft-teal/30">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                                </div>
                                <div>
                                    <Heading level={3} className="text-xl font-heading text-brand-structural-navy mb-1">
                                        Cognitive Hypnotic Coaching®
                                    </Heading>
                                    <Text size="sm" muted className="m-0">Official milestone badges for certified practitioners.</Text>
                                </div>
                            </div>
                            <Grid cols={3} className="gap-6">
                            <ResourceCard 
                                title="Associate Level Coach" 
                                description="Use this badge to showcase your foundational coaching certification after completing Level 1 & 2." 
                                href="https://instituteofclinicalhypnosis.com/" 
                                embedHtml={true} 
                                imageUrl="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/07/ACCHC-1.png" 
                            />
                            <ResourceCard 
                                title="Professional Level Coach" 
                                description="Showcase your advanced training and professional certification upon completing Level 3." 
                                href="https://instituteofclinicalhypnosis.com/" 
                                embedHtml={true} 
                                imageUrl="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/07/PCCHC-1.png" 
                            />
                            <ResourceCard 
                                title="Master Level Coach" 
                                description="Display your master certification and highest clinical coaching capability upon completing Level 4." 
                                href="https://instituteofclinicalhypnosis.com/" 
                                embedHtml={true} 
                                imageUrl="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/07/MCCHC-1.png" 
                            />
                        </Grid>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm mb-12">
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-brand-soft-neutral/50">
                                <div className="bg-brand-structural-navy/10 text-brand-structural-navy p-3 rounded-xl border border-brand-structural-navy/20">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                </div>
                                <div>
                                    <Heading level={3} className="text-xl font-heading text-brand-structural-navy mb-1">
                                        Cognitive Hypnotic Psychotherapy®
                                    </Heading>
                                    <Text size="sm" muted className="m-0">Specialized therapeutic certification badges.</Text>
                                </div>
                            </div>
                            <Grid cols={3} className="gap-6">
                            <ResourceCard 
                                title="Associate Level Psychotherapist" 
                                description="Use this badge to showcase your foundational psychotherapy certification after completing Level 1 & 2." 
                                href="https://instituteofclinicalhypnosis.com/" 
                                embedHtml={true} 
                                imageUrl="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/07/ACCHP-1.png" 
                            />
                            <ResourceCard 
                                title="Professional Level Psychotherapist" 
                                description="Showcase your advanced training and professional certification upon completing Level 3." 
                                href="https://instituteofclinicalhypnosis.com/" 
                                embedHtml={true} 
                                imageUrl="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/07/PCCHP-1.png" 
                            />
                            <ResourceCard 
                                title="Master Level Psychotherapist" 
                                description="Display your master certification and highest clinical capability upon completing Level 4." 
                                href="https://instituteofclinicalhypnosis.com/" 
                                embedHtml={true} 
                                imageUrl="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/07/MCCHP-1.png" 
                            />
                        </Grid>
                    </div>

                    <div className="bg-brand-soft-neutral/20 p-6 rounded-2xl border border-brand-soft-neutral shadow-sm">
                            <div className="flex items-center justify-center gap-3 mb-8 pb-6 border-b border-brand-soft-neutral/50">
                                <Heading level={3} className="text-xl font-heading text-brand-structural-navy m-0">
                                    Comprehensive Diploma
                                </Heading>
                            </div>
                            <Grid cols={1} className="gap-6 max-w-2xl mx-auto">
                            <ResourceCard 
                                title="Cognitive Hypnotic Psychotherapy & Coaching Diploma Badge" 
                                description="Use this official digital badge to showcase your completion of the comprehensive certification program. Link this badge back to the course page for verification." 
                                href="https://instituteofclinicalhypnosis.com/" 
                                embedHtml={true} 
                                imageUrl="https://instituteofclinicalhypnosis.com/wp-content/uploads/2021/01/Coaching-psychotherapy-diploma-with-ICHARS-Logo.svg" 
                            />
                        </Grid>
                    </div>

                </div>
            </Section>

            {/* BRAND & MEDIA ASSETS */}
            <Section theme="white" id="media-assets" className="pb-24 pt-24">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <Heading level={2} className="mb-4 text-brand-structural-navy">Brand & Media Assets</Heading>
                        <Text size="lg" muted>
                            Official logos and credential assets for your website or press materials. 
                        </Text>
                    </div>

                    <Grid cols={2} className="gap-6 mb-12">
                        <FadeIn delay={0.1}>
                            <Card className="h-full flex flex-col bg-brand-soft-neutral/10 border-brand-soft-neutral p-6 rounded-2xl">
                                <div className="w-fit bg-white p-4 rounded-xl text-brand-deep-teal mb-6 shadow-sm border border-brand-soft-neutral">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
                                </div>
                                <Heading level={4} className="mb-3 font-heading text-lg text-brand-structural-navy">Download Logo Package</Heading>
                                <Text muted className="mb-6 flex-grow">
                                    Includes our official logos in square PNG, SVG, as well as horizontal PNG and SVG formats. Use these to showcase your affiliation or for affiliated marketing.
                                </Text>
                                <a href="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/05/Logo-Formats.zip" download className="inline-flex items-center gap-2 text-base font-bold text-white bg-brand-deep-teal px-5 py-3 rounded-lg hover:bg-brand-structural-depth transition-colors w-full justify-center">
                                    Download Logos (.zip)
                                </a>
                            </Card>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <Card className="h-full flex flex-col bg-white border-brand-soft-neutral shadow-sm p-6 rounded-2xl">
                                <div className="w-fit bg-brand-soft-neutral/30 p-4 rounded-xl text-brand-structural-navy mb-6 border border-brand-soft-neutral">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                                </div>
                                <Heading level={4} className="mb-3 font-heading text-lg text-brand-structural-navy">Brand & Style Guidelines</Heading>
                                <Text muted className="mb-6 flex-grow">
                                    In order to maintain brand consistency, please follow our style guidelines regarding spacing, minimum sizes, color palettes, and typographic restrictions when displaying our logos.
                                </Text>
                                <a href="#brand-manual" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors border border-brand-structural-navy/20 px-5 py-3 rounded-lg w-full justify-center">
                                    View Brand Manual
                                </a>
                            </Card>
                        </FadeIn>
                    </Grid>

                </div>
            </Section>

            {/* REFERENCE GUIDE & CLARIFICATION */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Heading level={2} className="mb-4">Usage Guidelines</Heading>
                        <Text size="lg" muted>
                            Clarifications on how to effectively position and share ICHARS concepts and credentials.
                        </Text>
                    </div>

                    <div className="space-y-4 mb-16">
                        <FadeIn delay={0.1}>
                            <details className="group bg-white rounded-xl border border-brand-soft-neutral overflow-hidden shadow-sm open:shadow-md transition-all">
                                <summary className="p-6 font-heading text-lg text-brand-structural-navy cursor-pointer list-none flex justify-between items-center bg-white hover:bg-brand-soft-neutral/10">
                                    How do I correctly reference an ICHARS article?
                                    <span className="text-brand-soft-teal group-open:rotate-180 transition-transform">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-brand-secondary-text text-base leading-relaxed border-t border-brand-soft-neutral/20 mt-2">
                                    At the end of any utilized article or concept summary, you must include a direct canonical link back to the original text on the ICHARS website. This preserves the academic trail and contextual integrity of the framework.
                                </div>
                            </details>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <details className="group bg-white rounded-xl border border-brand-soft-neutral overflow-hidden shadow-sm open:shadow-md transition-all">
                                <summary className="p-6 font-heading text-lg text-brand-structural-navy cursor-pointer list-none flex justify-between items-center bg-white hover:bg-brand-soft-neutral/10">
                                    Can I alter the digital badges to match my brand colors?
                                    <span className="text-brand-soft-teal group-open:rotate-180 transition-transform">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-brand-secondary-text text-base leading-relaxed border-t border-brand-soft-neutral/20 mt-2">
                                    No. To maintain universal recognition and trust, the proportions, colors, and structural integrity of all official credentials and logos must remain unaltered. They act as verified trust signals for your clients.
                                </div>
                            </details>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <details className="group bg-white rounded-xl border border-brand-soft-neutral overflow-hidden shadow-sm open:shadow-md transition-all">
                                <summary className="p-6 font-heading text-lg text-brand-structural-navy cursor-pointer list-none flex justify-between items-center bg-white hover:bg-brand-soft-neutral/10">
                                    Are these resources available for anyone to use?
                                    <span className="text-brand-soft-teal group-open:rotate-180 transition-transform">
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-brand-secondary-text text-base leading-relaxed border-t border-brand-soft-neutral/20 mt-2">
                                    Articles and press materials are linkable by anyone, including wellness bloggers and general psychologists. However, specific Practitioner Badges and specific Clinical Tools are reserved strictly for registered practitioners who have completed the corresponding ICHARS capability programs.
                                </div>
                            </details>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* FINAL CTA / DECISION */}
            <Section theme="neutral" className="pb-32">
                 <div className="max-w-4xl mx-auto text-center px-6">
                    <FadeIn>
                        <Heading level={2} className="mb-6 font-accent text-brand-deep-teal">Ready to deepen your practice?</Heading>
                        <Text size="lg" muted className="mb-10 max-w-2xl mx-auto">
                            Transform theoretical knowledge into structured, measurable clinical competency.
                            Join the global community of practitioners setting a new standard for integration.
                        </Text>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button href="#programs" size="lg" variant="primary">Explore Certification Programs</Button>
                            <Button href="#affiliation-program" size="lg" variant="outline">Learn about Affiliation</Button>
                        </div>
                    </FadeIn>
                 </div>
            </Section>
        </div>
    );
};
