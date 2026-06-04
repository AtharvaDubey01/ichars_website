import { useState } from "react";
import { Section, Heading, Text, Button, Card } from "../components/Blocks";
import { FadeIn } from "../components/FadeIn";
import { cn } from "../lib/utils";
import {
  Users,
  MessageSquare,
  Lightbulb,
  Target,
  ArrowRight,
  RefreshCw,
  Network,
  BookOpen,
  Quote,
  Activity,
  CheckCircle2,
  X,
} from "lucide-react";

const learningStepsData = [
  {
    label: "Learn",
    title: "Conceptual Grounding",
    insight:
      "We begin by understanding core frameworks and integrating multi-layered psychological concepts.",
    icon: <BookOpen className="w-5 h-5 flex-shrink-0" />,
  },
  {
    label: "Observe",
    title: "Guided Observation",
    insight:
      "Live demonstration or case observation allows practitioners to witness concepts in action.",
    icon: <Activity className="w-5 h-5 flex-shrink-0" />,
  },
  {
    label: "Discuss",
    title: "Collaborative Dialogue",
    insight:
      "Practitioners unpack what they observed, exploring diverse perspectives and questions together.",
    icon: <MessageSquare className="w-5 h-5 flex-shrink-0" />,
  },
  {
    label: "Apply",
    title: "Supervised Application",
    insight:
      "Taking theoretical understanding into safe, guided practice scenarios with constructive peer review.",
    icon: <Target className="w-5 h-5 flex-shrink-0" />,
  },
  {
    label: "Reflect",
    title: "Deep Integration",
    insight:
      "Looking back at the application process to solidify internal clarity and long-term practitioner growth.",
    icon: <Network className="w-5 h-5 flex-shrink-0" />,
  },
];

export const Cohorts = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeLearningStep, setActiveLearningStep] = useState(0);

  return (
    <div className="bg-brand-warm-white text-brand-primary-text">
      {/* 1. HERO SECTION */}
      <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-b from-brand-soft-teal/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <FadeIn>
            <div className="text-xs font-bold tracking-widest text-brand-structural-navy uppercase mb-6">
              ICHARS Cohorts
            </div>
            <Heading level={1} className="text-brand-structural-navy mb-6">
              Learning deepens differently when practitioners reflect, discuss,
              and apply together
            </Heading>
            <Text
              size="lg"
              className="text-brand-secondary-text mb-12 max-w-2xl mx-auto font-light"
            >
              Some practitioners learn best through independent reflection and
              independent integration. Others develop more clearly through
              guided discussion, collaborative reflection, and applied case
              conversations.
            </Text>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" icon={<Users className="w-4 h-4" />}>
                Explore Upcoming Cohorts
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<MessageSquare className="w-4 h-4" />}
              >
                How Cohorts Work
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
      \n
      {/* 2. WHY SOME PRACTITIONERS PREFER COHORT LEARNING (Stackable Friendly) */}
      <Section theme="white" className="border-t border-brand-soft-neutral/30">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level={2} className="text-brand-deep-teal mb-6">
            The power of collective observation
          </Heading>
          <Text size="lg" className="text-brand-structural-navy">
            While programs provide the frameworks, cohorts provide the shared
            space to deconstruct real application. It’s an environment designed
            for practitioners who value collaborative problem-solving.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 relative">
          {[
            {
              title: "Seeing blindspots",
              desc: "It is often easier to observe another practitioner's session dynamics than your own. Cohorts make these blindspots visible safely.",
              tag: "Perspective",
            },
            {
              title: "Conceptual translation",
              desc: "Hearing how a peer applies a framework often triggers 'aha' moments that independent studying doesn't reach.",
              tag: "Clarity",
            },
            {
              title: "Iterative feedback",
              desc: "Real-time adjustments to your approach guided by experienced facilitators and constructive peer support.",
              tag: "Growth",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-brand-warm-white p-8 rounded-2xl border border-brand-soft-neutral/50 flex flex-col justify-between group hover:border-brand-soft-teal transition-colors"
            >
              <div>
                <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-4">
                  {item.tag}
                </div>
                <Heading
                  level={4}
                  className="text-brand-structural-navy mb-4 group-hover:text-brand-deep-teal transition-colors"
                >
                  {item.title}
                </Heading>
                <Text size="sm" className="text-brand-secondary-text m-0">
                  {item.desc}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </Section>
      \n
      {/* 3. THE ECOSYSTEM EXPERIENCE (Consolidated) */}
      <Section
        id="how-cohorts-work"
        theme="tint"
        className="border-t border-brand-soft-neutral/30"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level={2} className="text-brand-deep-teal mb-6">
            The Ecosystem Experience
          </Heading>
          <Text size="lg" className="text-brand-structural-navy">
            Many practitioners spend years learning independently, which can
            become isolating and difficult to apply. Cohorts replace passive
            information delivery with a guided, experiential ecosystem built on
            reflection, discussion, and collaborative understanding.
          </Text>
        </div>

        {/* Ultimate Learning Loop Visual (Gutenberg Optimized Stackable Grid) */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-8 text-center">
            Collaborative Learning Flow
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full relative z-10 font-medium">
            {[
              {
                label: "Learn",
                desc: "Concepts",
                icon: <BookOpen className="w-5 h-5 text-brand-soft-teal" />,
              },
              {
                label: "Observe",
                desc: "Demonstration",
                icon: <Activity className="w-5 h-5 text-brand-soft-teal" />,
              },
              {
                label: "Discuss",
                desc: "Perspectives",
                icon: (
                  <MessageSquare className="w-5 h-5 text-brand-soft-teal" />
                ),
              },
              {
                label: "Apply",
                desc: "Practice",
                icon: <Target className="w-5 h-5 text-brand-soft-teal" />,
              },
              {
                label: "Reflect",
                desc: "Integration",
                icon: <Network className="w-5 h-5 text-brand-soft-teal" />,
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-6 bg-brand-structural-navy rounded-2xl border border-brand-soft-teal/20 text-center shadow-sm hover:border-brand-soft-teal/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="text-base font-bold text-white mb-1 uppercase tracking-wider">
                  {step.label}
                </div>
                <div className="text-sm text-white/50">{step.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-brand-soft-teal/10 border border-brand-soft-teal/30 rounded-xl p-5 text-center flex flex-col justify-center items-center">
              <div className="font-bold text-brand-structural-navy mb-1">
                Intentional Application
              </div>
              <div className="text-sm text-brand-secondary-text">
                Guided real-world integration
              </div>
            </div>
            <div className="bg-brand-soft-teal/10 border border-brand-soft-teal/30 rounded-xl p-5 text-center flex flex-col justify-center items-center">
              <div className="font-bold text-brand-structural-navy mb-1">
                Community Support
              </div>
              <div className="text-sm text-brand-secondary-text">
                Shared feedback & collective growth
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <div className="bg-white p-8 rounded-3xl border border-brand-soft-neutral/50">
            <Heading
              level={4}
              className="text-brand-structural-navy mb-4 border-b border-brand-soft-neutral/30 pb-4"
            >
              Inside the Cohort Experience
            </Heading>
            <Text size="sm" className="mb-4 text-brand-secondary-text">
              When practitioners present difficult session experiences inside a
              cohort:
            </Text>
            <ul className="space-y-4 mb-6">
              {[
                "Different conceptual perspectives are explored naturally",
                "Underlying emotional dynamics become visible",
                "Feedback is shared constructively with peers",
                "Intervention possibilities expand through discussion",
                "Isolation is replaced by communal learning",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-base font-medium text-brand-secondary-text items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-1.5 shrink-0" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-structural-navy p-8 rounded-3xl shadow-md text-white flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577563908411-50cb98976fea?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-[0.2] mix-blend-overlay transition-opacity duration-700 group-hover:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-structural-navy via-brand-structural-navy/80 to-brand-structural-navy/20" />

            <div className="relative z-10 flex flex-col justify-center h-full">
              <Quote className="w-10 h-10 text-brand-soft-teal/50 mb-6" />
              <Text
                size="lg"
                className="italic font-medium text-white mb-8 leading-relaxed max-w-sm"
              >
                "The goal is not performing perfectly or getting answers. It's
                about progressively strengthening clarity and learning how to
                think through situations more clearly."
              </Text>
            </div>
          </div>
        </div>
      </Section>
      \n
      {/* 5. WHAT PRACTITIONERS EXPERIENCE */}
      <Section theme="white" className="border-t border-brand-soft-neutral/30">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level={2} className="text-brand-deep-teal mb-6">
            An environment designed for reflection, discussion, and progressive
            application
          </Heading>
          <Text size="lg" className="text-brand-structural-navy">
            Depending on the cohort structure, practitioners experience guided
            conceptual discussions, experiential learning exercises,
            framework-based exploration, and collaborative dialogue.
          </Text>
        </div>
        \n\n{" "}
        {/* Inside a Cohort Session (Gutenberg Optimized Stacked Columns) */}
        <div className="max-w-5xl mx-auto mb-16 space-y-12">
          {/* Phase 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-2 md:order-1">
              <Activity className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">
                Case Exploration
              </Heading>
              <Text className="text-brand-secondary-text mb-0">
                A practitioner presents an anonymized session scenario. The
                group explores the presenting symptoms, underlying patterns, and
                the initial interventions attempted. The focus is on gathering a
                comprehensive understanding before moving to solutions.
              </Text>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=800&auto=format&fit=crop"
                alt="Case Exploration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Phase 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-1 md:order-1 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=800&auto=format&fit=crop"
                alt="Reflective Discussion"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2 md:order-2 md:pl-6">
              <MessageSquare className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">
                Reflective Discussion
              </Heading>
              <Text className="text-brand-secondary-text mb-0">
                Facilitated dialogue where practitioners share diverse
                perspectives on the case. What emotional dynamics are present?
                What unconscious patterns might be maintaining the situation?
                The group engages in deep reflective questioning.
              </Text>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-2 md:order-1">
              <Network className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">
                Framework Application
              </Heading>
              <Text className="text-brand-secondary-text mb-0">
                Applying structural frameworks (like the ICHARS Layered Method)
                to the case. Mapping out how different interventions target
                different layers—behavioral, emotional, cognitive, and
                unconscious—to create an integrative plan.
              </Text>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=800&auto=format&fit=crop"
                alt="Framework Application"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Phase 4 */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-1 md:order-1 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
                alt="Guided Feedback"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2 md:order-2 md:pl-6">
              <RefreshCw className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">
                Guided Feedback
              </Heading>
              <Text className="text-brand-secondary-text mb-0">
                Receiving structured, supportive feedback from experienced
                facilitators and peers. Focusing on refining practitioner
                presence, strengthening intervention rationale, and integrating
                learning into real-world practice.
              </Text>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <Text
            size="lg"
            className="font-medium text-brand-structural-navy mb-6"
          >
            Over time, many practitioners begin noticing:
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Clearer application",
              "Stronger conceptual integration",
              "More confidence in real situations",
              "Improved observational ability",
              "Deeper reflective thinking",
              "Greater consistency in understanding",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-brand-warm-white p-4 rounded-xl border border-brand-soft-neutral/30 text-base font-medium text-brand-structural-navy shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
          <Text className="mt-8 text-brand-secondary-text">
            Not because learning becomes simplistic. But because understanding
            becomes more applied, more experiential, more integrated, and more
            actively explored.
          </Text>
        </div>
      </Section>
      {/* 6. PROGRAMS VS COHORTS (Parallel Comparison) */}
      <Section
        id="learning-paths"
        theme="tint"
        className="border-y border-brand-soft-neutral/30"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level={2} className="text-brand-deep-teal mb-4">
            Two Learning Environments. Same Philosophy.
          </Heading>
          <Text size="lg" className="text-brand-structural-navy">
            Choose the environment that best supports how you currently
            integrate and apply understanding. You can always start
            independently and join a cohort later.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* Independent Progression Column */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50 shadow-sm flex flex-col h-full">
            <div className="mb-8 border-b border-brand-soft-neutral/30 pb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-secondary-text mb-2">
                Self-Paced Exploration
              </div>
              <Heading level={3} className="text-brand-structural-navy m-0">
                Independent Programs
              </Heading>
            </div>

            <Text className="text-brand-secondary-text mb-8">
              Focus on independent progression, flexible pacing, and conceptual
              exploration.
            </Text>

            <div className="flex-grow">
              <div className="text-sm font-bold text-brand-structural-navy uppercase tracking-wider mb-4">
                Ideal for practitioners who prefer:
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Flexible, unstructured pacing",
                  "Independent study & reflection",
                  "Autonomous conceptual integration",
                  "Learning without scheduled commitments",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-brand-secondary-text items-start"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-neutral/50 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <Button
                href="#programs"
                size="lg"
                variant="outline"
                className="w-full"
              >
                Explore Programs
              </Button>
            </div>
          </div>

          {/* Cohort Integration Column */}
          <div className="bg-brand-structural-navy p-8 md:p-10 rounded-3xl border border-brand-structural-navy shadow-lg flex flex-col h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#28A5A0_0%,transparent_60%)] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-30" />

            <div className="mb-8 border-b border-brand-soft-teal/30 pb-6 relative z-10">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-soft-teal mb-2">
                Guided Application
              </div>
              <Heading level={3} className="text-white m-0">
                Live Cohorts
              </Heading>
            </div>

            <Text className="text-white/80 mb-8 relative z-10">
              Engage in structured sessions, collaborative reflection,
              interactive learning, and applied clinical discussion.
            </Text>

            <div className="flex-grow relative z-10">
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Ideal for practitioners who want:
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Live practitioner interaction",
                  "Structured framework progression",
                  "Real-world case discussions",
                  "Direct guided feedback & supervision",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-white/90 items-start"
                  >
                    <div className="text-brand-soft-teal mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto relative z-10">
              <Button
                href="#explore-cohorts"
                size="lg"
                className="w-full bg-white text-brand-structural-navy hover:bg-brand-warm-white"
              >
                Explore Cohorts
              </Button>
            </div>
          </div>
        </div>
      </Section>
      {/* 7. WHO COHORTS Are FORR */}
      <Section theme="white" className="border-b border-brand-soft-neutral/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-6">
              Alignment & Fit
            </div>
            <Heading level={2} className="text-brand-structural-navy mb-6">
              Cohorts are especially valuable for practitioners who benefit from
              guided experiential learning
            </Heading>
            <Text className="text-brand-secondary-text mb-6">
              They are especially useful for practitioners who want more active
              integration, deeper discussion, shared developmental learning,
              stronger application confidence, and greater experiential
              understanding.
            </Text>
            <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50">
              <div className="text-sm font-bold uppercase text-brand-secondary-text mb-4">
                May not be the ideal fit if you strongly prefer:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Fully independent learning",
                  "Completely solitary progression",
                  "Minimal peer interaction",
                  "Passive information consumption",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-base text-brand-secondary-text items-start"
                  >
                    <X className="w-4 h-4 text-brand-secondary-text/50 shrink-0 mt-0.5" />
                    <span className="leading-snug text-brand-structural-navy/80 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Value collaborative learning",
              "Learn effectively through discussion",
              "Want stronger real-world application",
              "Benefit from reflective dialogue",
              "Prefer guided exploration",
              "Want practitioner interaction & feedback",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl border border-brand-soft-neutral shadow-sm flex flex-col justify-center items-center text-center h-full"
              >
                <div className="w-8 h-8 rounded-full bg-brand-soft-teal/10 text-brand-soft-teal flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-base font-medium text-brand-structural-navy leading-tight">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* 7.5 CLINICAL APPLICATIONN IN A DIGITAL ENVIRONMENT */}
      <Section
        theme="white"
        className="border-t border-brand-soft-neutral/30 bg-gradient-to-b from-brand-warm-white to-white"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-4">
            Clinical Depth, Delivered Online
          </div>
          <Heading level={2} className="text-brand-structural-navy mb-6">
            A Digital Environment Built for Clinical Application
          </Heading>
          <Text
            size="lg"
            className="text-brand-secondary-text max-w-3xl mx-auto mb-8"
          >
            Learning deep clinical skills like hypnosis, NLP, or cognitive
            behavioral therapy requires high-fidelity interaction. Our online
            ecosystems are engineered not as passive video lectures, but as
            active, supervised clinical practice spaces.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">
          {[
            {
              title: "Live Peer Practice",
              desc: "Practitioners break into supervised pairs/triads to immediately apply concepts, mirroring in-room experiences.",
              icon: <Users className="w-6 h-6" />,
            },
            {
              title: "Real-Time Case Reviews",
              desc: "Share real session challenges and receive multi-perspectival feedback from peers and mentors instantly.",
              icon: <Activity className="w-6 h-6" />,
            },
            {
              title: "Direct Faculty Supervision",
              desc: "Instructors observe breakout rooms, providing immediate, granular feedback on your clinical application.",
              icon: <Target className="w-6 h-6" />,
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-brand-soft-neutral/50 shadow-sm transition-all hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-warm-white border border-brand-soft-neutral/50 flex items-center justify-center text-brand-soft-teal mb-6 group-hover:bg-brand-soft-teal group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-brand-structural-navy font-bold mb-3">
                {feature.title}
              </h4>
              <Text size="sm" className="text-brand-secondary-text">
                {feature.desc}
              </Text>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-brand-structural-navy p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,#28A5A0_0%,transparent_60%)] opacity-20 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-2">
              The Practitioner Consensus
            </div>
            <Text className="text-white/90 italic font-medium m-0 max-w-lg">
              "The level of interaction, observation, and direct feedback
              completely shifted my perspective on what's possible in an online
              clinical learning environment."
            </Text>
          </div>
          <div className="relative z-10 shrink-0">
            <Button
              href="#explore-cohorts"
              variant="primary"
              className="bg-white text-brand-structural-navy hover:bg-brand-warm-white"
            >
              Explore Frameworks
            </Button>
          </div>
        </div>
      </Section>
      {/* 9. EXPLORE COHORTS (CTA Section) */}
      <Section
        id="explore-cohorts"
        theme="dark"
        className="text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#65BFA9_0%,transparent_70%)] bg-[length:100%_200%]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-xs font-bold tracking-widest text-brand-soft-teal uppercase mb-6">
              Explore Available Pathways
            </div>
            <Heading level={2} className="text-white mb-6">
              Explore Current Cohorts
            </Heading>
            <Text size="lg" className="text-white/80 mb-10 max-w-2xl mx-auto">
              Different cohorts support different stages of practitioner
              development. The goal is finding the learning environment that
              supports your current stage most effectively.
            </Text>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                href="#start"
                size="lg"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Find Your Starting Point
              </Button>
              <Button
                href="#programs"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10"
              >
                Compare Programs & Cohorts
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/10 pt-12">
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-brand-soft-teal mb-4">
                  Foundation
                </div>
                <Text size="sm" className="text-white/70">
                  Beginner-oriented guided learning for core concepts.
                </Text>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-brand-soft-teal mb-4">
                  Coaching
                </div>
                <Text size="sm" className="text-white/70">
                  Transformational coaching cohorts for structured application.
                </Text>
                <a
                  href="#chc"
                  className="text-base text-brand-soft-teal hover:text-white mt-2 inline-flex items-center gap-1 group"
                >
                  Explore CHC{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-brand-soft-teal mb-4">
                  Psychotherapy
                </div>
                <Text size="sm" className="text-white/70">
                  Development cohorts for integrative clinical practice.
                </Text>
                <a
                  href="#chp"
                  className="text-base text-brand-soft-teal hover:text-white mt-2 inline-flex items-center gap-1 group"
                >
                  Explore CHP{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div>
                <div className="text-sm font-bold uppercase tracking-widest text-brand-soft-teal mb-4">
                  Advanced
                </div>
                <Text size="sm" className="text-white/70">
                  Practitioner discussion environments for complex cases.
                </Text>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};
