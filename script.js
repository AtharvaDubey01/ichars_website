const fetch = require('node-fetch');
const fs = require('fs');
fetch('https://instituteofclinicalhypnosis.com/s-practitioners-course/level-1/')
  .then(res => res.text())
  .then(text => fs.writeFileSync('page.html', text))
  .catch(console.error);
