'use strict';

const fs = require('fs');

// needs to start with / to indicate that your coming from the root directory
// the program only needs to require one module - the fs module - to import the
// system functionality. Because it is executed in its own scope, this functionality
// lives inside the local fs variable and doesn't pollute the global scope.
fs.readFile('/etc/paths', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  console.log(data);
})
