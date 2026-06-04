const fs = require('fs');

let content = fs.readFileSync('src/pages/CHC.tsx', 'utf8');

const originalSection3 = `                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Heading level={2} className="text-brand-deep-teal mb-6">A structured approach to transformational coaching</Heading>
                    <Text size="lg">CHC is designed to help practitioners understand transformation more deeply.</Text>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-brand-warm-white p-8 md:p-10 rounded-3xl border border-brand-soft-neutral/50">
                            <Text className="font-bold text-brand-structural-navy mb-4">It integrates insights from:</Text>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {["Cognitive approaches", "Behavioral understanding", "Hypnosis", "NLP", "Transformational coaching", "Emotional conditioning"].map((tag, i) => (
                                    <div key={i} className="bg-white border border-brand-soft-neutral px-3 py-1.5 rounded-md text-xs font-medium text-brand-secondary-text">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="border-l-2 border-brand-soft-teal pl-4 mb-8">
                                <Text className="font-medium text-brand-structural-navy mb-0">Not as isolated modalities. But as interconnected components within a structured transformational approach.</Text>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center">
                            <div className="bg-brand-structural-navy p-6 rounded-2xl border-l-4 border-l-brand-soft-teal shadow-md mb-8 text-white">
                                <Text className="font-bold text-brand-soft-teal mb-2">SOFT SEA® Framework</Text>
                                <Text size="sm" className="text-white/90 mb-0">CHC introduces practitioners to frameworks such as SOFT SEA® to support structured transformational observation, emotional pattern understanding, and conscious-unconscious integration. The purpose is not rigid scripting, but navigating transformation intentionally.</Text>
                            </div>
                            
                            <div className="pt-2">
                                <Button href="#explore-approach" variant="outline" className="w-full sm:w-auto bg-white">Explore the CHC Approach</Button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16 bg-brand-warm-white p-6 md:p-8 rounded-2xl border border-brand-soft-neutral/50 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                        <div className="w-12 h-12 rounded-xl bg-white text-brand-soft-teal flex items-center justify-center shrink-0 shadow-sm">
                            <Layers className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <Heading level={4} className="text-lg text-brand-structural-navy mb-2">A Shared Foundation</Heading>
                            <Text size="sm" className="mb-0 text-brand-secondary-text">
                                The complete CHC Diploma consists of <strong className="text-brand-structural-navy">Level 1 and Level 2</strong> of our broader curriculum. These two levels provide the complete foundational training for Coaching and optionally serve as the first half of the Psychotherapy (CHP) track. Importantly, <strong className="text-brand-structural-navy">you can begin with just Level 1</strong> to experience the transformational frameworks before committing to the full diploma. Upon completing the CHC Diploma, you can pursue further optional specializations.
                            </Text>
                        </div>
                    </div>

                    {/* Core Focus Areas */}
                    <div id="explore-approach" className="mt-16 bg-white rounded-3xl border border-brand-soft-neutral/50 shadow-sm overflow-hidden flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-brand-warm-white md:border-r border-brand-soft-neutral/30 flex flex-nowrap overflow-x-auto md:flex-col" role="tablist" aria-label="Core Focus Areas">
                            {focusAreas.map((area, i) => (
                                <button
                                    key={i}
                                    role="tab"
                                    aria-selected={activeTab === i}
                                    aria-controls={\`panel-\${i}\`}
                                    id={\`tab-\${i}\`}
                                    onClick={() => setActiveTab(i)}
                                    className={cn(
                                        "p-4 md:p-6 text-left border-b-2 md:border-b border-brand-soft-neutral/30 last:border-b-0 transition-colors relative flex items-center md:items-start gap-3 md:gap-4 flex-shrink-0 md:flex-shrink",
                                        activeTab === i 
                                            ? "bg-white border-b-brand-soft-teal md:border-b-brand-soft-neutral/30" 
                                            : "hover:bg-brand-soft-neutral/10 bg-transparent"
                                    )}
                                >
                                    {activeTab === i && <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal" />}
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
                                        activeTab === i 
                                            ? "bg-brand-soft-teal/20 text-brand-soft-teal" 
                                            : "bg-white text-brand-secondary-text shadow-sm"
                                    )}>
                                        {area.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className={cn(
                                            "text-sm font-bold mb-1 transition-colors",
                                            activeTab === i ? "text-brand-structural-navy" : "text-brand-secondary-text"
                                        )}>
                                            {area.title}
                                        </div>
                                    </div>
                                    <ArrowRight className={cn(
                                        "w-4 h-4 shrink-0 transition-opacity",
                                        activeTab === i ? "text-brand-soft-teal opacity-100" : "opacity-0"
                                    )} />
                                </button>
                            ))}
                        </div>
                        <div 
                            className="w-full md:w-2/3 p-8 md:p-12 relative min-h-[400px] flex flex-col focus:outline-none"
                            role="tabpanel"
                            id={\`panel-\${activeTab}\`}
                            aria-labelledby={\`tab-\${activeTab}\`}
                            tabIndex={0}
                        >
                            <div className="absolute inset-0 z-0">
                                <img src={focusAreas[activeTab].image} alt={focusAreas[activeTab].title} className="w-full h-full object-cover opacity-[0.03] transition-opacity duration-500" />
                            </div>
                            <div className="relative z-10 flex-1 flex flex-col justify-center">
                                <div className="w-12 h-12 rounded-full bg-brand-soft-teal/10 flex items-center justify-center text-brand-soft-teal mb-6">
                                    {focusAreas[activeTab].icon}
                                </div>
                                <Heading level={3} className="text-2xl text-brand-structural-navy mb-4">
                                    {focusAreas[activeTab].title}
                                </Heading>
                                <Text size="lg" className="font-medium text-brand-structural-navy/80 mb-4">
                                    {focusAreas[activeTab].description}
                                </Text>
                                <div className="bg-brand-warm-white p-6 rounded-2xl border border-brand-soft-neutral/50">
                                    <Text size="sm" className="text-brand-secondary-text mb-0">
                                        {focusAreas[activeTab].details}
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;


const updatedContent = `                {isUpdatedSection3 ? (
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Heading level={2} className="text-brand-deep-teal mb-6">The CHC Methodology</Heading>
                            <Heading level={3} className="text-xl md:text-2xl text-brand-structural-navy font-medium max-w-3xl mx-auto">A structured approach to transformational coaching</Heading>
                        </div>

                        <div className="bg-white rounded-3xl overflow-hidden border border-brand-soft-neutral/50 shadow-sm">
                            <div className="flex flex-col md:flex-row border-b border-brand-soft-neutral/30 bg-brand-warm-white bg-opacity-50">
                                <button 
                                    onClick={() => setApproachTab(0)}
                                    className={cn("flex-1 py-4 px-6 text-sm font-bold uppercase tracking-widest text-center border-b-2 transition-colors", approachTab === 0 ? "border-brand-structural-navy text-brand-structural-navy bg-white" : "border-transparent text-brand-secondary-text hover:text-brand-structural-navy hover:bg-white/50")}
                                >
                                    Integrated Modalities
                                </button>
                                <button 
                                    onClick={() => setApproachTab(1)}
                                    className={cn("flex-1 py-4 px-6 text-sm font-bold uppercase tracking-widest text-center border-b-2 transition-colors md:border-l md:border-t-0 border-t border-brand-soft-neutral/30", approachTab === 1 ? "border-brand-structural-navy text-brand-structural-navy bg-white" : "border-transparent text-brand-secondary-text hover:text-brand-structural-navy hover:bg-white/50")}
                                >
                                    SOFT SEA® Framework
                                </button>
                                <button 
                                    onClick={() => setApproachTab(2)}
                                    className={cn("flex-1 py-4 px-6 text-sm font-bold uppercase tracking-widest text-center border-b-2 transition-colors md:border-l md:border-t-0 border-t border-brand-soft-neutral/30", approachTab === 2 ? "border-brand-structural-navy text-brand-structural-navy bg-white" : "border-transparent text-brand-secondary-text hover:text-brand-structural-navy hover:bg-white/50")}
                                >
                                    Core Focus Areas
                                </button>
                            </div>
                            
                            <div className="p-8 md:p-12 relative min-h-[400px]">
                                {approachTab === 0 && (
                                    <div className="max-w-3xl mx-auto align-middle flex flex-col justify-center h-full space-y-8 fade-in">
                                        <div className="text-center space-y-4">
                                            <Heading level={3} className="text-2xl text-brand-structural-navy">Beyond Isolated Modalities</Heading>
                                            <Text className="text-brand-secondary-text text-lg">CHC integrates insights from Cognitive Approaches, Behavioral Understanding, Hypnosis, NLP, and Emotional Conditioning.</Text>
                                        </div>
                                        <div className="bg-brand-warm-white p-8 rounded-2xl border border-brand-soft-neutral/30 text-center">
                                            <p className="text-brand-structural-navy font-medium italic">"Not as isolated modalities, but as interconnected components within a structured transformational approach."</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {["Cognitive approaches", "Behavioral understanding", "Hypnosis", "NLP", "Transformational coaching", "Emotional conditioning"].map((tag, i) => (
                                                <div key={i} className="bg-white border border-brand-soft-neutral px-4 py-2 rounded-full text-sm font-medium text-brand-secondary-text shadow-sm">
                                                    {tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {approachTab === 1 && (
                                    <div className="max-w-3xl mx-auto flex flex-col justify-center h-full space-y-8 fade-in">
                                        <div className="text-center space-y-4">
                                            <Heading level={3} className="text-2xl text-brand-structural-navy">Structured Clinical Navigation</Heading>
                                            <Text className="text-brand-secondary-text text-lg">CHC introduces practitioners to frameworks such as SOFT SEA® to support structured transformational observation.</Text>
                                        </div>
                                        <div className="bg-brand-structural-navy p-8 rounded-2xl border-l-4 border-brand-soft-teal text-white shadow-md">
                                            <Text size="sm" className="text-white/90 leading-relaxed mb-0">The SOFT SEA® framework is not a rigid script to follow, but a navigation system. It allows practitioners to intentionally observe emotional patterns, integrate conscious and unconscious processes, and adapt dynamically rather than wondering "what to ask next".</Text>
                                        </div>
                                    </div>
                                )}

                                {approachTab === 2 && (
                                    <div className="h-full fade-in">
                                        <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                                            <div className="space-y-6">
                                                <Heading level={3} className="text-2xl text-brand-structural-navy">Five Pillars of Focus</Heading>
                                                <Text className="text-brand-secondary-text">Our curriculum is built on core areas that develop deeper transformational capability.</Text>
                                                <div className="flex flex-col gap-3">
                                                    {focusAreas.map((area, i) => (
                                                        <button 
                                                            key={i}
                                                            onClick={(e) => { e.preventDefault(); setActiveTab(i); }}
                                                            className={cn("text-left p-3 rounded-xl border transition-colors flex items-center gap-3", activeTab === i ? "bg-brand-warm-white border-brand-soft-teal" : "border-brand-soft-neutral/30 hover:bg-brand-soft-neutral/10")}
                                                        >
                                                            <div className={cn("w-8 h-8 rounded-full flex justify-center items-center shrink-0", activeTab === i ? "bg-brand-soft-teal text-white" : "bg-white text-brand-secondary-text shadow-sm")}>
                                                                {area.icon}
                                                            </div>
                                                            <span className={cn("font-medium text-sm", activeTab === i ? "text-brand-structural-navy" : "text-brand-secondary-text")}>{area.title}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="bg-brand-warm-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                                                <div className="absolute inset-0 z-0">
                                                    <img src={focusAreas[activeTab].image} alt={focusAreas[activeTab].title} className="w-full h-full object-cover opacity-5" />
                                                </div>
                                                <div className="relative z-10 space-y-4">
                                                    <div className="w-10 h-10 rounded-full bg-brand-soft-teal/20 text-brand-soft-teal flex justify-center items-center">
                                                        {focusAreas[activeTab].icon}
                                                    </div>
                                                    <Heading level={4} className="text-xl text-brand-structural-navy">{focusAreas[activeTab].title}</Heading>
                                                    <Text className="font-medium text-brand-structural-navy/80 mb-2">{focusAreas[activeTab].description}</Text>
                                                    <Text size="sm" className="text-brand-secondary-text">{focusAreas[activeTab].details}</Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-12 bg-white p-6 md:p-8 rounded-2xl border border-brand-soft-neutral/50 flex flex-col md:flex-row items-center justify-center gap-6 shadow-sm text-center md:text-left mx-auto max-w-4xl">
                            <div className="w-12 h-12 rounded-xl bg-brand-soft-neutral/10 text-brand-soft-teal flex items-center justify-center shrink-0 shadow-sm border border-brand-soft-neutral/20">
                                <Layers className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <Heading level={4} className="text-lg text-brand-structural-navy mb-2">A Shared Foundation</Heading>
                                <Text size="sm" className="mb-0 text-brand-secondary-text">
                                    The complete CHC Diploma consists of <strong className="text-brand-structural-navy">Level 1 and Level 2</strong>. These provide the foundational training for Coaching and optionally serve as the first half of the Psychotherapy (CHP) track. <strong className="text-brand-structural-navy">You can begin with just Level 1</strong>.
                                </Text>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
${originalSection3}
                    </>
                )}`;

if (content.indexOf(originalSection3) === -1) {
    console.error("Could not find the target section in src/pages/CHC.tsx!");
    process.exit(1);
} else {
    content = content.replace(originalSection3, updatedContent);
    fs.writeFileSync('src/pages/CHC.tsx', content);
    console.log("Successfully updated Section 3.");
}
