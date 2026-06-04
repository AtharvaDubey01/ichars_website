const fs = require('fs');

// Here is the complete original faqGroups array
const faqGroups = [
    {
        title: "Choosing Your Starting Point",
        icon: "Compass",
        qas: [
            {
                id: "where-to-start",
                q: "Where should I start?",
                intro: "Your starting point depends less on:\n• titles\n• certifications\n• or “level”\n\nAnd more on:\n• your current developmental stage\n• the kind of work you want to do\n• the depth of understanding you are seeking\n\nIn general:",
                bullets1: [
                    "Internship → Best for: psychology students, beginners, early-stage practitioners. Focus: foundational observation, practical exposure, beginner practitioner development",
                    "CHC (Cognitive Hypnotic Coaching) → Best for: coaches, practitioners wanting deeper transformational capability, people seeking stronger emotional and unconscious-pattern understanding. Focus: transformational coaching, conscious/unconscious alignment, emotional conditioning, deeper change work",
                    "CHP (Cognitive Hypnotic Psychotherapy) → Best for: therapists, psychologists, advanced coaches, practitioners wanting deeper integrative therapeutic understanding. Focus: layered complexity, root-cause understanding, integrative psychotherapy thinking, advanced therapeutic depth"
                ],
                mid: "Still unsure?\nUse the consultation to find your starting point."
            },
            {
                id: "multiple-pathways",
                q: "What if I relate to more than one pathway?",
                intro: "That is very common.\nPractitioner development is rarely linear.\n\nMany practitioners:",
                bullets1: [
                    "begin in one pathway",
                    "deepen understanding elsewhere later",
                    "move between coaching and psychotherapy development over time"
                ],
                mid: "The ecosystem is intentionally designed to support:",
                bullets2: [
                    "flexibility",
                    "progression",
                    "evolving practitioner identity"
                ],
                end: "You do not need to predict your entire future before beginning.\nYou only need the right next developmental step."
            },
            {
                id: "wrong-path",
                q: "What if I choose the wrong path?",
                intro: "The ecosystem is intentionally flexible.\nYou are not making a permanent identity decision.\nYou are choosing your current developmental direction.\n\nAs practitioners grow:",
                bullets1: [
                    "clarity evolves",
                    "interests deepen",
                    "specialization changes",
                    "confidence develops progressively"
                ],
                end: "Many practitioners refine their direction over time."
            }
        ]
    },
    {
        title: "Understanding the Programs",
        icon: "Layers",
        qas: [
            {
                id: "chc-vs-chp",
                q: "What is the difference between CHC and CHP?",
                intro: "CHC focuses primarily on:",
                bullets1: [
                    "transformational coaching",
                    "emotional conditioning",
                    "unconscious behavioral patterns",
                    "conscious/unconscious alignment",
                    "deeper transformational conversations"
                ],
                mid: "It is especially valuable for practitioners wanting stronger coaching depth, more consistent transformation, deeper understanding beneath behavior.\n\nCHP focuses more deeply on:",
                bullets2: [
                    "integrative psychotherapy thinking",
                    "layered case complexity",
                    "therapeutic conceptualization",
                    "root-cause understanding",
                    "advanced integrative therapeutic work"
                ],
                end: "It is especially valuable for practitioners wanting stronger therapeutic depth, integrative understanding, greater clarity in complex cases.",
                visual: "chc-chp-matrix"
            },
            {
                id: "chp-higher",
                q: "Is CHP “higher” than CHC?",
                intro: "Not necessarily.\nThey are designed for different developmental focuses.\n\nSome practitioners:",
                bullets1: [
                    "remain primarily coaching-oriented",
                    "specialize deeply within transformational coaching"
                ],
                mid: "Others:",
                bullets2: [
                    "move toward advanced psychotherapy depth"
                ],
                end: "The ecosystem supports multiple valid practitioner pathways, not rigid hierarchy."
            },
            {
                id: "prior-experience",
                q: "Do I need prior experience?",
                bullets1: [
                    "Internship → No prior experience required.",
                    "CHC → Helpful, but not mandatory. Especially useful if you already work with people, coach informally, guide conversations professionally.",
                    "CHP → Some prior practitioner exposure is recommended because the focus includes layered therapeutic understanding, integrative conceptualization, advanced case complexity."
                ],
                end: "However, practitioners enter CHP from different backgrounds."
            },
            {
                id: "only-psychologists",
                q: "Is this only for psychologists?",
                intro: "No.\nThe ecosystem supports:",
                bullets1: [
                    "psychology students",
                    "coaches",
                    "therapists",
                    "counselors",
                    "educators",
                    "transformational practitioners",
                    "professionals working deeply with people"
                ],
                end: "What matters most is developmental readiness, willingness to reflect, interest in deeper understanding."
            }
        ]
    },
    {
        title: "Learning Formats",
        icon: "BookOpen",
        qas: [
            {
                id: "programs-vs-cohorts",
                q: "What is the difference between Programs and Cohorts?",
                intro: "Both follow the same developmental philosophy and ecosystem direction.\nThe difference is primarily how learning happens.\n\nPrograms\nBest for practitioners who prefer:",
                bullets1: [
                    "flexibility",
                    "independent learning",
                    "independent reflection",
                    "gradual integration"
                ],
                mid: "Programs are reflection-oriented, flexible, self-directed.\n\nCohorts\nBest for practitioners who benefit from:",
                bullets2: [
                    "guided discussion",
                    "collaborative learning",
                    "reflective feedback",
                    "structured accountability",
                    "practitioner interaction"
                ],
                end: "Cohorts are discussion-oriented, experiential, application-focused.",
                visual: "interactive-learning-style"
            },
            {
                id: "move-between",
                q: "Can I move between Programs and Cohorts later?",
                intro: "Yes.\nMany practitioners:",
                bullets1: [
                    "begin independently and later join cohorts for deeper application"
                ],
                mid: "Others:",
                bullets2: [
                    "begin inside cohorts and later continue through independent integration"
                ],
                end: "The ecosystem is intentionally designed for movement, flexibility, long-term progression."
            }
        ]
    },
    {
        title: "Progression & Specialization",
        icon: "Target",
        qas: [
            {
                id: "know-specialization",
                q: "Do I need to know my specialization right now?",
                intro: "No.\nMost practitioners discover their long-term direction gradually.\n\nEarly development usually focuses on:",
                bullets1: [
                    "foundations",
                    "observation",
                    "understanding",
                    "practical application",
                    "structured thinking"
                ],
                end: "Specialization often emerges later through experience, reflection, deeper practitioner identity development."
            },
            {
                id: "how-progression-happens",
                q: "How does progression usually happen?",
                intro: "Development often evolves progressively.\nFor example:",
                bullets1: [
                    "Psychology Student → Internship → CHC/CHP → Cohorts → Specialization",
                    "Coach → CHC → CHP → Advanced Practice → Specialization",
                    "Therapist/Psychologist → CHP → Integrative Development → Specialization"
                ],
                end: "These are not rigid tracks. They are examples of developmental progression.",
                visual: "ecosystem-progression"
            },
            {
                id: "specialize-later",
                q: "Can I specialize later?",
                intro: "Yes.\nSpecialization pathways are designed to emerge after stronger foundational and integrative understanding develops.\n\nExamples may include:",
                bullets1: [
                    "relationship work",
                    "school counseling",
                    "transformational coaching",
                    "advanced psychotherapy",
                    "practitioner niche development"
                ]
            }
        ]
    },
    {
        title: "Readiness, Confidence & Overwhelm",
        icon: "HelpCircle",
        qas: [
            {
                id: "not-ready",
                q: "What if I do not feel ready yet?",
                intro: "Most practitioners do not begin feeling fully confident.\nThey usually begin with:",
                bullets1: [
                    "curiosity",
                    "uncertainty",
                    "desire for deeper understanding",
                    "willingness to develop progressively"
                ],
                end: "Confidence usually develops during the process, not before it."
            },
            {
                id: "overwhelmed",
                q: "What if I feel overwhelmed?",
                intro: "That is often part of developmental growth.\nThe important thing is:",
                bullets1: [
                    "not trying to understand everything immediately",
                    "not comparing every pathway endlessly",
                    "not pressuring yourself to “master” the ecosystem upfront"
                ],
                end: "Focus on the next meaningful step. Clarity usually develops progressively."
            },
            {
                id: "how-long-confident",
                q: "How long does it take to feel confident?",
                intro: "Confidence develops differently for different practitioners.\nMost people notice gradual shifts such as:",
                bullets1: [
                    "clearer observation",
                    "stronger pattern recognition",
                    "more intentional sessions",
                    "improved structure during conversations",
                    "reduced overwhelm"
                ],
                end: "Confidence rarely appears suddenly.\nIt usually develops through understanding, application, reflection, repeated experiential learning."
            },
            {
                id: "still-uncertain",
                q: "What if I still feel uncertain after reading everything?",
                intro: "That is completely normal.\nAt this stage, many practitioners benefit more from:",
                bullets1: [
                    "conversation",
                    "orientation",
                    "developmental guidance"
                ],
                mid: "rather than:",
                bullets2: [
                    "consuming even more information"
                ],
                end: "That is why consultation and pathway guidance exist."
            }
        ]
    },
    {
        title: "Practical Questions",
        icon: "CheckCircle2",
        qas: [
            {
                id: "certification",
                q: "Will I receive certification?",
                intro: "Yes.\nPrograms include certifications upon successful completion.\n\nHowever, legal scope of practice depends on:",
                bullets1: [
                    "your country",
                    "local laws",
                    "professional regulations"
                ],
                end: "The ecosystem focuses strongly on real practitioner capability, developmental understanding, practical application — not only credentials."
            },
            {
                id: "time-invest",
                q: "How much time should I expect to invest?",
                intro: "These are experiential developmental pathways — not passive information programs.\nMeaningful growth usually requires:",
                bullets1: [
                    "learning",
                    "reflection",
                    "application",
                    "active engagement"
                ],
                end: "The more intentionally practitioners engage: the more deeply understanding develops."
            },
            {
                id: "continue-working",
                q: "Can I continue working or studying while learning?",
                intro: "Yes.\nThe ecosystem intentionally supports:",
                bullets1: [
                    "flexible progression",
                    "independent learning pathways",
                    "multiple learning formats"
                ],
                end: "Many practitioners continue professional work, academic studies, client practice while progressing through the ecosystem."
            }
        ]
    }
];

let desktopTabs = '';
let mobileTabs = '';
let itemsContainer = '';

faqGroups.forEach((group, idx) => {
    desktopTabs += `                            <button onClick={() => setActiveGroup(${idx})} className={cn("w-full text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-3", activeGroup === ${idx} ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>\n                                <${group.icon} className={cn("w-4 h-4", activeGroup === ${idx} ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />\n                                <span>${group.title}</span>\n                            </button>\n`;
    
    mobileTabs += `                                <button onClick={() => setActiveGroup(${idx})} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold transition-all border", activeGroup === ${idx} ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>\n                                    ${group.title}\n                                </button>\n`;

    let qasHTML = '';
    group.qas.forEach(qa => {
        let content = '';
        if (qa.intro) {
            content += `                        <div className="mb-4 space-y-2">\n`;
            qa.intro.split('\n').forEach(line => {
                if (line.startsWith('•')) {
                    content += `                            <div className="pl-4 text-sm font-medium text-brand-secondary-text list-disc">${line}</div>\n`;
                } else {
                    content += `                            <p className="text-sm font-medium text-brand-secondary-text">${line}</p>\n`;
                }
            });
            content += `                        </div>\n`;
        }
        if (qa.bullets1) {
            content += `                        <div className="space-y-3">\n`;
            qa.bullets1.forEach(b => {
                if (b.includes('→')) {
                    const [left, right] = b.split('→');
                    content += `                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">\n                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />\n                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-sm md:text-base">${left.trim()}</div>\n                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">\n                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />\n                                </div>\n                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-xs md:text-sm shadow-sm inline-block w-max sm:w-auto">\n                                    ${right.trim()}\n                                </div>\n                            </div>\n`;
                } else {
                    content += `                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-sm md:text-base text-brand-structural-navy font-medium">\n                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />\n                                <span className="pt-0.5">${b}</span>\n                            </div>\n`;
                }
            });
            content += `                        </div>\n`;
        }
        if (qa.mid) {
            content += `                        <div className="pt-2">\n                            <div className="mb-2 space-y-2">\n`;
            qa.mid.split('\n').forEach(line => {
                if (line.startsWith('•')) {
                    content += `                                <div className="pl-4 text-sm font-medium text-brand-secondary-text list-disc">${line}</div>\n`;
                } else {
                    content += `                                <p className="text-sm font-medium text-brand-secondary-text">${line}</p>\n`;
                }
            });
            content += `                            </div>\n                        </div>\n`;
        }
        if (qa.bullets2) {
             content += `                        <div className="space-y-3">\n`;
             qa.bullets2.forEach(b => {
                 if (b.includes('→')) {
                     const [left, right] = b.split('→');
                     content += `                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">\n                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />\n                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-sm md:text-base">${left.trim()}</div>\n                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">\n                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />\n                                </div>\n                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-xs md:text-sm shadow-sm inline-block w-max sm:w-auto">\n                                    ${right.trim()}\n                                </div>\n                            </div>\n`;
                 } else {
                     content += `                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-sm md:text-base text-brand-structural-navy font-medium">\n                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />\n                                <span className="pt-0.5">${b}</span>\n                            </div>\n`;
                 }
             });
             content += `                        </div>\n`;
         }
        if (qa.end) {
            content += `                        <div className="pt-2">\n                            <div className="space-y-2">\n`;
            qa.end.split('\n').forEach(line => {
                if (line.startsWith('•')) {
                    content += `                                <div className="pl-4 text-sm font-medium text-brand-secondary-text list-disc">${line}</div>\n`;
                } else {
                    content += `                                <p className="text-sm font-medium text-brand-secondary-text">${line}</p>\n`;
                }
            });
            content += `                            </div>\n                        </div>\n`;
        }
        if (qa.visual) {
            content += `                        <VisualComponent type="${qa.visual}" />\n`;
        }

        qasHTML += `<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">\n            <button onClick={() => setOpenId(openId === "${qa.id}" ? null : "${qa.id}")} aria-expanded={openId === "${qa.id}"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">\n                <div className="flex items-center gap-4">\n                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "${qa.id}" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>\n                        <HelpCircle className="w-4 h-4" />\n                    </div>\n                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">\n                        ${qa.q}\n                    </div>\n                </div>\n                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "${qa.id}" && "rotate-180")} />\n            </button>\n            <div className={cn("overflow-hidden transition-all duration-300", openId === "${qa.id}" ? "max-h-[800px]" : "max-h-0")}>\n                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">\n                    <div className="space-y-4 pt-4">\n${content}                    </div>\n                </div>\n            </div>\n        </div>\n`;
    });

    itemsContainer += `                            <div className={cn("transition-opacity duration-500", activeGroup === ${idx} ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>\n                                <div className="flex items-center gap-3 mb-6 md:mb-8">\n                                     <${group.icon} className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />\n                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">${group.title}</Heading>\n                                </div>\n                                <div className="space-y-4">\n${qasHTML}                                </div>\n                            </div>\n`;
});


const topPart = `import { useState } from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { CheckList } from '../components/CheckList';
import { cn } from '../lib/utils';
import { ArrowRight, ChevronDown, MessageSquare, Compass, HelpCircle, Layers, Target, BookOpen, Quote, CheckCircle2, PlayCircle, Video } from 'lucide-react';

function VisualComponent({ type }: { type: string }) {
    if (type === 'chc-chp-matrix') {
        return (
            <div className="mt-6 border border-brand-soft-neutral/50 rounded-xl overflow-hidden bg-brand-warm-white">
                <div className="grid grid-cols-2 text-sm font-bold border-b border-brand-soft-neutral/50 text-center bg-white">
                    <div className="p-3 bg-brand-soft-teal/10 text-brand-structural-navy border-r border-brand-soft-neutral/50">CHC</div>
                    <div className="p-3 bg-brand-structural-navy/5 text-brand-structural-navy">CHP</div>
                </div>
                <div className="grid grid-cols-2 text-xs md:text-sm text-brand-structural-navy font-medium divide-x divide-brand-soft-neutral/50 divide-y">
                    <div className="p-3 text-center">Transformational Coaching</div>
                    <div className="p-3 text-center">Integrative Psychotherapy</div>
                    <div className="p-3 text-center">Coaching Conversations</div>
                    <div className="p-3 text-center">Therapeutic Conceptualization</div>
                    <div className="p-3 text-center">Emotional Conditioning</div>
                    <div className="p-3 text-center">Layered Complexity</div>
                    <div className="p-3 text-center">Conscious/Unconscious Alignment</div>
                    <div className="p-3 text-center">Root-Cause Understanding</div>
                    <div className="p-3 text-center">Behavioral Transformation</div>
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
                        <div className="text-sm font-semibold text-brand-structural-navy mb-2 flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-brand-soft-teal"/> Independent Learner
                        </div>
                        <ul className="text-xs text-brand-secondary-text space-y-1 mb-4">
                            <li>• "I learn best independently."</li>
                            <li>• "I prefer flexible pacing."</li>
                        </ul>
                        <div className="mt-auto px-3 py-1.5 bg-brand-warm-white text-brand-structural-navy text-xs font-bold rounded inline-block">→ Recommended: Program</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-brand-soft-neutral/30 shadow-sm relative hover:border-brand-soft-teal/50 transition-colors">
                        <div className="text-sm font-semibold text-brand-structural-navy mb-2 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-brand-structural-navy"/> Collaborative Learner
                        </div>
                        <ul className="text-xs text-brand-secondary-text space-y-1 mb-4">
                            <li>• "I benefit from discussion."</li>
                            <li>• "I learn best through interaction."</li>
                        </ul>
                        <div className="mt-auto px-3 py-1.5 bg-brand-soft-teal/10 text-brand-structural-navy text-xs font-bold rounded inline-block">→ Recommended: Cohort</div>
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
                    <div key={idx} className="relative z-10 w-full max-w-[280px] bg-white border border-brand-soft-teal/30 shadow-sm rounded-lg py-3 px-4 text-center my-3 text-sm font-bold text-brand-structural-navy transition-transform hover:-translate-y-1 hover:shadow-md cursor-default">
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
                        <div className="text-[10px] md:text-xs font-bold tracking-widest text-brand-soft-teal bg-brand-soft-teal/10 px-4 py-2 rounded-full border border-brand-soft-teal/20 uppercase mb-8 inline-flex items-center justify-center">
                            Frequently Asked Questions
                        </div>
                        <Heading level={1} className="text-4xl md:text-6xl lg:text-7xl text-brand-structural-navy font-bold leading-tight mb-6">
                            Questions usually become clearer when you understand your stage, direction, and next step.
                        </Heading>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-start sm:items-stretch text-left max-w-3xl w-full mb-8">
                            <div className="bg-white p-6 rounded-2xl border border-brand-soft-neutral/50 flex-1 shadow-sm h-full">
                                <div className="text-brand-soft-teal font-bold mb-3 uppercase tracking-wider text-xs">Most practitioners do not need:</div>
                                <ul className="space-y-2 text-brand-secondary-text text-sm font-medium">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-soft-neutral rounded-full" />endless information</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-soft-neutral rounded-full" />more comparison</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-soft-neutral rounded-full" />pressure to “choose perfectly”</li>
                                </ul>
                            </div>
                            <div className="bg-brand-soft-teal/5 p-6 rounded-2xl border border-brand-soft-teal/20 flex-1 shadow-sm h-full">
                                <div className="text-brand-structural-navy font-bold mb-3 uppercase tracking-wider text-xs">They usually need:</div>
                                <CheckList
                                   items={[
                                       "clearer orientation",
                                       "understanding of progression",
                                       "confidence about the next step"
                                   ]}
                                   iconClassName="w-4 h-4"
                                   itemClassName="text-brand-structural-navy text-sm font-medium gap-2 mb-0"
                                   className="space-y-2 h-full"
                                />
                            </div>
                        </div>
                        
                        <div className="bg-white px-6 py-5 rounded-2xl border border-brand-soft-neutral/50 text-brand-structural-navy shadow-md inline-flex flex-col sm:flex-row items-center sm:items-start gap-4 max-w-2xl text-center sm:text-left mt-4 mb-8">
                            <Quote className="w-8 h-8 text-brand-soft-teal shrink-0 opacity-50 hidden sm:block" />
                            <p className="text-sm md:text-base font-semibold italic flex-1">
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
                        <div className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary-text mb-4 pl-4">Categories</div>
${desktopTabs}
                        <div className="bg-gradient-to-br from-brand-soft-teal/10 to-brand-soft-teal/5 rounded-2xl p-6 border border-brand-soft-teal/30 mt-8 relative overflow-hidden shadow-sm">
                            <div className="absolute -right-4 -top-4 opacity-5">
                                <HelpCircle className="w-32 h-32 text-brand-structural-navy" />
                            </div>
                            <div className="relative z-10 flex flex-col items-start text-left">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                                    <Video className="w-5 h-5 text-brand-soft-teal" />
                                </div>
                                <h5 className="text-base font-bold text-brand-structural-navy mb-2">Still Unsure?</h5>
                                <p className="text-sm text-brand-secondary-text mb-6 leading-relaxed">
                                    You don't need to get it perfect. Hop on a quick video call with our team. We'll help you choose your next step.
                                </p>
                                <a href="#consultation" className="text-sm font-bold text-white bg-brand-structural-navy px-5 py-2.5 rounded-full hover:bg-brand-deep-teal shadow-md transition-all flex items-center gap-2">
                                    Book a Consultation <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Dropdown (Visible only on small screens) */}
                    <div className="md:hidden block mb-8">
                        <div className="text-[10px] uppercase font-bold tracking-widest text-brand-secondary-text mb-3">Jump to Category</div>
                        <div className="flex overflow-x-auto gap-2 pb-2 snap-x hide-scrollbar">
${mobileTabs}
                        </div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-12">
${itemsContainer}
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
                    <div className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-brand-soft-teal mb-8 inline-flex items-center justify-center p-2 bg-brand-soft-teal/10 rounded-full border border-brand-soft-teal/20 backdrop-blur-sm shadow-lg">
                        If you feel clearer now...
                    </div>
                    
                    <Heading level={2} className="text-3xl md:text-5xl text-white font-bold mb-6">
                        You do not need perfect certainty before beginning
                    </Heading>
                    
                    <div className="text-white/80 max-w-2xl mx-auto mb-12 text-lg md:text-xl flex flex-col md:flex-row gap-6 justify-center text-left">
                         <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex-1">
                             <div className="font-bold text-white mb-2 text-sm uppercase tracking-wide">Most practitioners do not begin with:</div>
                             <ul className="text-base space-y-1">
                                 <li>• complete clarity</li>
                                 <li>• full confidence</li>
                                 <li>• a perfectly mapped future</li>
                             </ul>
                         </div>
                         <div className="bg-[#6EBAB5]/10 p-6 rounded-2xl border border-[#6EBAB5]/20 flex-1">
                             <div className="font-bold text-white mb-2 text-sm uppercase tracking-wide">They begin with:</div>
                             <ul className="text-base space-y-1">
                                 <li>• curiosity</li>
                                 <li>• developmental readiness</li>
                                 <li>• desire for deeper understanding</li>
                             </ul>
                         </div>
                    </div>
                    
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-md shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-structural-navy text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/10 shadow-lg tracking-wider">
                            THE IMPORTANT THING IS NOT CHOOSING PERFECTLY
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 md:gap-8 items-stretch pt-4">
                            <div className="text-left space-y-4 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#6EBAB5] text-xs font-bold uppercase tracking-widest mb-2">Primary</div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <Target className="w-5 h-5 text-[#6EBAB5]" />
                                        Find Your Starting Point
                                    </h3>
                                    <p className="text-sm text-white/70">
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
                                    <div className="text-brand-warm-white text-xs font-bold uppercase tracking-widest mb-2">Alternative</div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <Layers className="w-5 h-5 text-brand-warm-white" />
                                        View Ecosystem
                                    </h3>
                                    <p className="text-sm text-white/70">
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
                                    <div className="text-brand-warm-white text-xs font-bold uppercase tracking-widest mb-2">Immediate</div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <MessageSquare className="w-5 h-5 text-brand-warm-white" />
                                        Message Us
                                    </h3>
                                    <p className="text-sm text-white/70">
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
`
fs.writeFileSync('src/pages/FAQ.tsx', topPart);
console.log("Written completely explicit JSX to FAQ.tsx");
