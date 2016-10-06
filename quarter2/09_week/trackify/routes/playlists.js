'use strict';

const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.token = decoded;
    // You can now access the payload via req.token.userId
    next();
  });
};

router.get('/playlists', authorize, (req, res, next) => {
  const { userId } = req.token;

  knex('playlists')
    .innerJoin('tracks', 'tracks.id', 'playlists.track_id')
    .where('playlists.user_id', userId)
    .orderBy('tracks.title', 'ASC')
    .then((rows) => {
      const playlists = camelizeKeys(rows);

      res.send(playlists);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
