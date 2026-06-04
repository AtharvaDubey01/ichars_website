import { useState } from 'react';
import { Section, Heading, Text, Button, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { VideoTestimonialGrid } from '../components/VideoTestimonialGrid';
import { 
    ArrowRight, 
    ArrowDown,
    Layers,
    Brain,
    Target,
    Activity,
    Compass,
    CheckCircle2,
    BookOpen,
    Users,
    Network,
    Quote,
    Waves,
    PlayCircle
} from 'lucide-react';
import { cn } from '../lib/utils';

export const CHC = () => {
    const [approachTab, setApproachTab] = useState(0);
    const [activeTab, setActiveTab] = useState(0);
    const [caseStep, setCaseStep] = useState(0);

    const focusAreas = [
        { 
            title: "Emotional Conditioning", 
            description: "How repeated emotional experiences shape behaviors and reactions.", 
            details: "Understanding the nervous system's role in repeating old patterns, and how to create new emotional associations rather than just pushing for behavioral compliance.",
            icon: <Waves className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2020&auto=format&fit=crop"
        },
        { 
            title: "Conscious Alignment", 
            description: "Understanding why conscious goals and unconscious patterns may conflict.",
            details: "When a client wants to change but 'can't', it is rarely a lack of motivation. It is usually a conflict between conscious desires and unconscious safety mechanisms.",
            icon: <Layers className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            title: "Pattern Recognition", 
            description: "Recognizing maintaining structures beneath visible behaviors.",
            details: "Developing the practitioner's eye to see the 'how' of the problem — not just the story of the problem. What happens right before the behavior? How is it structured?",
            icon: <Brain className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop"
        },
        { 
            title: "Identity & Change", 
            description: "Understanding how identity influences transformation.",
            details: "Changes that conflict with a client's deep sense of 'who I am' will face immense resistance. Transformation must eventually integrate at the identity level to be sustainable.",
            icon: <Target className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&w=2070&auto=format&fit=crop"
        },
        { 
            title: "Structured Conversations", 
            description: "Developing more intentional and layered coaching conversations.",
            details: "Moving away from reactive 'what should I ask next' thinking, toward a structured understanding of where the conversation is going and what level of change you are working with.",
            icon: <Compass className="w-5 h-5" />,
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text relative">
            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden text-center">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,#4A6B82_0%,transparent_70%)]" />
                    <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
                        <FadeIn>
                            <div className="text-xs font-bold tracking-widest text-brand-structural-navy uppercase mb-6 bg-brand-soft-neutral/10 px-3 py-1.5 rounded-full inline-block">Cognitive Hypnotic Coaching™ (CHC)</div>
                            <Heading level={1} className="text-brand-structural-navy mb-6 text-balance mx-auto max-w-3xl">
                                When insight alone does not<br className="hidden md:block"/>create lasting transformation.
                            </Heading>
                            <Text size="lg" className="text-brand-secondary-text mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                                Many coaches eventually notice something important: Clients may understand their problems intellectually, genuinely desire change, and feel deeply motivated after sessions. And yet, the same emotional and behavioral patterns continue to repeat.
                            </Text>
                        </FadeIn>

                        {/* Integrated Video Component */}
                        <FadeIn delay={0.2} className="w-full max-w-3xl mx-auto mb-16 w-full">
                            <div className="group cursor-pointer">
                                <div className="relative aspect-[16/9] bg-brand-warm-white rounded-2xl border border-brand-soft-neutral/50 shadow-sm overflow-hidden flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-105">
                                        <div className="w-16 h-16 rounded-full bg-brand-structural-navy text-white shadow-md flex items-center justify-center group-hover:bg-brand-soft-teal transition-colors duration-300">
                                            <PlayCircle className="w-8 h-8 ml-1" />
                                        </div>
                                        <span className="text-base font-bold text-brand-structural-navy tracking-widest uppercase">Watch Overview</span>
                                    </div>
                                    <div className="absolute bottom-4 right-6 text-xs font-mono text-brand-secondary-text/80 uppercase tracking-widest">
                                        04:15
                                    </div>
                                    <div className="absolute bottom-4 left-6 text-xs font-mono text-brand-secondary-text/80 uppercase tracking-widest hidden sm:block">
                                        CHC Program Brief
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Surface vs Deeper Visual */}
                        <FadeIn delay={0.3} className="w-full max-w-4xl mx-auto relative mb-8">
                            <div className="bg-white p-2 md:p-4 rounded-3xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-6 md:p-8 rounded-2xl bg-brand-warm-white relative flex flex-col justify-center">
                                        <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest mb-6">1. The Visible Layer</div>
                                        <Heading level={3} className="text-xl text-brand-structural-navy mb-4">What you see on the surface</Heading>
                                        <ul className="space-y-4 mb-8">
                                            {[
                                                "Conscious Goals",
                                                "Daily Habits",
                                                "Visible Behaviors",
                                                "Spikes of Motivation"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-base font-medium text-brand-structural-navy/80">
                                                    <div className="w-1.5 h-1.5 bg-brand-soft-neutral rounded-full" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="p-6 md:p-8 rounded-2xl bg-brand-structural-navy relative overflow-hidden flex flex-col justify-center group cursor-pointer transition-all duration-500 hover:bg-[#1a2c3a]">
                                        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40" />
                                        
                                        <div className="relative z-10">
                                            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6 flex items-center gap-2">
                                                2. The Deeper Layer
                                            </div>
                                            <Heading level={3} className="text-xl text-white mb-4">What maintains the pattern</Heading>
                                            <ul className="space-y-4">
                                                {[
                                                    "Emotional Conditioning",
                                                    "Identity-Level Conflicts",
                                                    "Protective Strategies",
                                                    "Unconscious Associations"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-base font-medium text-white/80">
                                                        <div className="w-1.5 h-1.5 bg-brand-soft-teal rounded-full" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </Section>

            {/* 2. WHY SOME PATTERNS CONTINUE (Bridged) */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                            <Heading level={2} className="text-brand-deep-teal mb-6">Why Insight is Not Enough</Heading>
                            <Heading level={3} className="text-xl md:text-2xl text-brand-structural-navy font-medium max-w-3xl mx-auto">Understanding something consciously does not always transform it emotionally.</Heading>
                        </div>

                        <div className="max-w-4xl mx-auto text-center">
                             <Text className="text-brand-structural-navy font-medium text-lg mb-8 leading-relaxed">
                                  Clients often know exactly what needs to change, yet find themselves repeating the same behaviors. In CHC, we recognize that this isn't a lack of motivation—it's a sign of deeper structural maintaining factors like unconscious protection, emotional conditioning, and identity conflicts. Transformational coaching moves from simply "pushing for change" to intentionally understanding how patterns are structured.
                             </Text>
                             
                             <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                                 <Button variant="outline" href="#layered-patterns" className="bg-transparent border-brand-structural-navy text-brand-structural-navy hover:bg-brand-structural-navy hover:text-white">
                                     Explore Layered Human Patterns
                                 </Button>
                                 <Button variant="outline" href="#structured-thinking" className="bg-transparent border-brand-structural-navy text-brand-structural-navy hover:bg-brand-structural-navy hover:text-white">
                                     Explore Structured Coaching Frameworks
                                 </Button>
                             </div>
                        </div>
                    
            </Section>

            {/* 3. THE CHC APPROACH */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Heading level={2} className="text-brand-deep-teal mb-6">The CHC Methodology</Heading>
                            <Heading level={3} className="text-xl md:text-2xl text-brand-structural-navy font-medium max-w-3xl mx-auto">A structured approach to transformational coaching</Heading>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden border border-brand-soft-neutral/50 shadow-sm">
                            <div className="flex flex-col md:flex-row border-b border-brand-soft-neutral/30 bg-brand-warm-white/50">
                                <button 
                                    onClick={() => setApproachTab(0)}
                                    className={cn("flex-1 py-4 px-6 text-base font-bold uppercase tracking-widest text-center border-b-2 transition-colors", approachTab === 0 ? "border-brand-structural-navy text-brand-structural-navy bg-white" : "border-transparent text-brand-secondary-text hover:text-brand-structural-navy hover:bg-white/50")}
                                >
                                    Integrated Modalities
                                </button>
                                <button 
                                    onClick={() => setApproachTab(1)}
                                    className={cn("flex-1 py-4 px-6 text-base font-bold uppercase tracking-widest text-center border-b-2 transition-colors md:border-l md:border-t-0 border-t border-brand-soft-neutral/30", approachTab === 1 ? "border-brand-structural-navy text-brand-structural-navy bg-white" : "border-transparent text-brand-secondary-text hover:text-brand-structural-navy hover:bg-white/50")}
                                >
                                    SOFT SEA® Framework
                                </button>
                                <button 
                                    onClick={() => setApproachTab(2)}
                                    className={cn("flex-1 py-4 px-6 text-base font-bold uppercase tracking-widest text-center border-b-2 transition-colors md:border-l md:border-t-0 border-t border-brand-soft-neutral/30", approachTab === 2 ? "border-brand-structural-navy text-brand-structural-navy bg-white" : "border-transparent text-brand-secondary-text hover:text-brand-structural-navy hover:bg-white/50")}
                                >
                                    Core Focus Areas
                                </button>
                            </div>
                            
                            <div className="p-8 md:p-12 relative min-h-[400px]">
                                {approachTab === 0 && (
                                    <div className="max-w-3xl mx-auto align-middle flex flex-col justify-center h-full space-y-8 fade-in">
                                        <div className="text-center space-y-4">
                                            <Heading level={3} className="text-2xl text-brand-structural-navy">Beyond Isolated Modalities</Heading>
                                            <Text className="text-brand-secondary-text text-lg">CHC integrates multiple proven therapeutic models into a single, cohesive framework.</Text>
                                        </div>
                                        <div className="bg-brand-warm-white p-8 rounded-2xl border border-brand-soft-neutral/30 text-center">
                                            <p className="text-brand-structural-navy font-medium italic">"Not as isolated modalities, but as interconnected components within a structured transformational approach."</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {["Cognitive approaches", "Behavioral understanding", "Hypnosis", "NLP", "Transformational coaching", "Emotional conditioning"].map((tag, i) => (
                                                <div key={i} className="bg-white border border-brand-soft-neutral px-4 py-2 rounded-full text-base font-medium text-brand-secondary-text shadow-sm">
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {approachTab === 1 && (
                                    <div className="max-w-3xl mx-auto flex flex-col justify-center h-full space-y-8 fade-in">
                                        <div className="text-center space-y-4">
                                            <Heading level={3} className="text-2xl text-brand-structural-navy">Structured Clinical Navigation</Heading>
                                            <Text className="text-brand-secondary-text text-lg">CHC introduces practitioners to frameworks such as SOFT SEA® to support structured transformational observation.</Text>
                                        </div>
                                        <div className="bg-brand-structural-navy p-8 rounded-2xl border-l-4 border-brand-soft-teal text-white shadow-md">
                                            <Text size="sm" className="text-white/90 leading-relaxed mb-0">The SOFT SEA® framework is not a rigid script to follow, but a navigation system. It allows practitioners to intentionally observe emotional patterns, integrate conscious and unconscious processes, and adapt dynamically rather than wondering "what to ask next".</Text>
                                        </div>
                                    </div>
                                )}

                                {approachTab === 2 && (
                                    <div className="h-full fade-in">
                                        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                                            <div className="space-y-6">
                                                <Heading level={3} className="text-2xl text-brand-structural-navy">Five Pillars of Focus</Heading>
                                                <Text className="text-brand-secondary-text">Our curriculum is built on core areas that develop deeper transformational capability.</Text>
                                                <div className="flex flex-col gap-3">
                                                    {focusAreas.map((area, i) => (
                                                        <button 
                                                            key={i}
                                                            onClick={(e) => { e.preventDefault(); setActiveTab(i); }}
                                                            className={cn("text-left p-3 rounded-xl border transition-colors flex items-center gap-3", activeTab === i ? "bg-brand-warm-white border-brand-soft-teal" : "border-brand-soft-neutral/30 hover:bg-brand-soft-neutral/10")}
                                                        >
                                                            <div className={cn("w-8 h-8 rounded-full flex justify-center items-center shrink-0", activeTab === i ? "bg-brand-soft-teal text-white" : "bg-white text-brand-secondary-text shadow-sm")}>
                                                                {area.icon}
                                                            </div>
                                                            <span className={cn("font-medium text-base", activeTab === i ? "text-brand-structural-navy" : "text-brand-secondary-text")}>{area.title}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-brand-warm-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                                                <div className="absolute inset-0 z-0">
                                                    <img src={focusAreas[activeTab].image} alt={focusAreas[activeTab].title} className="w-full h-full object-cover opacity-5" />
                                                </div>
                                                <div className="relative z-10 space-y-4">
                                                    <div className="w-10 h-10 rounded-full bg-brand-soft-teal/20 text-brand-soft-teal flex justify-center items-center">
                                                        {focusAreas[activeTab].icon}
                                                    </div>
                                                    <Heading level={3} className="text-xl text-brand-structural-navy">{focusAreas[activeTab].title}</Heading>
                                                    <Text className="font-medium text-brand-structural-navy/80 mb-2">{focusAreas[activeTab].description}</Text>
                                                    <Text size="sm" className="text-brand-secondary-text">{focusAreas[activeTab].details}</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-12 bg-white p-6 md:p-8 rounded-2xl border border-brand-soft-neutral/50 flex flex-col md:flex-row items-center justify-center gap-6 shadow-sm text-center md:text-left mx-auto max-w-4xl">
                            <div className="w-12 h-12 rounded-xl bg-brand-soft-neutral/10 text-brand-soft-teal flex items-center justify-center shrink-0 shadow-sm border border-brand-soft-neutral/20">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <Heading level={3} className="text-lg text-brand-structural-navy mb-2">A Shared Foundation</Heading>
                                <Text size="sm" className="mb-0 text-brand-secondary-text">
                                    The complete CHC Diploma consists of <strong className="text-brand-structural-navy">Level 1 and Level 2</strong>. These provide the foundational training for Coaching and optionally serve as the first half of the Psychotherapy (CHP) track. <strong className="text-brand-structural-navy">You can begin with just Level 1</strong>.
                                </Text>
                            </div>
                        </div>
                    </div>
            </Section>

{/* 4. FROM METHODS TO TRANSFORMATIONAL CAPABILITY */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                 <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">The evolution from coaching conversations… to deeper transformational work</Heading>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_350px] gap-12 items-center">
                    <div>
                        <Text className="mb-6">Many coaches initially focus heavily on communication tools, coaching structures, accountability systems, and “what to ask next.” This is a natural stage of development.</Text>
                        <Text className="font-medium text-brand-structural-navy mb-6">Over time, many practitioners begin wanting greater transformational depth, stronger clarity in complex situations, deeper understanding of resistance, and clear understanding of unconscious patterns.</Text>
                        
                        <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 mb-8 shadow-sm">
                            <div className="text-xs font-bold text-brand-secondary-text uppercase tracking-widest mb-4">Sessions begin feeling:</div>
                            <div className="grid grid-cols-2 gap-3">
                                {["Less reactive", "More structured", "More emotionally aware", "Easier to navigate intentionally"].map((item, i) => (
                                     <div key={i} className="flex items-center gap-2 text-base font-medium text-brand-structural-navy">
                                         <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0" />
                                         {item}
                                     </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-structural-navy p-8 rounded-3xl text-white shadow-xl h-full flex flex-col justify-center">
                        <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-8">Practitioner Evolution</div>
                        <div className="space-y-6 relative">
                            
                            {[
                                "Certified Coach",
                                "Framework & Technique Focus",
                                "Pattern Recognition",
                                "Emotional Conditioning Awareness",
                                "Conscious–Unconscious Understanding",
                                "Transformational Capability"
                            ].map((step, i, arr) => (
                                <div key={i} className="flex items-start gap-4 relative z-10">
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 bg-brand-structural-navy transition-colors",
                                        i === arr.length - 1 ? "border-brand-soft-teal" : "border-white/30"
                                    )}>
                                        {i === arr.length - 1 && <div className="w-2 h-2 rounded-full bg-brand-soft-teal" />}
                                    </div>
                                    <span className={cn(
                                        "text-base font-medium leading-tight",
                                        i === arr.length - 1 ? "text-brand-soft-teal" : "text-white/80"
                                    )}>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. HOW LEARNING HAPPENS INSIDE CHC */}
            <Section theme="white" className="border-t border-brand-soft-neutral/30">

            
                
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <Heading level={2} className="text-brand-deep-teal mb-6">The Developmental Flow (How Learning Happens)</Heading>
                            <Text size="lg">Experiential development for transformational coaching. CHC is designed as an experiential developmental process, because transformational capability develops through observation, reflection, and practical application.</Text>
                        </div>
                        
                        <div className="grid md:grid-cols-[1fr_350px] lg:grid-cols-[1fr_400px] gap-8 lg:gap-16 items-start">
                            {/* Process Steps */}
                            <div className="space-y-6 lg:space-y-8 relative pt-2">
                                
                                
                                {/* Step 1 */}
                                <div className="flex flex-col sm:flex-row gap-6 relative z-10 fade-in">
                                    <div className="w-14 h-14 rounded-full bg-brand-soft-teal text-white flex items-center justify-center shrink-0 shadow-md font-bold text-lg z-10">
                                        1
                                    </div>
                                    <div className="bg-white border text-left border-brand-soft-neutral/40 p-6 md:p-8 rounded-2xl shadow-sm flex-1 transform transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                                        <Heading level={3} className="text-xl text-brand-structural-navy mb-3">Conceptual Understanding</Heading>
                                        <Text size="sm" className="text-brand-secondary-text mb-4">Core structures, emotional patterns, and frameworks are explained not as scripts, but as navigation systems.</Text>
                                        <div className="flex flex-wrap gap-2">
                                            {["Frameworks", "Emotional Patterns", "Theory"].map((tag, i) => (
                                                <span key={i} className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy bg-brand-warm-white px-2 py-1 rounded-md">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Step 2 */}
                                <div className="flex flex-col sm:flex-row gap-6 relative z-10 fade-in">
                                    <div className="w-14 h-14 rounded-full bg-brand-structural-navy text-white flex items-center justify-center shrink-0 shadow-md font-bold text-lg z-10 sm:mt-8">
                                        2
                                    </div>
                                    <div className="bg-brand-warm-white border text-left border-brand-soft-neutral/40 p-6 md:p-8 rounded-2xl shadow-sm flex-1 sm:mt-8 transform transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                                        <Heading level={3} className="text-xl text-brand-structural-navy mb-3">Observation & Reflection</Heading>
                                        <Text size="sm" className="text-brand-secondary-text mb-4">Watching demonstrations, deconstructing sessions, and identifying where transformation happens structurally.</Text>
                                        <div className="flex flex-wrap gap-2">
                                            {["Demonstrations", "Session Analysis", "Reflection"].map((tag, i) => (
                                                <span key={i} className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy bg-white px-2 py-1 rounded-md border border-brand-soft-neutral/30">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Step 3 */}
                                <div className="flex flex-col sm:flex-row gap-6 relative z-10 fade-in">
                                    <div className="w-14 h-14 rounded-full bg-brand-deep-teal text-white flex items-center justify-center shrink-0 shadow-md font-bold text-lg z-10 sm:mt-8">
                                        3
                                    </div>
                                    <div className="bg-white border text-left border-brand-soft-neutral/40 p-6 md:p-8 rounded-2xl shadow-sm flex-1 sm:mt-8 transform transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
                                        <Heading level={3} className="text-xl text-brand-structural-navy mb-3">Practical Application</Heading>
                                        <Text size="sm" className="text-brand-secondary-text mb-4">Applying the frameworks in real-time with peer feedback and guided supervision to internalize the process.</Text>
                                        <div className="flex flex-wrap gap-2">
                                            {["Practice", "Feedback", "Integration"].map((tag, i) => (
                                                <span key={i} className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy bg-brand-warm-white px-2 py-1 rounded-md">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Summary / Outcome */}
                            <div className="bg-brand-structural-navy text-white rounded-3xl p-8 lg:p-10 shadow-xl sticky top-24 fade-in">
                                <div className="w-12 h-12 rounded-full bg-brand-soft-teal/20 text-brand-soft-teal flex justify-center items-center mb-6">
                                    <ArrowRight className="w-6 h-6 border-2 border-brand-soft-teal rounded-full p-1" />
                                </div>
                                <Heading level={3} className="text-2xl text-white mb-6">The Goal</Heading>
                                <Text size="base" className="text-white/90 mb-8 leading-relaxed">
                                    The focus is not memorizing techniques mechanically. It is developing clearer transformational understanding and more intentional coaching capability.
                                </Text>
                                
                                <div className="space-y-4 pt-6 border-t border-white/20">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                        <span className="text-base font-medium text-white/80">Shift from mechanics to insight</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                        <span className="text-base font-medium text-white/80">Develop structural intuition</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                        <span className="text-base font-medium text-white/80">Foster long-term capability</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            
            </Section>

            {/* 6. PROGRAMS VS COHORTS */}
            <Section theme="tint" className="border-y border-brand-soft-neutral/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <Heading level={2} className="text-brand-deep-teal mb-6">Delivery Formats</Heading>
                        <Heading level={3} className="text-xl md:text-2xl text-brand-structural-navy font-medium mb-6">Different practitioners integrate transformational learning differently.</Heading>
                        <Text size="lg" className="text-brand-secondary-text">That is why CHC is available through both flexible Programs and guided Cohorts. Both pathways support the same developmental direction.</Text>
                    </div>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
                        {/* Program Card */}
                        <div className="bg-white border-brand-soft-neutral ring-1 ring-brand-soft-neutral/50 p-8 md:p-10 rounded-3xl border flex flex-col h-full shadow-sm transition-all duration-300 relative group">
                            
                            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-3">The Flexible Path</div>
                            <Heading level={3} className="text-2xl lg:text-3xl mb-8 text-brand-structural-navy border-b border-brand-soft-neutral/30 pb-6">CHC Diploma Program</Heading>
                            <ul className="space-y-6 flex-1 mb-10">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-brand-soft-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-soft-teal" />
                                    </div>
                                    <span className="text-base text-brand-structural-navy font-medium leading-tight">Immediate access to the entire curriculum framework.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-brand-soft-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-soft-teal" />
                                    </div>
                                    <span className="text-base text-brand-structural-navy font-medium leading-tight">Learn at your own pace, perfectly fitting around existing commitments.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-brand-soft-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-soft-teal" />
                                    </div>
                                    <span className="text-base text-brand-structural-navy font-medium leading-tight">Includes extensive recorded demonstrations and session debriefs.</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Cohort Card */}
                        <div className="bg-brand-structural-navy ring-1 ring-brand-structural-navy/40 p-8 md:p-10 rounded-3xl flex flex-col h-full text-white shadow-md transition-all duration-300 relative overflow-hidden group">
                            
                            <div className="relative z-10">
                                <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-3">The Guided Path</div>
                                <Heading level={3} className="text-2xl lg:text-3xl mb-8 text-white border-b border-white/10 pb-6">CHC Masterclass Cohort</Heading>
                                <ul className="space-y-6 flex-1 mb-10">
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Users className="w-3.5 h-3.5 text-brand-soft-teal" />
                                        </div>
                                        <span className="text-base text-white/90 font-medium leading-tight">Guided, structured progression with an active peer group.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Users className="w-3.5 h-3.5 text-brand-soft-teal" />
                                        </div>
                                        <span className="text-base text-white/90 font-medium leading-tight">Live Q&A, supervision sessions, and real-time framework application.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Users className="w-3.5 h-3.5 text-brand-soft-teal" />
                                        </div>
                                        <span className="text-base text-white/90 font-medium leading-tight">Direct feedback on your coaching practice.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 7. WHO CHC RESONATES MOST WITH */}
            <Section theme="white">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">Who CHC resonates most with</Heading>
                    <Text size="lg" className="text-brand-structural-navy font-medium max-w-3xl mx-auto">
                        CHC is especially relevant for practitioners seeking deeper transformational capability and sustainable change rather than surface-level change.
                    </Text>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                     <div className="bg-brand-warm-white p-8 rounded-3xl border border-brand-soft-neutral/50">
                        <div className="text-xs uppercase font-bold text-brand-secondary-text mb-6 tracking-widest flex items-center gap-2">
                             <CheckCircle2 className="w-4 h-4 text-brand-soft-teal" /> Especially relevant for:
                        </div>
                        <ul className="space-y-4">
                            <li className="text-base font-medium text-brand-structural-navy">Certified coaches wanting deeper transformation skills</li>
                            <li className="text-base font-medium text-brand-structural-navy">Practitioners seeking more consistency in client outcomes</li>
                            <li className="text-base font-medium text-brand-structural-navy">Coaches interested in emotional and unconscious processes</li>
                            <li className="text-base font-medium text-brand-structural-navy">Professionals wanting stronger clarity in complex situations</li>
                        </ul>
                    </div>
                    
                    <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
                         <div className="text-xs uppercase font-bold text-red-500/70 mb-6 tracking-widest">May not be the right fit if you want:</div>
                         <ul className="space-y-4">
                            <li className="text-base font-medium text-brand-structural-navy/70">Rigid coaching scripts</li>
                            <li className="text-base font-medium text-brand-structural-navy/70">Purely motivational coaching</li>
                            <li className="text-base font-medium text-brand-structural-navy/70">Formula-based transformation systems</li>
                            <li className="text-base font-medium text-brand-structural-navy/70">Quick certification without deeper practitioner development</li>
                        </ul>
                    </div>
                </div>
            </Section>

            
            {/* 7. TRANSFORMATIONAL CASE EXPLORER (Real Session Outcomes) */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">How transformational understanding changes conversations</Heading>
                    <Text size="lg">Explore a real-world shift from surface coaching to structural transformation.</Text>
                </div>

                                    <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 relative pb-16">
                        {/* Connecting Line behind the cards */}
                        
                        
                        <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50 shadow-sm relative z-10 transition-transform hover:-translate-y-1 duration-300">
                             <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                 <div className="w-12 h-12 rounded-full border-2 border-brand-soft-neutral/50 flex items-center justify-center font-bold text-brand-secondary-text shrink-0 bg-brand-warm-white">1</div>
                                 <div className="w-full">
                                    <Text className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy mb-2">Surface Presentation</Text>
                                    <div className="bg-brand-warm-white border border-brand-soft-neutral/50 px-5 py-3 rounded-xl inline-flex text-base italic font-medium text-brand-structural-navy mb-6">
                                        Client: "I know exactly what to do... but I always end up procrastinating at the last minute."
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <div className="text-sm font-bold text-brand-secondary-text uppercase mb-2">Traditional Focus</div>
                                            <Text size="sm" className="text-brand-structural-navy/80 leading-relaxed">Accountability planning, time-blocking, motivation techniques, and discipline. Sometimes this holds for a week, but the pattern returns.</Text>
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-brand-secondary-text uppercase mb-2">The Struggle</div>
                                            <Text size="sm" className="text-brand-structural-navy/80 leading-relaxed">The coach feels they are pulling the client forward. The client feels frustrated that they "lack willpower".</Text>
                                        </div>
                                    </div>
                                 </div>
                             </div>
                        </div>

                        <div className="bg-brand-warm-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50 shadow-sm relative z-10 transition-transform hover:-translate-y-1 duration-300">
                             <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                 <div className="w-12 h-12 rounded-full border-2 border-brand-soft-teal/30 bg-brand-soft-teal/10 flex items-center justify-center font-bold text-brand-soft-teal shrink-0">2</div>
                                 <div className="w-full">
                                    <Text className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy mb-2">Emotional Conditioning</Text>
                                    <Heading level={3} className="text-brand-deep-teal mb-4 text-xl">Looking Beneath the Surface</Heading>
                                    <Text size="sm" className="text-brand-secondary-text mb-6">We stop fighting the procrastination and ask: What is this specific behavior actually doing for this client's nervous system?</Text>
                                    <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/30 shadow-sm">
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-4 text-base text-brand-structural-navy font-medium leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" />
                                                In this case, procrastination isn't laziness; it's acting as emotional protection.
                                            </li>
                                            <li className="flex items-start gap-4 text-base text-brand-structural-navy font-medium leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" />
                                                For them, delaying action prevents the emotional exposure of "trying my hardest and failing".
                                            </li>
                                        </ul>
                                    </div>
                                 </div>
                             </div>
                        </div>

                        <div className="bg-brand-structural-navy p-8 md:p-10 rounded-3xl shadow-lg relative z-10 text-white transition-transform hover:-translate-y-1 duration-300">
                             <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                 <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center font-bold text-white shrink-0">3</div>
                                 <div className="w-full">
                                    <Text className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-2">Identity Dynamics</Text>
                                    <Heading level={3} className="text-white mb-4 text-xl">The Internal Conflict</Heading>
                                    <Text size="sm" className="text-white/70 mb-6">Conscious goals often clash with unconscious identity structures.</Text>
                                    
                                    <div className="grid md:grid-cols-[1fr_auto_1fr] flex-col gap-6 items-center bg-white/5 p-6 rounded-2xl border border-white/10">
                                        <div className="w-full">
                                            <div className="text-xs uppercase tracking-widest text-brand-soft-teal mb-2 font-bold">Conscious Element</div>
                                            <div className="text-base font-medium leading-relaxed">"I want to be ambitious and successful."</div>
                                        </div>
                                        <div className="flex md:flex text-white/20 font-black text-xl justify-center w-full md:w-auto py-2 md:py-0 border-y border-white/10 md:border-y-0">VS</div>
                                        <div className="w-full">
                                            <div className="text-xs uppercase tracking-widest text-brand-accent-orange mb-2 font-bold">Unconscious Element</div>
                                            <div className="text-base font-medium text-white/90 leading-relaxed">"If I am seen as successful, people will expect too much and realize I'm a fraud."</div>
                                        </div>
                                    </div>
                                 </div>
                             </div>
                        </div>

                        <div className="bg-[#1a2b38] p-8 md:p-10 rounded-3xl shadow-xl relative z-10 text-white border border-brand-soft-teal/20 transition-transform hover:-translate-y-1 duration-300">
                             <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                 <div className="w-12 h-12 rounded-full border-2 border-brand-soft-teal bg-brand-soft-teal text-white flex items-center justify-center font-bold shrink-0 shadow-lg shadow-brand-soft-teal/20">4</div>
                                 <div className="w-full">
                                    <Text className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-2">Structural Intervention</Text>
                                    <Heading level={3} className="text-white mb-4 text-xl">The Shift in Coaching</Heading>
                                    <Text size="sm" className="text-white/80 mb-6">The conversation is no longer about fighting the behavior. It's about structural alignment.</Text>
                                    
                                    <div className="bg-brand-soft-teal/10 border-l-4 border-brand-soft-teal p-6 rounded-r-xl">
                                        <Text className="text-white font-medium text-base leading-relaxed">
                                            The coach helps the client disentangle the fear of exposure from the act of doing the work. Once the nervous system no longer perceives "action" as "dangerous exposure," the procrastination naturally dissolves without needing willpower.
                                        </Text>
                                    </div>
                                 </div>
                             </div>
                        </div>
                        
                        <div className="pt-12 text-center relative z-10 border-t border-brand-soft-neutral/30 mt-8">
                            <Text size="sm" className="font-medium text-brand-structural-navy mb-4">Explore more stories of coaches evolving their practice.</Text>
                            <Button href="#journeys" variant="outline" className="bg-white border-brand-structural-navy text-brand-structural-navy hover:bg-brand-structural-navy hover:text-white transition-colors">
                                Read Practitioner Journeys
                            </Button>
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
                            <Heading level={3} className="text-white mb-3">Try it risk-free</Heading>
                            <Text className="text-white/80 mb-0 text-base leading-relaxed">
                                If you attend the first weekend of the cohort or complete the first module of the program, fully participate in the exercises, and feel that the approach is not delivering the transformational depth you were looking for—we will refund your entire investment, no questions asked.
                            </Text>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 9.6 PATHWAY PROGRESSION */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <div className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase mb-4">Pathway Progression</div>
                        <Heading level={2} className="text-brand-structural-navy mb-6">Where to next?</Heading>
                        <Text size="lg" className="text-brand-secondary-text mb-12 max-w-2xl mx-auto">
                            The fully completed CHC Diploma (Level 1 + Level 2) acts as the shared foundation for advanced practitioner pathways.
                        </Text>
                        
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-soft-neutral/50 text-left relative overflow-hidden group hover:shadow-md transition-shadow max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                                <div className="w-16 h-16 rounded-full bg-brand-soft-neutral/10 flex items-center justify-center shrink-0 border border-brand-soft-neutral/30">
                                    <Network className="w-8 h-8 text-brand-structural-navy" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <Heading level={3} className="text-xl text-brand-deep-teal mb-3">Cognitive Hypnotic Change Practitioner (CHCP)</Heading>
                                    <Text className="text-brand-secondary-text mb-6 text-base">
                                        For coaches, educators, and leaders looking to specialize in structured advanced change-work.
                                    </Text>
                                    <Button href="#chcp-announcement" variant="outline" className="border-brand-soft-teal text-brand-deep-teal hover:bg-brand-soft-teal hover:text-white transition-colors">
                                        Explore the CHCP Advanced Track <ArrowRight className="inline-block w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 10. NEXT STEP */}
            <Section theme="dark" className="text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#65BFA9_0%,transparent_70%)] bg-[length:100%_200%]" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <FadeIn>
                        <Heading level={2} className="text-white mb-6">Explore the CHC Approach</Heading>
                        <Text size="lg" className="text-white/80 mb-10 max-w-2xl mx-auto">
                            Inside the Prospectus, you can explore the CHC approach, transformational coaching frameworks, conscious-unconscious alignment, and practitioner development pathways in greater depth.
                        </Text>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 flex-wrap">
                             <Button href="#prospectus-success-chc" className="w-full sm:w-auto px-8 py-4">Download CHC Prospectus</Button>
                             <Button href="#level-1" className="w-full sm:w-auto px-8 py-4 bg-white text-brand-structural-navy hover:bg-white/90">Start with Level 1</Button>
                             <Button href="#cohorts" variant="outline" className="w-full sm:w-auto px-8 py-4 border-white/20 text-white hover:bg-white/10">Explore CHC Cohort</Button>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
                            {["Transformational Philosophy", "Emotional Conditioning", "Conscious & Unconscious", "SOFT SEA® Introduction", "Programs vs Cohorts", "Development Pathways", "Learning Structure", "FAQs & Details"].map((item, i) => (
                                <div key={i} className="text-sm text-white/60 flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-brand-soft-teal" /> {item}
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};
