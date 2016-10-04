'use strict';

const fs = require('fs');

const data = fs.readFileSync('/etc/paths', 'utf8');

console.log(data);
console.log(1 + 2);
