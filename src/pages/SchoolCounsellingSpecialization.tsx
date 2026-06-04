import { useState } from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { cn } from '../lib/utils';
import { 
    ArrowRight, 
    BookOpen,
    CheckCircle2,
    Heart,
    MessageSquare,
    Network,
    Play,
    Shield,
    Target,
    Users
} from 'lucide-react';

export const SchoolCounsellingSpecialization = () => {
    const [selectedBehavior, setSelectedBehavior] = useState<number | null>(null);

    const behaviors = [
        { id: 1, text: "Withdrawal from peers", icon: Users, interpretation: "May indicate social insecurity, fear of judgment, or emotional overwhelm rather than just 'shyness'." },
        { id: 2, text: "Repeated classroom disruption", icon: Network, interpretation: "Often an expression of emotional dysregulation, seeking connection (even negative), or difficulty managing anxiety." },
        { id: 3, text: "Perfectionism", icon: Target, interpretation: "Frequently rooted in fear of failure, conditionality of self-worth, or attempts to manage internal chaos through external control." },
        { id: 4, text: "Emotional shutdown", icon: Shield, interpretation: "A protective response to feeling unsafe, misunderstood, or chronically overwhelmed." },
        { id: 5, text: "Academic disengagement", icon: BookOpen, interpretation: "Can signal identity confusion, fear of inadequacy, or systemic stress taking precedence over learning." }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text mb-20 md:mb-32">
            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative text-center border-b border-brand-soft-neutral/30 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-warm-white/40 via-brand-warm-white/80 to-brand-warm-white" />
                </div>
                
                <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center">
                    <FadeIn>
                        <div className="text-xs md:text-sm font-bold tracking-widest text-brand-structural-navy uppercase mb-6 inline-flex items-center gap-2 border border-brand-soft-neutral/50 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm">
                            <BookOpen className="w-3.5 h-3.5 text-brand-soft-teal" />
                            School Counselling
                        </div>
                        <Heading level={1} className="text-3xl md:text-5xl lg:text-6xl text-brand-structural-navy font-bold leading-[1.15] tracking-tight mb-8">
                            Children and adolescents are not simply “behaving.”<br />
                            <span className="text-brand-soft-teal font-light block mt-4 text-2xl md:text-4xl">They are developing emotionally, relationally, socially, and psychologically.</span>
                        </Heading>
                    </FadeIn>
                </div>

                <div className="max-w-6xl mx-auto px-4 relative z-20 mt-12 grid md:grid-cols-2 gap-8 lg:gap-12 items-center text-left">
                    <FadeIn delay={0.2} className="space-y-6">
                        <Text size="base" className="text-brand-secondary-text">
                            In school environments, emotional experiences are rarely expressed directly. A student may appear distracted, withdrawn, oppositional, anxious, or academically inconsistent.
                        </Text>
                        <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal" />
                           <Text size="sm" className="font-semibold text-brand-structural-navy mb-3">
                               But beneath the visible behavior may be:
                           </Text>
                           <ul className="text-sm md:text-base text-brand-secondary-text grid grid-cols-2 gap-2 mt-2">
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Emotional overwhelm</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Identity insecurity</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Social exclusion</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Family stress</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Attachment difficulties</li>
                               <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-brand-soft-teal shrink-0" /> Fear of failure</li>
                           </ul>
                        </div>
                        <Text size="sm" className="font-semibold text-brand-structural-navy">
                            Meaningful school counselling requires understanding the developmental, emotional, relational, and environmental systems shaping the student’s experience.
                        </Text>
                    </FadeIn>

                    <FadeIn delay={0.3} className="relative hidden md:block h-full">
                        <div className="absolute inset-0 bg-brand-soft-teal/5 blur-3xl rounded-full" />
                        <div className="bg-white rounded-[32px] p-8 border border-brand-soft-neutral/50 shadow-lg relative z-10 flex flex-col items-center h-full overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-[0.15] mix-blend-luminosity" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                            
                            <div className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy mb-8 border-b border-brand-soft-neutral/30 pb-4 w-full text-center relative z-10">
                                The Layered Student Experience
                            </div>
                            
                            <div className="w-full flex-1 flex flex-col items-center justify-center space-y-2.5 relative z-10 text-center font-mono text-xs text-brand-structural-navy/80 font-medium pb-4">
                                <div className="px-4 py-2.5 border border-brand-soft-neutral/40 rounded-full bg-white/80 backdrop-blur-sm w-full max-w-[300px] shadow-sm transform transition-all group-hover:-translate-y-1">
                                    <span className="text-xs uppercase tracking-widest text-brand-secondary-text font-bold block mb-1">Visible Layer</span>
                                    <span className="truncate block">Behavior • Performance • Participation</span>
                                </div>
                                <div className="h-4 w-px bg-brand-soft-neutral/40" />
                                <div className="px-4 py-2.5 border border-brand-soft-neutral/40 rounded-full bg-brand-warm-white/90 backdrop-blur-sm w-full max-w-[270px] shadow-sm transform transition-all group-hover:-translate-y-1">
                                    <span className="text-xs uppercase tracking-widest text-brand-secondary-text font-bold block mb-1">Emotional Layer</span>
                                    <span className="truncate block">Anxiety • Shame • Fear • Dysregulation</span>
                                </div>
                                <div className="h-4 w-px bg-brand-soft-neutral/40" />
                                <div className="px-4 py-2.5 border border-brand-soft-neutral/50 rounded-full bg-brand-soft-neutral/10 backdrop-blur-sm w-full max-w-[240px] shadow-sm transform transition-all group-hover:-translate-y-1">
                                    <span className="text-xs uppercase tracking-widest text-brand-structural-navy font-bold block mb-1">Developmental Layer</span>
                                    <span className="truncate block">Identity Formation • Social Belonging</span>
                                </div>
                                <div className="h-4 w-px bg-brand-soft-teal/50" />
                                <div className="px-4 py-3 border border-brand-soft-teal bg-brand-soft-teal/10 backdrop-blur-sm shadow-md text-brand-structural-navy rounded-full w-full max-w-[210px] transform transition-all group-hover:-translate-y-1">
                                    <span className="text-xs uppercase tracking-widest text-brand-soft-teal font-bold block mb-1">Environmental Layer</span>
                                    <span className="truncate block">Family • School • Peer Systems</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. UNDERSTANDING DEVELOPMENTAL COMPLEXITY */}
            <Section className="border-b border-brand-soft-neutral/30 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                     <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                         <div>
                             <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">Navigating Growth</div>
                             <Heading level={2} className="text-brand-structural-navy mb-6">
                                 Children and adolescents are still developing emotionally, cognitively, socially, and psychologically.
                             </Heading>
                             <Text size="base" className="text-brand-secondary-text mb-6">
                                 <span className="font-medium text-brand-structural-navy">Students are not static personalities.</span> They are developing human beings navigating emotional growth, social belonging, identity development, and changing developmental needs.
                             </Text>
                             
                             <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50 mb-6">
                                 <Text size="sm" className="font-semibold text-brand-structural-navy mb-2">
                                     Without developmental understanding, students can easily become misunderstood.
                                 </Text>
                                 <Text size="sm" className="text-brand-secondary-text">
                                     A child who appears inattentive, emotionally reactive, or socially withdrawn may actually be responding to emotional insecurity, fear of judgment, or family instability. They risk being behaviorally managed instead of understood.
                                 </Text>
                             </div>
                         </div>
                         
                         <div className="relative mt-12 md:mt-0">
                             <div className="absolute inset-0 bg-brand-structural-navy/5 blur-3xl rounded-[40px]" />
                             <div className="relative bg-white rounded-[40px] p-6 md:p-12 border border-brand-soft-neutral/50 shadow-xl">
                                  <div className="text-center font-bold text-sm uppercase tracking-widest text-brand-structural-navy mb-8">Developmental Journey</div>
                                  
                                  <div className="flex flex-col items-center w-full max-w-xs mx-auto relative z-10">
                                      {[
                                          "Early Emotional Dependency",
                                          "Social Awareness Development",
                                          "Identity Formation",
                                          "Emotional Independence",
                                          "Self-Concept Development",
                                          "Emerging Psychological Maturity"
                                      ].map((step, i) => (
                                          <div key={i} className="flex flex-col items-center w-full">
                                              <div className={cn("p-4 w-full text-center rounded-xl text-base font-semibold z-10 relative transition-transform hover:scale-105 cursor-default", 
                                                  i === 0 ? "bg-brand-warm-white border border-brand-soft-neutral/50 text-brand-structural-navy" :
                                                  i === 1 ? "bg-white border-2 border-brand-soft-teal/20 text-brand-structural-navy" :
                                                  i === 2 ? "bg-white border-2 border-brand-soft-teal/50 text-brand-structural-navy shadow-sm" :
                                                  i === 3 ? "bg-brand-soft-teal/20 border-2 border-brand-soft-teal/60 text-brand-structural-navy" :
                                                  i === 4 ? "bg-brand-soft-teal text-brand-structural-navy shadow-md transform scale-105" :
                                                  "bg-brand-structural-navy text-white shadow-lg transform scale-110"
                                              )}>
                                                  {step}
                                              </div>
                                              {i !== 5 && <ArrowRight className={cn("w-5 h-5 rotate-90 my-2", i >= 3 ? "text-brand-soft-teal" : "text-brand-soft-neutral/60")} />}
                                          </div>
                                      ))}
                                  </div>
                             </div>
                         </div>
                     </div>
                </div>
            </Section>

            {/* 3. EMOTIONAL & BEHAVIORAL PATTERNS */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <Heading level={2} className="text-brand-structural-navy mb-6">Behavior in school environments is often emotional communication.</Heading>
                     <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto">
                         Students do not always verbalize emotional experiences directly. The visible behavior is often only the surface expression of a deeper developmental experience.
                     </Text>
                </div>

                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                     <div className="md:col-span-5 space-y-6">
                         <div className="bg-white rounded-3xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group h-full flex flex-col">
                              <div className="h-48 relative overflow-hidden">
                                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
                                  <div className="absolute inset-0 bg-brand-structural-navy/20 mix-blend-multiply" />
                                  <div className="absolute bottom-4 left-4 right-4 text-white">
                                      <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-1 drop-shadow-md">Emotional Expressions</div>
                                      <h4 className="text-lg font-bold drop-shadow-md">Decoding Behavior</h4>
                                  </div>
                              </div>
                              <div className="p-6 md:p-8 flex-1 flex flex-col">
                                  <Text size="sm" className="text-brand-secondary-text mb-6">
                                      School counsellors must learn to understand what behaviors may be expressing emotionally, how emotional regulation develops, and how environmental stress appears behaviorally.
                                  </Text>
                                  <div className="bg-brand-warm-white p-5 rounded-2xl border border-brand-soft-neutral/50 mt-auto">
                                      <p className="text-sm font-bold text-brand-structural-navy uppercase tracking-widest mb-3 border-b border-brand-soft-neutral/30 pb-2">Practitioner Observation</p>
                                      <p className="text-base text-brand-secondary-text leading-relaxed font-medium">
                                          A student repeatedly disrupting class may not simply be "difficult." Developmentally, this may involve social insecurity, fear-based avoidance, or attention-seeking rooted in emotional neglect.
                                      </p>
                                  </div>
                              </div>
                         </div>
                     </div>

                     <div className="md:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-brand-soft-neutral/50 shadow-sm relative">
                          <Heading level={4} className="text-brand-structural-navy mb-2 text-center">What Might This Behavior Be Communicating?</Heading>
                          <Text size="sm" className="text-brand-secondary-text text-center mb-8">Select a behavior to explore deeper developmental interpretations.</Text>
                          
                          <div className="flex flex-col gap-3 mb-8">
                              {behaviors.map((behavior) => (
                                  <div key={behavior.id} className="flex flex-col">
                                    <button
                                        onClick={() => setSelectedBehavior(selectedBehavior === behavior.id ? null : behavior.id)}
                                        aria-expanded={selectedBehavior === behavior.id}
                                        className={cn("px-4 py-3 rounded-xl border text-left transition-all duration-300 flex items-center justify-between text-base font-medium w-full relative z-10", 
                                            selectedBehavior === behavior.id 
                                            ? "bg-brand-structural-navy border-brand-structural-navy text-white shadow-md rounded-b-none" 
                                            : "bg-brand-warm-white border-brand-soft-neutral hover:border-brand-soft-teal hover:bg-white"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <behavior.icon className={cn("w-4 h-4 shrink-0", selectedBehavior === behavior.id ? "text-brand-soft-teal" : "text-brand-secondary-text")} />
                                            <span>{behavior.text}</span>
                                        </div>
                                        <ArrowRight className={cn("w-4 h-4 transition-transform", selectedBehavior === behavior.id ? "rotate-90 text-brand-soft-teal" : "text-brand-secondary-text/50")} />
                                    </button>
                                    <div className={cn("overflow-hidden transition-all duration-500 bg-brand-soft-teal/5 border-x border-b border-brand-soft-teal/20 rounded-b-xl relative z-0 origin-top", selectedBehavior === behavior.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0 border-transparent")}>
                                          <div className="p-4 text-base text-brand-structural-navy leading-relaxed">
                                              {behavior.interpretation}
                                          </div>
                                    </div>
                                  </div>
                              ))}
                          </div>
                     </div>
                </div>
            </Section>

            {/* 4. IDENTITY FORMATION */}
            <Section className="border-b border-brand-soft-neutral/30 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-warm-white via-white/80 to-transparent pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
                    <div className="order-2 md:order-1 relative">
                         <div className="absolute inset-0 bg-brand-soft-teal/5 blur-3xl rounded-full" />
                         <div className="bg-white rounded-3xl p-8 border border-brand-soft-neutral/50 shadow-lg relative z-10 flex flex-col items-center max-w-sm mx-auto">
                              <div className="text-xs font-bold uppercase tracking-widest text-brand-structural-navy mb-8 border-b border-brand-soft-neutral/30 pb-4 w-full text-center">
                                  Identity Formation During School Years
                              </div>
                              
                              <div className="w-full relative py-4">
                                  <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-soft-teal/30 via-brand-structural-navy to-brand-soft-teal" />
                                  
                                  {[
                                      { title: "Experiences", active: false },
                                      { title: "Emotional Interpretation", active: false },
                                      { title: "Self-Belief Formation", active: false },
                                      { title: "Identity Development", active: true },
                                      { title: "Behavioral & Emotional Patterns", active: false, isLast: true }
                                  ].map((step, i) => (
                                      <div key={i} className={cn("relative z-10 flex items-center gap-6", !step.isLast && "mb-8")}>
                                          <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0 shadow-sm ml-3 bg-white border-2 transition-transform hover:scale-110", 
                                              step.active ? "border-brand-structural-navy ring-4 ring-brand-soft-teal/20" : "border-brand-soft-teal"
                                          )}>
                                              <div className={cn("w-2 h-2 rounded-full", step.active ? "bg-brand-structural-navy" : "bg-brand-soft-teal/50")} />
                                          </div>
                                          <div className={cn("p-4 w-full text-left rounded-xl text-base font-semibold border shadow-sm transition-transform hover:-translate-y-1",
                                              step.active ? "bg-brand-structural-navy text-white border-brand-structural-navy" : "bg-white text-brand-structural-navy border-brand-soft-neutral/50"
                                          )}>
                                              {step.title}
                                          </div>
                                      </div>
                                  ))}
                              </div>
                         </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">Core Development</div>
                        <Heading level={2} className="text-brand-structural-navy mb-6">
                            School years are deeply connected to identity, self-worth, and belonging.
                        </Heading>
                        <Text size="base" className="text-brand-secondary-text mb-6">
                            Children and adolescents are not only learning academically. They are forming self-concept, social identity, relational expectations, and internal narratives about themselves.
                        </Text>
                        
                        <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50 mb-6">
                            <Text size="sm" className="font-semibold text-brand-structural-navy mb-2">
                                At this stage of life, even seemingly “small” experiences hold deep emotional meaning.
                            </Text>
                            <Text size="sm" className="text-brand-secondary-text">
                                They influence confidence, emotional regulation, social trust, and long-term psychological development.
                            </Text>
                        </div>

                        <div className="space-y-3">
                            <div className="text-sm font-bold uppercase tracking-widest text-brand-structural-navy mb-2">Areas of Support:</div>
                            <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm md:text-base font-medium text-brand-secondary-text">
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal shrink-0" /> Identity confusion</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal shrink-0" /> Social rejection</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal shrink-0" /> Performance pressure</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal shrink-0" /> Developmental transition</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal shrink-0" /> Peer comparison</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-brand-soft-teal shrink-0" /> Fear of inadequacy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. FAMILY & SYSTEMS & 6. SUPPORTING DEVELOPMENT */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                     <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-4">Interconnected Systems</div>
                     <Heading level={2} className="text-brand-structural-navy mb-6">Students develop within interconnected emotional and environmental systems.</Heading>
                     <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto">
                         A student’s experience is rarely shaped by one factor alone. Meaningful school counselling requires contextual sensitivity and relational thinking.
                     </Text>
                </div>

                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
                     <div className="bg-brand-warm-white rounded-3xl p-8 md:p-10 border border-brand-soft-neutral/50 shadow-sm relative group overflow-hidden">
                          <Network className="w-8 h-8 text-brand-soft-teal mb-6" />
                          <Heading level={4} className="text-brand-structural-navy mb-4">The Layered Environment</Heading>
                          <Text size="sm" className="text-brand-secondary-text mb-6">
                              A student's emotional withdrawal may involve peer exclusion at school, emotional invalidation at home, and academic pressure simultaneously. Interventions must be systems-aware.
                          </Text>
                          <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 shadow-sm relative z-10 flex flex-col gap-2">
                              <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-2 px-2 text-center">Student at the Center</div>
                              
                              <div className="relative flex flex-col items-center justify-center my-6 h-64 w-full">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                      <div className="w-[240px] h-[240px] rounded-full border border-dashed border-brand-soft-teal/40 animate-[spin_60s_linear_infinite]" />
                                      <div className="absolute w-[180px] h-[180px] rounded-full border border-solid border-brand-soft-neutral/30" />
                                      <div className="absolute w-[130px] h-[130px] rounded-full border border-dashed border-brand-soft-teal/60" />
                                  </div>

                                  <div className="absolute top-0 md:top-2 left-1/2 -translate-x-1/2 text-xs md:text-xs font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-brand-structural-navy border border-brand-soft-teal/30 shadow-sm whitespace-nowrap z-30 transition-transform hover:scale-105">Family System</div>
                                  <div className="absolute bottom-0 md:bottom-2 left-1/2 -translate-x-1/2 text-xs md:text-xs font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-brand-structural-navy border border-brand-soft-teal/30 shadow-sm whitespace-nowrap z-30 transition-transform hover:scale-105">Academic Expectations</div>
                                  <div className="absolute left-[-10px] md:left-0 top-1/2 -translate-y-1/2 text-xs md:text-xs font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-brand-structural-navy border border-brand-soft-teal/30 shadow-sm whitespace-nowrap z-30 transition-transform hover:scale-105">Peer Relationships</div>
                                  <div className="absolute right-[-10px] md:right-0 top-1/2 -translate-y-1/2 text-xs md:text-xs font-bold bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-brand-structural-navy border border-brand-soft-teal/30 shadow-sm whitespace-nowrap z-30 transition-transform hover:scale-105">School Culture</div>
                                  
                                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-soft-teal/10 border-2 border-brand-soft-teal text-brand-structural-navy flex items-center justify-center relative z-20 shadow-md transform hover:scale-110 transition-transform cursor-default bg-white/50 backdrop-blur-sm">
                                      <span className="text-xs md:text-sm font-bold text-center leading-tight">Student<br/>Experience</span>
                                  </div>
                              </div>
                          </div>
                     </div>

                     <div className="bg-brand-structural-navy rounded-3xl p-8 md:p-10 border border-[#112635] shadow-md relative text-white group overflow-hidden">
                          <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-soft-teal/10 rounded-tl-[100px] blur-[80px]" />
                          <Heart className="w-8 h-8 text-brand-soft-teal mb-6" />
                          <Heading level={4} className="text-white mb-4">Gradual Emotional Development</Heading>
                          <Text size="sm" className="text-white/80 mb-6 relative z-10">
                              School counselling is not only about solving problems — it is about supporting healthy emotional development. Developmental support is rarely about forcing quick behavioral change.
                          </Text>
                          <div className="bg-[#112635]/50 border border-white/10 rounded-2xl p-5 mb-6 relative z-10">
                              <p className="text-xs uppercase font-bold text-brand-soft-teal mb-2">Case Assumption Shift</p>
                              <p className="text-base font-semibold text-white mb-1">"The Quiet Student"</p>
                              <p className="text-sm text-white/70 italic">Instead of "encouraging participation," deeper understanding shifts the focus to "building emotional safety and relational support."</p>
                          </div>
                     </div>
                </div>
            </Section>

            {/* 7. RESPONSIBILITY & 8. EVOLUTION */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
                     
                     <div className="lg:col-span-5 relative space-y-6">
                         <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-4">Practitioner Depth</div>
                         <Heading level={2} className="text-brand-structural-navy mb-6">
                             Working with youth requires developmental responsibility.
                         </Heading>
                         <Text size="base" className="text-brand-secondary-text mb-8">
                             Practitioners must balance support and structure, guidance and autonomy, emotional validation and developmental challenge.
                         </Text>
                         
                         <div className="bg-white rounded-2xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden h-full flex flex-col">
                             <div className="h-32 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center shrink-0" />
                             <div className="absolute top-0 inset-x-0 h-32 bg-brand-structural-navy/20 mix-blend-multiply" />
                             <div className="p-6 md:p-8 flex-1">
                                 <Heading level={4} className="text-brand-structural-navy mb-4">School Counselling Specialists Can:</Heading>
                                 <ul className="space-y-3">
                                     {[
                                         "Understand emotional meaning beneath behavior",
                                         "Recognize developmental transitions sensitively",
                                         "Support emotional regulation development",
                                         "Navigate family-school-student dynamics",
                                         "Create emotionally safe relational environments"
                                     ].map((item, i) => (
                                         <li key={i} className="flex items-start gap-3 text-base font-medium text-brand-secondary-text leading-tight">
                                             <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> {item}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                         </div>
                     </div>

                     <div className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-12 border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden">
                          <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-brand-warm-white to-transparent pointer-events-none" />
                          
                          <Heading level={3} className="text-brand-structural-navy mb-2 text-center md:text-left relative z-10">Practitioner Evolution</Heading>
                          <Text size="sm" className="text-brand-secondary-text mb-10 text-center md:text-left max-w-md relative z-10">
                              Instead of asking: <span className="font-semibold text-brand-structural-navy">"How do I stop this behavior?"</span> they increasingly ask: <span className="font-semibold text-brand-structural-navy">"What developmental or emotional experience is this behavior expressing?"</span>
                          </Text>

                          <div className="relative z-10 hidden md:block">
                              <div className="absolute top-[28px] bottom-[28px] left-[24px] w-1 bg-brand-soft-neutral/30 rounded-full" />
                              <div className="absolute top-[28px] left-[24px] w-1 bg-gradient-to-b from-brand-soft-teal/20 via-brand-soft-teal to-brand-structural-navy h-[80%] rounded-full" />
                              
                              <div className="space-y-8 relative">
                                  {[
                                      { title: "Behavior Management", desc: "Focusing on visible student problems and classroom interventions." },
                                      { title: "Emotional Observation", desc: "Noticing emotional incidents beyond rule-breaking." },
                                      { title: "Developmental Understanding", desc: "Recognizing patterns tied to age and transition." },
                                      { title: "Relational & Environmental Awareness", desc: "Factoring in peer and family systems." },
                                      { title: "Student-Centered Support", desc: "Emotionally effective, developmentally appropriate guidance.", isLast: true }
                                  ].map((step, i) => (
                                      <div key={i} className={cn("flex items-start gap-6 transition-all duration-300", step.isLast ? "transform scale-[1.02] translate-x-2" : "")}>
                                          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm relative z-10", step.isLast ? "bg-brand-structural-navy border-4 border-brand-soft-teal/20 text-white" : "bg-white border-2 border-brand-soft-neutral/50 text-brand-soft-teal")}>
                                              <ArrowRight className={cn("w-5 h-5", step.isLast ? "rotate-90 text-brand-soft-teal" : "rotate-90 text-brand-soft-neutral")} />
                                          </div>
                                          <div className="pt-2">
                                              <h5 className={cn("text-base font-bold tracking-tight mb-1", step.isLast ? "text-brand-structural-navy text-base" : "text-brand-structural-navy/80")}>{step.title}</h5>
                                              <p className={cn("text-sm", step.isLast ? "text-brand-secondary-text font-medium" : "text-brand-secondary-text/70")}>{step.desc}</p>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          </div>
                     </div>
                </div>
            </Section>

            {/* 9. LONG-TERM IMPACT & VIDEO */}
            <Section className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto px-4 text-center mb-16">
                    <Heading level={2} className="text-brand-structural-navy mb-6">
                        Meaningful school counselling can influence not only immediate wellbeing — but long-term emotional development.
                    </Heading>
                    <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto">
                        For many practitioners, this becomes one of the most meaningful aspects of the work: supporting emotional growth during the most formative stages of life.
                    </Text>
                </div>

                {/* Video Clip Placeholder */}
                <div className="max-w-4xl mx-auto px-4">
                    <button aria-label="Play video: Why Student Behavior Reflects More Than What Is Visible" className="w-full text-left outline-none focus-visible:ring-4 focus-visible:ring-brand-soft-teal bg-brand-structural-navy rounded-3xl overflow-hidden relative group cursor-pointer border border-[#112635] shadow-2xl aspect-video md:aspect-[21/9]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#112635] via-brand-structural-navy/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-brand-soft-teal/20 backdrop-blur-sm border border-brand-soft-teal/50 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-soft-teal/30 group-hover:scale-110 shadow-lg">
                                <Play className="w-8 h-8 text-white pl-1" fill="currentColor" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between opacity-90">
                            <div className="text-left">
                                <div className="text-xs uppercase tracking-widest text-brand-soft-teal font-bold mb-1">Practitioner Reflection</div>
                                <div className="text-white text-base md:text-lg font-medium leading-snug max-w-lg">Why Student Behavior Often Reflects More Than What Is Visible</div>
                            </div>
                            <div className="text-white/60 text-base font-mono bg-[#112635]/80 px-3 py-1 rounded-full backdrop-blur-md hidden md:block">04:18</div>
                        </div>
                    </button>
                </div>
            </Section>

            {/* 10. IS THIS PATHWAY RIGHT FOR YOU? & 11. NEXT STEPS */}
            <Section theme="tint" className="pb-32 relative">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start mt-8">
                     
                     <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-soft-neutral/50 shadow-sm relative h-full">
                          <Heading level={3} className="text-brand-structural-navy mb-6">Is this pathway right for you?</Heading>
                          <Text size="sm" className="text-brand-secondary-text mb-6">
                              This specialization may resonate strongly if you feel drawn toward emotionally sensitive work with youth, and:
                          </Text>
                          <ul className="space-y-4 text-base font-medium text-brand-secondary-text">
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Want to understand behavior more deeply beyond surface interventions.</li>
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Value developmental sensitivity and identity formation.</li>
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Feel comfortable with nuanced and gradual emotional progress.</li>
                              <li className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> Are interested in supporting long-term psychological growth responsibly.</li>
                          </ul>
                     </div>

                     <div className="space-y-8 flex flex-col justify-center h-full">
                          <div className="text-center md:text-left">
                              <Heading level={2} className="text-brand-structural-navy mb-4">
                                  School counselling is about understanding how youth grow.
                              </Heading>
                              <Text size="sm" className="text-brand-secondary-text mb-8">
                                  For practitioners drawn toward this depth, school counselling often becomes emotionally meaningful, developmentally impactful, and professionally defining work.
                              </Text>

                              <div className="flex flex-col gap-4">
                                  <Button variant="primary" className="justify-center w-full md:w-auto">
                                      Explore School Counselling Specialization
                                  </Button>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <a href="#prospectus-success-school" className="flex items-center justify-center p-3 rounded-xl border border-brand-soft-neutral hover:border-brand-soft-teal text-base font-semibold text-brand-structural-navy bg-white transition-colors">
                                          Download Prospectus
                                      </a>
                                      <a href="#specialization-hub" className="flex items-center justify-center p-3 rounded-xl border border-brand-soft-neutral hover:border-brand-soft-teal text-base font-semibold text-brand-structural-navy bg-white transition-colors">
                                          Explore Other Pathways
                                      </a>
                                  </div>
                              </div>
                              <div className="mt-8">
                                  <a href="#start" className="inline-flex items-center gap-2 text-base font-semibold text-brand-structural-navy hover:text-brand-soft-teal transition-colors">
                                      <MessageSquare className="w-4 h-4" /> Book a Developmental Clarity Conversation
                                  </a>
                              </div>
                          </div>
                          
                          {/* Internal Links Block */}
                          <div className="pt-8 border-t border-brand-soft-neutral/30 mt-auto">
                               <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary-text mb-4">Ecosystem Progression</div>
                               <div className="flex flex-wrap gap-2">
                                     <a href="#chp" className="px-3 py-1.5 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-lg text-sm font-medium text-brand-structural-navy hover:border-brand-soft-teal transition-colors">CHP (Deeper Psychotherapy)</a>
                                     <a href="#chc" className="px-3 py-1.5 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-lg text-sm font-medium text-brand-structural-navy hover:border-brand-soft-teal transition-colors">CHC (Coaching Foundations)</a>
                                     <a href="#cohorts" className="px-3 py-1.5 bg-brand-warm-white border border-brand-soft-neutral/50 rounded-lg text-sm font-medium text-brand-structural-navy hover:border-brand-soft-teal transition-colors">Reflective Cohorts</a>
                               </div>
                          </div>
                     </div>

                </div>
            </Section>
        </div>
    );
};
