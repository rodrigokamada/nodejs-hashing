const { createHash } = require('crypto');

const crypt = (data) => {
  const hash = createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

const data = 'Some data plain';

const dataCrypt = crypt(data);

console.log(`Data=[${data}]`);
console.log(`Data crypted=[${dataCrypt}]`);
