let tasks = [];


function task(name, completed) {
    this.name = name,
    this.completed = false
}
// task = {
//     name: '',
//     completed: false
// }

function pushNewTask(name) {
    if (name === '') { console.log('У задачи должно быть название') }
    else {
        let newTask = new task(name)
        tasks.push(newTask)
    // task = JSON.parse(JSON.stringify(task))
    // task.name = name
    // tasks.push(task)
    console.log(`Задача ${name} добавлена`)}
}
pushNewTask('1')
pushNewTask('2')
pushNewTask('3')
pushNewTask('4')
pushNewTask('5')

function findTask(name) {
    return tasks.find((item) => {
        return item.name === name;
    })
}

function checkTask(taskName) {
    if (tasks.includes(findTask(taskName))) {
        return findTask(taskName)
    } else {

        console.log('Задача не найдена')
    }
}






function completeTask(taskName) {
    let task = checkTask(taskName)
    task.completed = true
    console.log(`Задача ${taskName} Выполнена`)
}

function deleteTask(taskName) {
    let taskIndex = tasks.indexOf(checkTask(taskName))
    console.log(taskIndex)
    if (taskIndex === -1) {
        console.log('Данной задачи не существует')
    } else {
        tasks.splice (taskIndex, 1)
    }
}

console.log(tasks)
completeTask('1')
console.log(tasks)

let allNameTasks = tasks.map(function(task) {
    let string = null;
    if (task.completed === true) {
        string = "Задача - " + task.name + " Состояние - выполнена"
    } else {
        string = "Задача - " + task.name + " Состояние - не выполнена"
    }
    
    return string
})

function showAllTasks () {
    console.log(allNameTasks)
}

showAllTasks()


