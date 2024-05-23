const showToastButton = document.querySelector('#show-toast');
const toastBox = document.querySelector('.toast');
const durationElem = document.querySelector('#durations');
const selectedMsg = document.querySelector('#selected-msg')
const toastContaner = document.querySelector('.toast-container');
const inputText = document.querySelector('input[type="text"]')
const rightLeft = document.querySelector('#right-left');
const bottomTop = document.querySelector('#bottom-top');
let duration = durationElem.valueAsNumber * 50;


// Function to handle show Toast button 
function handleShowToast() {
    // create a div for toast
    const newToast = document.createElement('div');
    newToast.innerHTML = `<p>${inputText.value}</p>`
    newToast.classList.add('toast');

    // create a span element 
    const closeToast = document.createElement('span');
    closeToast.innerHTML = '✕'
    closeToast.classList.add('close-toast')
    newToast.append(closeToast);
    toastContaner.append(newToast);

    // Function to remove the toast
    function removeToast() {
        if (toastContaner.classList.contains('right')) {
            newToast.classList.add('go-right')
        } else {
            newToast.classList.add('go-left')
        }

        setTimeout(function () {
            newToast.remove()
        }, 100)
    }

    // Event listner to close the toast 
    closeToast.addEventListener('click', function () {
        removeToast()
    })

    // auto remove the toast after custom duration
    setTimeout(function () {
        removeToast()
    }, duration)


    if (selectedMsg.value === 'Success') {
        newToast.classList.add('success');
    } else if (selectedMsg.value === 'Error') {
        newToast.classList.add('error');
    } else if (selectedMsg.value === 'Warning') {
        newToast.classList.add('warning');
    } else if (selectedMsg.value === 'Info') {
        newToast.classList.add('info');
    }

    if (rightLeft.value === 'Right') {
        toastContaner.classList.add('right')
    } else {
        toastContaner.classList.remove('right')
    }

    if (bottomTop.value === 'Bottom') {
        toastContaner.classList.add('bottom')
    } else {
        toastContaner.classList.remove('bottom')
    }
}
// Event listner to show the toast
showToastButton.addEventListener('click', handleShowToast);












