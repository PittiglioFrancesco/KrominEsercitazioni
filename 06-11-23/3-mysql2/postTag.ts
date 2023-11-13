import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";

const connection = mysql.createConnection({
  namedPlaceholders: true,
  host: "localhost",
  port: 3306,
  user: "ciccio",
  password: "1234",
  database: "esercitazione",
});

interface PostTagEntity extends RowDataPacket {
  postId: number;
  tagId: number;
}

// Users

// Create

const postId = 1
const tagId = 2;

const createPostTagStatement = `INSERT INTO post_tag(post_id, tag_id) VALUES(?,?)`;
const createPostTagValue = [postId, tagId];

connection.execute<ResultSetHeader>(
  createPostTagStatement,
  createPostTagValue,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Read
const readId = 1;

const readPostTagStatement = `SELECT * FROM post_tag WHERE post_id = ?`;
const readPostTagValue = readId;

connection.execute<PostTagEntity[]>(
  readPostTagStatement,
  readPostTagValue,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// ReadAll

const readAllUsersStatement = `SELECT * FROM post_tag`;

connection.execute<PostTagEntity[]>(readAllUsersStatement, function (err, result) {
  if (err) {
    throw err;
  }

  console.log(result);
});

// Update
const updateId = 1;

const updateTag = 2;

const updatePostTagStatement = `UPDATE post_tag SET tag_id = ? WHERE post_id = ?`;
const updatePostTagValues = [updateTag, updateId];

connection.execute<ResultSetHeader>(
  updatePostTagStatement,
  updatePostTagValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Delete
const deletePostTagId = 1;

const deletePostTagStatement = `DELETE FROM tags WHERE post_id = ?`;
const deletePostTagValues = [deletePostTagId];

connection.execute<ResultSetHeader>(
  deletePostTagStatement,
  deletePostTagValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);
