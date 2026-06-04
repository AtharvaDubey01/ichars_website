import { useState } from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { CheckList } from '../components/CheckList';
import { cn } from '../lib/utils';
import { ArrowRight, ChevronDown, MessageSquare, Compass, HelpCircle, Layers, Target, BookOpen, Quote, CheckCircle2, PlayCircle, Video } from 'lucide-react';

function VisualComponent({ type }: { type: string }) {
    if (type === 'chc-chp-matrix') {
        return (
            <div className="mt-6 border border-brand-soft-neutral/50 rounded-xl overflow-hidden bg-brand-warm-white">
                <div className="grid grid-cols-3 text-base font-bold border-b border-brand-soft-neutral/50 text-center bg-white">
                    <div className="p-3 bg-brand-soft-teal/10 text-brand-structural-navy border-r border-brand-soft-neutral/50">CHC</div>
                    <div className="p-3 bg-brand-structural-navy/5 text-brand-structural-navy border-r border-brand-soft-neutral/50">CHCP</div>
                    <div className="p-3 bg-brand-structural-navy/10 text-brand-structural-navy">CHP</div>
                </div>
                <div className="grid grid-cols-3 text-sm md:text-base text-brand-structural-navy font-medium divide-x divide-brand-soft-neutral/50 divide-y">
                    <div className="p-3 text-center">Transformational Coaching</div>
                    <div className="p-3 text-center">Advanced Behavioral Change</div>
                    <div className="p-3 text-center">Integrative Psychotherapy</div>
                    <div className="p-3 text-center">Coaching Conversations</div>
                    <div className="p-3 text-center">Emotional Mapping</div>
                    <div className="p-3 text-center">Therapeutic Conceptualization</div>
                    <div className="p-3 text-center">Emotional Conditioning</div>
                    <div className="p-3 text-center">Root-Cause Coaching</div>
                    <div className="p-3 text-center">Layered Complexity</div>
                    <div className="p-3 text-center">Conscious/Unconscious Alignment</div>
                    <div className="p-3 text-center bg-white">Deep Behavioral Transformation</div>
                    <div className="p-3 text-center bg-white">Integrative Therapeutic Depth</div>
                </div>
            </div>
        );
    }
    
    if (type === 'interactive-learning-style') {
        return (
            <div className="mt-8 bg-brand-soft-teal/5 border border-brand-soft-teal/20 rounded-xl p-4 md:p-6 text-center">
                <h5 className="font-bold text-brand-structural-navy mb-4">Which Learning Style Fits You?</h5>
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                    <div className="bg-white p-4 rounded-lg border border-brand-soft-neutral/30 shadow-sm relative hover:border-brand-soft-teal/50 transition-colors">
                        <div className="text-base font-semibold text-brand-structural-navy mb-2 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-brand-soft-teal"/> Independent Learner
                        </div>
                        <ul className="text-sm text-brand-secondary-text space-y-1 mb-4">
                            <li>• "I learn best independently."</li>
                            <li>• "I prefer flexible pacing."</li>
                        </ul>
                        <div className="mt-auto px-3 py-1.5 bg-brand-warm-white text-brand-structural-navy text-sm font-bold rounded inline-block">→ Recommended: Program</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-brand-soft-neutral/30 shadow-sm relative hover:border-brand-soft-teal/50 transition-colors">
                        <div className="text-base font-semibold text-brand-structural-navy mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-structural-navy"/> Collaborative Learner
                        </div>
                        <ul className="text-sm text-brand-secondary-text space-y-1 mb-4">
                            <li>• "I benefit from discussion."</li>
                            <li>• "I learn best through interaction."</li>
                        </ul>
                        <div className="mt-auto px-3 py-1.5 bg-brand-soft-teal/10 text-brand-structural-navy text-sm font-bold rounded inline-block">→ Recommended: Cohort</div>
                    </div>
                </div>
            </div>
        );
    }
    
    if (type === 'ecosystem-progression') {
        return (
            <div className="mt-8 py-6 relative flex flex-col items-center">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-soft-teal/20 -translate-x-1/2"></div>
                {[
                    "Foundations",
                    "Applied Development",
                    "Transformational/Therapeutic Depth",
                    "Guided Refinement",
                    "Specialization"
                ].map((step, idx, arr) => (
                    <div key={idx} className="relative z-10 w-full max-w-[280px] bg-white border border-brand-soft-teal/30 shadow-sm rounded-lg py-3 px-4 text-center my-3 text-base font-bold text-brand-structural-navy transition-transform hover:-translate-y-1 hover:shadow-md cursor-default">
                        {step}
                        {idx !== arr.length - 1 && (
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-brand-soft-teal">
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    }
    
    return null;
}

export const FAQ = () => {
    const [openId, setOpenId] = useState<string | null>("start");
    const [activeGroup, setActiveGroup] = useState<number>(0);

    return (
        <div className="bg-brand-warm-white text-brand-primary-text mb-20 md:mb-32">
            {/* 1. HERO SECTION */}
            <Section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden border-b border-brand-soft-neutral/30">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-structural-navy/5 via-brand-warm-white to-brand-soft-teal/10" />
                
                {/* Abstract Visual Elements */}
                <div className="absolute right-[-10%] top-0 w-[40%] h-full opacity-30 pointer-events-none hidden md:block">
                     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-brand-soft-teal fill-current">
                        <path d="M45.7,-76.4C58.9,-69.3,69.1,-55.3,77.2,-41.1C85.3,-26.9,91.3,-12.4,89.5,1.5C87.8,15.4,78.3,28.8,69.5,41.9C60.7,55,52.6,67.8,40.8,75.9C29,84,14.5,87.4,-0.1,87.6C-14.7,87.8,-29.3,84.7,-41.8,76.8C-54.2,68.9,-64.5,56.1,-73.4,42.4C-82.3,28.6,-89.8,13.8,-90.4,-1.2C-90.9,-16.2,-84.5,-31.4,-75,-44C-65.5,-56.7,-52.8,-66.8,-39,-73.6C-25.2,-80.4,-12.6,-83.9,1.3,-86C15.2,-88.1,30.4,-88.8,45.7,-76.4Z" transform="translate(100 100)" />
                     </svg>
                </div>
                
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <FadeIn className="w-full flex flex-col items-center text-center">
                        <div className="text-xs md:text-sm font-bold tracking-widest text-brand-soft-teal bg-brand-soft-teal/10 px-4 py-2 rounded-full border border-brand-soft-teal/20 uppercase mb-8 inline-flex items-center justify-center">
                            Frequently Asked Questions
                        </div>
                        <Heading level={1} className="text-4xl md:text-6xl lg:text-7xl text-brand-structural-navy font-bold leading-tight mb-6">
                            Questions usually become clearer when you understand your stage, direction, and next step.
                        </Heading>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start sm:items-stretch text-left max-w-3xl w-full mb-8">
                            <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 flex-1 shadow-sm h-full">
                                <div className="text-brand-soft-teal font-bold mb-3 uppercase tracking-wider text-sm">Most practitioners do not need:</div>
                                <ul className="space-y-2 text-brand-secondary-text text-base font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-soft-neutral rounded-full" />endless information</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-soft-neutral rounded-full" />more comparison</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-soft-neutral rounded-full" />pressure to “choose perfectly”</li>
                                </ul>
                            </div>
                            <div className="bg-brand-soft-teal/5 p-6 rounded-2xl border border-brand-soft-teal/20 flex-1 shadow-sm h-full">
                                <div className="text-brand-structural-navy font-bold mb-3 uppercase tracking-wider text-sm">They usually need:</div>
                                <CheckList
                                   items={[
                                       "clearer orientation",
                                       "understanding of progression",
                                       "confidence about the next step"
                                   ]}
                                   iconClassName="w-4 h-4"
                                   itemClassName="text-brand-structural-navy text-base font-medium gap-2 mb-0"
                                   className="space-y-2 h-full"
                                />
                            </div>
                        </div>
                        
                        <div className="bg-white px-6 py-5 rounded-2xl border border-brand-soft-neutral/50 text-brand-structural-navy shadow-md inline-flex flex-col sm:flex-row items-center sm:items-start gap-4 max-w-2xl text-center sm:text-left mt-4 mb-8">
                            <Quote className="w-8 h-8 text-brand-soft-teal shrink-0 opacity-50 hidden sm:block" />
                            <p className="text-base md:text-base font-semibold italic flex-1">
                                This page is designed to help you navigate the most common questions practitioners ask while exploring the ICHARS ecosystem.
                            </p>
                        </div>

                        <button className="flex items-center gap-3 bg-brand-structural-navy hover:bg-brand-deep-teal text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md group">
                            <PlayCircle className="w-5 h-5 text-brand-soft-teal group-hover:scale-110 transition-transform" />
                            <span>Watch 2-Min Overview</span>
                        </button>
                    </FadeIn>
                </div>
            </Section>

            {/* 2. FAQ CONTENT */}
            <Section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[280px_1fr] gap-12 items-start relative">
                    
                    {/* Sticky Sidebar Navigation */}
                    <div className="hidden md:block sticky top-32 space-y-2">
                        <div className="text-xs uppercase font-bold tracking-widest text-brand-secondary-text mb-4 pl-4">Categories</div>
                            <button onClick={() => setActiveGroup(0)} className={cn("w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all flex items-center gap-3", activeGroup === 0 ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>
                                <Compass className={cn("w-4 h-4", activeGroup === 0 ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />
                                <span>Choosing Your Starting Point</span>
                            </button>
                            <button onClick={() => setActiveGroup(1)} className={cn("w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all flex items-center gap-3", activeGroup === 1 ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>
                                <Layers className={cn("w-4 h-4", activeGroup === 1 ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />
                                <span>Understanding the Programs</span>
                            </button>
                            <button onClick={() => setActiveGroup(2)} className={cn("w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all flex items-center gap-3", activeGroup === 2 ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>
                                <BookOpen className={cn("w-4 h-4", activeGroup === 2 ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />
                                <span>Learning Formats</span>
                            </button>
                            <button onClick={() => setActiveGroup(3)} className={cn("w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all flex items-center gap-3", activeGroup === 3 ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>
                                <Target className={cn("w-4 h-4", activeGroup === 3 ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />
                                <span>Progression & Specialization</span>
                            </button>
                            <button onClick={() => setActiveGroup(4)} className={cn("w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all flex items-center gap-3", activeGroup === 4 ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>
                                <HelpCircle className={cn("w-4 h-4", activeGroup === 4 ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />
                                <span>Readiness, Confidence & Overwhelm</span>
                            </button>
                            <button onClick={() => setActiveGroup(5)} className={cn("w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all flex items-center gap-3", activeGroup === 5 ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>
                                <CheckCircle2 className={cn("w-4 h-4", activeGroup === 5 ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />
                                <span>Practical Questions</span>
                            </button>

                        <div className="bg-gradient-to-br from-brand-soft-teal/10 to-brand-soft-teal/5 rounded-2xl p-6 border border-brand-soft-teal/30 mt-8 relative overflow-hidden shadow-sm">
                            <div className="absolute -right-4 -top-4 opacity-5">
                                <HelpCircle className="w-32 h-32 text-brand-structural-navy" />
                            </div>
                            <div className="relative z-10 flex flex-col items-start text-left">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                    <Video className="w-5 h-5 text-brand-soft-teal" />
                                </div>
                                <h5 className="text-base font-bold text-brand-structural-navy mb-2">Still Unsure?</h5>
                                <p className="text-base text-brand-secondary-text mb-6 leading-relaxed">
                                    You don't need to get it perfect. Hop on a quick video call with our team. We'll help you choose your next step.
                                </p>
                                <a href="#consultation" className="text-base font-bold text-white bg-brand-structural-navy px-5 py-2.5 rounded-full hover:bg-brand-deep-teal shadow-md transition-all flex items-center gap-2">
                                    Book a Consultation <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Dropdown (Visible only on small screens) */}
                    <div className="md:hidden block mb-8">
                        <div className="text-xs uppercase font-bold tracking-widest text-brand-secondary-text mb-3">Jump to Category</div>
                        <div className="flex overflow-x-auto gap-2 pb-2 snap-x hide-scrollbar">
                                <button onClick={() => setActiveGroup(0)} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all border", activeGroup === 0 ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>
                                    Choosing Your Starting Point
                                </button>
                                <button onClick={() => setActiveGroup(1)} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all border", activeGroup === 1 ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>
                                    Understanding the Programs
                                </button>
                                <button onClick={() => setActiveGroup(2)} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all border", activeGroup === 2 ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>
                                    Learning Formats
                                </button>
                                <button onClick={() => setActiveGroup(3)} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all border", activeGroup === 3 ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>
                                    Progression & Specialization
                                </button>
                                <button onClick={() => setActiveGroup(4)} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all border", activeGroup === 4 ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>
                                    Readiness, Confidence & Overwhelm
                                </button>
                                <button onClick={() => setActiveGroup(5)} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-sm font-semibold transition-all border", activeGroup === 5 ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>
                                    Practical Questions
                                </button>

                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-12">
                            <div className={cn("transition-opacity duration-500", activeGroup === 0 ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                     <Compass className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />
                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">Choosing Your Starting Point</Heading>
                                </div>
                                <div className="space-y-4">
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "where-to-start" ? null : "where-to-start")} aria-expanded={openId === "where-to-start"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "where-to-start" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Where should I start?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "where-to-start" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "where-to-start" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Your starting point depends less on:</p>
                            <div className="pl-4 text-base font-medium text-brand-secondary-text list-disc">• titles</div>
                            <div className="pl-4 text-base font-medium text-brand-secondary-text list-disc">• certifications</div>
                            <div className="pl-4 text-base font-medium text-brand-secondary-text list-disc">• or “level”</div>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">And more on:</p>
                            <div className="pl-4 text-base font-medium text-brand-secondary-text list-disc">• your current developmental stage</div>
                            <div className="pl-4 text-base font-medium text-brand-secondary-text list-disc">• the kind of work you want to do</div>
                            <div className="pl-4 text-base font-medium text-brand-secondary-text list-disc">• the depth of understanding you are seeking</div>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">In general:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">Internship</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    Best for: psychology students, beginners, early-stage practitioners. Focus: foundational observation, practical exposure, beginner practitioner development
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">CHC (Cognitive Hypnotic Coaching)</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    Best for: coaches, practitioners wanting deeper transformational capability, people seeking stronger emotional and unconscious-pattern understanding. Focus: transformational coaching, conscious/unconscious alignment, emotional conditioning, deeper change work
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">CHP (Cognitive Hypnotic Psychotherapy)</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    Best for: therapists, psychologists, advanced coaches, practitioners wanting deeper integrative therapeutic understanding. Focus: layered complexity, root-cause understanding, integrative psychotherapy thinking, advanced therapeutic depth
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="mb-2 space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Still unsure?</p>
                                <p className="text-base font-medium text-brand-secondary-text">Use the consultation to find your starting point.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "multiple-pathways" ? null : "multiple-pathways")} aria-expanded={openId === "multiple-pathways"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "multiple-pathways" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        What if I relate to more than one pathway?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "multiple-pathways" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "multiple-pathways" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">That is very common.</p>
                            <p className="text-base font-medium text-brand-secondary-text">Practitioner development is rarely linear.</p>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">Many practitioners:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">begin in one pathway</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">deepen understanding elsewhere later</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">move between coaching and psychotherapy development over time</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="mb-2 space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">The ecosystem is intentionally designed to support:</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">flexibility</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">progression</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">evolving practitioner identity</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">You do not need to predict your entire future before beginning.</p>
                                <p className="text-base font-medium text-brand-secondary-text">You only need the right next developmental step.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "wrong-path" ? null : "wrong-path")} aria-expanded={openId === "wrong-path"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "wrong-path" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        What if I choose the wrong path?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "wrong-path" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "wrong-path" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">The ecosystem is intentionally flexible.</p>
                            <p className="text-base font-medium text-brand-secondary-text">You are not making a permanent identity decision.</p>
                            <p className="text-base font-medium text-brand-secondary-text">You are choosing your current developmental direction.</p>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">As practitioners grow:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">clarity evolves</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">interests deepen</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">specialization changes</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">confidence develops progressively</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Many practitioners refine their direction over time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                </div>
                            </div>
                            <div className={cn("transition-opacity duration-500", activeGroup === 1 ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                     <Layers className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />
                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">Understanding the Programs</Heading>
                                </div>
                                <div className="space-y-4">
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "chc-vs-chp" ? null : "chc-vs-chp")} aria-expanded={openId === "chc-vs-chp"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "chc-vs-chp" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        What is the difference between CHC, CHCP, and CHP?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "chc-vs-chp" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "chc-vs-chp" ? "max-h-[1000px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-4">
                            <p className="text-base md:text-base font-medium text-brand-secondary-text"><strong className="text-brand-structural-navy">CHC (Cognitive Hypnotic Coaching)</strong> focuses primarily on transformational coaching, emotional conditioning, unconscious behavioral patterns, and conscious/unconscious alignment. It is designed for powerful coaching conversations.</p>
                            <p className="text-base md:text-base font-medium text-brand-secondary-text"><strong className="text-brand-structural-navy">CHCP (Cognitive Hypnotic Change Practitioner)</strong> is an advanced credential that goes deeper into behavioral and emotional mapping for non-clinical practitioners, helping address root-cause patterns without crossing into clinical diagnosis.</p>
                            <p className="text-base md:text-base font-medium text-brand-secondary-text"><strong className="text-brand-structural-navy">CHP (Cognitive Hypnotic Psychotherapist)</strong> focuses deeply on integrative psychotherapy, treating clinical disorders, therapeutic conceptualization, and layered case complexity. It is exclusively for licensed mental health professionals.</p>
                        </div>
                        <VisualComponent type="chc-chp-matrix" />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "life-coach-chp" ? null : "life-coach-chp")} aria-expanded={openId === "life-coach-chp"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "life-coach-chp" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        I am a life coach. Can I call myself a Cognitive Hypnotic Psychotherapist after this course?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "life-coach-chp" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "life-coach-chp" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <p className="text-base md:text-base text-brand-secondary-text">
                            No. If you are not a licensed mental health professional, you will receive the <strong>Cognitive Hypnotic Change Practitioner (CHCP)</strong> credential. This credential ensures that you practice within your legal and ethical scope while still leveraging advanced transformational tools to drive deep behavioral and emotional change within coaching and healing environments.
                        </p>
                        {/* New link */}
                        <div className="pt-2">
                            <a href="#chcp-announcement" className="text-brand-structural-navy font-bold text-base hover:text-brand-deep-teal hover:underline flex items-center gap-2 transition-colors">
                                Read the philosophy behind our non-clinical pathway <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "chcp-vs-chp-curriculum" ? null : "chcp-vs-chp-curriculum")} aria-expanded={openId === "chcp-vs-chp-curriculum"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "chcp-vs-chp-curriculum" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Does the CHCP pathway teach different techniques than the CHP pathway?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "chcp-vs-chp-curriculum" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "chcp-vs-chp-curriculum" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <p className="text-base md:text-base text-brand-secondary-text">
                            No, the curriculum is identical. Both pathways go through the same rigorous and comprehensive program. The difference lies strictly in the application of these skills and the resulting certification title, which is designed to reflect and safeguard your legal scope of practice.
                        </p>
                        {/* New link */}
                        <div className="pt-2">
                            <a href="#chcp-announcement" className="text-brand-structural-navy font-bold text-base hover:text-brand-deep-teal hover:underline flex items-center gap-2 transition-colors">
                                Read the philosophy behind our non-clinical pathway <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "chp-higher" ? null : "chp-higher")} aria-expanded={openId === "chp-higher"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "chp-higher" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Is CHP “higher” than CHC?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "chp-higher" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "chp-higher" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Not necessarily.</p>
                            <p className="text-base font-medium text-brand-secondary-text">They are designed for different developmental focuses.</p>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">Some practitioners:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">remain primarily coaching-oriented</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">specialize deeply within transformational coaching</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="mb-2 space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Others:</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">move toward advanced psychotherapy depth</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">The ecosystem supports multiple valid practitioner pathways, not rigid hierarchy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "prior-experience" ? null : "prior-experience")} aria-expanded={openId === "prior-experience"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "prior-experience" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Do I need prior experience?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "prior-experience" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "prior-experience" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">Internship</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    No prior experience required.
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">CHC</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    Helpful, but not mandatory. Especially useful if you already work with people, coach informally, guide conversations professionally.
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">CHP</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    Some prior practitioner exposure is recommended because the focus includes layered therapeutic understanding, integrative conceptualization, advanced case complexity.
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">However, practitioners enter CHP from different backgrounds.</p>
                            </div>
                        </div>
                        {/* New link */}
                        <div className="pt-4 border-t border-brand-soft-neutral/10">
                            <a href="#chcp-announcement" className="text-brand-structural-navy font-bold text-base hover:text-brand-deep-teal hover:underline flex items-center gap-2 transition-colors">
                                Read the philosophy behind our non-clinical pathway <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "only-psychologists" ? null : "only-psychologists")} aria-expanded={openId === "only-psychologists"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "only-psychologists" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Is this only for psychologists?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "only-psychologists" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "only-psychologists" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">No.</p>
                            <p className="text-base font-medium text-brand-secondary-text">The ecosystem supports:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">psychology students</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">coaches</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">therapists</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">counselors</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">educators</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">transformational practitioners</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">professionals working deeply with people</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">What matters most is developmental readiness, willingness to reflect, interest in deeper understanding.</p>
                            </div>
                        </div>
                        {/* New link */}
                        <div className="pt-4 border-t border-brand-soft-neutral/10">
                            <a href="#chcp-announcement" className="text-brand-structural-navy font-bold text-base hover:text-brand-deep-teal hover:underline flex items-center gap-2 transition-colors">
                                Read the philosophy behind our non-clinical pathway <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                </div>
                            </div>
                            <div className={cn("transition-opacity duration-500", activeGroup === 2 ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                     <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />
                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">Learning Formats</Heading>
                                </div>
                                <div className="space-y-4">
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "programs-vs-cohorts" ? null : "programs-vs-cohorts")} aria-expanded={openId === "programs-vs-cohorts"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "programs-vs-cohorts" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        What is the difference between Programs and Cohorts?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "programs-vs-cohorts" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "programs-vs-cohorts" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Both follow the same developmental philosophy and ecosystem direction.</p>
                            <p className="text-base font-medium text-brand-secondary-text">The difference is primarily how learning happens.</p>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">Programs</p>
                            <p className="text-base font-medium text-brand-secondary-text">Best for practitioners who prefer:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">flexibility</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">independent learning</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">independent reflection</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">gradual integration</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="mb-2 space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Programs are reflection-oriented, flexible, self-directed.</p>
                                <p className="text-base font-medium text-brand-secondary-text"></p>
                                <p className="text-base font-medium text-brand-secondary-text">Cohorts</p>
                                <p className="text-base font-medium text-brand-secondary-text">Best for practitioners who benefit from:</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">guided discussion</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">collaborative learning</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">reflective feedback</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">structured accountability</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">practitioner interaction</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Cohorts are discussion-oriented, experiential, application-focused.</p>
                            </div>
                        </div>
                        <VisualComponent type="interactive-learning-style" />
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "move-between" ? null : "move-between")} aria-expanded={openId === "move-between"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "move-between" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Can I move between Programs and Cohorts later?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "move-between" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "move-between" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Yes.</p>
                            <p className="text-base font-medium text-brand-secondary-text">Many practitioners:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">begin independently and later join cohorts for deeper application</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="mb-2 space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Others:</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">begin inside cohorts and later continue through independent integration</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">The ecosystem is intentionally designed for movement, flexibility, long-term progression.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                </div>
                            </div>
                            <div className={cn("transition-opacity duration-500", activeGroup === 3 ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                     <Target className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />
                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">Progression & Specialization</Heading>
                                </div>
                                <div className="space-y-4">
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "know-specialization" ? null : "know-specialization")} aria-expanded={openId === "know-specialization"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "know-specialization" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Do I need to know my specialization right now?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "know-specialization" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "know-specialization" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">No.</p>
                            <p className="text-base font-medium text-brand-secondary-text">Most practitioners discover their long-term direction gradually.</p>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">Early development usually focuses on:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">foundations</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">observation</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">understanding</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">practical application</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">structured thinking</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Specialization often emerges later through experience, reflection, deeper practitioner identity development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "how-progression-happens" ? null : "how-progression-happens")} aria-expanded={openId === "how-progression-happens"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "how-progression-happens" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        How does progression usually happen?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "how-progression-happens" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "how-progression-happens" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Development often evolves progressively.</p>
                            <p className="text-base font-medium text-brand-secondary-text">For example:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">Psychology Student</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    Internship
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">Coach</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    CHC
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />
                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-base md:text-base">Therapist/Psychologist</div>
                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />
                                </div>
                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-sm md:text-base shadow-sm inline-block w-max sm:w-auto">
                                    CHP
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">These are not rigid tracks. They are examples of developmental progression.</p>
                            </div>
                        </div>
                        <VisualComponent type="ecosystem-progression" />
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "specialize-later" ? null : "specialize-later")} aria-expanded={openId === "specialize-later"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "specialize-later" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Can I specialize later?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "specialize-later" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "specialize-later" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Yes.</p>
                            <p className="text-base font-medium text-brand-secondary-text">Specialization pathways are designed to emerge after stronger foundational and integrative understanding develops.</p>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">Examples may include:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">relationship work</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">school counseling</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">transformational coaching</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">advanced psychotherapy</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">practitioner niche development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                </div>
                            </div>
                            <div className={cn("transition-opacity duration-500", activeGroup === 4 ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                     <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />
                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">Readiness, Confidence & Overwhelm</Heading>
                                </div>
                                <div className="space-y-4">
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "not-ready" ? null : "not-ready")} aria-expanded={openId === "not-ready"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "not-ready" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        What if I do not feel ready yet?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "not-ready" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "not-ready" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Most practitioners do not begin feeling fully confident.</p>
                            <p className="text-base font-medium text-brand-secondary-text">They usually begin with:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">curiosity</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">uncertainty</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">desire for deeper understanding</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">willingness to develop progressively</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Confidence usually develops during the process, not before it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "overwhelmed" ? null : "overwhelmed")} aria-expanded={openId === "overwhelmed"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "overwhelmed" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        What if I feel overwhelmed?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "overwhelmed" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "overwhelmed" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">That is often part of developmental growth.</p>
                            <p className="text-base font-medium text-brand-secondary-text">The important thing is:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">not trying to understand everything immediately</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">not comparing every pathway endlessly</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">not pressuring yourself to “master” the ecosystem upfront</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Focus on the next meaningful step. Clarity usually develops progressively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "how-long-confident" ? null : "how-long-confident")} aria-expanded={openId === "how-long-confident"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "how-long-confident" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        How long does it take to feel confident?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "how-long-confident" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "how-long-confident" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Confidence develops differently for different practitioners.</p>
                            <p className="text-base font-medium text-brand-secondary-text">Most people notice gradual shifts such as:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">clearer observation</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">stronger pattern recognition</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">more intentional sessions</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">improved structure during conversations</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">reduced overwhelm</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Confidence rarely appears suddenly.</p>
                                <p className="text-base font-medium text-brand-secondary-text">It usually develops through understanding, application, reflection, repeated experiential learning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "still-uncertain" ? null : "still-uncertain")} aria-expanded={openId === "still-uncertain"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "still-uncertain" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        What if I still feel uncertain after reading everything?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "still-uncertain" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "still-uncertain" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">That is completely normal.</p>
                            <p className="text-base font-medium text-brand-secondary-text">At this stage, many practitioners benefit more from:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">conversation</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">orientation</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">developmental guidance</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="mb-2 space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">rather than:</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">consuming even more information</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">That is why consultation and pathway guidance exist.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                </div>
                            </div>
                            <div className={cn("transition-opacity duration-500", activeGroup === 5 ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>
                                <div className="flex items-center gap-3 mb-6 md:mb-8">
                                     <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />
                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">Practical Questions</Heading>
                                </div>
                                <div className="space-y-4">
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "certification" ? null : "certification")} aria-expanded={openId === "certification"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "certification" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Will I receive certification?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "certification" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "certification" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Yes.</p>
                            <p className="text-base font-medium text-brand-secondary-text">Programs include certifications upon successful completion.</p>
                            <p className="text-base font-medium text-brand-secondary-text"></p>
                            <p className="text-base font-medium text-brand-secondary-text">However, legal scope of practice depends on:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">your country</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">local laws</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">professional regulations</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">The ecosystem focuses strongly on real practitioner capability, developmental understanding, practical application — not only credentials.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "time-invest" ? null : "time-invest")} aria-expanded={openId === "time-invest"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "time-invest" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        How much time should I expect to invest?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "time-invest" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "time-invest" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">These are experiential developmental pathways — not passive information programs.</p>
                            <p className="text-base font-medium text-brand-secondary-text">Meaningful growth usually requires:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">learning</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">reflection</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">application</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">active engagement</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">The more intentionally practitioners engage: the more deeply understanding develops.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">
            <button onClick={() => setOpenId(openId === "continue-working" ? null : "continue-working")} aria-expanded={openId === "continue-working"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">
                <div className="flex items-center gap-4">
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "continue-working" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">
                        Can I continue working or studying while learning?
                    </div>
                </div>
                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "continue-working" && "rotate-180")} />
            </button>
            <div className={cn("overflow-hidden transition-all duration-300", openId === "continue-working" ? "max-h-[800px]" : "max-h-0")}>
                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">
                    <div className="space-y-4 pt-4">
                        <div className="mb-4 space-y-2">
                            <p className="text-base font-medium text-brand-secondary-text">Yes.</p>
                            <p className="text-base font-medium text-brand-secondary-text">The ecosystem intentionally supports:</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">flexible progression</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">independent learning pathways</span>
                            </div>
                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-base md:text-base text-brand-structural-navy font-medium">
                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />
                                <span className="pt-0.5">multiple learning formats</span>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="space-y-2">
                                <p className="text-base font-medium text-brand-secondary-text">Many practitioners continue professional work, academic studies, client practice while progressing through the ecosystem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                                </div>
                            </div>

                    </div>

                </div>
            </Section>

            {/* 3. FINAL CALL TO ACTION */}
            <Section theme="dark" className="py-24 relative overflow-hidden">
                {/* Visual Background Elements */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-soft-teal rounded-full mix-blend-screen filter blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-50" />
                </div>
                
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <div className="text-xs md:text-base font-bold uppercase tracking-widest text-brand-soft-teal mb-8 inline-flex items-center justify-center p-2 bg-brand-soft-teal/10 rounded-full border border-brand-soft-teal/20 backdrop-blur-sm shadow-lg">
                        If you feel clearer now...
                    </div>
                    
                    <Heading level={2} className="text-3xl md:text-5xl text-white font-bold mb-6">
                        You do not need perfect certainty before beginning
                    </Heading>
                    
                    <div className="text-white/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl flex flex-col md:flex-row gap-6 justify-center text-left">
                         <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1">
                             <div className="font-bold text-white mb-2 text-base uppercase tracking-wide">Most practitioners do not begin with:</div>
                             <ul className="text-base space-y-1">
                                 <li>• complete clarity</li>
                                 <li>• full confidence</li>
                                 <li>• a perfectly mapped future</li>
                             </ul>
                         </div>
                         <div className="bg-[#6EBAB5]/10 p-6 rounded-2xl border border-[#6EBAB5]/20 flex-1">
                             <div className="font-bold text-white mb-2 text-base uppercase tracking-wide">They begin with:</div>
                             <ul className="text-base space-y-1">
                                 <li>• curiosity</li>
                                 <li>• developmental readiness</li>
                                 <li>• desire for deeper understanding</li>
                             </ul>
                         </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-structural-navy text-white px-4 py-1.5 rounded-full text-sm font-bold border border-white/10 shadow-lg tracking-wider">
                            THE IMPORTANT THING IS NOT CHOOSING PERFECTLY
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 md:gap-8 items-stretch pt-4">
                            <div className="text-left space-y-4 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#6EBAB5] text-sm font-bold uppercase tracking-widest mb-2">Primary</div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <Target className="w-5 h-5 text-[#6EBAB5]" />
                                        Find Your Starting Point
                                    </h3>
                                    <p className="text-base text-white/70">
                                        Use our structured consultation to get a customized recommendation based on your current stage.
                                    </p>
                                </div>
                                <Button href="#consultation" className="w-full bg-[#6EBAB5] hover:bg-[#5aa39e] text-brand-structural-navy px-6 py-3 mt-4">
                                    Book a Call
                                </Button>
                            </div>
                            
                            <div className="text-left space-y-4 flex flex-col justify-between relative">
                                <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
                                <div>
                                    <div className="text-brand-warm-white text-sm font-bold uppercase tracking-widest mb-2">Alternative</div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <Layers className="w-5 h-5 text-brand-warm-white" />
                                        View Ecosystem
                                    </h3>
                                    <p className="text-base text-white/70">
                                        See the full map of programs, cohorts, and specializations to understand the complete journey.
                                    </p>
                                </div>
                                <Button href="#programs" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 px-6 py-3 mt-4">
                                    Our Programs
                                </Button>
                            </div>
                            
                            <div className="text-left space-y-4 flex flex-col justify-between relative">
                                <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
                                <div>
                                    <div className="text-brand-warm-white text-sm font-bold uppercase tracking-widest mb-2">Immediate</div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <MessageSquare className="w-5 h-5 text-brand-warm-white" />
                                        Message Us
                                    </h3>
                                    <p className="text-base text-white/70">
                                        Have a specific question not covered here? Reach out directly via WhatsApp for a quick response.
                                    </p>
                                </div>
                                <Button href="https://wa.me/message/3OXYP2Z4XZ53A1" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 px-6 py-3 mt-4">
                                    WhatsApp Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
