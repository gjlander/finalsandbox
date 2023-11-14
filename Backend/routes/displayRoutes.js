import express from "express";
import {
    display,
    makeDisplay,
    editDisplay,
} from "../controllers/displayControllers.js";

const displayRouter = express.Router();

displayRouter.route("/").get(display).post(makeDisplay).put(editDisplay);

export default displayRouter;
