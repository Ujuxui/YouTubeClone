import express from "express";
import {  
    getChannelVideosByUser,
    uploadChannelVideo,
    updateChannelVideo,
    deleteChannelVideo } from "../Controllers/channel.controller.js";
import authenticateToken from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get('/:userId', getChannelVideosByUser);
router.post('/:userId', authenticateToken, uploadChannelVideo);
router.put('/:videoId', authenticateToken, updateChannelVideo);
router.delete('/:videoId', authenticateToken, deleteChannelVideo);

export default router;
