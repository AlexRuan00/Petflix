import express from "express";      
import VideoController from "../controllers/videosController.js";

const routes = express.Router();
routes
.get("/videos", VideoController.listVideos)
.get("/videos/:videoId", VideoController.listVideoById)
    
export default routes;  