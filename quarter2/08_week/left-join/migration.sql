DROP TABLE IF EXISTS rentals;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS bikes;

CREATE TABLE cars (
  id serial PRIMARY KEY,
  make varchar(50) NOT NULL,
  model varchar(50) NOT NULL,
  year integer NOT NULL
);

CREATE TABLE bikes (
  id serial PRIMARY KEY,
  make varchar(50) NOT NULL,
  color varchar(30) NOT NULL
);

CREATE TABLE rentals (
  id serial PRIMARY KEY,
  car_id integer REFERENCES cars ON DELETE CASCADE,
  bike_id integer REFERENCES bikes ON DELETE CASCADE,
  customer_name varchar(255) NOT NULL
);
