CREATE DATABASE trucks_db;
#DROP DATABASE trucks_db;
#DROP TABLE trucks;
USE trucks_db;

CREATE TABLE trucks
(
	id int NOT NULL	AUTO_INCREMENT,
	name varchar (255) NOT NULL,
	location varchar (255) not null,
    type_food varchar (255) not null,
	approved BOOLEAN DEFAULT false,
	PRIMARY KEY	(id)
);

CREATE TABLE menu
(
	id int NOT NULL	AUTO_INCREMENT,
	name varchar (255) NOT NULL,
    dish_name varchar (255) not null,
	dish_price varchar (255) not null,
	PRIMARY KEY	(id)
);


 # select * from trucks;