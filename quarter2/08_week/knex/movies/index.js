'use strict';

const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

knex('movies')
  .del()
  .where('title', 'Deadpool')
  .then((result) => {
    console.log(result);
    knex.destroy();
  })

// Exercise 5
// knex('movies')
//   .select('title', 'score', 'awards.kind', 'awards.name')
//   .from('movies')
//   .innerJoin('awards', 'awards.movie_id', 'movies.id')
//   .orderBy('title')
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })

// Exercise 4
// knex('movies')
//   .select('id', 'title', 'genre', 'score')
//   .where('rating', 'PG')
//   .whereBetween('score', [7.5, 8.5])
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })

// Exercise 3
// knex('movies')
//   .select('id', 'title', 'released_at')
//   .orderBy('released_at', 'ASC')
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })

// Exercise 2
// knex('movies')
//   .select('id', 'title', 'duration')
//   .where('title', 'X-Men: Apocalypse')
//   .orWhere('title', 'The Princess Bride')
//   .then((result) => {
//     console.log(result);
//     knex.destroy();
//   })

// Exercise 1
  // knex('movies')
  //   .select('id', 'title', 'score')
  //   .orderBy('score', 'ASC')
  //   .limit(1)
  //   .then((result) => {
  //     console.log(result);
  //     knex.destroy();
  //   })

  //SARALYN'S SUPER HELPFUL ANSWER
  // knex('movies')
  //   .select('id', 'title', 'score')
  //   .where('score', knex('movies').min('score'))
  //   // .orderBy('score', 'ASC')
  //   // .limit(1)
  //   .then((result) => {
  //     console.log(result);
  //     knex.destroy();
  //   })
    .catch((err) => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
