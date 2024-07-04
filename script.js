function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    if (todoText === '') return;

    const priority = document.getElementById('priority-select').value;

    const li = document.createElement('li');
    li.classList.add(priority);
    
    const todoContent = document.createElement('span');
    todoContent.textContent = todoText;
    todoContent.classList.add('todo-text');
    li.appendChild(todoContent);
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('todo-buttons');
    
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editTodo(todoContent, li);
    };
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function () {
        li.remove();
    };

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    li.appendChild(buttonsDiv);

    document.getElementById('todo-list').appendChild(li);
    input.value = '';
}

function editTodo(todoContent, li) {
    const newTodoText = prompt('Edit your todo', todoContent.textContent);
    if (newTodoText !== null && newTodoText.trim() !== '') {
        todoContent.textContent = newTodoText.trim();
    }
    const newPriority = prompt('Edit the priority (low, medium, high)', li.className);
    if (newPriority !== null && (newPriority === 'low' || newPriority === 'medium' || newPriority === 'high')) {
        li.className = newPriority;
    }
}
