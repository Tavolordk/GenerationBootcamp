CREATE SCHEMA Generation;
use Generation;

-- Crear Tabla
CREATE TABLE IF NOT EXISTS cohorte(
id int not null auto_increment primary key,
nombre varchar(255) not null,
edad int not null
);

-- modificar tabla
alter table cohorte add column apellido varchar(255) not null;

-- insertar datos tabla
INSERT INTO cohorte (nombre,apellido,edad) VALUES ('Octavio','Olea',25);
INSERT INTO cohorte (nombre,apellido,edad) VALUES ('Ash','Ketchup',25);
INSERT INTO cohorte (nombre,apellido,edad) VALUES ('Patricio','Estrella',4);

SELECT * FROM cohorte;

SELECT * FROM world.city;
SELECT nombre FROM cohorte;
SELECT CountryCode, Population FROM world.city;
SELECT Name AS 'Nombre de los países' FROM world.country; -- agregar un alias al nombre de la columna;

-- UPDATE actualizar valores
UPDATE cohorte SET nombre = 'Juan';
UPDATE cohorte SET nombre = 'Juan' WHERE id=2;
UPDATE cohorte SET nombre = 'Juan', edad=30 WHERE id=4;

-- DELETE DB
DELETE FROM cohorte where id=1;  