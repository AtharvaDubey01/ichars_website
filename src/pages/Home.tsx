import { useState } from 'react';
import React from 'react';
import { Section, Heading, Text, Button, Grid, Card } from '../components/Blocks';
import { ArrowRight, MoveRight, CheckCircle2, BookOpen, Users, Compass, Layers, LayoutGrid, Sparkles, BrainCircuit, Mic, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { ConceptMapGraphic } from '../components/ConceptMapGraphic';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { InteractiveStepper } from '../components/InteractiveStepper';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { VideoTestimonialGrid } from '../components/VideoTestimonialGrid';
import { CheckList } from '../components/CheckList';

import { HeroStacked } from '../components/HeroStacked';

// FadeIn already exists, we will use it below where needed
const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export function Home() {
  const [activePath, setActivePath] = useState<'student' | 'coach' | 'therapist' | 'unsure'>('student');

  return (
    <>
      <HeroStacked />

      {/* SECTION 2 - THE CORE SHIFT */}
      <Section theme="white" id="shift">
        <FadeIn>
         <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-accent text-5xl md:text-6xl text-brand-deep-teal mb-6">The shift begins when the question changes</h2>
            <Text size="lg" className="text-brand-secondary-text max-w-2xl mx-auto">Many practitioners initially focus on "What technique should I use?", "What should I say next?", or "Which model fits this situation?" Over time, deeper practitioner development begins shifting this focus.</Text>
         </div>
        </FadeIn>

         <FadeIn delay={0.05} className="mt-12 max-w-3xl mx-auto mb-16">
            <VideoPlaceholder title="Watch: The Practitioner Evolution" duration="4:20" />
         </FadeIn>

         {/* COMPARISON BLOCK */}
         <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-8 items-stretch">
            <FadeIn delay={0.1} className="h-full">
             <div className="h-full bg-brand-warm-white p-10 lg:p-14 rounded-2xl border border-brand-soft-neutral flex flex-col group hover:shadow-md hover:border-brand-soft-teal/30 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-brand-secondary-text group-hover:scale-110 group-hover:text-brand-deep-teal transition-all duration-300">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <div className="font-heading font-semibold text-brand-primary-text mb-8 tracking-wide uppercase text-base border-b border-brand-soft-neutral pb-4">Reactive Technique Thinking</div>
                <div className="space-y-6 text-brand-secondary-text flex-1">
                    <p className="text-xl font-medium text-brand-primary-text mb-8 tracking-tight">"What technique should I use?"</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3"><span className="text-brand-soft-teal/50">—</span> Reacting to symptoms</li>
                      <li className="flex items-center gap-3"><span className="text-brand-soft-teal/50">—</span> Memorizing interventions</li>
                      <li className="flex items-center gap-3"><span className="text-brand-soft-teal/50">—</span> Immediate reaction</li>
                      <li className="flex items-center gap-3"><span className="text-brand-soft-teal/50">—</span> Surface-level focus</li>
                    </ul>
                </div>
             </div>
            </FadeIn>

            <FadeIn delay={0.2} className="h-full">
             <div className="h-full bg-brand-reflective-tint p-10 lg:p-14 rounded-2xl border border-brand-soft-teal/30 shadow-lg shadow-brand-soft-teal/10 flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-brand-soft-teal/20 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-8 text-brand-soft-teal/20 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-32 h-32" />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-brand-deep-teal rounded-full flex items-center justify-center mb-6 shadow-sm text-white group-hover:scale-110 group-hover:bg-brand-structural-depth transition-all duration-300">
                    <Layers className="w-6 h-6" />
                  </div>
                  <div className="font-heading font-semibold text-brand-deep-teal mb-8 tracking-wide uppercase text-base border-b border-brand-soft-teal/30 pb-4">Structured Practitioner Thinking</div>
                  <div className="space-y-6 text-brand-deep-teal font-medium flex-1">
                      <p className="text-xl font-medium text-brand-structural-depth mb-8 tracking-tight">"What is maintaining this pattern?"</p>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-soft-teal" /> Understanding structures</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-soft-teal" /> Recognizing patterns</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-soft-teal" /> Intentional decision-making</li>
                        <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-soft-teal" /> Layered understanding</li>
                      </ul>
                  </div>
                </div>
             </div>
            </FadeIn>
         </div>

         <FadeIn delay={0.3} className="mt-16 text-center">
            <h3 className="text-2xl font-medium text-brand-primary-text mb-8">Because once sessions become more structurally understandable:</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-brand-secondary-text">
              <span className="px-6 py-3 bg-white rounded-full shadow-sm border border-brand-soft-neutral">Decisions become clearer</span>
              <span className="px-6 py-3 bg-white rounded-full shadow-sm border border-brand-soft-neutral">Interventions become intentional</span>
              <span className="px-6 py-3 bg-white rounded-full shadow-sm border border-brand-soft-neutral">Complexity feels navigable</span>
              <span className="px-6 py-3 bg-white rounded-full shadow-sm border border-brand-soft-neutral">Confidence develops naturally</span>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" href="#layered-patterns" className="rounded-full">Understanding Layered Human Patterns</Button>
              <Button variant="outline" href="#structured-thinking" className="rounded-full">Structured Therapeutic Thinking</Button>
            </div>
         </FadeIn>
      </Section>

      {/* SECTION 3 - HOW THE ECOSYSTEM WORKS */}
      <Section theme="neutral" id="ecosystem" className="border-t border-brand-soft-neutral">
         <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-accent text-5xl md:text-6xl text-brand-deep-teal mb-6">A progressive ecosystem for practitioner development</h2>
            <Text size="lg" className="mb-6">ICHARS is not designed as a collection of disconnected courses. It is built as a developmental ecosystem that supports practitioners progressively.</Text>
         </div>

         {/* ECOSYSTEM MAP VISUAL - INTERACTIVE STEPPER */}
         <FadeIn delay={0.1}>
            <InteractiveStepper 
               steps={[
                  { 
                    title: "Foundational Understanding", 
                    desc: "For those starting out or needing foundational clarity before engaging with complex client issues.", 
                    details: ["Basic framework introduction", "Conceptual mapping", "Theoretical alignment"] 
                  },
                  { 
                    title: "Applied Learning", 
                    desc: "Bridging theory with real practice. Learning how concepts show up in actual sessions.", 
                    details: ["Case study breakdowns", "Application of frameworks", "Skill building exercises"] 
                  },
                  { 
                    title: "Practitioner Development", 
                    desc: "Deeper transformational capability. Where you refine your structured thinking and session flow.", 
                    details: ["Advanced framework integration", "Pattern recognition skills", "Overcoming session roadblocks"] 
                  },
                  { 
                    title: "Guided Refinement", 
                    desc: "Integrating through cohort reflection and peer feedback to shape your unique practitioner identity.", 
                    details: ["Live peer reviews", "Group mentoring sessions", "Real-world troubleshooting"] 
                  },
                  { 
                    title: "Specialization", 
                    desc: "Focused domains (e.g., Couples, School, Corporate) applying structured thinking to specific niches.", 
                    details: ["Niche-specific methodologies", "Adapting core models", "Targeted competence building"] 
                  }
               ]} 
               className="mb-16"
            />
         </FadeIn>

         <FadeIn delay={0.2} className="bg-white p-8 md:p-12 rounded-2xl border border-brand-soft-neutral shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-base font-heading font-medium tracking-widest uppercase text-brand-secondary-text mb-6">Designed To Support</div>
              <CheckList 
                 items={[
                   "Progressive growth over time",
                   "Flexible movement between Programs & Cohorts",
                   "Multiple valid progression paths",
                   "Evolving practitioner identity"
                 ]}
                 itemClassName="items-center text-brand-primary-text text-base"
              />
            </div>
            <div className="bg-brand-deep-teal p-8 rounded-xl text-white">
                <BrainCircuit className="w-8 h-8 text-brand-soft-teal mb-6" />
                <h4 className="text-xl font-medium mb-4">Different practitioners begin at different stages</h4>
                <p className="text-brand-reflective-tint text-base leading-relaxed mb-6">
                  Some need stronger foundations and practical application. Others need deeper therapeutic understanding, integrative thinking, and advanced practitioner capability.
                </p>
                <Button variant="secondary" href="#programs" className="w-full text-base">Explore the Programs Ecosystem</Button>
            </div>
         </FadeIn>
      </Section>

      {/* SECTION 4 - DEVELOP YOUR PATHWAY */}
      <Section theme="white" className="border-t border-brand-soft-neutral">
          <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="font-accent text-5xl md:text-6xl text-brand-deep-teal mb-6">Where are you right now?</h2>
              <Text size="lg" className="text-brand-secondary-text mb-6">
                Development is not one-size-fits-all. Your next step depends on the foundation you've already built. Whether you are a student, coach, or seasoned therapist, select your current stage to see how the ecosystem supports your evolution.
              </Text>
          </div>

          <FadeIn>
            <div className="flex justify-center mb-16">
               <Button variant="secondary" href="#start" className="px-8 py-4 text-lg w-full sm:w-auto">
                  Find Your Starting Point
               </Button>
            </div>
          </FadeIn>
      </Section>

      {/* SECTION 5 - PROGRAMS & COHORTS */}
      <Section theme="neutral" id="formats" className="border-t border-brand-soft-neutral">
          <div className="max-w-3xl mb-16 mx-auto text-center">
             <h2 className="font-accent text-5xl md:text-6xl text-brand-deep-teal mb-6">Choose how you learn best</h2>
             <Text size="lg" className="mb-6 text-brand-secondary-text">
               The ICHARS ecosystem is delivered through two primary environments, designed for different learning styles and commitments. These are not "higher" and "lower" pathways, but parallel spaces you can move between over time.
             </Text>
          </div>

          <FadeIn>
            <Grid cols={2} className="mb-12 max-w-5xl mx-auto">
                {/* Programs Card */}
                <div className="bg-white rounded-3xl p-10 md:p-14 border border-brand-soft-neutral shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-soft-teal/40 transition-all duration-300 flex flex-col h-full group">
                    <div className="flex-1">
                        <Heading level={3} className="text-brand-deep-teal mb-4 text-3xl">Programs</Heading>
                        <div className="inline-flex items-center rounded-full bg-brand-warm-white px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-secondary-text mb-10 border border-brand-soft-neutral">
                          Flexible • Independent • Reflection
                        </div>
                        
                        <div className="mb-6 font-semibold tracking-wide text-base text-brand-primary-text">IDEAL FOR PRACTITIONERS WHO PREFER:</div>
                        <CheckList 
                             items={[
                                 { content: <><span className="font-medium text-brand-primary-text">Flexibility</span> in scheduling</>, className: "border-b border-brand-soft-neutral/50 pb-4" },
                                 { content: <><span className="font-medium text-brand-primary-text">Independent progression</span> at own pace</>, className: "border-b border-brand-soft-neutral/50 pb-4" },
                                 { content: <><span className="font-medium text-brand-primary-text">Reflective learning</span> over group discussion</>, className: "border-b border-brand-soft-neutral/50 pb-4" },
                                 { content: <><span className="font-medium text-brand-primary-text">Autonomous integration</span></>, className: "" }
                             ]}
                             className="space-y-5 mb-12"
                             itemClassName="items-center"
                        />
                    </div>
                    <Button variant="outline" href="#programs" className="w-full justify-between group-hover:bg-brand-deep-teal group-hover:text-white transition-all duration-300">
                        Explore Programs <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Cohorts Card */}
                <div className="bg-brand-structural-depth rounded-3xl text-white p-10 md:p-14 shadow-xl relative overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(20,44,57,0.4)] hover:-translate-y-1">
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-soft-teal opacity-10 rounded-full blur-3xl group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"></div>
                    <div className="relative z-10 flex-1">
                        <Heading level={3} className="mb-4 text-3xl text-white">Cohorts</Heading>
                        <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-reflective-tint mb-10 border border-white/20">
                          Guided • Interactive • Applied
                        </div>
                        
                        <div className="mb-6 font-semibold tracking-wide text-base text-white/90">IDEAL FOR PRACTITIONERS WHO BENEFIT FROM:</div>
                        <CheckList 
                             items={[
                                 { content: <><span className="font-medium text-white">Discussion</span> and real-time interaction</>, className: "border-b border-white/10 pb-4" },
                                 { content: <><span className="font-medium text-white">Collaborative learning</span> with peers</>, className: "border-b border-white/10 pb-4" },
                                 { content: <><span className="font-medium text-white">Structured accountability</span> and pacing</>, className: "border-b border-white/10 pb-4" },
                                 { content: <><span className="font-medium text-white">Guided application</span> in a safe setting</>, className: "" }
                             ]}
                             className="space-y-5 mb-12"
                             itemClassName="items-center text-white/80"
                        />
                    </div>
                    <Button variant="secondary" href="#cohorts" className="w-full relative z-10 justify-between group-hover:bg-white transition-colors text-brand-structural-navy">
                        Explore Cohorts <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </Grid>
          </FadeIn>
      </Section>

      {/* SECTION 6 - PRACTITIONER IMPACT */}
      <Section theme="white" id="impact" className="border-t border-brand-soft-neutral">
           <FadeIn>
             <div className="text-center mb-20 max-w-3xl mx-auto">
                <h2 className="font-accent text-5xl md:text-6xl text-brand-deep-teal mb-6">Built through real practitioner development</h2>
             </div>
           </FadeIn>

           <FadeIn delay={0.1}>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-24 max-w-5xl mx-auto">
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center p-4 sm:p-6 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral cursor-default shadow-sm hover:shadow-md transition-shadow justify-center">
                   <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-brand-deep-teal mb-2">14+</div>
                   <div className="text-brand-secondary-text text-xs sm:text-sm lg:text-base uppercase tracking-wider font-semibold">Years Experience</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center p-4 sm:p-6 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral cursor-default shadow-sm hover:shadow-md transition-shadow justify-center">
                   <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-brand-deep-teal mb-2">2,000+</div>
                   <div className="text-brand-secondary-text text-xs sm:text-sm lg:text-base uppercase tracking-wider font-semibold">Practitioners Trained</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center p-4 sm:p-6 bg-brand-warm-white rounded-2xl border border-brand-soft-neutral cursor-default shadow-sm hover:shadow-md transition-shadow justify-center">
                   <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-brand-deep-teal mb-2 truncate max-w-full">400k+</div>
                   <div className="text-brand-secondary-text text-xs sm:text-sm lg:text-base uppercase tracking-wider font-semibold">Lives Impacted</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center p-4 sm:p-6 bg-brand-deep-teal rounded-2xl border border-brand-deep-teal text-white shadow-lg cursor-default justify-center">
                   <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-brand-soft-teal mb-2">Global</div>
                   <div className="text-brand-reflective-tint text-xs sm:text-sm lg:text-base uppercase tracking-wider font-semibold">Community</div>
                </motion.div>
             </div>
           </FadeIn>

           <div className="max-w-5xl mx-auto relative pt-16">
               <Heading level={4} className="text-center mb-12 text-brand-secondary-text uppercase tracking-widest text-base">Practitioner Voices</Heading>
               
               <FadeIn delay={0.1}>
                 <VideoTestimonialGrid 
                   className="mb-16"
                   testimonials={[
                     {
                       thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
                       name: "Sarah Jenkins",
                       role: "Psychotherapist",
                       quote: "Sessions started making more sense instead of feeling random. I finally felt like I had a map for my sessions."
                     },
                     {
                       thumbnailUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
                       name: "Dr. Michael Chen",
                       role: "Executive Coach",
                       quote: "The biggest shift was understanding what to focus on during complex conversations without feeling overwhelmed."
                     },
                     {
                       thumbnailUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
                       name: "Riya Sharma",
                       role: "Psychology Student",
                       quote: "I stopped depending completely on techniques and started understanding patterns more clearly."
                     }
                   ]}
                 />
               </FadeIn>
               
               <div className="text-center mt-12">
                 <Button variant="text" href="#journeys" className="text-lg font-semibold tracking-wide">Explore Practitioner Journeys</Button>
               </div>
           </div>
      </Section>

      {/* SECTION 7 - CONTINUOUS LEARNING & RESOURCES */}
      <Section theme="neutral" id="resources" className="border-t border-brand-soft-neutral">
          <div className="max-w-4xl mx-auto text-center mb-16">
              <FadeIn>
                  <h2 className="font-accent text-4xl md:text-5xl text-brand-deep-teal mb-6">Continuous Learning & Insights</h2>
                  <Text size="lg" className="mb-6">
                      Meaningful practitioner development doesn't only happen in courses. 
                      It happens through continuous engagement with new ideas, research, and reflections.
                  </Text>
              </FadeIn>
          </div>
          
          <FadeIn delay={0.1}>
              <Grid cols={3} className="max-w-6xl mx-auto gap-6 mb-12">
                  <Card className="text-center flex flex-col items-center bg-white border border-brand-soft-neutral hover:border-brand-soft-teal/50 hover:shadow-md transition-all duration-300 shadow-sm h-full hover:-translate-y-1">
                     <div className="bg-brand-soft-teal/10 w-12 h-12 rounded-full flex items-center justify-center text-brand-deep-teal mb-4">
                         <BookOpen className="w-5 h-5" />
                     </div>
                     <h3 className="font-heading font-medium text-lg text-brand-structural-navy mb-2">Empirical Research</h3>
                     <p className="text-base text-brand-secondary-text mb-4">Explore 100+ peer-reviewed papers on the efficacy of integrating therapeutic modalities.</p>
                  </Card>
                  <Card className="text-center flex flex-col items-center bg-white border border-brand-soft-neutral hover:border-brand-soft-teal/50 hover:shadow-md transition-all duration-300 shadow-sm h-full hover:-translate-y-1">
                     <div className="bg-[#FF0000]/10 w-12 h-12 rounded-full flex items-center justify-center text-[#FF0000] mb-4">
                        <Mic className="w-6 h-6" />
                     </div>
                     <h3 className="font-heading font-medium text-lg text-brand-structural-navy mb-2">Weekly Podcast</h3>
                     <p className="text-base text-brand-secondary-text mb-4">Deep-dive discussions on therapeutic strategies and complex case conceptualizations.</p>
                  </Card>
                  <Card className="text-center flex flex-col items-center bg-white border border-brand-soft-neutral hover:border-brand-soft-teal/50 hover:shadow-md transition-all duration-300 shadow-sm h-full hover:-translate-y-1">
                     <div className="bg-[#0A66C2]/10 w-12 h-12 rounded-full flex items-center justify-center text-[#0A66C2] mb-4">
                        <Linkedin className="w-6 h-6" />
                     </div>
                     <h3 className="font-heading font-medium text-lg text-brand-structural-navy mb-2">Professional Insights</h3>
                     <p className="text-base text-brand-secondary-text mb-4">Structured frameworks and practitioner reflections delivered to your LinkedIn feed weekly.</p>
                  </Card>
              </Grid>
              <div className="text-center">
                  <Button variant="outline" href="#blogs-and-resources" className="rounded-full">Explore the Resource Hub</Button>
              </div>
          </FadeIn>
      </Section>

      {/* SECTION 8 - FINAL CTA */}
      <Section theme="tint" id="cta">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-accent text-5xl md:text-6xl text-brand-deep-teal mb-8">You do not need complete certainty before you begin</h2>
              <Text size="xl" className="mb-12 max-w-3xl mx-auto text-brand-primary-text">
                Most meaningful practitioner journeys begin with <strong>curiosity, uncertainty, reflection, and the willingness to grow progressively.</strong>
              </Text>
            </FadeIn>
              
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
                 <div className="bg-white/60 p-10 rounded-2xl border border-brand-soft-teal/20">
                    <div className="font-heading font-semibold text-lg tracking-wide uppercase text-brand-secondary-text mb-6">You Do Not Need:</div>
                    <ul className="text-brand-secondary-text space-y-4 text-lg">
                       <li className="flex items-center gap-3"><span className="text-brand-soft-teal/60">—</span> every answer immediately</li>
                       <li className="flex items-center gap-3"><span className="text-brand-soft-teal/60">—</span> perfect confidence</li>
                       <li className="flex items-center gap-3"><span className="text-brand-soft-teal/60">—</span> your entire future planned out today</li>
                    </ul>
                 </div>
                 <div className="bg-white p-10 rounded-2xl border-2 border-brand-soft-teal shadow-[0_10px_40px_rgba(101,191,169,0.15)] md:-mt-4 md:mb-4 relative z-10 transform md:scale-105">
                    <div className="font-heading font-semibold text-lg tracking-wide uppercase text-brand-deep-teal mb-6">You Only Need:</div>
                    <CheckList 
                       items={[
                           "the right next step",
                           "the right developmental direction",
                           "a structure that supports your growth"
                       ]}
                       className="space-y-4"
                       itemClassName="items-center text-brand-deep-teal text-lg font-medium"
                    />
                 </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Text className="mb-12 italic text-xl max-w-3xl mx-auto text-brand-structural-navy">
                Because confidence develops progressively as understanding becomes clearer, patterns become easier to recognize, and complexity becomes more understandable.
              </Text>
            
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <a href="#start" className="inline-flex items-center justify-center bg-brand-deep-teal text-white font-medium px-10 py-5 hover:bg-brand-structural-depth transition-colors rounded-full text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transform duration-200">
                    Find Your Starting Point
                  </a>
                  <a href="#programs" className="inline-flex items-center justify-center border-2 border-brand-deep-teal text-brand-deep-teal font-medium px-10 py-5 hover:bg-brand-deep-teal hover:text-white transition-all rounded-full text-lg">
                    Explore the Ecosystem
                  </a>
              </div>
            </FadeIn>
          </div>
      </Section>
    </>
  );
}
