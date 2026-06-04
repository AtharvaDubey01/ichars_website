import https from 'node:https';

const options = {
  hostname: 'instituteofclinicalhypnosis.com',
  port: 443,
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (d) => {
    data += d;
  });
  res.on('end', () => {
    const urls = data.match(/https:\/\/[^"'\s]+\.(png|jpg|jpeg|svg|webp)/gi) || [];
    urls.forEach(u => {
      if(u.toLowerCase().includes('logo') || u.toLowerCase().includes('ichars')) {
        console.log(u);
      }
    });
  });
});

req.end();
