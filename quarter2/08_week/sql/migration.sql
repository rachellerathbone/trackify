DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS awards;

CREATE TABLE movies (
  id serial,
  title text,
  duration integer NOT NULL,
  rating varchar(10),
  genre text,
  is_3d boolean NOT NULL,
  released_at timestamp with time zone,
  score numeric(3, 1)
);

-- CREATE TABLE awards (
--   id serial,
--   movie_id integer NOT NULL,
--   kind varchar(50),
--   name varchar(50)
-- );

ALTER TABLE awards ADD COLUMN received_award boolean NOT NULL;
