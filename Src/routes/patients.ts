import express from "express";
import { createPatient, getPatients } from "../controllers/patientsController";

const patientsRouter = express.Router();

patientsRouter.post("/", createPatient);

patientsRouter.get("/", getPatients);

export { patientsRouter };
