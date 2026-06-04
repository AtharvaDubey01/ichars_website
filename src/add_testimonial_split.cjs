const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace(
  'const [activeTab, setActiveTab] = useState(1);',
  'const [activeTab, setActiveTab] = useState(1);\n  const [isTestimonialWallElevated, setIsTestimonialWallElevated] = useState(false);'
);

const newToggle = `      {/* Split Test Toggles */}
      <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-xl shadow-lg border border-brand-soft-neutral/50 text-sm max-w-xs transition-opacity duration-300">
        <div className="font-bold text-brand-structural-navy mb-3 text-xs uppercase tracking-widest border-b border-brand-soft-neutral/30 pb-2">
          Active Split Tests
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-brand-secondary-text font-medium text-[13px]">
            Elevate Testimonial Wall:
          </span>
          <button
            onClick={() => setIsTestimonialWallElevated(!isTestimonialWallElevated)}
            className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${isTestimonialWallElevated ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}\`}
          >
            <span
              className={\`inline-block h-3 w-3 transform rounded-full bg-white transition-transform \${isTestimonialWallElevated ? "translate-x-5" : "translate-x-1"}\`}
            />
          </button>
        </div>
      </div>\n\n      {/* 1. HERO SECTION */}`;

c = c.replace('{/* 1. HERO SECTION */}', newToggle);

const sec2Start = c.indexOf('{/* 2. WHY SOME PRACTITIONERS PREFER COHORT LEARNING */}');
const sec3Start = c.indexOf('{/* 3. THE ECOSYSTEM EXPERIENCE (Consolidated) */}');

if (sec2Start > -1 && sec3Start > -1) {
  const oldSec2 = c.substring(sec2Start, sec3Start);
  
  const quotesData = `const quotesList = [
    {
      text: "Hearing how other practitioners conceptualized situations helped me notice patterns I would have missed alone.",
      author: "Psychotherapist",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      text: "The discussions helped me apply concepts more clearly in real sessions.",
      author: "Clinical Psychologist",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      text: "I realized I was learning not only from teaching — but from observation and reflection inside the group.",
      author: "Counseling Psychologist",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&h=150&auto=format&fit=crop",
    },
    {
      text: "Seeing live application of the framework gave me the exact clarity I needed for my practice.",
      author: "Mental Health Counselor",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&h=150&auto=format&fit=crop",
    }
  ];`;

  const quoteCard = `(quote, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 shadow-sm relative group transition-all duration-300 hover:shadow-md hover:border-brand-soft-teal/30 flex flex-col gap-4"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-soft-teal opacity-10 transition-opacity duration-300 group-hover:opacity-20 pointer-events-none" />
                  <Text
                    size="sm"
                    className="relative z-10 font-medium text-brand-structural-navy/90 italic m-0 flex-grow"
                  >
                    "{quote.text}"
                  </Text>
                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={quote.img}
                      alt="Practitioner"
                      className="w-8 h-8 rounded-full object-cover border border-brand-warm-white shadow-sm"
                    />
                    <div className="text-[10px] font-bold text-brand-soft-teal uppercase tracking-widest leading-tight">
                      {quote.author}
                    </div>
                  </div>
                </div>
              )`;

  const newSec2 = `{/* 2. WHY SOME PRACTITIONERS PREFER COHORT LEARNING (Elevated Masonry) */}
      <Section theme="tint" className="border-t border-brand-soft-neutral/30 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="relative z-10">
            <Heading level={2} className="text-brand-structural-navy mb-6">
              Some forms of understanding develop more deeply through
              interaction and guided application
            </Heading>
            <Text className="mb-6 text-brand-secondary-text max-w-lg">
              Many practitioners notice that certain kinds of learning become
              clearer when they can discuss cases, explore perspectives, ask
              questions in real time, observe how others think, and reflect
              collaboratively.
            </Text>
            <Text className="mb-6 text-brand-secondary-text max-w-lg">
              Because practitioner development is not only intellectual. It also
              involves application, observation, reflective understanding, and
              practical integration.
            </Text>
            <Text className="mb-8 font-medium text-brand-structural-navy max-w-lg">
              For many practitioners, cohort environments help bridge the gap
              between understanding concepts and applying them more naturally in
              real situations.
            </Text>
            <Button
              href="#how-cohorts-work"
              variant="outline"
              className="group"
            >
              Explore the Cohort Experience
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-soft-teal/10 to-transparent rounded-3xl -m-4 sm:-m-8 z-0"></div>
            
            {/* Structural Masonry Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              <div className="flex flex-col gap-4 sm:mt-12">
                {[
                  {
                    text: "Hearing how other practitioners conceptualized situations helped me notice patterns I would have missed alone.",
                    author: "Psychotherapist",
                    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
                  },
                  {
                    text: "I realized I was learning not only from teaching — but from observation and reflection inside the group.",
                    author: "Counseling Psychologist",
                    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&h=150&auto=format&fit=crop",
                  }
                ].map(${quoteCard})}
              </div>
              <div className="flex flex-col gap-4 mb-12 sm:mb-0">
                {[
                  {
                    text: "The discussions helped me apply concepts more clearly in real sessions.",
                    author: "Clinical Psychologist",
                    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop",
                  },
                  {
                    text: "Seeing live application of the framework gave me the exact clarity I needed for my practice.",
                    author: "Mental Health Counselor",
                    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&h=150&auto=format&fit=crop",
                  }
                ].map(${quoteCard})}
              </div>
            </div>
            
            {/* Soft gradient fade for visual depth */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-warm-white to-transparent -m-4 sm:-m-8 z-20 pointer-events-none"></div>
          </div>
        </div>
      </Section>\n\n      `;
      
  c = c.substring(0, sec2Start) + 
      "{!isTestimonialWallElevated ? (\n<>\n" + oldSec2 + "</>\n) : (\n<>\n" + newSec2 + "</>\n)}\n\n      " + c.substring(sec3Start);
      
  fs.writeFileSync('src/pages/Cohorts.tsx', c);
}
