// Selecting DOM elements
const textInputs = document.querySelectorAll('input[type="text"]');
const billInput = document.querySelector('#billInput');
const selectTipsBtn = document.querySelectorAll('.selectTip');
const customTipInput = document.querySelector('#custom_Tip');
const noOfPeopleInput = document.querySelector('#noOfPeople');
const generateBillBtn = document.querySelector('#generateBill');
const restBtn = document.querySelector('#rest');

// Initializing variables
let billInputValue;
let noOfPeopleValue;
let selectedTipAmount = 0;
let customTipAmount = 0;
let currentTipAmount = 0;


// Event listener for text input fields
textInputs.forEach(function (input) {
    input.addEventListener('input', function () {
        let inputValue = this.value;
        let numbersOnly = /^\d+$/;
        if (!inputValue.match(numbersOnly)) {
            // Clear input if non-numeric value is entered
            this.value = '';

            if (this.id === 'billInput') {
                // Disable relevant inputs and buttons if bill input is empty
                disable(customTipInput)
                disable(noOfPeopleInput)
                disableTipButtons()
            }


            if (this.id === 'custom_Tip') {
                // Disable Generate Bill button if custom tip input is empty
                disableGenerateBillBtn()
            }

            if (this.id === 'noOfPeople') {
                // Disable Generate Bill button if number of people input is empty
                disableGenerateBillBtn()
            }
        } else {

            if (this.id === 'billInput') {
                // Enable relevant inputs and buttons if bill input is valid
                billInputValue = parseInt(this.value);
                enabled(customTipInput)
                enabled(noOfPeopleInput)
                enableTipButtons()
            }

            if (this.id === 'custom_Tip') {
                // Enable Generate Bill button if custom tip input and number of people are valid
                handleSelectedTip(0);
                selectTipsBtn.forEach(el => el.classList.remove('active'));
                customTipAmount = parseInt(this.value);
                currentTipAmount = customTipAmount;
                if (noOfPeopleValue > 0 && currentTipAmount > 0) {
                    enableGenerateBillBtn()
                }
                if (noOfPeopleInput.value === '' && currentTipAmount > 0) {
                    // Disable Generate Bill button if number of people input value is empty and tip are vaild
                    disableGenerateBillBtn()
                }
            }

            if (this.id === 'noOfPeople') {
                // Enable Generate Bill button if number of people input and custom tip are valid
                noOfPeopleValue = parseInt(this.value);
                if (noOfPeopleValue > 0 && currentTipAmount > 0) {
                    enableGenerateBillBtn()

                }
                // Disable Generate Bill button if number of people input is 0
                if (noOfPeopleValue === 0) {
                    disableGenerateBillBtn()
                }
            }


        }
    });
});





// Event listener for tip buttons
selectTipsBtn.forEach((tip) => {

    tip.addEventListener('click', (e) => {

        selectedTipAmount = parseInt(e.target.value);
        currentTipAmount = selectedTipAmount;
        handleSelectedTip(currentTipAmount);
        selectTipsBtn.forEach(el => el.classList.remove('active'));
        e.target.classList.add('active');
        if (customTipInput.value !== '') {
            // Clear custom tip input and reset custom tip amount if a tip button is clicked
            customTipInput.value = '';
            customTipAmount = 0;
            currentTipAmount = selectedTipAmount;
            handleSelectedTip(currentTipAmount);

            e.target.classList.remove('active');
        }

        if (customTipInput.value === '' && e) {
            e.target.classList.add('active');
        }

        if (noOfPeopleValue > 0 && currentTipAmount > 0) {
            // Enable Generate Bill button if number of people input and tip are valid
            enableGenerateBillBtn()
        }

        if (noOfPeopleInput.value === '' && currentTipAmount > 0) {
            // Disable Generate Bill button if number of people input is empty
            disableGenerateBillBtn()
        }


    })
});



// Function to handle disable tip buttons
function disableTipButtons() {
    selectTipsBtn.forEach(tipButton => {
        disable(tipButton)
        tipButton.classList.remove('enable')
    })
}

// Function to handle enable tip buttons
function enableTipButtons() {
    selectTipsBtn.forEach(tipButton => {
        enabled(tipButton)
        tipButton.classList.add('enable')
    })
}

// Function to enable generate bill button
function enableGenerateBillBtn() {
    enabled(generateBillBtn);
    generateBillBtn.classList.add('enable');
}
// Function to disable generate bill button
function disableGenerateBillBtn() {
    disable(generateBillBtn);
    generateBillBtn.classList.remove('enable');
}
// Function to handle selected tip
function handleSelectedTip(currentTipAmount) {
    // console.log(currentTipAmount)
};

// Function to generate bill
function generateBill() {
    let resultOfTipAmount = (billInputValue * currentTipAmount) / 100;
    let resultOfTotalAmount = billInputValue + resultOfTipAmount;
    let resultOfEachPersonBill = resultOfTotalAmount / noOfPeopleValue;
    // Updating UI with bill details
    document.querySelector('#tipAmount').innerHTML = `₹ ${resultOfTipAmount.toFixed(2)}`;
    document.querySelector('#totalAmount').innerHTML = `₹ ${resultOfTotalAmount.toFixed(2)}`
    document.querySelector('#eachPersonBill').innerHTML = `₹ ${resultOfEachPersonBill.toFixed(2)}`
    enabled(restBtn);
};


// Event listener for Generate Bill button
generateBillBtn.addEventListener('click', generateBill);

// Event listener for Reset button
restBtn.addEventListener('click', function () {
    selectTipsBtn.forEach(el => { el.classList.remove('active') });
    resetTheValue()
    disable(restBtn)
});

// Function to reset input values and disable relevant elements
function resetTheValue() {
    document.querySelector('#tipAmount').innerText = ''
    document.querySelector('#totalAmount').innerText = ''
    document.querySelector('#eachPersonBill').innerText = ''
    billInput.value = '';
    customTipInput.value = '';
    noOfPeopleInput.value = '';
    currentTipAmount = 0;
    customTipAmount = 0;
    noOfPeopleValue = 0;
    disable(customTipInput)
    disable(noOfPeopleInput)
    disableTipButtons()
    disableGenerateBillBtn()
};

// Function to enable an element
function enabled(element) {
    element.disabled = false;
};

// Function to disable an element
function disable(element) {
    element.disabled = true;
};
