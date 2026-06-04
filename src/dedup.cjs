const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

const t = `      {/* Split Test Toggles */}
      <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-xl shadow-lg border border-brand-soft-neutral/50 text-sm max-w-xs transition-opacity duration-300">
        <div className="font-bold text-brand-structural-navy mb-3 text-xs uppercase tracking-widest border-b border-brand-soft-neutral/30 pb-2">
          Active Split Tests
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-brand-secondary-text font-medium text-[13px]">
            Refine Interactive Canvas:
          </span>
          <button
            onClick={() => setIsInteractiveCanvasRefined(!isInteractiveCanvasRefined)}
            className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${isInteractiveCanvasRefined ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}\`}
          >
            <span
              className={\`inline-block h-3 w-3 transform rounded-full bg-white transition-transform \${isInteractiveCanvasRefined ? "translate-x-5" : "translate-x-1"}\`}
            />
          </button>
        </div>
      </div>\n\n`;

const parts = c.split(t);
if(parts.length > 2) {
    c = parts[0] + t + parts.slice(2).join(t);
    fs.writeFileSync('src/pages/Cohorts.tsx', c);
    console.log("Fixed deduplication");
} else {
    console.log("Already okay or logic didn't match.");
}
