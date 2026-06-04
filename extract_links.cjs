const fs = require('fs');

const extractLinks = (html, sectionMarkerStart, sectionMarkerEnd) => {
    const startIndex = html.indexOf(sectionMarkerStart);
    if (startIndex === -1) return [];
    
    // Find the nearest closing tag of the section containing the marker
    // Here we'll just extract all <a href...> within the substring roughly representing header/footer
    // Since WordPress uses <header> and <footer> tags or classes like 'elementor-location-header'
    
    // Let's use a simpler heuristic for WordPress/Elementor:
    const headerStart = html.indexOf('<header');
    const headerEnd = html.indexOf('</header>');
    
    const footerStart = html.indexOf('<footer');
    const footerEnd = html.indexOf('</footer>');
    
    const extractA = (block) => {
        if (!block) return [];
        const regex = /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
        let links = [];
        let match;
        while ((match = regex.exec(block)) !== null) {
            let text = match[2].replace(/<\/?[^>]+(>|$)/g, "").trim().replace(/\s+/g, ' ');
            if (text) {
                links.push({ text: text, href: match[1] });
            }
        }
        return links;
    };
    
    const headerLinks = extractA(headerStart !== -1 ? html.substring(headerStart, headerEnd) : html.substring(0, 10000));
    const footerLinks = extractA(footerStart !== -1 ? html.substring(footerStart, footerEnd) : html.substring(Math.max(0, html.length - 20000)));

    return { headerLinks, footerLinks };
};

const html = fs.readFileSync('ichars.html', 'utf8');
const result = extractLinks(html);
console.log(JSON.stringify(result, null, 2));
