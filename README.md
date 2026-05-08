# SmartCampus

SmartCampus es un Sistema de Informacion Gerencial (MIS) para gestion academica universitaria. El proyecto se enfoca en dos modulos principales: **Asistencia Estudiantil** y **Rendimiento Academico**.

El objetivo es centralizar el registro de asistencia y notas para generar reportes estrategicos que ayuden a la direccion universitaria a tomar decisiones.

Proyecto desarrollado como avance academico por el equipo SmartCampus - UNIFRANZ Cochabamba, Bolivia.

## Requisitos previos

Todos los integrantes deben tener instaladas las herramientas necesarias para ejecutar, revisar y modificar el proyecto.

- Node.js v20 o superior
- npm
- Visual Studio Code
- Git
- PostgreSQL
- Postman o Thunder Client
- Navegador web actualizado

Verificar Node.js y npm:

```bash
node -v
npm -v
```

## Instalacion

### 1. Clonar el repositorio

```bash
git clone https://github.com/4NG3L007/SmartCampus.git
cd SmartCampus
```

### 2. Abrir el proyecto en VS Code

```bash
code .
```

### 3. Ejecutar el prototipo frontend actual

El avance actual esta desarrollado con HTML, CSS y JavaScript. No necesita instalar dependencias.

Abrir en el navegador:

```text
frontend-prototipo/index.html
```

## Stack tecnologico

| Categoria | Tecnologia | Uso |
| --- | --- | --- |
| Frontend | HTML5 + CSS3 + JavaScript | Pantallas, estilos, navegacion y datos simulados |
| Backend | Node.js + Express | API REST para gestion de datos |
| Base de datos | PostgreSQL | Usuarios, materias, asistencia y notas |
| Control de versiones | Git + GitHub | Trabajo colaborativo |
| Pruebas API | Postman o Thunder Client | Verificacion de endpoints |

## Estructura actual del proyecto

```text
SmartCampus/
  README.md
  frontend-prototipo/
    README.md
    index.html
    css/
      styles.css
      base.css
      layout.css
      components.css
      screens.css
    js/
      app.js
      api.js
      data.js
      navigation.js
      render.js
```

## Modulos del sistema MIS

### Modulo 1 - Asistencia Estudiantil

Permite registrar y analizar la asistencia de estudiantes por materia y fecha.

Reportes esperados:

- Porcentaje de asistencia por estudiante, materia y carrera.
- Estudiantes en riesgo con mas del 25% de faltas.
- Materias con mayor indice de inasistencia.
- Tendencia semanal y mensual de asistencia.

### Modulo 2 - Rendimiento Academico

Permite centralizar notas y generar analisis academicos.

Reportes esperados:

- Promedio general por carrera y gestion.
- Materias con mayor porcentaje de reprobados.
- Comparativa entre gestiones academicas.
- Top de mejores estudiantes por carrera.
- Estudiantes con bajo rendimiento, menor a 51 puntos.

## Roles del sistema

| Rol | Acceso | Funciones principales |
| --- | --- | --- |
| Administrador | Total | Gestionar usuarios, carreras, materias y gestiones academicas |
| Docente | Entrada de datos | Registrar asistencia y cargar notas por parcial |
| Estudiante | Personal | Consultar asistencia, notas y estado academico |
| Direccion | Solo lectura | Ver dashboard, KPIs y reportes academicos |

## Equipo

| Integrante | Area |
| --- | --- |
| Camila Lorena Lara | Product Owner + Scrum Master |
| Leandro Rosales | Backend Developer |
| Sebastian Rocha | Frontend Developer |
| Isael Patrick Ramos | QA + DevOps |

## Responsabilidades por integrante

| Integrante | Responsabilidad |
| --- | --- |
| Camila Lorena Lara | Historias de usuario, prioridades del backlog, tablero Kanban y seguimiento |
| Leandro Rosales | Base de datos, endpoints API y logica de asistencia/notas |
| Sebastian Rocha | Pantallas frontend, navegacion, estilos CSS y prototipo visual |
| Isael Patrick Ramos | Pruebas, checklist de errores y propuesta de despliegue |

## Funcionalidad desarrollada en el avance actual

El avance actual corresponde al prototipo frontend de escritorio basado en los wireframes del documento completo.

Incluye:

- Login con correo, contrasena y seleccion de rol para demo.
- Panel docente con tarjetas de materias.
- Registro de asistencia por fecha con estados P/A/T.
- Carga de notas con Parcial 1, Parcial 2, Final y promedio calculado.
- Panel estudiante con promedio, asistencia y estado academico.
- Dashboard de direccion con 4 KPIs.
- Tabla de estudiantes en riesgo por faltas.
- Tabla de materias criticas.
- Comparativa historica por gestion.

## Endpoints propuestos

Cuando el backend este implementado, el frontend consumira:

```text
POST /auth/login
GET /teacher/courses
GET /courses/:id/students
POST /attendance
POST /grades
GET /student/summary
GET /dashboard/kpis
```

## Instalacion futura del backend

```bash
mkdir backend
cd backend
npm init -y
npm install express cors pg dotenv bcrypt jsonwebtoken
npm install --save-dev nodemon
```

Estructura backend sugerida:

```text
backend/
  index.js
  .env
  .env.example
  db/
    connection.js
  middleware/
    auth.js
  routes/
    auth.js
    teacher.js
    student.js
    dashboard.js
```

## Variables de entorno futuras

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=smartcampus
DB_USER=postgres
DB_PASSWORD=tu_password
JWT_SECRET=clave_secreta
```

El archivo `.env` nunca debe subirse a GitHub.

## Scripts futuros

```bash
npm run dev       # Servidor de desarrollo
npm run start     # Ejecutar servidor
```

## Estado actual del proyecto

- Prototipo frontend de escritorio creado.
- Estructura separada en HTML, CSS y JavaScript.
- Pantallas alineadas al documento completo.
- Roles del equipo definidos.
- Metodologia Scrumban definida.
- Frontend preparado para integracion futura con backend.

## Nota importante

El frontend trabaja actualmente con datos simulados en `js/data.js`. Para la integracion real, esos datos se reemplazaran por llamadas a la API usando `js/api.js`.
