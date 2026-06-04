const fs = require('fs');

const file = fs.readFileSync('src/pages/FAQ.tsx', 'utf8');

// The file has lucide-react imports:
const lucide = ['ArrowRight', 'ChevronDown', 'MessageSquare', 'Compass', 'HelpCircle', 'Layers', 'Target', 'BookOpen', 'Quote', 'CheckCircle2', 'PlayCircle', 'Video'];

const faqGroupsStr = file.substring(file.indexOf('const faqGroups = ['), file.indexOf(';\n\nfunction VisualComponent'));
const fixedFaq = faqGroupsStr.replace(/icon:\s*([A-Za-z0-9_]+),/g, 'icon: "$1",').replace('const faqGroups = ', 'global.faqGroups = ');
eval(fixedFaq);

let desktopTabs = '';
let mobileTabs = '';
let itemsContainer = '';

faqGroups.forEach((group, idx) => {
    desktopTabs += `                            <button onClick={() => setActiveGroup(${idx})} className={cn("w-full text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-3", activeGroup === ${idx} ? "bg-brand-structural-navy text-white shadow-md" : "bg-white text-brand-secondary-text hover:bg-white hover:text-brand-structural-navy border border-brand-soft-neutral/50 hover:border-brand-soft-teal/50")}>\n                                <${group.icon} className={cn("w-4 h-4", activeGroup === ${idx} ? "text-brand-soft-teal" : "text-brand-soft-neutral")} />\n                                <span>${group.title}</span>\n                            </button>\n`;
    
    mobileTabs += `                                <button onClick={() => setActiveGroup(${idx})} className={cn("snap-start whitespace-nowrap px-4 py-2.5 rounded-full text-xs font-semibold transition-all border", activeGroup === ${idx} ? "bg-brand-structural-navy border-brand-structural-navy text-white" : "bg-white border-brand-soft-neutral/50 text-brand-secondary-text")}>\n                                    ${group.title}\n                                </button>\n`;

    let qasHTML = '';
    group.qas.forEach(qa => {
        let content = '';
        if (qa.intro) {
            content += `                        <div className="mb-4 space-y-2">\n`;
            qa.intro.split('\n').forEach(line => {
                if (line.startsWith('•')) {
                    content += `                            <div className="pl-4 text-sm font-medium text-brand-secondary-text list-disc">${line}</div>\n`;
                } else {
                    content += `                            <p className="text-sm font-medium text-brand-secondary-text">${line}</p>\n`;
                }
            });
            content += `                        </div>\n`;
        }
        if (qa.bullets1) {
            content += `                        <div className="space-y-3">\n`;
            qa.bullets1.forEach(b => {
                if (b.includes('→')) {
                    const [left, right] = b.split('→');
                    content += `                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">\n                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />\n                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-sm md:text-base">${left.trim()}</div>\n                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">\n                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />\n                                </div>\n                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-xs md:text-sm shadow-sm inline-block w-max sm:w-auto">\n                                    ${right.trim()}\n                                </div>\n                            </div>\n`;
                } else {
                    content += `                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-sm md:text-base text-brand-structural-navy font-medium">\n                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />\n                                <span className="pt-0.5">${b}</span>\n                            </div>\n`;
                }
            });
            content += `                        </div>\n`;
        }
        if (qa.mid) {
            content += `                        <div className="pt-2">\n                            <div className="mb-2 space-y-2">\n`;
            qa.mid.split('\n').forEach(line => {
                if (line.startsWith('•')) {
                    content += `                                <div className="pl-4 text-sm font-medium text-brand-secondary-text list-disc">${line}</div>\n`;
                } else {
                    content += `                                <p className="text-sm font-medium text-brand-secondary-text">${line}</p>\n`;
                }
            });
            content += `                            </div>\n                        </div>\n`;
        }
        if (qa.bullets2) {
             content += `                        <div className="space-y-3">\n`;
             qa.bullets2.forEach(b => {
                 if (b.includes('→')) {
                     const [left, right] = b.split('→');
                     content += `                            <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3.5 md:p-4 rounded-xl border border-brand-soft-neutral/50 shadow-sm relative overflow-hidden group hover:border-brand-soft-teal/50 transition-colors">\n                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-soft-teal/30 group-hover:bg-brand-soft-teal transition-colors" />\n                                <div className="font-medium text-brand-structural-navy flex-1 pl-2 text-sm md:text-base">${left.trim()}</div>\n                                <div className="hidden sm:flex shrink-0 w-8 h-8 rounded-full bg-brand-warm-white items-center justify-center">\n                                    <ArrowRight className="w-4 h-4 text-brand-soft-teal" />\n                                </div>\n                                <div className="font-bold text-brand-structural-navy bg-brand-soft-teal/10 border border-brand-soft-teal/20 px-3 py-2 rounded-lg text-xs md:text-sm shadow-sm inline-block w-max sm:w-auto">\n                                    ${right.trim()}\n                                </div>\n                            </div>\n`;
                 } else {
                     content += `                            <div className="flex items-start gap-3 bg-white/50 p-3 rounded-lg text-sm md:text-base text-brand-structural-navy font-medium">\n                                <CheckCircle2 className="w-5 h-5 text-brand-soft-teal shrink-0" />\n                                <span className="pt-0.5">${b}</span>\n                            </div>\n`;
                 }
             });
             content += `                        </div>\n`;
         }
        if (qa.end) {
            content += `                        <div className="pt-2">\n                            <div className="space-y-2">\n`;
            qa.end.split('\n').forEach(line => {
                if (line.startsWith('•')) {
                    content += `                                <div className="pl-4 text-sm font-medium text-brand-secondary-text list-disc">${line}</div>\n`;
                } else {
                    content += `                                <p className="text-sm font-medium text-brand-secondary-text">${line}</p>\n`;
                }
            });
            content += `                            </div>\n                        </div>\n`;
        }
        if (qa.visual) {
            content += `                        <VisualComponent type="${qa.visual}" />\n`;
        }

        qasHTML += `<div className="border border-brand-soft-neutral/50 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300">\n            <button onClick={() => setOpenId(openId === "${qa.id}" ? null : "${qa.id}")} aria-expanded={openId === "${qa.id}"} className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft-teal/50 hover:bg-brand-warm-white transition-colors group">\n                <div className="flex items-center gap-4">\n                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors", openId === "${qa.id}" ? "bg-brand-soft-teal text-white" : "bg-brand-soft-teal/10 text-brand-soft-teal group-hover:bg-brand-soft-teal/20")}>\n                        <HelpCircle className="w-4 h-4" />\n                    </div>\n                    <div className="font-semibold text-left text-brand-structural-navy md:text-lg tracking-tight pr-4">\n                        ${qa.q}\n                    </div>\n                </div>\n                <ChevronDown className={cn("w-5 h-5 text-brand-secondary-text shrink-0 transition-transform duration-300", openId === "${qa.id}" && "rotate-180")} />\n            </button>\n            <div className={cn("overflow-hidden transition-all duration-300", openId === "${qa.id}" ? "max-h-[800px]" : "max-h-0")}>\n                <div className="p-6 pt-0 border-t border-brand-soft-neutral/20 bg-brand-warm-white/30">\n                    <div className="space-y-4 pt-4">\n${content}                    </div>\n                </div>\n            </div>\n        </div>\n`;
    });

    itemsContainer += `                            <div className={cn("transition-opacity duration-500", activeGroup === ${idx} ? "opacity-100 block" : "opacity-0 hidden md:block md:opacity-100")}>\n                                <div className="flex items-center gap-3 mb-6 md:mb-8">\n                                     <${group.icon} className="w-5 h-5 md:w-6 md:h-6 text-brand-soft-teal" />\n                                     <Heading level={2} className="text-xl md:text-3xl text-brand-structural-navy">${group.title}</Heading>\n                                </div>\n                                <div className="space-y-4">\n${qasHTML}                                </div>\n                            </div>\n`;
});

const out = file
    .replace(/\{faqGroups\.map\(\(group, idx\) => \([\s\S]*?\)\)\}/, desktopTabs)
    .replace(/\{faqGroups\.map\(\(group, idx\) => \([\s\S]*?\)\)\}/, mobileTabs)
    .replace(/\{faqGroups\.map\(\(group, idx\) => \([\s\S]*?\)\)\}/, itemsContainer)
    .replace(/const faqGroups = \[[\s\S]*?\];\n\n/g, "")
    .replace(/function FAQItem[\s\S]*?\}\n\n/, ""); // We don't need FAQItem anymore

fs.writeFileSync('src/pages/FAQ.tsx', out);
console.log("Refactored FAQ.tsx successfully.");
