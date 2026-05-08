const express = require("express");
const router = express.Router();
const estudianteController = require("../controllers/estudiante.controller");

router.post("/", estudianteController.registrarEstudiante);
router.get("/", estudianteController.obtenerEstudiantes);
module.exports = router;
