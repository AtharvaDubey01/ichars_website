import { useState } from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { 
    Heart, 
    ArrowRight, 
    ArrowDown,
    Quote,
    PlayCircle,
    UserCircle,
    Activity,
    Wind,
    Compass
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const journeys = [
    {
        id: 'journey-1',
        title: '"I understood the concepts… but still froze during sessions"',
        snapshot: 'Psychology Student • Early Practitioner',
        icon: <UserCircle className="w-8 h-8 text-brand-soft-teal" />,
        before: [
            '"I constantly felt like I should know more than I did."',
            'I understood concepts academically. But during real conversations: my mind would go blank, I would overthink every response, I worried about saying the wrong thing, and I depended heavily on memorized structures.',
            'Sometimes I left sessions feeling frustrated, embarrassed, and emotionally exhausted.'
        ],
        internal: 'The hardest part was not lack of knowledge. It was quietly wondering: "Why does this still feel so difficult?" I kept comparing myself to practitioners who seemed calmer, clearer, and naturally confident. Meanwhile, I still felt uncertain almost constantly.',
        turningPoint: 'What changed first was not confidence. It was relief. I slowly realized I did not need to have perfect answers immediately. Instead of trying to "perform correctly," I started becoming more observant, more curious, less reactive, and more reflective after sessions.',
        gradual: 'Over time conversations stopped feeling as intimidating. I became less afraid of uncertainty. Sessions started feeling more understandable, and I trusted myself more gradually. The growth was subtle at first, but it became real.',
        now: [
            '"I still continue learning. But I no longer feel emotionally lost inside sessions."',
            'Now I feel calmer, more grounded, more curious, and less dependent on sounding perfect.',
            'The biggest change was not becoming someone else. It was slowly becoming more comfortable becoming a practitioner.'
        ],
        visual: (
            <div className="flex flex-col gap-3 text-base font-medium text-brand-secondary-text items-center mt-6 p-6 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral/50">
                <div className="text-brand-structural-navy font-bold">Fear of "getting it wrong"</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div>Observation</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div>Reflection</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div>Less self-pressure</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div className="text-brand-deep-teal font-bold">Growing steadiness</div>
            </div>
        )
    },
    {
        id: 'journey-2',
        title: '"Some sessions felt amazing… others made me doubt myself completely"',
        snapshot: 'Coach • Mid-Level Practitioner',
        icon: <Activity className="w-8 h-8 text-brand-soft-teal" />,
        before: [
            '"One good session made me feel confident. One difficult session made me question everything."',
            'The inconsistency was emotionally exhausting. Some conversations felt transformational, connected, and powerful. Others felt unclear, emotionally flat, and directionless.',
            'And I never fully understood why.'
        ],
        internal: 'I became emotionally dependent on outcomes. Good session? I felt capable. Difficult session? Self-doubt returned immediately. That emotional rollercoaster became exhausting over time.',
        turningPoint: 'The biggest shift came when I stopped expecting every session to feel perfect. Instead, I started reflecting more deeply, becoming less reactive, and understanding that difficult sessions were part of development.',
        gradual: 'Slowly I became emotionally steadier. Difficult sessions felt less threatening. I trusted myself more consistently, and I stopped panicking when conversations became uncertain.',
        now: [
            '"Sessions no longer determine my entire sense of confidence."',
            'Now I feel more emotionally grounded, more flexible during conversations, and less dependent on immediate outcomes.',
            'The biggest shift was discovering emotional steadiness inside uncertainty.'
        ],
        visual: (
            <div className="flex flex-col gap-6 items-center justify-center mt-6 p-6 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral/50 h-full">
                <div className="text-center">
                    <div className="text-sm font-bold text-brand-structural-navy/50 uppercase tracking-widest mb-2">Past</div>
                    <div className="text-base font-bold text-brand-structural-navy mb-1">External Validation</div>
                    <div className="text-brand-soft-teal">↑ ↓ ↑ ↓ ↑ ↓</div>
                </div>
                <ArrowDown className="w-4 h-4 text-brand-secondary-text/30" />
                <div className="text-center">
                    <div className="text-sm font-bold text-brand-structural-navy/50 uppercase tracking-widest mb-2">Present</div>
                    <div className="text-base font-bold text-brand-deep-teal mb-1">Internal Grounding</div>
                    <div className="text-brand-soft-teal bg-brand-soft-teal h-0.5 w-16 mx-auto rounded-full"></div>
                </div>
            </div>
        )
    },
    {
        id: 'journey-3',
        title: '"I could help people… but something still felt emotionally incomplete"',
        snapshot: 'Therapist / Experienced Coach',
        icon: <Wind className="w-8 h-8 text-brand-soft-teal" />,
        before: [
            '"I could guide conversations well. But I knew there was more depth available."',
            'Sessions often stayed intellectual, insight-focused, and emotionally contained. Clients understood themselves.',
            'But something deeper often remained untouched.'
        ],
        internal: 'I started sensing unresolved pain, emotional avoidance, identity-level struggle, and unspoken resistance. But I did not yet feel fully confident navigating those spaces. That created a quiet emotional frustration.',
        turningPoint: 'What changed was not learning to "go deeper." It was becoming more emotionally present. I stopped trying to force transformation, sound insightful, or create dramatic breakthroughs. And I started listening differently, slowing down, and trusting deeper emotional processes more naturally.',
        gradual: 'Over time conversations became more emotionally meaningful. Depth happened more naturally. I felt less pressure to control sessions, and therapeutic work became calmer and more connected.',
        now: [
            '"I no longer feel like I need to prove myself during sessions."',
            'Now I feel more emotionally steady, more present, and more connected to the work itself.',
            'The biggest shift was feeling more like myself while practicing.'
        ],
        visual: (
            <div className="flex flex-col gap-3 text-base font-medium text-brand-secondary-text items-center mt-6 p-6 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral/50">
                <div className="text-brand-structural-navy font-bold">Performing</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div>Listening</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div>Trusting</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div>Presence</div>
                <ArrowDown className="w-4 h-4 text-brand-soft-teal" />
                <div className="text-brand-deep-teal font-bold">Depth</div>
            </div>
        )
    }
];

export const PractitionerJourneys = () => {
    const [activeJourney, setActiveJourney] = useState(0);

    return (
        <div className="bg-brand-warm-white text-brand-primary-text">
            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-warm-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
                    <FadeIn>
                        <Heading level={1} className="text-brand-structural-navy mb-6 max-w-3xl mx-auto">Most practitioner journeys begin with uncertainty — not confidence</Heading>
                        <Text size="lg" className="text-brand-secondary-text max-w-2xl mx-auto font-light leading-relaxed">
                            Many practitioners quietly believe they should already feel more confident, sessions should feel easier by now, or they should always know what to do. But real practitioner development rarely unfolds that way.
                        </Text>
                    </FadeIn>
                </div>
                
                <div className="max-w-5xl mx-auto px-6">
                    <FadeIn delay={0.1} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-soft-neutral/50 w-full mb-16">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <Text className="text-sm font-bold text-brand-structural-navy/50 uppercase tracking-widest mb-6">The Reality</Text>
                                <Text className="font-medium text-brand-structural-navy mb-6">For many people, the journey begins with experiences like:</Text>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3 text-brand-secondary-text text-base"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" /> second-guessing themselves during sessions</li>
                                    <li className="flex items-start gap-3 text-brand-secondary-text text-base"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" /> feeling inconsistent</li>
                                    <li className="flex items-start gap-3 text-brand-secondary-text text-base"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" /> struggling to go deeper</li>
                                    <li className="flex items-start gap-3 text-brand-secondary-text text-base"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" /> overthinking interventions</li>
                                    <li className="flex items-start gap-3 text-brand-secondary-text text-base"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" /> feeling emotionally overwhelmed by complexity</li>
                                </ul>
                                <Text className="font-medium text-brand-structural-navy/90 p-4 bg-brand-soft-teal/5 rounded-xl border border-brand-soft-teal/10">And slowly, over time: something begins changing. Not all at once. But gradually.</Text>
                            </div>
                            
                            <div className="bg-brand-structural-navy p-8 md:p-10 rounded-2xl flex flex-col items-center text-center relative overflow-hidden shadow-sm">
                                <Compass className="w-8 h-8 text-brand-soft-teal mb-6 relative z-10" />
                                <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-6 relative z-10">The Emotional Evolution</div>
                                <div className="flex flex-col gap-3 text-base font-medium relative z-10 w-full max-w-[200px]">
                                    <span className="text-white/50 bg-white/5 py-2 rounded-lg border border-white/5">Uncertainty</span>
                                    <ArrowDown className="w-3 h-3 text-brand-soft-teal/50 mx-auto" />
                                    <span className="text-white/60 bg-white/5 py-2 rounded-lg border border-white/5">Self-Doubt</span>
                                    <ArrowDown className="w-3 h-3 text-brand-soft-teal/50 mx-auto" />
                                    <span className="text-white/80 bg-white/5 py-2 rounded-lg border border-white/5">Curiosity & Reflection</span>
                                    <ArrowDown className="w-3 h-3 text-brand-soft-teal/70 mx-auto" />
                                    <span className="text-brand-soft-teal font-bold px-4 py-3 bg-brand-soft-teal/10 rounded-lg border border-brand-soft-teal/20 shadow-sm mt-1 uppercase tracking-widest text-xs">Practitioner Identity</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    
                    <FadeIn delay={0.2} className="max-w-4xl mx-auto relative w-full aspect-video rounded-3xl overflow-hidden shadow-sm group bg-brand-structural-navy">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" alt="Reflective Practitioner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white transition-colors duration-500 bg-brand-structural-navy/30 group-hover:bg-brand-structural-navy/10 pointer-events-none">
                            <div className="w-20 h-20 rounded-full bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20 shadow-lg pointer-events-auto cursor-pointer hover:bg-brand-soft-teal transition-colors">
                                <PlayCircle fill="currentColor" className="w-10 h-10 ml-1" />
                            </div>
                            <Text className="font-medium text-lg md:text-xl text-center max-w-xl text-white drop-shadow-md">"What practitioner development actually feels like emotionally"</Text>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/20 rounded-full text-white/90 text-sm font-bold tracking-widest uppercase mt-4 border border-white/10">
                                Founder Reflection
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. PRACTITIONER JOURNEYS */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-4">Different practitioners struggle differently.</Heading>
                    <Heading level={3} className="text-xl md:text-2xl text-brand-structural-navy font-medium">But many emotional journeys feel surprisingly similar.</Heading>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Journey Tabs */}
                    <div className="flex flex-col sm:flex-row gap-2 mb-12" role="tablist">
                        {journeys.map((j, idx) => (
                            <button
                                key={j.id}
                                role="tab"
                                aria-selected={activeJourney === idx}
                                onClick={() => setActiveJourney(idx)}
                                className={cn(
                                    "flex-1 p-4 rounded-xl text-left border flex flex-col items-start transition-all duration-300",
                                    activeJourney === idx 
                                        ? "bg-white border-brand-soft-teal shadow-md"
                                        : "bg-brand-warm-white border-brand-soft-neutral/50 hover:bg-white hover:border-brand-soft-teal/30"
                                )}
                            >
                                <span className={cn("text-xs font-bold uppercase tracking-widest mb-2 block", activeJourney === idx ? "text-brand-soft-teal" : "text-brand-secondary-text")}>
                                    {j.snapshot.split(' • ')[0]}
                                </span>
                                <span className={cn("text-base font-medium line-clamp-2", activeJourney === idx ? "text-brand-structural-navy" : "text-brand-secondary-text")}>
                                    {j.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Active Journey Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeJourney}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-brand-soft-neutral/50"
                        >
                            <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
                                <div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral/50">
                                            {journeys[activeJourney].icon}
                                        </div>
                                        <div>
                                            <Heading level={3} className="text-xl md:text-2xl mb-1">{journeys[activeJourney].title}</Heading>
                                            <div className="text-sm font-bold uppercase tracking-widest text-brand-soft-teal shadow-brand-soft-teal">{journeys[activeJourney].snapshot}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-12">
                                        {/* A. BEFORE */}
                                        <div>
                                            <div className="text-xs font-bold text-brand-structural-navy/50 uppercase tracking-widest mb-3">Before</div>
                                            {journeys[activeJourney].before.map((p, i) => (
                                                <Text key={i} className={cn("mb-3", i === 0 ? "font-medium text-brand-structural-navy text-lg leading-snug" : "text-base text-brand-secondary-text shadow-sm")}>{p}</Text>
                                            ))}
                                        </div>

                                        {/* B. INTERNAL EXPERIENCE */}
                                        <div className="pl-6 border-l-2 border-brand-soft-neutral">
                                            <div className="text-xs font-bold text-brand-structural-navy/50 uppercase tracking-widest mb-3">Internal Experience</div>
                                            <Text className="text-base text-brand-secondary-text m-0">{journeys[activeJourney].internal}</Text>
                                        </div>

                                        {/* C. TURNING POINT */}
                                        <div>
                                            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-3">Turning Point</div>
                                            <Text className="text-base text-brand-primary-text font-medium m-0">{journeys[activeJourney].turningPoint}</Text>
                                        </div>

                                        {/* D. GRADUAL CHANGE */}
                                        <div className="pl-6 border-l-2 border-brand-soft-teal/30">
                                            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-3">Gradual Change</div>
                                            <Text className="text-base text-brand-secondary-text m-0">{journeys[activeJourney].gradual}</Text>
                                        </div>

                                        {/* E. NOW */}
                                        <div className="bg-brand-soft-teal/5 p-6 md:p-8 rounded-2xl border border-brand-soft-teal/10">
                                            <div className="text-xs font-bold text-brand-deep-teal uppercase tracking-widest mb-4">Now</div>
                                            {journeys[activeJourney].now.map((p, i) => (
                                                <Text key={i} className={cn("mb-3", i === 0 ? "font-serif italic text-lg text-brand-deep-teal leading-snug" : "text-base text-brand-structural-navy")}>{p}</Text>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="md:sticky md:top-32 mt-12 md:mt-0">
                                    <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest text-center mb-4">Evolution Pattern</div>
                                    {journeys[activeJourney].visual}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Section>

            {/* 3. COMMON EMOTIONAL TURNING POINTS */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">
                <FadeIn>
                    <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                        <div>
                            <Heading level={2} className="text-brand-deep-teal mb-6">Even though the journeys differ, many practitioners experience similar emotional shifts</Heading>
                            <Text className="text-brand-secondary-text mb-12">Over time, many practitioners gradually move from reacting to internal pressure towards an intentional, grounded state.</Text>

                            <div className="bg-brand-warm-white rounded-3xl p-8 md:p-10 border border-brand-soft-neutral/50 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                    <Heart className="w-32 h-32 text-brand-soft-teal" />
                                </div>
                                <div className="relative z-10 flex flex-col gap-6">
                                    <div className="flex gap-4 items-center border-b border-brand-soft-neutral/50 pb-4">
                                        <div className="w-10 text-right"><span className="text-sm font-bold text-brand-structural-navy/50 uppercase tracking-widest">From</span></div>
                                        <div className="flex-1 text-base text-brand-secondary-text">Fear of getting it wrong <span className="opacity-50">/</span> Constant self-doubt</div>
                                    </div>
                                    <div className="flex gap-4 items-center border-b border-brand-soft-neutral/50 pb-4">
                                        <div className="w-10 text-right"><span className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest">To</span></div>
                                        <div className="flex-1 text-base font-medium text-brand-structural-navy">Greater emotional steadiness and trust</div>
                                    </div>
                                    
                                    <div className="flex gap-4 items-center border-b border-brand-soft-neutral/50 pb-4 mt-2">
                                        <div className="w-10 text-right"><span className="text-sm font-bold text-brand-structural-navy/50 uppercase tracking-widest">From</span></div>
                                        <div className="flex-1 text-base text-brand-secondary-text">Overthinking every session <span className="opacity-50">/</span> Trying to sound professional</div>
                                    </div>
                                    <div className="flex gap-4 items-center border-b border-brand-soft-neutral/50 pb-4">
                                        <div className="w-10 text-right"><span className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest">To</span></div>
                                        <div className="flex-1 text-base font-medium text-brand-structural-navy">Feeling more authentic and present</div>
                                    </div>

                                    <div className="flex gap-4 items-center border-b border-brand-soft-neutral/50 pb-4 mt-2">
                                        <div className="w-10 text-right"><span className="text-sm font-bold text-brand-structural-navy/50 uppercase tracking-widest">From</span></div>
                                        <div className="flex-1 text-base text-brand-secondary-text">Depending on techniques emotionally <span className="opacity-50">/</span> Overwhelmed</div>
                                    </div>
                                    <div className="flex gap-4 items-center pb-2">
                                        <div className="w-10 text-right"><span className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest">To</span></div>
                                        <div className="flex-1 text-base font-medium text-brand-structural-navy">Feeling calmer inside uncertainty</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-brand-structural-navy p-10 md:p-16 rounded-3xl aspect-square md:aspect-auto md:h-full flex flex-col items-center justify-center text-center border border-brand-structural-navy relative overflow-hidden shadow-sm">
                            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,#65BFA9_0%,transparent_60%)]" />
                            
                            <Heart className="w-12 h-12 text-brand-soft-teal mb-8 relative z-10" />
                            <Text className="text-white text-xl md:text-2xl font-light relative z-10 font-serif leading-relaxed px-4">
                                The goal is not becoming perfect.<br/><br/><span className="font-sans font-medium text-lg text-white/90">It is becoming more grounded, intentional, and emotionally steady over time.</span>
                            </Text>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 4. WHAT ACTUALLY CHANGES OVER TIME */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Heading level={2} className="text-brand-deep-teal mb-6">The earliest changes are often subtle</Heading>
                        <Text className="text-lg text-brand-secondary-text">Many practitioners expect development to feel dramatic immediately. But often, the earliest changes are quieter.</Text>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                        <div className="order-2 md:order-1 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-soft-neutral/50">
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 border-b border-brand-soft-neutral/50 pb-4">
                                     <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" />
                                     <Text className="text-base m-0 text-brand-structural-navy">Sessions feel slightly less overwhelming</Text>
                                </li>
                                <li className="flex items-center gap-3 border-b border-brand-soft-neutral/50 pb-4">
                                     <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" />
                                     <Text className="text-base m-0 text-brand-structural-navy">Uncertainty becomes easier to tolerate</Text>
                                </li>
                                <li className="flex items-center gap-3 border-b border-brand-soft-neutral/50 pb-4">
                                     <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" />
                                     <Text className="text-base m-0 text-brand-structural-navy">Conversations feel easier to follow</Text>
                                </li>
                                <li className="flex items-center gap-3 border-b border-brand-soft-neutral/50 pb-4">
                                     <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" />
                                     <Text className="text-base m-0 text-brand-structural-navy">Emotional reactions become less intense</Text>
                                </li>
                                <li className="flex items-center gap-3 pb-2">
                                     <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" />
                                     <Text className="text-base m-0 text-brand-structural-navy">Curiosity starts replacing panic</Text>
                                </li>
                            </ul>
                            <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50">
                                <Text className="font-medium text-brand-structural-navy mb-2">And gradually: confidence stops feeling forced.</Text>
                                <Text className="text-base text-brand-secondary-text mb-0">Because practitioner identity usually develops progressively: through experience, reflection, and repeated learning over time.</Text>
                            </div>
                        </div>

                        <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-auto md:h-full rounded-3xl overflow-hidden shadow-sm group bg-brand-structural-depth border border-brand-structural-navy/20 flex items-center justify-center">
                             <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" alt="Practitioner Reflection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity grayscale" />
                             <div className="absolute inset-0 bg-brand-structural-navy/40 group-hover:bg-brand-structural-navy/20 transition-colors duration-500 pointer-events-none"></div>
                             
                             <div className="relative z-10 flex flex-col items-center p-8 text-center bg-brand-structural-navy/30 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl pointer-events-auto cursor-pointer hover:bg-brand-structural-navy/50 transition-colors mx-8 w-[calc(100%-4rem)] max-w-[280px]">
                                 <PlayCircle className="w-12 h-12 text-brand-soft-teal mb-4" />
                                 <Text className="font-medium text-base text-white drop-shadow-md">Practitioner Reflection Clips</Text>
                             </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* 5. PRACTITIONER VOICES */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-4">What practitioners often say</Heading>
                    <Text className="text-brand-secondary-text">After beginning to grow more intentionally.</Text>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        "I stopped feeling like every difficult session meant I was failing.",
                        "The biggest change was becoming less afraid of uncertainty.",
                        "I became calmer during sessions instead of trying to sound perfect.",
                        "I started trusting myself more gradually.",
                        "For the first time, I felt like I was developing into a practitioner — not just learning information.",
                        "I realized confidence develops much more slowly and naturally than I expected."
                    ].map((quote, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="bg-brand-warm-white p-8 rounded-3xl border border-brand-soft-neutral shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-full flex flex-col relative overflow-hidden group hover:border-brand-soft-teal/30 transition-colors">
                                <Quote className="w-8 h-8 text-brand-soft-teal/20 mb-6 group-hover:text-brand-soft-teal/40 transition-colors" />
                                <Text className="font-medium text-brand-structural-navy leading-relaxed flex-1 m-0">"{quote}"</Text>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* 6. NEXT STEP */}
            <Section theme="dark" className="text-center relative overflow-hidden py-32">
                 <div className="max-w-3xl mx-auto relative z-10">
                     <FadeIn>
                         <div className="w-16 h-16 mx-auto mb-8 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                             <Compass className="w-8 h-8 text-brand-soft-teal" />
                         </div>
                         <Heading level={2} className="text-white mb-8">You do not need to become fully confident before continuing your development</Heading>
                         <Text className="text-lg text-white/70 mb-10 font-light leading-relaxed">
                             Most practitioners begin with uncertainty, curiosity, inconsistency, and emotional self-doubt. And gradually, through reflection, learning, experience, and continued development, things begin changing. Not instantly. But meaningfully.
                         </Text>
                         <Text className="text-xl font-medium text-brand-soft-teal mb-12 uppercase tracking-widest text-xs">
                             The important thing is not where you begin. It is whether you continue developing intentionally.
                         </Text>
                         
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                             <Button href="#start" className="w-full sm:w-auto px-8">Find Your Starting Point</Button>
                             <Button href="#programs" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-8">Explore Programs Ecosystem</Button>
                         </div>
                     </FadeIn>
                 </div>
            </Section>

        </div>
    );
};
