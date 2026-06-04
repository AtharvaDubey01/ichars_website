import React, { useState } from 'react';
import { Section, Heading, Text, Grid, Card, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { Layers, RefreshCcw, Eye, Network, ArrowRight, Lightbulb, UserCircle, BrainCircuit, Waves, Activity, AlertCircle, Compass, Target, CheckCircle2, Sparkles, Play } from 'lucide-react';

const coreLayers = [
  {
    id: 1,
    icon: <AlertCircle className="w-5 h-5" />,
    title: "1. Lack of Clarity About the Problem",
    summary: "Reacting to symptoms without fully understanding the underlying issue.",
    examples: ["“I have no motivation”", "“I keep overthinking”", "“I keep getting triggered”"],
    underlying: ["Fear of failure", "Emotional avoidance", "Identity conflict", "Internal pressure"],
    intervention: "Moving beyond surface complaints to map the actual cognitive and emotional structure of the problem."
  },
  {
    id: 2,
    icon: <Target className="w-5 h-5" />,
    title: "2. Lack of Clarity About the Desired Outcome",
    summary: "Knowing what to escape, but not what to create.",
    examples: ["Wanting less anxiety", "Wanting fewer conflicts", "Wanting more confidence"],
    underlying: ["Unclear emotional needs", "Undefined long-term alignment", "Lack of relational patterns"],
    intervention: "Shifting focus from what needs to be avoided to defining a clear, sensory-rich, and positively stated future."
  },
  {
    id: 3,
    icon: <Compass className="w-5 h-5" />,
    title: "3. Absence of Ecological Future Impact Understanding",
    summary: "Focusing only on immediate relief without understanding wider consequences.",
    examples: ["Changing a behavior affects relationships", "Setting boundaries triggers guilt", "Career shifts challenge identity"],
    underlying: ["Sustainability", "Relational impact", "Internal readiness", "Emotional consequences"],
    intervention: "Evaluating the systemic impact of change to ensure alignment with the person's relationships, environment, and internal readiness."
  },
  {
    id: 4,
    icon: <Activity className="w-5 h-5" />,
    title: "4. Dysfunctional Behaviors",
    summary: "Visible actions attempting to cope, protect, or regulate.",
    examples: ["Avoidance & procrastination", "Emotional withdrawal", "Compulsive habits", "Overworking"],
    underlying: ["Avoiding pain", "Maintaining familiarity", "Preserving emotional safety"],
    intervention: "Dismantling self-sabotaging coping mechanisms and replacing them with sustainable, aligned actions."
  },
  {
    id: 5,
    icon: <RefreshCcw className="w-5 h-5" />,
    title: "5. Automatic Thoughts & Conditioned Emotional Responses",
    summary: "Nervous system reacting automatically even when logically safe.",
    examples: ["Criticism triggers shame", "Uncertainty triggers anxiety", "Conflict triggers emotional shutdown"],
    underlying: ["Conditioned emotional reactions", "Past events losing conscious intensity but retaining bodily memory"],
    intervention: "Recalibrating the nervous system to untangle automatic emotional triggers from present-day reality."
  },
  {
    id: 6,
    icon: <Lightbulb className="w-5 h-5" />,
    title: "6. Beliefs, Values & Positive Intentions",
    summary: "Behavior shaped by deeper internal meanings and protective intentions.",
    examples: ["Perfectionism connected to worth", "People-pleasing connected to belonging", "Suppression connected to safety"],
    underlying: ["Emotional logic", "Attempts to maintain stability", "Self-preservation"],
    intervention: "Fulfilling the underlying protective purpose so the mind no longer needs the symptom to feel safe."
  },
  {
    id: 7,
    icon: <UserCircle className="w-5 h-5" />,
    title: "7. Identity",
    summary: "Change threatens how a person experiences themselves.",
    examples: ["“If I stop helping everyone, who am I?”", "“If I heal, what happens to the identity I built around suffering?”"],
    underlying: ["Meaning", "Belonging", "Safety", "Self-worth"],
    intervention: "Gently updating the deeply held self-narrative to integrate change without threatening the core sense of self."
  },
  {
    id: 8,
    icon: <Waves className="w-5 h-5" />,
    title: "8. Past Experiences & Suppressed Emotions",
    summary: "Overwhelming, unresolved, or un-processed earlier experiences.",
    examples: ["Repeated traumatic memory", "Suppressed emotional pain", "Unconscious expectations"],
    underlying: ["Unresolved emotional experiences", "Conditioned safety maps", "Relational templates"],
    intervention: "Resolving unprocessed emotional residue and somatic memory at the foundational root level."
  }
];

export const LayeredHumanPatterns = () => {
    const [activeLayerId, setActiveLayerId] = useState<number>(coreLayers[0].id);

    return (
        <div className="bg-brand-warm-white">

            {/* 1. HERO / CORE REALITY */}
            <Section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-structural-navy text-white text-center">
                <div className="mx-auto w-full max-w-5xl px-6 flex flex-col items-center">
                    <FadeIn w-full>
                        <Heading level={1} className="mb-6 text-center w-full">The Paradox of Change</Heading>
                        <Text size="lg" className="text-white/80 max-w-2xl mx-auto font-light mb-12 text-center">
                            Why do problems persist even when we logically know better?
                        </Text>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center text-left w-full">
                            <div className="order-2 md:order-1">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                                    <Text className="text-brand-soft-teal font-medium mb-4">The common struggle:</Text>
                                    <ul className="text-white/80 space-y-3 mb-6 font-light">
                                        <li className="flex gap-3"><span className="text-brand-soft-teal mt-0.5">→</span> <span>Knowing a relationship is unhealthy, but staying.</span></li>
                                        <li className="flex gap-3"><span className="text-brand-soft-teal mt-0.5">→</span> <span>Knowing a fear is irrational, but panicking.</span></li>
                                        <li className="flex gap-3"><span className="text-brand-soft-teal mt-0.5">→</span> <span>Knowing a habit is destructive, but continuing.</span></li>
                                    </ul>
                                    <div className="h-px w-16 bg-white/20 mb-6"></div>
                                    <Text className="text-white/90 font-medium">
                                        We don't view this as a lack of willpower.<br/>
                                        <span className="text-brand-soft-teal mt-2 block">We view it as a clash between conscious desire and unconscious protection.</span>
                                    </Text>
                                </div>
                            </div>
                            <div className="order-1 md:order-2 flex justify-center pb-8 md:pb-0">
                                <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-structural-depth flex flex-col justify-between">
                                    {/* Abstract Separation Line */}
                                    <div className="absolute top-[35%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-soft-teal to-transparent z-10 shadow-[0_0_15px_rgba(101,191,169,0.8)] opacity-60"></div>
                                    
                                    <div className="relative z-20 h-[35%] flex flex-col justify-center items-center px-6 bg-gradient-to-b from-white/5 to-transparent">
                                        <div className="text-center">
                                            <span className="text-sm uppercase tracking-widest font-bold text-white block mb-1">Conscious Logic</span>
                                            <span className="text-sm text-white/70 block font-light">The visible behavioral choices</span>
                                        </div>
                                    </div>
                                    
                                    <div className="relative z-20 h-[65%] flex flex-col justify-center items-center px-6 bg-gradient-to-b from-brand-soft-teal/10 to-transparent pt-4">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(101,191,169,0.15)_0%,transparent_60%)] pointer-events-none"></div>
                                        <div className="text-center relative z-30">
                                            <span className="text-sm uppercase tracking-widest font-bold text-brand-soft-teal block mb-2">Unconscious Resistance</span>
                                            <span className="text-sm text-white/60 block max-w-[220px] mx-auto font-light leading-relaxed">Hidden protective intents, emotional conditioning, and systemic structural rules</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. WHY SURFACE LEVEL FAILS (Surface vs Structure) */}
            <Section theme="white">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading level={2} className="mb-6">
                            The Interconnected Nature of Problems
                        </Heading>
                        <Text muted>
                            No behavior, no matter how dysfunctional it appears on the outside, exists in isolation. When change fails, it is rarely due to a lack of willpower—it is because the old pattern was structurally integrated into the person's psychological ecosystem.
                        </Text>
                    </div>

                    <div className="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-brand-soft-neutral/50">
                        {/* Left: Surface */}
                        <div className="bg-brand-warm-white p-10 md:p-12">
                            <div className="flex flex-col h-full">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-sm font-semibold text-brand-structural-navy uppercase tracking-widest mb-8 border border-brand-soft-neutral shadow-sm w-fit">
                                    <Eye className="w-4 h-4 text-brand-soft-teal" /> The Surface
                                </div>
                                <Heading level={3} className="text-2xl mb-4">Visible Symptoms</Heading>
                                <Text className="text-base mb-8" muted>
                                    What we often focus on changing first.
                                </Text>
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-start gap-4 bg-white p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                        <div>
                                            <span className="text-base text-brand-structural-navy font-bold">Procrastination</span>
                                            <p className="text-sm text-brand-secondary-text mt-1">Often treated as just a time-management issue</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 bg-white p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                        <div>
                                            <span className="text-base text-brand-structural-navy font-bold">Anxiety</span>
                                            <p className="text-sm text-brand-secondary-text mt-1">Often treated as just a thinking issue</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 bg-white p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                        <div>
                                            <span className="text-base text-brand-structural-navy font-bold">Relationship Conflict</span>
                                            <p className="text-sm text-brand-secondary-text mt-1">Often treated as just a communication issue</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Right: Structure */}
                        <div className="bg-brand-structural-navy p-10 md:p-12 flex flex-col h-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm font-semibold text-white uppercase tracking-widest mb-8 border border-white/10 w-fit backdrop-blur-sm">
                                    <Network className="w-4 h-4 text-brand-soft-teal" /> 
                                    The Full Architecture
                                </div>
                                <Heading level={3} className="text-2xl mb-4 text-white">
                                    The Interconnected System
                                </Heading>
                                <Text className="text-base text-white/70 mb-10 font-light">
                                    Any symptom is held in place by an invisible network of thoughts, emotions, and protective intentions.
                                </Text>

                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                        <div>
                                            <span className="text-base text-white font-bold block mb-1">Cognitive & Emotional</span>
                                            <span className="text-sm text-white/70">Automatic conditioned responses and conflicting beliefs.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                        <div>
                                            <span className="text-base text-white font-bold block mb-1">Protective Intent (Secondary Gain)</span>
                                            <span className="text-sm text-white/70">The unconscious psychological safety the problem provides.</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                        <div>
                                            <span className="text-base text-white font-bold block mb-1">Identity & Past Conditioning</span>
                                            <span className="text-sm text-white/70">How the pattern is entangled with the deeply rooted sense of self.</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    <div className="max-w-4xl mx-auto mt-16 rounded-3xl overflow-hidden border border-brand-soft-neutral bg-brand-structural-navy aspect-video flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:shadow-md transition-shadow">
                        <div className="w-20 h-20 rounded-full bg-white/10 text-white flex items-center justify-center mb-6 group-hover:bg-brand-soft-teal transition-colors border border-white/20">
                            <Play fill="currentColor" className="w-8 h-8 ml-1" />
                        </div>
                        <Heading level={3} className="text-white text-2xl mb-3">
                            The Architecture of Resistance
                        </Heading>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full text-white/90 text-sm font-bold tracking-widest uppercase mb-4">
                            Concept Doodle Video
                        </div>
                        <Text className="text-white/80 text-base max-w-md">
                            Watch how pulling at surface symptoms without mapping the root structure triggers unconscious resistance.
                        </Text>
                    </div>

                    <div className="max-w-3xl mx-auto mt-16 text-center">
                        <Text size="lg" className="font-medium text-brand-structural-navy mb-4">
                            To create sustainable change, an intervention must address the entire structure—not just isolated parts.
                        </Text>
                        <Text muted>
                            If a technique simply tries to rip away a coping mechanism without resolving the emotional conditioning and fulfilling the protective intent, the unconscious mind will violently resist the change. Meaningful transformation requires resolving all these intersecting layers.
                        </Text>
                    </div>
                </FadeIn>
            </Section>

            {/* 3: THE MULTI-LAYERED SOLUTION BRIDGE */}
            <Section className="py-24 bg-white relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 p-32 pointer-events-none opacity-5">
                     <Layers size={400} className="text-brand-structural-navy rotate-12" />
                </div>
                
                <FadeIn>
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-soft-teal/10 text-brand-structural-navy text-base font-semibold tracking-wider uppercase mb-6 border border-brand-soft-teal/20">
                                <BrainCircuit className="w-4 h-4 text-brand-soft-teal" /> The Solution
                            </div>
                            <Heading level={2} className="text-4xl md:text-5xl mb-6">A Systemic, Multi-Layered Methodology</Heading>
                            <Text size="lg" className="text-brand-structural-navy/80 max-w-2xl mx-auto font-light">
                                Because human problems are multi-layered, the solution must also be multi-layered. No single psychological school holds the key to every layer.
                            </Text>
                        </div>
                        
                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-brand-soft-neutral/50 shadow-sm flex flex-col">
                                <Heading level={4} className="text-xl mb-6 text-brand-structural-navy">The Fragmented Approach</Heading>
                                <ul className="space-y-6 flex-1">
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-secondary-text font-bold mb-1">Primary Focus</div>
                                        <div className="text-base text-brand-structural-navy/80">Surface symptoms and visible behaviors</div>
                                    </li>
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-secondary-text font-bold mb-1">Modality</div>
                                        <div className="text-base text-brand-structural-navy/80">Single-model reliance (e.g., only verbal logic)</div>
                                    </li>
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-secondary-text font-bold mb-1">System Resistance</div>
                                        <div className="text-base text-red-700/80 font-medium">High — Underlying layers defend the symptom</div>
                                    </li>
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-secondary-text font-bold mb-1">Typical Result</div>
                                        <div className="text-base text-brand-structural-navy/80">Temporary relief followed by relapse</div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-brand-structural-navy p-8 rounded-2xl border border-brand-structural-depth shadow-sm flex flex-col text-white">
                                <Heading level={4} className="text-xl mb-6 text-white flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-brand-soft-teal" /> The Systemic Integration
                                </Heading>
                                <ul className="space-y-6 flex-1">
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-soft-teal font-bold mb-1">Primary Focus</div>
                                        <div className="text-base text-white/80">The protective root structure & entire ecosystem</div>
                                    </li>
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-soft-teal font-bold mb-1">Modality</div>
                                        <div className="text-base text-white/80">Cognitive, emotional, somatic & metaphorical integration</div>
                                    </li>
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-soft-teal font-bold mb-1">System Resistance</div>
                                        <div className="text-base text-white font-medium">Low — Protective intent is mapped & engaged</div>
                                    </li>
                                    <li>
                                        <div className="text-sm uppercase tracking-widest text-brand-soft-teal font-bold mb-1">Typical Result</div>
                                        <div className="text-base text-white">Sustainable structural resolution</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </Section>

            {/* 4 & 5. THE ICHARS VIEW & CORE LAYERS (Interactive) */}
            <Section theme="neutral" className="py-24 w-full overflow-hidden">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Heading level={2} className="mb-6">The Eight Core Layers</Heading>
                        <Text muted>
                            At ICHARS, problems are not viewed as isolated symptoms. Practitioners are encouraged to explore what is visible, what is repeated, what is being protected, and where meaningful intervention is actually needed.
                        </Text>
                        
                        <Text muted className="mt-4 text-base font-medium">Click on a layer below to explore its impact.</Text>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-12 gap-8">
                            {/* Layers List */}
                            <div className="md:col-span-5 space-y-2">
                                {coreLayers.map((layer) => (
                                    <button
                                        key={layer.id}
                                        onClick={() => setActiveLayerId(layer.id)}
                                        className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                                            activeLayerId === layer.id 
                                                ? 'bg-white border-brand-soft-teal shadow-md text-brand-structural-navy' 
                                                : 'bg-white/50 border-brand-soft-neutral/50 hover:bg-white hover:border-brand-soft-neutral text-brand-secondary-text'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`shrink-0 ${activeLayerId === layer.id ? 'text-brand-soft-teal' : 'text-brand-secondary-text/50'}`}>
                                                {layer.icon}
                                            </div>
                                            <span className="text-base font-medium pr-4">{layer.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                            
                            {/* Layer Details Panel */}
                            <div className="md:col-span-7">
                                {activeLayerId && (
                                    <div key={activeLayerId} className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-brand-soft-neutral h-full md:sticky md:top-32 animate-in fade-in slide-in-from-right-4 duration-300">
                                        <div className="mb-6 inline-flex p-3 rounded-xl bg-brand-soft-neutral">
                                            {coreLayers.find(l => l.id === activeLayerId)?.icon}
                                        </div>
                                        <Heading level={3} className="text-2xl mb-4 text-brand-structural-navy">
                                            {coreLayers.find(l => l.id === activeLayerId)?.title.replace(/^\d+\.\s*/, '')}
                                        </Heading>
                                        <Text className="mb-8" muted>
                                            {coreLayers.find(l => l.id === activeLayerId)?.summary}
                                        </Text>

                                        <div className="grid sm:grid-cols-2 gap-8">
                                            <div>
                                                <div className="text-sm font-bold text-brand-structural-navy uppercase tracking-wider mb-3">May Present As:</div>
                                                <ul className="space-y-3">
                                                    {coreLayers.find(l => l.id === activeLayerId)?.examples.map((ex, i) => (
                                                        <li key={i} className="text-base text-brand-secondary-text bg-brand-warm-white px-3 py-2 rounded-md border border-brand-soft-neutral/50">{ex}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-brand-soft-teal uppercase tracking-wider mb-3">But May Actually Involve:</div>
                                                <ul className="space-y-3">
                                                    {coreLayers.find(l => l.id === activeLayerId)?.underlying.map((und, i) => (
                                                        <li key={i} className="text-base text-brand-structural-navy flex items-start gap-2">
                                                            <ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" />
                                                            <span>{und}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-8 border-t border-brand-soft-neutral/50 animate-in slide-in-from-bottom-4 fade-in duration-500">
                                            <div className="text-sm font-bold text-brand-structural-navy uppercase tracking-wider mb-4 flex items-center gap-2">
                                                <Target className="w-4 h-4 text-brand-soft-teal" /> Systemic Intervention Goal
                                            </div>
                                            <div className="bg-brand-structural-navy text-white rounded-xl p-6 relative overflow-hidden shadow-md">
                                                <Text className="text-white text-base m-0 relative z-10 font-medium">
                                                    {coreLayers.find(l => l.id === activeLayerId)?.intervention}
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* CTA SECTION - BRIDGE TO STRUCTURED THINKING */}
            <Section theme="neutral" className="border-t border-brand-soft-neutral/50 pb-32">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                        <div className="w-16 h-16 bg-brand-structural-navy text-white rounded-2xl shadow-sm flex items-center justify-center mb-8">
                            <Target className="w-8 h-8 text-brand-soft-teal" />
                        </div>
                        
                        <Heading level={2} className="mb-6 text-4xl">From Observation to Navigation</Heading>
                        
                        <Text size="lg" className="mb-8 max-w-2xl text-brand-structural-navy/80">
                            Recognizing these layers is only the first step. The true mastery lies in navigating them systematically—without relying on guesswork or trial-and-error.
                        </Text>

                        <div className="bg-white border border-brand-soft-neutral/50 p-6 md:p-8 rounded-2xl text-left max-w-3xl w-full mb-10 shadow-sm relative">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-soft-teal rounded-l-2xl"></div>
                            <Text className="font-semibold text-brand-structural-navy mb-2">The Practitioner's Dilemma</Text>
                            <Text muted className="mb-0 text-base md:text-base">
                                Understanding that human problems are complex doesn't solve the core practical issue: <strong className="text-brand-structural-navy">Where do you start, and what do you do next?</strong> Without a reliable framework, practitioners often fall back into unstructured conversational therapy or randomly deploying techniques.
                            </Text>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                            <Button href="#structured-thinking" className="w-full sm:w-auto shadow-md px-8 py-4 text-base flex items-center justify-center gap-2">
                                Discover Structured Therapeutic Thinking <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
};
