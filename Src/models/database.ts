import { createPool, Pool } from "mysql2/promise";

export const pool: Pool = createPool({
  host: "localhost",
  user: "msuarezm",
  password: "msmm3041135",
  database: "Basedeprueba",
  connectionLimit: 10,
});
