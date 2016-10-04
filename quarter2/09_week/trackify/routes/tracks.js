'use strict';

const boom = require('boom');
const express = require('express');
const knex = require('../knex');
const { camelizeKeys, decamelizeKeys } = require('humps');

const router = express.Router();

router.get('/tracks', (_req, res, next) => {
  knex('tracks')
    .orderBy('title')
    .then((rows) => {
      const tracks = camelizeKeys(rows);

      res.send(tracks);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/tracks/:id', (req, res, next) => {
    knex('tracks')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      const track = camelizeKeys(row);

      res.send(track);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/tracks', (req, res, next) => {
  const { title, artist, likes } = req.body;

  if (!title || !title.trim()) {
    return next(boom.create(400, 'Title must not be blank'));
  }

  if (!artist || !artist.trim()) {
    return next(boom.create(400, 'Artist must not be blank'));
  }

  if (!Number.isInteger(likes)) {
    return next(boom.create(400, 'Likes must be an integer'));
  }

  const insertTrack = { title, artist, likes };

  knex('tracks')
    .insert(decamelizeKeys(insertTrack), '*')
    .then((rows) => {
      const track = camelizeKeys(rows[0]);

      res.send(track);
    })
    .catch((err) => {
      next(err);
    });
});

router.patch('/tracks/:id', (req, res, next) => {
  knex('tracks')
    .where('id', req.params.id)
    .first()
    .then((track) => {
      if (!track) {
        throw boom.create(404, 'Not Found');
      }

      const { title, artist } = req.body;
      const updateTrack = {};

      if (title) {
        updateTrack.title = title;
      }

      if (artist) {
        updateTrack.artist = artist;
      }

      return knex('tracks')
        .update(decamelizeKeys(updateTrack), '*')
        .where('id', req.params.id);
    })
    .then((rows) => {
      const track = camelizeKeys(rows[0]);

      res.send(track);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
