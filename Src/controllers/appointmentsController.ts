import { Request, Response } from "express";
import { pool } from "../models/database";

export const createAppointment = async (req: Request, res: Response) => {
  try {
    

    const { pacienteDocumento, especialidad } = req.body;

    
    const query = "INSERT INTO appointments (paciente_documento, especialidad) VALUES (?, ?)";
    await pool.query(query, [pacienteDocumento, especialidad]);

    res.status(201).json({ message: "Cita médica creada exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la cita médica" });
  }
};

