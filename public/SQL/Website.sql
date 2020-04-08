CREATE DATABASE Website;
USE Website;

CREATE TABLE User(
	Username VARCHAR(25),
	FirstName VARCHAR(25) NOT NULL,
	LastName VARCHAR(25) NOT NULL,
	Gender ENUM('M', 'F') NOT NULL,
	EmailAddress VARCHAR(40) NOT NULL,
	Password VARCHAR(20) NOT NULL,
	PRIMARY KEY (Username)
);
