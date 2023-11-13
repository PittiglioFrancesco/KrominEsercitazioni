CREATE DATABASE esercitazione;

USE esercitazione;

CREATE TABLE users(
  id BIGINT AUTO_INCREMENT,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  birthdate DATE,

  CONSTRAINT pk_id
    PRIMARY KEY (id),
  CONSTRAINT uk_email
    UNIQUE (email)
);

INSERT INTO users (firstname, lastname, email, birthdate) 
VALUES 
  ('eric', 'cartman', 'eric.cartman@gmail.com', '2000-12-25'), 
  ('randy', 'marsh', 'randy.marsh@gmail.com', '2000-04-01'), 
  ('kenny', 'mccormick', 'kenny.mccormick@gmail.com', '2000-01-01');




CREATE TABLE profiles (
  id BIGINT AUTO_INCREMENT,
  nickname VARCHAR(255) UNIQUE,
  user_id BIGINT,

  CONSTRAINT uk_user_id 
    UNIQUE (user_id),
  CONSTRAINT pk_id 
    PRIMARY KEY (id),
  CONSTRAINT fk_id 
    FOREIGN KEY (user_id) REFERENCES users (id) 
      ON UPDATE CASCADE
      ON DELETE CASCADE
);


INSERT INTO profiles (nickname, user_id) 
VALUES 
  ('ericProfile', 1), 
  ('randyProfile', 2), 
  ('kennyProfile', 3); 

DELETE FROM users WHERE firstname = 'eric';