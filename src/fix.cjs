const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace('      <>\n        \n</>\n) : (', '</>\n) : (');
fs.writeFileSync('src/pages/Cohorts.tsx', c);
