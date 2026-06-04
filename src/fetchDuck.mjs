import https from 'node:https';

const options = {
  hostname: 'api.duckduckgo.com',
  port: 443,
  path: '/?q=ichars+logo&format=json',
  method: 'GET'
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (d) => { data += d; });
  res.on('end', () => {
    console.log(data);
  });
});
req.end();
