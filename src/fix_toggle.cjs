const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace('className={}', 'className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${isComparisonDeepened ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}`}');
c = c.replace('className={}', 'className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${isComparisonDeepened ? "translate-x-5" : "translate-x-1"}`}');

fs.writeFileSync('src/pages/Cohorts.tsx', c);
