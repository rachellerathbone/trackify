'use strict';

exports.seed = function(knex) {
  return knex('playlists').del()
    .then(() => {
      return knex('playlists').insert([{
        id: 1,
        track_id: 1,
        user_id: 1,
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('playlists_id_seq', (SELECT MAX(id) FROM playlists));"
      );
    });
};
