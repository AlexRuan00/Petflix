import video from "../models/Video.js"

class VideoController {

    static async listVideos(req, res) {
        const videosList = await video.find({});
        res.status(200).json(videosList);
    }

    static async listDogVideos(req, res) {
        const videosList = await video.find({});
        const dogVideos = videosList.filter(e => e.category === "dog");
        res.status(200).json(dogVideos);
    }

    static async listCatVideos(req, res) {
        const videosList = await video.find({});
        const catVideos = videosList.filter(e => e.category === "cat");
        res.status(200).json(catVideos);
    }

    static async listVideoById(req, res) {
        const videoId = req.params.videoId;

        try {
            const foundVideo = await video.findById(videoId);
            if (!foundVideo) {
                return res.status(404).json({ message: "Video not found." });
            }
            res.status(200).json(foundVideo);
        } catch (error) {
            console.error("Error when searching video by ID:", error);
            res.status(500).json({ message: "Internal server error." });
        }
    }
}

export default VideoController;