import express from "express";
import connectDb from "./config/dbConnect.js";
import video from "./models/Video.js";

const connection = await connectDb();
const app = express();
app.use(express.json());

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

export default app;

