import express from "express";
import { createAppointment } from "../controllers/appointmentsController";

const appointmentsRouter = express.Router();

// crear una nueva cita con POST
appointmentsRouter.post("/", createAppointment);

// aca crearia Otras rutas para obtener todas las citas médicas, obtener citas de un paciente específico, actualizar, eliminar

export { appointmentsRouter };
