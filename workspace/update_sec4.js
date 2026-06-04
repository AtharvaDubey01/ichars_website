const fs = require('fs');

let content = fs.readFileSync('src/pages/CHC.tsx', 'utf8');

// Add state for Section 4 Toggle
content = content.replace(
    "    const [approachTab, setApproachTab] = useState(0);",
    "    const [isUpdatedSection4, setIsUpdatedSection4] = useState(true);\n    const [approachTab, setApproachTab] = useState(0);"
);

// Add Top Toggle Menu
const toggleSnippet = `            {/* Split Test Toggle */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
                <div className="bg-white rounded-full shadow-lg border border-brand-soft-neutral p-1 flex items-center justify-between min-w-[140px]">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 text-brand-structural-navy hidden sm:block">Sec 4 Version:</span>
                    <button 
                        onClick={() => setIsUpdatedSection4(false)} 
                        className={cn(
                            "px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors",
                            !isUpdatedSection4 ? "bg-brand-structural-navy text-white" : "bg-brand-soft-neutral/20 text-brand-structural-navy hover:bg-brand-soft-neutral/40"
                        )}
                    >
                        Original
                    </button>
                    <button 
                        onClick={() => setIsUpdatedSection4(true)} 
                        className={cn(
                            "px-3 py-1.5 rounded-full text-[10px] font-bold transition-colors",
                            isUpdatedSection4 ? "bg-brand-structural-navy text-white" : "bg-brand-soft-neutral/20 text-brand-structural-navy hover:bg-brand-soft-neutral/40"
                        )}
                    >
                        Updated
                    </button>
                </div>
            </div>

            {/* 1. HERO SECTION */}`;

content = content.replace("            {/* 1. HERO SECTION */}", toggleSnippet);

const originalSec4 = `{/* 4. FROM METHODS TO TRANSFORMATIONAL CAPABILITY */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                 <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">The evolution from coaching conversations… to deeper transformational work</Heading>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_350px] gap-12 items-center">
                    <div>
                        <Text className="mb-6">Many coaches initially focus heavily on communication tools, coaching structures, accountability systems, and “what to ask next.” This is a natural stage of development.</Text>
                        <Text className="font-medium text-brand-structural-navy mb-6">Over time, many practitioners begin wanting greater transformational depth, stronger clarity in complex situations, deeper understanding of resistance, and clear understanding of unconscious patterns.</Text>
                        
                        <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 mb-8 shadow-sm">
                            <div className="text-[10px] font-bold text-brand-secondary-text uppercase tracking-widest mb-4">Sessions begin feeling:</div>
                            <div className="grid grid-cols-2 gap-3">
                                {["Less reactive", "More structured", "More emotionally aware", "Easier to navigate intentionally"].map((item, i) => (
                                     <div key={i} className="flex items-center gap-2 text-sm font-medium text-brand-structural-navy">
                                         <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0" />
                                         {item}
                                     </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-structural-navy p-8 rounded-3xl text-white shadow-xl h-full flex flex-col justify-center">
                        <div className="text-[10px] font-bold text-brand-soft-teal uppercase tracking-widest mb-8">Practitioner Evolution</div>
                        <div className="space-y-6 relative">
                            <div className="absolute left-[9px] top-[10px] bottom-[10px] w-[2px] bg-white/10 z-0" />
                            {[
                                "Certified Coach",
                                "Framework & Technique Focus",
                                "Pattern Recognition",
                                "Emotional Conditioning Awareness",
                                "Conscious–Unconscious Understanding",
                                "Transformational Capability"
                            ].map((step, i, arr) => (
                                <div key={i} className="flex items-start gap-4 relative z-10">
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 bg-brand-structural-navy transition-colors",
                                        i === arr.length - 1 ? "border-brand-soft-teal" : "border-white/30"
                                    )}>
                                        {i === arr.length - 1 && <div className="w-2 h-2 rounded-full bg-brand-soft-teal" />}
                                    </div>
                                    <span className={cn(
                                        "text-sm font-medium leading-tight",
                                        i === arr.length - 1 ? "text-brand-soft-teal" : "text-white/80"
                                    )}>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>`;

const newSec4 = `{/* 4. FROM METHODS TO TRANSFORMATIONAL CAPABILITY */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                {isUpdatedSection4 ? (
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Heading level={2} className="text-brand-deep-teal mb-6">The Journey to Transformational Capability</Heading>
                            <Heading level={3} className="text-xl md:text-2xl text-brand-structural-navy font-medium max-w-3xl mx-auto">Moving beyond surface-level techniques to structural pattern recognition.</Heading>
                        </div>
                        
                        <div className="relative pt-8">
                            {/* Connection Line */}
                            <div className="hidden md:block absolute top-[112px] left-[10%] right-[10%] h-[2px] bg-brand-soft-neutral/30 z-0" />
                            
                            <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 relative z-10 fade-in">
                                {/* Stage 1 */}
                                <div className="bg-white rounded-3xl p-8 border border-brand-soft-neutral/50 shadow-sm relative pt-12 transform transition-transform hover:-translate-y-1 duration-300">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-4 border-brand-warm-white flex justify-center items-center shadow-sm text-brand-secondary-text">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div className="text-center mb-6">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary-text mb-2">Stage 1</div>
                                        <Heading level={4} className="text-xl text-brand-structural-navy">The Foundational Coach</Heading>
                                    </div>
                                    <Text size="sm" className="text-brand-secondary-text text-center border-b border-brand-soft-neutral/30 pb-6 mb-6">Focuses heavily on communication tools, coaching structures, and accountability systems.</Text>
                                    
                                    <div className="space-y-3">
                                        <div className="text-xs font-semibold text-brand-structural-navy uppercase tracking-wider mb-3">Common Challenges:</div>
                                        <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-soft-neutral shrink-0 mt-0.5" /><span className="text-sm text-brand-secondary-text">Wondering "what to ask next"</span></div>
                                        <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-soft-neutral shrink-0 mt-0.5" /><span className="text-sm text-brand-secondary-text">Struggling with client resistance</span></div>
                                        <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-soft-neutral shrink-0 mt-0.5" /><span className="text-sm text-brand-secondary-text">Addressing surface behaviors</span></div>
                                    </div>
                                </div>

                                {/* Stage 2 */}
                                <div className="bg-white rounded-3xl p-8 border border-brand-soft-teal/30 shadow-md relative pt-12 transform md:-translate-y-4 transition-transform hover:-translate-y-5 duration-300">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white border-4 border-brand-soft-neutral/10 flex justify-center items-center shadow-sm text-brand-soft-teal">
                                        <Compass className="w-6 h-6" />
                                    </div>
                                    <div className="text-center mb-6">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-teal mb-2">Stage 2</div>
                                        <Heading level={4} className="text-xl text-brand-structural-navy">The Seeking Practitioner</Heading>
                                    </div>
                                    <Text size="sm" className="text-brand-secondary-text text-center border-b border-brand-soft-neutral/30 pb-6 mb-6">Wants greater transformational depth and clarity in complex client situations.</Text>
                                    
                                    <div className="space-y-3">
                                        <div className="text-xs font-semibold text-brand-structural-navy uppercase tracking-wider mb-3">The Shift:</div>
                                        <div className="flex gap-2 items-start"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /><span className="text-sm text-brand-secondary-text">Seeking deeper understanding of resistance</span></div>
                                        <div className="flex gap-2 items-start"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /><span className="text-sm text-brand-secondary-text">Desiring to see unconscious patterns</span></div>
                                        <div className="flex gap-2 items-start"><ArrowRight className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /><span className="text-sm text-brand-secondary-text">Moving beyond rigid frameworks</span></div>
                                    </div>
                                </div>

                                {/* Stage 3 */}
                                <div className="bg-brand-structural-navy rounded-3xl p-8 border border-brand-structural-navy shadow-xl relative pt-12 text-white transform md:-translate-y-8 transition-transform hover:-translate-y-9 duration-300">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-deep-teal border-4 border-brand-structural-navy flex justify-center items-center shadow-lg text-white">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div className="text-center mb-6">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-brand-soft-teal mb-2">Stage 3</div>
                                        <Heading level={4} className="text-xl text-white">The Transformational Coach</Heading>
                                    </div>
                                    <Text size="sm" className="text-white/80 text-center border-b border-white/20 pb-6 mb-6">Navigates sessions intentionally, with structural emotional awareness and deep capability.</Text>
                                    
                                    <div className="space-y-3">
                                        <div className="text-xs font-semibold text-brand-soft-teal uppercase tracking-wider mb-3">The Result:</div>
                                        <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /><span className="text-sm text-white/90">Sessions feel less reactive</span></div>
                                        <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /><span className="text-sm text-white/90">More emotionally aware and structured</span></div>
                                        <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /><span className="text-sm text-white/90">Capable of integrating identity & change</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                 <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">The evolution from coaching conversations… to deeper transformational work</Heading>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_350px] gap-12 items-center">
                    <div>
                        <Text className="mb-6">Many coaches initially focus heavily on communication tools, coaching structures, accountability systems, and “what to ask next.” This is a natural stage of development.</Text>
                        <Text className="font-medium text-brand-structural-navy mb-6">Over time, many practitioners begin wanting greater transformational depth, stronger clarity in complex situations, deeper understanding of resistance, and clear understanding of unconscious patterns.</Text>
                        
                        <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 mb-8 shadow-sm">
                            <div className="text-[10px] font-bold text-brand-secondary-text uppercase tracking-widest mb-4">Sessions begin feeling:</div>
                            <div className="grid grid-cols-2 gap-3">
                                {["Less reactive", "More structured", "More emotionally aware", "Easier to navigate intentionally"].map((item, i) => (
                                     <div key={i} className="flex items-center gap-2 text-sm font-medium text-brand-structural-navy">
                                         <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0" />
                                         {item}
                                     </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-structural-navy p-8 rounded-3xl text-white shadow-xl h-full flex flex-col justify-center">
                        <div className="text-[10px] font-bold text-brand-soft-teal uppercase tracking-widest mb-8">Practitioner Evolution</div>
                        <div className="space-y-6 relative">
                            <div className="absolute left-[9px] top-[10px] bottom-[10px] w-[2px] bg-white/10 z-0" />
                            {[
                                "Certified Coach",
                                "Framework & Technique Focus",
                                "Pattern Recognition",
                                "Emotional Conditioning Awareness",
                                "Conscious–Unconscious Understanding",
                                "Transformational Capability"
                            ].map((step, i, arr) => (
                                <div key={i} className="flex items-start gap-4 relative z-10">
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 bg-brand-structural-navy transition-colors",
                                        i === arr.length - 1 ? "border-brand-soft-teal" : "border-white/30"
                                    )}>
                                        {i === arr.length - 1 && <div className="w-2 h-2 rounded-full bg-brand-soft-teal" />}
                                    </div>
                                    <span className={cn(
                                        "text-sm font-medium leading-tight",
                                        i === arr.length - 1 ? "text-brand-soft-teal" : "text-white/80"
                                    )}>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                    </>
                )}
            </Section>`;

content = content.replace(originalSec4, newSec4);

fs.writeFileSync('src/pages/CHC.tsx', content);
console.log("Updated Section 4 successfully");
