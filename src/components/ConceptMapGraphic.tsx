import { Box, Layers, Play, CheckCircle2, Workflow } from 'lucide-react';

export function ConceptMapGraphic() {
  return (
    <div className="w-full bg-brand-structural-navy rounded-2xl border border-brand-soft-teal/30 p-8 shadow-xl flex flex-col relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#65BFA9 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        
        <div className="relative z-10 flex flex-col lg:flex-row gap-5 lg:gap-8 items-stretch lg:items-center justify-between">
            {/* Step 1 */}
            <div className="flex items-start lg:flex-col lg:items-center lg:text-center gap-4 p-5 rounded-xl border border-white/5 bg-white/5 flex-1 h-full">
                <div className="bg-brand-accent-orange/20 p-3 rounded-lg text-brand-accent-orange shrink-0">
                    <Workflow className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-base font-semibold tracking-wide uppercase text-white mb-2">Untangled Complexity</h4>
                   <p className="text-brand-warm-white/70 text-base leading-relaxed">Client narrative is organized instantly into recognizable cognitive and emotional patterns.</p>
                </div>
            </div>

            {/* Connecting Line indicator (Vertical on mobile, horizontal on desktop) */}
            <div className="w-0.5 h-4 lg:w-8 lg:h-0.5 bg-brand-soft-teal/20 ml-9 lg:ml-0 -my-3 lg:my-0 lg:-mx-4 z-0 shrink-0" />

            {/* Step 2 */}
            <div className="flex items-start lg:flex-col lg:items-center lg:text-center gap-4 p-5 rounded-xl border border-white/5 bg-white/5 flex-1 h-full">
                <div className="bg-brand-soft-teal/20 p-3 rounded-lg text-brand-soft-teal shrink-0">
                    <Layers className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-base font-semibold tracking-wide uppercase text-white mb-2">Structured Integration</h4>
                   <p className="text-brand-warm-white/70 text-base leading-relaxed">Multiple psychological theories synthesize into a unified, actionable framework.</p>
                </div>
            </div>

            {/* Connecting Line indicator */}
            <div className="w-0.5 h-4 lg:w-8 lg:h-0.5 bg-brand-soft-teal/20 ml-9 lg:ml-0 -my-3 lg:my-0 lg:-mx-4 z-0 shrink-0" />

            {/* Step 3 */}
            <div className="flex items-start lg:flex-col lg:items-center lg:text-center gap-4 p-5 rounded-xl border border-brand-soft-teal bg-white text-brand-structural-navy shadow-[0_0_30px_rgba(101,191,169,0.15)] transform translate-x-2 lg:translate-x-0 lg:-translate-y-2 flex-1 h-full relative z-10">
                <div className="bg-brand-soft-teal/20 p-3 rounded-lg text-brand-deep-teal shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-base font-bold tracking-wide uppercase text-brand-deep-teal mb-2">Clear Intervention</h4>
                   <p className="text-brand-secondary-text text-base leading-relaxed font-medium">You know exactly what to address, and which technique to apply next.</p>
                </div>
            </div>
        </div>
    </div>
  );
}
