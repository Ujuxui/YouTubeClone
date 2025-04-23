import express from "express";
import { getComments, addComment, editComment, deleteComment } from "../Controllers/comment.controller.js";
import authenticateToken from '../Middleware/authMiddleware.js';

const router = express.Router();

router.get('/:videoId', getComments);
router.post('/:videoId', authenticateToken, addComment);
router.put('/:commentId', authenticateToken, editComment);
router.delete('/:commentId', authenticateToken, deleteComment);

export default router;