// script.js
document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task-input');
    const importanceLevel = document.getElementById('importance-level');
    const taskList = document.getElementById('task-list');
    
    const taskText = taskInput.value;
    const importance = importanceLevel.value;
    
    const li = document.createElement('li');
    li.className = importance;
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">✔</button>
    `;
    
    taskList.appendChild(li);
    
    taskInput.value = '';
});

document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('complete-btn')) {
        const li = e.target.parentElement;
        li.classList.toggle('completed');
    }
});