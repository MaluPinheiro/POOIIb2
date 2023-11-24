import CommentController from "../controllers/CommentController";
import { Router } from "express";

const CommentRouter = Router();

CommentRouter.get('/comments', CommentController.listComment)

CommentRouter.post('/comment', CommentController.createComment);

CommentRouter.put('/comment', CommentController.updateComment);

CommentRouter.delete('/comment', CommentController.deleteComment);

export default CommentRouter;