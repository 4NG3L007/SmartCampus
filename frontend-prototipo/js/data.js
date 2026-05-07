const screenTitles = {
  login: 'Acceso por rol',
  docente: 'Panel docente',
  estudiante: 'Panel estudiante',
  direccion: 'Dashboard de direccion',
};

const courses = {
  programacion: {
    name: 'Programacion II',
    group: 'SIS-201',
    time: 'Lun/Mie 08:00',
  },
  basedatos: {
    name: 'Base de Datos I',
    group: 'SIS-203',
    time: 'Mar/Jue 10:00',
  },
  software: {
    name: 'Ingenieria de Software',
    group: 'SIS-301',
    time: 'Vie 14:00',
  },
};

const students = [
  { code: '2024011', name: 'Camila Rojas', attendance: 92, grade: 84, teacher: 'M. Ustariz' },
  { code: '2024012', name: 'Diego Vargas', attendance: 76, grade: 68, teacher: 'M. Ustariz' },
  { code: '2024013', name: 'Maria Flores', attendance: 88, grade: 79, teacher: 'M. Ustariz' },
  { code: '2024014', name: 'Jorge Molina', attendance: 61, grade: 54, teacher: 'M. Ustariz' },
  { code: '2024015', name: 'Ana Quiroga', attendance: 95, grade: 91, teacher: 'M. Ustariz' },
];

const studentSubjects = [
  { subject: 'Programacion II', ...students[0] },
  { subject: 'Base de Datos I', ...students[1], grade: 72, attendance: 81 },
  { subject: 'Ingenieria de Software', ...students[3] },
];
