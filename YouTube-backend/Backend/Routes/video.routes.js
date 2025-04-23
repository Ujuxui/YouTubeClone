import express from "express";
import {   getAllVideos,
    getVideoById,
    uploadVideo,
    updateVideo,
    deleteVideo } from "../Controllers/video.controller.js";
import authenticateToken from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.post('/', authenticateToken, uploadVideo);
router.put('/:id', authenticateToken, updateVideo);
router.delete('/:id', authenticateToken, deleteVideo);

export default router;
