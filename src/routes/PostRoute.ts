import PostController from "../controllers/PostController";
import { Router } from "express";

const PostRouter = Router();

PostRouter.get('/posts', PostController.listPost)

PostRouter.post('/post', PostController.createPost);

PostRouter.put('/post', PostController.updatePost);

PostRouter.delete('/post', PostController.deletePost);

export default PostRouter;