const taskContainer = document.querySelector('.task_container');
const inputElement = document.querySelector('input[type="text"]');
const addTaskButton = document.querySelector('#addTask')
let inputElementValue;
let submitTaskBtn;

// event listener to get typed input val 
inputElement.addEventListener('input', function () {
    inputElementValue = this.value;
})

// Function to disable button
function disabled(elem) {
    elem.disabled = true;
}

// Function to enable button
function enabled(elem) {
    elem.disabled = false;
}

// Function to add the task 
function addTheTask() {

    if (inputElement.value === '') {
        alert('enter the task')
        return
    } else {
        displayTheTask()
        // Clear the input box
        inputElement.value = ''
    }
}

// Function to display the task
function displayTheTask() {
    // create the task div
    let taskDiv = document.createElement('div');
    taskDiv.classList.add('task_box');

    // Create task text element 
    let taskTextElement = document.createElement('p');
    taskTextElement.classList.add('task');
    taskTextElement.textContent = inputElementValue;

    // Create icon div
    let iconsDiv = document.createElement('div');
    iconsDiv.classList.add('icons');


    // Create span for edit button 
    let editButton = document.createElement('span');
    editButton.classList.add('edit');
    editButton.textContent = 'Edit'

    // Create span for delete button 
    let deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete'

    // Append all elements
    taskDiv.append(taskTextElement)
    taskDiv.append(iconsDiv)
    iconsDiv.append(editButton)
    iconsDiv.append(deleteButton)
    taskContainer.append(taskDiv)




    // Function to the edit task
    function editTheTask() {

        if (this.classList.contains('edit')) {
            inputElement.value = this.parentElement.parentElement.children[0].textContent;
            this.classList.remove('edit')
            this.classList.add('submit');
            this.textContent = 'Submit'

            disabled(deleteButton)
            disabled(addTaskButton)

        } else {
            this.parentElement.parentElement.children[0].textContent = inputElementValue;
            this.classList.remove('submit')
            this.classList.add('edit');
            this.textContent = 'Edit'

            inputElement.value = ''
            enabled(deleteButton)
            enabled(addTaskButton)

        }
    }


    // Function to the delet task
    function deletTheTask() {
        this.parentElement.parentElement.remove()
    }

    // Event listener to edit and delete the task
    deleteButton.addEventListener('click', deletTheTask);
    editButton.addEventListener('click', editTheTask);

}

addTaskButton.addEventListener('click', addTheTask)

