import { Play } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

interface VideoPlaceholderProps {
  title?: string;
  duration?: string;
  thumbnailUrl?: string;
  className?: string;
}

export function VideoPlaceholder({ title = "Watch the Video", duration = "3:45", thumbnailUrl, className }: VideoPlaceholderProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cn("relative w-full aspect-video rounded-2xl overflow-hidden group border border-brand-soft-neutral shadow-lg bg-brand-structural-depth flex items-center justify-center cursor-pointer transition-all", className)} onClick={() => setIsPlaying(true)}>
      {thumbnailUrl ? (
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-teal to-brand-structural-navy transition-transform duration-700 group-hover:scale-105" />
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-structural-depth/40 group-hover:bg-brand-structural-depth/30 transition-colors" />

      {/* Play Button */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-brand-soft-teal group-hover:text-brand-structural-navy text-white transition-all duration-300 shadow-xl mb-4 border border-white/20">
          <Play className="w-8 h-8 ml-1" fill="currentColor" />
        </div>
        {!isPlaying && (
            <div className="text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-90 group-hover:opacity-100">
                <p className="text-white font-medium text-lg tracking-wide drop-shadow-md">{title}</p>
                {duration && <p className="text-brand-soft-teal text-base font-semibold mt-1 drop-shadow-md">{duration}</p>}
            </div>
        )}
        {isPlaying && (
            <div className="text-white text-center mt-2 animate-pulse bg-brand-structural-depth/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                Video player would open or embed here.
            </div>
        )}
      </div>
    </div>
  );
}
