const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('src/pages');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/amber-500\/10/g, 'brand-accent-orange/10');
    content = content.replace(/amber-500/g, 'brand-accent-orange');
    content = content.replace(/amber-600/g, 'brand-accent-orange');
    fs.writeFileSync(file, content);
});
console.log('Replaced amber globally in pages.');
