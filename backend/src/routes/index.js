import express from "express";
import videos from "./videosRoutes.js";
import cors from "cors";

const routes = (app) => {
    const corsOptions = {
        origin: 'http://localhost:5173',
    };

    app.use(cors(corsOptions));

    app.route("/").get((req, res) => res.status(200).send("Petflix API"));

    app.use(express.json(), videos);
};

export default routes;
