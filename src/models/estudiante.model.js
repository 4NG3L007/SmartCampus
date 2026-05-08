const pool = require("../config/db");

const inicializarTabla = async () => {
  const query = `
        CREATE TABLE IF NOT EXISTS estudiantes (
            id SERIAL PRIMARY KEY,
            nombre_completo VARCHAR(150) NOT NULL,
            semestre INTEGER NOT NULL,
            promedio DECIMAL(5,2) DEFAULT 0.00,
            en_riesgo BOOLEAN DEFAULT FALSE
        );
    `;

  try {
    await pool.query(query);
    console.log(' Archivero listo: Tabla "estudiantes" verificada.');
  } catch (error) {
    console.error(" Error creando la tabla:", error);
  }
};

inicializarTabla();

module.exports = {};
