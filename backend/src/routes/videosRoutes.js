import express from "express";      
import VideoController from "../controllers/videosController.js";

const routes = express.Router();
routes
.get("/videos/:videoId", VideoController.listVideoById)
.get("/videos", VideoController.listVideos)
.get("/dog", VideoController.listDogVideos)
.get("/cat", VideoController.listCatVideos)
    
export default routes;  