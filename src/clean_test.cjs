const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace('const [isMergedEcosystem, setIsMergedEcosystem] = useState(false);', 'const [isOnlineObjectionOptimized, setIsOnlineObjectionOptimized] = useState(false);');

const toggleStart = c.indexOf('{/* Split Test Toggles */}');
const toggleEnd = c.indexOf('{/* 1. HERO SECTION */}');
if (toggleStart > -1 && toggleEnd > toggleStart) {
  c = c.substring(0, toggleStart) + `{/* Split Test Toggles */}
      <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-xl shadow-lg border border-brand-soft-neutral/50 text-sm max-w-xs">
        <div className="font-bold text-brand-structural-navy mb-3 text-xs uppercase tracking-widest border-b border-brand-soft-neutral/30 pb-2">
          Active Split Tests
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-brand-secondary-text font-medium">
            Optimize Online Objection:
          </span>
          <button
            onClick={() => setIsOnlineObjectionOptimized(!isOnlineObjectionOptimized)}
            className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${isOnlineObjectionOptimized ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}\`}
          >
            <span
              className={\`inline-block h-3 w-3 transform rounded-full bg-white transition-transform \${isOnlineObjectionOptimized ? "translate-x-5" : "translate-x-1"}\`}
            />
          </button>
        </div>
      </div>\n\n      ` + c.substring(toggleEnd);
}

const heroSt = c.indexOf('{!isMergedEcosystem && (\n            <FadeIn\n              delay={0.2}');
if (heroSt > -1) {
  const heroEnd = c.indexOf('          )}\n', heroSt);
  c = c.substring(0, heroSt) + c.substring(heroEnd + 14);
} else {
  console.log("Could not find heroSt");
}

const sec3St = c.indexOf('{!isMergedEcosystem ? (\n        <>\n          {/* 3. HOW COHORT LEARNING WORKS */}');
const sec3Mid = c.indexOf('          {/* 3. THE ECOSYSTEM EXPERIENCE (Consolidated) */}');
if (sec3St > -1 && sec3Mid > sec3St) {
  c = c.substring(0, sec3St) + c.substring(sec3Mid);
} else {
  console.log("Could not find sec3St or sec3Mid");
}

const endSec4 = c.indexOf('</>\n      )}\n\n      {/* 5. WHAT PRACTITIONERS EXPERIENCE */}');
if (endSec4 > -1) {
  c = c.substring(0, endSec4) + '\n      {/* 5. WHAT PRACTITIONERS EXPERIENCE */}'+ c.substring(endSec4 + 60);
} else {
  console.log("Could not find endSec4");
}

const sec8St = c.indexOf('{!isMergedEcosystem && (\n        <>\n          {/* 8. LONG-TERM DEVELOPMENT */}');
const sec8End = c.indexOf('</Section>\n        </>\n      )}', sec8St);
if (sec8St > -1 && sec8End > -1) {
  c = c.substring(0, sec8St) + c.substring(sec8End + 31);
} else {
  console.log("Could not find sec8");
}
fs.writeFileSync('src/pages/Cohorts.tsx', c);
