import { Router } from 'express';
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { createComment, deleteComment } from "../controllers/comment.controller.js";

const router = Router();

// Public — anyone can leave a message
router.post('/', createComment);

// Protected — only admin can delete messages
router.delete('/:id', verifyJWT, deleteComment);

export default router;
