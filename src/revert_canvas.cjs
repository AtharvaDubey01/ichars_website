const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

c = c.replace(/  const \[isInteractiveCanvasRefined, setIsInteractiveCanvasRefined\] =\n    useState\(false\);\n/, '');

const toggleStart = c.indexOf('{/* Split Test Toggles */}');
const toggleEnd = c.indexOf('{/* 1. HERO SECTION */}');
if (toggleStart > -1 && toggleEnd > toggleStart) {
  c = c.substring(0, toggleStart) + c.substring(toggleEnd);
}

const splitStartStr = '{!isInteractiveCanvasRefined ? (\n          <>\n';
const splitStart = c.indexOf(splitStartStr);
const mergedStartStr = '\n          </>\n        ) : (\n          <>\n';
const mergedStart = c.indexOf(mergedStartStr);
const endStr = '\n          </>\n        )}\n\n        <div className="max-w-3xl mx-auto text-center">';
const mergedEnd = c.indexOf(endStr);

if (splitStart > -1 && mergedStart > -1 && mergedEnd > -1) {
    const originalBranch = c.substring(splitStart + splitStartStr.length, mergedStart);
    
    // 85 is roughly length of the endStr, but let's be exact
    c = c.substring(0, splitStart) + originalBranch + '\n\n        <div className="max-w-3xl mx-auto text-center">' + c.substring(mergedEnd + endStr.length);
    console.log("Replaced successfully");
} else {
    // If exact strings not found, try alternative
    console.log("Could not find blocks exactly. Let's trace positions.");
    console.log("splitStart", splitStart);
    console.log("mergedStart", mergedStart);
    console.log("mergedEnd", mergedEnd);
}

fs.writeFileSync('src/pages/Cohorts.tsx', c);
