const taskContainer = document.querySelector('.task_container');
const inputElement = document.querySelector('input[type="text"]');
const addTaskButton = document.querySelector('#addTask')
let inputElementValue;

// Retrieve existing movies or initialize an empty array
let taskArray = JSON.parse(localStorage.getItem("items")) || [];

if (taskArray) {
    taskArray.forEach((item, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('task_box');
        taskDiv.id = index;

        // Create task text element 
        let taskTextElement = document.createElement('p');
        taskTextElement.classList.add('task');
        taskTextElement.textContent = taskArray[index];

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
        taskContainer.append(taskDiv)


        // Function to the edit task
        editButton.addEventListener('click', function(){
            if (this.classList.contains('edit')) {
                inputElement.value = this.parentElement.parentElement.children[0].textContent;
                this.classList.remove('edit');
                this.classList.add('update');
                this.textContent = 'Update';
                inputElement.focus()
                disabled(deleteButton);
                disabled(addTaskButton);
            } else {
                let updateElem = this.parentElement.parentElement.children[0];

                let index = taskArray.indexOf(updateElem.textContent);
                taskArray[index] = inputElementValue;
                let updatedText = taskArray[index]

                // update the text
                updateElem.textContent = updatedText;

                // Save the updated text inside the taskArray
                localStorage.setItem('items', JSON.stringify(taskArray))
                this.classList.remove('update')
                this.classList.add('edit');
                this.textContent = 'Edit';


                inputElement.value = '';
                enabled(deleteButton);
                enabled(addTaskButton);
            }   
        }) 

        deleteButton.addEventListener('click', function () {

            this.parentElement.parentElement.remove();

            let itemText = this.parentElement.parentElement.children[0].textContent

            let deltedTask = taskArray.filter((task) => task !== itemText)
            
            taskArray = deltedTask
          
            localStorage.setItem('items', JSON.stringify(taskArray))

        })
    })


}

// event listener to get typed input val 
inputElement.addEventListener('input', function () {
    inputElementValue = this.value;
    enabled(addTaskButton)

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

        // Add new task to the taskArray
        taskArray.push(inputElementValue);

        // Save the updated taskArray
        localStorage.setItem("items", JSON.stringify(taskArray));


        displayTheTask()

        // Clear input field
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
    taskContainer.append(taskDiv)


    // Function to the edit task
    function editTheTask() {

        if (this.classList.contains('edit')) {
            inputElement.value = this.parentElement.parentElement.children[0].textContent;
            this.classList.remove('edit');
            this.classList.add('update');
            this.textContent = 'Update';
            inputElement.focus()
            disabled(deleteButton);
            disabled(addTaskButton);
        } else {
            let updateElem = this.parentElement.parentElement.children[0];

            let index = taskArray.indexOf(updateElem.textContent);
            taskArray[index] = inputElementValue;
            let updatedText = taskArray[index]

            // update the text
            updateElem.textContent = updatedText;

            // Save the updated text inside the taskArray
            localStorage.setItem('items', JSON.stringify(taskArray))
            this.classList.remove('update')
            this.classList.add('edit');
            this.textContent = 'Edit';


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
        let deletedTask = taskArray.filter(item => item !== taskText)
        taskArray = deletedTask;

        // save the updated task
        localStorage.setItem('items', JSON.stringify(taskArray))
    }

    // Event listener to edit and delete the task
    deleteButton.addEventListener('click', deletTheTask);
    editButton.addEventListener('click', editTheTask);

}

addTaskButton.addEventListener('click', addTheTask)

let arr = [3, 55, 66, 33, 99];

let item = arr.indexOf(55)
console.log(item)
arr[item] = '66';
item = arr[item]
console.log(item)