const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

const heroStartStr = '{/* 1. HERO SECTION */}';
const heroStart = c.indexOf(heroStartStr);
const heroEndStr = '{/* 2. WHY SOME PRACTITIONERS PREFER';
const heroEnd = c.indexOf(heroEndStr);

if (heroStart > -1 && heroEnd > -1) {
    const oldHero = c.substring(heroStart, heroEnd);
    
    // Create new hero without arbitrary radial gradient
    let newHero = oldHero.replace(
      '<div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,#4A6B82_0%,transparent_70%)]" />',
      '<div className="absolute inset-0 opacity-40 pointer-events-none bg-gradient-to-b from-brand-soft-teal/10 to-transparent" />'
    );
    
    c = c.substring(0, heroStart) + 
      "{!isAuditRefactored ? (\n<>\n" + oldHero + "</>\n) : (\n<>\n" + newHero + "</>\n)}\n\n      " + c.substring(heroEnd);
}

fs.writeFileSync('src/pages/Cohorts.tsx', c);
