import https from 'node:https';

https.get('https://ichars.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src=["']([^"']+)["'][^>]*logo[^>]*>/gi) || [];
    const logoSources = data.match(/<img[^>]+logo[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
    const altMatches = data.match(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["'][^"']*logo[^"']*["'][^>]*>/gi) || [];
    console.log("Matches:", matches, logoSources, altMatches);
    
    // Also try to find any img tag with logo in URL
    const allImgs = data.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
    allImgs.forEach(img => {
      if(img.toLowerCase().includes('logo')) {
        console.log("Found logo in img src:", img);
      }
    });
  });
});
