document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            // Add event listener to delete button
            const deleteBtn = taskItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function() {
                taskItem.remove();
            });
        } else {
            alert('Please enter a task!');
        }
    });
});
