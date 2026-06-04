const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace(
  'const [activeTab, setActiveTab] = useState(1);',
  'const [activeTab, setActiveTab] = useState(1);\n  const [isInteractiveCanvasRefined, setIsInteractiveCanvasRefined] = useState(false);'
);

const newToggle = `        <div className="flex items-center justify-between mb-2">
          <span className="text-brand-secondary-text font-medium text-[13px]">
            Refine Interactive Canvas:
          </span>
          <button
            onClick={() => setIsInteractiveCanvasRefined(!isInteractiveCanvasRefined)}
            className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${isInteractiveCanvasRefined ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}\`}
          >
            <span
              className={\`inline-block h-3 w-3 transform rounded-full bg-white transition-transform \${isInteractiveCanvasRefined ? "translate-x-5" : "translate-x-1"}\`}
            />
          </button>
        </div>
      </div>

      {/* 1. HERO SECTION */}`;

c = c.replace('      </div>\n\n      {/* 1. HERO SECTION */}', newToggle);

const sec5Start = c.indexOf('{/* Interactive "Inside a Cohort Session" Experience */}');
const sec5EndStr = '        <div className="max-w-3xl mx-auto text-center">';
const sec5End = c.indexOf(sec5EndStr);

if (sec5Start > -1 && sec5End > -1) {
    const oldSec5 = c.substring(sec5Start, sec5End);
    
    // We construct the new sec5 code
    const newSec5 = `{/* Interactive "Inside a Cohort Session" Experience (Refined Canvas) */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl border border-brand-soft-neutral/50 shadow-sm overflow-hidden mb-16 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-warm-white opacity-50 pointer-events-none" />
          
          <div className="grid md:grid-cols-12 gap-0 relative z-10">
            {/* Left Column: Vertical Accordion / Navigation */}
            <div className="col-span-12 md:col-span-5 border-r border-brand-soft-neutral/30 flex flex-col p-6 md:p-10 bg-white z-10">
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-teal mb-8 pl-4 border-l-2 border-brand-soft-teal">Session Flow</div>
              
              {[
                {
                  title: "Case Exploration",
                  desc: "Gathering comprehensive understanding before moving to solutions.",
                  icon: <Activity className="w-5 h-5" />,
                },
                {
                  title: "Reflective Discussion",
                  desc: "Deep reflective questioning and sharing diverse conceptual perspectives.",
                  icon: <MessageSquare className="w-5 h-5" />,
                },
                {
                  title: "Framework Application",
                  desc: "Mapping interventions across behavioral, emotional, and cognitive layers.",
                  icon: <Network className="w-5 h-5" />,
                },
                {
                  title: "Guided Feedback",
                  desc: "Structuring real-world application with supportive facilitator guidance.",
                  icon: <RefreshCw className="w-5 h-5" />,
                },
              ].map((item, i) => (
                <button
                  key={i}
                  className={cn(
                    "text-left p-5 rounded-2xl transition-all duration-300 relative group outline-none",
                    activeTab === i + 1 
                      ? "bg-brand-warm-white border border-brand-soft-neutral/50 shadow-sm" 
                      : "hover:bg-brand-warm-white/50 border border-transparent"
                  )}
                  onClick={() => setActiveTab(i + 1)}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={cn(
                      "p-2 rounded-lg transition-colors border",
                      activeTab === i + 1 ? "bg-white border-brand-soft-neutral/50 text-brand-soft-teal" : "bg-brand-warm-white border-transparent text-brand-secondary-text group-hover:text-brand-structural-navy"
                    )}>
                      {item.icon}
                    </div>
                    <h4 className={cn(
                      "font-bold transition-colors",
                      activeTab === i + 1 ? "text-brand-structural-navy" : "text-brand-secondary-text group-hover:text-brand-structural-navy"
                    )}>{item.title}</h4>
                  </div>
                  <p className={cn(
                    "text-sm overflow-hidden transition-all duration-500",
                    activeTab === i + 1 ? "max-h-24 opacity-100 mt-2 text-brand-structural-navy/80" : "max-h-0 opacity-0 text-brand-secondary-text"
                  )}>
                    {item.desc}
                  </p>
                  
                  {activeTab === i + 1 && (
                     <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-brand-warm-white border-t border-r border-brand-soft-neutral/50 hidden md:block" />
                  )}
                </button>
              ))}
            </div>
            
            {/* Right Column: Dynamic Visual Canvas */}
            <div className="col-span-12 md:col-span-7 bg-brand-warm-white p-6 md:p-10 flex items-center justify-center min-h-[400px] md:min-h-full relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,theme(colors.white/50%),transparent)] pointer-events-none" />
               
               <div className="relative z-10 w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border4 border-white">
                  {[
                    "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=800&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
                  ].map((img, i) => (
                    <img 
                      key={i}
                      src={img}
                      alt={\`Phase \${i+1}\`}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                        activeTab === i + 1 ? "opacity-100 z-10" : "opacity-0 z-0" 
                      )}
                    />
                  ))}
                  
                  {/* Subtle overlay gradient to make it feel premium */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-structural-navy/40 via-transparent to-transparent z-20 pointer-events-none" />
               </div>
            </div>
          </div>
        </div>\n\n`;

    c = c.substring(0, sec5Start) + 
      "{!isInteractiveCanvasRefined ? (\n<>\n" + oldSec5 + "</>\n) : (\n<>\n" + newSec5 + "</>\n)}\n\n" + sec5EndStr + c.substring(sec5End + sec5EndStr.length);

    fs.writeFileSync('src/pages/Cohorts.tsx', c);
} else {
    console.log("Could not find blocks:", sec5Start, sec5End);
}
