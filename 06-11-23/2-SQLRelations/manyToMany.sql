CREATE DATABASE esercitazione;

USE esercitazione;

CREATE TABLE posts(
  id BIGINT AUTO_INCREMENT,
  owner_id BIGINT,
  title VARCHAR(255),
  description VARCHAR(255),

  CONSTRAINT pk_id
    PRIMARY KEY (id)
);


INSERT INTO posts(owner_id, title, description) 
VALUES
  (1, 'titolo intelligente', 'descrizione intelligente'),
  (2, 'titolo stupido', 'descrizione stupido'),
  (3, 'titolo divertente', 'descrizione divertente'),
  (1, 'titolo ancora più stupido', 'descrizione ancora più stupido');


CREATE TABLE tags(
  id BIGINT AUTO_INCREMENT,
  name VARCHAR(255),

  CONSTRAINT pk_id
    PRIMARY KEY (id)
);

INSERT INTO tags(name) 
VALUES 
  ('divertente'),
  ('intelligente'),
  ('stupido'),
  ('post');


CREATE TABLE post_tag(
    post_id BIGINT,
    tag_id BIGINT,

    CONSTRAINT fk_post_id
      FOREIGN KEY (post_id) REFERENCES posts (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
    CONSTRAINT fk_tag_id
      FOREIGN KEY (tag_id) REFERENCES tags (id)
      ON UPDATE CASCADE
      ON DELETE CASCADE,
    CONSTRAINT uk_post_id_tag_id
      UNIQUE(post_id, tag_id)
);

INSERT INTO post_tag(post_id, tag_id) 
VALUES
  (1, 2), (2, 3), (2, 4), (3, 1), (4, 3), (4, 1), (4, 4);

DELETE FROM tags WHERE id = 2;

DELETE FROM tags WHERE id = 1; 

DELETE FROM posts WHERE id = 4;