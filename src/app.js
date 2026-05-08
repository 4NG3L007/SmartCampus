const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Inicializar la tabla de PostgreSQL
require("./models/estudiante.model");

// ruta
app.get("/", (req, res) => {
  res.send("Backend de SmartCampus conectado!");
});

app.use("/api/estudiantes", require("./routes/estudiantes.routes"));

// Encender el servidor
app.listen(PORT, () => {
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
});
