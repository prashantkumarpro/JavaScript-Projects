const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const counterValue = document.querySelector('#counter_value');
const restBtn = document.querySelector('#rest');
const inputElement = document.querySelector('#input_value');



// update counter
function updateCounter(newValue) {
    counterValue.innerText = newValue;
}

// increment value 
incrementBtn.addEventListener('click', function () {
    const inputValue = inputElement.value;
    const inputNumber = parseInt(inputValue);
    if (!isNaN(inputNumber)) {
        updateCounter(parseInt(counterValue.innerText) + inputNumber)
    } else {
        updateCounter(parseInt(counterValue.innerText) + 1)
    }
})

// decrement vlaue 
decrementBtn.addEventListener('click', function () {
    inputValue = inputElement.value;
    inputNumber = parseInt(inputValue);
    if (!isNaN(inputNumber)) {
        updateCounter(parseInt(counterValue.innerText) - inputNumber)
    } else {
        updateCounter(parseInt(counterValue.innerText) - 1)
    }
})

// reset the value 
restBtn.addEventListener('click', function () {
    updateCounter(0)
})

