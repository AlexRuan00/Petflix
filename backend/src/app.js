import express from "express";
import connectDb from "./config/dbConnect.js";
import video from "./models/Video.js";
import cors from "cors";

const connection = await connectDb();
const app = express();
app.use(express.json());


const corsOptions = {
  origin: 'http://localhost:5173', 
};

app.use(cors(corsOptions));


connection.on("error", (err) => {
  console.error(err);
})
connection.once("open", () => {
  console.log("Database connection made successfully!")
})


app.get("/videos", async (req, res) => {
  const videosList = await video.find({});
  res.status(200).json(videosList);
});

app.get("/videos/:videoId", async (req, res) => {
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
});

export default app;

