const express = require("express");
const app = express();
const PORT = 3010;
const clinicsRoutes = require("./routes/clinics");
const patientsRoutes = require("./routes/patients");
const employeesRoutes = require("./routes/employees");

app.use(express.json());

app.use("/clinics", clinicsRoutes);
app.use("/patients", patientsRoutes);
app.use("/employees", employeesRoutes);

app.listen(PORT, console.log(`listening on port ${PORT}`));
