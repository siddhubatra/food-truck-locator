CREATE DATABASE trucks_db;
USE trucks_db;

CREATE TABLE trucks
(
	id int NOT NULL
	AUTO_INCREMENT,
	name varchar
	(255) NOT NULL,
	location varchar
	(255) not null,
	menu array not null,
	approved BOOLEAN DEFAULT false,
	PRIMARY KEY
	(id)
);
