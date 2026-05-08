const screenTitles = {
  login: 'Sistema de Informacion Gerencial',
  'panel-docente': 'Panel Docente',
  'registro-asistencia': 'Registro de Asistencia',
  'carga-notas': 'Carga de Notas',
  'panel-estudiante': 'Panel Estudiante',
  dashboard: 'Dashboard KPIs',
};

function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === screenName);
  });

  document.querySelectorAll('[data-screen]').forEach((item) => {
    item.classList.toggle('active', item.dataset.screen === screenName);
  });

  document.querySelector('#screen-title').textContent = screenTitles[screenName] || 'SmartCampus';
}

function bindNavigation() {
  document.querySelectorAll('[data-screen]').forEach((button) => {
    button.addEventListener('click', () => showScreen(button.dataset.screen));
  });
}

function bindLoginDemo() {
  document.querySelector('#btn-login').addEventListener('click', () => {
    const correo = document.querySelector('#correo').value.trim();
    const contrasena = document.querySelector('#contrasena').value.trim();
    const rol = document.querySelector('#rol-demo').value;

    if (!correo || !contrasena) {
      document.querySelector('#error-login').textContent = 'Ingrese correo y contrasena.';
      return;
    }

    localStorage.setItem('token', 'demo-token');
    localStorage.setItem('rol', rol);
    localStorage.setItem('nombre', 'Usuario Demo');
    document.querySelector('#error-login').textContent = '';

    if (rol === 'Docente') showScreen('panel-docente');
    if (rol === 'Estudiante') showScreen('panel-estudiante');
    if (rol === 'Direccion') showScreen('dashboard');
  });
}

function selectCourse(courseId, targetScreen) {
  appState.selectedCourseId = Number(courseId);
  renderSelectedCourseHeaders();
  renderAttendanceTable();
  renderGradesTable();
  showScreen(targetScreen);
}
