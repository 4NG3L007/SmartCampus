# SmartCampus

SmartCampus es una plataforma web de gestion academica para instituciones educativas. El sistema permite registrar asistencia, cargar notas, consultar informacion academica y visualizar indicadores basicos para apoyar la toma de decisiones.

Proyecto desarrollado como avance academico por el equipo SmartCampus — Cochabamba, Bolivia.

## Requisitos previos

Todos los integrantes deben tener instaladas las herramientas necesarias para poder ejecutar, revisar y modificar el proyecto.

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

El avance actual esta desarrollado con HTML, CSS y JavaScript, por lo que no necesita instalar dependencias.

Abrir en el navegador:

```text
frontend-prototipo/index.html
```

Tambien se puede abrir el archivo directamente desde el explorador de archivos.

## Instalacion futura del backend

Cuando se cree la carpeta del backend, se podra instalar con:

```bash
cd backend
npm install
```

Si el backend se inicia desde cero:

```bash
mkdir backend
cd backend
npm init -y
npm install express cors dotenv pg
npm install --save-dev nodemon
```

## Variables de entorno futuras

Cuando el backend este implementado, se debe crear un archivo `.env` en la carpeta correspondiente.

Ejemplo:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=smartcampus
DB_USER=postgres
DB_PASSWORD=tu_password
```

Las credenciales reales no deben subirse a GitHub.

## Levantar el backend futuro

Cuando exista backend, el comando sugerido sera:

```bash
npm run dev
```

El servidor podria abrirse en:

```text
http://localhost:3000
```

## Stack tecnologico

| Categoria | Tecnologia |
| --- | --- |
| Estructura frontend | HTML5 |
| Estilos | CSS3 |
| Interactividad | JavaScript |
| Backend | Node.js + Express |
| Base de datos | PostgreSQL |
| Control de versiones | Git + GitHub |
| Pruebas de API | Postman o Thunder Client |
| Editor recomendado | Visual Studio Code |

## Estructura del proyecto

```text
SmartCampus/
├── README.md
├── docs/
│   ├── 01-caso-estudio-metodologia-hibrida-sebastian.md
│   ├── 02-metodologia-equipo-y-diagramas-smartcampus.md
│   ├── 03-entrega-individual-sebastian-frontend.md
│   ├── 04-checklist-entrega-viernes.md
│   └── plan-avance-smartcampus.md
└── frontend-prototipo/
    ├── README.md
    ├── index.html
    ├── css/
    │   └── styles.css
    └── js/
        └── app.js
```

## Funcionalidades principales

### Docente

- Ver materias asignadas.
- Registrar asistencia.
- Cargar notas.
- Revisar estudiantes con bajo rendimiento.

### Estudiante

- Ver materias inscritas.
- Consultar notas.
- Consultar asistencia.
- Ver estado academico.

### Direccion

- Ver indicadores academicos.
- Consultar promedio general.
- Revisar asistencia promedio.
- Identificar estudiantes en riesgo.

## Funcionalidad desarrollada en el avance actual

El avance actual corresponde al prototipo frontend de escritorio.

Incluye:

- Panel docente.
- Listado de materias.
- Registro visual de asistencia.
- Carga visual de notas.
- Panel estudiante.
- Tabla de materias, asistencia, promedio y estado.
- Dashboard basico con KPIs simulados.

## Metodologia de desarrollo

La metodologia elegida para el proyecto es **Scrumban**, una metodologia hibrida que combina Scrum y Kanban.

Se usa Scrum para organizar el trabajo por sprint y Kanban para visualizar el estado de las tareas.

Estados del tablero:

- Por hacer
- En progreso
- En pruebas
- Terminado

## Equipo

Luis Hurtado ya no participa en el proyecto, por lo que sus responsabilidades fueron reasignadas.

| Integrante | Area |
| --- | --- |
| Camila Lorena Lara | Product Owner + Scrum Master |
| Leandro Rosales | Backend Developer |
| Sebastian Rocha | Frontend Developer |
| Isael Patrick Ramos | QA + DevOps |

## Responsabilidades por integrante

| Integrante | Responsabilidad |
| --- | --- |
| Camila Lorena Lara | Historias de usuario, prioridades, tablero Kanban y seguimiento del equipo |
| Leandro Rosales | Base de datos, endpoints y logica de asistencia/notas |
| Sebastian Rocha | Pantallas frontend, navegacion, estilos y prototipo visual |
| Isael Patrick Ramos | Pruebas, checklist de errores y propuesta de despliegue |

## Endpoints propuestos

Cuando el backend este implementado, el frontend necesitara consumir estos endpoints:

```text
POST /auth/login
GET /teacher/courses
GET /courses/:id/students
POST /attendance
POST /grades
GET /student/summary
GET /dashboard/kpis
```

## Base de datos propuesta

Tablas principales:

- usuario
- docente
- estudiante
- materia
- inscripcion
- asistencia
- nota
- rol

## Seguridad

- Las credenciales deben manejarse mediante variables de entorno.
- El archivo `.env` no debe subirse a GitHub.
- El sistema debe manejar autenticacion por roles.
- Las rutas futuras deben protegerse segun el tipo de usuario.

## Extensiones recomendadas para VS Code

- Prettier
- Live Server
- GitLens
- JavaScript ES6 Code Snippets
- HTML CSS Support
- Thunder Client

## Scripts futuros

Cuando exista backend con Node.js, se podran usar scripts como:

```bash
npm run dev       # Servidor de desarrollo
npm run start     # Ejecutar servidor
```

## Estado actual del proyecto

- Prototipo frontend de escritorio creado.
- Estructura separada en HTML, CSS y JavaScript.
- Documentacion inicial agregada.
- Roles del equipo actualizados.
- Metodologia Scrumban definida.
- Diagramas y entrega individual documentados.

## Nota importante

El frontend trabaja actualmente con datos simulados. Esto permite mostrar avances funcionales mientras el backend y la base de datos se desarrollan.
