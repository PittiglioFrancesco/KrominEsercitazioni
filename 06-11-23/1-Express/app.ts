import express, { Application, Request, Response } from "express";
import userRouter from "./router/user.rotuer";
import postRouter from "./router/post.router";

const app: Application = express();

app.use(express.json());

app.use(userRouter, postRouter);

app.get("/", (req: Request, resp: Response) => {
    resp.status(200);
    resp.send("home");
});

app.listen(8080, () => {
  console.log("server in ascolto");
});
