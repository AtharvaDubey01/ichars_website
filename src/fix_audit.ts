import fs from 'fs';

let content = fs.readFileSync('src/pages/CHC.tsx', 'utf8');

// 1. Remove absolute timeline lines (Developmental Flow & Case Explorer)
content = content.replace(
    /<div className="absolute left-\[27px\] top-\[40px\] bottom-\[40px\] w-0\.5 bg-brand-soft-neutral\/30 z-0 hidden sm:block" \/>/g,
    ""
);
content = content.replace(
    /<div className="absolute left-\[39px\] md:left-\[43px\] top-\[40px\] bottom-\[100px\] w-0\.5 bg-brand-soft-neutral\/30 z-0" \/>/g,
    ""
);

// 2. Remove arbitrary complex background shapes in cards (Programs vs Cohorts)
content = content.replace(
    /<div className="absolute top-0 right-0 w-32 h-32 bg-brand-soft-teal\/5 rounded-bl-\[100px\] rounded-tr-3xl -z-10 group-hover:bg-brand-soft-teal\/10 transition-colors" \/>/g,
    ""
);
content = content.replace(
    /<div className="absolute top-0 right-0 w-48 h-48 bg-white\/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-white\/10 transition-colors" \/>/g,
    ""
);

// 3. Remove connecting line from practitioner evolution
content = content.replace(
    /<div className="absolute left-\[9px\] top-\[10px\] bottom-\[10px\] w-\[2px\] bg-white\/10 z-0" \/>/g,
    ""
);

// 4. Fix Heading Hierarchy
// In Transformational Case Explorer
content = content.replace(
    /<Heading level=\{4\} className="text-brand-deep-teal mb-4 text-xl">/g,
    '<Heading level={3} className="text-brand-deep-teal mb-4 text-xl">'
);
content = content.replace(
    /<Heading level=\{4\} className="text-white mb-4 text-xl">/g,
    '<Heading level={3} className="text-white mb-4 text-xl">'
);

// Developmental Flow headings down to 3
content = content.replace(
    /<Heading level=\{4\} className="text-xl text-brand-structural-navy mb-3">/g,
    '<Heading level={3} className="text-xl text-brand-structural-navy mb-3">'
);

// Focus Areas details (level 4 -> 3)
content = content.replace(
    /<Heading level=\{4\} className="text-xl text-brand-structural-navy">\{focusAreas\[activeTab\]\.title\}<\/Heading>/g,
    '<Heading level={3} className="text-xl text-brand-structural-navy">{focusAreas[activeTab].title}</Heading>'
);

// Foundations
content = content.replace(
    /<Heading level=\{4\} className="text-lg text-brand-structural-navy mb-2">A Shared Foundation<\/Heading>/g,
    '<Heading level={3} className="text-lg text-brand-structural-navy mb-2">A Shared Foundation</Heading>'
);

fs.writeFileSync('src/pages/CHC.tsx', content);
console.log("Audit fixes applied");
