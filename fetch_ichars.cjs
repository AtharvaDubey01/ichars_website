const https = require('https');
const fs = require('fs');
https.get('https://instituteofclinicalhypnosis.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('ichars.html', data);
    console.log('Saved to ichars.html');
  });
}).on('error', err => console.log(err));
