const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace('      <>\n        {/* 7.5 CLINICAL APPLICATION IN A DIGITAL ENVIRONMENT */}', '      {/* 7.5 CLINICAL APPLICATION IN A DIGITAL ENVIRONMENT */}');
c = c.replace('          </div>\n        </Section>\n      </>\n\n      {/* 9. EXPLORE COHORTS (CTA Section) */}', '          </div>\n        </Section>\n\n      {/* 9. EXPLORE COHORTS (CTA Section) */}');
c = c.replace('      \n</>\n)}\n\n{/* 7.5 CLINICAL APPLICATION IN A DIGITAL ENVIRONMENT */}', '      \n</>\n)}\n\n      {/* 7.5 CLINICAL APPLICATION IN A DIGITAL ENVIRONMENT */}');
fs.writeFileSync('src/pages/Cohorts.tsx', c);
