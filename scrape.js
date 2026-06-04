import https from 'https';

https.get('https://instituteofclinicalhypnosis.com/about-us/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data));
});
