const msText = document.querySelector('#ms');
const hoursText = document.querySelector('.hours');
const minutesText = document.querySelector('.minutes');
const secondsText = document.querySelector('.seconds');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');

let ms = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let myIntervalId;




// Function to enable button
function enable(button) {
    button.disabled = false;
}

// Function to disable button
function disable(button) {
    button.disabled = true;
}

// Function to start stop watch 
function startStopWatch() {

    myIntervalId = setInterval(() => {
        if (ms >= 99) {
            //when if block is true then  given below code will excute after 10 ms
            ms = 0;
            sec++;
            if (sec > 59) {
                sec = 0;
                min++;
                if (min > 59) {
                    min = 0;
                    hrs++;
                }
            }
        } else {
            // when if block is false then given below code will ecute after 10ms
            ms++;
        }

        msText.innerText = ms < 10 ? "0" + ms : ms;
        secondsText.innerText = `${(sec < 10 ? "0" + sec : sec)}s`
        minutesText.innerText = `${(min < 10 ? "0" + min : min)}m:`
        hoursText.innerText = `${(hrs < 10 ? "0" + hrs : hrs)}h:`
    }, 10);


    enable(reset);
    disable(start)
}

// Function to reset stop watch 
function resetStopWatch() {
    clearInterval(myIntervalId);

    ms = 0;
    sec = 0;
    min = 0;
    hrs = 0;

    msText.innerText = `00`
    secondsText.innerText = `00`
    minutesText.innerText = `00:`
    hoursText.innerText = `00:`

    disable(reset)
    enable(start);
}



start.addEventListener('click', startStopWatch)
reset.addEventListener('click', resetStopWatch)
