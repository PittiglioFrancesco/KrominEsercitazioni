import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";

const connection = mysql.createConnection({
  namedPlaceholders: true,
  host: "localhost",
  port: 3306,
  user: "ciccio",
  password: "1234",
  database: "esercitazione",
});

interface PostEntity extends RowDataPacket {
  id: number;
  ownerId: number;
  title: string;
  description: string;
}

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

const postOwnerId = 1;
const postTitle = "titolo";
const postDescription = "descrizione";

const createPostStatement = `INSERT INTO posts(owner_id, title, description) VALUES(?,?,?)`;
const createPostValues = [postOwnerId, postTitle, postDescription];

connection.execute<ResultSetHeader>(
  createPostStatement,
  createPostValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Read
const readId = "1";

const readPostStatement = `SELECT * FROM posts WHERE id = ?`;
const readPostValue = readId;

connection.execute<PostEntity[]>(
  readPostStatement,
  readPostValue,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// ReadAll

const readAllPostsStatement = `SELECT * FROM posts`;

connection.execute<PostEntity[]>(readAllPostsStatement, function (err, result) {
  if (err) {
    throw err;
  }

  console.log(result);
});

// Update
const updateId = 1;

const updateOwnerId = 1;
const updateTitle = "titolo aggiornato";
const updateDescription = "descrizione aggiornata";

const updatePostStatement = `UPDATE posts SET owner_id = ?, title = ?, description = ? WHERE id = ?`;
const updatePostValues = [
  updateOwnerId,
  updateTitle,
  updateDescription,
  updateId,
];

connection.execute<ResultSetHeader>(
  updatePostStatement,
  updatePostValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Delete
const deletePostId = 1;

const deletePostStatement = `DELETE FROM posts WHERE id = ?`;
const deletePostValues = [deletePostId];

connection.execute<ResultSetHeader>(
  deletePostStatement,
  deletePostValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);
