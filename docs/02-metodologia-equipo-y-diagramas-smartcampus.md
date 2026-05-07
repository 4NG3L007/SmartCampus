# Metodologia de desarrollo y diagramas del sistema SmartCampus

## Nombre del proyecto

SmartCampus: Sistema de gestion academica.

## Metodologia elegida

Para el proyecto SmartCampus se eligio la metodologia hibrida **Scrumban**, que combina Scrum y Kanban.

Se eligio esta metodologia porque el equipo necesita planificar avances por sprint, pero tambien necesita visualizar las tareas de manera clara debido a que el proyecto tiene varias areas: frontend, backend, base de datos, QA, DevOps y documentacion.

## Fases de la metodologia

### 1. Analisis de requerimientos

Se identifican las necesidades principales del sistema:

- Registro de asistencia.
- Carga de notas.
- Consulta de notas y asistencia.
- Dashboard con indicadores academicos.

### 2. Definicion del backlog

Se escriben las tareas del proyecto y se ordenan por prioridad.

### 3. Planificacion del sprint

Se define que funcionalidades se desarrollaran en el sprint. Para el primer sprint se prioriza el flujo docente-estudiante.

### 4. Desarrollo

Cada integrante desarrolla la funcionalidad asignada segun su rol.

### 5. Pruebas

Se revisa que las funcionalidades no tengan errores visibles y que cumplan con lo solicitado.

### 6. Revision del avance

El equipo presenta lo realizado y explica que esta terminado, que esta en progreso y que falta.

### 7. Ajustes

Se corrigen problemas detectados y se reorganizan tareas si algun integrante no puede continuar.

## Roles asignados

Luis Hurtado ya no participa en el proyecto, por lo que sus responsabilidades fueron reasignadas.

| Integrante | Rol | Responsabilidad |
| --- | --- | --- |
| Camila Lorena Lara | Product Owner + Scrum Master | Define prioridades, historias de usuario, tablero Kanban y seguimiento del equipo. |
| Leandro Rosales | Backend Developer | Disena base de datos, endpoints y logica de asistencia/notas. |
| Sebastian Rocha | Frontend Developer | Desarrolla las pantallas de docente, estudiante y dashboard basico. |
| Isael Patrick Ramos | QA + DevOps | Realiza pruebas, checklist de errores y propuesta de despliegue. |

## Funcionalidad modificada o ajustada

La funcionalidad trabajada para el avance es el **flujo de gestion academica desde el frontend**.

Incluye:

- Vista de docente.
- Seleccion de materia.
- Registro visual de asistencia.
- Carga visual de notas.
- Vista de estudiante.
- Consulta de asistencia, promedio y estado academico.
- Dashboard basico de direccion con KPIs simulados.

## Diagrama de casos de uso

```mermaid
flowchart LR
  Docente["Actor: Docente"]
  Estudiante["Actor: Estudiante"]
  Direccion["Actor: Direccion"]

  Login(("Iniciar sesion"))
  VerMaterias(("Ver materias"))
  RegistrarAsistencia(("Registrar asistencia"))
  CargarNotas(("Cargar notas"))
  ConsultarNotas(("Consultar notas"))
  ConsultarAsistencia(("Consultar asistencia"))
  VerDashboard(("Ver dashboard academico"))
  RevisarRiesgo(("Revisar estudiantes en riesgo"))

  Docente --> Login
  Docente --> VerMaterias
  Docente --> RegistrarAsistencia
  Docente --> CargarNotas

  Estudiante --> Login
  Estudiante --> VerMaterias
  Estudiante --> ConsultarNotas
  Estudiante --> ConsultarAsistencia

  Direccion --> Login
  Direccion --> VerDashboard
  Direccion --> RevisarRiesgo
```

## Diagrama de clases

```mermaid
classDiagram
  class Usuario {
    +int id
    +string nombre
    +string correo
    +string rol
    +iniciarSesion()
  }

  class Docente {
    +verMaterias()
    +registrarAsistencia()
    +cargarNotas()
  }

  class Estudiante {
    +string codigo
    +consultarNotas()
    +consultarAsistencia()
  }

  class Materia {
    +int id
    +string nombre
    +string grupo
    +string horario
  }

  class Asistencia {
    +int id
    +date fecha
    +bool presente
  }

  class Nota {
    +int id
    +float valor
    +string tipoEvaluacion
  }

  class Dashboard {
    +calcularPromedioGeneral()
    +calcularAsistenciaPromedio()
    +detectarEstudiantesEnRiesgo()
  }

  Usuario <|-- Docente
  Usuario <|-- Estudiante
  Docente "1" --> "*" Materia
  Estudiante "*" --> "*" Materia
  Estudiante "1" --> "*" Asistencia
  Estudiante "1" --> "*" Nota
  Materia "1" --> "*" Asistencia
  Materia "1" --> "*" Nota
  Dashboard --> Nota
  Dashboard --> Asistencia
```

## Diagrama de secuencia: registro de asistencia

```mermaid
sequenceDiagram
  actor Docente
  participant Frontend
  participant Backend
  participant BaseDatos as Base de datos

  Docente->>Frontend: Selecciona una materia
  Frontend->>Backend: Solicita lista de estudiantes
  Backend->>BaseDatos: Consulta estudiantes de la materia
  BaseDatos-->>Backend: Devuelve estudiantes
  Backend-->>Frontend: Envia lista de estudiantes
  Docente->>Frontend: Marca presentes y ausentes
  Frontend->>Backend: Envia asistencia registrada
  Backend->>BaseDatos: Guarda asistencia
  BaseDatos-->>Backend: Confirma registro
  Backend-->>Frontend: Muestra confirmacion
```

## Diagrama de secuencia: carga de notas

```mermaid
sequenceDiagram
  actor Docente
  participant Frontend
  participant Backend
  participant BaseDatos as Base de datos

  Docente->>Frontend: Abre formulario de notas
  Frontend->>Backend: Solicita estudiantes de la materia
  Backend->>BaseDatos: Busca estudiantes inscritos
  BaseDatos-->>Backend: Devuelve estudiantes
  Backend-->>Frontend: Muestra estudiantes
  Docente->>Frontend: Ingresa calificaciones
  Frontend->>Backend: Envia notas
  Backend->>BaseDatos: Guarda calificaciones
  Backend->>Backend: Calcula promedios
  Backend-->>Frontend: Confirma guardado
```

## Diagrama de secuencia: consulta de estudiante

```mermaid
sequenceDiagram
  actor Estudiante
  participant Frontend
  participant Backend
  participant BaseDatos as Base de datos

  Estudiante->>Frontend: Ingresa al panel estudiante
  Frontend->>Backend: Solicita resumen academico
  Backend->>BaseDatos: Consulta notas y asistencias
  BaseDatos-->>Backend: Devuelve informacion academica
  Backend->>Backend: Calcula estado academico
  Backend-->>Frontend: Envia resumen
  Frontend-->>Estudiante: Muestra materias, asistencia, promedio y estado
```

## Conclusion del equipo

Scrumban permite organizar el avance de SmartCampus de forma clara. El equipo puede dividir responsabilidades, visualizar el progreso y presentar entregables individuales. La metodologia tambien ayuda a ajustar el trabajo cuando cambia la composicion del equipo, como ocurrio con la salida de Luis Hurtado.
