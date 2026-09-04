import { Router } from 'express';
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import { loginUser, logoutUser, getCurrentUser, getAllComments } from '../controllers/user.controller.js';

const router = Router();

router.post('/login', loginUser);
router.post('/logout', verifyJWT, logoutUser);
router.get('/me', verifyJWT, getCurrentUser);
router.get('/comments', verifyJWT, getAllComments);

export default router;
