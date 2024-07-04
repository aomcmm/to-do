let categories = {};

function addCategory() {
    const categoryInput = document.getElementById('category-input');
    const categoryName = categoryInput.value.trim();
    if (categoryName === '' || categories[categoryName]) return;

    categories[categoryName] = [];
    
    const categorySelect = document.getElementById('category-select');
    const option = document.createElement('option');
    option.value = categoryName;
    option.textContent = categoryName;
    categorySelect.appendChild(option);
    
    categoryInput.value = '';
}

function changeCategory() {
    const selectedCategory = document.getElementById('category-select').value;
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    if (selectedCategory && categories[selectedCategory]) {
        categories[selectedCategory].forEach(todo => {
            const li = createTodoElement(todo.text, todo.priority);
            todoList.appendChild(li);
        });
    }
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    const priority = document.getElementById('priority-select').value;
    const selectedCategory = document.getElementById('category-select').value;

    if (todoText === '' || selectedCategory === '') return;

    const todo = { text: todoText, priority: priority };
    categories[selectedCategory].push(todo);
    
    const todoList = document.getElementById('todo-list');
    const li = createTodoElement(todoText, priority);
    todoList.appendChild(li);
    
    todoInput.value = '';
}

function createTodoElement(todoText, priority) {
    const li = document.createElement('li');
    li.classList.add(priority);
    
    const todoContent = document.createElement('span');
    todoContent.textContent = todoText;
    todoContent.classList.add('todo-text');
    li.appendChild(todoContent);
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('todo-buttons');
    
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.onclick = function () {
        editTodo(todoContent, li);
    };
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function () {
        li.remove();
        const selectedCategory = document.getElementById('category-select').value;
        categories[selectedCategory] = categories[selectedCategory].filter(todo => todo.text !== todoText);
    };

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    li.appendChild(buttonsDiv);

    return li;
}

function editTodo(todoContent, li) {
    const newTodoText = prompt('Edit your todo', todoContent.textContent);
    const selectedCategory = document.getElementById('category-select').value;
    const priority = li.className;

    if (newTodoText !== null && newTodoText.trim() !== '') {
        const todoIndex = categories[selectedCategory].findIndex(todo => todo.text === todoContent.textContent);
        categories[selectedCategory][todoIndex].text = newTodoText.trim();
        todoContent.textContent = newTodoText.trim();
    }

    const newPriority = prompt('Edit the priority (low, medium, high)', priority);
    if (newPriority !== null && (newPriority === 'low' || newPriority === 'medium' || newPriority === 'high')) {
        const todoIndex = categories[selectedCategory].findIndex(todo => todo.text === todoContent.textContent);
        categories[selectedCategory][todoIndex].priority = newPriority;
        li.className = newPriority;
    }
}
