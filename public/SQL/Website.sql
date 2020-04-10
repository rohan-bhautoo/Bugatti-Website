DROP DATABASE Website;
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

CREATE TABLE Model(
    ModelID VARCHAR(4),
    Horsepower INT(4) NOT NULL,
    Top_speed VARCHAR(6) NOT NULL,
    Torque INT(4) NOT NULL,
    zeroTo100 VARCHAR(5) NOT NULL,
    zeroTo60 VARCHAR(5) NOT NULL,
    Engine VARCHAR(4) NOT NULL,
    Displacement VARCHAR(5) NOT NULL,
    Price INT(10) NOT NULL,
    Release_Date INT(4) NOT NULL,
    PRIMARY KEY (ModelID)
);

CREATE TABLE Car(
    CarID VARCHAR(4),
    CarName VARCHAR(30),
    ModelID VARCHAR(4),
    PRIMARY KEY (CarID),
    FOREIGN KEY (ModelID) REFERENCES Model(ModelID)
);

INSERT INTO Model
VALUES ('M001', 1600, '236mph', 1180, '6.1s', '2.4s', 'W16', '8.0L', '9000000', 2020),
       ('M002', 1479, '236mph', 1180, '6.4s', '2.5s', 'W16', '8.0L', '5800000', 2019),
       ('M003', 1500, '260mph', 1180, '3.5s', '2.4s', 'W16', '8.0L', '19000000', 2019);

INSERT INTO Car
VALUES ('C001', 'Centodieci', 'M001'),
       ('C002', 'Divo', 'M002'),
       ('C003', 'LaVoitureNoire', 'M003');
