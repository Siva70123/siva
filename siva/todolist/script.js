document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('todo-input');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const todoList = document.getElementById('todo-list');

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${taskValue}
            <button class="delete-btn">Delete</button>
        `;

        // Add delete functionality to the new task
        listItem.querySelector('.delete-btn').addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        todoList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    }
});
