import { pool } from "./database";

export const createAppointment = async (appointmentData) => {
  const { pacienteDocumento, especialidad } = appointmentData;
  
  const query = "INSERT INTO appointments (paciente_documento, especialidad) VALUES (?, ?)";
  await pool.query(query, [pacienteDocumento, especialidad]);
};

