import { Section, Heading, Text, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { Calendar, MapPin, CheckCircle2, Star } from 'lucide-react';

const workshopsData = [
    {
        id: "level-1",
        level: "Level 1",
        title: "Basic Course in Clinical Hypnosis",
        subtitle: "Common Foundation for both CHP and CHC",
        theme: "dark",
        track: { name: "Common Core", style: "teal" },
        learningHeading: "What you will learn:",
        learningPoints: [
            "Introduction to hypnosis & suggestibility",
            "Myths vs reality of conversational hypnosis",
            "Deepening techniques and awakening",
            "Self-hypnosis for personal mastery"
        ],
        batches: [
            { id: "l1-b1", type: "in-person", location: "Mumbai (In-Person)", dates: "Aug 12 - Aug 16, 2026" },
            { id: "l1-b2", type: "virtual", location: "Virtual (Live via Zoom)", dates: "Sep 20 - Sep 24, 2026" }
        ],
        price: "12,000"
    },
    {
        id: "level-2",
        level: "Level 2",
        title: "Advanced Hypnotic Modalities",
        subtitle: "Common Pathway for both CHP and CHC",
        theme: "light",
        track: { name: "Common Core", style: "teal" },
        learningHeading: "What you will learn:",
        learningPoints: [
            "Working with unconscious behavioral patterns",
            "Hypnotic regression and progression",
            "NLP frameworks for rapid shifts",
            "Dealing with resistance in clients"
        ],
        batches: [
            { id: "l2-b1", type: "virtual", location: "Virtual (Live via Zoom)", dates: "Sep 05 - Sep 08, 2026" },
            { id: "l2-b2", type: "in-person", location: "Mumbai (In-Person)", dates: "Nov 10 - Nov 14, 2026" }
        ],
        price: "18,000"
    },
    {
        id: "level-3",
        level: "Level 3",
        title: "Cognitive Hypnotic Psychotherapy",
        subtitle: "Advanced Applications",
        theme: "dark",
        track: { name: "Psychotherapy Track", style: "orange" },
        learningHeading: "What you will learn:",
        learningPoints: [
            "Inner child healing and shadow work",
            "Working with anxiety, fears, and phobias",
            "Resolving psychosomatic issues",
            "Mapping multi-session treatment plans"
        ],
        batches: [
            { id: "l3-b1", type: "virtual", location: "Virtual (Live via Zoom)", dates: "Oct 10 - Oct 15, 2026" },
            { id: "l3-b2", type: "virtual", location: "Virtual (Live via Zoom)", dates: "Jan 08 - Jan 13, 2027" }
        ],
        price: "22,000"
    },
    {
        id: "level-4",
        level: "Level 4",
        title: "Mastery in Cognitive Hypnotic Psychotherapy",
        subtitle: "Expert Practitioner Framework",
        theme: "light",
        track: { name: "Psychotherapy Track", style: "orange" },
        learningHeading: "What you will learn:",
        learningPoints: [
            "Working with personality disorders",
            "Relationship counselling structures",
            "Advanced timeline therapy",
            "Establishing a successful private practice"
        ],
        batches: [
            { id: "l4-b1", type: "in-person", location: "Mumbai (In-Person)", dates: "Nov 20 - Nov 25, 2026" }
        ],
        price: "25,000"
    },
    {
        id: "relationship-specialization",
        level: "Specialization",
        title: "Relationship Counseling & Coaching",
        subtitle: "Expertise for CHC and Psychologists",
        theme: "dark",
        track: { name: "Specialization Track", style: "orange" },
        learningHeading: "What you will learn:",
        learningPoints: [
            "Couple dynamics and attachment styles",
            "Conflict resolution frameworks",
            "Systemic family therapy techniques",
            "Restoring emotional intimacy"
        ],
        batches: [
            { id: "rel-b1", type: "virtual", location: "Virtual (Live via Zoom)", dates: "Dec 01 - Dec 05, 2026" }
        ],
        price: "20,000"
    },
    {
        id: "school-counselling-specialization",
        level: "Specialization",
        title: "School & Career Counseling",
        subtitle: "Expertise for CHC and Psychologists",
        theme: "light",
        track: { name: "Specialization Track", style: "orange" },
        learningHeading: "What you will learn:",
        learningPoints: [
            "Addressing academic and behavioural issues",
            "Career guidance and aptitude frameworks",
            "Socio-emotional learning strategies",
            "Working with parents and school systems"
        ],
        batches: [
            { id: "sch-b1", type: "virtual", location: "Virtual (Live via Zoom)", dates: "Jan 15 - Jan 20, 2027" }
        ],
        price: "20,000"
    }
];

const trackStyles = {
    teal: "bg-brand-soft-teal/10 text-brand-deep-teal",
    orange: "bg-[#F5B461]/10 text-[#C18131]"
};

export const Workshops = () => {
    return (
        <div className="bg-brand-warm-white text-brand-primary-text mb-20 md:mb-32">
            {/* HERO SECTION */}
            <Section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden border-b border-brand-soft-neutral/30">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-brand-structural-navy/5 via-brand-warm-white to-brand-soft-teal/10" />
                
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft-teal/10 border border-brand-soft-teal/20 text-brand-deep-teal font-medium text-sm tracking-wide uppercase mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-soft-teal animate-pulse" />
                            Live Offline & Online Events
                        </div>
                        <Heading level={1} className="text-4xl md:text-6xl text-brand-structural-navy font-bold mb-6 tracking-tight">
                            Workshop Schedule <br />
                            <span className="text-brand-soft-teal">for Psychologists & Coaches</span>
                        </Heading>
                        <Text className="text-lg md:text-xl text-brand-secondary-text mb-10 max-w-2xl mx-auto">
                            Join our intensive, hands-on workshops designed to equip you with structured therapeutic and coaching frameworks.
                        </Text>
                    </FadeIn>
                </div>
            </Section>

            {/* UPCOMING WORKSHOPS */}
            <Section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid lg:grid-cols-1 gap-12">
                        {workshopsData.map((workshop, index) => (
                            <FadeIn key={workshop.id} delay={0.1 * (index + 1)} className="bg-white rounded-3xl border border-brand-soft-neutral shadow-sm overflow-hidden flex flex-col md:flex-row">
                                
                                {/* Left Side: Theme Aware */}
                                <div className={`md:w-1/3 flex flex-col relative overflow-hidden p-6 md:p-8 lg:p-12 ${
                                    workshop.theme === 'dark' 
                                        ? 'bg-brand-structural-navy text-white' 
                                        : 'bg-brand-warm-white text-brand-structural-navy border-r border-brand-soft-neutral/50'
                                }`}>
                                    {workshop.theme === 'dark' && (
                                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,_#6EBAB5_0%,_transparent_50%)]" />
                                    )}
                                    <div className="relative z-10 flex-1">
                                        <div className="text-brand-soft-teal font-bold text-sm uppercase tracking-widest mb-4">{workshop.level}</div>
                                        <h3 className={`text-2xl md:text-3xl font-bold font-heading mb-4 leading-tight ${workshop.theme === 'light' ? 'border-b border-brand-soft-neutral/30 pb-4' : ''}`}>
                                            {workshop.title}
                                        </h3>
                                        <p className={`text-base ${workshop.theme === 'dark' ? 'text-white/80' : 'text-brand-secondary-text'}`}>
                                            {workshop.subtitle}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Right Side: Content & Details */}
                                <div className="md:w-2/3 p-6 md:p-8 lg:p-12 flex flex-col justify-between">
                                    <div>
                                        <div className="flex flex-wrap gap-4 justify-between items-start mb-6">
                                            <h4 className="font-bold text-brand-structural-navy text-lg">{workshop.learningHeading}</h4>
                                            <span className={`text-sm px-3 py-1 rounded-full font-medium ${trackStyles[workshop.track.style as keyof typeof trackStyles]}`}>
                                                {workshop.track.name}
                                            </span>
                                        </div>
                                        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-base text-brand-secondary-text">
                                            {workshop.learningPoints.map((point, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-brand-soft-teal shrink-0 mt-0.5" /> 
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Batches */}
                                    <div className="border-t border-brand-soft-neutral/30 pt-6 mb-8">
                                        <h4 className="font-bold text-brand-structural-navy text-base uppercase tracking-wider mb-4">Upcoming Batches:</h4>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {workshop.batches.map(batch => (
                                                <div key={batch.id} className="bg-brand-warm-white p-4 rounded-xl border border-brand-soft-neutral/50">
                                                    <div className="text-sm font-bold text-brand-structural-navy mb-1 flex items-center gap-2">
                                                        <MapPin className="w-3 h-3 text-brand-soft-teal" /> 
                                                        {batch.location}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-base text-brand-secondary-text whitespace-nowrap">
                                                        <Calendar className="w-4 h-4 text-brand-soft-teal" />
                                                        <span>{batch.dates}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Actions */}
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between border-t border-brand-soft-neutral/30 pt-6">
                                        <div className="text-base">
                                            <span className="font-bold text-brand-structural-navy text-2xl tracking-tight">₹{workshop.price}</span>
                                            <span className="text-brand-secondary-text"> / {(workshop as any).unitOverride || 'participant'}</span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                                            <Button variant="outline" href={`#${workshop.id}`} className="w-full sm:w-auto">Course Details</Button>
                                            <Button className="w-full sm:w-auto p-0">
                                                <a href="#register" className="px-8 py-3 block w-full h-full">Register Now</a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            {/* OFFERS / BUNDLES */}
            <Section className="py-20 bg-brand-structural-depth text-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <Star className="w-10 h-10 text-[#F5B461] mx-auto mb-6" />
                    <Heading level={2} className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                        Special Offers & Cohort Bundles
                    </Heading>
                    <Text className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Are you looking to master both Psychotherapy and Coaching? Enroll in our integrated cohorts to get significant fee waivers, ongoing mentoring, and access to the Practitioner Hub.
                    </Text>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="bg-[#6EBAB5] text-brand-structural-navy hover:bg-white p-0 font-bold transition-colors">
                            <a href="#cohorts" className="px-8 py-3.5 block w-full h-full">Explore Cohort Bundles</a>
                        </Button>
                        <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 p-0 font-medium transition-colors">
                            <a href="#consultation" className="px-8 py-3.5 block w-full h-full">Speak to an Advisor</a>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

