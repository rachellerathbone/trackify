'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

const token = require('./routes/token');
const tracks = require('./routes/tracks');
const users = require('./routes/users');
const playlists = require('./routes/playlists');

app.use(token);
app.use(tracks);
app.use(users);
app.use(playlists);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
