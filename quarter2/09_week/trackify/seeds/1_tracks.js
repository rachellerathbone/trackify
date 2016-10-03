'use strict';

exports.seed = function(knex) {
  return knex('tracks').del()
    .then(() => {
      return knex('tracks').insert([{
        id: 1,
        title: 'Here Comes the Sun',
        artist: 'The Beatles',
        likes: 28808736,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 2,
        title: 'Hey Jude',
        artist: 'The Beatles',
        likes: 20355655,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 3,
        title: 'Send My Love',
        artist: 'Adele',
        likes: 39658471,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }, {
        id: 4,
        title: 'Hello',
        artist: 'Adele',
        likes: 538300301,
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('tracks_id_seq', (SELECT MAX(id) FROM tracks));"
      );
    });
};
