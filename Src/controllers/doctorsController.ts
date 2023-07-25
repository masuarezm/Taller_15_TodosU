import { Request, Response } from "express";
import { pool } from "../models/database";

export const createDoctor = async (req: Request, res: Response) => {
  try {
    // Validar los datos del formulario usando express-validator aquí

    const { nombre, apellido, especialidad, consultorio, correo } = req.body;

    const query = "INSERT INTO doctors (nombre, apellido, especialidad, consultorio, correo) VALUES (?, ?, ?, ?, ?)";
    await pool.query(query, [nombre, apellido, especialidad, consultorio, correo]);

    res.status(201).json({ message: "Doctor creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el doctor" });
  }
};

export const getDoctors = async (req: Request, res: Response) => {
  try {
    const query = "SELECT * FROM doctors";
    const [doctors, fields] = await pool.query(query);

    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los doctores" });
  }
};


