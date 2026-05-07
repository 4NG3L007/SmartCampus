const courses = [
  { id: 1, name: 'Programacion II', group: 'SIS-201', schedule: 'Lun/Mie 08:00' },
  { id: 2, name: 'Base de Datos I', group: 'SIS-203', schedule: 'Mar/Jue 10:00' },
  { id: 3, name: 'Ingenieria de Software', group: 'SIS-301', schedule: 'Vie 14:00' },
];

const students = [
  { name: 'Camila Rojas', code: '2024011', attendance: 92, average: 84 },
  { name: 'Diego Vargas', code: '2024012', attendance: 76, average: 68 },
  { name: 'Maria Flores', code: '2024013', attendance: 88, average: 79 },
  { name: 'Jorge Molina', code: '2024014', attendance: 61, average: 54 },
];

const viewTitles = {
  teacher: 'Panel docente',
  student: 'Panel estudiante',
  dashboard: 'Dashboard directivo',
};

const courseList = document.querySelector('#course-list');
const attendanceList = document.querySelector('#attendance-list');
const gradesList = document.querySelector('#grades-list');
const studentTable = document.querySelector('#student-table');
const selectedCourse = document.querySelector('#selected-course');
const viewTitle = document.querySelector('#view-title');

function renderCourses() {
  courseList.innerHTML = courses
    .map(
      (course, index) => `
        <article class="course-card ${index === 0 ? 'active' : ''}" data-course="${course.name}">
          <div>
            <strong>${course.name}</strong>
            <small>${course.group} · ${course.schedule}</small>
          </div>
          <span>Ver</span>
        </article>
      `
    )
    .join('');
}

function renderAttendance() {
  attendanceList.innerHTML = students
    .map(
      (student) => `
        <label class="student-row">
          <div>
            <strong>${student.name}</strong>
            <span>${student.code}</span>
          </div>
          <input type="checkbox" checked aria-label="Asistencia de ${student.name}" />
        </label>
      `
    )
    .join('');
}

function renderGrades() {
  gradesList.innerHTML = students
    .map(
      (student) => `
        <label class="student-row">
          <div>
            <strong>${student.name}</strong>
            <span>${student.code}</span>
          </div>
          <input type="number" min="0" max="100" value="${student.average}" aria-label="Nota de ${student.name}" />
        </label>
      `
    )
    .join('');
}

function renderStudentTable() {
  studentTable.innerHTML = students
    .map((student) => {
      const risk = student.attendance < 70 || student.average < 60;
      return `
        <tr>
          <td>${student.name}</td>
          <td>${student.attendance}%</td>
          <td>${student.average}</td>
          <td class="${risk ? 'state-risk' : 'state-ok'}">${risk ? 'En riesgo' : 'Normal'}</td>
        </tr>
      `;
    })
    .join('');
}

function bindNavigation() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.view;

      document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
      document.querySelectorAll('.view').forEach((view) => view.classList.remove('active'));

      button.classList.add('active');
      document.querySelector(`#${target}`).classList.add('active');
      viewTitle.textContent = viewTitles[target];
    });
  });
}

function bindCourses() {
  courseList.addEventListener('click', (event) => {
    const card = event.target.closest('.course-card');
    if (!card) return;

    document.querySelectorAll('.course-card').forEach((item) => item.classList.remove('active'));
    card.classList.add('active');
    selectedCourse.textContent = card.dataset.course;
  });
}

function bindTabs() {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      const form = tab.dataset.form;

      document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
      document.querySelectorAll('.form-view').forEach((item) => item.classList.remove('active'));

      tab.classList.add('active');
      document.querySelector(`#${form}-form`).classList.add('active');
    });
  });
}

renderCourses();
renderAttendance();
renderGrades();
renderStudentTable();
bindNavigation();
bindCourses();
bindTabs();
