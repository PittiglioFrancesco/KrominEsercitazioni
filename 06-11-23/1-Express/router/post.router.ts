import express, { Router, Request, Response } from "express";
import { UpdateRequestParams, ReadByIdRequestParams, DeleteRequestParams } from "../types";

const postRouter: Router = express.Router();

type Post = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  likes: number[];
  ownerId: number;
  createdAt: number;
};


let nextId = 0;
const posts: Post[] = [];

// create post
postRouter.post("/api/v1/post", (req: Request, resp: Response) => {
  const newPost = req.body;
  newPost.id = nextId;

  // simulazione db
  posts.push(newPost);
  nextId++;

  resp.status(201);
  resp.send(newPost);
});

// read all
postRouter.get("/api/v1/post", (req: Request, resp: Response) => {
  resp.status(200);
  resp.send(posts);
});

// read post by id
postRouter.get(
  "/api/v1/post/:id",
  (req: Request<ReadByIdRequestParams>, resp: Response) => {
    const id: number = req.params.id;

    // simulazione db
    const foundPost = posts.find((post) => {
      return post.id == id;
    });

    if (!foundPost) {
      resp.status(404);
      resp.end();
      return;
    }

    resp.status(200);
    resp.send(foundPost);
  }
);

// update post
postRouter.put(
  "/api/v1/post/:id",
  (req: Request<UpdateRequestParams>, resp: Response) => {
    const id = req.params.id;

    // simulazione db
    const foundPost = posts.find((user) => {
      return user.id == id;
    });

    if (!foundPost) {
      resp.status(404);
      resp.end();
      return;
    }

    const postToUpdate = req.body;
    foundPost.title = postToUpdate.title;
    foundPost.description = postToUpdate.description;

    resp.status(200);
    resp.send(foundPost);
  }
);

// delete post
postRouter.delete(
  "/api/v1/post/:id",
  (req: Request<DeleteRequestParams>, resp: Response) => {
    const id = req.params.id;

    // simulazione db
    const founPostIndex = posts.findIndex((user) => {
      return user.id == id;
    });

    if (founPostIndex < 0) {
      resp.status(404);
      resp.end();
      return;
    }

    posts.splice(founPostIndex, 1);

    resp.status(200);
    resp.end();
  }
);

export default postRouter;
