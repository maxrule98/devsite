CREATE DATABASE mrule;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_fName VARCHAR(255),
    user_lName VARCHAR(255)
);