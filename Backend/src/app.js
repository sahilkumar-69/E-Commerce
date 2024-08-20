import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use("/images", express.static("Upload/images"));

import { router } from "./Router/home.routes.js";

app.use("/", router);

export { app };
