import express, { Router, Request, Response } from "express";
import {
  UpdateRequestParams,
  ReadByIdRequestParams,
  DeleteRequestParams,
} from "../types";

const userRouter: Router = express.Router();

type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
  imgSrc: string;
  follows: number[];
  subscribedAt: number;
};

let nextId = 0;
const users: User[] = [];

// create user
userRouter.post("/api/v1/user", (req: Request, resp: Response) => {
  const newUser = req.body;
  newUser.id = nextId;

  // simulazione db
  users.push(newUser);
  nextId++;

  resp.status(201);
  resp.send(newUser);
});

// read all
userRouter.get("/api/v1/user", (req: Request, resp: Response) => {
  resp.status(200);
  resp.send(users);
});

// read user by id
userRouter.get(
  "/api/v1/user/:id",
  (req: Request<ReadByIdRequestParams>, resp: Response) => {
    const id: number = req.params.id;

    // simulazione db
    const foundUser = users.find((user) => {
      return user.id == id;
    });

    if (!foundUser) {
      resp.status(404);
      resp.end();
      return;
    }

    resp.status(200);
    resp.send(foundUser);
  }
);

// read by firstname and lastname
userRouter.get("/api/v1/userquery", (req: Request, resp: Response) => {
  const query = req.query;

  // simulazione db
  const foundUser = users.find((user) => {
    if(user.firstname === query.firstname && user.lastname === query.lastname) {
      return user;
    }
  });

  if (!foundUser) {
    resp.status(404);
    resp.end();
    return;
  }

  resp.status(200);
  resp.send(foundUser);
});

// update all
userRouter.put(
  "/api/v1/user/updateall",
  (req: Request<User>, resp: Response) => {
    const body: User = req.body;

    // simulazione db
    users.forEach((user) => {
      user.firstname = body.firstname ? body.firstname : user.firstname;
      user.lastname = body.lastname ? body.lastname : user.lastname;
      user.email = body.email ? body.email : user.email;
      user.age = body.age ? body.age : user.age;
      user.imgSrc = body.imgSrc ? body.imgSrc : user.imgSrc;
      user.follows = body.follows ? body.follows : user.follows;
    })

    resp.status(200);
    resp.send(users);
  }
);

// delete user
userRouter.delete(
  "/api/v1/user/:id",
  (req: Request<DeleteRequestParams>, resp: Response) => {
    const id = req.params.id;

    // simulazione db
    const foundUserIndex = users.findIndex((user) => {
      return user.id == id;
    });

    if (foundUserIndex < 0) {
      resp.status(404);
      resp.end();
      return;
    }

    users.splice(foundUserIndex, 1);

    resp.status(200);
    resp.end();
  }
);

export default userRouter;
