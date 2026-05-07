function showView(viewName) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.toggle('active', screen.id === viewName);
  });

  document.querySelectorAll('.menu-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });

  document.querySelector('#screen-title').textContent = screenTitles[viewName];
}

function bindNavigation() {
  document.querySelectorAll('[data-view]').forEach((button) => {
    button.addEventListener('click', () => showView(button.dataset.view));
  });
}

function bindTabs() {
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((item) => item.classList.remove('active'));
      document.querySelectorAll('.tab-screen').forEach((screen) => screen.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`#${tab.dataset.tab}`).classList.add('active');
    });
  });
}

function bindCourseSelect() {
  const select = document.querySelector('#course-select');

  select.addEventListener('change', () => {
    const selected = courses[select.value];
    document.querySelector('#course-name').textContent = selected.name;
    document.querySelector('#course-group').textContent = selected.group;
    document.querySelector('#course-time').textContent = selected.time;
  });
}
