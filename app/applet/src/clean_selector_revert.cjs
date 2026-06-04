const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace('  const [activeTab, setActiveTab] = useState(1);\n  const [isSelectorMerged, setIsSelectorMerged] = useState(false);', '  const [activeTab, setActiveTab] = useState(1);');

const toggleStart = c.indexOf('{/* Split Test Toggles */}');
const toggleEnd = c.indexOf('{/* 1. HERO SECTION */}');
if (toggleStart > -1 && toggleEnd > toggleStart) {
  c = c.substring(0, toggleStart) + c.substring(toggleEnd);
}

const splitStart = c.indexOf('{!isSelectorMerged ? (\n<>\n');
const mergedStart = c.indexOf('\n</>\n) : (\n<>\n');

if (splitStart > -1 && mergedStart > -1) {
    const endMerged = c.indexOf('\n</>\n)}\n\n      {/* 7.5 CLINICAL APPLICATION');
    
    if (endMerged > -1) {
        let oldCode = c.substring(splitStart + 26, mergedStart);
        c = c.substring(0, splitStart) + oldCode + '\n\n      {/* 7.5 CLINICAL APPLICATION' + c.substring(endMerged + 42);
        console.log('Fixed block');
    }
}
fs.writeFileSync('src/pages/Cohorts.tsx', c);
