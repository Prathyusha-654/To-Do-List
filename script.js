document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `<span>${taskText}</span><input type="text" style="display:none;"><button>Edit</button><button>Delete</button>`;
            taskList.appendChild(taskItem);
            taskInput.value = '';

            const [taskSpan, taskInputField, editBtn, deleteBtn] = taskItem.children;
            editBtn.onclick = () => {
                if (taskItem.classList.toggle('editing')) {
                    taskInputField.value = taskSpan.textContent;
                    editBtn.textContent = 'Save';
                    taskInputField.style.display = '';
                    taskSpan.style.display = 'none';
                } else {
                    taskSpan.textContent = taskInputField.value;
                    editBtn.textContent = 'Edit';
                    taskInputField.style.display = 'none';
                    taskSpan.style.display = '';
                }
            };

            deleteBtn.onclick = () => taskItem.remove();
            taskSpan.onclick = () => editBtn.click();
            taskInputField.onkeypress = event => { if (event.key === 'Enter') editBtn.click(); };
        } else alert('Please enter a task!');
    });
});
