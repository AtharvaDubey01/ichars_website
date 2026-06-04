const fs = require('fs');

const fileContent = fs.readFileSync('src/pages/Research.tsx', 'utf8');

const updatedContent = fileContent.replace(
  /export const Research = \(\) => {[\s\S]*?$/,
  `export const Research = () => {
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
            <div className="text-[11px] font-bold tracking-widest text-brand-structural-navy uppercase mb-6 flex items-center justify-center gap-2">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                <Card className="bg-brand-soft-neutral/10 border-brand-soft-neutral p-6 sm:mt-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                  <Brain className="text-brand-soft-teal mb-4" size={32} />
                  <Heading level={4} className="mb-2 text-lg">
                    Neural Integration
                  </Heading>
                  <Text size="sm" muted>
                    Connecting distinct functional areas to process trauma and
                    regulate emotion effectively.
                  </Text>
                </Card>
                <Card className="bg-brand-warm-white shadow border border-brand-soft-teal/30 p-6 sm:mb-8 relative z-10 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <Network className="text-brand-deep-teal mb-4" size={32} />
                  <Heading level={4} className="mb-2 text-lg">
                    Modal Synthesis
                  </Heading>
                  <Text size="sm" muted>
                    Combining CBT, psychodynamic, and humanistic models into a
                    unified framework.
                  </Text>
                </Card>
                <Card className="bg-white shadow border border-brand-soft-neutral p-6 col-span-2 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <Activity
                    className="text-brand-accent-orange mb-4"
                    size={32}
                  />
                  <Heading level={4} className="mb-2 text-lg">
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
                    className={\`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-brand-soft-teal/50 \${
                      selectedCategory === category 
                        ? "bg-brand-structural-navy text-white border-brand-structural-navy shadow-sm scale-105" 
                        : "bg-white text-brand-secondary-text border-brand-soft-neutral/50 hover:border-brand-soft-teal hover:text-brand-structural-navy"
                    }\`}
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
                <Text className="font-semibold text-brand-structural-navy text-sm uppercase tracking-wider">
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
                  <Heading
                    level={4}
                    className="mb-3 text-brand-structural-navy"
                  >
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
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl border border-brand-soft-neutral/40 transition-all duration-300 hover:border-brand-soft-teal hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="flex gap-5 pr-6 items-start sm:items-center w-full">
                        <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-lg bg-brand-soft-neutral/5 items-center justify-center border border-brand-soft-neutral/20 group-hover:bg-brand-soft-teal/5 group-hover:border-brand-soft-teal/30 transition-colors">
                          <FileText
                            className="text-brand-soft-neutral/50 group-hover:text-brand-soft-teal transition-colors"
                            size={20}
                          />
                        </div>
                        <div className="flex-1">
                          <Heading
                            level={4}
                            className="text-lg text-brand-structural-navy transition-colors font-medium mb-1.5 leading-snug group-hover:text-brand-deep-teal"
                          >
                            {paper.title}
                          </Heading>
                          <div className="flex items-center gap-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-brand-soft-neutral/10 text-brand-secondary-text group-hover:bg-brand-warm-white transition-colors">
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
`
);

fs.writeFileSync('src/pages/Research.tsx', updatedContent);
console.log('Update done.')
