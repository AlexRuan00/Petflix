import express from "express";
import videos from "./videosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Petflix API"));

  app.use(express.json(), videos);
};

export default routes;
