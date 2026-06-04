const fs = require('fs');
let C = fs.readFileSync('src/pages/Research.tsx', 'utf8');

C = C.replace(/<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">/g, '<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">');
C = C.replace(/<Card className="bg-brand-soft-neutral\/10 border-brand-soft-neutral p-6 sm:mt-8 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">/g, '<Card className="bg-brand-soft-neutral/10 border border-brand-soft-neutral/50 p-6 shadow-sm">');
C = C.replace(/<Card className="bg-brand-warm-white shadow border border-brand-soft-teal\/30 p-6 sm:mb-8 relative z-10 transition-transform hover:-translate-y-1 hover:shadow-md">/g, '<Card className="bg-brand-warm-white border border-brand-soft-teal/30 p-6 shadow-sm">');
C = C.replace(/<Card className="bg-white shadow border border-brand-soft-neutral p-6 col-span-2 transition-transform hover:-translate-y-1 hover:shadow-md">/g, '<Card className="bg-white border border-brand-soft-neutral p-6 sm:col-span-2 shadow-sm">');

C = C.replace(/<Heading level=\{4\} className="mb-2 text-lg">/g, '<Heading level={3} className="mb-2 text-lg font-semibold text-brand-structural-navy">');
C = C.replace(/<Heading[\s\n]*level=\{4\}[\s\n]*className="mb-3 text-brand-structural-navy"[\s\n]*>/g, '<Heading level={3} className="mb-3 text-brand-structural-navy">');
C = C.replace(/<Heading[\s\n]*level=\{4\}[\s\n]*className="text-lg text-brand-structural-navy transition-colors font-medium mb-1\.5 leading-snug group-hover:text-brand-deep-teal"[\s\n]*>/g, '<Heading level={3} className="text-lg text-brand-structural-navy font-semibold mb-1.5 leading-snug group-hover:text-brand-deep-teal">');

C = C.replace(/shadow-sm scale-105/g, 'shadow-sm');

// Remove complex interactive hovers on the list items, simplify to a clean layout
C = C.replace(/className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl border border-brand-soft-neutral\/40 transition-all duration-300 hover:border-brand-soft-teal hover:shadow-md hover:-translate-y-0\.5"/g, 'className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-white rounded-xl border border-brand-soft-neutral/40 hover:border-brand-soft-teal hover:bg-brand-soft-neutral/5 transition-colors"');

fs.writeFileSync('src/pages/Research.tsx', C);
