const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

// Remove the state variable
c = c.replace(/  const \[isAuditRefactored, setIsAuditRefactored\] =\n    useState\(false\);\n/g, '');
// just in case it's in one line:
c = c.replace(/  const \[isAuditRefactored, setIsAuditRefactored\] = useState\(false\);\n/g, '');

// Remove the toggle
const toggleStart = c.indexOf('{/* Split Test Toggles */}');
const toggleEnd = c.indexOf('{!isAuditRefactored ? (');
if (toggleStart > -1 && toggleEnd > toggleStart) {
  c = c.substring(0, toggleStart) + c.substring(toggleEnd);
}

// Function to keep the true branch of a split test
function keepTrueBranch(str, conditionStr) {
  let res = str;
  let idx = res.indexOf(conditionStr);
  while (idx > -1) {
    const splitStart = idx;
    const mergedStartStr = '\n        ) : (\n          <>\n';
    let mergedStart = res.indexOf(mergedStartStr, splitStart);
    let trueStartPadding = '          <>\n';
    
    // If not found exactly, try another padding
    if (mergedStart === -1) {
        const mergedStartStr2 = '\n        ) : (\n        <>\n';
        mergedStart = res.indexOf(mergedStartStr2, splitStart);
        if (mergedStart > -1) trueStartPadding = '        <>\n';
    }

    if (mergedStart === -1) {
       console.log("Could not find mergedStart for", conditionStr);
       break;
    }

    const mergedEndStr = '\n          </>\n        )}\n';
    let mEnd = res.indexOf(mergedEndStr, mergedStart);
    let trueEndPadding = '\n          </>\n        )}\n';
    if (mEnd === -1) {
       const mergedEndStr2 = '\n        </>\n      )}\n';
       mEnd = res.indexOf(mergedEndStr2, mergedStart);
       if (mEnd > -1) trueEndPadding = '\n        </>\n      )}\n';
    }

    if (mEnd === -1) {
       console.log("Could not find mEnd for", conditionStr);
       break;
    }

    const trueBranch = res.substring(mergedStart + mergedStartStr.length, mEnd);
    res = res.substring(0, splitStart) + trueBranch + res.substring(mEnd + trueEndPadding.length);
    idx = res.indexOf(conditionStr);
  }
  return res;
}

c = keepTrueBranch(c, '{!isAuditRefactored ? (\n        <>\n');
c = keepTrueBranch(c, '{!isAuditRefactored ? (\n          <>\n');

fs.writeFileSync('src/pages/Cohorts.tsx', c);
