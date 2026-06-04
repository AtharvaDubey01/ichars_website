const fs = require('fs');
const orig = fs.readFileSync('src/pages/Research.tsx', 'utf8');
const replacement = fs.readFileSync('research_end.txt', 'utf8');
const updated = orig.replace(/export const Research = \(\) => \{[\s\S]*?(?=$)/, replacement);
fs.writeFileSync('src/pages/Research.tsx', updated);
console.log('Update complete.');
