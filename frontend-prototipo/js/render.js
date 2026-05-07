function renderAttendance() {
  document.querySelector('#attendance-body').innerHTML = students
    .map(
      (student) => `
        <tr>
          <td>${student.code}</td>
          <td>${student.name}</td>
          <td>
            <select class="attendance-select" aria-label="Asistencia de ${student.name}">
              <option>Presente</option>
              <option>Ausente</option>
              <option>Licencia</option>
            </select>
          </td>
          <td>Clase regular</td>
        </tr>
      `
    )
    .join('');
}

function renderGrades() {
  document.querySelector('#grades-body').innerHTML = students
    .map((student) => {
      const risk = student.grade < 60;
      return `
        <tr>
          <td>${student.code}</td>
          <td>${student.name}</td>
          <td>
            <input class="grade-input" type="number" min="0" max="100" value="${student.grade}" />
          </td>
          <td class="${risk ? 'status-risk' : 'status-ok'}">${risk ? 'En riesgo' : 'Regular'}</td>
        </tr>
      `;
    })
    .join('');
}

function renderStudentSummary() {
  document.querySelector('#student-summary').innerHTML = studentSubjects
    .map((item) => {
      const risk = item.grade < 60 || item.attendance < 70;
      return `
        <tr>
          <td>${item.subject}</td>
          <td>${item.teacher}</td>
          <td>${item.attendance}%</td>
          <td>${item.grade}</td>
          <td class="${risk ? 'status-risk' : 'status-ok'}">${risk ? 'En riesgo' : 'Normal'}</td>
        </tr>
      `;
    })
    .join('');
}
