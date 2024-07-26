document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText) {
        addTask(taskText);
        document.getElementById('new-task').value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('complete');
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(completeBtn);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
}
