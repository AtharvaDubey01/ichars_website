import { ArrowRight } from 'lucide-react';
import { Heading, Text } from './Blocks';
import { ConceptMapGraphic } from './ConceptMapGraphic';
import { FadeIn } from './FadeIn';

export function HeroStacked() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-deep-teal overflow-hidden min-h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #65BFA9 0%, transparent 50%)' }}></div>
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* 1. HEADLINE */}
        <FadeIn className="w-full max-w-4xl text-center">
          <Heading level={1} className="mb-6 text-white text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
            You've learned the concepts.<br />
            <span className="text-brand-soft-teal">But real sessions still don't always feel clear.</span>
          </Heading>
        </FadeIn>
        
        {/* 2. SUBHEADING */}
        <FadeIn delay={0.1} className="w-full max-w-3xl text-center mb-10">
          <Text size="xl" className="text-brand-warm-white/90">
            You may already understand psychological theories, coaching frameworks, therapeutic concepts, or transformational techniques. But in practice...
          </Text>
        </FadeIn>

        {/* 3. PAIN POINTS / SYMPTOMS */}
        <FadeIn delay={0.2} className="w-full max-w-4xl mb-16 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-brand-warm-white/90 text-[15px] md:text-base">
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-5 rounded-xl border border-brand-soft-teal/10 hover:border-brand-soft-teal/30 shadow-sm transition-all duration-300">
                    <span className="text-brand-accent-orange mt-0.5">✦</span> 
                    <span className="font-medium leading-relaxed">you pause before responding</span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-5 rounded-xl border border-brand-soft-teal/10 hover:border-brand-soft-teal/30 shadow-sm transition-all duration-300">
                    <span className="text-brand-accent-orange mt-0.5">✦</span> 
                    <span className="font-medium leading-relaxed">different approaches compete in your mind</span>
                </div>
                <div className="flex items-start gap-3 bg-white/5 hover:bg-white/10 p-5 rounded-xl border border-brand-soft-teal/10 hover:border-brand-soft-teal/30 shadow-sm transition-all duration-300">
                    <span className="text-brand-accent-orange mt-0.5">✦</span> 
                    <span className="font-medium leading-relaxed">some sessions flow naturally while others feel uncertain</span>
                </div>
            </div>
        </FadeIn>

        {/* 4. THE SOLUTION GRAPHIC */}
        <div className="w-full flex justify-center mb-16">
            <FadeIn delay={0.3} className="w-full max-w-lg lg:max-w-4xl relative">
              <div className="absolute -inset-10 bg-brand-soft-teal/5 blur-3xl rounded-[100px]" />
              <ConceptMapGraphic />
            </FadeIn>
        </div>

        {/* 5. CTAs */}
        <FadeIn delay={0.4} className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#start" className="inline-flex items-center justify-center bg-brand-soft-teal text-brand-structural-depth font-medium px-10 py-5 hover:bg-white transition-colors rounded-xl gap-2 uppercase tracking-wide text-base font-bold shadow-lg">
                Find Your Starting Point <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#programs" className="inline-flex items-center justify-center border border-brand-soft-teal/50 text-brand-soft-teal font-medium px-10 py-5 hover:bg-brand-soft-teal/10 transition-colors rounded-xl uppercase tracking-wide text-base font-bold">
                Explore the Ecosystem
            </a>
        </FadeIn>
      </div>
    </section>
  );
}
