import { pool } from "./database";

export const createDoctor = async (doctorData) => {
  const { nombre, apellido, especialidad, consultorio, correo } = doctorData;
  const query = "INSERT INTO doctors (nombre, apellido, especialidad, consultorio, correo) VALUES (?, ?, ?, ?, ?)";
  await pool.query(query, [nombre, apellido, especialidad, consultorio, correo]);
};

export const getDoctors = async () => {
  const query = "SELECT * FROM doctors";
  const [doctors, fields] = await pool.query(query);
  return doctors;
};

.
