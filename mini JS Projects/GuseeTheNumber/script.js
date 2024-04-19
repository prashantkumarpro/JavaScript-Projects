const userInput = document.querySelector('.user_input');
const submit = document.querySelector('.submit');
const startGame = document.querySelector('.start_game');
const result = document.querySelector('.result');
const winMessage = document.querySelector('.win');

// Generate random number
let randomNum = Math.floor(Math.random() * 101);
// console.log(randomNum)
let userInputArray = [];

// Submit user value 
submit.addEventListener('click', function () {
    if (userInput.value === '') {
        alert("enter valid number")
        userInput.value = '';
        return;
    }

    const inputValue = parseInt(userInput.value);
    userInputArray.push(inputValue);
    userGuesses(userInputArray);

    if (randomNum == inputValue) {
        wonGame(result);
        disabled(submit);
        disabled(userInput);
        enabled(startGame);
    } else if (userInputArray.length == 5) {
        userInput.value = '';
        lostGame(randomNum);
        disabled(submit);
        enabled(startGame);
        disabled(userInput);
    } else if (inputValue < randomNum) {
        toLow(result);
    } else {
        toHigh(result);
    }
});

// Start game event
startGame.addEventListener('click', function () {
    randomNum = Math.floor(Math.random() * 101);
    console.log(randomNum);
    userInputArray = [];
    disabled(startGame);
    enabled(submit);
    enabled(userInput);
    resultDiv(result);
})

// Disable input field or button 
function disabled(element) {
    element.disabled = true;
}

// Enable input field or button 
function enabled(element) {
    element.disabled = false;
}

// User guesses numbers
function userGuesses(yourGussess) {
    document.querySelector('.guesses_number').innerHTML = `Your guesses: ${yourGussess}`;
    userInput.value = '';
}

// Lost the game
function lostGame(randomNum) {
    document.querySelector('.result').innerHTML = `You lost! The number was ${randomNum}`
}

// To high 
function toHigh(result) {
    result.innerHTML = "Too high!";
}

// To low
function toLow(result) {
    result.innerHTML = "Too low!";
}


// Won game
function wonGame(result) {
    result.innerHTML = "You got it! Congrats."
}

// Clear result and guesses display
function resultDiv(result) {
    result.innerHTML = "";
    document.querySelector('.guesses_number').innerHTML = "";
}