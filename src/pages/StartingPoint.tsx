import { useState } from 'react';
import { Section, Heading, Text, Button, Grid } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { CheckList } from '../components/CheckList';
import { 
    ArrowRight, CheckCircle2, GraduationCap, Users, UserCog, 
    HelpCircle, Layers, Workflow, Sparkles, ChevronLeft, RotateCcw 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

type WizardStage = 'student' | 'coach' | 'therapist' | 'unsure' | null;
type WizardEnv = 'independent' | 'cohort' | null;
type WizardGoal = string | null;

const stages = [
    { id: 'student', title: 'Psychology Student', icon: <GraduationCap className="w-6 h-6" />, desc: 'Building foundations and moving from theory to practice.' },
    { id: 'coach', title: 'Coach / Helping Professional', icon: <Users className="w-6 h-6" />, desc: 'Looking for deeper transformational capability.' },
    { id: 'therapist', title: 'Therapist / Psychologist / Health Professional', icon: <UserCog className="w-6 h-6" />, desc: 'Seeking greater structural clarity and flexibility.' },
    { id: 'unsure', title: 'Unsure / Exploring Directions', icon: <HelpCircle className="w-6 h-6" />, desc: 'Wanting guidance about where you currently fit.' }
];

const envOptions = [
    { id: 'independent', title: 'Flexible Programs', desc: 'I prefer learning with core online classes while keeping the flexibility to decide gaps between levels, without the commitment of mandatory additional Q&A or practice sessions.', icon: <Layers className="w-6 h-6" /> },
    { id: 'cohort', title: 'Guided Cohorts', desc: 'I benefit from structured guidance, interactive discussion, live case analysis, and collaborative feedback.', icon: <Users className="w-6 h-6" /> }
];

const goalOptions: Record<string, Record<string, { id: string, title: string, desc: string }[]>> = {
    student: {
        independent: [
            { id: 'internship', title: 'Free Internship', desc: 'Observe sessions and build foundational understanding without financial commitment.' },
            { id: 'level1', title: 'Practitioners Course (Level 1)', desc: 'Dive directly into learning the structured cognitive hypnotic framework.' }
        ],
        cohort: [
            { id: 'cohort-4', title: '4 Months Cohort', desc: 'Foundational guided application and practice.' },
            { id: 'cohort-8', title: '8 Months Cohort', desc: 'Advance Practitioner development and deeper understanding.' },
            { id: 'cohort-15', title: '15 Months Cohort', desc: 'Comprehensive mastery with extended supervision.' }
        ]
    },
    coach: {
        independent: [
            { id: 'level1', title: 'Practitioners Course (Level 1)', desc: 'Test the foundational framework and techniques first.' },
            { id: 'chc-dip', title: 'Complete CHC Diploma (Levels 1-2)', desc: 'Commit to full transformational coaching mastery.' },
            { id: 'chcp-dip', title: 'Complete CHCP Certification (Levels 1-4)', desc: 'The advanced flagship framework for deeper behavioral & emotional change.' }
        ],
        cohort: [
            { id: 'cohort-4', title: '4 Months Cohort', desc: 'Foundational guided application and practice.' },
            { id: 'cohort-8', title: '8 Months Cohort', desc: 'Advanced transformational coaching development.' }
        ]
    },
    therapist: {
        independent: [
            { id: 'eclectic', title: 'Independent Eclectic Psychotherapy Online Course', desc: 'A broad integrative framework to organize your existing clinical knowledge.' },
            { id: 'level1', title: 'Practitioners Course (Level 1)', desc: 'Test the foundational cognitive hypnotic framework first.' },
            { id: 'chc-dip', title: 'Complete CHC Diploma', desc: 'Focus specifically on coaching and transformational change.' },
            { id: 'chp-dip', title: 'Complete CHP Diploma', desc: 'Focus heavily on deep clinical psychotherapy and complex emotional cases.' }
        ],
        cohort: [
            { id: 'cohort-4', title: '4 Months Cohort', desc: 'Foundational guided application and practice.' },
            { id: 'cohort-8', title: '8 Months Cohort', desc: 'Advanced clinical practitioner development.' },
            { id: 'cohort-15', title: '15 Months Cohort', desc: 'Comprehensive clinical mastery with extended supervision.' }
        ]
    }
};

const resultMapping: Record<string, { title: string, link: string, description: string, envText: string }> = {
    'internship': { title: 'Free Internship', link: '#internship', description: 'Begin your journey with observation and fundamental concepts entirely risk-free.', envText: 'Flexible • Foundation' },
    'level1': { title: 'Practitioners Course (Level 1)', link: '#programs', description: 'Start learning the core cognitive hypnotic framework to see immediate shifts in your practice.', envText: 'Flexible • Foundational Certification' },
    'chc-dip': { title: 'Complete CHC Diploma', link: '#chc', description: 'A comprehensive pathway to becoming a highly effective transformational coach.', envText: 'Flexible • Complete Program' },
    'eclectic': { title: 'Eclectic Psychotherapy Course', link: '#programs', description: 'Organize your existing therapeutic knowledge into a clear, usable framework.', envText: 'Independent • Integrative Framework' },
    'chp-dip': { title: 'Complete CHP Diploma', link: '#chp', description: 'The ultimate integrative pathway for deep clinical psychotherapy.', envText: 'Flexible • Clinical Specialization' },
    'chcp-dip': { title: 'Complete CHCP Certification', link: '#chp', description: 'The comprehensive flagship framework for advanced behavioral and emotional change practitioner mastery.', envText: 'Flexible • Advanced Practitioner' },
    'cohort-4': { title: '4 Months Cohort', link: '#cohorts', description: 'Hands-on practice and guided application over 4 focused months.', envText: 'Interactive Cohort • Short Term' },
    'cohort-8': { title: '8 Months Cohort', link: '#cohorts', description: 'Deep dive into advanced structures and guided clinical application over 8 months.', envText: 'Interactive Cohort • Medium Term' },
    'cohort-15': { title: '15 Months Cohort', link: '#cohorts', description: 'Total mastery, including extensive supervised practice over 15 months.', envText: 'Interactive Cohort • Long Term' }
};

export function StartingPoint() {
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [wizardStage, setWizardStage] = useState<WizardStage>(null);
  const [wizardEnv, setWizardEnv] = useState<WizardEnv>(null);
  const [wizardGoal, setWizardGoal] = useState<WizardGoal>(null);

  const resetWizard = () => {
      setWizardStep(1);
      setWizardStage(null);
      setWizardEnv(null);
      setWizardGoal(null);
  };

  const getResult = () => {
      if (wizardStage === 'unsure' || !wizardGoal) {
          return {
              title: 'Book a Consultation',
              link: '#consultation',
              description: 'Since you are exploring or want guidance without feeling locked in, a 1-on-1 consultation is the best way to get personalized advice based on your current background and goals.',
              envText: null
          };
      }
      
      const res = resultMapping[wizardGoal];
      if (res) return res;

      return {
          title: 'Book a Consultation',
          link: '#consultation',
          description: 'A 1-on-1 consultation is the best way to get personalized advice based on your current background and goals.',
          envText: null
      };
  };

  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-warm-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_100%_0%,#65BFA9_0%,transparent_50%)]" />
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10 flex flex-col items-center">
          
          <FadeIn className="w-full max-w-4xl text-center">
            <Heading level={1} className="mb-6 text-brand-deep-teal text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
              Find Your Starting Point.
            </Heading>
          </FadeIn>
          
          <FadeIn delay={0.1} className="w-full max-w-3xl text-center mb-10">
            <Text size="xl" className="text-brand-secondary-text">
              You do not need to figure out your entire future right now. You only need to identify your next developmental step.
            </Text>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full max-w-4xl mb-16 flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-brand-primary-text text-[15px] md:text-base w-full">
                  <div className="flex flex-col gap-3 bg-white p-6 rounded-xl border border-brand-soft-neutral shadow-sm hover:shadow-md hover:border-brand-soft-teal/30 transition-all duration-300 group">
                      <div className="font-heading font-semibold text-brand-deep-teal group-hover:text-brand-soft-teal transition-colors">Some are looking for:</div>
                      <CheckList 
                         items={["stronger foundations", "more practical clarity", "better application"]}
                         iconClassName="w-4 h-4"
                         itemClassName="gap-2 text-brand-primary-text mb-0"
                         className="space-y-3"
                      />
                  </div>
                  <div className="flex flex-col gap-3 bg-white p-6 rounded-xl border border-brand-soft-neutral shadow-sm hover:shadow-md hover:border-brand-soft-teal/30 transition-all duration-300 group">
                      <div className="font-heading font-semibold text-brand-deep-teal group-hover:text-brand-soft-teal transition-colors">Others are looking for:</div>
                      <CheckList 
                         items={["deeper transformational capability", "greater therapeutic depth", "more structured understanding"]}
                         iconClassName="w-4 h-4"
                         itemClassName="gap-2 text-brand-primary-text mb-0"
                         className="space-y-3"
                      />
                  </div>
                  <div className="flex flex-col gap-3 bg-white p-6 rounded-xl border border-brand-soft-neutral shadow-sm hover:shadow-md hover:border-brand-soft-teal/30 transition-all duration-300 md:col-span-2 lg:col-span-1 group">
                      <div className="font-heading font-semibold text-brand-deep-teal group-hover:text-brand-soft-teal transition-colors">And some simply need:</div>
                      <CheckList 
                         items={["a clearer sense of direction", "guidance about where they currently fit", "a manageable next step"]}
                         iconClassName="w-4 h-4"
                         itemClassName="gap-2 text-brand-primary-text mb-0"
                         className="space-y-3"
                      />
                  </div>
              </div>
          </FadeIn>

          <FadeIn delay={0.3} className="w-full max-w-3xl text-center">
              <Text className="text-brand-primary-text font-medium text-lg leading-relaxed bg-brand-soft-teal/10 p-6 md:p-8 rounded-2xl border border-brand-soft-teal/20 relative overflow-hidden group mb-8">
                <span className="absolute top-0 left-0 w-1 h-full bg-brand-soft-teal block"></span>
                The purpose of this page is not to help you "choose the perfect path." It is to help you identify your current stage, understand what kind of development you need most right now, and find a starting point that fits your present goals and experience. <br/><br/><span className="text-brand-deep-teal font-bold uppercase tracking-wider text-base block mt-2 group-hover:text-brand-structural-navy transition-colors">Because meaningful practitioner development happens progressively.</span>
              </Text>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base font-medium">
                  <span className="text-brand-secondary-text">Recommended Reading:</span>
                  <a href="#layered-patterns" className="text-brand-soft-teal hover:text-brand-deep-teal underline underline-offset-4 decoration-brand-soft-teal/30 hover:decoration-brand-deep-teal">Layered Human Patterns</a>
                  <span className="hidden sm:inline text-brand-soft-neutral">•</span>
                  <a href="#structured-thinking" className="text-brand-soft-teal hover:text-brand-deep-teal underline underline-offset-4 decoration-brand-soft-teal/30 hover:decoration-brand-deep-teal">Structured Therapeutic Thinking</a>
              </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 - PRACTITIONER SELF-IDENTIFICATION WIZARD */}
      <Section theme="white" id="identify" className="relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto">
            <Heading level={2} className="mb-4">Start by Identifying Where You Are Right Now</Heading>
            <Text>Development is not a one-size-fits-all journey. Let’s find the clearest next step for your evolution.</Text>
        </div>

        <div className="max-w-4xl mx-auto bg-brand-warm-white rounded-3xl p-6 md:p-10 border border-brand-soft-neutral shadow-sm min-h-[480px] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full bg-brand-soft-neutral/30 h-1.5 overflow-hidden">
                 <motion.div 
                     className="h-full bg-brand-soft-teal"
                     initial={{ width: '0%' }}
                     animate={{ width: `${(wizardStep / 4) * 100}%` }}
                     transition={{ duration: 0.5 }}
                 />
            </div>
            
            <div className="flex justify-between items-center mb-8 relative z-10 pt-2">
                {(wizardStep > 1 && wizardStep < 4) ? (
                    <button 
                      onClick={() => setWizardStep(wizardStep - 1)}
                      className="flex items-center gap-2 text-brand-secondary-text hover:text-brand-deep-teal transition-colors font-medium text-base"
                    >
                        <ChevronLeft className="w-4 h-4" /> Back
                    </button>
                ) : <div />}
                
                {wizardStep < 4 && (
                    <div className="text-sm font-bold tracking-widest text-brand-soft-teal uppercase">
                        Step {wizardStep} of 3
                    </div>
                )}
            </div>

            <div className="flex-1 relative">
               <AnimatePresence mode="wait">
                   {wizardStep === 1 && (
                       <motion.div 
                           key="step1"
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           transition={{ duration: 0.3 }}
                           className="flex flex-col gap-6 h-full"
                       >
                           <Heading level={3} className="text-2xl md:text-3xl text-brand-deep-teal text-center mb-4">Which description feels closest to your current stage?</Heading>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                               {stages.map(s => (
                                   <button 
                                       key={s.id}
                                       onClick={() => {
                                           if (s.id === 'unsure') {
                                               window.dispatchEvent(new CustomEvent('open-ai-advisor'));
                                           } else {
                                               setWizardStage(s.id as WizardStage);
                                               setWizardStep(2);
                                           }
                                       }}
                                       className={cn(
                                           "p-6 rounded-2xl border text-left flex flex-col gap-3 transition-all duration-300 group",
                                           wizardStage === s.id 
                                             ? "border-brand-soft-teal bg-white shadow-md ring-1 ring-brand-soft-teal" 
                                             : "border-brand-soft-neutral bg-white hover:border-brand-soft-teal/50 hover:shadow-sm"
                                       )}
                                   >
                                       <div className={cn("p-3 w-fit rounded-lg transition-transform duration-300 group-hover:scale-110", wizardStage === s.id ? "bg-brand-soft-teal/10 text-brand-deep-teal" : "bg-brand-warm-white text-brand-secondary-text")}>
                                          {s.icon}
                                       </div>
                                       <div>
                                           <div className="font-heading font-semibold text-brand-primary-text text-lg mb-1">{s.title}</div>
                                           <div className="text-base text-brand-secondary-text leading-relaxed">{s.desc}</div>
                                       </div>
                                   </button>
                               ))}
                           </div>
                       </motion.div>
                   )}

                   {wizardStep === 2 && (
                       <motion.div 
                           key="step2"
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           transition={{ duration: 0.3 }}
                           className="flex flex-col gap-6 items-center max-w-3xl mx-auto w-full h-full"
                       >
                           <Heading level={3} className="text-2xl md:text-3xl text-brand-deep-teal text-center mb-4">How do you prefer to learn and develop?</Heading>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                               {envOptions.map(e => (
                                   <button 
                                       key={e.id}
                                       onClick={() => {
                                           setWizardEnv(e.id as WizardEnv);
                                           setWizardStep(3);
                                       }}
                                       className={cn(
                                           "p-6 rounded-2xl border text-left flex flex-col gap-3 transition-all duration-300",
                                           wizardEnv === e.id 
                                             ? "border-brand-soft-teal bg-white shadow-md ring-1 ring-brand-soft-teal" 
                                             : "border-brand-soft-neutral bg-white hover:border-brand-soft-teal/50 hover:shadow-sm group"
                                       )}
                                   >
                                       <div className={cn("p-3 w-fit rounded-lg", wizardEnv === e.id ? "bg-brand-soft-teal/10 text-brand-deep-teal" : "bg-brand-warm-white text-brand-secondary-text group-hover:text-brand-soft-teal transition-colors")}>
                                          {e.icon}
                                       </div>
                                       <div>
                                           <div className="font-heading font-semibold text-brand-primary-text text-lg mb-2">{e.title}</div>
                                           <div className="text-base text-brand-secondary-text leading-relaxed">{e.desc}</div>
                                       </div>
                                   </button>
                               ))}
                           </div>
                           <div className="mt-8">
                               <button 
                                   onClick={() => {
                                       window.dispatchEvent(new CustomEvent('open-ai-advisor'));
                                   }}
                                   className="text-brand-secondary-text hover:text-brand-deep-teal transition-colors text-base font-medium underline underline-offset-4"
                               >
                                   Not sure? Chat with our AI Advisor
                               </button>
                           </div>
                       </motion.div>
                   )}

                   {wizardStep === 3 && wizardStage && wizardEnv && wizardStage !== 'unsure' && goalOptions[wizardStage] && goalOptions[wizardStage][wizardEnv] && (
                       <motion.div 
                           key="step3"
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           transition={{ duration: 0.3 }}
                           className="flex flex-col gap-6 items-center max-w-2xl mx-auto w-full"
                       >
                           <Heading level={3} className="text-2xl md:text-3xl text-brand-deep-teal text-center mb-4">What level of focus or commitment are you looking for right now?</Heading>
                           <div className="grid grid-cols-1 gap-4 w-full">
                               {goalOptions[wizardStage][wizardEnv].map(f => (
                                   <button 
                                       key={f.id}
                                       onClick={() => {
                                           setWizardGoal(f.id);
                                           setWizardStep(4);
                                       }}
                                       className={cn(
                                           "p-6 rounded-2xl border text-left transition-all duration-300 w-full flex flex-col gap-2 group",
                                           wizardGoal === f.id 
                                             ? "border-brand-soft-teal bg-white shadow-md ring-1 ring-brand-soft-teal" 
                                             : "border-brand-soft-neutral bg-white hover:border-brand-soft-teal/50 hover:shadow-sm"
                                       )}
                                   >
                                       <div className="text-brand-primary-text font-heading font-semibold text-xl leading-relaxed group-hover:text-brand-deep-teal transition-colors">{f.title}</div>
                                       <div className="text-brand-secondary-text text-[15px]">{f.desc}</div>
                                   </button>
                               ))}
                           </div>
                           <div className="mt-4">
                               <button 
                                   onClick={() => {
                                       window.dispatchEvent(new CustomEvent('open-ai-advisor'));
                                   }}
                                   className="text-brand-secondary-text hover:text-brand-deep-teal transition-colors text-base font-medium underline underline-offset-4"
                               >
                                   Actually, I need help deciding. Chat with AI Advisor.
                               </button>
                           </div>
                       </motion.div>
                   )}

                   {wizardStep === 4 && (
                       <motion.div 
                           key="step4"
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ duration: 0.4 }}
                           className="flex flex-col items-center justify-center text-center h-full max-w-2xl mx-auto w-full py-4"
                       >
                           <div className="w-16 h-16 bg-brand-soft-teal/10 text-brand-soft-teal rounded-full flex items-center justify-center mb-6">
                               <Sparkles className="w-8 h-8" />
                           </div>
                           <Heading level={3} className="text-2xl md:text-3xl text-brand-deep-teal mb-2">Your Recommended Starting Point</Heading>
                           <Text className="text-brand-secondary-text mb-8 text-lg px-4">{getResult().description}</Text>

                           <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-soft-teal ring-1 ring-brand-soft-teal/30 shadow-xl shadow-brand-soft-teal/10 w-full relative overflow-hidden group mb-8">
                               <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-soft-teal/5 rounded-full blur-3xl group-hover:bg-brand-soft-teal/10 transition-colors duration-700"></div>
                               <div className="absolute top-0 left-0 w-1 h-full bg-brand-soft-teal"></div>
                               
                               <div className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase mb-4 relative z-10">We suggest exploring:</div>
                               <div className="text-3xl md:text-4xl font-heading font-semibold text-brand-structural-navy mb-4 relative z-10">{getResult().title}</div>
                               
                               {getResult().envText && (
                                   <div className="inline-flex items-center justify-center gap-2 bg-brand-warm-white font-medium text-brand-primary-text px-4 py-2 rounded-lg text-base mb-8 border border-brand-soft-neutral relative z-10">
                                       <CheckCircle2 className="w-4 h-4 text-brand-soft-teal" /> {getResult().envText}
                                   </div>
                               )}
                               
                               <div className="flex justify-center w-full relative z-10">
                                   <Button href={getResult().link} className="w-full sm:w-auto px-10 py-4 shadow-md hover:shadow-lg transition-all group-hover:-translate-y-0.5">Explore {getResult().title}</Button>
                               </div>
                           </div>
                           
                           <button onClick={resetWizard} className="flex items-center justify-center gap-2 text-brand-secondary-text hover:text-brand-deep-teal transition-colors font-medium text-base py-2 px-4">
                               <RotateCcw className="w-4 h-4" /> Start Over
                           </button>
                       </motion.div>
                   )}
               </AnimatePresence>
            </div>
        </div>
      </Section>

      {/* SECTION 3 - UNDERSTAND THE OVERALL ECOSYSTEM */}
      <section className="py-24 bg-brand-deep-teal text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#65BFA9_0%,transparent_70%)] bg-[length:100%_200%]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
              <FadeIn>
                  <Sparkles className="w-12 h-12 text-brand-soft-teal mx-auto mb-6" />
                  <Heading level={2} className="text-white mb-6">Your Journey Doesn't End Here</Heading>
                  <Text className="text-brand-warm-white/90 text-lg mb-12 max-w-2xl mx-auto">
                    Finding your starting point is just the beginning. The ICHARS Ecosystem is an interconnected pathway designed to support your development—from foundational observation to advanced specialization.
                  </Text>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Button href="#programs" className="w-full sm:w-auto px-10 py-4 bg-brand-soft-teal text-white hover:bg-white hover:text-brand-deep-teal shadow-lg transition-colors border-none text-lg">
                          Understand the Ecosystem
                      </Button>
                      <Button href="#consultation" variant="outline" className="w-full sm:w-auto px-8 py-4 border-white/20 text-white hover:bg-white/10 hover:text-white transition-colors">
                          Book a Consultation
                      </Button>
                  </div>
              </FadeIn>
          </div>
      </section>
    </>
  );
}
