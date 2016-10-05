'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');

const router = express.Router();

router.post('/users', (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !email.trim()) {
    return next(boom.create(400, 'Email must not be blank'));
  }

  if (!password || password.length < 8) {
    return next(boom.create(400, 'Password must be at least 8 characters long'));
  }

  bcrypt.hash(password, 12)
    .then((hashedPassword) => {
      console.log(email, hashedPassword);

      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
