// scripts/app.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('tasks');

    addTaskButton.addEventListener('click', () => {
        const task = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        if (task) {
            addTask(task, dueDate, priority);
            taskInput.value = '';
            dueDateInput.value = '';
            priorityInput.value = 'low';
        }
    });

    function addTask(task, dueDate, priority) {
        const li = document.createElement('li');
        li.className = priority;
        li.innerHTML = `
            <span>${task} - ${dueDate ? 'Due: ' + dueDate : 'No due date'}</span>
            <button onclick="removeTask(this)">X</button>
        `;
        tasksList.appendChild(li);
    }
});

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

