function getSelectedCourse() {
  return courses.find((course) => course.id === appState.selectedCourseId) || courses[0];
}

function getAverage(student) {
  return Math.round((Number(student.p1) + Number(student.p2) + Number(student.final)) / 3);
}

function getAcademicStatus(promedio, asistencia) {
  if (promedio < 51) return { label: 'REPROBADO', className: 'status-risk' };
  if (asistencia < 75) return { label: 'EN RIESGO', className: 'status-warning' };
  return { label: 'APROBADO', className: 'status-ok' };
}

function renderTeacherCourses() {
  document.querySelector('#lista-materias').innerHTML = courses
    .map(
      (course) => `
        <article class="course-card">
          <div>
            <span class="course-meta">${course.carrera} - Semestre ${course.semestre}</span>
            <h3>${course.nombre}</h3>
            <p>${course.estudiantes} estudiantes inscritos</p>
          </div>
          <div class="course-actions">
            <button onclick="selectCourse(${course.id}, 'registro-asistencia')" class="secondary-action">Registrar Asistencia</button>
            <button onclick="selectCourse(${course.id}, 'carga-notas')" class="primary-action">Cargar Notas</button>
          </div>
        </article>
      `
    )
    .join('');
}

function renderSelectedCourseHeaders() {
  const course = getSelectedCourse();
  document.querySelector('#attendance-course-title').textContent = 'Registro de Asistencia - ' + course.nombre;
  document.querySelector('#grades-course-title').textContent = 'Carga de Notas - ' + course.nombre;
}

function renderAttendanceTable() {
  document.querySelector('#attendance-body').innerHTML = students
    .map(
      (student, index) => `
        <tr class="fila-estudiante" data-estudiante-id="${student.id}">
          <td>${index + 1}</td>
          <td>${student.carnet}</td>
          <td>${student.nombre}</td>
          <td>
            <div class="pat-options">
              <label><input type="radio" name="estado_${student.id}" value="P" checked /> P</label>
              <label><input type="radio" name="estado_${student.id}" value="A" /> A</label>
              <label><input type="radio" name="estado_${student.id}" value="T" /> T</label>
            </div>
          </td>
          <td class="${student.faltas > 25 ? 'status-risk' : 'status-ok'}">${student.faltas}%</td>
        </tr>
      `
    )
    .join('');
}

function renderGradesTable() {
  document.querySelector('#grades-body').innerHTML = students
    .map((student, index) => {
      const promedio = getAverage(student);
      return `
        <tr data-student-row="${student.id}">
          <td>${index + 1}</td>
          <td>${student.carnet}</td>
          <td>${student.nombre}</td>
          <td><input class="grade-input" data-grade="p1" type="number" min="0" max="100" value="${student.p1}" /></td>
          <td><input class="grade-input" data-grade="p2" type="number" min="0" max="100" value="${student.p2}" /></td>
          <td><input class="grade-input" data-grade="final" type="number" min="0" max="100" value="${student.final}" /></td>
          <td class="${promedio >= 51 ? 'status-ok' : 'status-risk'}" data-average>${promedio}</td>
        </tr>
      `;
    })
    .join('');
}

function renderStudentSummary() {
  document.querySelector('#student-summary').innerHTML = studentSubjects
    .map((subject) => {
      const promedio = Math.round((subject.p1 + subject.p2 + subject.final) / 3);
      const status = getAcademicStatus(promedio, subject.asistencia);
      return `
        <tr>
          <td>${subject.materia}</td>
          <td>${subject.p1}</td>
          <td>${subject.p2}</td>
          <td>${subject.final}</td>
          <td>${promedio}</td>
          <td>${subject.asistencia}%</td>
          <td class="${status.className}">${status.label}</td>
        </tr>
      `;
    })
    .join('');
}

function renderDashboard() {
  document.querySelector('#kpi-asistencia').textContent = dashboardData.asistenciaPromedio + '%';
  document.querySelector('#kpi-en-riesgo').textContent = dashboardData.estudiantesEnRiesgo;
  document.querySelector('#kpi-criticas').textContent = dashboardData.materiasCriticas;
  document.querySelector('#kpi-promedio').textContent = dashboardData.promedioGeneral;

  document.querySelector('#risk-body').innerHTML = dashboardData.riesgoFaltas
    .map(
      (item) => `
        <tr>
          <td>${item.carnet}</td>
          <td>${item.nombre}</td>
          <td>${item.materia}</td>
          <td class="status-risk">${item.faltas}%</td>
        </tr>
      `
    )
    .join('');

  document.querySelector('#critical-body').innerHTML = dashboardData.materiasCriticasLista
    .map(
      (item) => `
        <tr>
          <td>${item.materia}</td>
          <td>${item.carrera}</td>
          <td class="status-risk">${item.reprobados}%</td>
        </tr>
      `
    )
    .join('');

  document.querySelector('#history-bars').innerHTML = dashboardData.historico
    .map(
      (item) => `
        <div class="history-row">
          <span>${item.gestion}</span>
          <div class="bar"><i style="width:${item.promedio}%"></i></div>
          <strong>${item.promedio}</strong>
        </div>
      `
    )
    .join('');
}

function bindGradeCalculation() {
  document.querySelector('#grades-body').addEventListener('input', (event) => {
    if (!event.target.matches('.grade-input')) return;

    const row = event.target.closest('tr');
    const values = [...row.querySelectorAll('.grade-input')].map((input) => Number(input.value || 0));
    const average = Math.round((values[0] + values[1] + values[2]) / 3);
    const averageCell = row.querySelector('[data-average]');

    averageCell.textContent = average;
    averageCell.className = average >= 51 ? 'status-ok' : 'status-risk';
  });
}
