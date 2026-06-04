import React from 'react';
import { Section, Heading, Text, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { 
    ArrowRight, 
    CheckCircle2
} from 'lucide-react';

export const Rec3SoftSea = () => {
    return (
        <>
            {/* CORE POSITIONING AS A TRANSITION */}
            <Section className="py-24 relative overflow-hidden bg-brand-structural-navy text-white text-center">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,#65BFA9_0%,transparent_70%)]" />
                <div className="mx-auto w-full max-w-4xl px-6 relative z-10 flex flex-col items-center">
                    <FadeIn>
                        <Heading level={2} className="mb-6">SOFT SEA®: Structural Navigation</Heading>
                        <Text size="lg" className="text-white border-b border-white/20 pb-6 mb-6 inline-block font-medium tracking-wide uppercase">
                            An Architectural Framework
                        </Text>
                        <Text size="lg" className="text-white/80 max-w-2xl mx-auto font-light mb-12">
                            SOFT SEA® serves as a cognitive scaffolding for practitioners. It organizes assessment, intervention selection, and integration into a cohesive, non-linear ecosystem.
                        </Text>
                        
                        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left mt-4 text-base mt-8 border-t border-white/10 pt-8">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <strong className="block text-brand-soft-teal mb-2">Isolate</strong>
                                <span className="text-white/70">Pinpoint the precise locus of the friction or block.</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <strong className="block text-brand-soft-teal mb-2">Comprehend</strong>
                                <span className="text-white/70">Deconstruct the architectural logic maintaining the pattern.</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <strong className="block text-brand-soft-teal mb-2">Integrate</strong>
                                <span className="text-white/70">Select ecological interventions that respect the whole system.</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* VISUAL DIAGRAM (Descriptive Concept) */}
            <Section theme="neutral" className="py-12 border-b border-brand-soft-neutral/50">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-2 md:gap-4 text-sm font-bold uppercase tracking-widest text-brand-structural-navy/60 mb-8">
                        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm">Situation</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-soft-teal" />
                        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm">Outcome</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-soft-teal" />
                        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm">Future</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-soft-teal" />
                        <span className="bg-brand-structural-navy text-white px-3 py-1.5 rounded-md shadow-sm">Tasks & Triggers</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-soft-teal" />
                        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm">Suggestion</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-soft-teal" />
                        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm">Evaluation</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-brand-soft-teal" />
                        <span className="bg-white px-3 py-1.5 rounded-md shadow-sm">Action</span>
                    </div>
                    
                    <div className="flex justify-center flex-wrap gap-4 md:gap-8 text-base font-medium text-brand-secondary-text">
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-soft-teal"/> Structured Yet Flexible</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-soft-teal"/> Eclecticism Without Chaos</span>
                        <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-soft-teal"/> Process Guided. Person Adapted.</span>
                    </div>
                </div>
            </Section>

            {/* FRAMEWORK BREAKDOWN */}
            <Section theme="white">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest mb-4">The Core Diagnostic Phase (SOFT)</div>
                        <Heading level={2} className="mb-4">Framework Breakdown</Heading>
                        <Text muted>
                            Before moving into Suggestion, Evaluation, and Action (SEA), we must establish structural clarity. Exploring the SOFT parameters grounds the practitioner's understanding.
                        </Text>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {/* S & O */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-brand-warm-white border-brand-soft-neutral/50 p-8">
                                <div className="text-4xl font-bold tracking-tighter text-brand-structural-navy/20 mb-4">S</div>
                                <Heading level={4} className="text-brand-structural-navy text-xl mb-3">Situation</Heading>
                                <Text className="text-base font-medium text-brand-structural-navy mb-4">Navigating the present ecosystem without entanglement in explicit narrative.</Text>
                                <ul className="space-y-2 text-base text-brand-secondary-text list-disc pl-4">
                                    <li>emotional patterns</li>
                                    <li>behavioral cycles</li>
                                    <li>contextual triggers</li>
                                    <li>presenting problems</li>
                                    <li>recurring breakdown patterns</li>
                                </ul>
                            </Card>
                            
                            <Card className="bg-brand-warm-white border-brand-soft-neutral/50 p-8">
                                <div className="text-4xl font-bold tracking-tighter text-brand-structural-navy/20 mb-4">O</div>
                                <Heading level={4} className="text-brand-structural-navy text-xl mb-3">Outcome</Heading>
                                <Text className="text-base font-medium text-brand-structural-navy mb-4">Establishing a well-formed, ecologically harmonious trajectory.</Text>
                                <div className="space-y-4">
                                    <div className="p-3 bg-red-50 text-red-800 rounded-lg text-sm border border-red-100">
                                        <strong className="block mb-1">Not:</strong>
                                        "I don't want anxiety."
                                    </div>
                                    <div className="p-3 bg-brand-soft-teal/10 text-brand-structural-navy rounded-lg text-sm border border-brand-soft-teal/20">
                                        <strong className="block mb-1 text-brand-soft-teal">But:</strong>
                                        "I want to confidently communicate in meetings while feeling calm, clear, and present."
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* F & T */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="bg-brand-warm-white border-brand-soft-neutral/50 p-8">
                                <div className="text-4xl font-bold tracking-tighter text-brand-structural-navy/20 mb-4">F</div>
                                <Heading level={4} className="text-brand-structural-navy text-xl mb-3">Future</Heading>
                                <Text className="text-base font-medium text-brand-structural-navy mb-4">Facilitating the visceral and systemic anticipation of the integrated state.</Text>
                                <Text className="text-base text-brand-secondary-text mb-2">Future work helps:</Text>
                                <ul className="space-y-2 text-base text-brand-secondary-text list-disc pl-4">
                                    <li>create motivational clarity</li>
                                    <li>strengthen unconscious alignment</li>
                                    <li>identify missing resources</li>
                                    <li>reduce resistance to change</li>
                                </ul>
                            </Card>

                            <div className="relative group">
                                <div className="absolute inset-0 bg-brand-structural-navy rounded-[2.5rem] transform translate-x-2 translate-y-2 opacity-10"></div>
                                <Card className="bg-white border-brand-structural-navy w-full relative z-10 p-8 shadow-xl">
                                    <div className="text-4xl font-bold tracking-tighter text-brand-soft-teal/30 mb-4">T</div>
                                    <Heading level={4} className="text-brand-structural-navy text-xl mb-3">Tasks & Triggers</Heading>
                                    <Text className="text-base font-medium text-brand-structural-navy mb-4">Translating high-level abstractions into grounded behavioral anchors.</Text>
                                    <ul className="space-y-2 text-base text-brand-secondary-text">
                                        <li>• actionable patterns & behavioral loops</li>
                                        <li>• triggers & environmental cues</li>
                                        <li>• emotional responses</li>
                                    </ul>
                                </Card>
                            </div>
                        </div>

                        {/* NESTED SUB-STRUCTURE: H & E */}
                        <div className="mt-8 pt-8">
                            <div className="flex flex-col items-center max-w-4xl mx-auto">
                                <div className="w-px h-8 bg-brand-soft-teal/50 mb-2"></div>
                                <div className="text-xs uppercase font-bold tracking-wider text-brand-soft-teal mb-4">Architectural Drill-Down</div>
                                <Text className="text-base italic text-center max-w-2xl mb-8">Once specific tasks and triggers are identified, we perform a deep structural decomposition to isolate the exact leverage point for change.</Text>
                                
                                <div className="grid md:grid-cols-2 gap-6 w-full">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-soft-neutral/50 flex flex-col items-center text-center relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-soft-neutral/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-soft-teal/10 transition-colors duration-500" />
                                        <div className="text-4xl font-bold text-brand-soft-teal mb-4 relative z-10">H</div>
                                        <span className="text-lg font-bold text-brand-structural-navy mb-2 relative z-10">Hindrances</span>
                                        <span className="text-base text-brand-secondary-text mb-2 relative z-10">Structural interferences maintaining the problem.</span>
                                        <ul className="text-sm text-brand-secondary-text/80 space-y-1 text-left w-full pl-6 list-disc mt-2 relative z-10">
                                            <li>Limiting beliefs</li>
                                            <li>Secondary gains</li>
                                            <li>Subconscious conflicts</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-soft-neutral/50 flex flex-col items-center text-center relative overflow-hidden group">
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-soft-neutral/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 group-hover:bg-brand-soft-teal/10 transition-colors duration-500" />
                                        <div className="text-4xl font-bold text-brand-soft-teal mb-4 relative z-10">E</div>
                                        <span className="text-lg font-bold text-brand-structural-navy mb-2 relative z-10">Effective Change</span>
                                        <span className="text-base text-brand-secondary-text mb-2 relative z-10">Modality selection and intervention strategy.</span>
                                        <ul className="text-sm text-brand-secondary-text/80 space-y-1 text-left w-full pl-6 list-disc mt-2 relative z-10">
                                            <li>Determining correct fit</li>
                                            <li>Addressing the specific interference</li>
                                            <li>Strategy justification</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* S-E-A */}
                        <div className="mt-12">
                            <Heading level={4} className="text-xl text-center mb-8 border-t border-brand-soft-neutral/50 pt-12">The Integrated Intervention Phase (SEA)</Heading>
                            <div className="grid md:grid-cols-3 gap-6">
                                <Card className="bg-brand-warm-white border-brand-soft-neutral/50 p-6">
                                    <div className="text-3xl font-bold tracking-tighter text-brand-structural-navy/20 mb-3">S</div>
                                    <Heading level={5} className="text-brand-structural-navy mb-2">Suggestion</Heading>
                                    <Text className="text-base font-medium text-brand-structural-navy mb-2">Selecting and applying the calibrated intervention.</Text>
                                    <Text className="text-sm text-brand-secondary-text">Based strictly on whether the interference is emotional, cognitive, or behavioral (as defined in 'T' and 'H').</Text>
                                </Card>
                                <Card className="bg-brand-warm-white border-brand-soft-neutral/50 p-6">
                                    <div className="text-3xl font-bold tracking-tighter text-brand-structural-navy/20 mb-3">E</div>
                                    <Heading level={5} className="text-brand-structural-navy mb-2">Evaluation</Heading>
                                    <Text className="text-base font-medium text-brand-structural-navy mb-2">Testing the ecological validity of the intervention.</Text>
                                    <Text className="text-sm text-brand-secondary-text">Checking for congruence, subjective shifts, and any emergent resistance before finalizing the change.</Text>
                                </Card>
                                <Card className="bg-brand-warm-white border-brand-soft-neutral/50 p-6">
                                    <div className="text-3xl font-bold tracking-tighter text-brand-structural-navy/20 mb-3">A</div>
                                    <Heading level={5} className="text-brand-structural-navy mb-2">Action</Heading>
                                    <Text className="text-base font-medium text-brand-structural-navy mb-2">Grounding the internal shift into external reality.</Text>
                                    <Text className="text-sm text-brand-secondary-text">Assigning specific, measurable tasks in the client's day-to-day ecosystem to solidify the new neural pathways.</Text>
                                </Card>
                            </div>
                        </div>

                        {/* SECTION 3 - The Modality Engine */}
                        <div className="mt-20 pt-16 border-t border-brand-soft-neutral/50">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <div className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Intervention Architecture</div>
                                <Heading level={2} className="mb-4">System Governs Selection</Heading>
                                <Text muted>Aligning modalities with structural necessity, not habitual preference.</Text>
                            </div>

                            <div className="bg-brand-structural-navy text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-soft-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                
                                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                    <div>
                                        <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-8">
                                            <strong className="block text-brand-soft-teal text-sm uppercase tracking-wider mb-2">Symptom-Focused Inquiry:</strong>
                                            <span className="italic text-white/80">"Which intervention treats this specific behavior?"</span>
                                        </div>
                                        <div className="bg-brand-soft-teal/20 p-6 rounded-2xl border border-brand-soft-teal/40">
                                            <strong className="block text-brand-soft-teal text-sm uppercase tracking-wider mb-2">Structural Inquiry:</strong>
                                            <span className="font-medium text-white italic">"What interrelated forces substantiate this behavior?"</span>
                                        </div>
                                    </div>
                                    <div>
                                        <Text className="text-white/80 mb-6">
                                            Behavioral manifestations are multidetermined. A monolithic approach misdiagnoses the underlying mechanics of the ecosystem.
                                        </Text>
                                        <Text className="text-white/80">
                                            A structured assessment protocol allows the practitioner to transition fluidly among cognitive, somatic, and integrative modalities—governed strictly by the client's present locus of interference.
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* DIAGNOSTIC DECISION MATRIX (Table/Grid) */}
                        <div className="mt-12 space-y-4">
                            <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm grid md:grid-cols-[1fr_2fr] gap-6 items-center">
                                <div>
                                    <strong className="text-sm text-brand-soft-teal uppercase tracking-widest block mb-2">If the client is...</strong>
                                    <Heading level={5} className="text-brand-structural-navy">Emotionally Overwhelmed</Heading>
                                </div>
                                <div className="text-base">
                                    <p className="text-brand-secondary-text mb-2">The priority is NOT deep cognitive analysis. A dysregulated nervous system cannot think objectively.</p>
                                    <div className="flex flex-wrap gap-2 text-sm font-medium text-brand-structural-navy/80">
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Breathwork</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Release Metaphor</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Grounding</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm grid md:grid-cols-[1fr_2fr] gap-6 items-center">
                                <div>
                                    <strong className="text-sm text-brand-soft-teal uppercase tracking-widest block mb-2">If the client is...</strong>
                                    <Heading level={5} className="text-brand-structural-navy">Cognitively Fragmented</Heading>
                                </div>
                                <div className="text-base">
                                    <p className="text-brand-secondary-text mb-2">Confused, mentally scattered, or stuck in overthinking. Clarity often reduces emotional overwhelm.</p>
                                    <div className="flex flex-wrap gap-2 text-sm font-medium text-brand-structural-navy/80">
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Meta Model</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Reframing</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Structured Reflection</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm grid md:grid-cols-[1fr_2fr] gap-6 items-center">
                                <div>
                                    <strong className="text-sm text-brand-soft-teal uppercase tracking-widest block mb-2">If the issue is...</strong>
                                    <Heading level={5} className="text-brand-structural-navy">Conditioned Emotional Response</Heading>
                                </div>
                                <div className="text-base">
                                    <p className="text-brand-secondary-text mb-2">The body is reacting faster than conscious thought. Logic won't override it.</p>
                                    <div className="flex flex-wrap gap-2 text-sm font-medium text-brand-structural-navy/80">
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">NLP Anchoring</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Somatic Interventions</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Submodality Work</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm grid md:grid-cols-[1fr_2fr] gap-6 items-center">
                                <div>
                                    <strong className="text-sm text-brand-soft-teal uppercase tracking-widest block mb-2">If the interference is...</strong>
                                    <Heading level={5} className="text-brand-structural-navy">Implicit / Unresolved Memory</Heading>
                                </div>
                                <div className="text-base">
                                    <p className="text-brand-secondary-text mb-2">Some patterns are maintained by unresolved emotional learning from the past.</p>
                                    <div className="flex flex-wrap gap-2 text-sm font-medium text-brand-structural-navy/80">
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Inner Child Work</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">Re-imprinting</span>
                                        <span className="bg-brand-soft-neutral/30 px-2 py-1 rounded">VK Dissociation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 5 - Eclecticism Done Right */}
                        <div className="mt-24 pt-16 border-t border-brand-soft-neutral/50">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <Heading level={2} className="mb-4">Systematic Coherence over Fragmentation</Heading>
                                <Text muted>Authentic integration demands robust architectural scaffolding.</Text>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-brand-warm-white p-8 rounded-3xl border border-brand-soft-neutral flex flex-col">
                                    <Heading level={4} className="mb-6 text-brand-structural-navy/60">Fragmented Application</Heading>
                                    <ul className="space-y-3 text-base text-brand-secondary-text flex-1">
                                        <li>• Technique-stacking and protocol hopping</li>
                                        <li>• Dictated by practitioner familiarity</li>
                                        <li>• Lacking unified diagnostic clarity</li>
                                        <li>• Highly reactive to surface shifts</li>
                                        <li>• Relying on probabilistic guessing</li>
                                    </ul>
                                    <div className="mt-6 p-4 bg-white rounded-xl border border-brand-soft-neutral text-sm italic text-brand-structural-navy/60">
                                        "Applying various methodologies to see what resonates."
                                    </div>
                                </div>
                                <div className="bg-brand-structural-navy p-8 rounded-3xl shadow-xl flex flex-col relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-soft-teal/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                                    <Heading level={4} className="mb-6 text-brand-soft-teal relative z-10">Systematic Integration</Heading>
                                    <ul className="space-y-3 text-base text-white/80 flex-1 relative z-10">
                                        <li>• Framework guided & structure based</li>
                                        <li>• Modality chosen intentionally</li>
                                        <li>• Interventions mapped to interference</li>
                                        <li>• Adaptable yet structured</li>
                                    </ul>
                                    <div className="mt-6 p-4 bg-brand-soft-teal/10 rounded-xl border border-brand-soft-teal/30 text-sm italic text-white/90 font-medium relative z-10">
                                        "I understand what maintains this pattern and where intervention belongs."
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </FadeIn>
            </Section>
        </>
    );
};
