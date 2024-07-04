/* styles/main.css */

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

.new-task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.new-task input, .new-task select, .new-task button {
    padding: 0.5rem;
    margin-right: 0.5rem;
}

.new-task input[type="text"] {
    flex: 1;
}

.task-list ul {
    list-style: none;
    padding: 0;
}

.task-list li {
    background: #f9f9f9;
    padding: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
}

.task-list li.low {
    border-left: 4px solid green;
}

.task-list li.medium {
    border-left: 4px solid orange;
}

.task-list li.high {
    border-left: 4px solid red;
}

.task-list button {
    background: none;
    border: none;
    cursor: pointer;
    color: #ff6b6b;
}

