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




CREATE TABLE posts(
  id BIGINT AUTO_INCREMENT,
  owner_id BIGINT,
  title VARCHAR(255),
  description VARCHAR(255),

  CONSTRAINT pk_id
    PRIMARY KEY (id),
  CONSTRAINT fk_id
    FOREIGN KEY (owner_id) REFERENCES users (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE
);


INSERT INTO posts(owner_id, title, description) 
VALUES
  (1, 'titolo intelligente', 'descrizione intelligente'),
  (2, 'titolo stupido', 'descrizione stupido'),
  (3, 'titolo divertente', 'descrizione divertente'),
  (1, 'titolo ancora più stupido', 'descrizione ancora più stupido');

DELETE FROM users WHERE firstname = 'eric';