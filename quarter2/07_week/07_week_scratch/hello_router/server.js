'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const greet = require('./greet');

app.use(greet);

app.listen(port, () => {
  console.log('Listening on port', port);
});
