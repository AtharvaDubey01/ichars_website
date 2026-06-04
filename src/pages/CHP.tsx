import { useState } from 'react';
import { Section, Heading, Text, Button, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { cn } from '../lib/utils';
import { 
    ArrowRight, 
    ArrowDown,
    Layers,
    Brain,
    Activity,
    BookOpen,
    Users,
    Network,
    Quote,
    Waves,
    Target,
    Compass,
    CheckCircle2,
    Play
} from 'lucide-react';

export const CHP = () => {
    const [selectedStyle, setSelectedStyle] = useState<number | null>(null);
    const [activeQuote, setActiveQuote] = useState(0);

    const quotes = [
        {
            text: "Therapy became much clearer once I began understanding how emotional patterns, identity, and relational dynamics interacted together. My clinical work stopped feeling fragmented.",
            author: "Clinical Psychologist"
        },
        {
            text: "I became much clearer once I understood the deeper structures maintaining patterns rather than just treating symptoms on the surface.",
            author: "Psychotherapist"
        },
        {
            text: "Therapy became more intentional and coherent. I stopped depending entirely on techniques and started conceptualizing cases more structurally.",
            author: "Counseling Psychologist"
        }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text">
            
            
            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,#4A6B82_0%,transparent_70%)]" />
                <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                    <FadeIn>
                        <div className="text-xs font-bold tracking-widest text-brand-structural-navy uppercase mb-6">Cognitive Hypnotic Psychotherapy (CHP)</div>
                        <Heading level={1} className="text-brand-structural-navy mb-6">
                            When therapy requires deeper integrative understanding
                        </Heading>
                        <Text size="lg" className="text-brand-secondary-text mb-12 max-w-2xl mx-auto font-light">
                            Many therapists eventually reach a stage where learning more isolated approaches no longer feels sufficient. Real therapeutic work involves layered emotional processes, unconscious patterns, relational dynamics, and identity conflicts.
                        </Text>
                    </FadeIn>

                    <FadeIn delay={0.1} className="w-full mb-16">
                        <Card className="rounded-3xl border-opacity-50 text-left">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <Text size="sm" className="font-bold text-brand-structural-navy mb-6 uppercase tracking-widest text-sm">The Evolution of Psychotherapy</Text>
                                    <Text size="sm" className="font-medium text-brand-structural-navy mb-4">
                                        CHP is designed to help practitioners develop integrative therapeutic thinking, layered case conceptualization, and root-cause understanding.
                                    </Text>
                                    <Text size="sm" className="text-brand-secondary-text mb-0">
                                        The focus is not collecting more modalities. The focus is developing deeper and more structured therapeutic understanding.
                                    </Text>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-brand-warm-white p-5 rounded-2xl border border-brand-soft-neutral/30">
                                        <Text size="sm" className="font-medium text-brand-deep-teal mb-0">
                                            Framework-based psychotherapy capability for greater clarity while navigating complex therapeutic situations.
                                        </Text>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <Button href="#cohorts" className="w-full">Apply for the Diploma Cohort</Button>
                                        <Button variant="outline" href="#prospectus-success-chp" className="w-full bg-white">Download CHP Prospectus</Button>
                                        <a href="#certification-pathway" className="text-center text-base font-medium text-brand-secondary-text hover:text-brand-deep-teal underline underline-offset-4 mt-2 transition-colors">View Certification Eligibility</a>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </FadeIn>

                    <FadeIn delay={0.2} className="w-full max-w-4xl mx-auto relative mb-8">
                        <div className="bg-white p-2 md:p-4 rounded-3xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-6 md:p-8 rounded-2xl bg-brand-warm-white relative flex flex-col justify-center border border-brand-soft-neutral/30 overflow-hidden">
                                    <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest mb-6 border-b border-brand-soft-neutral/30 pb-4 relative z-10">Fragmented Understanding</div>
                                    <div className="flex flex-wrap gap-2 mt-4 relative z-10 w-full lg:w-4/5">
                                        {[
                                            "Symptoms", "Behaviors", "Emotions", 
                                            "Identity", "Relational Patterns", "Unconscious Processes"
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white px-3 py-1.5 rounded-md shadow-sm text-sm font-medium text-brand-structural-navy border border-brand-soft-neutral/50 transition-colors hover:border-brand-soft-teal hover:bg-brand-warm-white">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-6 md:p-8 rounded-2xl bg-brand-structural-navy relative overflow-hidden flex flex-col justify-center group cursor-pointer transition-all duration-500 hover:bg-[#1a2c3a] text-white">
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2020&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40" />
                                    <div className="relative z-10">
                                        <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                                           Integrated via Structured Conceptualization
                                        </div>
                                        <Heading level={3} className="text-xl text-white mb-6">Integrative Therapeutic Clarity</Heading>
                                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                            <Text size="sm" className="text-white/90 font-medium mb-0">Intentional Therapeutic Direction</Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. CERTIFICATION PATHWAYS */}
            <Section id="certification-pathway" theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">Certification Pathways: Designed for Your Scope of Practice</Heading>
                    <Text size="lg" className="text-brand-structural-navy max-w-3xl mx-auto">
                        A unified curriculum resulting in two distinct credentials, ensuring you practice confidently within your ethical and professional boundaries.
                    </Text>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* CHP Box */}
                        <div className="bg-white p-8 rounded-3xl border border-brand-soft-neutral/50 shadow-sm flex flex-col h-full ring-1 ring-black/5">
                            <div className="w-12 h-12 rounded-xl bg-brand-soft-neutral/10 flex items-center justify-center mb-6">
                                <Brain className="w-6 h-6 text-brand-structural-navy" />
                            </div>
                            <Heading level={4} className="text-brand-structural-navy mb-4">Cognitive Hypnotic Psychotherapist (CHP)</Heading>
                            <div className="bg-brand-warm-white px-4 py-3 rounded-xl border border-brand-soft-neutral/30 mb-6">
                                <Text size="sm" className="font-bold text-brand-deep-teal m-0">
                                    For professionals licensed or qualified to treat clinical disorders.
                                </Text>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                    <Text size="sm" className="m-0 text-brand-secondary-text">Psychologists, Psychotherapists, and Psychiatrists.</Text>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                    <Text size="sm" className="m-0 text-brand-secondary-text">Equips you for complex clinical diagnostics and deep psychodynamic resolution.</Text>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                    <Text size="sm" className="m-0 text-brand-secondary-text">Integrates advanced intervention thinking within therapeutic settings.</Text>
                                </li>
                            </ul>
                        </div>

                        {/* CHCP Box */}
                        <div className="bg-white p-8 rounded-3xl border border-brand-soft-neutral/50 shadow-sm flex flex-col h-full ring-1 ring-black/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                <Activity className="w-32 h-32" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-brand-soft-teal/10 flex items-center justify-center mb-6">
                                    <Activity className="w-6 h-6 text-brand-soft-teal" />
                                </div>
                                <Heading level={4} className="text-brand-structural-navy mb-4">Cognitive Hypnotic Change Practitioner (CHCP)</Heading>
                                <div className="bg-brand-soft-teal/5 px-4 py-3 rounded-xl border border-brand-soft-teal/20 mb-6">
                                    <Text size="sm" className="font-bold text-brand-soft-teal m-0">
                                        An advanced credential for driving deep behavioral and emotional change within coaching, healing, and developmental frameworks.
                                    </Text>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                        <Text size="sm" className="m-0 text-brand-secondary-text">Coaches, Counselors, Alternative Healers, Social Workers, and Yoga Practitioners.</Text>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                        <Text size="sm" className="m-0 text-brand-secondary-text">Provides a layered understanding for complex emotional mapping without crossing into clinical diagnosis.</Text>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                        <Text size="sm" className="m-0 text-brand-secondary-text">Enhances foundational coaching/ healing by addressing root-cause patterns.</Text>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            
            {/* 3. THE CHP APPROACH */}
            <Section id="explore-thinking" theme="white" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">Framework-based psychotherapy development for deeper capability</Heading>
                    <Text size="lg" className="text-brand-structural-navy">Cognitive Hypnotic Psychotherapy (CHP) is an integrative practitioner development system designed to strengthen therapeutic conceptualization and intentional intervention thinking.</Text>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-brand-warm-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50">
                            <Text size="sm" className="font-bold text-brand-structural-navy mb-4">The approach integrates insights from:</Text>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {['Cognitive Psychology', 'Behavioral Psychology', 'Psychodynamic Understanding', 'Humanistic Approaches', 'Hypnosis', 'NLP', 'Emotional Conditioning Frameworks'].map((item, i) => (
                                    <div key={i} className="bg-white border border-brand-soft-neutral px-3 py-1.5 rounded-md text-sm font-medium text-brand-secondary-text shadow-sm">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="border-l-2 border-brand-soft-teal pl-4">
                                <Text size="sm" className="font-medium text-brand-structural-navy mb-0">Not as disconnected modalities. But as interconnected lenses for understanding human complexity more comprehensively.</Text>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <Heading level={4} className="text-brand-structural-navy mb-6">Core Developmental Focus</Heading>
                            <ul className="space-y-6">
                                {[
                                    { title: "Layered Case Understanding", desc: "Understanding how multiple psychological layers interact simultaneously." },
                                    { title: "Root-Cause Conceptualization", desc: "Recognizing what maintains emotional and behavioral patterns beneath surface symptoms." },
                                    { title: "Integrative Therapeutic Flexibility", desc: "Working more intentionally across different therapeutic processes." },
                                    { title: "Framework-Based Psychotherapy", desc: "Using structured understanding rather than random modality mixing." },
                                    { title: "Context-Sensitive Intervention", desc: "Understanding why timing, emotional readiness, identity, and unconscious processes influence outcomes." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-brand-soft-teal shrink-0" />
                                        <div>
                                            <span className="font-bold text-base text-brand-structural-navy block mb-1">{item.title}</span>
                                            <span className="text-base text-brand-secondary-text block">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mb-16 bg-brand-warm-white p-6 md:p-8 rounded-2xl border border-brand-soft-neutral/50 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-white text-brand-soft-teal flex items-center justify-center shrink-0 shadow-sm">
                            <Layers className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <Heading level={4} className="text-lg text-brand-structural-navy mb-2">A Shared Foundation</Heading>
                            <Text size="sm" className="mb-0 text-brand-secondary-text">
                                The CHP Diploma represents the complete Levels 1-4 pathway. <strong className="text-brand-structural-navy">Level 1 and Level 2</strong> (which optionally double as the standalone CHC Diploma) serve as the shared foundational building blocks, before advancing into the highly clinical and diagnostic focus of Level 3 and Level 4. <strong className="text-brand-structural-navy">You can begin with just Level 1</strong> to establish the foundational framework before committing to the full diploma.
                            </Text>
                        </div>
                    </div>

                                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-brand-warm-white border border-brand-soft-neutral/50 p-8 rounded-3xl">
                            <div className="text-xs uppercase font-bold text-brand-secondary-text mb-6 tracking-widest flex items-center gap-2">
                                <Target className="w-4 h-4 text-red-400" /> WHAT CHP IS NOT
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Random modality mixing",
                                    "Rigid technique-driven therapy",
                                    "Memorized intervention systems",
                                    '"Using everything with everyone"'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base font-medium text-brand-secondary-text">
                                        <div className="w-1.5 h-1.5 bg-brand-secondary-text/30 rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-brand-structural-navy border border-brand-soft-neutral/50 p-8 rounded-3xl text-white shadow-md">
                            <div className="text-xs uppercase font-bold text-brand-soft-teal mb-6 tracking-widest flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> WHAT CHP IS
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Structured integrative psychotherapy",
                                    "Layered conceptual understanding",
                                    "Framework-based therapeutic thinking",
                                    "Intentional transformational work",
                                    "Psychotherapy depth supported by structure"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-base font-medium text-white/90">
                                        <div className="w-1.5 h-1.5 bg-brand-soft-teal rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-6">
                        <Button variant="outline" href="#explore-approach" className="bg-transparent border-brand-structural-navy text-brand-structural-navy hover:bg-brand-structural-navy hover:text-white">
                             Explore the CHP Approach
                        </Button>
                    </div>
                </div>
            </Section>

            {/* 4. CLINICAL APPLICATION & CASE COMPLEXITY */}
            <Section id="explore-approach" theme="tint" className="border-t border-brand-soft-neutral/30">
                 
                <div className="max-w-4xl mx-auto text-center">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <Heading level={2} className="text-brand-deep-teal mb-6">Structuring the Complex Case</Heading>
                        <Text className="text-brand-structural-navy font-medium text-lg leading-relaxed max-w-3xl mx-auto">
                            When clients present with anxiety or emotional overwhelm, deeper exploration usually reveals unresolved emotional conditioning, internalized beliefs, or attachment dynamics. CHP provides the frameworks needed to map out and sequence interventions across these layers systematically.
                        </Text>
                    </div>

                    
                    <div className="mt-8 bg-white p-6 md:p-8 rounded-3xl border border-brand-soft-neutral shadow-sm">
                        <Heading level={4} className="text-xl text-brand-structural-navy mb-4">From Fragmentation to Intentional Direction</Heading>
                        <Text size="sm" className="mb-6 text-brand-secondary-text">Rather than treating the surface symptom directly, integrative understanding allows practitioners to target underlying identity insecurity and relational conditioning. This shift relies heavily on strong structured therapeutic observation.</Text>
                        
                        <Button variant="outline" href="#structured-thinking" className="bg-brand-warm-white border-brand-soft-neutral text-brand-structural-navy hover:bg-brand-structural-navy hover:border-brand-structural-navy hover:text-white">
                            Explore Structured Therapeutic Thinking
                        </Button>
                    </div>
                </div>
            </Section>

            
             {/* 5 & 6. ADVANCED EXPERIENTIAL DEVELOPMENT (Consolidated) */}
             <Section theme="white" className="border-t border-brand-soft-neutral/30 bg-gradient-to-b from-white to-brand-warm-white">
                 <div className="max-w-4xl mx-auto text-center mb-16">
                     <Heading level={2} className="text-brand-deep-teal mb-6">Experiential and integrative psychotherapy development</Heading>
                     <Text size="lg" className="text-brand-structural-navy max-w-3xl mx-auto">
                        As practitioners deepen their development, therapeutic work shifts from rapid symptom-focused intervention to highly intentional, layered conceptual understanding.
                     </Text>
                 </div>

                 <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                     <div>
                         <Text size="sm" className="font-bold text-brand-structural-navy mb-4">Therapeutic capability develops progressively through:</Text>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                              {[
                                 "Integrative case exploration",
                                 "Framework-based psychotherapy learning",
                                 "Conceptualization discussions",
                                 "Layered observation exercises",
                                 "Transformational process analysis",
                                 "Applied therapeutic reflection"
                              ].map((item, i) => (
                                  <div key={i} className="bg-white p-3 text-base font-medium border border-brand-soft-neutral/50 text-brand-structural-navy rounded-xl flex items-center gap-3 shadow-sm hover:-translate-y-0.5 transition-transform">
                                      <Layers className="w-4 h-4 text-brand-soft-teal shrink-0" />
                                      {item}
                                  </div>
                              ))}
                         </div>
                         <div className="bg-brand-warm-white border border-brand-soft-neutral/50 p-6 rounded-2xl border-l-4 border-l-brand-soft-teal shadow-sm">
                             <Text size="sm" className="text-brand-structural-navy font-bold mb-1">The emphasis is not memorizing isolated interventions.</Text>
                             <Text size="sm" className="text-brand-secondary-text m-0 border-t border-brand-soft-neutral/30 pt-2 mt-2">It is strengthening deeper conceptual understanding and intentional psychotherapy capability based on observed structural patterns.</Text>
                         </div>
                     </div>

                     <div className="flex justify-center relative">
                         <div className="bg-brand-warm-white w-full max-w-sm rounded-[3rem] p-8 flex flex-col justify-center items-center relative overflow-hidden shadow-sm border border-brand-soft-neutral">
                             <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest absolute top-8">Development Flow</div>
                             <div className="flex flex-col items-center gap-2 z-10 w-full text-center mt-8">
                                 {["Learn & Observe", "Conceptualize", "Apply & Reflect", "Integrative Flexibility"].map((step, i, arr) => (
                                     <div key={i} className="flex flex-col items-center w-full">
                                         <div className="w-full py-4 px-4 rounded-2xl font-medium text-base transition-colors bg-white text-brand-structural-navy shadow-sm border border-brand-soft-neutral/50">
                                             {step}
                                         </div>
                                         {i < arr.length - 1 && (
                                             <div className="h-4 w-px bg-brand-soft-teal my-1" />
                                         )}
                                     </div>
                                 ))}
                             </div>
                         </div>
                     </div>
                 </div>
             </Section>

             {/* 7. PROGRAMS & COHORTS */}
             <Section theme="white" className="border-y border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-4">Two learning environments. One developmental direction.</Heading>
                    <Text size="lg" className="text-brand-structural-navy max-w-3xl mx-auto">Different practitioners integrate advanced psychotherapy learning differently.</Text>
                </div>

                <div className="max-w-3xl mx-auto mb-16 bg-brand-warm-white p-8 rounded-3xl border border-brand-soft-neutral/50 shadow-sm text-center">
                    <Heading level={4} className="text-brand-structural-navy mb-6">Interactive Learning Style Selector</Heading>
                    <Text size="sm" className="font-medium text-brand-secondary-text mb-6">Which environment fits you best?</Text>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6" role="tablist" aria-label="Learning Styles">
                        <button 
                            id="tab-1"
                            onClick={() => setSelectedStyle(1)} 
                            role="tab" 
                            aria-selected={selectedStyle === 1}
                            aria-controls="panel-1"
                            className={cn("px-4 py-3 rounded-lg text-base font-medium transition-colors border outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal", selectedStyle === 1 ? "bg-brand-soft-teal text-white border-brand-soft-teal shadow-md" : "bg-white text-brand-structural-navy border-brand-soft-neutral hover:bg-brand-soft-neutral/10")}
                        >
                            "I prefer independent reflection and flexible pacing."
                        </button>
                        <button 
                            id="tab-2"
                            onClick={() => setSelectedStyle(2)} 
                            role="tab" 
                            aria-selected={selectedStyle === 2}
                            aria-controls="panel-2"
                            className={cn("px-4 py-3 rounded-lg text-base font-medium transition-colors border outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal", selectedStyle === 2 ? "bg-brand-structural-navy text-white border-brand-structural-navy shadow-md" : "bg-white text-brand-structural-navy border-brand-soft-neutral hover:bg-brand-soft-neutral/10")}
                        >
                            "I benefit from collaborative discussion and guided application."
                        </button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                    <div id="panel-1" aria-labelledby="tab-1" role="tabpanel" className={cn("p-8 rounded-3xl border flex flex-col h-full shadow-sm transition-all duration-300", selectedStyle === 1 ? "bg-white border-brand-soft-teal ring-4 ring-brand-soft-teal/20" : "bg-white border-brand-soft-neutral/50")}>
                        <Heading level={3} className="text-2xl mb-2 text-brand-structural-navy">CHP Program</Heading>
                        <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6">Flexible • Independent • Conceptually Deep</div>
                        <div className="bg-brand-warm-white p-4 rounded-xl mb-6 border border-brand-soft-neutral/30">
                            <Text size="sm" className="font-bold text-brand-structural-navy m-0">Best suited for practitioners who:</Text>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-base text-brand-secondary-text"><BookOpen className="w-4 h-4 text-brand-soft-teal shrink-0" /> Prefer autonomous learning</li>
                            <li className="flex items-center gap-3 text-base text-brand-secondary-text"><BookOpen className="w-4 h-4 text-brand-soft-teal shrink-0" /> Value reflective integration</li>
                            <li className="flex items-center gap-3 text-base text-brand-secondary-text"><BookOpen className="w-4 h-4 text-brand-soft-teal shrink-0" /> Want flexible progression</li>
                            <li className="flex items-center gap-3 text-base text-brand-secondary-text"><BookOpen className="w-4 h-4 text-brand-soft-teal shrink-0" /> Enjoy deeper conceptual exploration</li>
                        </ul>
                        <div className="pt-6 border-t border-brand-soft-neutral/30 text-sm font-bold text-brand-structural-navy/60 uppercase tracking-widest flex items-center justify-between">
                            <span>Integration:</span>
                            <span className="text-brand-soft-teal text-right">Independent, Formative</span>
                        </div>
                    </div>
                    
                    <div id="panel-2" aria-labelledby="tab-2" role="tabpanel" className={cn("p-8 rounded-3xl flex flex-col h-full shadow-sm transition-all duration-300", selectedStyle === 2 ? "bg-brand-structural-navy ring-4 ring-brand-structural-navy/40 text-white" : "bg-brand-structural-navy text-white")}>
                        <Heading level={3} className="text-2xl mb-2 text-white">CHP Cohort</Heading>
                        <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6">Guided • Interactive • Application-Focused</div>
                        <div className="bg-white/10 p-4 rounded-xl mb-6 border border-white/10 backdrop-blur-sm">
                            <Text size="sm" className="font-bold text-white m-0">Best suited for practitioners who benefit from:</Text>
                        </div>
                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-base text-white/80"><Users className="w-4 h-4 text-brand-soft-teal shrink-0" /> Collaborative case discussion</li>
                            <li className="flex items-center gap-3 text-base text-white/80"><Users className="w-4 h-4 text-brand-soft-teal shrink-0" /> Guided conceptualization</li>
                            <li className="flex items-center gap-3 text-base text-white/80"><Users className="w-4 h-4 text-brand-soft-teal shrink-0" /> Experiential interaction</li>
                            <li className="flex items-center gap-3 text-base text-white/80"><Users className="w-4 h-4 text-brand-soft-teal shrink-0" /> Reflective therapeutic dialogue</li>
                        </ul>
                        <div className="pt-6 border-t border-white/10 text-sm font-bold text-white/50 uppercase tracking-widest flex items-center justify-between">
                            <span>Integration:</span>
                            <span className="text-brand-soft-teal text-right">Guided, Collaborative</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-brand-warm-white px-6 py-3 rounded-full border border-brand-soft-neutral/50 text-base font-medium text-brand-structural-navy shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal" />
                        Both pathways support the same integrative developmental philosophy.
                    </div>
                </div>
            </Section>

            {/* 8. WHO CHP RESONATES MOST WITH */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">Who CHP resonates most with</Heading>
                    <Text size="lg" className="text-brand-structural-navy font-medium max-w-3xl mx-auto">
                        CHP is designed for practitioners seeking deeper psychotherapy understanding.
                    </Text>
                </div>

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
                     <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50 shadow-sm">
                        <div className="text-xs uppercase font-bold text-brand-secondary-text mb-8 tracking-widest flex items-center gap-2 border-b border-brand-soft-neutral/30 pb-4">
                             <CheckCircle2 className="w-4 h-4 text-brand-soft-teal" /> CHP tends to resonate strongly with practitioners who:
                        </div>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                            {[
                                "Feel limited by single-modality thinking",
                                "Want stronger integrative capability",
                                "Work with recurring or layered client patterns",
                                "Seek deeper therapeutic conceptualization",
                                "Value framework-based psychotherapy",
                                "Want greater confidence navigating complexity",
                                "Are interested in root-cause understanding",
                                "Want more intentional intervention clarity"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" />
                                    <Text size="sm" className="m-0 text-brand-structural-navy font-medium">{item}</Text>
                                </div>
                            ))}
                        </div>
                        <div className="bg-brand-warm-white p-6 rounded-2xl border-l-4 border-l-brand-structural-navy text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Text size="sm" className="m-0 font-medium text-brand-structural-navy/80 italic max-w-sm">"I do not just want more techniques. I want clearer therapeutic understanding."</Text>
                            <div className="text-xs uppercase tracking-widest text-brand-structural-navy font-bold">The Core shift</div>
                        </div>
                     </div>

                     <div className="bg-brand-structural-navy p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50 flex flex-col justify-center relative overflow-hidden group shadow-lg">
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888047462-811ccecead13?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-[0.15] mix-blend-overlay transition-opacity duration-700 group-hover:opacity-[0.25]" />
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-structural-navy via-brand-structural-navy/80 to-transparent" />
                         
                         <div className="relative z-10">
                             <div className="text-xs uppercase font-bold text-brand-soft-teal/80 mb-6 tracking-widest border-b border-white/10 pb-4 inline-block">May not be the right fit if you want:</div>
                             <ul className="space-y-5">
                                {[
                                    "Rigid intervention systems",
                                    "Modality-specific memorization",
                                    "Surface-level symptom management",
                                    "Quick certification without deeper therapeutic development"
                                ].map((item, i) => (
                                    <li key={i} className="text-base font-medium text-white/80 flex gap-4 items-start">
                                        <span className="text-brand-soft-teal/50 mt-1">—</span> <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                             </ul>
                         </div>
                     </div>
                </div>
            </Section>

            {/* 9. PRACTITIONER DEVELOPMENT & THERAPEUTIC PRESENCE */}
            <Section theme="white">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">Deeper understanding changes not only therapy… but the practitioner</Heading>
                    <Text size="lg" className="text-brand-structural-navy">
                        As therapeutic understanding deepens, many practitioners notice shifts in their presence and clarity.
                    </Text>
                </div>
                
                <div className="max-w-5xl mx-auto mb-16">
                     <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-brand-soft-neutral/50">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                            {[
                                { title: "Conceptual Clarity", sub: "Clearer reasoning" },
                                { title: "Therapeutic Steadiness", sub: "Calmer in complexity" },
                                { title: "Intentional Decisions", sub: "Structured thinking" },
                                { title: "Integrative Flexibility", sub: "More adaptable" }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-xl bg-brand-warm-white border border-brand-soft-neutral/30 text-center">
                                    <div className="text-base font-bold text-brand-structural-navy mb-1">{item.title}</div>
                                    <div className="text-sm text-brand-secondary-text">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-brand-structural-navy text-white rounded-3xl shadow-xl overflow-hidden relative group">
                        <div className="aspect-video relative overflow-hidden bg-brand-structural-navy flex items-center justify-center h-full min-h-[400px]">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-50 transition-all duration-700 scale-100 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-brand-structural-navy/70 mix-blend-multiply" />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-structural-navy via-brand-structural-navy/40 to-transparent" />
                            
                            <button aria-label="Play video" className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform hover:scale-110 shadow-2xl group-hover:bg-brand-soft-teal/20 group-hover:border-brand-soft-teal/50">
                                <Play className="w-8 h-8 text-white ml-2 opacity-90 group-hover:opacity-100" aria-hidden="true" />
                            </button>
                            
                            <div className="absolute bottom-8 left-8 right-8 z-10">
                                <Quote className="w-8 h-8 text-brand-soft-teal/60 mb-4" />
                                <div className="min-h-[120px] transition-opacity duration-300">
                                    <div className="italic text-lg md:text-xl text-white font-light leading-relaxed mb-4">
                                       "{quotes[activeQuote].text}"
                                    </div>
                                    <div className="text-brand-soft-teal text-sm font-bold tracking-widest uppercase">— {quotes[activeQuote].author}</div>
                                </div>
                                <div className="flex gap-2 mt-6">
                                    {quotes.map((_, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => setActiveQuote(i)}
                                            className={cn("w-2 h-2 rounded-full transition-all duration-300", activeQuote === i ? "bg-brand-soft-teal w-6" : "bg-white/30 hover:bg-white/50")}
                                            aria-label={`View quote ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-warm-white text-brand-structural-navy p-8 md:p-10 rounded-3xl border border-brand-soft-neutral flex flex-col justify-center relative shadow-sm">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                            <BookOpen className="w-32 h-32" />
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-center">
                            <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary-text mb-6">Perspectives</div>
                            <Heading level={3} className="text-brand-structural-navy mb-4 lg:text-2xl">The Practitioner's Journey</Heading>
                            <Text size="sm" className="font-medium text-brand-secondary-text leading-relaxed mb-8 flex-grow">
                                Hear from practitioners about how deeper structural understanding shifted their clinical practice, reduced their conceptual fragmentation, and increased confidence in handling complex cases.
                            </Text>
                            <a href="#journeys" className="inline-flex items-center justify-center transition-all duration-200 font-medium rounded-sm gap-2 bg-brand-deep-teal text-white hover:bg-brand-structural-depth px-6 py-3 self-start group">
                                Read Practitioner Journeys
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 9.5 MONEY BACK GUARANTEE */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30 bg-gradient-to-b from-brand-warm-white to-white">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-4">Our Confidence</div>
                     <Heading level={2} className="text-brand-structural-navy mb-6">A 100% Money-Back Guarantee</Heading>
                     <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto mb-8">
                         We are deeply confident in the frameworks, the structure, and the developmental learning environment we've built. That's why we offer a transparent money-back guarantee.
                     </Text>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <div className="bg-brand-structural-navy p-8 md:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 border border-brand-soft-neutral/20 relative overflow-hidden text-center md:text-left">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop')] bg-cover opacity-[0.05]" />
                        <div className="w-16 h-16 rounded-full bg-brand-soft-teal/20 text-brand-soft-teal flex items-center justify-center shrink-0 shadow-inner border border-brand-soft-teal/30 z-10 mx-auto md:mx-0">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <div className="relative z-10">
                            <Heading level={4} className="text-white mb-3">Try it risk-free</Heading>
                            <Text className="text-white/80 mb-0 text-base leading-relaxed">
                                If you attend the first weekend of the cohort or complete the first module of the program, fully participate in the exercises, and feel that the approach is not delivering the transformational depth you were looking for—we will refund your entire investment, no questions asked.
                            </Text>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 10. EXPLORE THE CHP APPROACH */}
            <Section theme="dark" className="text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#65BFA9_0%,transparent_70%)] bg-[length:100%_200%]" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <FadeIn>
                        <div className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase mb-6">Continue Exploring</div>
                        <Heading level={2} className="text-white mb-6">Explore the CHP Approach</Heading>
                        <Text size="lg" className="text-white/80 mb-10 max-w-2xl mx-auto">
                            The purpose is not to pressure immediate decisions. It is to help practitioners explore whether this developmental direction aligns with how they want to practice, how they want to grow, and the kind of psychotherapist they want to become.
                        </Text>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 flex-wrap">
                             <Button href="#prospectus-success-chp" className="w-full sm:w-auto px-8 py-4">Download CHP Prospectus</Button>
                             <Button href="#level-1" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-structural-navy hover:bg-white/90">Start with Level 1</Button>
                             <Button href="#cohorts" variant="outline" className="w-full sm:w-auto px-8 py-4 border-white/20 text-white hover:bg-white/10">Explore CHP Cohorts</Button>
                        </div>
                        
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm max-w-4xl mx-auto text-left flex flex-col md:flex-row gap-8 items-center cursor-pointer hover:bg-white/10 transition-colors duration-300">
                             <div className="shrink-0 bg-brand-soft-teal/20 p-4 rounded-full text-brand-soft-teal hidden md:block">
                                 <BookOpen className="w-8 h-8" />
                             </div>
                             <div className="flex-1">
                                <div className="text-sm uppercase tracking-widest font-bold text-brand-soft-teal mb-4 text-center md:text-left">Inside the Prospectus</div>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6">
                                    {[
                                        "Integrative Frameworks",
                                        "Root-Cause Understanding",
                                        "Layered Conceptualization",
                                        "Emotional Conditioning",
                                        "Programs vs Cohorts",
                                        "Practitioner Pathways",
                                        "Developmental Levels",
                                        "Practical Details"
                                    ].map((item, i) => (
                                        <div key={i} className="text-base font-medium text-white/80 flex items-center gap-2">
                                            <CheckCircle2 className="w-3 h-3 text-brand-soft-teal shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};
