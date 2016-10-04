'use strict';

const fs = require('fs');

fs.readFile('/etc/paths', 'utf8', (err, data) => {
  if (err) throw err;

  console.log(data);
});

// to get this line to print before the above log, move it inside the
// callback function, above the other log.
console.log(1 + 2);
