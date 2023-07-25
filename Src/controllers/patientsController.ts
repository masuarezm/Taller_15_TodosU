import { Request, Response } from "express";
import { pool } from "../models/database";

export const createPatient = async (req: Request, res: Response) => {
  try {
    // Validar los datos del formulario usando express-validator aquí

    const { nombre, apellido, cedula, edad, telefono } = req.body;

    const query = "INSERT INTO patients (nombre, apellido, cedula, edad, telefono) VALUES (?, ?, ?, ?, ?)";
    await pool.query(query, [nombre, apellido, cedula, edad, telefono]);

    res.status(201).json({ message: "Paciente creado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el paciente" });
  }
};

export const getPatients = async (req: Request, res: Response) => {
  try {
    const query = "SELECT * FROM patients";
    const [patients, fields] = await pool.query(query);

    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los pacientes" });
  }
};


