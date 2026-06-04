import { useState } from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { cn } from '../lib/utils';
import { 
    Activity, 
    ArrowRight, 
    ArrowRightLeft,
    BookOpen, 
    CheckCircle2,
    Compass, 
    Eye, 
    Heart,
    Layers,
    LineChart,
    Map,
    MessageSquare,
    Network, 
    Play,
    Target,
    Users,
    ChevronDown
} from 'lucide-react';

export const SpecializationHub = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [selectedInterest, setSelectedInterest] = useState<number | null>(null);

    const interests = [
        { id: 1, text: "I feel deeply interested in relationship dynamics.", category: "Relationship Coaching", icon: Heart },
        { id: 2, text: "I enjoy working with emotional development in younger populations.", category: "School Counselling", icon: Users },
        { id: 3, text: "I am drawn toward deeper therapeutic complexity.", category: "Advanced Pathways", icon: Layers },
        { id: 4, text: "I value long-term transformational work.", category: "Identity & Core Issues", icon: Compass }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text mb-20 md:mb-32">
            
            
            {/* Split Test Toggles */}
            

            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative text-center border-b border-brand-soft-neutral/30 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-warm-white/40 via-brand-warm-white/80 to-brand-warm-white" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
                    <FadeIn>
                        <div className="text-xs md:text-sm font-bold tracking-widest text-brand-structural-navy uppercase mb-6 inline-flex items-center gap-2 border border-brand-soft-neutral/50 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm">
                            <Target className="w-3.5 h-3.5 text-brand-soft-teal" />
                            Specialization Hub
                        </div>
                        <Heading level={1} className="text-3xl md:text-5xl lg:text-6xl text-brand-structural-navy font-bold leading-[1.15] tracking-tight mb-8">
                            Specialization is not simply about learning more.<br />
                            <span className="text-brand-soft-teal font-light block mt-4">It is about evolving toward deeper, more intentional areas of practice.</span>
                        </Heading>
                        <Text size="lg" className="text-brand-secondary-text mb-12 max-w-2xl mx-auto">
                            As practitioners grow, many naturally begin feeling drawn toward particular forms of transformational work. Over time, certain questions become more important: Which populations resonate with me most deeply? What kind of transformation feels most meaningful to facilitate?
                        </Text>
                    </FadeIn>
                </div>

                <div className="max-w-5xl mx-auto px-4 relative z-20 mt-8">
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden flex flex-col items-center">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,186,181,0.05)_0%,transparent_100%)]" />
                         
                         <Heading level={4} className="text-brand-structural-navy mb-12 relative z-10 text-center">The Practitioner Evolution Pathway</Heading>
                         
                         <div className="grid grid-cols-1 md:grid-cols-5 w-full relative z-10 gap-8 md:gap-0 mt-8 mb-8 border-t-0 md:border-t md:border-brand-soft-neutral/50 pt-0 md:pt-6">
                                {[
                                    { title: "Foundational\nUnderstanding", icon: BookOpen },
                                    { title: "Applied\nCapability", icon: Activity },
                                    { title: "Integrative\nDevelopment", icon: Layers },
                                    { title: "Focused\nInterests", icon: Compass },
                                    { title: "Specialized\nIdentity", icon: Target, isLast: true }
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center group w-full text-center">
                                        <div className={cn("flex flex-col items-center text-center transition-all duration-300 md:-mt-[3.25rem] bg-white px-2")}>
                                             <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1 relative z-20 mx-auto", step.isLast ? "bg-brand-structural-navy text-white shadow-[0_0_20px_rgba(17,38,53,0.3)] ring-4 ring-brand-soft-teal/20 scale-110" : "bg-white border text-brand-soft-teal border-brand-soft-neutral shadow-sm")}>
                                                 <step.icon className={cn("w-5 h-5", step.isLast ? "text-brand-soft-teal" : "")} />
                                             </div>
                                             <span className={cn("text-sm font-bold uppercase tracking-wider whitespace-pre-line leading-relaxed", step.isLast ? "text-brand-structural-navy" : "text-brand-secondary-text")}>
                                                 {step.title}
                                             </span>
                                        </div>
                                    </div>
                                ))}
                         </div>



                         <div className="mt-16 grid md:grid-cols-3 gap-6 w-full relative z-10 text-left">
                                <div className="p-5 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral/30">
                                    <div className="text-xs font-bold text-red-400 uppercase tracking-widest mb-2">Not As</div>
                                    <ul className="text-sm font-medium text-brand-secondary-text space-y-2">
                                        <li className="flex items-center gap-2">✕  Another certification</li>
                                        <li className="flex items-center gap-2">✕  A rigid niche</li>
                                        <li className="flex items-center gap-2">✕  A professional label</li>
                                    </ul>
                                </div>
                                <div className="p-5 bg-brand-structural-navy rounded-2xl border border-brand-structural-navy text-white md:col-span-2">
                                    <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-2">But As</div>
                                    <ul className="text-sm md:text-base font-medium text-white/90 space-y-2">
                                        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> A long-term developmental direction</li>
                                        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> A focused application domain</li>
                                        <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" /> A deeper expression of practitioner identity</li>
                                    </ul>
                                </div>
                         </div>
                    </div>
                </div>
            </Section>

            {/* 2. WHY SPECIALIZATION MATTERS */}
            <Section className="border-b border-brand-soft-neutral/30">
                <div className="max-w-6xl mx-auto px-4 md:px-6">
                     
                         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                             <div className="lg:w-5/12">
                                 <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">Contextual Depth</div>
                                 <Heading level={2} className="text-brand-structural-navy mb-6">
                                     Understanding deepens when applied in specific contexts.
                                 </Heading>
                                 <Text size="lg" className="text-brand-secondary-text mb-8">
                                     Foundational capability focuses on broad human systems. Over time, true mastery develops by anchoring that understanding deeply within specific emotional environments and relational structures.
                                 </Text>
                                 <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50">
                                                                          <div className="flex items-start gap-4">
                                         <div className="mt-1 w-8 h-8 rounded-full bg-brand-structural-navy/5 flex items-center justify-center shrink-0">
                                             <Compass className="w-4 h-4 text-brand-structural-navy" />
                                         </div>
                                         <div>
                                             <div className="text-base font-bold text-brand-structural-navy mb-1">
                                                 Why This Matters
                                             </div>
                                             <p className="text-sm text-brand-secondary-text leading-relaxed">
                                                 Different domains—such as couples in conflict, growing children, or individuals healing trauma—involve entirely different systemic patterns and demand different practitioner presence.
                                             </p>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                             
                             <div className="lg:w-7/12 w-full">
                                 <div className="grid sm:grid-cols-2 gap-4">
                                      <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 hover:border-brand-soft-teal/40 transition-colors shadow-sm flex flex-col justify-between group h-full">
                                          <div>
                                              <Heart className="w-6 h-6 text-brand-soft-teal mb-4 group-hover:scale-110 transition-transform" />
                                              <h4 className="text-base font-bold text-brand-structural-navy mb-2">Relational Dynamics</h4>
                                              <p className="text-base text-brand-secondary-text">Couples, family systems, and interpersonal cyclic conflict.</p>
                                          </div>
                                      </div>
                                      <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 hover:border-brand-soft-teal/40 transition-colors shadow-sm flex flex-col justify-between group h-full mt-0 sm:mt-8">
                                          <div>
                                              <Users className="w-6 h-6 text-brand-soft-teal mb-4 group-hover:scale-110 transition-transform" />
                                              <h4 className="text-base font-bold text-brand-structural-navy mb-2">Emerging Populations</h4>
                                              <p className="text-base text-brand-secondary-text">Adolescent emotional mapping and early development psychology.</p>
                                          </div>
                                      </div>
                                      <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 hover:border-brand-soft-teal/40 transition-colors shadow-sm flex flex-col justify-between group h-full sm:-mt-8">
                                          <div>
                                              <Activity className="w-6 h-6 text-brand-soft-teal mb-4 group-hover:scale-110 transition-transform" />
                                              <h4 className="text-base font-bold text-brand-structural-navy mb-2">Trauma & Healing</h4>
                                              <p className="text-base text-brand-secondary-text">Navigating complex psychological injuries and somatic release.</p>
                                          </div>
                                      </div>
                                      <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 hover:border-brand-soft-teal/40 transition-colors shadow-sm flex flex-col justify-between group h-full">
                                          <div>
                                              <BookOpen className="w-6 h-6 text-brand-soft-teal mb-4 group-hover:scale-110 transition-transform" />
                                              <h4 className="text-base font-bold text-brand-structural-navy mb-2">Identity Growth</h4>
                                              <p className="text-base text-brand-secondary-text">Career transitions, existential queries, and internal reframing.</p>
                                          </div>
                                      </div>
                                 </div>
                             </div>
                         </div>
                     
                </div>
            </Section>

            
            
            {/* 3. HOW PRACTITIONERS EVOLVE (INTERACTIVE) */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30 pb-24 pt-24">

                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <Heading level={2} className="text-brand-structural-navy mb-6">Specialization usually develops progressively — not through forced career decisions.</Heading>
                            <Text size="lg" className="text-brand-secondary-text">Many initially believe specialization is chosen early. In reality, it emerges gradually through repeated experiences, emotional resonance, and deeper curiosity.</Text>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { q: "I feel deeply interested in relationship dynamics.", a: "Relationship Coaching" },
                                { q: "I enjoy working with emotional development in younger populations.", a: "School Counselling" },
                                { q: "I am drawn toward deeper therapeutic complexity.", a: "Advanced Pathways" },
                                { q: "I value long-term transformational work.", a: "Identity & Core Issues" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-brand-soft-neutral/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <button
                                        onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                                        className="w-full p-6 text-left flex justify-between items-center group focus:outline-none"
                                    >
                                        <div className="pr-4">
                                            <span className="text-base font-semibold text-brand-structural-navy group-hover:text-brand-soft-teal transition-colors">"{item.q}"</span>
                                        </div>
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0",
                                            activeAccordion === i ? "bg-brand-soft-teal text-white rotate-180" : "bg-brand-warm-white text-brand-structural-navy group-hover:bg-brand-soft-teal/10"
                                        )}>
                                            <ChevronDown className="w-4 h-4" />
                                        </div>
                                    </button>
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-500 ease-in-out bg-brand-soft-teal/5 relative",
                                        activeAccordion === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-soft-teal" />
                                        <div className="p-6 pt-2 pl-8 flex items-center gap-3">
                                            <span className="text-sm uppercase tracking-widest font-bold text-brand-secondary-text">Natural Pathway:</span>
                                            <span className="text-base font-bold text-brand-structural-navy hover:text-brand-soft-teal cursor-pointer transition-colors border-b border-brand-soft-teal/30 hover:border-brand-soft-teal">{item.a}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                
            </Section>

            {/* 4. GENERAL VS SPECIALIZED (Dark visual block) */}
            <Section theme="dark" className="text-center bg-[#112635]">
                <div className="max-w-5xl mx-auto px-4 relative z-10 py-12">
                     <Heading level={2} className="text-white mb-6">Specialization is not simply knowing more. It is understanding a specific domain more deeply.</Heading>
                     <Text size="lg" className="text-white/80 max-w-3xl mx-auto mb-16">
                         A strong general practitioner understands emotional processes and therapeutic observation. But specialization requires contextual depth—domain-specific pattern recognition and nuanced practitioner judgment.
                     </Text>

                     
                    
                        
                            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                               <div className="bg-[#0f2130] p-8 md:p-12 rounded-2xl border border-white/10 flex flex-col justify-center h-full">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                                        <Layers className="w-6 h-6 text-brand-soft-teal" />
                                    </div>
                                    <Heading level={4} className="text-white mb-6">General Practitioner Capability</Heading>
                                    <ul className="space-y-4 text-left">
                                        <li className="flex items-center gap-3 text-base text-white/80"><CheckCircle2 className="w-4 h-4 text-white/30" /> Broad transformational understanding</li>
                                        <li className="flex items-center gap-3 text-base text-white/80"><CheckCircle2 className="w-4 h-4 text-white/30" /> Integrative observation</li>
                                        <li className="flex items-center gap-3 text-base text-white/80"><CheckCircle2 className="w-4 h-4 text-white/30" /> Foundational intervention thinking</li>
                                        <li className="flex items-center gap-3 text-base text-white/80"><CheckCircle2 className="w-4 h-4 text-white/30" /> Flexible practitioner capability</li>
                                    </ul>
                               </div>
                               <div className="bg-white p-8 md:p-12 rounded-2xl flex flex-col justify-center h-full">
                                    <div className="w-12 h-12 rounded-xl bg-brand-structural-navy/5 border border-brand-structural-navy/10 flex items-center justify-center mb-6">
                                        <Target className="w-6 h-6 text-brand-structural-navy" />
                                    </div>
                                    <Heading level={4} className="text-brand-structural-navy mb-6">Specialized Practitioner Depth</Heading>
                                    <ul className="space-y-4 text-left">
                                        <li className="flex items-center gap-3 text-base text-brand-secondary-text font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" /> Context-specific depth</li>
                                        <li className="flex items-center gap-3 text-base text-brand-secondary-text font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" /> Domain-specific pattern recognition</li>
                                        <li className="flex items-center gap-3 text-base text-brand-secondary-text font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" /> Context-sensitive application</li>
                                        <li className="flex items-center gap-3 text-base text-brand-secondary-text font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal" /> Focused expertise development</li>
                                    </ul>
                               </div>
                            </div>
                    
        
                </div>
            </Section>

            
            {/* 5. CURRENT PATHWAYS */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-4">Focused Application</div>
                     <Heading level={2} className="text-brand-structural-navy mb-6">Current Specialization Pathways</Heading>
                </div>

                <div className="max-w-6xl mx-auto px-4 space-y-12">
                         {/* Relationship Coaching - Redesigned */}
                         <div className="bg-white rounded-3xl border border-brand-soft-neutral/50 p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12 items-center">
                             
                             <div>
                                 <div className="w-12 h-12 bg-brand-warm-white rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-brand-soft-neutral/50">
                                     <ArrowRightLeft className="w-6 h-6 text-brand-soft-teal" />
                                 </div>
                                 <Heading level={3} className="text-brand-structural-navy mb-4">Relationship Coaching</Heading>
                                 <Text size="sm" className="text-brand-secondary-text mb-6">
                                     Relationship work often involves far more than communication difficulties alone. Practitioners working in this space frequently navigate emotional conditioning, attachment patterns, and unconscious relational expectations.
                                 </Text>
                                 <div className="mb-8">
                                     <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary-text mb-3">Pathway Focus</div>
                                     <div className="flex flex-wrap gap-2">
                                         {["Attachment Dynamics", "Conflict Cycles", "Identity Dynamics", "Interpersonal Transformation"].map((tag, i) => (
                                             <span key={i} className="px-3 py-1 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-full text-xs font-semibold text-brand-structural-navy">{tag}</span>
                                         ))}
                                     </div>
                                 </div>
                                 <Button variant="primary" onClick={() => window.location.hash = '#relationship-specialization'}>
                                     Explore Relationship Pathway
                                 </Button>
                             </div>
                             
                             <div className="bg-brand-warm-white p-8 rounded-2xl border border-brand-soft-neutral/50 h-full flex items-center justify-center">
                                  {/* Stacked Progression Map */}
                                  <div className="w-full max-w-sm flex flex-col items-center justify-center gap-3 text-center text-sm font-medium">
                                      <div className="w-full px-4 py-3 border border-brand-soft-neutral/50 rounded-xl bg-white shadow-sm text-brand-secondary-text">Surface Conflict</div>
                                      <ArrowRight className="w-4 h-4 text-brand-soft-teal rotate-90" />
                                      <div className="w-full px-4 py-3 border border-brand-soft-neutral/50 rounded-xl bg-white shadow-sm text-brand-secondary-text">Emotional Meaning</div>
                                      <ArrowRight className="w-4 h-4 text-brand-soft-teal rotate-90" />
                                      <div className="w-full px-4 py-3 border border-brand-soft-neutral/50 rounded-xl bg-white shadow-sm text-brand-secondary-text">Attachment Dynamics</div>
                                      <ArrowRight className="w-4 h-4 text-brand-soft-teal rotate-90" />
                                      <div className="w-full px-4 py-3 border border-brand-soft-teal bg-brand-soft-teal/10 shadow-sm font-bold text-brand-structural-navy rounded-xl">Relational Transformation</div>
                                  </div>
                             </div>
                         </div>
    
                         {/* School Counselling - Redesigned */}
                         <div className="bg-white rounded-3xl border border-brand-soft-neutral/50 p-8 md:p-12 shadow-sm grid md:grid-cols-2 gap-12 items-center">
                             <div className="bg-brand-warm-white p-8 rounded-2xl border border-brand-soft-neutral/50 h-full flex items-center justify-center order-2 md:order-1">
                                  <div className="w-full flex flex-col items-center justify-center gap-4">
                                      <div className="flex flex-wrap justify-center gap-3 mb-2">
                                          {["Environment", "Behavior", "Emotion", "Development"].map((item, i) => (
                                              <div key={i} className="px-3 py-2 border border-brand-soft-neutral/50 rounded-full bg-white shadow-sm text-sm font-medium text-brand-structural-navy text-center">
                                                  {item}
                                              </div>
                                          ))}
                                      </div>
                                      <div className="w-full px-4 py-3 text-center border-t border-brand-soft-neutral/50 pt-6">
                                          <div className="inline-block px-6 py-3 bg-brand-soft-teal/10 border border-brand-soft-teal/30 rounded-full text-brand-structural-navy text-base font-bold">
                                              Structured Support
                                          </div>
                                      </div>
                                  </div>
                             </div>
                             <div className="order-1 md:order-2">
                                 <div className="w-12 h-12 bg-brand-warm-white rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-brand-soft-neutral/50">
                                     <Users className="w-6 h-6 text-brand-soft-teal" />
                                 </div>
                                 <Heading level={3} className="text-brand-structural-navy mb-4">School Counselling</Heading>
                                 <Text size="sm" className="text-brand-secondary-text mb-6">
                                     Working with younger populations requires practitioners to understand development through a very different lens. Children and adolescents often express emotional struggles indirectly through behavior, withdrawal, or learning challenges.
                                 </Text>
                                 <div className="mb-8">
                                     <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary-text mb-3">Pathway Focus</div>
                                     <div className="flex flex-wrap gap-2">
                                         {["Behavioral Expression", "Early Intervention", "School Environments", "Developmental Support"].map((tag, i) => (
                                             <span key={i} className="px-3 py-1 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-full text-xs font-semibold text-brand-structural-navy">{tag}</span>
                                         ))}
                                     </div>
                                 </div>
                                 <Button variant="outline" onClick={() => window.location.hash = '#school-counselling-specialization'}>
                                     Explore School Pathway
                                 </Button>
                             </div>
                         </div>
                    </div>
            </Section>
            
            {/* 6. FUTURE & 7. IDENTITY (Combined block) */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30 pb-20">
                
                            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                     <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50 shadow-sm">
                                                    <Heading level={4} className="text-brand-structural-navy mb-4">Future Specializations</Heading>
                          <Text size="sm" className="text-brand-secondary-text mb-6">
                              Practitioner interests and societal needs continue evolving. Future pathways may gradually expand into trauma-informed work, family systems, organizational transformation, and advanced psychotherapy applications as deeper contextual extensions.
                          </Text>
                          <div className="flex flex-wrap gap-2">
                              {["Trauma-Informed", "Family Systems", "Identity", "Organizational"].map((t,i) => (
                                  <span key={i} className="text-sm font-medium text-brand-structural-navy/60 bg-brand-warm-white px-2 py-1 rounded">{t}</span>
                              ))}
                          </div>
                     </div>

                     <div className="bg-brand-structural-navy p-8 md:p-10 rounded-3xl border border-brand-structural-navy shadow-md text-white">
                                                    <Heading level={4} className="text-white mb-4">Evolution of Identity</Heading>
                          <Text size="sm" className="text-white/80 mb-6">
                              As practitioners deepen their work within specific domains, something begins shifting internally. The work becomes more intentional, aligned, and identity-defining. Specialization is not only about what practitioners do, but who they gradually become.
                          </Text>
                          <div className="flex items-center gap-3">
                               <span className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal">Learning</span>
                               <ArrowRight className="w-3 h-3 text-white/30" />
                               <span className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal">Resonance</span>
                               <ArrowRight className="w-3 h-3 text-white/30" />
                               <span className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal">Identity</span>
                          </div>
                     </div>
                </div>

                {/* Practitioner Identity Video Clip Placeholder */}
                <div className="max-w-4xl mx-auto px-4 mt-16">
                    <button aria-label="Play video: When Specialization Becomes Identity" className="w-full text-left outline-none focus-visible:ring-4 focus-visible:ring-brand-soft-teal bg-brand-structural-navy rounded-3xl overflow-hidden relative group cursor-pointer border border-[#112635] shadow-2xl aspect-video md:aspect-[21/9]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#112635] via-brand-structural-navy/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-brand-soft-teal/20 backdrop-blur-sm border border-brand-soft-teal/50 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-soft-teal/30 group-hover:scale-110 shadow-lg">
                                <Play className="w-8 h-8 text-white pl-1" fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between opacity-90">
                            <div className="text-left">
                                <div className="text-xs uppercase tracking-widest text-brand-soft-teal font-bold mb-1">Practitioner Insight</div>
                                <div className="text-white text-lg font-medium">When Specialization Becomes Identity</div>
                            </div>
                            <div className="text-white/60 text-base font-mono bg-[#112635]/80 px-3 py-1 rounded-full backdrop-blur-md">03:45</div>
                        </div>
                    </button>
                </div>

        
            </Section>

            
        {/* 8. ECOSYSTEM & 9. NEXT STEPS */}
            <Section className="pb-32 relative text-center">
                 <div className="max-w-4xl mx-auto px-4 mt-8">
                     <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">The ICHARS Ecosystem</div>
                     <Heading level={2} className="text-brand-structural-navy mb-6">Specialization develops most effectively when built upon strong practitioner foundations.</Heading>
                     <Text size="lg" className="text-brand-secondary-text mb-12">
                         At ICHARS, specialization is intentionally positioned later within the developmental ecosystem. It requires foundational clarity, structured observation, and integrative capability to ensure ethical practice and long-term sustainability.
                     </Text>

                     {/* CTA Grid */}
                     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
                          <a href="#relationship-specialization" className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 text-left hover:border-brand-soft-teal/50 transition-colors shadow-sm flex flex-col justify-center group h-full">
                               <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-2">Primary</div>
                               <div className="font-bold text-brand-structural-navy mb-1 group-hover:text-brand-soft-teal transition-colors flex items-center justify-between">
                                   Explore Relationship Coaching <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                               </div>
                          </a>
                          
                          <a href="#school-counselling-specialization" className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 text-left hover:border-brand-soft-teal/50 transition-colors shadow-sm flex flex-col justify-center group h-full">
                               <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-2">Secondary</div>
                               <div className="font-bold text-brand-structural-navy mb-1 group-hover:text-brand-soft-teal transition-colors flex items-center justify-between">
                                   Explore School Counselling <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                               </div>
                          </a>
                          
                          <a href="#programs" className="bg-brand-structural-navy p-6 rounded-2xl border border-brand-structural-navy text-left hover:bg-[#112635] transition-colors shadow-sm flex flex-col justify-center group h-full sm:col-span-2 md:col-span-1">
                               <div className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">Explore</div>
                               <div className="font-bold text-white mb-1 group-hover:text-brand-soft-teal transition-colors flex items-center justify-between">
                                   The Practitioner Ecosystem <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                               </div>
                          </a>
                     </div>
                     
                     <div className="mt-8 flex justify-center">
                          <a href="#start" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors">
                              <MessageSquare className="w-4 h-4" /> Book a Developmental Clarity Conversation
                          </a>
                     </div>
                 </div>
            </Section>
    
        </div>
    );
};
