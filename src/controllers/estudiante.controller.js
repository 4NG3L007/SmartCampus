const pool = require("../config/db");

const registrarEstudiante = async (req, res) => {
  try {
    const { nombre_completo, semestre } = req.body;

    const nuevoEstudiante = await pool.query(
      "INSERT INTO estudiantes (nombre_completo, semestre) VALUES ($1, $2) RETURNING *",
      [nombre_completo, semestre],
    );

    res.status(201).json({
      mensaje: "¡Estudiante guardado con éxito en SmartCampus!",
      estudiante: nuevoEstudiante.rows[0],
    });
  } catch (error) {
    console.error("Error interno:", error);
    res.status(500).json({ error: "Hubo un error en el servidor" });
  }
};
const obtenerEstudiantes = async (req, res) => {
  try {
    // Hacemos un SELECT simple a PostgreSQL
    const listaEstudiantes = await pool.query("SELECT * FROM estudiantes");

    // Respondemos con Status 200 (OK) y mandamos la lista
    res.status(200).json(listaEstudiantes.rows);
  } catch (error) {
    console.error("Error al obtener estudiantes:", error);
    res.status(500).json({ error: "Hubo un error en el servidor" });
  }
};

module.exports = { registrarEstudiante, obtenerEstudiantes };
