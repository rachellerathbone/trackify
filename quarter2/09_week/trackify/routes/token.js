'use strict';

const boom = require('boom');
const bcrypt = require('bcrypt-as-promised');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.post('/token', (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !email.trim()) {
    return next(boom.create(400, 'Email must not be blank'));
  }

  if (!password || password.length < 8) {
    return next(boom.create(400, 'Password must not be blank'));
  }

  let user;

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(400, 'Bad email or password');
      }

      user = camelizeKeys(row);

      return bcrypt.compare(password, user.hashedPassword);
    })
    .then(() => {
      delete user.hashedPassword;

      const expiry = new Date(Date.now() + 1000 * 60 * 60 * 3);
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3h'
      });

      res.cookie('token', token, {
        httpOnly: true,
        expires: expiry,
        secure: router.get('env') === 'production'
      });

      res.send(user);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      throw boom.create(400, 'Bad email or password');
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/token', (req, res, next) => {
  res.clearCookie('token');
  res.sendStatus(200);
});

module.exports = router;
