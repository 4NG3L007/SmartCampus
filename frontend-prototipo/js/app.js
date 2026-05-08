document.querySelector('#attendance-date').valueAsDate = new Date();

bindNavigation();
bindLoginDemo();
renderTeacherCourses();
renderSelectedCourseHeaders();
renderAttendanceTable();
renderGradesTable();
renderStudentSummary();
renderDashboard();
bindGradeCalculation();

document.querySelector('#btn-save-attendance').addEventListener('click', () => {
  document.querySelector('#attendance-message').textContent = 'Asistencia guardada en modo demo. Luego se enviara a POST /attendance.';
});

document.querySelector('#btn-save-grades').addEventListener('click', () => {
  document.querySelector('#grades-message').textContent = 'Notas guardadas en modo demo. Luego se enviaran a POST /grades.';
});
