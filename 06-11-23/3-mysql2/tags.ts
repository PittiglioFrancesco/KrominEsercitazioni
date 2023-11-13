import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";

const connection = mysql.createConnection({
  namedPlaceholders: true,
  host: "localhost",
  port: 3306,
  user: "ciccio",
  password: "1234",
  database: "esercitazione",
});

interface TagEntity extends RowDataPacket {
  id: number;
  name: string;
}

interface PostTag extends RowDataPacket {
  postId: number;
  tagId: number;
}

// Users

// Create

const tagName = "nome tag";

const createTagStatement = `INSERT INTO tags(name) VALUES(?)`;
const createTagValue = [tagName];

connection.execute<ResultSetHeader>(
  createTagStatement,
  createTagValue,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Read
const readId = "1";

const readTagStatement = `SELECT * FROM tags WHERE id = ?`;
const readTagValue = readId;

connection.execute<TagEntity[]>(
  readTagStatement,
  readTagValue,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// ReadAll

const readAllTagsStatement = `SELECT * FROM tags`;

connection.execute<TagEntity[]>(readAllTagsStatement, function (err, result) {
  if (err) {
    throw err;
  }

  console.log(result);
});

// Update
const updateId = 1;

const updateName = "titolo aggiornato";

const updateTagStatement = `UPDATE tags SET name = ? WHERE id = ?`;
const updateTagValues = [updateName, updateId];

connection.execute<ResultSetHeader>(
  updateTagStatement,
  updateTagValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Delete
const deleteTagId = 1;

const deleteTagStatement = `DELETE FROM tags WHERE id = ?`;
const deleteTagValues = [deleteTagId];

connection.execute<ResultSetHeader>(
  deleteTagStatement,
  deleteTagValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);
