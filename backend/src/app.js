import express from "express";
import connectDb from "./config/dbConnect.js";
import cors from "cors";
import routes from "./routes/index.js";

const connection = await connectDb();
const app = express();
routes(app);

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


export default app;

