import React, { useState } from 'react';
import { Section, Heading, Text, Button, Card } from '../components/Blocks';
import { FadeIn } from '../components/FadeIn';
import { Search, FileText, PlayCircle, Image as ImageIcon, ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export const BlogArchive = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Psychotherapy', 'Coaching', 'NLP', 'Practitioner Development', 'Case Studies'];

    const posts = [
        {
            id: 1,
            title: "Cognitive Hypnotic Psychotherapy Approach",
            excerpt: "A comprehensive framework combining cognitive, behavioral, and psychodynamic principles with clinical hypnosis for profound therapeutic transformation.",
            category: "Psychotherapy",
            date: "October 12, 2023",
            readTime: "8 min",
            format: "article",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Cognitive Hypnotic Coaching Approach",
            excerpt: "How to integrate subconscious change techniques with structured coaching methodologies to facilitate rapid, sustainable client growth and performance.",
            category: "Coaching",
            date: "September 28, 2023",
            readTime: "6 min",
            format: "article",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "The Role of Hypnosis in Accelerating Cognitive Restructuring",
            excerpt: "How bypassing conscious resistance allows for deeper, more sustainable restructuring of limiting beliefs and emotional responses.",
            category: "NLP",
            date: "September 15, 2023",
            readTime: "12 min",
            format: "video",
            image: "https://images.unsplash.com/photo-1507208613628-1ce972eb2955?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Case Study: Chronic Anxiety and Relational Protection",
            excerpt: "An analysis of a complex presentation where chronic anxiety served as an unconscious protective mechanism against relational vulnerability.",
            category: "Case Studies",
            date: "August 30, 2023",
            readTime: "11 min",
            format: "article",
            image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Developing 'Therapeutic Intent' Before Selecting Interventions",
            excerpt: "Why what you intend to accomplish must logically precede the technique you choose to apply in any therapeutic encounter.",
            category: "Practitioner Development",
            date: "August 14, 2023",
            readTime: "7 min",
            format: "infographic",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 6,
            title: "Integrating Psychodynamic Understanding with CBT Tools",
            excerpt: "A practical framework for using cognitive-behavioral tools while holding space for psychodynamic depth and historical context.",
            category: "Psychotherapy",
            date: "July 22, 2023",
            readTime: "9 min",
            format: "article",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const filteredPosts = posts.filter(post => 
        (activeTab === 'All' || post.category === activeTab) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const getFormatIcon = (format: string) => {
        switch (format) {
            case 'video': return <PlayCircle size={16} aria-hidden="true" className="text-brand-soft-teal" />;
            case 'infographic': return <ImageIcon size={16} aria-hidden="true" className="text-brand-soft-teal" />;
            default: return <FileText size={16} aria-hidden="true" className="text-brand-secondary-text" />;
        }
    };

    const getFormatLabel = (format: string) => {
        switch (format) {
            case 'video': return 'Video Masterclass';
            case 'infographic': return 'Visual Guide';
            default: return 'Article';
        }
    };

    const NewsletterWidget = ({ className = "" }: { className?: string }) => (
        <div className={`bg-brand-structural-navy text-white p-8 rounded-2xl shadow-lg relative overflow-hidden ${className}`}>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-soft-teal/20 rounded-full blur-2xl" aria-hidden="true"></div>
            <div className="relative z-10 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-brand-soft-teal border border-white/10" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <Heading level={4} className="text-white mb-3 leading-tight">Weekly Insights</Heading>
            <Text size="sm" className="text-white/70 mb-6">
                Join 5,000+ practitioners receiving our perspective on therapeutic methodology.
            </Text>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Your email address" 
                    aria-label="Email address for newsletter"
                    className="w-full px-4 py-3 rounded-xl text-base text-brand-structural-navy bg-white/95 focus:outline-none focus:ring-2 focus:ring-brand-soft-teal"
                    required
                />
                <Button type="submit" className="w-full justify-center py-3 bg-brand-soft-teal hover:bg-white hover:text-brand-structural-navy border-none text-base shadow-sm hover:shadow-md transition-shadow">
                    Subscribe
                </Button>
            </form>
        </div>
    );

    return (
        <div className="font-body">
            {/* HERO SECTION */}
            <Section id="blog-hero" theme="tint" className="pt-8 pb-12 md:pt-16 md:pb-20 border-b border-brand-soft-neutral/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-soft-teal/5 blur-3xl -z-10 rounded-full transform translate-x-1/2" aria-hidden="true"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-brand-soft-teal/10 blur-3xl -z-10 rounded-full transform -translate-x-1/2" aria-hidden="true"></div>
                
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeIn>
                        <div className="text-base font-bold text-brand-soft-teal uppercase tracking-widest mb-4 z-10" id="blog-hero-eyebrow">Insights & Perspectives</div>
                        <Heading level={1} id="blog-hero-heading" className="mb-6 text-brand-structural-navy">
                            The ICHARS Blog
                        </Heading>
                        <Text id="blog-hero-description" size="xl" muted className="mb-0 max-w-2xl mx-auto">
                            Explorations into cognitive hypnotic approaches, practitioner development, 
                            and the layered complexity of human transformation.
                        </Text>
                    </FadeIn>
                </div>
            </Section>

            {/* ARCHIVE CONTENT */}
            <Section id="blog-archive-content" theme="white" className="py-12 lg:py-24">
                <div className="w-full">
                    {filteredPosts.length > 0 || searchQuery !== '' ? (
                        <>
                            {/* Featured Posts (Only show if 'All' and no search query) */}
                            {activeTab === 'All' && searchQuery === '' && (
                                <FadeIn>
                                    <div className="mb-16 lg:mb-24">
                                        <div className="text-base font-bold text-brand-secondary-text tracking-widest uppercase mb-6 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-brand-soft-teal inline-block" aria-hidden="true"></span>
                                            Featured Approaches
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                            {[posts[0], posts[1]].map((featuredPost) => (
                                                <Card key={featuredPost.id} className="p-0 overflow-hidden flex flex-col group border-transparent shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl cursor-pointer">
                                                    <div className="relative h-64 overflow-hidden bg-brand-soft-neutral">
                                                        <div className="absolute top-6 left-6 z-10 flex gap-2">
                                                            <span className="bg-white/90 backdrop-blur-sm text-brand-structural-navy text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                                                                {getFormatIcon(featuredPost.format)}
                                                                {featuredPost.category}
                                                            </span>
                                                        </div>
                                                        <img 
                                                            src={featuredPost.image} 
                                                            alt={featuredPost.title} 
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <div className="p-6 lg:p-10 flex flex-col flex-grow bg-white">
                                                        <div className="flex items-center gap-4 text-base font-medium text-brand-secondary-text mb-4">
                                                            <span className="text-brand-structural-navy font-bold">{getFormatLabel(featuredPost.format)}</span>
                                                            <span className="w-1 h-1 rounded-full bg-brand-soft-neutral/80" aria-hidden="true"></span>
                                                            <span className="flex items-center gap-1.5"><Clock size={14} aria-hidden="true" /> {featuredPost.readTime}</span>
                                                        </div>
                                                        <Heading level={3} className="mb-4 text-2xl group-hover:text-brand-deep-teal transition-colors leading-tight">
                                                            {featuredPost.title}
                                                        </Heading>
                                                        <Text size="sm" muted className="mb-8 flex-grow">
                                                            {featuredPost.excerpt}
                                                        </Text>
                                                        <div className="mt-auto">
                                                            <a href="#blog-post" className="inline-flex items-center gap-2 text-base font-bold text-brand-structural-navy group-hover:text-brand-deep-teal transition-colors focus:outline-none focus:ring-2 focus:ring-brand-soft-teal rounded-sm">
                                                                Read Full Guide 
                                                                <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </Card>
                                            ))}
                                        </div>
                                    </div>
                                </FadeIn>
                            )}

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                                {/* Left Column: List of Posts */}
                                <div className="lg:col-span-8 flex flex-col gap-10 order-2 lg:order-1">
                                    <div className="flex items-center justify-between border-b border-brand-soft-neutral/30 pb-4 mb-2">
                                        <Heading level={3} id={`blog-archive-${activeTab !== 'All' ? activeTab : 'latest'}-heading`} className="text-xl lg:text-2xl m-0">
                                            {searchQuery ? 'Search Results' : (activeTab === 'All' ? 'Latest Perspectives' : `${activeTab} Articles`)}
                                        </Heading>
                                    </div>

                                    {(activeTab === 'All' && searchQuery === '' ? posts.slice(2) : filteredPosts).map((post, index) => (
                                        <FadeIn key={`list-post-${post.id}`} delay={index * 0.05}>
                                            <div id={`blog-post-card-${post.id}`} className="group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-center bg-white p-3 md:p-4 rounded-3xl border border-transparent hover:border-brand-soft-neutral/50 shadow-sm hover:shadow-md lg:hover:shadow-lg transition-all duration-300">
                                                <div className="md:col-span-5 relative h-56 md:h-52 overflow-hidden rounded-2xl bg-brand-soft-neutral shadow-sm">
                                                    {post.format === 'video' && (
                                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                                            <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                                                <PlayCircle size={24} aria-hidden="true" className="text-brand-structural-navy ml-1" />
                                                            </div>
                                                        </div>
                                                    )}
                                                    <img 
                                                        src={post.image} 
                                                        alt={post.title} 
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                                <div className="md:col-span-7 flex flex-col py-2 px-2 md:px-0 md:pr-4">
                                                    <div className="flex items-center gap-3 text-sm font-semibold text-brand-secondary-text mb-3 flex-wrap">
                                                        <span className="text-brand-structural-navy font-bold flex items-center gap-1.5">
                                                            {getFormatIcon(post.format)}
                                                            {getFormatLabel(post.format)}
                                                        </span>
                                                        <span className="w-1 h-1 rounded-full bg-brand-soft-neutral/80" aria-hidden="true"></span>
                                                        <span className="text-brand-soft-teal tracking-wider uppercase">{post.category}</span>
                                                        <span className="w-1 h-1 rounded-full bg-brand-soft-neutral/80 hidden sm:block" aria-hidden="true"></span>
                                                        <span className="hidden sm:flex items-center gap-1.5"><Clock size={12} aria-hidden="true" /> {post.readTime}</span>
                                                    </div>
                                                    <Heading level={4} className="mb-3 text-xl lg:text-2xl group-hover:text-brand-deep-teal transition-colors">
                                                        {post.title}
                                                    </Heading>
                                                    <Text size="sm" muted className="mb-6">
                                                        {post.excerpt}
                                                    </Text>
                                                    <div className="mt-auto">
                                                        <a href="#blog-post" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-structural-navy group-hover:text-brand-deep-teal transition-colors focus:outline-none focus:ring-2 focus:ring-brand-soft-teal rounded-sm">
                                                            Read Article
                                                            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </FadeIn>
                                    ))}

                                    {filteredPosts.length === 0 && (
                                        <div className="text-center py-16 bg-brand-soft-neutral/20 rounded-3xl border border-brand-soft-neutral/50">
                                            <Search size={32} aria-hidden="true" className="mx-auto text-brand-secondary-text/50 mb-4" />
                                            <Heading level={4} className="text-brand-structural-navy mb-2">No articles found</Heading>
                                            <Text muted>Try adjusting your search or category filter to find what you're looking for.</Text>
                                            <Button 
                                                variant="outline" 
                                                className="mt-6"
                                                onClick={() => { setSearchQuery(''); setActiveTab('All'); }}
                                            >
                                                Clear Filters
                                            </Button>
                                        </div>
                                    )}

                                    {/* Pagination */}
                                    {filteredPosts.length > 0 && (
                                        <div className="mt-8 lg:mt-12 flex items-center justify-center lg:justify-start gap-2 border-t border-brand-soft-neutral/30 pt-8">
                                            <button aria-label="Previous Page" className="w-10 h-10 rounded-full flex items-center justify-center border border-brand-soft-neutral text-brand-secondary-text hover:bg-brand-soft-neutral/30 transition-colors opacity-50 cursor-not-allowed">
                                                <ChevronLeft size={16} aria-hidden="true" />
                                            </button>
                                            <button aria-label="Page 1" className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-structural-navy text-white shadow-md font-medium text-base">
                                                1
                                            </button>
                                            <button aria-label="Page 2" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-soft-neutral/30 text-brand-structural-navy font-medium text-base transition-colors">
                                                2
                                            </button>
                                            <span className="text-brand-secondary-text hidden sm:inline-block px-2" aria-hidden="true">...</span>
                                            <button aria-label="Page 8" className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-brand-soft-neutral/30 text-brand-structural-navy font-medium text-base transition-colors hidden sm:flex">
                                                8
                                            </button>
                                            <button aria-label="Next Page" className="w-10 h-10 rounded-full flex items-center justify-center border border-brand-soft-neutral text-brand-structural-navy hover:bg-brand-soft-neutral/30 transition-colors">
                                                <ChevronRight size={16} aria-hidden="true" />
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Right Column: Sidebar */}
                                <div className="lg:col-span-4 order-1 lg:order-2">
                                    <div className="lg:sticky lg:top-24 flex flex-col gap-6 lg:gap-8">
                                        
                                        {/* Search Filter */}
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Search size={18} aria-hidden="true" className="text-brand-secondary-text" />
                                            </div>
                                            <input 
                                                type="text" 
                                                placeholder="Search articles..." 
                                                aria-label="Search articles by title or keyword"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="w-full pl-11 pr-4 py-3.5 bg-white border border-brand-soft-neutral/80 rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-brand-soft-teal focus:border-brand-soft-teal transition-shadow shadow-sm font-medium text-brand-structural-navy placeholder:font-normal"
                                            />
                                        </div>

                                        {/* Topics */}
                                        <div className="bg-brand-reflective-tint lg:p-8 rounded-2xl lg:border border-brand-soft-teal/20">
                                            <Heading level={4} className="hidden lg:block mb-6 pb-4 border-b border-brand-soft-teal/20">Explore Topics</Heading>
                                            
                                            <div className="lg:hidden text-sm font-bold text-brand-secondary-text uppercase tracking-wider mb-3 px-1 mt-2">Filter by Category</div>
                                            
                                            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar -mx-2 px-2 lg:mx-0 lg:px-0">
                                                {categories.map((category) => (
                                                    <button
                                                        key={category}
                                                        onClick={() => setActiveTab(category)}
                                                        className={`flex-shrink-0 lg:flex-shrink flex items-center justify-between px-5 py-2.5 lg:px-4 lg:py-3 rounded-full lg:rounded-xl text-base font-semibold transition-all duration-300 ${
                                                            activeTab === category 
                                                            ? 'bg-brand-structural-navy text-white shadow-md' 
                                                            : 'bg-white lg:bg-white/50 text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral lg:border-transparent hover:border-brand-soft-teal/20'
                                                        }`}
                                                    >
                                                        <span>{category}</span>
                                                        {category !== 'All' && (
                                                            <span className={`hidden lg:flex items-center justify-center text-sm px-2 py-0.5 rounded-full ${activeTab === category ? 'bg-white/20' : 'bg-brand-soft-neutral text-brand-secondary-text'}`}>
                                                                {Math.floor(Math.random() * 15) + 3}
                                                            </span>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Newsletter */}
                                        <div className="mt-2 lg:mt-0">
                                            <NewsletterWidget />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </Section>

        </div>
    );
};
