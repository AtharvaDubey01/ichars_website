const fs = require('fs');

const fileContent = fs.readFileSync('src/pages/Research.tsx', 'utf8');

// extract the researchPapers array
const arrayMatch = fileContent.match(/const researchPapers = (\[[\s\S]*?\]);/);
if (!arrayMatch) {
    console.error("Could not find researchPapers array");
    process.exit(1);
}

const rawArray = arrayMatch[1];
// Evaluate to get actual array
let papers = [];
eval('papers = ' + rawArray + ';');

// Categorize them
papers.forEach(p => {
    const t = p.title.toLowerCase();
    if (t.includes('trauma') || t.includes('ptsd') || t.includes('anxiety') || t.includes('phobia') || t.includes('emdr') || t.includes('panic') || t.includes('abuse') || t.includes('dissociat')) {
        p.category = "Trauma & Anxiety";
    } else if (t.includes('depress') || t.includes('mood') || t.includes('suicid') || t.includes('self-esteem') || t.includes('addict') || t.includes('smoking') || t.includes('schizophrenia')) {
        p.category = "Depression & Mood";
    } else if (t.includes('pain') || t.includes('cancer') || t.includes('palliative') || t.includes('cardiac') || t.includes('ibs') || t.includes('irritable') || t.includes('medical') || t.includes('somat') || t.includes('illness') || t.includes('sleep') || t.includes('als ') || t.includes('hepatitis')) {
        p.category = "Medical & Somatic";
    } else if (t.includes('child') || t.includes('family') || t.includes('couple') || t.includes('adolescent') || t.includes('adhd')) {
        p.category = "Children & Families";
    } else if (t.includes('neuro') || t.includes('systematic') || t.includes('brain')) {
        p.category = "Neuroscience & Biology";
    } else {
        p.category = "Theoretical Integrations";
    }
});

const newArrayCode = 'const researchPapers = ' + JSON.stringify(papers, null, 4) + ';';

const newComponent = `import React, { useState } from 'react';
import { Section, Heading, Text, Grid, Button, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { BookOpen, Brain, Microscope, Heart, Users, Network, Activity, Filter, FileText, ArrowRight } from 'lucide-react';

` + newArrayCode + `

const categories = [
    "All",
    "Trauma & Anxiety",
    "Depression & Mood",
    "Medical & Somatic",
    "Children & Families",
    "Neuroscience & Biology",
    "Theoretical Integrations"
];

export const Research = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPapers = activeCategory === "All" 
        ? researchPapers 
        : researchPapers.filter(p => p.category === activeCategory);

    return (
        <div className="font-body min-h-screen bg-brand-soft-neutral/10 w-full relative overflow-hidden">
            {/* HERO SECTION - Split layout with imagery */}
            <Section theme="neutral" className="pt-32 pb-24 border-b border-brand-soft-neutral/30 overflow-hidden relative">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-soft-teal/5 blur-3xl -z-10 rounded-full transform translate-x-1/2"></div>
                
                <div className="max-w-7xl mx-auto px-6">
                    <Grid cols={2} className="gap-12 lg:gap-16 items-center">
                        <FadeIn>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="bg-brand-soft-teal/10 text-brand-deep-teal text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-brand-soft-teal/20 flex items-center gap-1.5">
                                    <Microscope size={14} /> Empirical Foundations
                                </span>
                            </div>
                            <Heading level={1} className="mb-6 font-heading text-brand-structural-navy text-4xl lg:text-5xl leading-tight">
                                Research on Integrated Psychotherapy
                            </Heading>
                            <Text size="lg" muted className="mb-8 font-sans leading-relaxed">
                                Explore a curated repository of innovative research papers showcasing the clinical effectiveness of integrating cognitive hypnotherapy, CBT, EMDR, and other major frameworks.
                            </Text>
                            <div className="flex flex-wrap gap-4">
                                <Button href="#repository" className="flex items-center justify-center gap-2">
                                    Browse Repository <ArrowRight size={16} />
                                </Button>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="relative hidden md:block">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-brand-soft-neutral/50 shadow-lg relative">
                                <div className="absolute inset-0 bg-brand-structural-navy/10 mix-blend-multiply z-10"></div>
                                <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80" alt="Research Library" className="w-full h-full object-cover" />
                                
                                {/* Floating stats card */}
                                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-brand-soft-neutral shadow-md z-20 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-soft-teal/10 rounded-full flex items-center justify-center text-brand-deep-teal">
                                        <BookOpen size={24} />
                                    </div>
                                    <div>
                                        <Text className="font-bold text-xl text-brand-structural-navy leading-none mb-1">80+</Text>
                                        <Text size="xs" muted className="uppercase tracking-wider font-semibold">Indexed Papers</Text>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </Grid>
                </div>
            </Section>

            {/* OVERVIEW SECTION - Visual framework representation */}
            <Section theme="white" className="py-24 border-b border-brand-soft-neutral/30">
                <div className="max-w-7xl mx-auto px-6">
                    <Grid cols={2} className="gap-16 items-center">
                        <FadeIn className="order-2 md:order-1">
                            <div className="grid grid-cols-2 gap-4 relative">
                                <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral p-6 mt-8 shadow-sm">
                                    <Brain className="text-brand-soft-teal mb-4" size={32} />
                                    <Heading level={4} className="mb-2 text-lg">Neural Integration</Heading>
                                    <Text size="sm" muted>Connecting distinct functional areas to process trauma and regulate emotion effectively.</Text>
                                </Card>
                                <Card className="bg-brand-warm-white shadow-md border border-brand-soft-teal/30 p-6 mb-8 relative z-10">
                                    <Network className="text-brand-deep-teal mb-4" size={32} />
                                    <Heading level={4} className="mb-2 text-lg">Modal Synthesis</Heading>
                                    <Text size="sm" muted>Combining CBT, psychodynamic, and humanistic models into a unified framework.</Text>
                                </Card>
                                <Card className="bg-white shadow border border-brand-soft-neutral p-6 col-span-2">
                                    <Activity className="text-brand-accent-orange mb-4" size={32} />
                                    <Heading level={4} className="mb-2 text-lg">Measurable Efficacy</Heading>
                                    <Text size="sm" muted>Empirical studies showing improved outcomes, faster recovery, and reduced relapse rates across various psychological conditions.</Text>
                                </Card>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2} className="order-1 md:order-2">
                            <Heading level={2} className="mb-6 font-heading text-3xl text-brand-structural-navy">
                                The Science of Synthesis
                            </Heading>
                            <div className="space-y-6 text-brand-secondary-text leading-relaxed font-sans text-lg">
                                <p>
                                    For decades, psychotherapy has been fragmented into distinct schools of thought. While each theoretical model provides unique insights into human behaviour, genuine breakthrough often happens at intersections.
                                </p>
                                <p>
                                    Our research repository highlights studies that use <strong>hypnosis as a powerful integrative base</strong>—the underlying medium that connects cognitive restructuring, behavioural desensitization, and psychodynamic exploration.
                                </p>
                                <p>
                                    Just as different instruments in an orchestra work together to create a symphony, these modalities, when integrated effectively, offer a significantly more holistic and durable treatment strategy.
                                </p>
                            </div>
                        </FadeIn>
                    </Grid>
                </div>
            </Section>

            {/* LIST OF RESEARCH PAPERS with Interactive Tabs */}
            <Section id="repository" theme="neutral" className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <Heading level={2} className="mb-4 font-heading text-3xl text-brand-structural-navy">
                                Empirical Repository
                            </Heading>
                            <Text muted className="text-lg">
                                As practitioners, our methodologies must be evidence-based. Explore the robust clinical effectiveness of integrating hypnosis across diverse therapeutic challenges.
                            </Text>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Filter Sidebar */}
                            <div className="lg:w-1/4 shrink-0">
                                <div className="sticky top-28 bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm">
                                    <div className="flex items-center gap-2 mb-6 text-brand-structural-navy font-semibold pb-4 border-b border-brand-soft-neutral/50">
                                        <Filter size={18} />
                                        <span>Categories</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setActiveCategory(cat)}
                                                className={\`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 \${
                                                    activeCategory === cat 
                                                        ? 'bg-brand-soft-teal/10 text-brand-deep-teal border border-brand-soft-teal/30 shadow-sm' 
                                                        : 'text-brand-secondary-text hover:bg-brand-soft-neutral/30 border border-transparent'
                                                }\`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Research List */}
                            <div className="lg:w-3/4 flex flex-col gap-4">
                                <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-soft-neutral/50 pb-4 gap-4">
                                    <Text className="font-semibold text-brand-structural-navy">
                                        Showing {filteredPapers.length} Result{filteredPapers.length !== 1 && 's'}
                                        {activeCategory !== 'All' && <span className="text-brand-soft-teal"> in {activeCategory}</span>}
                                    </Text>
                                </div>
                                <div className="space-y-4">
                                {filteredPapers.map((paper, index) => (
                                    <a
                                        key={index}
                                        href={paper.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-brand-soft-neutral/70 transition-all duration-300 hover:shadow-md hover:border-brand-soft-teal"
                                    >
                                        <div className="flex gap-4 pr-4">
                                            <div className="shrink-0 mt-1">
                                                <FileText className="text-brand-soft-neutral/50 group-hover:text-brand-soft-teal transition-colors" size={24} />
                                            </div>
                                            <div>
                                                <Heading level={4} className="text-lg text-brand-structural-navy group-hover:text-brand-deep-teal transition-colors font-sans mt-0.5 mb-2 leading-snug">
                                                    {paper.title}
                                                </Heading>
                                                <Text size="xs" className="inline-block bg-brand-soft-neutral/10 text-brand-secondary-text px-2.5 py-1 rounded-md font-medium border border-brand-soft-neutral/40">
                                                    {paper.category || "Theoretical Integrations"}
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="mt-4 sm:mt-0 shrink-0 self-start sm:self-center">
                                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-soft-neutral/10 text-brand-secondary-text group-hover:bg-brand-soft-teal/10 group-hover:text-brand-deep-teal transition-colors shrink-0 border border-transparent group-hover:border-brand-soft-teal/20">
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA SECTION */}
            <Section theme="tint" className="py-24">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn>
                        <Heading level={2} className="mb-6 font-heading text-4xl text-white">
                            Ready to Apply the Evidence?
                        </Heading>
                        <Text size="xl" className="mb-10 text-brand-warm-white/90 font-sans">
                            Translate decades of clinical research into practical, transformative skills for your practice with our comprehensive diploma programs.
                        </Text>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button href="#chp" variant="primary" className="bg-[#E85D04] text-white border-transparent hover:bg-[#c74e02] flex items-center justify-center">
                                Explore Psychotherapy Diploma
                            </Button>
                            <Button href="#chc" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white text-center flex items-center justify-center">
                                Explore Coaching Diploma
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};
`;

fs.writeFileSync('src/pages/Research.tsx', newComponent, 'utf8');
console.log('Research.tsx has been rebuilt.');
