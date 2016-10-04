DELETE FROM rentals;

INSERT INTO cars (id, make, model, year) VALUES (1, 'Ford', 'Explorer', 1994);
INSERT INTO cars (id, make, model, year) VALUES (2, 'Chevrolet', 'Lumina', 1990);
INSERT INTO cars (id, make, model, year) VALUES (3, 'Mazda', '3', 2016);
INSERT INTO cars (id, make, model, year) VALUES (4, 'Ford', 'Focus', 2015);

INSERT INTO bikes (id, make, color) VALUES (1, 'Surly', 'green');
INSERT INTO bikes (id, make, color) VALUES (2, 'Specialized', 'blue');
INSERT INTO bikes (id, make, color) VALUES (3, 'Schwin', 'yellow');

INSERT INTO rentals (car_id, bike_id, customer_name) VALUES (1, NULL, 'Judge Judy');
INSERT INTO rentals (car_id, bike_id, customer_name) VALUES (NULL, 2, 'Spongebob Squarepants');
INSERT INTO rentals (car_id, bike_id, customer_name) VALUES (4, 3, 'Henry Ford');

SELECT customer_name, cars.make AS cars_make, model, year, bikes.make AS bikes_make, color
FROM rentals
LEFT JOIN cars ON cars.id = rentals.car_id
LEFT JOIN bikes ON bikes.id = rentals.bike_id;
