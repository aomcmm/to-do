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

function applyTemplate() {
    const template = document.getElementById('template-select').value;
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    let tasks = [];
    
    if (template === 'projectManagement') {
        tasks = [
            { text: 'Define project scope', priority: 'high' },
            { text: 'Create project plan', priority: 'medium' },
            { text: 'Assign tasks', priority: 'medium' },
            { text: 'Set deadlines', priority: 'high' },
            { text: 'Monitor progress', priority: 'low' }
        ];
    } else if (template === 'meetingAgenda') {
        tasks = [
            { text: 'Set meeting date and time', priority: 'high' },
            { text: 'Prepare meeting agenda', priority: 'medium' },
            { text: 'Send out invites', priority: 'high' },
            { text: 'Review previous meeting notes', priority: 'medium' },
            { text: 'Follow up on action items', priority: 'low' }
        ];
    } else if (template === 'clientFollowUp') {
        tasks = [
            { text: 'Send thank you email', priority: 'high' },
            { text: 'Schedule follow-up meeting', priority: 'medium' },
            { text: 'Prepare follow-up materials', priority: 'medium' },
            { text: 'Address client feedback', priority: 'high' },
            { text: 'Plan next steps', priority: 'low' }
        ];
    }

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add(task.priority);
        
        const todoContent = document.createElement('span');
        todoContent.textContent = task.text;
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

        todoList.appendChild(li);
    });
}
