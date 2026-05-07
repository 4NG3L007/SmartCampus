# SmartCampus - Prototipo frontend

Prototipo frontend de escritorio para el sistema SmartCampus, una plataforma web de gestion academica.

## Objetivo

Representar el flujo principal del sistema academico:

- Acceso por rol.
- Panel docente.
- Registro de asistencia.
- Carga de calificaciones.
- Panel estudiante.
- Consulta de asistencia, promedio y estado academico.
- Dashboard basico de direccion con KPIs simulados.

## Tecnologias usadas

- HTML5 para la estructura de las pantallas.
- CSS3 para el diseno visual.
- JavaScript para la navegacion, tabs y datos simulados.

## Estructura

```text
frontend-prototipo/
  index.html
  css/
    base.css
    layout.css
    components.css
    screens.css
    styles.css
  js/
    data.js
    navigation.js
    render.js
    app.js
```

## Organizacion de archivos

- `index.html`: estructura de las pantallas.
- `css/base.css`: variables, reset y estilos generales.
- `css/layout.css`: distribucion principal, sidebar, grillas y columnas.
- `css/components.css`: botones, tarjetas, tablas, tabs y elementos reutilizables.
- `css/screens.css`: ajustes especificos de cada pantalla.
- `css/styles.css`: archivo principal que importa los estilos.
- `js/data.js`: datos simulados de materias y estudiantes.
- `js/navigation.js`: cambio de pantallas, tabs y seleccion de materia.
- `js/render.js`: renderizado de asistencia, notas y resumen del estudiante.
- `js/app.js`: inicializacion de la aplicacion.

## Como abrirlo

Abrir `index.html` en el navegador. No necesita instalacion ni servidor.

## Nota

Este prototipo usa datos simulados para poder mostrar el avance frontend mientras el backend y la base de datos se desarrollan.
