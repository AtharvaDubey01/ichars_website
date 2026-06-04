const fs = require('fs');
const fileContent = fs.readFileSync('src/pages/Research.tsx', 'utf8');
const arrayMatch = fileContent.match(/const researchPapers = (\[[\s\S]*?\]);/);
if (!arrayMatch) { console.error('Could not find researchPapers array'); process.exit(1); }
const rawArray = arrayMatch[1];
const newComponent = ;
fs.writeFileSync('src/pages/Research.tsx', newComponent, 'utf8');