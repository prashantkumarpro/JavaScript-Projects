// Stopwatch timer elements and values
const timerContent = document.querySelector('#timer');
const secondsText = document.querySelector('#sec');
const minutesText = document.querySelector('#min');
const hoursText = document.querySelector('#hrs');
const hoursOptions = document.querySelector('#hours-option');
const hoursElem = document.querySelector('#hours-elem');
const minutesOptions = document.querySelector('#minutes-option');
const minutesElem = document.querySelector('#minutes-elem');
const secondsOptions = document.querySelector('#seconds-option');
const secondsElem = document.querySelector('#seconds-elem');
const startTimer = document.querySelector('#start')
const cancelTimer = document.querySelector('#cancel')
let minutes, hours, seconds;
let myInterval;

// Get all select elements in the document and attach an input event listener to each one
document.querySelectorAll('select')
    .forEach(selectedElem => {
        selectedElem.addEventListener('input', function () {
            if (this.id === "hours-option") {
                hours = this.value;
                hoursText.innerText = hours;
            }

            if (this.id === "minutes-option") {
                minutes = this.value
                minutesText.innerText = minutes;
            }

            if (this.id === "seconds-option") {
                seconds = this.value;
                secondsText.innerText = seconds;
            }

        })
    })


// Loop to populate the hours dropdown menu with options ranging from 23 to 0
for (let index = 23; index >= 0; index--) {
    index = index < 10 ? "0" + index : index;
    hoursElem.insertAdjacentHTML('afterend', `<option value="${index}">${index}</option>`);
}

// Loop to populate the minutes and seconds dropdown menus with options ranging from 59 to 0
for (let index = 59; index >= 0; index--) {
    index = index < 10 ? "0" + index : index;
    minutesElem.insertAdjacentHTML('afterend', `<option value="${index}">${index}</option>`);
    secondsElem.insertAdjacentHTML('afterend', `<option value="${index}">${index}</option>`);
}


// Function to handel the stopwatch 
function handelStopWatch() {

    // Check if all time components (hours, minutes, and seconds) are falsy
    if (!hours || !minutes || !seconds) {
        alert('please select vaild time')
        return;
    }
    if (minutes == "" || hours == "" || seconds == "") {
        alert('please select vaild time')
        return;
    }

    if (hours >= 0 && minutes >= 0 && seconds >= 0) {

        // interval for stop watch
        myInterval = setInterval(() => {

            if (seconds > 0) { // if seconds > 0 then seconds = seconds - 1
                seconds--;
                seconds = seconds < 10 ? "0" + seconds : seconds; // If seconds have only one digit, add a zero in front
                secondsText.innerText = seconds;
            } else if (minutes > 0 && seconds == 0) {
                minutes--; // if minutes > 0 & seconds = 0 then minutes = minutes - 1
                seconds = 59;
                minutes = minutes < 10 ? "0" + minutes : minutes; // If minutes have only one digit, add a zero in front
                minutesText.innerText = minutes;
                secondsText.innerText = seconds;
            } else if (hours > 0 && minutes == 0 && seconds == 0) {

                hours--; // if hours is > 0 (1,2,...) & minutes = 0 & seconds = 0 then hours = hours - 1
                hours = hours < 10 ? "0" + hours : hours;
                seconds = 59; // replace the value of seconds 0 to 59
                minutes = 59; // replace the value of minutes 0 to 59

                // display the values of minutes, hours, and seconds
                hoursText.innerText = hours;
                minutesText.innerText = minutes
                secondsText.innerText = seconds
            } else {
                seconds = secondsOptions.value;
                secondsText.innerText = secondsOptions.value;
                minutes = minutesOptions.value;
                minutesText.innerText = minutesOptions.value;
                hours = hoursOptions.value;
                hoursText.innerText = hoursOptions.value;

                alert('Time is up')
                clearInterval(myInterval);
                enable(startTimer);
                disable(cancelTimer);
                enable(minutesOptions);
                enable(hoursOptions);
                enable(secondsOptions);
            }
        }, 1000);

        disable(hoursOptions)
        disable(minutesOptions)
        disable(secondsOptions)
        disable(startTimer)
        enable(cancelTimer)
    }


}

// Function to disable the element 
function disable(element) {
    element.disabled = true;
}

// Function to enable the element 
function enable(element) {
    element.disabled = false;
}

// Function to cancel the  stopwatch 
function handelcancelTimer() {
    clearInterval(myInterval)
    enable(startTimer);
    disable(cancelTimer)

    // make the value empty of minutes, seconds, hours
    minutes = '';
    seconds = '';
    hours = '';

    seconds = secondsOptions.value;
    secondsText.innerText = secondsOptions.value;
    minutes = minutesOptions.value;
    minutesText.innerText = minutesOptions.value;
    hours = hoursOptions.value;
    hoursText.innerText = hoursOptions.value;

    // // update the text of hours, minutes, and seconds
    // hoursText.innerText = 'Hrs';
    // minutesText.innerText = 'Min';
    // secondsText.innerText = 'Sec';
    // // update the value of selects
    // hoursOptions.selectedIndex = 0;
    // minutesOptions.selectedIndex = 0;
    // secondsOptions.selectedIndex = 0;


    enable(minutesOptions);
    enable(hoursOptions);
    enable(secondsOptions);


}



// Attach click events to startTimer and cancelTimer to trigger their respective handlers
startTimer.addEventListener('click', handelStopWatch)
cancelTimer.addEventListener('click', handelcancelTimer)