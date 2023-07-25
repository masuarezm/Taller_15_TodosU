import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { doctorsRouter } from "./routes/doctors";
import { patientsRouter } from "./routes/patients";
import { appointmentsRouter } from "./routes/appointments";

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/doctors", doctorsRouter);
app.use("/patients", patientsRouter);
app.use("/appointments", appointmentsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
