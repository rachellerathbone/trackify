'use strict';

exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.specificType('hashed_password', 'char(60)')
      .notNullable()
      .defaultTo('$2a$12$Z7JfPVG4qJIIBZCFjZ.VROwEJRm9Gd3c3S1VqhfJDHmZAEdxY5uRC');
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', (table) => {
    table.dropColumn('hashed_password');
  });
};
