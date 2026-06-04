import { Section, Heading, Text, Grid, Button, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { ArrowRight, CheckCircle2, Network, BookOpen } from 'lucide-react';

export const About = () => {
    const timeline = [
        {
            year: "2012",
            title: "Journey Began",
            content: "Institute of Clinical Hypnosis and Related Sciences (ICHARS) was incorporated to help mental health practitioners develop advanced therapeutic skills."
        },
        {
            year: "2013",
            title: "A Truly Eclectic Course",
            content: "Launched version 1 of the Cognitive Hypnotic Psychotherapy program, restricting access to those with a Psychology or Medical background."
        },
        {
            year: "2015",
            title: "Hybrid Training Model",
            content: "Created a hybrid model for training by incorporating post-workshop online modules with live interactive training sessions."
        },
        {
            year: "2017",
            title: "Coaching Certification",
            content: "Initiated the Cognitive Hypnotic Coaching Certification Program, integrating the powerful SOFT SEA model with somatic tools."
        },
        {
            year: "2018",
            title: "Support Foundation",
            content: "Incorporated a non-profit organization dedicated to spreading mental health awareness and supporting practitioners."
        },
        {
            year: "2020",
            title: "Online Expansion",
            content: "Instituted comprehensive Diplomas, Online Support Groups, and launched the live virtual series."
        },
        {
            year: "2022",
            title: "A Decade of Support",
            content: "Completed 10 years! Transitioned the full Diploma online and re-structured the ICHARS Fellowship program for lifelong alumni support."
        }
    ];

    const team = [
        {
            name: "Nitin Shah",
            role: "CEO & Director ICHARS Support Foundation",
            img: "https://instituteofclinicalhypnosis.com/wp-content/uploads/elementor/thumbs/Nitin-Shah-Author-of-book-Destiny-of-Choice-e1658408684225-qxb2xvbpc64hahqfsadlatkzplxqlo61a1buijmbr4.jpg",
            bio: "An author, educator, and psychologist who has spent over a decade passionately mentoring practitioners to overcome clinical conflicts."
        },
        {
            name: "Misba Shah",
            role: "Director ICHARS & ICHARS Support Foundation",
            img: "https://instituteofclinicalhypnosis.com/wp-content/uploads/elementor/thumbs/Ms.-Misba-Shah-Psychologist-India-qxb2xvbpc64hahqfsadlatkzplxqlo61a1buijmbr4.jpeg",
            bio: "A dedicated trainer and psychologist focused on human resources, performance enhancement, and helping individuals overcome deep subconscious blocks."
        },
        {
            name: "Mamta Sharma",
            role: "Trainer - ICHARS",
            img: "https://instituteofclinicalhypnosis.com/wp-content/uploads/elementor/thumbs/Mamta-Sharma-Psychologist-qxb2xvbpc64hahqfsadlatkzplxqlo61a1buijmbr4.jpg",
            bio: "With a passion for understanding how the mind works, she uses her expertise to help individuals nurture and systematically develop their mental abilities."
        },
        {
            name: "Dhivyaraksha Pajni",
            role: "Trainer - ICHARS",
            img: "https://instituteofclinicalhypnosis.com/wp-content/uploads/elementor/thumbs/Dhivyaraksha-Panjni-Psychologist-ICHARS-qxb2xvbpc64hahqfsadlatkzplxqlo61a1buijmbr4.jpg",
            bio: "A Life Transformation Strategist and Certified Cognitive Hypnotic Coach supporting individuals to achieve progress and systemic fulfillment."
        }
    ];

    return (
        <div className="bg-brand-warm-white text-brand-primary-text min-h-screen">
            
            {/* HERO - Immersive, calm, measured pacing */}
            <Section theme="tint" className="relative pt-32 pb-24 md:pt-40 md:pb-36 border-b border-brand-soft-neutral/40 overflow-hidden text-center">
                <FadeIn>
                    <Heading level={1} className="text-brand-deep-teal font-heading tracking-tight max-w-4xl mx-auto mb-6">
                        Institute of Clinical Hypnosis and Related Sciences
                    </Heading>
                    <Text size="lg" className="text-brand-secondary-text max-w-2xl mx-auto mb-16 leading-relaxed">
                        We are an educational ecosystem designed for cognitive practitioners. Our purpose is to help you move beyond fragmented techniques, building the structural understanding required for profound clinical work.
                    </Text>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                        <div>
                            <div className="text-3xl md:text-5xl text-brand-deep-teal font-heading font-bold mb-1">13<span className="text-brand-soft-teal">+</span></div>
                            <div className="text-xs font-mono uppercase tracking-widest text-brand-secondary-text">Years Active</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-5xl text-brand-deep-teal font-heading font-bold mb-1">2k<span className="text-brand-soft-teal">+</span></div>
                            <div className="text-xs font-mono uppercase tracking-widest text-brand-secondary-text">Practitioners</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-5xl text-brand-deep-teal font-heading font-bold mb-1">400k<span className="text-brand-soft-teal">+</span></div>
                            <div className="text-xs font-mono uppercase tracking-widest text-brand-secondary-text">Lives Touched</div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* OUR PHILOSOPHY VIDEO - Acts as a visual bridge out of the Hero */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30 pt-0 pb-16 lg:pb-24">
                <div className="max-w-4xl mx-auto -mt-16 md:-mt-24 relative z-20">
                    <div className="bg-white p-3 md:p-5 rounded-[2rem] shadow-xl shadow-brand-structural-navy/5 border border-brand-soft-neutral">
                        <div className="aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-brand-structural-depth relative group">
                            {/* In a real WP build, this would be a Presto Pro block. Using semantic iframe for the React prototype. */}
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/tTC9Yvqt-nY?rel=0&modestbranding=1"
                                title="Transform Your Coaching Practice with ICHARS"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Section>

            {/* THE SEARCH FOR COHESION - Consolidates Backstory and Vision/Mission into an intimate narrative */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30 lg:py-24">
                <Grid cols={2} className="items-center gap-16 lg:gap-24">
                    <div>
                        <div className="w-12 h-12 bg-brand-deep-teal/5 rounded-full flex items-center justify-center mb-8">
                            <BookOpen className="w-5 h-5 text-brand-deep-teal" />
                        </div>
                        <span className="text-xs font-mono tracking-widest text-brand-soft-teal uppercase mb-4 block">The Genesis</span>
                        <Heading level={2} className="text-brand-deep-teal mb-8">
                            The Search for Cohesion
                        </Heading>
                        <div className="space-y-6">
                            <Text size="base" className="text-brand-secondary-text leading-relaxed m-0">
                                In 2009, I (Nitin Shah) was navigating my own challenges. I attended multiple training programs across different modalities, searching for answers. What I found was a vast collection of isolated techniques, but no overarching framework.
                            </Text>
                            <Text size="base" className="text-brand-secondary-text leading-relaxed m-0">
                                The more courses I attended, the more conceptual overload I experienced. I knew <em>how</em> to do many things, but struggled to understand exactly <em>when</em> and <em>why</em>.
                            </Text>
                            <Text size="base" className="text-brand-secondary-text leading-relaxed m-0">
                                It wasn't until I integrated CBT restructuring with a client in a deeply hypnotic state that I witnessed true, rapid transformation. That single incident revealed the profound power of structural integration—and became the genesis of everything ICHARS offers today.
                            </Text>
                        </div>
                    </div>
                    
                    <div className="bg-brand-reflective-tint p-10 lg:p-14 rounded-[2.5rem] border border-brand-soft-teal/10 relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -mr-16 -mt-16" />
                        <Heading level={3} className="text-brand-structural-navy mb-10 relative z-10 leading-tight">
                            "We do not teach isolated techniques. We teach the structural understanding of the human mind."
                        </Heading>
                        <div className="relative z-10 grid grid-cols-1 gap-8 pt-6 border-t border-brand-soft-neutral/50">
                            <div className="flex gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                <div>
                                    <h4 className="text-base font-bold font-mono tracking-widest text-brand-structural-navy uppercase mb-1">Our Core Vision</h4>
                                    <p className="text-base text-brand-secondary-text m-0">To enable psychologists and coaches to systematically create a healthier, more fulfilling world without burning out.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal mt-2 shrink-0" />
                                <div>
                                    <h4 className="text-base font-bold font-mono tracking-widest text-brand-structural-navy uppercase mb-1">Ecosystem Values</h4>
                                    <p className="text-base text-brand-secondary-text m-0">Clinical rigor, emotional ecology, unwavering peer support, and compassion in all therapeutic systems.</p>
                                </div>
                            </div>
                        </div>

                        {/* ANNOUNCEMENT CALLOUT */}
                        <div className="relative z-10 mt-10 pt-8 border-t border-brand-soft-neutral/50">
                            <div className="bg-white/60 p-5 rounded-2xl border border-brand-soft-teal/20 backdrop-blur-sm">
                                <h4 className="text-base font-bold text-brand-structural-navy mb-2 flex items-center gap-2">
                                    <Network className="w-5 h-5 text-brand-soft-teal" />
                                    Democratizing Change-Work Safely
                                </h4>
                                <p className="text-base text-brand-secondary-text mb-4 leading-relaxed">
                                    We believe advanced transformational tools should be accessible to all dedicated professionals, while strictly preserving clinical boundaries. This is the philosophy behind our new CHCP pathway.
                                </p>
                                <a href="#chcp-announcement" className="text-base font-bold uppercase tracking-widest text-brand-deep-teal hover:text-brand-soft-teal flex items-center gap-2 transition-colors">
                                    Read ecosystem expansion <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Section>

            {/* THE PARADIGM SHIFT - Merges "The Practitioner Dilemma" with "Ecosystem Differences" into a comparative structural diagram */}
            <Section theme="tint" className="border-b border-brand-soft-neutral/30 lg:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <span className="text-xs font-mono tracking-widest text-brand-soft-teal uppercase mb-4 block">The Paradigm Shift</span>
                    <Heading level={2} className="text-brand-deep-teal mb-6">
                        Moving past conceptual overload.
                    </Heading>
                    <Text size="base" className="text-brand-secondary-text leading-relaxed">
                        Modern practitioners suffer from technique pressure—holding a massive, unstructured card index of therapies with no clear organizational methodology. We built our ecosystem to shift practitioners from memory-based execution to structural clinical thinking.
                    </Text>
                </div>

                <Grid cols={2} className="max-w-5xl mx-auto gap-8">
                    <div className="bg-white p-10 lg:p-14 rounded-3xl border border-brand-soft-neutral shadow-sm">
                        <div className="text-xs font-mono font-bold text-brand-secondary-text tracking-widest uppercase mb-8 pb-3 border-b border-brand-soft-neutral/30">
                            Traditional Learning Silos
                        </div>
                        <ul className="space-y-8">
                            {[
                                { title: "Isolated Techniques", text: "Acquiring scripted procedures leading to unanchored execution during complex, unpredictable client moments." },
                                { title: "Modality Rigidness", text: "Being trained in one strict trend and attempting to force all human experiences into that single conceptual box." },
                                { title: "Transactional Growth", text: "Taking quick certification modules with little to no continuous clinical integration or peer observation." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-5 opacity-70">
                                    <div className="w-6 h-6 rounded-full bg-brand-soft-neutral flex items-center justify-center shrink-0 mt-0.5">
                                        <span className="text-brand-primary-text text-base font-bold font-mono">×</span>
                                    </div>
                                    <div>
                                        <h4 className="text-brand-structural-navy text-base font-bold mb-1.5">{item.title}</h4>
                                        <p className="text-brand-secondary-text text-base m-0 leading-relaxed">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-brand-structural-depth text-white p-10 lg:p-14 rounded-3xl border border-brand-structural-depth shadow-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,183,168,0.12)_0%,transparent_70%)]" />
                        <div className="text-xs font-mono font-bold text-brand-soft-teal tracking-widest uppercase mb-8 pb-3 border-b border-white/10 relative z-10">
                            The ICHARS Ecosystem
                        </div>
                        <ul className="space-y-8 relative z-10">
                            {[
                                { title: "Organizing Frameworks", text: "Acquiring elegant cognitive layouts so you can easily map and navigate complex human systems." },
                                { title: "Integrative Synthesis", text: "Blending somatic conditioning, psychodynamics, and cognitive behavior seamlessly in real-time." },
                                { title: "Long-Term Peer Spaces", text: "Sustained development pathways ensuring continuous systemic growth as your practitioner identity evolves." }
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-5">
                                    <div className="w-6 h-6 rounded-full bg-brand-soft-teal/20 flex items-center justify-center shrink-0 mt-0.5 text-brand-soft-teal border border-brand-soft-teal/30">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-base font-bold mb-1.5">{item.title}</h4>
                                        <p className="text-white/70 text-base m-0 leading-relaxed">{item.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Grid>
            </Section>

            {/* TIMELINE - Condensed into a scannable grid to prevent prolonged blind scrolling */}
            <Section theme="neutral" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-mono tracking-widest text-brand-soft-teal uppercase mb-4 block">Institutional History</span>
                        <Heading level={2} className="text-brand-deep-teal">The Journey of Evolution</Heading>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                        {timeline.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-soft-neutral shadow-sm group hover:border-brand-soft-teal/40 transition-colors">
                                <div className="inline-block bg-brand-warm-white text-brand-soft-teal text-sm font-mono font-bold tracking-widest px-3 py-1 rounded-full border border-brand-soft-neutral shadow-sm mb-4">
                                    {item.year}
                                </div>
                                <h4 className="text-brand-structural-navy font-bold text-base mb-3">{item.title}</h4>
                                <Text size="base" className="text-brand-secondary-text m-0 leading-relaxed">{item.content}</Text>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CORE TRAINERS - Elevated calm visual treatment */}
            <Section theme="white" className="border-b border-brand-soft-neutral/30 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-mono tracking-widest text-brand-soft-teal uppercase mb-4 block">Pedagogy</span>
                        <Heading level={2} className="text-brand-deep-teal">Our Core Mentors</Heading>
                    </div>
                    <Grid cols={4} className="gap-6">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-brand-reflective-tint border border-brand-soft-neutral rounded-[2rem] overflow-hidden flex flex-col group hover:bg-white hover:border-brand-soft-teal/30 transition-all duration-300">
                                <div className="h-56 w-full overflow-hidden bg-brand-soft-neutral/50">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105" />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h4 className="font-heading font-bold text-base text-brand-deep-teal m-0">{member.name}</h4>
                                    <div className="text-sm uppercase tracking-widest text-brand-soft-teal font-bold mt-1.5 mb-4">{member.role}</div>
                                    <Text size="sm" className="text-brand-secondary-text m-0 leading-relaxed mt-auto">{member.bio}</Text>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </div>
            </Section>

            {/* FINAL CTA SECTION - Retained restraint */}
            <Section theme="tint" className="text-center relative overflow-hidden py-24">
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <Heading level={2} className="text-brand-deep-teal mb-6">
                        Meaningful practitioner development is rarely a single moment. It is an evolving process.
                    </Heading>
                    <Text size="base" className="text-brand-secondary-text mx-auto mb-10 leading-relaxed">
                        Through reflection, experiential application, and structured frameworks, you will gradually develop the quiet confidence and clarity that represents authentic professional mastery.
                    </Text>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button href="#start" variant="primary">
                            Find Your Starting Point
                        </Button>
                        <Button href="#programs" variant="outline">
                            Explore the Programs
                        </Button>
                    </div>
                </div>
            </Section>

        </div>
    );
};
