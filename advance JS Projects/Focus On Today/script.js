const taskContainer = document.querySelector('.task_container');
const inputElement = document.querySelector('input[type="text"]');
const addTaskButton = document.querySelector('#addTask')

let installPrompt = null;
const installButton = document.querySelector('#install');
const installContainer = document.querySelector('#install_container');
const closeBtn = document.querySelector('#close');

window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installContainer.removeAttribute("hidden");
});


installButton.addEventListener("click", async () => {
    if (!installPrompt) {
        return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    installPrompt = null;
    installContainer.setAttribute("hidden", "");
});


closeBtn.addEventListener('click', function () {
    installContainer.setAttribute("hidden", "");
})

// Retrieve existing task or initialize an empty array
let taskArray = JSON.parse(localStorage.getItem("items")) || [];

taskArray.forEach(task => displayTheTask(task));

// event listener to get typed input value 
inputElement.addEventListener('input', function () {
    enabled(addTaskButton)
})

// Function to add the task 
function addTheTask() {

    if (inputElement.value.trim() === '') {
        alert('enter the task')
        return
    } else {
        let taskText = inputElement.value.trim()
        let taskObj = { text: taskText, completedTask: '' }

        // Display the task 
        displayTheTask(taskObj)

        // Add new task to the taskArray
        taskArray.push(taskObj);

        // Save the updated taskArray
        localStorage.setItem("items", JSON.stringify(taskArray));

        // Clear input field
        inputElement.value = ''
    }
}

// Function to display the task
function displayTheTask(taskObj) {
    // create the task div
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task_box');

    // Create task text element 
    let taskTextElement = document.createElement('p');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskObj.text;
    if (taskObj.completedTask === 'task-completed') taskTextElement.classList.add(taskObj.completedTask);

    // Create icon div
    let iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');

    // Create  edit button 
    let editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit'

    // Create  delete button 
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete'

    // Append all elements
    taskDiv.append(taskTextElement)
    taskDiv.append(iconsDiv)
    iconsDiv.append(editButton)
    iconsDiv.append(deleteButton)
    taskContainer.append(taskDiv);


    // when doubble click on task this will show as the task is completed
    taskDiv.addEventListener('dblclick', function () {
        const taskTextElement = this.children[0];
        if (!taskTextElement.classList.contains('task-completed')) {
            taskTextElement.classList.add('task-completed')
            taskObj.completedTask = 'task-completed'
            localStorage.setItem('items', JSON.stringify(taskArray))
        } else {
            taskTextElement.classList.remove('task-completed')
            taskObj.completedTask = ''
            localStorage.setItem('items', JSON.stringify(taskArray))
        }
    })

    // Function to the edit task
    function editTheTask() {

        if (editButton.classList.contains('edit')) {
            inputElement.value = editButton.parentElement.parentElement.children[0].textContent;
            editButton.classList.remove('edit');
            editButton.classList.add('update');
            editButton.textContent = 'Update';
            inputElement.focus()
            disabled(deleteButton);
            disabled(addTaskButton);
        } else if (editButton.classList.contains('update')) {
            let updateElem = editButton.parentElement.parentElement.children[0];

            taskArray.forEach(task => {
                if (task.text === updateElem.textContent) {
                    task.text = inputElement.value;
                    updateElem.textContent = task.text;
                }
            })


            // Save the updated text inside the taskArray
            localStorage.setItem('items', JSON.stringify(taskArray))
            editButton.classList.remove('update')
            editButton.classList.add('edit');
            editButton.textContent = 'Edit';

            inputElement.value = '';
            enabled(deleteButton);
            enabled(addTaskButton);
        }
    }

    // Function to the delet task
    function deletTheTask() {
        this.parentElement.parentElement.remove()

        let taskText = this.parentElement.previousSibling.textContent

        // remove the task from taskArray
        let deletedTask = taskArray.filter(item => item.text !== taskText)
        taskArray = deletedTask;

        // save the updated task
        localStorage.setItem('items', JSON.stringify(taskArray))
    }

    // Event listener to edit and delete the task
    deleteButton.addEventListener('click', deletTheTask);
    editButton.addEventListener('click', editTheTask);

}

// Function to disable button
function disabled(elem) {
    elem.disabled = true;
}

// Function to enable button
function enabled(elem) {
    elem.disabled = false;
}

//  Event listener on add button  on click
addTaskButton.addEventListener('click', addTheTask)



