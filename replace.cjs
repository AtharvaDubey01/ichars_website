const fs = require('fs');
const file = 'src/pages/Level4.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/brand-amber/g, 'brand-accent-orange');
fs.writeFileSync(file, content);
console.log('Replaced');
