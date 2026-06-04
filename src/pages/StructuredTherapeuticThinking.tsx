import React, { useState } from 'react';
import { Section, Heading, Text, Grid, Card, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { Brain, CornerDownRight, ArrowRight, Eye, Network, ListChecks, ArrowUpRight, Compass, LayoutTemplate, SplitSquareHorizontal, Waypoints, Puzzle, Blocks, Layers } from 'lucide-react';
import { Rec3SoftSea } from './Rec3SoftSea';

export const StructuredTherapeuticThinking = () => {
    return (
        <div className="bg-brand-warm-white">
            {/* HEADER SECTION */}
            <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden bg-brand-structural-navy text-white text-center">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,#65BFA9_0%,transparent_70%)]" />
                <div className="mx-auto w-full max-w-4xl px-6 relative z-10 flex flex-col items-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-soft-teal text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-white/10">
                            <Brain className="w-3.5 h-3.5" /> Conceptual Foundation
                        </div>
                        <Heading level={1} className="mb-6">Structured Therapeutic Thinking</Heading>
                        <Text size="lg" className="text-white/80 max-w-2xl mx-auto font-light mb-12">
                            Moving beyond technique acquisition toward systemic therapeutic comprehension and intentional intervention.
                        </Text>
                    </FadeIn>
                </div>
            </Section>

            {/* RECOMMENDED PROGRESSION NUDGE */}
            <Section theme="white" className="py-8 !pb-0 hidden md:block">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-brand-warm-white p-6 rounded-r-2xl rounded-l-md border border-brand-soft-neutral/50 border-l-4 border-l-brand-soft-teal shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-brand-soft-neutral/50">
                            <Layers className="w-5 h-5 text-brand-soft-teal" />
                        </div>
                        <div className="flex-1">
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy/60 block mb-1">Recommended Progression</span>
                            <Text className="text-base text-brand-secondary-text m-0">
                                This framework builds upon the fundamental architecture of human behavior. To maximize this concept, we recommend first exploring <a href="#layered-patterns" className="text-brand-structural-navy font-semibold underline hover:text-brand-soft-teal transition-colors">Layered Human Patterns</a>.
                            </Text>
                        </div>
                    </div>
                </div>
            </Section>

            {/* RECOMMENDED PROGRESSION NUDGE (Mobile) */}
            <div className="md:hidden bg-brand-warm-white p-6 border-b border-brand-soft-neutral/50 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy/60 block mb-2">Recommended Progression</span>
                <Text className="text-sm text-brand-secondary-text m-0">
                    We recommend first exploring <a href="#layered-patterns" className="text-brand-structural-navy font-semibold underline">Layered Human Patterns</a> for the deepest understanding.
                </Text>
            </div>

            {/* 1. WHY PRACTITIONERS FEEL UNCERTAIN */}
            <Section theme="white">
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <Heading level={2} className="mb-6">The Limits of Technique-Driven Practice</Heading>
                            <Text muted className="mb-6">
                                Practitioners often work tirelessly to accumulate theories and intervention models. While intellectually sound, this approach frequently encounters structural ambiguity in live sessions:
                            </Text>
                            <ul className="space-y-3 mb-8">
                                <li className="flex gap-3 text-brand-secondary-text text-base">
                                    <CornerDownRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                    <span className="italic">"What should I focus on here?"</span>
                                </li>
                                <li className="flex gap-3 text-brand-secondary-text text-base">
                                    <CornerDownRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                    <span className="italic">"Which approach fits this situation?"</span>
                                </li>
                                <li className="flex gap-3 text-brand-secondary-text text-base">
                                    <CornerDownRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                    <span className="italic">"Am I missing something important?"</span>
                                </li>
                            </ul>
                            <Text size="lg" className="font-medium text-brand-structural-navy">
                                The friction is rarely a lack of competence. It occurs when practitioners learn isolated concepts without developing a cohesive cognitive framework to navigate human complexity.
                            </Text>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-sm">
                                <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800" alt="Complexity in therapeutic work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="bg-brand-warm-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50">
                                <div className="text-xs font-bold text-brand-structural-navy/40 uppercase tracking-widest mb-4">The Reality</div>
                                <Text className="text-brand-structural-navy font-medium mb-4">Real therapeutic work rarely happens in neat categories.</Text>
                                <Text className="text-base text-brand-secondary-text mb-4">
                                    A single client may simultaneously experience emotional overwhelm, conflicting beliefs, conditioned reactions, and identity struggles.
                                </Text>
                                <Text className="text-base text-brand-secondary-text">
                                    When multiple layers appear together, practitioners often default to memorized techniques or trial-and-error. This is exactly where structured therapeutic thinking becomes essential.
                                </Text>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 2. TECHNIQUES VS STRUCTURED THINKING */}
            <Section theme="neutral" className="py-24">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading level={2} className="mb-4">Techniques vs. Structured Thinking</Heading>
                        <Text muted>
                            Techniques answer "What can I do?". Structured thinking answers "What is actually happening here?".
                        </Text>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* Technique Approach */}
                        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-brand-soft-neutral/50 flex flex-col h-full">
                            <div className="inline-flex p-4 rounded-full bg-brand-soft-neutral/30 mb-6 self-start">
                                <ListChecks className="w-6 h-6 text-brand-structural-navy/50" />
                            </div>
                            <Heading level={3} className="text-xl mb-6">Protocol-Driven Application</Heading>
                            <div className="flex flex-col gap-4 text-left flex-1">
                                <div className="p-4 bg-brand-warm-white rounded-xl border border-brand-soft-neutral/30 flex items-start gap-4">
                                    <span className="text-sm font-bold text-brand-structural-navy/50 w-12 pt-0.5 uppercase tracking-widest">Focus</span>
                                    <Text className="text-base m-0">"What intervention exists for this symptom?"</Text>
                                </div>
                                <div className="p-4 bg-brand-warm-white rounded-xl border border-brand-soft-neutral/30 flex items-start gap-4">
                                    <span className="text-sm font-bold text-brand-structural-navy/50 w-12 pt-0.5 uppercase tracking-widest">Act</span>
                                    <Text className="text-base m-0">Applying a specific script or isolated method.</Text>
                                </div>
                                <div className="p-4 bg-brand-warm-white rounded-xl border border-brand-soft-neutral/30 flex items-start gap-4 mt-auto">
                                    <span className="text-sm font-bold text-brand-structural-navy/50 w-12 pt-0.5 uppercase tracking-widest">Result</span>
                                    <Text className="text-base m-0 text-brand-secondary-text font-medium">Inconsistent outcomes when complexity arises.</Text>
                                </div>
                            </div>
                        </div>

                        {/* Structured Approach */}
                        <div className="bg-brand-structural-navy text-white rounded-3xl p-8 md:p-10 shadow-lg border border-brand-soft-teal/30 flex flex-col h-full">
                            <div className="inline-flex p-4 rounded-full bg-brand-soft-teal/10 mb-6 self-start border border-brand-soft-teal/20">
                                <Network className="w-6 h-6 text-brand-soft-teal" />
                            </div>
                            <Heading level={3} className="text-xl mb-6 text-white">Structural Comprehension</Heading>
                            <div className="flex flex-col gap-4 text-left flex-1">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-4">
                                    <span className="text-sm font-bold text-brand-soft-teal w-12 pt-0.5 uppercase tracking-widest">Focus</span>
                                    <Text className="text-base m-0 text-white/90">"What structure is maintaining this pattern?"</Text>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-start gap-4">
                                    <span className="text-sm font-bold text-brand-soft-teal w-12 pt-0.5 uppercase tracking-widest">Act</span>
                                    <Text className="text-base m-0 text-white/90">Observing interactions between behavior, emotion, and identity.</Text>
                                </div>
                                <div className="p-4 bg-brand-soft-teal/20 rounded-xl border border-brand-soft-teal/40 flex items-start gap-4 mt-auto">
                                    <span className="text-sm font-bold text-brand-soft-teal w-12 pt-0.5 uppercase tracking-widest">Result</span>
                                    <Text className="text-base m-0 text-white font-medium">Intentional, adaptive, and meaningful intervention.</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 3 & 4. CLARITY BEFORE INTERVENTION */}
            <Section theme="white">
                <FadeIn>
                    <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                        <div className="flex flex-col md:sticky md:top-32">
                            <Heading level={2} className="mb-6">Clarity Before Intervention</Heading>
                            <Text muted className="mb-6">
                                A foundational principle of the ICHARS ecosystem: precise intervention naturally follows structural clarity. Action must invariably be preceded by accurate observation.
                            </Text>
                            <Text muted className="mb-8">
                                Action taken without structural understanding risks becoming mechanical, reactive, or fundamentally misaligned with the client's internal reality.
                            </Text>
                            
                            <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50">
                                <div className="flex items-center gap-2 mb-3">
                                    <Compass className="w-5 h-5 text-brand-soft-teal" />
                                    <span className="font-semibold text-base text-brand-structural-navy">The Cognitive Shift</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-neutral/80 mt-2 shrink-0" />
                                        <Text className="text-base m-0 text-brand-secondary-text line-through opacity-70">"How do I stop this behavior?"</Text>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                        <Text className="text-base m-0 font-medium text-brand-structural-navy">"What structure is maintaining this experience?"</Text>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case Snippet - Tiered Unpacking */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-soft-neutral/50 h-full flex flex-col">
                             <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6">Case Exploration</div>
                             <Heading level={3} className="text-xl mb-4">Case Structural Observation</Heading>
                             <Text className="text-base mb-8 italic text-brand-secondary-text border-l-[3px] border-brand-soft-teal pl-4 bg-brand-soft-teal/5 py-3 rounded-r-lg">
                                 "I just can't seem to start this project. I want to, but I keep putting it off and watching TV instead. I guess I just have bad time management."
                             </Text>

                             <div className="flex-1 space-y-8">
                                 <div>
                                     <div className="text-xs font-bold text-brand-structural-navy/60 uppercase tracking-widest mb-2">Surface Level Focus</div>
                                     <Text className="text-base m-0 text-brand-structural-navy/80">Client identifies as having a behavioral deficit (time management). Standard protocol: <span className="line-through opacity-70">Give scheduling tips.</span></Text>
                                 </div>
                                 
                                 <div>
                                     <div className="flex items-center gap-2 text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">
                                         <Eye className="w-3.5 h-3.5" /> Structural Level Focus
                                     </div>
                                     <ul className="space-y-5">
                                         <li>
                                            <span className="text-base font-semibold text-brand-structural-navy block mb-1">1. Fear of Failure (Emotion)</span>
                                            <span className="text-base text-brand-secondary-text">Procrastination protects them from producing imperfect work.</span>
                                         </li>
                                         <li>
                                            <span className="text-base font-semibold text-brand-structural-navy block mb-1">2. Identity Conflict</span>
                                            <span className="text-base text-brand-secondary-text">Success might mean taking on responsibilities they don't feel ready for.</span>
                                         </li>
                                         <li>
                                            <span className="text-base font-semibold text-brand-structural-navy block mb-1">3. Emotional Overwhelm</span>
                                            <span className="text-base text-brand-secondary-text">The task triggers implicit anxiety, so avoidance serves as regulation.</span>
                                         </li>
                                     </ul>
                                 </div>
                             </div>

                             <div className="mt-8 pt-6 border-t border-brand-soft-neutral/50">
                                 <Text className="text-sm font-medium text-brand-soft-teal mb-4 uppercase tracking-widest">
                                     The Shift
                                 </Text>
                                 <Text className="text-base font-normal text-brand-structural-navy/90 mb-4">
                                     Intervention shifts from "time management tips" to addressing the protective function of the behavior.
                                 </Text>
                                 <div className="p-5 bg-brand-structural-navy rounded-xl border border-brand-structural-depth text-white text-base">
                                     To make this kind of structural observation repeatable, practitioners need a clinical navigation system. This is where <span className="text-brand-soft-teal font-medium">SOFT SEA</span> comes in.
                                 </div>
                             </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            <Rec3SoftSea />

            {/* 5, 6, 7. THE EVOLUTION OF PRACTITIONER THINKING */}
            <Section theme="neutral" className="py-24 border-t border-brand-soft-neutral/50">
                <FadeIn>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Structural Ecosystem Development</div>
                                <Heading level={2} className="mb-6">The Practitioner Evolution</Heading>
                                <Text size="lg" className="mb-6 text-brand-structural-navy font-medium">
                                    Clinical confidence emerges not when complexity disappears, but when it becomes structurally coherent and navigable.
                                </Text>
                                <Text muted className="mb-6">
                                    The ICHARS cognitive environment prioritizes the cultivation of an underlying architectural framework. Without it, flexibility often degrades into disjointed technique-hopping. Within a structured cognitive environment, adaptability becomes safe, deliberate, and deeply integrated.
                                </Text>
                                <Text muted className="mb-8">
                                    When structural comprehension anchors the assessment, intervention naturally aligns with the individual's psychological reality, creating long-lasting, ecological transformation.
                                </Text>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-brand-warm-white flex items-center justify-center shrink-0 border border-brand-soft-neutral/50">
                                        <Eye className="w-4 h-4 text-brand-structural-navy" />
                                    </div>
                                    <div>
                                        <span className="text-base font-bold text-brand-structural-navy block mb-1">1. Structured Observation</span>
                                        <span className="text-base text-brand-secondary-text leading-relaxed">Moving beyond narrative content to observe contradictions, pacing shifts, and unconscious safeguarding.</span>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-brand-warm-white flex items-center justify-center shrink-0 border border-brand-soft-neutral/50">
                                        <Waypoints className="w-4 h-4 text-brand-soft-teal" />
                                    </div>
                                    <div>
                                        <span className="text-base font-bold text-brand-structural-navy block mb-1">2. Pattern Recognition</span>
                                        <span className="text-base text-brand-secondary-text leading-relaxed">Recognizing recurring structures and repeating emotional processes instead of responding to isolated incidents.</span>
                                    </div>
                                </div>
                                <div className="bg-brand-structural-navy p-6 rounded-2xl border border-brand-structural-depth shadow-sm flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                        <SplitSquareHorizontal className="w-4 h-4 text-brand-soft-teal" />
                                    </div>
                                    <div>
                                        <span className="text-base font-bold text-white block mb-1">3. Strategic Intervention</span>
                                        <span className="text-base text-white/80 leading-relaxed">Transitioning to deliberate modality selection based on the specific architectural layer requiring integration.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* CTA SECTION */}
            <Section theme="neutral">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        <Heading level={2} className="mb-6">Cultivate Structural Comprehension</Heading>
                        <Text size="lg" muted className="mb-10 max-w-2xl">
                            Begin expanding your cognitive toolkit to perceive, unpack, and successfully navigate complex human patterns.
                        </Text>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button href="#programs" className="w-full sm:w-auto">Explore Programs</Button>
                            <Button href="#layered-patterns" variant="secondary" className="w-full sm:w-auto">Understanding Layered Patterns</Button>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};
