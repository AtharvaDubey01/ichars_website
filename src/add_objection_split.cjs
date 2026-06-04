const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

const sec75St = c.indexOf('{/* 7.5 EFFECTIVENESS OF ONLINE TRAINING */}');
const sec9St = c.indexOf('{/* 9. EXPLORE COHORTS (CTA Section) */}');

if (sec75St > -1 && sec9St > -1) {
    const oldSec75 = c.substring(sec75St, sec9St);
    
    const newSec75 = `{/* 7.5 CLINICAL APPLICATION IN A DIGITAL ENVIRONMENT */}
      <Section
        theme="white"
        className="border-t border-brand-soft-neutral/30 bg-gradient-to-b from-brand-warm-white to-white"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="text-[10px] uppercase font-bold tracking-widest text-brand-soft-teal mb-4">
            Clinical Depth, Delivered Online
          </div>
          <Heading level={2} className="text-brand-structural-navy mb-6">
            A Digital Environment Built for Clinical Application
          </Heading>
          <Text size="lg" className="text-brand-secondary-text max-w-3xl mx-auto mb-8">
            Learning deep clinical skills like hypnosis, NLP, or cognitive behavioral therapy requires high-fidelity interaction. Our online ecosystems are engineered not as passive video lectures, but as active, supervised clinical practice spaces.
          </Text>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-stretch">
            {[
                {
                    title: "Live Peer Practice",
                    desc: "Practitioners break into supervised pairs/triads to immediately apply concepts, mirroring in-room experiences.",
                    icon: <Users className="w-6 h-6" />
                },
                {
                    title: "Real-Time Case Reviews",
                    desc: "Share real session challenges and receive multi-perspectival feedback from peers and mentors instantly.",
                    icon: <Activity className="w-6 h-6" />
                },
                {
                    title: "Direct Faculty Supervision",
                    desc: "Instructors observe breakout rooms, providing immediate, granular feedback on your clinical application.",
                    icon: <Target className="w-6 h-6" />
                }
            ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-brand-soft-neutral/50 shadow-sm transition-all hover:shadow-md group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-warm-white border border-brand-soft-neutral/50 flex items-center justify-center text-brand-soft-teal mb-6 group-hover:bg-brand-soft-teal group-hover:text-white transition-colors duration-300">
                        {feature.icon}
                    </div>
                    <h4 className="text-brand-structural-navy font-bold mb-3">{feature.title}</h4>
                    <Text size="sm" className="text-brand-secondary-text">{feature.desc}</Text>
                </div>
            ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-brand-structural-navy p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_100%_0%,#28A5A0_0%,transparent_60%)] opacity-20 pointer-events-none" />
            <div className="relative z-10">
                <div className="text-[10px] uppercase font-bold tracking-widest text-brand-soft-teal mb-2">The Practitioner Consensus</div>
                <Text className="text-white/90 italic font-medium m-0 max-w-lg">
                    "The level of interaction, observation, and direct feedback completely shifted my perspective on what's possible in an online clinical learning environment."
                </Text>
            </div>
            <div className="relative z-10 shrink-0">
                <Button href="#explore-cohorts" variant="primary" className="bg-white text-brand-structural-navy hover:bg-brand-warm-white">Explore Frameworks</Button>
            </div>
        </div>
      </Section>\n\n      `;
      
      c = c.substring(0, sec75St) + 
          `{!isOnlineObjectionOptimized ? (\n        <>\n          ` + oldSec75 + 
          `        </>\n      ) : (\n        <>\n          ` + newSec75 + 
          `        </>\n      )}\n\n      ` +
          c.substring(sec9St);
          
      fs.writeFileSync('src/pages/Cohorts.tsx', c);
      console.log('Split test configured');
} else {
    console.log('Error finding boundaries');
}
