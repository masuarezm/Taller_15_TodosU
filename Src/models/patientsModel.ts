import { pool } from "./database";

export const createPatient = async (patientData) => {
  const { nombre, apellido, cedula, edad, telefono } = patientData;
  const query = "INSERT INTO patients (nombre, apellido, cedula, edad, telefono) VALUES (?, ?, ?, ?, ?)";
  await pool.query(query, [nombre, apellido, cedula, edad, telefono]);
};

export const getPatients = async () => {
  const query = "SELECT * FROM patients";
  const [patients, fields] = await pool.query(query);
  return patients;
};


