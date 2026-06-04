import { FadeIn } from '../components/FadeIn';
import { Section, Heading, Text, Button, Card, Grid } from '../components/Blocks';
import { Eye, Target, Heart, CheckCircle2, XCircle } from 'lucide-react';

export const BrandManual = () => {
    return (
        <div className="font-body pb-24 min-h-screen bg-brand-soft-neutral/30">
            <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-brand-soft-neutral shadow-sm overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 text-base font-semibold whitespace-nowrap md:justify-center">
                    <a href="#brand-overview" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Brand Overview</a>
                    <a href="#logos" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Logos &amp; Usage</a>
                    <a href="#colors-typography" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Colors &amp; Typography</a>
                    <a href="#imagery" className="text-brand-structural-navy hover:text-brand-deep-teal transition-colors">Imagery</a>
                </div>
            </div>

            <div className="border-t border-brand-soft-neutral/30">
                {/* HERO SECTION */}
            <Section theme="white" className="pt-16 pb-24 md:pt-24 md:pb-32 border-b border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn>
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-brand-soft-teal/10 text-brand-deep-teal text-base font-semibold tracking-wide uppercase">
                            Official Guidelines
                        </div>
                        <Heading level={1} className="mb-6">Brand Manual & Style Guide</Heading>
                        <Text size="lg" muted className="mb-10 max-w-2xl mx-auto">
                            A comprehensive guide to effectively and accurately showcasing your affiliation with ICHARS. 
                            These guidelines ensure a consistent and recognizable brand presence globally.
                        </Text>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button href="#brand-overview" variant="primary">Explore Guidelines</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* BRAND OVERVIEW */}
            <Section id="brand-overview" theme="neutral" className="py-24 border-b border-brand-soft-neutral/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <Heading level={2} className="mb-4 text-brand-structural-navy">Brand Overview</Heading>
                        <Text size="lg" muted className="max-w-3xl mx-auto">
                            ICHARS is dedicated to enabling coaches and mental health practitioners to create a happier, healthier, 
                            more fulfilling world by helping them develop advanced coaching and therapeutic skills.
                        </Text>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FadeIn delay={0.1}>
                            <Card className="h-full bg-white border-brand-soft-neutral">
                                <div className="bg-brand-soft-teal/10 w-12 h-12 rounded-xl flex flex-col items-center justify-center mb-6 text-brand-deep-teal border border-brand-soft-teal/20">
                                    <Eye size={24} />
                                </div>
                                <Heading level={4} className="mb-4 text-brand-structural-navy">Vision Statement</Heading>
                                <Text muted>
                                    To enable coaches and mental health professionals to create a happier, healthier, 
                                    more fulfilling world by helping them develop advanced coaching and therapeutic skills 
                                    with comprehensive, step-by-step training.
                                </Text>
                            </Card>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <Card className="h-full bg-white border-brand-soft-neutral">
                                <div className="bg-brand-accent-orange/10 w-12 h-12 rounded-xl flex flex-col items-center justify-center mb-6 text-brand-accent-orange border border-brand-accent-orange/20">
                                    <Target size={24} />
                                </div>
                                <Heading level={4} className="mb-4 text-brand-structural-navy">Mission Statement</Heading>
                                <Text muted>
                                    To provide high-quality, step-by-step training programs for coaches and mental health 
                                    professionals, empowering them to serve their clients better and meet their professional 
                                    and personal goals.
                                </Text>
                            </Card>
                        </FadeIn>
                        <FadeIn delay={0.3} className="md:col-span-2 lg:col-span-1">
                            <Card className="h-full bg-white border-brand-soft-neutral">
                                <div className="bg-brand-structural-navy/10 w-12 h-12 rounded-xl flex flex-col items-center justify-center mb-6 text-brand-structural-navy border border-brand-structural-navy/20">
                                    <Heart size={24} />
                                </div>
                                <Heading level={4} className="mb-4 text-brand-structural-navy">Core Values</Heading>
                                <Text muted>
                                    We are committed to reliability, openness, acceptance and congruence and consider all parts 
                                    of the ICHARS community mutually accountable to uphold these values.
                                </Text>
                            </Card>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* LOGOS & USAGE */}
            <Section id="logos" theme="white" className="py-24 border-b border-brand-soft-neutral/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="mb-16">
                        <Heading level={2} className="mb-4 text-brand-structural-navy">The ICHARS Logo</Heading>
                        <Text size="lg" muted className="mb-8">
                            The logo is a three-color graphical icon. It may be reproduced in one color (black or white) when necessary.
                        </Text>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                            <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral border-dashed flex flex-col items-center justify-center p-6 sm:p-12 min-h-[200px] relative group overflow-hidden">
                                <div className="absolute inset-8 border border-brand-soft-teal/20 bg-brand-soft-teal/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-start p-1 pointer-events-none">
                                    <Text size="xs" className="text-brand-soft-teal font-mono">.25" clear space</Text>
                                </div>
                                <img src="https://instituteofclinicalhypnosis.com/wp-content/uploads/2023/07/ICHARS-Logo-1.png" alt="ICHARS Horizontal Logo" className="h-12 mb-6 relative z-10" />
                                <Text className="font-semibold text-brand-structural-navy mb-2 relative z-10">Horizontal Logo</Text>
                                <Text size="sm" muted className="relative z-10">(For standard usage)</Text>
                            </Card>
                            <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral border-dashed flex flex-col items-center justify-center p-6 sm:p-12 min-h-[200px] relative group overflow-hidden">
                                <div className="absolute inset-8 border border-brand-soft-teal/20 bg-brand-soft-teal/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-start justify-start p-1 pointer-events-none">
                                    <Text size="xs" className="text-brand-soft-teal font-mono">.25" clear space</Text>
                                </div>
                                {/* Using the favicon as square logo approximation since we don't have the explicit square one */}
                                <img src="https://instituteofclinicalhypnosis.com/wp-content/uploads/2020/02/favicon-100x100.png" alt="ICHARS Square Logo" className="h-16 w-16 mb-6 relative z-10" />
                                <Text className="font-semibold text-brand-structural-navy mb-2 relative z-10">Square Logo</Text>
                                <Text size="sm" muted className="relative z-10">(For avatars & tight spaces)</Text>
                            </Card>
                        </div>

                        <div className="bg-brand-soft-neutral/10 p-6 rounded-xl border border-brand-soft-neutral/50 flex flex-col sm:flex-row justify-between sm:items-center gap-6 text-center sm:text-left">
                            <div>
                                <Heading level={4} className="mb-2">Download Logo Package</Heading>
                                <Text muted size="sm">Includes square PNG/SVG and horizontal PNG/SVG formats.</Text>
                            </div>
                            <Button href="https://instituteofclinicalhypnosis.com/wp-content/uploads/2024/05/Logo-Formats.zip" variant="primary">Download Logos (.zip)</Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-20">
                        <div>
                            <Heading level={3} className="text-xl mb-6 text-brand-structural-navy">Correct Usage</Heading>
                            <ul className="space-y-4 text-brand-secondary-text mb-8">
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 size={20} className="text-brand-soft-teal shrink-0 mt-0.5" />
                                    <span>The logo should have at least .25” of clear space on all sides.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 size={20} className="text-brand-soft-teal shrink-0 mt-0.5" />
                                    <span>Minimum size should be 1.5" to maintain readability for horizontal, and .75" for stacked.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <CheckCircle2 size={20} className="text-brand-soft-teal shrink-0 mt-0.5" />
                                    <span>May be displayed on backgrounds that do not distract from the logo.</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Heading level={3} className="text-xl mb-6 text-brand-structural-navy">Usage Restrictions</Heading>
                            <Text muted className="mb-6">
                                As a general rule, third parties may not use the ICHARS logo unless under limited circumstances (like advertising your connection as an accredited training program or Member).
                            </Text>
                            <ul className="space-y-4 text-brand-secondary-text">
                                <li className="flex gap-3 items-start">
                                    <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                                    <span>Do not use the logo in products or packaging requiring a formal license.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                                    <span>The logo may not be displayed as a primary or prominent feature on non-ICHARS materials (your logo must be more prominent).</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <XCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                                    <span>Neither the logo nor the ICHARS name may be used in any other company name, product name, or domain name.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* BRAND COLORS & TYPOGRAPHY */}
            <Section id="colors-typography" theme="neutral" className="py-24 border-b border-brand-soft-neutral/30">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        
                        {/* COLORS */}
                        <div>
                            <Heading level={3} className="text-2xl mb-8 text-brand-structural-navy">Brand Colors</Heading>
                            <Text muted className="mb-8">
                                The ICHARS color system uses deep, structural teals contrasted with bright accent orange and soft, warm neutrals to convey both academic rigor and human empathy.
                            </Text>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="space-y-2">
                                    <div className="h-24 rounded-lg bg-brand-deep-teal border border-brand-soft-neutral shadow-sm"></div>
                                    <div>
                                        <Text className="font-semibold text-base">Deep Teal</Text>
                                        <Text size="sm" muted>#00434C</Text>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-24 rounded-lg bg-brand-soft-teal border border-brand-soft-neutral shadow-sm"></div>
                                    <div>
                                        <Text className="font-semibold text-base">Soft Teal</Text>
                                        <Text size="sm" muted>#65BFA9</Text>
                                    </div>
                                </div>
                            </div>
                            
                            <Heading level={4} className="text-lg mb-4 text-brand-structural-navy">Supporting & Accent Colors</Heading>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                <div className="space-y-2">
                                    <div className="h-12 rounded bg-brand-structural-depth border border-brand-soft-neutral/50"></div>
                                    <Text size="xs" muted className="text-center">#002D33</Text>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-12 rounded bg-brand-accent-orange border border-brand-soft-neutral/50"></div>
                                    <Text size="xs" muted className="text-center">#E85D04</Text>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-12 rounded bg-brand-warm-white border border-brand-soft-neutral/50"></div>
                                    <Text size="xs" muted className="text-center">#F7F6F2</Text>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-12 rounded bg-brand-soft-neutral border border-brand-soft-neutral/50"></div>
                                    <Text size="xs" muted className="text-center">#EFECE6</Text>
                                </div>
                            </div>
                        </div>

                        {/* TYPOGRAPHY */}
                        <div>
                            <Heading level={3} className="text-2xl mb-8 text-brand-structural-navy">Typefaces</Heading>
                            <Text muted className="mb-8">
                                Our typography balances modern clarity with editorial elegance. We use <strong>Satoshi</strong> for strong headings, <strong>Inter</strong> for readable body text, and <strong>Instrument Serif</strong> for accent typography.
                            </Text>

                            <Card className="bg-white border-brand-soft-neutral mb-6">
                                <div className="border-b border-brand-soft-neutral/50 pb-4 mb-4">
                                    <Text size="sm" className="font-semibold text-brand-soft-teal uppercase tracking-widest mb-2">Display Typeface</Text>
                                    <h4 className="text-4xl font-heading text-brand-structural-navy font-bold">Satoshi</h4>
                                </div>
                                <div className="space-y-2 font-heading">
                                    <Text className="font-light">Satoshi Light</Text>
                                    <Text className="font-normal">Satoshi Regular</Text>
                                    <Text className="font-medium">Satoshi Medium</Text>
                                    <Text className="font-bold">Satoshi Bold</Text>
                                </div>
                            </Card>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral">
                                    <Text size="sm" className="font-semibold text-brand-secondary-text uppercase tracking-widest mb-2">Body Typeface</Text>
                                    <h4 className="text-2xl font-sans text-brand-structural-navy mb-2">Inter</h4>
                                    <Text muted size="sm">Versatile and accessible sans-serif.</Text>
                                </Card>
                                <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral">
                                    <Text size="sm" className="font-semibold text-brand-secondary-text uppercase tracking-widest mb-2">Accent Typeface</Text>
                                    <h4 className="text-2xl font-accent text-brand-structural-navy mb-2 italic">Instrument Serif</h4>
                                    <Text muted size="sm">Editorial serif for quotes and highlights.</Text>
                                </Card>
                            </div>
                        </div>

                    </div>

                    <div className="mt-16">
                        <Heading level={4} className="text-lg mb-6 text-brand-structural-navy border-b border-brand-soft-neutral/50 pb-2">Typography in Practice</Heading>
                        <Card className="bg-white border-brand-soft-neutral p-6 sm:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
                                <div>
                                    <Text size="xs" className="text-brand-soft-teal font-mono mb-3 uppercase tracking-wider">H1 (Satoshi)</Text>
                                    <h1 className="text-4xl lg:text-4xl md:text-3xl font-heading text-brand-structural-navy font-bold leading-tight">Integrative Therapies</h1>
                                </div>
                                <div className="border-t border-brand-soft-neutral/50 pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-6 lg:pl-10">
                                    <Text size="xs" className="text-brand-soft-teal font-mono mb-3 uppercase tracking-wider">H3 Accent (Instrument Serif)</Text>
                                    <h3 className="text-3xl lg:text-4xl md:text-2xl font-accent text-brand-deep-teal italic leading-tight">"Bridging the theoretical and the clinical."</h3>
                                </div>
                                <div className="border-t border-brand-soft-neutral/50 pt-6 md:border-t-0 md:pt-0 md:border-l md:pl-6 lg:pl-10">
                                    <Text size="xs" className="text-brand-soft-teal font-mono mb-3 uppercase tracking-wider">Body (Inter)</Text>
                                    <p className="font-sans text-brand-secondary-text leading-relaxed text-base lg:text-base">
                                        The Cognitive Hypnotic Psychotherapy diploma is an advanced integration of modern clinical practices, cognitive frameworks, and psychodynamic methodologies.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* IMAGERY GUIDELINES */}
            <Section id="imagery" theme="white" className="py-24 border-b border-brand-soft-neutral/30">
                <div className="max-w-5xl mx-auto px-6">
                    <Heading level={2} className="mb-4 text-brand-structural-navy">Imagery & Photography</Heading>
                    <Text size="lg" muted className="mb-16 max-w-3xl">
                        Our photography should feel authentic, professional, and empathetic. Avoid sterile stock photos in favor of imagery that reflects genuine human connection and professional clinical settings.
                    </Text>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-0 overflow-hidden bg-brand-soft-neutral">
                            <div className="h-48 bg-brand-soft-teal/20 relative">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="ICHARS Classroom" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                            </div>
                            <div className="p-6 bg-white border border-t-0 border-brand-soft-neutral rounded-b-2xl">
                                <Heading level={4} className="mb-2 text-brand-structural-navy">Authentic Settings</Heading>
                                <Text size="sm" muted>Use well-lit, natural environments that feel like genuine therapeutic or classroom spaces. Avoid overly staged or artificial backgrounds.</Text>
                            </div>
                        </Card>
                        <Card className="p-0 overflow-hidden bg-brand-soft-neutral">
                            <div className="h-48 bg-brand-accent-orange/10 relative">
                                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="ICHARS Community" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                            </div>
                            <div className="p-6 bg-white border border-t-0 border-brand-soft-neutral rounded-b-2xl">
                                <Heading level={4} className="mb-2 text-brand-structural-navy">Human Connection</Heading>
                                <Text size="sm" muted>Focus on candid interactions, active listening, and collaborative learning to reinforce our core values of openness and acceptance.</Text>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* CALL TO ACTION */}
            <Section theme="tint" className="py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn>
                        <Heading level={2} className="mb-6 font-accent text-brand-deep-teal">Showcase Your Affiliation</Heading>
                        <Text size="lg" muted className="mb-10 max-w-2xl mx-auto">
                            If you're an ICHARS alumni looking to showcase your affiliation, visit our Toolkit to find our 
                            official linkable assets and detailed instructions on how to feature them on your website.
                        </Text>
                        <div className="flex justify-center">
                            <Button href="#practitioner-toolkit" size="lg" variant="primary">Access Practitioner Toolkit</Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
            </div>
        </div>
    );
};
