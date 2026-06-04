const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

const s3StartStr = '{/* Ultimate Learning Loop Visual */}';
const s3Start = c.indexOf(s3StartStr);
const s3EndStr = '<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">';
const s3End = c.indexOf(s3EndStr);

if (s3Start > -1 && s3End > -1) {
    const oldS3 = c.substring(s3Start, s3End);
    
    // Create new Gutenberg-friendly S3
    const newS3 = `{/* Ultimate Learning Loop Visual (Gutenberg Optimized Stackable Grid) */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-[10px] uppercase font-bold tracking-widest text-brand-soft-teal mb-8 text-center">
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
                icon: <MessageSquare className="w-5 h-5 text-brand-soft-teal" />,
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
                <div className="text-sm font-bold text-white mb-1 uppercase tracking-wider">
                  {step.label}
                </div>
                <div className="text-xs text-white/50">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 w-full mt-8">
            <div className="bg-brand-soft-teal/10 border border-brand-soft-teal/30 rounded-xl p-5 text-center flex flex-col justify-center items-center">
              <div className="font-bold text-brand-structural-navy mb-1">
                Intentional Application
              </div>
              <div className="text-xs text-brand-secondary-text">
                Guided real-world integration
              </div>
            </div>
            <div className="bg-brand-soft-teal/10 border border-brand-soft-teal/30 rounded-xl p-5 text-center flex flex-col justify-center items-center">
              <div className="font-bold text-brand-structural-navy mb-1">Community Support</div>
              <div className="text-xs text-brand-secondary-text">
                Shared feedback & collective growth
              </div>
            </div>
          </div>
        </div>\n\n        `;
        
    c = c.substring(0, s3Start) + 
      "{!isAuditRefactored ? (\n<>\n" + oldS3 + "</>\n) : (\n<>\n" + newS3 + "</>\n)}\n\n        " + c.substring(s3End);
}

const s5StartStr = '{/* Interactive "Inside a Cohort Session" Experience */}';
let s5Start = c.indexOf(s5StartStr);
const s5EndStr = '        <div className="max-w-3xl mx-auto text-center">';
let s5End = c.indexOf(s5EndStr);

if (s5Start > -1 && s5End > -1) {
    const oldS5 = c.substring(s5Start, s5End);
    
    // Create new Gutenberg-friendly S5
    const newS5 = `{/* Inside a Cohort Session (Gutenberg Optimized Stacked Columns) */}
        <div className="max-w-5xl mx-auto mb-16 space-y-12">
          {/* Phase 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-2 md:order-1">
              <Activity className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">Case Exploration</Heading>
              <Text className="text-brand-secondary-text mb-0">A practitioner presents an anonymized session scenario. The group explores the presenting symptoms, underlying patterns, and the initial interventions attempted. The focus is on gathering a comprehensive understanding before moving to solutions.</Text>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
               <img src="https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=800&auto=format&fit=crop" alt="Case Exploration" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-1 md:order-1 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
               <img src="https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=800&auto=format&fit=crop" alt="Reflective Discussion" className="w-full h-full object-cover" />
            </div>
            <div className="order-2 md:order-2 md:pl-6">
              <MessageSquare className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">Reflective Discussion</Heading>
              <Text className="text-brand-secondary-text mb-0">Facilitated dialogue where practitioners share diverse perspectives on the case. What emotional dynamics are present? What unconscious patterns might be maintaining the situation? The group engages in deep reflective questioning.</Text>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-2 md:order-1">
              <Network className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">Framework Application</Heading>
              <Text className="text-brand-secondary-text mb-0">Applying structural frameworks (like the ICHARS Layered Method) to the case. Mapping out how different interventions target different layers—behavioral, emotional, cognitive, and unconscious—to create an integrative plan.</Text>
            </div>
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
               <img src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=800&auto=format&fit=crop" alt="Framework Application" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Phase 4 */}
           <div className="grid md:grid-cols-2 gap-8 items-center bg-brand-warm-white p-8 md:p-12 rounded-3xl border border-brand-soft-neutral/50">
            <div className="order-1 md:order-1 rounded-2xl overflow-hidden aspect-video border border-brand-soft-neutral/30 shadow-md">
               <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" alt="Guided Feedback" className="w-full h-full object-cover" />
            </div>
            <div className="order-2 md:order-2 md:pl-6">
              <RefreshCw className="w-10 h-10 text-brand-soft-teal mb-4" />
              <Heading level={3} className="text-brand-structural-navy mb-4">Guided Feedback</Heading>
              <Text className="text-brand-secondary-text mb-0">Receiving structured, supportive feedback from experienced facilitators and peers. Focusing on refining practitioner presence, strengthening intervention rationale, and integrating learning into real-world practice.</Text>
            </div>
          </div>
        </div>\n\n        `;
        
    c = c.substring(0, s5Start) + 
      "{!isAuditRefactored ? (\n<>\n" + oldS5 + "</>\n) : (\n<>\n" + newS5 + "</>\n)}\n\n        " + c.substring(s5End);
}

fs.writeFileSync('src/pages/Cohorts.tsx', c);
