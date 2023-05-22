// Funcionalidad para marcar una tarea como completada
const taskCheckboxes = document.querySelectorAll('.task-checkbox');
taskCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    const taskLabel = event.target.nextElementSibling;
    taskLabel.classList.toggle('completed', event.target.checked);
  });
});

// Funcionalidad para eliminar una tarea
const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const taskCard = event.target.closest('.task-card');
    taskCard.remove();
  });
});

// Funcionalidad para agregar una nueva tarea
const newTaskForm = document.getElementById('new-task-form');
newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.getElementById('new-task-input');
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const taskList = document.querySelector('.task-list');
    const newTaskCard = document.createElement('li');
    newTaskCard.classList.add('task-card');
    newTaskCard.innerHTML = `
      <input type="checkbox" id="task-${taskList.children.length + 1}" class="task-checkbox">
      <label for="task-${taskList.children.length + 1}" class="task-label">${taskText}</label>
      <button class="delete-button">Eliminar</button>
    `;
    taskList.appendChild(newTaskCard);
    newTaskInput.value = '';
  }
});
