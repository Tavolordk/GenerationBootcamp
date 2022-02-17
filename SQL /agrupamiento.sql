/*
Consultas de agrupamiento
*/
SELECT * FROM inventory GROUP BY store_id;
SELECT * FROM rental GROUP BY customer_id;
SELECT country_id,city,COUNT(city_id) AS 'total_de_ciudades' FROM city GROUP BY country_id HAVING COUNT(city_id) >2 ;
SELECT country_id, COUNT(city_id) AS 'total_de_ciudades' FROM city GROUP BY country_id ORDER BY total_de_ciudades DESC LIMIT 1;

SELECT film_id,title,length FROM film GROUP BY film_id HAVING length=185;
SELECT film_id,title,length FROM film ORDER BY length DESC LIMIT 1;
SELECT * FROM film WHERE length=185;

SELECT MIN(length) FROM film;
SELECT MAX(length) FROM film;
SELECT SUM(replacement_cost) FROM film;

SELECT * FROM film WHERE length = (SELECT MAX(length) FROM film);
