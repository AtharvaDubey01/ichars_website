const fs = require('fs');
let c = fs.readFileSync('src/pages/Cohorts.tsx', 'utf8');

const s1 = '  const [isOnlineObjectionOptimized, setIsOnlineObjectionOptimized] = useState(false);';
c = c.replace(s1, '');

const toggleStart = c.indexOf('{/* Split Test Toggles */}');
const toggleEnd = c.indexOf('{/* 1. HERO SECTION */}');
if (toggleStart > -1 && toggleEnd > toggleStart) {
  c = c.substring(0, toggleStart) + c.substring(toggleEnd);
}

const objStart = c.indexOf('{!isOnlineObjectionOptimized ? (');
if (objStart > -1) {
  const elsePart = c.indexOf('      ) : (', objStart);
  const endPart = c.indexOf('      )}', elsePart);
  
  if (elsePart > -1 && endPart > -1) {
      const optimizedBranch = c.substring(elsePart + 12, endPart);
      c = c.substring(0, objStart) + optimizedBranch + c.substring(endPart + 9);
      console.log("Optimized part preserved.");
  } else {
      console.log("Could not find branches");
  }
} else {
  console.log("Could not find objStart");
}

fs.writeFileSync('src/pages/Cohorts.tsx', c);
