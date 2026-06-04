import fs from "fs";

let content = fs.readFileSync("src/pages/SpecializationHub.tsx", "utf8");

// Remove state
content = content.replace("const [isUpdatedSection4, setIsUpdatedSection4] = useState(false);\n", "");

const toggleBlock = `<div className="flex items-center justify-between mb-2">
                    <span className="text-brand-secondary-text font-medium">Sec 4 Redesign:</span>
                    <button 
                        onClick={() => setIsUpdatedSection4(!isUpdatedSection4)}
                        className={\`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none \${isUpdatedSection4 ? "bg-brand-soft-teal" : "bg-brand-soft-neutral"}\`}
                    >
                        <span className={\`inline-block h-3 w-3 transform rounded-full bg-white transition-transform \${isUpdatedSection4 ? "translate-x-5" : "translate-x-1"}\`} />
                    </button>
                </div>`;

content = content.replace(toggleBlock, "");

const blockStart = '{!isUpdatedSection4 ? (';
const midStart = ') : (';

let sec4StartIdx = content.indexOf(blockStart);
if (sec4StartIdx !== -1) {
    let midIdx = content.indexOf(midStart, sec4StartIdx);
    
    // We want to KEEP the code in the `) : (` part (the new updated design)
    // and REMOVE the old one inside the first branch.
    
    // Find the end parentheses
    // Let's just find the `)}` that ends it.
    let searchRegion = content.substring(midIdx + 5);
    // Find the `)}` that ends the block before Section 5
    let endIdx = searchRegion.lastIndexOf(")}", searchRegion.indexOf("{/* 5. CURRENT PATHWAYS */}"));
    
    // Wait, lastIndexOf searches backwards FROM the specified index.
    // So:
    let cutoff = searchRegion.indexOf("{/* 5. CURRENT PATHWAYS */}");
    let endParIdx = searchRegion.lastIndexOf(")}", cutoff);
    
    if (endParIdx !== -1) {
        let newSec4Content = searchRegion.substring(0, endParIdx);
        let beforeContent = content.substring(0, sec4StartIdx);
        let afterContent = searchRegion.substring(endParIdx + 2);
        content = beforeContent + newSec4Content + afterContent;
        console.log("Section 4 cleaned up perfectly.");
    } else {
        console.log("Could not find end of section 4 branch correctly");
    }
}
fs.writeFileSync("src/pages/SpecializationHub.tsx", content);
