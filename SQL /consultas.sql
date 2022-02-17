SELECT * FROM actor;

SELECT actor_id, first_name,last_name FROM actor;

SELECT * FROM actor WHERE first_name='Penelope';

SELECT * FROM actor WHERE first_name != 'Penelope';

SELECT * FROM film WHERE film_id >50;
SELECT * FROM film WHERE film_id <=50;

SELECT * FROM customer WHERE customer_id % 2 =0;
SELECT * FROM film WHERE rental_rate=2.99 AND rating ='PG-13';

SELECT * FROM actor WHERE first_name LIKE '%e';
SELECT * FROM actor WHERE first_name LIKE 'an%';

SELECT * FROM actor WHERE first_name LIKE '%n%';

SELECT * FROM actor WHERE first_name LIKE 'b%' OR last_name LIKE 'b%';
SELECT * FROM actor WHERE first_name LIKE 'b%' AND last_name LIKE 'b%';
SELECT * FROM actor WHERE first_name LIKE 'b%' AND last_name LIKE 'b%';
SELECT * FROM actor WHERE first_name LIKE '%k_r%';
