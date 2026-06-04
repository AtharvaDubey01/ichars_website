import fs from 'fs';
let content = fs.readFileSync('src/pages/CHC.tsx', 'utf8');
content = content.replace(
    /<Heading level=\{4\} className="text-white mb-3">Try it risk-free<\/Heading>/g,
    '<Heading level={3} className="text-white mb-3">Try it risk-free</Heading>'
);
fs.writeFileSync('src/pages/CHC.tsx', content);
console.log('Fixed money back heading');
