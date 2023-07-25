import express from "express";
import { createDoctor, getDoctors } from "../controllers/doctorsController";

const doctorsRouter = express.Router();

doctorsRouter.post("/", createDoctor);

doctorsRouter.get("/", getDoctors);


export { doctorsRouter };
