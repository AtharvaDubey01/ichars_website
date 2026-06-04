import https from 'node:https';

https.get('https://instituteofclinicalhypnosis.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const allImgs = data.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi) || [];
    allImgs.forEach(img => {
      if(img.toLowerCase().includes('logo') || img.toLowerCase().includes('ichars')) {
        console.log("Found logo in img src:", img);
      }
    });
  });
});
