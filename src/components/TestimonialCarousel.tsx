import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface Testimonial {
  quote: string;
  authorType: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialCarousel({ testimonials, className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1));
  const next = () => setCurrentIndex((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1));

  return (
    <div className={cn("relative w-full max-w-4xl mx-auto", className)}>
      <div className="rounded-2xl bg-white border border-brand-soft-neutral shadow-sm h-full flex flex-col relative px-10 py-14 md:px-20 md:py-16">
        <span className="absolute top-4 left-6 text-8xl text-brand-soft-teal/20 font-accent opacity-50 select-none pointer-events-none">"</span>
        
        <div className="overflow-hidden relative z-10 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full z-10 min-h-[160px] md:min-h-[120px]"
            >
              <p className="text-xl md:text-2xl text-brand-primary-text mb-8 leading-relaxed font-medium flex-1 text-center font-accent italic px-2">
                {testimonials[currentIndex].quote}
              </p>
              <div className="border-t border-brand-soft-neutral/50 pt-6 mt-auto text-center">
                <p className="text-base font-bold text-brand-secondary-text uppercase tracking-widest">
                  {testimonials[currentIndex].authorType}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center z-20 translate-x-[-1px]">
          <button 
            onClick={prev}
            className="bg-white border border-brand-soft-neutral text-brand-deep-teal rounded-r-lg p-2 md:p-3 hover:bg-brand-soft-neutral/50 transition-colors shadow-sm focus:outline-none"
            title="Previous"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-20 translate-x-[1px]">
          <button 
            onClick={next}
            className="bg-white border border-brand-soft-neutral text-brand-deep-teal rounded-l-lg p-2 md:p-3 hover:bg-brand-soft-neutral/50 transition-colors shadow-sm focus:outline-none"
            title="Next"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn("w-2 h-2 rounded-full transition-all", idx === currentIndex ? "bg-brand-deep-teal w-6" : "bg-brand-soft-teal/50 hover:bg-brand-soft-teal")}
                />
            ))}
        </div>
      </div>
    </div>
  );
}
