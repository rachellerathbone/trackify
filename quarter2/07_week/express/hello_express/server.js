'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use((req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
