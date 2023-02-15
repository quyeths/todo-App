CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    user_email VARCHAR(255),
    title VARCHAR(255),
    progresss INT,
    date VARCHAR(300)
);

CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);

INSERT INTO
    todos(id, user_email, title, progresss, date)
VALUES
    (
        '0',
        'haodecoy1@gmail.com',
        'First todo',
        10,
        'Wed Feb 15 00:47:41.127947 2023 +07'
    );