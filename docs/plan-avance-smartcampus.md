# Plan de avance SmartCampus

## Objetivo para presentar el 8 de mayo de 2026

Presentar un avance ordenado del sistema SmartCampus: alcance, roles actualizados, tecnologias simples, tablero de trabajo y un prototipo de escritorio para demostrar las pantallas principales.

## Alcance del proyecto

SmartCampus es una plataforma web de gestion academica. En esta primera etapa se trabajara solo para PC/escritorio, porque es mas simple de desarrollar, probar y presentar.

El sistema debe permitir:

- Que el docente vea sus materias.
- Que el docente registre asistencia.
- Que el docente cargue notas.
- Que el estudiante consulte sus materias, notas y asistencia.
- Que direccion vea indicadores academicos basicos.

## Tecnologias sencillas recomendadas

Para avanzar rapido y sin complicarse, la propuesta inicial es:

| Parte | Tecnologia | Motivo |
| --- | --- | --- |
| Estructura visual | HTML5 | Facil de entender y presentar. |
| Estilos | CSS3 | Permite separar diseno del contenido. |
| Interactividad | JavaScript | Sirve para navegacion, tabs y datos simulados. |
| Control de versiones | Git y GitHub | Permite organizar avances del equipo. |
| Backend futuro | Node.js + Express | Es sencillo para crear APIs. |
| Base de datos futura | PostgreSQL | Buena opcion para datos academicos relacionados. |

React y Tailwind se pueden usar mas adelante, cuando el equipo tenga clara la estructura. Para el avance de manana conviene mostrar primero una base simple, funcional y bien dividida.

## Estructura del prototipo frontend

El prototipo no esta armado en un solo archivo. Esta dividido asi:

```text
frontend-prototipo/
  index.html
  css/
    styles.css
  js/
    app.js
docs/
  plan-avance-smartcampus.md
```

- `index.html`: contiene la estructura de las pantallas.
- `css/styles.css`: contiene colores, layout, tablas, botones y paneles.
- `js/app.js`: contiene datos simulados y navegacion entre secciones.
- `docs/plan-avance-smartcampus.md`: contiene la organizacion del proyecto.

## Organizacion actualizada del equipo

Luis Hurtado ya no esta trabajando en el proyecto, por eso sus responsabilidades deben reasignarse.

| Integrante | Rol actualizado | Responsabilidades |
| --- | --- | --- |
| Camila Lorena Lara | Product Owner + Scrum Master | Define prioridades, historias de usuario, tablero Kanban y seguimiento del equipo. |
| Leandro Rosales | Backend Developer | Define la base de datos, endpoints y logica de notas/asistencia. |
| Sebastian Rocha | Frontend Developer | Disena y programa las pantallas de docente, estudiante y navegacion del prototipo. |
| Isael Patrick Ramos | QA + DevOps | Prepara pruebas, checklist de errores y propuesta de despliegue. |

## Reparto concreto para hoy

| Persona | Entregable minimo |
| --- | --- |
| Camila | Historias de usuario, prioridades del MVP y tablero Kanban. |
| Leandro | Modelo de tablas y lista de endpoints para el frontend. |
| Sebastian | Prototipo de escritorio con HTML, CSS y JavaScript separados. |
| Isael | Checklist de pruebas y plan simple de despliegue. |

## Tu rol como Frontend Developer

Tu responsabilidad principal es la capa visual del sistema. En esta etapa no necesitas hacer backend ni base de datos. Tu avance se puede defender diciendo que estas trabajando con datos simulados mientras tus companeros terminan API y base de datos.

### Pantallas que te corresponden

- Panel docente.
- Listado de materias.
- Registro de asistencia.
- Carga de notas.
- Panel estudiante.
- Tabla de materias, asistencia, promedio y estado academico.
- Vista basica de dashboard para direccion con KPIs simulados.

### Lo que debes explicar

"Mi parte del proyecto es el frontend. Para este avance prepare un prototipo de escritorio dividido en HTML, CSS y JavaScript. El HTML contiene la estructura, el CSS contiene todo el diseno visual y el JavaScript maneja la navegacion y los datos simulados. Esto permite avanzar aunque el backend todavia no este listo, y luego se podra conectar con los endpoints que desarrolle el equipo de backend."

## Tablero Kanban sugerido

### Por hacer

- Definir historias de usuario.
- Definir modelo de base de datos.
- Definir endpoints del backend.
- Preparar checklist de pruebas.
- Documentar tareas del sprint.

### En progreso

- Prototipo frontend de escritorio.
- Pantallas de docente.
- Pantallas de estudiante.
- Diseno de endpoints de notas y asistencia.
- Tablero Kanban.

### En pruebas

- Navegacion entre pantallas.
- Carga visual de asistencia.
- Carga visual de notas.
- Tabla de resumen academico.

### Terminado

- Documento base del proyecto.
- Roles actualizados.
- Stack tecnologico simple.
- Estructura inicial del frontend.

## Sprint 1

Duracion: 2 semanas.

Objetivo: construir el flujo academico basico entre docente y estudiante.

### Historias de usuario

- Como docente, quiero ver mis materias para seleccionar rapidamente la clase.
- Como docente, quiero registrar asistencia para controlar la participacion.
- Como docente, quiero cargar notas para actualizar el rendimiento academico.
- Como estudiante, quiero ver mis notas para conocer mi desempeno.
- Como estudiante, quiero ver mi asistencia para saber si estoy en riesgo.
- Como direccion, quiero ver KPIs basicos para tomar decisiones.

## Endpoints que el frontend necesitara

- `POST /auth/login`
- `GET /teacher/courses`
- `GET /courses/:id/students`
- `POST /attendance`
- `POST /grades`
- `GET /student/summary`
- `GET /dashboard/kpis`

## Riesgos y solucion

| Riesgo | Solucion |
| --- | --- |
| El backend no llega a tiempo. | Usar datos simulados en JavaScript. |
| No hay tareas claras. | Dividir entregables por persona. |
| La presentacion se ve muy teorica. | Mostrar prototipo de escritorio funcionando. |
| Luis ya no participa. | Reasignar Product Owner a Camila. |

## Frase final para la presentacion

"Aunque el proyecto todavia esta en una etapa inicial, ya tenemos una division clara de roles, una propuesta tecnologica simple y un prototipo frontend de escritorio separado en HTML, CSS y JavaScript. Esto nos permite mostrar avance real y preparar la integracion posterior con backend y base de datos."
