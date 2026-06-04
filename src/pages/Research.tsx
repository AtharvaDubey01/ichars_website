import React, { useState } from 'react';
import { Section, Heading, Text, Grid, Button, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { BookOpen, Brain, Microscope, Heart, Users, Network, Activity, Search, FileText, ArrowRight } from 'lucide-react';

const researchPapers = [
  {
    title: "Clinical research on cognitive-behavioural hypnotherapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Cognitive Hypnotherapy in Addressing the Post traumatic Stress Disorder",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Cognitive hypnotherapy for psychological management of depression in palliative care",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "Music performance anxiety: A clinical outcome study into the effects of cognitive hypnotherapy and eye movement desensitisation and reprocessing in advanced pianists",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Can hypnosis and virtual reality reduce anxiety, pain and fatigue among patients who undergo cardiac surgery: a randomised controlled trial",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "The Impact of Virtual Reality Hypnosis on Pain and Anxiety Caused by Trauma: Lessons Learned from a Clinical Trial",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Hypnosis Associated with 3D Immersive Virtual Reality Technology in the Management of Pain: A Review of the Literature",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title: "Virtual Reality Hypnosis: A Case Report",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnosis and Art Therapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Self-esteem reinforcement strategies in ADHD: Comparison between hypnosis and art-therapy",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "Integrating Play Therapy and Heart-Centered Energetic Psychodrama: A Profound Treatment for Traumatized Children",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title: "The Use of Hypnosis in Children with Dissociative Disorders",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Hypnosis in a Primary Care Practice: Developing Skills for the “New Morbidities”",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Efficacy of clinical hypnosis in the enhancement of quality of life of terminally ill cancer patients",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title: "Existentialism and hypnotherapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnosis: A Psychodynamic Perspective",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Cognitive behavioral therapy, mindfulness, and hypnosis as treatment methods for generalized anxiety disorder",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Cognitive Hypnotherapy for Accessing and Healing Emotional Injuries for Anxiety Disorders",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "The value of using hypnosis in helping an adult survivor of childhood sexual abuse",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title: "Hypnosis for Complex Trauma Survivors: Four Case Studies",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Strategic Pattern Intervention: An Integration of Individual and Family Systems Therapies Based on the Work of Milton H. Erickson, M.D.",
    url: "#",
    category: "Children & Families",
  },
  {
    title: "Hypnosis and Family Depth Therapy",
    url: "#",
    category: "Children & Families",
  },
  {
    title:
      "Object relations theory and family systems: Toward a reconceptualization of the hypnotic relationship.",
    url: "#",
    category: "Children & Families",
  },
  {
    title: "Hypnosis and Postmodernism: Multicultural Applications",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Utilizing Metaphors in Solution-Focused Therapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Efficacy of hypnotherapy compared to cognitive-behavioural therapy for mild-to-moderate depression: study protocol of a randomised-controlled rater-blind trial",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "Research papers on effectiveness of integrated approach of Hypnosis – Humanists",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Redefining hypnosis: Theory, methods and integration",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Humanistic and integrative therapies: the state of the art",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Research: Science Proves Effectiveness of Hypnotherapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Research Studies on Hypnosis Effectiveness",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnosis and Transpersonal Psychology: Answering the Call Within",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Hypnosis-based psychodynamic treatment in ALS: a longitudinal study on patients and their caregivers",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Contemporary psychoanalysis and hypnosis",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnosis in Psychoanalysis",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Hypnosis, psychoanalysis, and Morita therapy: the evolution of Kokyō Nakamura’s psychotherapeutic theories and practices",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Reconsidering Hypnosis and Psychoanalysis: Toward Creating a Context for Understanding",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Hypnosis, Human Nature, and Complexity: Integrating Neuroscience Approaches into Hypnosis Research",
    url: "#",
    category: "Neuroscience & Biology",
  },
  {
    title: "Hypnosis and Neuroscience",
    url: "#",
    category: "Neuroscience & Biology",
  },
  {
    title:
      "Integration of Hypnotic and Systematic Desensitization Techniques in the Treatment of Phobias: A Case Report",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "I-95 Phobia Treated With Hypnotic Systematic Desensitization: A Case Report",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Treatment of Penetration Phobia Through the Combined Use of Systematic Desensitization and Hypnosis: A Case Study",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Best of Both Worlds: How to Integrate Hypnosis and Biofeedback with Empathy and Hypnotic Assessment Procedures",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "The Most Beautiful Man: An Integration of Hypnosis and Biofeedback for Depression and Dissociation",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title: "Working with couples using hypnotherapy",
    url: "#",
    category: "Children & Families",
  },
  {
    title: "Hypnosis in Couple and Family Therapy",
    url: "#",
    category: "Children & Families",
  },
  {
    title:
      "Psychological distress and quality of life are improved in autoimmune patients through Tandem-Psychotherapy, combining individual hypnosis and eye movement desensitization and reprocessing (EMDR) treatment for trauma, followed by supportive-expressive group therapy",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "The Integrative Use of EMDR and Clinical Hypnosis in the Treatment of Adults Abused as Children",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Integrative Psychotherapy: Combining Ego-State Therapy, Clinical Hypnosis, and Eye Movement Desensitization and Reprocessing (EMDR) in a Psychosocial Developmental",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "Advanced Trauma Training: Integration of EMDR and Clinical Hypnosis for the Effective Resolution of Post-traumatic Stress Disorder",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title:
      "The Effectiveness of Combination Mindfulness Spiritual-Based Cognitive Therapy plus Hypnosis vs Mindfulness-Based Cognitive Therapy on Depression Scores and Cortisol Levels in HIV Patients with Depression: A Randomized Controlled Trial",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "Cognitive Hypnotherapy in Psychosomatic Illness: A Cognitive Experiential Perspective",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title:
      "Comparison of the Effectiveness of Hypnotherapy and Cognitive-Behavioral Therapy on Chronic Pain Indices and Cognitive-Emotional Regulation in Patients with Irritable Bowel Syndrome",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title:
      "Integrative Therapeutic Approach Combining Cognitive Behavioral Therapy for the Treatment of Recurrent Depression in an Adult Client",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "Integrating Psychodynamic Approaches with CBT Improves Therapy Outcomes",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Effectiveness of Integrated Psychological Therapy (IPT) for Schizophrenia Patients: A Research Update",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title: "Hypnosis today",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Integration of hypnotherapy with brief cognitive behaviour therapy (CBT) for treatment of depression",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title: "The Difference Between Integrative Psychotherapy and CBT",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Effectiveness of Mindfulness-Integrated Cognitive-Behavioral Group Therapy in Motivational Structure of Hepatitis B Patients",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title:
      "An integrated smoking cessation and alcohol intervention among Hong Kong Chinese young people: Study protocol for a feasibility randomized controlled trial",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "HYPNOSIS AND RELATED BEHAVIORAL APPROACHES IN THE TREATMENT OF ADDICTIVE BEHAVIORS",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "Hypnosis Intervention Effects on Sleep Outcomes: A Systematic Review",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title:
      "The Combination of Hypnosis and Behavioral Methods in Psychotherapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnosis and the Psychology of Cognitive and Behavioral Control",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Comparing Overall Success Rates of Cognitive-Behavioral Therapy, Eye Movement Desensitization and Reprocessing, Dialectical Behavior Therapy and Hypnosis",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Combining Hypnosis with Qestalt Therapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "The development of Gestalt Hypnocounseling Training Module",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnotic empty chair",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Mindfulness-Based Hypnosis: Blending Science, Beliefs, and Wisdoms to Catalyze Healing",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "The development of Gestalt Hypnocounseling",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Mindful Hypnotherapy to Reduce Stress and Increase Mindfulness: A Randomized Controlled Pilot Study",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Integrating ericksonian hypnosis and systemic couple therapy in the treatment of conversion disorders",
    url: "#",
    category: "Children & Families",
  },
  {
    title:
      "The Role of Expressive Art Therapy and Neurofeedback Assessments in Improving Clinical Hypnosis Adherence Among Anxiety Sufferers",
    url: "#",
    category: "Trauma & Anxiety",
  },
  {
    title: "On being client-centered",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Post-hypnotic suggestion in group therapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnotherapy, Altered States of Consciousness and Psychodrama",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Hypnosis Training and Education: Experiences with a Norwegian One-Year Education Course in Clinical Hypnosis for Children and Adolescents",
    url: "#",
    category: "Children & Families",
  },
  {
    title: "The Integration of Hypnosis Into a Model of Palliative Care",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title: "Hypnosis and the treatment of depressions: Strategies for change",
    url: "#",
    category: "Depression & Mood",
  },
  {
    title:
      "Inner strengths: Contemporary psychotherapy and hypnosis for ego-strengthening",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Ericksonian Hypnotherapy Resemblances in Solution Focused Brief Therapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Hypnosis with Specific Relation to Biofeedback and Behavior Therapy",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "MINDFULNESS AND HYPNOSIS: RESEARCH CONTEXT",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "Guidelines for the Assessment of Efficacy of Clinical Hypnosis Applications",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title:
      "The Role of Integrative Clinical Hypnotherapy Interventions and their Place in Modern Medical and Psychological Treatment: A Review Study",
    url: "#",
    category: "Medical & Somatic",
  },
  {
    title: "Humanistic Aspects of Hypnotic Communication",
    url: "#",
    category: "Theoretical Integrations",
  },
  {
    title: "Hypnosis and cognitive neuroscience: Bridging the gap",
    url: "#",
    category: "Neuroscience & Biology",
  },
];

export const Research = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10);

  const categories = ["All", ...Array.from(new Set(researchPapers.map(p => p.category)))];

  const filteredPapers = researchPapers.filter((p) => {
    const matchesSearch = searchTerm.trim() === "" || p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedPapers = filteredPapers.slice(0, visibleCount);

  return (
    <div className="font-body min-h-screen bg-brand-soft-neutral/10 w-full relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <Section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden text-center border-b border-brand-soft-neutral/30">
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-b from-brand-soft-teal/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <FadeIn>
            <div className="text-xs font-bold tracking-widest text-brand-structural-navy uppercase mb-6 flex items-center justify-center gap-2">
              <Microscope size={14} className="text-brand-soft-teal" />{" "}
              Empirical Foundations
            </div>
            <Heading
              level={1}
              className="text-brand-structural-navy mb-6 leading-tight"
            >
              Research and Evidence for Integrated Psychotherapy
            </Heading>
            <Text
              size="lg"
              className="text-brand-secondary-text mb-12 max-w-2xl mx-auto font-light"
            >
              Explore a curated repository of clinical studies validating the
              effectiveness of integrating cognitive, behavioral, and somatic
              frameworks through a comprehensive therapeutic methodology.
            </Text>
          </FadeIn>
          <FadeIn delay={0.1} className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="#repository"
                className="flex items-center justify-center gap-2 px-8 py-4 border-brand-soft-neutral/50"
              >
                Browse Repository <ArrowRight size={16} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* OVERVIEW SECTION - Visual framework representation */}
      <Section
        theme="white"
        className="py-24 border-b border-brand-soft-neutral/30"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-brand-soft-neutral/10 border border-brand-soft-neutral/50 p-6 shadow-sm">
                  <Brain className="text-brand-soft-teal mb-4" size={32} />
                  <Heading level={3} className="mb-2 text-lg font-semibold text-brand-structural-navy">
                    Neural Integration
                  </Heading>
                  <Text size="sm" muted>
                    Connecting distinct functional areas to process trauma and
                    regulate emotion effectively.
                  </Text>
                </Card>
                <Card className="bg-brand-warm-white border border-brand-soft-teal/30 p-6 shadow-sm">
                  <Network className="text-brand-deep-teal mb-4" size={32} />
                  <Heading level={3} className="mb-2 text-lg font-semibold text-brand-structural-navy">
                    Modal Synthesis
                  </Heading>
                  <Text size="sm" muted>
                    Combining CBT, psychodynamic, and humanistic models into a
                    unified framework.
                  </Text>
                </Card>
                <Card className="bg-white border border-brand-soft-neutral p-6 sm:col-span-2 shadow-sm">
                  <Activity
                    className="text-brand-accent-orange mb-4"
                    size={32}
                  />
                  <Heading level={3} className="mb-2 text-lg font-semibold text-brand-structural-navy">
                    Measurable Efficacy
                  </Heading>
                  <Text size="sm" muted>
                    Empirical studies showing improved outcomes, faster
                    recovery, and reduced relapse rates across various
                    psychological conditions.
                  </Text>
                </Card>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <Heading
                level={2}
                className="mb-8 font-heading text-4xl text-brand-structural-navy tracking-tight"
              >
                The Science of Synthesis
              </Heading>
              <div className="space-y-6 text-brand-secondary-text leading-relaxed font-sans text-lg">
                <p>
                  For decades, psychotherapy has been fragmented into distinct
                  schools of thought. While each theoretical model provides
                  unique insights into human behaviour, genuine breakthrough
                  often happens at the intersections of these models.
                </p>
                <div className="p-6 bg-brand-soft-neutral/10 rounded-xl border border-brand-soft-neutral/30 my-6">
                  <p className="text-brand-structural-navy font-medium italic">
                    Our research repository highlights studies that use{" "}
                    <span className="text-brand-deep-teal font-semibold">hypnosis as a powerful integrative base</span>—the
                    underlying medium that connects cognitive restructuring,
                    behavioural desensitization, and psychodynamic exploration.
                  </p>
                </div>
                <p>
                  Just as different instruments in an orchestra work together to
                  create a symphony, these modalities, when integrated
                  effectively, offer a significantly more holistic and durable
                  treatment strategy.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 3. EMPIRICAL REPOSITORY */}
      <Section id="repository" className="py-24 bg-brand-warm-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4 text-brand-structural-navy">
                Our Empirical Repository
              </Heading>
              <Text className="text-brand-secondary-text mb-8 max-w-2xl mx-auto">
                Search our robust directory of clinical research papers and
                studies validating the integrative approach.
              </Text>

              <div className="relative max-w-2xl mx-auto shadow-sm">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                  <Search className="text-brand-soft-teal" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search by title, keyword, or condition..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(10); }}
                  className="w-full pl-14 pr-6 py-4 rounded-xl border border-brand-soft-neutral focus:border-brand-soft-teal focus:ring-1 focus:ring-brand-soft-teal transition-all bg-white text-brand-structural-navy font-medium placeholder:text-brand-secondary-text/50 outline-none"
                />
              </div>

              {/* Ecosystem Interactive Filters */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => { setSelectedCategory(category); setVisibleCount(10); }}
                    className={`px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-brand-soft-teal/50 ${
                      selectedCategory === category 
                        ? "bg-brand-structural-navy text-white border-brand-structural-navy shadow-sm" 
                        : "bg-white text-brand-secondary-text border-brand-soft-neutral/50 hover:border-brand-soft-teal hover:text-brand-structural-navy"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-brand-soft-neutral/30 pb-4">
                <Text className="font-semibold text-brand-structural-navy text-base uppercase tracking-wider">
                  {filteredPapers.length} Result{filteredPapers.length !== 1 ? "s" : ""} Found
                  {searchTerm && (
                    <span className="text-brand-soft-teal ml-2 lowercase font-normal italic">
                      for "{searchTerm}"
                    </span>
                  )}
                </Text>
              </div>

              {filteredPapers.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-brand-soft-neutral/50 border-dashed">
                  <Search
                    className="mx-auto text-brand-soft-neutral/30 mb-6"
                    size={48}
                  />
                  <Heading level={3} className="mb-3 text-brand-structural-navy">
                    No studies found
                  </Heading>
                  <Text className="text-brand-secondary-text max-w-sm mx-auto">
                    We couldn't find any papers matching your search query in this category. Try adjusting your keywords or clearing the filters.
                  </Text>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {displayedPapers.map((paper, index) => (
                    <a
                      key={index}
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl border border-brand-soft-neutral/40 hover:border-brand-soft-teal hover:bg-brand-soft-neutral/5 transition-colors"
                    >
                      <div className="flex gap-5 pr-6 items-start sm:items-center w-full">
                        <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-lg bg-brand-soft-neutral/5 items-center justify-center border border-brand-soft-neutral/20 group-hover:bg-brand-soft-teal/5 group-hover:border-brand-soft-teal/30 transition-colors">
                          <FileText
                            className="text-brand-soft-neutral/50 group-hover:text-brand-soft-teal transition-colors"
                            size={20}
                          />
                        </div>
                        <div className="flex-1">
                          <Heading level={3} className="text-lg text-brand-structural-navy font-semibold mb-1.5 leading-snug group-hover:text-brand-deep-teal">
                            {paper.title}
                          </Heading>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-soft-neutral/10 text-brand-secondary-text group-hover:bg-brand-warm-white transition-colors">
                              {paper.category || "Clinical Research"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-0 shrink-0 self-start sm:self-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-warm-white text-brand-secondary-text group-hover:bg-brand-structural-navy group-hover:text-white transition-all shadow-sm border border-brand-soft-neutral/30 group-hover:border-transparent">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
              
              {visibleCount < filteredPapers.length && (
                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    className="px-8 bg-white border-brand-soft-neutral/50 hover:bg-brand-soft-neutral/5 font-medium"
                  >
                    Load More Studies ({filteredPapers.length - visibleCount} remaining)
                  </Button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 4. CTA */}
      <Section
        theme="dark"
        className="py-24 border-t border-brand-soft-neutral/30 bg-brand-structural-navy text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <Heading level={2} className="mb-6 text-white leading-tight">
            Ready to integrate these principles?
          </Heading>
          <Text
            size="lg"
            className="mb-10 text-white/80 max-w-2xl mx-auto font-light"
          >
            Translate decades of clinical research into practical,
            transformative skills for your practice with our comprehensive
            integration programs.
          </Text>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              href="#chp"
              className="bg-[#E85D04] text-white hover:bg-[#c74e02] border-transparent font-medium px-8"
            >
              Explore Psychotherapy Program
            </Button>
            <Button
              href="#chc"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 hover:border-white font-medium px-8"
            >
              Explore Coaching Program
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};
