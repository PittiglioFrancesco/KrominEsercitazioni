CREATE TABLE users(
  id BIGINT AUTO_INCREMENT,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  email VARCHAR(255) NOT NULL UNIQUE,
  birthdate BIGINT,

  CONSTRAINT pk_id
    PRIMARY KEY (id),
  CONSTRAINT uk_email
    UNIQUE (email)
);

CREATE TABLE posts(
  id BIGINT AUTO_INCREMENT,
  owner_id BIGINT,
  title VARCHAR(255),
  description VARCHAR(255),

  CONSTRAINT pk_id
    PRIMARY KEY (id)
);

CREATE TABLE tags(
  id BIGINT AUTO_INCREMENT,
  name VARCHAR(255),

  CONSTRAINT pk_id
    PRIMARY KEY (id)
);

CREATE TABLE post_tag(
    post_id BIGINT,
    tag_id BIGINT
);