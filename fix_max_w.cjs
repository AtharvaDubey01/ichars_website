const fs = require('fs');
const files = ['src/pages/Level1.tsx', 'src/pages/Level2.tsx', 'src/pages/Level3.tsx'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"/g, 'className="relative z-10 grid lg:grid-cols-2 gap-12 items-center"');
    content = content.replace(/className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"/g, 'className="grid lg:grid-cols-2 gap-16 items-center"');
    content = content.replace(/ className="max-w-7xl mx-auto"/g, ' className=""');
    content = content.replace(/<div className="max-w-7xl mx-auto">/g, '<div>');
    fs.writeFileSync(file, content);
});
console.log('Fixed max-w');
