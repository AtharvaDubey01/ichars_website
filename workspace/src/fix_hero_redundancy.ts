import fs from "fs";

let content = fs.readFileSync("src/pages/Cohorts.tsx", "utf8");

const targetStart = `{/* Experiential Practitioner Development Visual */}`;
const startIdx = content.indexOf(targetStart);

if (startIdx !== -1) {
    const parentDivStart = content.lastIndexOf(`<div className="max-w-5xl mx-auto`, startIdx);
    const parentDivEnd = content.indexOf(`</FadeIn>`, startIdx) + `</FadeIn>`.length;

    const block = content.substring(parentDivStart, parentDivEnd);

    content = content.replace(
        block,
        `{!isMergedEcosystem && (\n${block}\n)}`
    );

    fs.writeFileSync("src/pages/Cohorts.tsx", content);
} else {
    console.log("Could not find the target visual in hero.");
}
