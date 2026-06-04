const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace('  const [activeTab, setActiveTab] = useState(1);', '  const [activeTab, setActiveTab] = useState(1);\n  const [isSelectorMerged, setIsSelectorMerged] = useState(false);');

const toggleBlock = `{/* Split Test Toggles */}
      <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-xl shadow-lg border border-brand-soft-neutral/50 text-sm max-w-xs transition-opacity duration-300">
        <div className="font-bold text-brand-structural-navy mb-3 text-xs uppercase tracking-widest border-b border-brand-soft-neutral/30 pb-2">
          Active Split Tests
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-brand-secondary-text font-medium text-[13px]">
            Streamline Selector:
          </span>
          <button
            onClick={() => setIsSelectorMerged(!isSelectorMerged)}
            className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${isSelectorMerged ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}\`}
          >
            <span
              className={\`inline-block h-3 w-3 transform rounded-full bg-white transition-transform \${isSelectorMerged ? "translate-x-5" : "translate-x-1"}\`}
            />
          </button>
        </div>
      </div>\n\n      {/* 1. HERO SECTION */}`;

c = c.replace('{/* 1. HERO SECTION */}', toggleBlock);

const sec6St = c.indexOf('{/* 6. PROGRAMS VS COHORTS (Selector) */}');
const sec75St = c.indexOf('{/* 7.5 CLINICAL APPLICATION IN A DIGITAL ENVIRONMENT */}');

if (sec6St > -1 && sec75St > -1) {
  const oldCode = c.substring(sec6St, sec75St);
  
  const newCode = `{/* 6. PLATFORM VS COHORT ALIGNMENT (Merged) */}
      <Section id="learning-paths" theme="tint" className="border-y border-brand-soft-neutral/30">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level={2} className="text-brand-deep-teal mb-4">
            Learning Environment Alignment
          </Heading>
          <Text size="lg" className="text-brand-structural-navy">
            Both learning environments support the same developmental philosophy. The ideal fit depends on how you integrate and apply understanding most efficiently.
          </Text>
        </div>

        <div className="max-w-5xl mx-auto items-stretch grid lg:grid-cols-2 gap-8">
            <button
              onClick={() => setSelectedStyle(1)}
              className={\`text-left transition-all duration-300 outline-none p-8 md:p-10 rounded-3xl border shadow-sm relative group focus-visible:ring-4 focus-visible:ring-brand-soft-teal/20 \${selectedStyle === 1 ? 'bg-white border-brand-soft-teal ring-4 ring-brand-soft-teal/10 hover:shadow-md' : 'bg-brand-warm-white border-brand-soft-neutral/50 hover:bg-white hover:border-brand-soft-teal/50'} \`}
            >
              <div className="flex justify-between items-start mb-8">
                 <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary-text mb-2">Self-Paced Progression</div>
                    <Heading level={3} className="text-brand-structural-navy m-0">Platform Programs</Heading>
                 </div>
                 <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 \${selectedStyle === 1 ? 'border-brand-soft-teal' : 'border-brand-soft-neutral/50 group-hover:border-brand-soft-teal/50'}\`}>
                    {selectedStyle === 1 && <div className="w-3 h-3 rounded-full bg-brand-soft-teal" />}
                 </div>
              </div>

              <Text className="text-brand-secondary-text mb-8">Focus on independent progression, flexible pacing, and conceptual exploration. You can always integrate into cohorts later.</Text>

              <div className="space-y-6">
                 <div>
                    <div className="text-xs font-bold text-brand-structural-navy uppercase tracking-wider mb-3">Ideal If You Prefer:</div>
                    <ul className="space-y-2">
                      {["Flexible, unstructured pacing", "Independent study & reflection", "Autonomous integration", "Solitary exploration"].map((item, i) => (
                           <li key={i} className="flex gap-3 text-sm text-brand-secondary-text items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-soft-neutral/50" />
                              <span>{item}</span>
                           </li>
                      ))}
                    </ul>
                 </div>
              </div>
              
              <div className={\`mt-10 overflow-hidden transition-all duration-500 origin-top \${selectedStyle === 1 ? 'max-h-40 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}\`}>
                 <Button href="#programs" size="lg" className="w-full shadow-md">Explore Programs</Button>
              </div>
            </button>
            
            <button
              onClick={() => setSelectedStyle(2)}
              className={\`text-left transition-all duration-300 outline-none p-8 md:p-10 rounded-3xl border shadow-sm relative group focus-visible:ring-4 focus-visible:ring-brand-soft-teal/20 \${selectedStyle === 2 ? 'bg-brand-structural-navy text-white border-brand-structural-navy ring-4 ring-brand-structural-navy/20 shadow-lg' : 'bg-brand-warm-white border-brand-soft-neutral/50 hover:bg-brand-structural-navy hover:text-white'} \`}
            >
              <div className="flex justify-between items-start mb-8">
                 <div>
                    <div className={\`text-[10px] font-bold uppercase tracking-widest mb-2 \${selectedStyle === 2 ? 'text-brand-soft-teal' : 'text-brand-secondary-text group-hover:text-brand-soft-teal'}\`}>Guided Application</div>
                    <Heading level={3} className={\`m-0 \${selectedStyle === 2 ? 'text-white' : 'text-brand-structural-navy group-hover:text-white'}\`}>Live Cohorts</Heading>
                 </div>
                 <div className={\`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 \${selectedStyle === 2 ? 'border-brand-soft-teal bg-white/10' : 'border-brand-soft-neutral/50 group-hover:border-white/50'}\`}>
                    {selectedStyle === 2 && <div className="w-3 h-3 rounded-full bg-brand-soft-teal shadow-[0_0_8px_rgba(40,165,160,0.8)]" />}
                 </div>
              </div>

              <Text className={\`mb-8 \${selectedStyle === 2 ? 'text-white/80' : 'text-brand-secondary-text group-hover:text-white/80'}\`}>Engage in structured sessions, collaborative reflection, interactive learning, and applied discussion.</Text>

              <div className="space-y-6">
                 <div>
                    <div className={\`text-xs font-bold uppercase tracking-wider mb-3 \${selectedStyle === 2 ? 'text-white' : 'text-brand-structural-navy group-hover:text-white'}\`}>Ideal If You Want:</div>
                    <ul className="space-y-2">
                       {["Live practitioner interaction", "Structured framework progression", "Real-world case discussions", "Direct guided feedback"].map((item, i) => (
                           <li key={i} className={\`flex gap-3 text-sm items-center \${selectedStyle === 2 ? 'text-white/90' : 'text-brand-secondary-text group-hover:text-white/90'}\`}>
                              <CheckCircle2 className={\`w-4 h-4 \${selectedStyle === 2 ? 'text-brand-soft-teal' : 'text-brand-soft-neutral/50 group-hover:text-brand-soft-teal'}\`} />
                              <span>{item}</span>
                           </li>
                      ))}
                    </ul>
                 </div>
              </div>
              
              <div className={\`mt-10 overflow-hidden transition-all duration-500 origin-top \${selectedStyle === 2 ? 'max-h-40 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}\`}>
                 <Button href="#explore-cohorts" size="lg" className="w-full bg-white text-brand-structural-navy hover:bg-brand-warm-white hover:text-brand-structural-navy shadow-md">Explore Cohorts</Button>
              </div>
            </button>
        </div>
      </Section>\n\n      `;
      
      c = c.substring(0, sec6St) + 
          "{!isSelectorMerged ? (\n<>\n" + oldCode + "\n</>\n) : (\n<>\n" + newCode + "\n</>\n)}\n\n" + c.substring(sec75St);
          
      fs.writeFileSync("src/pages/Cohorts.tsx", c);
      console.log('Split replaced!');
} else {
  console.log('Cannot find boundaries', sec6St, sec75St);
}
