import React from 'react';
import { Section, Heading, Text, Card, Button } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

export const RecommendedBooks = () => {
    const books = [
        {
            title: "The Power of Subconscious Mind",
            author: "Dr. Joseph Murphy",
            url: "https://amzn.to/3sFGASU",
            category: "General",
            description: "Explore the profound effects of the subconscious mind and how to harness it for personal transformation.",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "The 5 Love Languages",
            author: "Gary Chapman",
            url: "https://amzn.to/3baFwRb",
            category: "Relationships",
            description: "Understand the different ways people express and experience love to build deeper romantic and interpersonal connections.",
            image: "https://images.unsplash.com/photo-1518621845118-2dde4cdabbfb?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Successful Relationships: More Than a Guessing Game",
            author: "John G. Kappas",
            url: "https://amzn.to/3kyiB5j",
            category: "Relationships",
            description: "A clinical perspective on relationship dynamics, communication styles, and the subconscious factors that influence attraction.",
            image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "You Can Heal Your Life",
            author: "Louise L. Hay",
            url: "https://amzn.to/3sDSjRJ",
            category: "Self-Healing",
            description: "A classic text exploring the mind-body connection and how our beliefs and thoughts can manifest as physical symptoms.",
            image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Games People Play",
            author: "Eric Berne",
            url: "https://amzn.to/3q8Ncrb",
            category: "Transactional Analysis",
            description: "The foundational text introducing the concept of psychological games and patterns of human interaction.",
            image: "https://images.unsplash.com/photo-1553481187-b66a533ad780?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Transactional Analysis in Psychotherapy",
            author: "Eric Berne",
            url: "https://amzn.to/3sDS0GD",
            category: "Transactional Analysis",
            description: "A deeper structural look at ego states, transactions, and the clinical application of Transactional Analysis.",
            image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "The Practice of Cognitive-Behavioural Hypnotherapy",
            author: "Donald Robertson",
            url: "https://amzn.to/3sDSr3J",
            category: "Clinical Practice",
            description: "A manual for evidence-based clinical hypnosis, bridging CBT and hypnotherapeutic techniques.",
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Advanced Ericksonian Hypnotherapy Scripts",
            author: "Dan Jones",
            url: "https://amzn.to/2NTXUor",
            category: "Clinical Scripts",
            description: "An expanded collection of scripts utilizing the indirect and permissive language structures pioneered by Milton Erickson.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Cognitive Hypnotherapy",
            author: "Assen Alladin",
            url: "https://amzn.to/37Z3SeG",
            category: "Clinical Practice",
            description: "An integrated approach to the treatment of emotional disorders seamlessly integrating cognitive therapy and hypnosis.",
            image: "https://images.unsplash.com/photo-1507208613628-1ce972eb2955?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Hypnotic Realities",
            author: "Milton H. Erickson",
            url: "https://amzn.to/3b6fMoX",
            category: "Ericksonian Hypnosis",
            description: "A thorough exploration of the induction of clinical hypnosis and various forms of indirect suggestion.",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "The Big Book of NLP, Expanded",
            author: "Shlomo Vaknin & Marina Schwarts",
            url: "https://amzn.to/381BPen",
            category: "NLP",
            description: "Over 350+ techniques, patterns, and strategies of Neuro Linguistic Programming in an accessible format.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Handbook of Hypnotic Suggestions and Metaphors",
            author: "D. Corydon Hammond",
            url: "https://amzn.to/3uIcpMH",
            category: "Clinical Scripts",
            description: "A massive compendium of diverse suggestions and metaphors for practically every presenting issue.",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "The Structure of Magic",
            author: "John Grinder & Richard Bandler",
            url: "https://amzn.to/3r6GWBH",
            category: "NLP",
            description: "The foundational text of NLP, exploring the meta-model of language and how to uncover the deep structure of client communication.",
            image: "https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=800&auto=format&fit=crop"
        }
    ];

    return (
        <div className="font-body">
            {/* HERO SECTION */}
            <Section id="books-hero" theme="tint" className="pt-8 pb-12 md:pt-16 md:pb-20 border-b border-brand-soft-neutral/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-soft-teal/5 blur-3xl -z-10 rounded-full transform translate-x-1/2" aria-hidden="true"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-brand-soft-teal/10 blur-3xl -z-10 rounded-full transform -translate-x-1/2" aria-hidden="true"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
                    <FadeIn>
                        <div className="mx-auto w-16 h-16 bg-brand-soft-teal/10 rounded-full flex items-center justify-center mb-6 text-brand-soft-teal" aria-hidden="true">
                            <BookOpen size={28} />
                        </div>
                        <div className="text-base font-bold text-brand-soft-teal uppercase tracking-widest mb-4 z-10" id="books-hero-eyebrow">Curated Reading</div>
                        <Heading level={1} id="books-hero-heading" className="mb-6 text-brand-structural-navy">
                            Recommended Books
                        </Heading>
                        <Text id="books-hero-description" size="xl" muted className="mb-0 max-w-2xl mx-auto">
                            A curated selection of foundational texts for coaches, psychotherapists, and practitioners of cognitive hypnotic approaches.
                        </Text>
                    </FadeIn>
                </div>
            </Section>

            {/* BOOKS LIST */}
            <Section id="books-content" theme="white" className="py-12 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            {books.map((book, index) => (
                                <FadeIn key={`book-${index}`} delay={index * 0.05}>
                                    <a href={book.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full group">
                                        <div className="h-full cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center bg-white p-3 md:p-4 rounded-3xl border border-transparent hover:border-brand-soft-neutral/50 shadow-sm hover:shadow-md lg:hover:shadow-lg transition-all duration-300">
                                            {/* Book Cover Container */}
                                            <div className="md:col-span-4 lg:col-span-5 relative h-64 md:h-52 overflow-hidden rounded-2xl bg-brand-reflective-tint shadow-sm flex items-center justify-center p-4">
                                                {/* Book Cover Simulation */}
                                                <div className="relative h-[90%] w-32 md:w-32 lg:w-28 xl:w-32 shadow-[5px_5px_15px_rgba(0,0,0,0.15)] rounded-r-md group-hover:scale-105 transition-transform duration-500 bg-white">
                                                    <div className="absolute top-0 bottom-0 left-0 w-3 bg-black/10 z-10 border-r border-white/20"></div>
                                                    <img 
                                                        src={book.image} 
                                                        alt={book.title} 
                                                        className="w-full h-full object-cover rounded-r-md"
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                            </div>
                                            {/* Book Details */}
                                            <div className="md:col-span-8 lg:col-span-7 flex flex-col h-full py-2 px-2 md:px-0 md:pr-4">
                                                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-brand-secondary-text mb-3 flex-wrap">
                                                    <span className="bg-brand-soft-teal/10 text-brand-deep-teal px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                        {book.category}
                                                    </span>
                                                </div>
                                                <Heading level={4} className="mb-2 text-lg lg:text-xl group-hover:text-brand-deep-teal transition-colors">
                                                    {book.title}
                                                </Heading>
                                                <div className="mb-3 text-sm text-brand-secondary-text font-semibold">
                                                    By <span className="text-brand-structural-navy">{book.author}</span>
                                                </div>
                                                <Text size="sm" muted className="mb-4">
                                                    {book.description}
                                                </Text>
                                                <div className="mt-auto pt-2">
                                                    <span className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-structural-navy group-hover:text-brand-deep-teal transition-colors">
                                                        View on Amazon
                                                        <ExternalLink size={14} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* CTA SECTION */}
            <Section theme="neutral" className="py-24 border-t border-brand-soft-neutral/30">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn>
                        <div className="bg-brand-structural-navy text-white rounded-3xl p-10 md:p-14 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-soft-teal/10 rounded-full blur-3xl -mx-10 -my-10 border border-white/5"></div>
                            
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <Heading level={2} className="text-white mb-6">Looking for Structured Training?</Heading>
                                <Text className="text-white/80 mb-10 text-lg">
                                    While reading is foundational, mastery comes from structured learning and supervised practice. Explore our comprehensive courses that integrate these reading concepts into clinical practice.
                                </Text>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="#chp" className="w-full sm:w-auto">
                                        <Button className="w-full justify-center py-4 px-8 bg-brand-soft-teal hover:bg-white hover:text-brand-structural-navy border-none shadow-md group">
                                            Explore CHP Course
                                            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </a>
                                    <a href="#chc" className="w-full sm:w-auto">
                                        <Button variant="outline" className="w-full justify-center py-4 px-8 border-white/20 text-white hover:bg-white/10 group">
                                            Explore Coaching Course
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
};
