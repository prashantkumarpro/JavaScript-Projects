const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterValue = document.querySelector('#counter_value');
const restBtn = document.querySelector('#rest');
const inputElement = document.querySelector('#input_value');
let value = 0;
let inputValue;
let inputNumber;

// increment value 
function increment() {
    incrementBtn.addEventListener('click', function () {
        inputValue = inputElement.value;
        inputNumber = parseInt(inputValue);
        if (inputNumber === 0) {
            value = 0;
            counterValue.innerHTML = value;
        } else if (inputNumber !== 0) {
            value += inputNumber
            counterValue.innerHTML = value;
        } else {
            value += 1;
            counterValue.innerHTML = value;
        }

    })
}

// decrement vlaue 
function decrement() {
    decrementBtn.addEventListener('click', function () {
        inputValue = inputElement.value;
        inputNumber = parseInt(inputValue);
        if (inputNumber === 0) {
            value = 0;
            counterValue.innerHTML = value;
        } else if (inputNumber !== 0) {
            value -= inputNumber;
            counterValue.innerHTML = value;
        } else {
            value -= 1;
            counterValue.innerHTML = value;
        }

    })
}

// rest the value 
function restValue() {
    restBtn.addEventListener('click', function () {

        value = 0;
        counterValue.innerHTML = 0;
    })
}


increment()
decrement()
restValue()