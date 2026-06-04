import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '../lib/utils';
import { Heading, Text } from './Blocks';
import { FadeIn } from './FadeIn';

interface VideoTestimonial {
  videoUrl?: string; // Optional actual URL if we have one
  thumbnailUrl: string;
  name: string;
  role: string;
  quote?: string;
}

interface VideoTestimonialGridProps {
  testimonials: VideoTestimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function VideoTestimonialGrid({ testimonials, title, subtitle, className }: VideoTestimonialGridProps) {
  return (
    <div className={cn("w-full max-w-6xl mx-auto", className)}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <Heading level={2} className="text-brand-structural-navy mb-4">{title}</Heading>}
          {subtitle && <Text size="lg" className="text-brand-secondary-text max-w-2xl mx-auto">{subtitle}</Text>}
        </div>
      )}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="group relative rounded-2xl overflow-hidden bg-brand-structural-navy border border-brand-soft-neutral/30 shadow-md cursor-pointer h-full flex flex-col">
              {/* Thumbnail Container */}
              <div className="aspect-video relative overflow-hidden bg-brand-structural-depth shrink-0">
                <img 
                  src={t.thumbnailUrl} 
                  alt={`${t.name}'s testimonial`} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-structural-navy to-transparent opacity-80" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-brand-soft-teal/90 group-hover:border-brand-soft-teal transition-colors duration-300">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-brand-structural-navy relative z-10 -mt-2">
                {t.quote && (
                  <p className="text-white/90 italic font-medium mb-6 leading-relaxed relative">
                    <span className="text-brand-soft-teal text-xl mr-1 font-accent">"</span>
                    {t.quote}
                    <span className="text-brand-soft-teal text-xl ml-1 font-accent">"</span>
                  </p>
                )}
                <div className="mt-auto border-t border-white/10 pt-4">
                  <div className="font-bold text-white text-base">{t.name}</div>
                  <div className="text-brand-soft-teal text-sm uppercase tracking-wider mt-1">{t.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
