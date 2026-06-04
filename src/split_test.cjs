const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace(
  'const [activeTab, setActiveTab] = useState(1);',
  'const [activeTab, setActiveTab] = useState(1);\n  const [isComparisonDeepened, setIsComparisonDeepened] = useState(false);'
);

const newToggle = `        <div className="flex items-center justify-between mb-2">
          <span className="text-brand-secondary-text font-medium text-[13px]">
            Deepen Comparison:
          </span>
          <button
            onClick={() => setIsComparisonDeepened(!isComparisonDeepened)}
            className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${isComparisonDeepened ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}\`}
          >
            <span
              className={\`inline-block h-3 w-3 transform rounded-full bg-white transition-transform \${isComparisonDeepened ? "translate-x-5" : "translate-x-1"}\`}
            />
          </button>
        </div>\n      </div>`;

c = c.replace('</div>\n      </div>\n\n      {/* 1. HERO SECTION */}', newToggle + '\n\n      {/* 1. HERO SECTION */}');

const sec6St = c.indexOf('{/* 6. PROGRAMS VS COHORTS (Selector) */}');
const sec7St = c.indexOf('{/* 7. WHO COHORTS Are FOR */}');

if (sec6St > -1 && sec7St > -1) {
  const oldSec6 = c.substring(sec6St, sec7St);
  
  const newSec6 = `{/* 6. PROGRAMS VS COHORTS (Parallel Comparison) */}
      <Section id="learning-paths" theme="tint" className="border-y border-brand-soft-neutral/30">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level={2} className="text-brand-deep-teal mb-4">
            Two Learning Environments. Same Philosophy.
          </Heading>
          <Text size="lg" className="text-brand-structural-navy">
            Choose the environment that best supports how you currently integrate and apply understanding. You can always start independently and join a cohort later.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* Independent Progression Column */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50 shadow-sm flex flex-col h-full">
            <div className="mb-8 border-b border-brand-soft-neutral/30 pb-6">
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary-text mb-2">Self-Paced Exploration</div>
              <Heading level={3} className="text-brand-structural-navy m-0">Independent Programs</Heading>
            </div>
            
            <Text className="text-brand-secondary-text mb-8">
              Focus on independent progression, flexible pacing, and conceptual exploration. 
            </Text>

            <div className="flex-grow">
              <div className="text-xs font-bold text-brand-structural-navy uppercase tracking-wider mb-4">Ideal for practitioners who prefer:</div>
              <ul className="space-y-3 mb-8">
                {["Flexible, unstructured pacing", "Independent study & reflection", "Autonomous conceptual integration", "Learning without scheduled commitments"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-brand-secondary-text items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-neutral/50 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto">
              <Button href="#programs" size="lg" variant="outline" className="w-full">Explore Programs</Button>
            </div>
          </div>

          {/* Cohort Integration Column */}
          <div className="bg-brand-structural-navy p-8 md:p-10 rounded-3xl border border-brand-structural-navy shadow-lg flex flex-col h-full relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#28A5A0_0%,transparent_60%)] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-30" />
            
            <div className="mb-8 border-b border-brand-soft-teal/30 pb-6 relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-teal mb-2">Guided Application</div>
              <Heading level={3} className="text-white m-0">Live Cohorts</Heading>
            </div>
            
            <Text className="text-white/80 mb-8 relative z-10">
              Engage in structured sessions, collaborative reflection, interactive learning, and applied clinical discussion.
            </Text>

            <div className="flex-grow relative z-10">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">Ideal for practitioners who want:</div>
              <ul className="space-y-3 mb-8">
                {["Live practitioner interaction", "Structured framework progression", "Real-world case discussions", "Direct guided feedback & supervision"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/90 items-start">
                    <div className="text-brand-soft-teal mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto relative z-10">
              <Button href="#explore-cohorts" size="lg" className="w-full bg-white text-brand-structural-navy hover:bg-brand-warm-white">Explore Cohorts</Button>
            </div>
          </div>
        </div>
      </Section>\n\n      `;

  c = c.substring(0, sec6St) + 
      "{!isComparisonDeepened ? (\n<>\n" + oldSec6 + "</>\n) : (\n<>\n" + newSec6 + "</>\n)}\n\n      " + c.substring(sec7St);
  
  fs.writeFileSync('src/pages/Cohorts.tsx', c);
  console.log("Success");
} else {
  console.log("Failed to find sections.");
}
