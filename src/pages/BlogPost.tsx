import React from 'react';
import { Section, Heading, Text, Button } from '../components/Blocks';
import { Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin, ChevronLeft, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function BlogPost() {
    return (
        <div className="bg-brand-warm-white min-h-screen">
            {/* Header / Hero */}
            <Section className="py-12 md:py-16 bg-white border-b border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <a href="#blog" className="inline-flex items-center text-base font-medium text-brand-soft-teal hover:text-brand-deep-teal transition-colors mb-8">
                        <ChevronLeft className="w-4 h-4 mr-1" /> Back to Blog
                    </a>
                    
                    <div className="flex flex-wrap items-center gap-4 text-base font-medium text-brand-secondary-text mb-6">
                        <span className="bg-brand-soft-teal/10 text-brand-soft-teal px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">Psychotherapy & Coaching</span>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time dateTime="2023-11-20">Nov 20, 2023</time>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Nitin Shah</span>
                        </div>
                    </div>

                    <Heading level={1} className="text-3xl md:text-5xl lg:text-6xl text-brand-structural-navy mb-8 leading-tight">
                        Truth about Course affiliations, accreditations and setting up therapy or coaching practice
                    </Heading>

                    <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-sm border border-brand-soft-neutral/50">
                        <img 
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200" 
                            alt="Therapy practice consultation" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Section>

            {/* Main Content Layout */}
            <Section className="py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-16">
                        
                        {/* Sidebar (Tablet & UP) */}
                        <div className="hidden lg:block w-72 shrink-0">
                            <div className="sticky top-24 space-y-10">
                                {/* Table of Contents */}
                                <div>
                                    <div className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Table of Contents</div>
                                    <ul className="space-y-3 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-brand-soft-neutral/30">
                                        {[
                                            "My recommendation",
                                            "So what is the truth about certifications?",
                                            "Role of Associations and Councils",
                                            "Legal aspects of setting a practice"
                                        ].map((item, i) => (
                                            <li key={i} className="pl-4 relative">
                                                <div className={cn(
                                                    "absolute left-0 top-2 -translate-x-1/2 w-2 h-2 rounded-full border-2 bg-white",
                                                    i === 0 ? "border-brand-soft-teal" : "border-brand-soft-neutral"
                                                )} />
                                                <a href={`#section-${i}`} className={cn(
                                                    "text-base hover:text-brand-soft-teal transition-colors",
                                                    i === 0 ? "text-brand-structural-navy font-semibold" : "text-brand-secondary-text"
                                                )}>
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Share */}
                                <div>
                                    <div className="text-sm font-bold text-brand-soft-teal uppercase tracking-widest mb-4">Share this article</div>
                                    <div className="flex gap-2">
                                        <button className="w-10 h-10 rounded-full bg-white border border-brand-soft-neutral/50 flex items-center justify-center text-brand-structural-navy hover:text-brand-soft-teal hover:border-brand-soft-teal transition-colors shadow-sm">
                                            <Facebook className="w-4 h-4" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white border border-brand-soft-neutral/50 flex items-center justify-center text-brand-structural-navy hover:text-brand-soft-teal hover:border-brand-soft-teal transition-colors shadow-sm">
                                            <Twitter className="w-4 h-4" />
                                        </button>
                                        <button className="w-10 h-10 rounded-full bg-white border border-brand-soft-neutral/50 flex items-center justify-center text-brand-structural-navy hover:text-brand-soft-teal hover:border-brand-soft-teal transition-colors shadow-sm">
                                            <Linkedin className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="flex-1 max-w-3xl">
                            <div className="prose prose-lg prose-brand max-w-none">
                                <p className="lead text-xl text-brand-secondary-text leading-relaxed">
                                    There is a lot of buzz words going around in the training industry nowadays. Affiliation, accreditation, ISO certified courses, associations etc are some of those buzz words that institutes use to misguide psychotherapist and coaches.
                                </p>

                                <p>
                                    In the last couple of months I have received lots of questions related to above topics like What does affiliation / accreditation mean? Which course is better – independent vs affiliated / accredited? Can I set up a practice as a coach / therapist after doing an independent course? etc.
                                </p>

                                <h2 id="section-0" className="text-brand-structural-navy">My recommendation</h2>
                                <p>
                                    I decided to create a video explaining these concepts. I have tried to be as objective as possible.
                                </p>
                                <p>
                                    The summary of the entire video is to focus on the competency you will develop and the skill you will learn by attending the course. Most of these bodies / associations / affiliations have almost no value in reality.
                                </p>
                                <div className="bg-brand-soft-teal/10 border-l-4 border-brand-soft-teal p-6 rounded-r-lg my-8">
                                    <p className="m-0 text-brand-structural-navy font-medium italic">
                                        "Focus on the competency you will develop and the skill you will learn by attending the course. Most of these bodies / associations / affiliations have almost no value in reality."
                                    </p>
                                </div>

                                <h2 id="section-1" className="text-brand-structural-navy">So what is the truth about certifications and affiliations?</h2>
                                <p>
                                    Watch the video to understand the deeper reality of the coaching and therapy training industry, how certain buzzwords are used merely as marketing tactics, and what you actually need to legally and practically set up a successful private practice.
                                </p>

                                {/* Video Placeholder */}
                                <div className="aspect-video bg-brand-structural-navy/5 rounded-2xl flex items-center justify-center my-10 border border-brand-soft-neutral/30 group cursor-pointer relative overflow-hidden">
                                     <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10 transform group-hover:scale-110 transition-transform">
                                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-brand-soft-teal border-b-8 border-b-transparent ml-1"></div>
                                     </div>
                                </div>

                                <h2 id="section-2" className="text-brand-structural-navy">Role of Associations and Councils</h2>
                                <p>
                                    Most private councils, boards, and associations globally are actually private enterprises. They do not have statutory (government) backing. 
                                </p>
                                <p>
                                    This means that an accreditation from them is essentially a private review of a curriculum, not a legal license to practice. Many training institutes leverage these names because they sound highly official, creating a false perception of superiority.
                                </p>

                                <h2 id="section-3" className="text-brand-structural-navy">Legal aspects of setting a practice</h2>
                                <p>
                                    As a coach or a therapist, the legal requirements to practice vary significantly by country and state. However, in many regions, terms like "Coach" or "Psychotherapist" (depending on the exact jurisdiction) may not be legally protected titles in the same way "Psychiatrist" or "Clinical Psychologist" are.
                                </p>
                                <p>
                                    What matters legally is setting up your business entity correctly, having clear terms of service, maintaining strict confidentiality, and practicing within the scope of your competence. You do not need a certificate from a specific private association to legally run a coaching practice.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="mt-12 pt-8 border-t border-brand-soft-neutral/30 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-brand-soft-neutral/50 text-brand-secondary-text rounded-md text-base hover:text-brand-structural-navy hover:border-brand-structural-navy cursor-pointer transition-colors">
                                    <Tag className="w-3.5 h-3.5" /> Coaching Setup
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-brand-soft-neutral/50 text-brand-secondary-text rounded-md text-base hover:text-brand-structural-navy hover:border-brand-structural-navy cursor-pointer transition-colors">
                                    <Tag className="w-3.5 h-3.5" /> Myths
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-brand-soft-neutral/50 text-brand-secondary-text rounded-md text-base hover:text-brand-structural-navy hover:border-brand-structural-navy cursor-pointer transition-colors">
                                    <Tag className="w-3.5 h-3.5" /> Certification
                                </span>
                            </div>

                            {/* Author Box */}
                            <div className="mt-12 bg-white rounded-2xl p-8 border border-brand-soft-neutral/50 shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" alt="Nitin Shah" className="w-24 h-24 rounded-full object-cover border-4 border-brand-warm-white" />
                                <div>
                                    <h3 className="text-xl font-bold text-brand-structural-navy mb-2">Nitin Shah</h3>
                                    <p className="text-brand-secondary-text text-base mb-4">
                                        Founder & Lead Facilitator at ICHARS. Dedicated to structuring the intangible layers of psychology into observable ecosystems and helping practitioners build genuine clinical competence.
                                    </p>
                                    <a href="#about" className="text-brand-soft-teal font-medium text-base hover:text-brand-deep-teal inline-flex items-center">
                                        Read more about the author <ArrowRight className="w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            {/* Read Next Section */}
            <Section theme="tint" className="border-t border-brand-soft-neutral/30">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <div className="text-xs uppercase font-bold tracking-widest text-brand-soft-teal mb-3">Keep Learning</div>
                            <Heading level={2} className="text-brand-structural-navy">Related Articles</Heading>
                        </div>
                        <Button variant="outline" href="#blog" className="hidden md:inline-flex bg-white">View All Posts</Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Are online courses in hypnosis, NLP & CBT as effective?",
                                category: "Methodology",
                                desc: "Does learning online reduce the impact of experiential psychological skills?"
                            },
                            {
                                title: "Post workshop support. What does your training provider offer?",
                                category: "Practitioner Development",
                                desc: "Why what happens after the course is just as important as the course itself."
                            },
                            {
                                title: "Is your course provider confident enough to offer a guarantee?",
                                category: "Industry Standards",
                                desc: "Looking at the importance of risk-free enrollment in clinical training."
                            }
                        ].map((post, i) => (
                            <a href="#blog-post" key={i} className="bg-white rounded-2xl p-6 border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50 hover:shadow-md transition-all group flex flex-col h-full">
                                <div className="text-xs font-bold text-brand-soft-teal uppercase tracking-widest mb-3">{post.category}</div>
                                <h3 className="text-lg font-bold text-brand-structural-navy mb-3 group-hover:text-brand-soft-teal transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-base text-brand-secondary-text mb-6 line-clamp-3 flex-1">
                                    {post.desc}
                                </p>
                                <div className="text-base font-medium text-brand-deep-teal inline-flex items-center mt-auto">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Footer CTA */}
            <Section className="bg-brand-structural-navy text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <Heading level={2} className="text-white mb-6">Want to dive deeper into practitioner development?</Heading>
                    <Text className="text-white/80 mb-10">
                        Join our community of reflective practitioners and get insights, clinical breakdowns, and articles delivered to your inbox.
                    </Text>
                    <form className="max-w-md mx-auto flex gap-2">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="flex-1 px-4 py-3 rounded-lg text-brand-structural-navy focus:outline-none focus:ring-2 focus:ring-brand-soft-teal"
                            required
                        />
                        <button type="submit" className="bg-brand-soft-teal hover:bg-brand-deep-teal text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>
                </div>
            </Section>
        </div>
    );
}
