const appState = {
  selectedCourseId: 1,
};

const courses = [
  {
    id: 1,
    nombre: 'Programacion II',
    carrera: 'Ingenieria de Sistemas',
    semestre: 4,
    estudiantes: 32,
  },
  {
    id: 2,
    nombre: 'Base de Datos I',
    carrera: 'Ingenieria de Sistemas',
    semestre: 4,
    estudiantes: 28,
  },
  {
    id: 3,
    nombre: 'Ingenieria de Software',
    carrera: 'Ingenieria de Sistemas',
    semestre: 5,
    estudiantes: 24,
  },
];

const students = [
  { id: 1, carnet: '9854321', nombre: 'Camila Rojas', faltas: 8, p1: 82, p2: 76, final: 88 },
  { id: 2, carnet: '9854322', nombre: 'Diego Vargas', faltas: 28, p1: 45, p2: 58, final: 62 },
  { id: 3, carnet: '9854323', nombre: 'Maria Flores', faltas: 12, p1: 91, p2: 87, final: 90 },
  { id: 4, carnet: '9854324', nombre: 'Jorge Molina', faltas: 34, p1: 42, p2: 39, final: 48 },
  { id: 5, carnet: '9854325', nombre: 'Ana Quiroga', faltas: 5, p1: 78, p2: 81, final: 85 },
];

const studentSubjects = [
  { materia: 'Programacion II', p1: 82, p2: 76, final: 88, asistencia: 92 },
  { materia: 'Base de Datos I', p1: 45, p2: 58, final: 62, asistencia: 72 },
  { materia: 'Ingenieria de Software', p1: 42, p2: 39, final: 48, asistencia: 66 },
];

const dashboardData = {
  asistenciaPromedio: 82,
  estudiantesEnRiesgo: 18,
  materiasCriticas: 4,
  promedioGeneral: 74.6,
  riesgoFaltas: [
    { carnet: '9854322', nombre: 'Diego Vargas', materia: 'Base de Datos I', faltas: 28 },
    { carnet: '9854324', nombre: 'Jorge Molina', materia: 'Ingenieria de Software', faltas: 34 },
    { carnet: '9854330', nombre: 'Laura Perez', materia: 'Programacion II', faltas: 31 },
  ],
  materiasCriticasLista: [
    { materia: 'Ingenieria de Software', carrera: 'Sistemas', reprobados: 46 },
    { materia: 'Base de Datos I', carrera: 'Sistemas', reprobados: 42 },
    { materia: 'Calculo II', carrera: 'Ingenieria', reprobados: 44 },
  ],
  historico: [
    { gestion: 'I-2024', promedio: 68 },
    { gestion: 'II-2024', promedio: 71 },
    { gestion: 'I-2025', promedio: 74 },
    { gestion: 'II-2025', promedio: 78 },
  ],
};
