SELECT * FROM film_category WHERE category_id = 7;

SELECT * FROM film WHERE film_id IN(1,2,3,6,4);

SELECT * FROM film 	WHERE film_id IN(SELECT film_id FROM film_category WHERE category_id = 7);
SELECT * FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id = 1);

SELECT MAX(length) FROM film;
SELECT * FROM film WHERE length = (SELECT MAX(length) FROM film);

SELECT film_id FROM film_actor WHERE actor_id=4;
SELECT * FROM film WHERE film_id IN(SELECT film_id FROM film_actor WHERE actor_id=4);