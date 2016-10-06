'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('playlists', (table) => {
    table.increments();
    table.integer('track_id')
      .notNullable()
      .references('id')
      .inTable('tracks')
      .onDelete('CASCADE')
      .index();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('playlists');
};
