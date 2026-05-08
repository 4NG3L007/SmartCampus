# SmartCampus - Prototipo frontend

Prototipo frontend de escritorio para SmartCampus, Sistema de Informacion Gerencial (MIS) orientado a los modulos de Asistencia Estudiantil y Rendimiento Academico.

## Objetivo

Representar las pantallas definidas en el documento completo:

- Login.
- Panel docente.
- Registro de asistencia.
- Carga de notas.
- Panel estudiante.
- Dashboard KPIs para direccion.

## Tecnologias usadas

- HTML5 para la estructura.
- CSS3 para la interfaz visual.
- JavaScript para navegacion, datos simulados y renderizado.

## Estructura

```text
frontend-prototipo/
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

## Organizacion de archivos

- `index.html`: estructura de las pantallas.
- `css/base.css`: variables, reset y estilos generales.
- `css/layout.css`: distribucion principal, sidebar, grillas y columnas.
- `css/components.css`: botones, tarjetas, tablas y formularios.
- `css/screens.css`: ajustes especificos de pantallas.
- `css/styles.css`: archivo principal que importa todos los estilos.
- `js/data.js`: datos simulados de materias, estudiantes y dashboard.
- `js/api.js`: funciones `apiGet` y `apiPost` para conectar luego con backend.
- `js/navigation.js`: cambio de pantallas y seleccion de materia.
- `js/render.js`: renderizado de materias, asistencia, notas, estudiante y dashboard.
- `js/app.js`: inicializacion de la aplicacion.

## Como abrirlo

Abrir `index.html` en el navegador. No necesita instalacion ni servidor.

## Preparado para integracion

El archivo `api.js` ya contiene la estructura para consumir endpoints con token JWT:

- `apiGet(url)`
- `apiPost(url, data)`

Cuando el backend este listo, se reemplazaran los datos simulados por endpoints reales.
