let tasks = [
    { name: 1, description: 1234567890, isCompleted: true },
    { name: 2, description: 1234567890, isCompleted: false },
    { name: 3, description: 1234567890, isCompleted: true },
    { name: 4, description: 1234567890, isCompleted: false }
];

let btnNewTask = document.querySelector('.btnNewTask');
let taskContainer = document.querySelector('.task-container');
let inputNameTask = document.querySelector('.inputNameTask');
let btnAllTask = document.querySelector('.show-all-task');
let btnCompTask = document.querySelector('.show-completed-task');
let btnUncompTask = document.querySelector('.show-uncompleted-task');

function getStatusString(isCompleted) {
    return isCompleted ? 'Выполнена' : 'Не выполнена';
}

function getStatus(isCompleted, name) {
    return isCompleted ? `<del>${name}</del>` : `${name}`;
}

   

function renderTask() {
    taskContainer.innerHTML = '';

    tasks.forEach((item, index) => {
        const card = `
            <li class='task-card'>
                <h3 class='card-title'>${getStatus(item.isCompleted, item.name)}</h3>
                <p class='card-desc'>${item.description}</p>
                <p class='card-task-status'>${getStatusString(item.isCompleted)}</p>
                <button class="btn-remove-task">Удалить</button>
                <button class="btn-change-status-task">Изменить статус задачи</button>
            </li>
        `;
        taskContainer.innerHTML += card;
    });

   
    const btnRemoveTasks = document.querySelectorAll('.btn-remove-task');
    const btnChangeStatusTasks = document.querySelectorAll('.btn-change-status-task');
    const descTaskText = document.querySelectorAll(".card-desc")


   
    descTaskText.forEach((text, index) => {
        text.addEventListener('dblclick', () => {
            let newDescription = prompt('Введите новое описание задачи', tasks[index].description);
            if (newDescription !== null && newDescription.trim() !== '') {
                tasks[index].description = newDescription.trim();
            }
            renderTask();
        });
    });


    
    btnRemoveTasks.forEach((button, index) => {
        button.addEventListener('click', () => {
            tasks.splice(index, 1);  
            renderTask();  
        });
    });

    
    btnChangeStatusTasks.forEach((button, index) => {
        button.addEventListener('click', () => {
            tasks[index].isCompleted = !tasks[index].isCompleted;  
            renderTask();  
        });
    });
}

function addNewTask(name) {
    tasks.push({
        name: name,
        description: 'Отсутсвует описание',
        isCompleted: false
    });
    renderTask();  
}

btnNewTask.addEventListener('click', () => {
    let nameTask = inputNameTask.value.trim();
    if (nameTask === '') {
        alert('Вы не указали имя задачи');
    } else {
        addNewTask(nameTask);
        inputNameTask.value = '';  
    }
});


btnCompTask.addEventListener('click', () => {
    const completedTasks = tasks.filter(item => item.isCompleted);
    renderFilteredTasks(completedTasks);
});

btnUncompTask.addEventListener('click', () => {
    const uncompletedTasks = tasks.filter(item => !item.isCompleted);
    renderFilteredTasks(uncompletedTasks);
});

btnAllTask.addEventListener('click', () => {
    renderTask();  
});


function renderFilteredTasks(filteredTasks) {
    taskContainer.innerHTML = '';  

    filteredTasks.forEach((item, index) => {
        const card = `
            <li class='task-card'>
                <h3 class='card-title'>${getStatus(item.isCompleted, item.name)}</h3>
                <p class='card-desc'>${item.description}</p>
                <p class='card-task-status'>${getStatusString(item.isCompleted)}</p>
                <button class="btn-remove-task">Удалить</button>
                <button class="btn-change-status-task">Изменить статус задачи</button>
            </li>
        `;
        taskContainer.innerHTML += card;
    });

    
    const btnRemoveTasks = document.querySelectorAll('.btn-remove-task');
    const btnChangeStatusTasks = document.querySelectorAll('.btn-change-status-task');
    const descTaskText = document.querySelectorAll(".card-desc");

    descTaskText.forEach((text, index) => {
        text.addEventListener('dblclick', () => {
            let newDescription = prompt('Введите новое описание задачи', tasks[index].description);
            if (newDescription !== null && newDescription.trim() !== '') {
                tasks[index].description = newDescription.trim();
            }
            renderTask();
        });
    });

    
    btnRemoveTasks.forEach((button, index) => {
        button.addEventListener('click', () => {
            const taskIndex = tasks.findIndex(task => task.name === filteredTasks[index].name);
            tasks.splice(taskIndex, 1);  
            renderTask();  
        });
    });

    
    btnChangeStatusTasks.forEach((button, index) => {
        button.addEventListener('click', () => {
            const taskIndex = tasks.findIndex(task => task.name === filteredTasks[index].name);
            tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;  
            renderTask();  
        });
    });
}


renderTask();
