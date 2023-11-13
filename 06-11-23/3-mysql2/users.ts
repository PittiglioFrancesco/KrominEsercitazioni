import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";

const connection = mysql.createConnection({
  namedPlaceholders: true,
  host: "localhost",
  port: 3306,
  user: "ciccio",
  password: "1234",
  database: "esercitazione",
}); 

interface UserEntity extends RowDataPacket {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: Date;
}

// Users

// Create
const userDate = new Date("2000-11-06");

const userFirstname = "nome";
const userLastName = "cognome";
const userEmail = "nome.cognome@gmail.com";
const userBirthdate = userDate.getTime();

const createUserStatement = `INSERT INTO users(firstname, lastname, email, birthdate) VALUES(?,?,?,?)`;
const createUserValues = [userFirstname, userLastName, userEmail, userBirthdate];

connection.execute<ResultSetHeader>(
  createUserStatement,
  createUserValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Read
const readId = "1";

const readUserStatement = `SELECT * FROM users WHERE id = ?`;
const readUserValue = readId;

connection.execute<UserEntity[]>(
  readUserStatement,
  readUserValue,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// ReadAll

const readAllUsersStatement = `SELECT * FROM users`;

connection.execute<UserEntity[]>(
  readAllUsersStatement,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Update
const updateId = 1;
const updateDate = new Date("2023-11-06");

const updateFirstname = "nome";
const updateLastname = "cognome";
const updateEmail = "nome.cognome@gmail.com";
const updateBirthdate = updateDate.getTime();

const updateUserStatement = `UPDATE users SET firstname = ?, lastname = ?, email = ?, birthdate = ? WHERE id = ?`;
const updateUserValues = [updateFirstname, updateLastname, updateEmail, updateBirthdate, updateId];

connection.execute<ResultSetHeader>(
  updateUserStatement,
  updateUserValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);

// Delete
const deleteUserId = 1;


const deleteUserStatement = `DELETE FROM users WHERE id = ?`;
const deleteUserValues = [deleteUserId];

connection.execute<ResultSetHeader>(
  deleteUserStatement,
  deleteUserValues,
  function (err, result) {
    if (err) {
      throw err;
    }

    console.log(result);
  }
);
