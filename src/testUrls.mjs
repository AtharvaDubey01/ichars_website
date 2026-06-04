import https from 'node:https';

const urls = [
  'https://instituteofclinicalhypnosis.com/wp-content/uploads/2022/10/ichars-logo.png',
  'https://instituteofclinicalhypnosis.com/wp-content/uploads/logo.png',
  'https://ichars.com/wp-content/uploads/ICHARS-Logo.png',
  'https://ichars.com/wp-content/uploads/2021/04/ICHARS-Logo-1.png',
  'https://ichars.com/wp-content/uploads/logo.png',
  'https://instituteofclinicalhypnosis.com/wp-content/uploads/2023/01/logo.png',
  'https://instituteofclinicalhypnosis.com/wp-content/themes/ichars/images/logo.png'
];

urls.forEach(u => {
  https.get(u, (res) => {
    console.log(u, res.statusCode);
  });
});
