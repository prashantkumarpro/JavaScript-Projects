const billINput = document.querySelector('#billINput');
const selectTipsBtn = document.querySelectorAll('.selectTip');
const customTipInput = document.querySelector('#custom_Tip');
const noOfPeopleInput = document.querySelector('#noOfPeople');
const generateBillInput = document.querySelector('#generateBill');
const restBtn = document.querySelector('#rest');

let billInputValue;
let noOfPeopleValue;
let selectedTipAmount = 0;
let customTipAmount = 0;
let currentTipAmount = 0;

const textInputs = document.querySelectorAll('input[type="text"]');


textInputs.forEach(function (input) {
    input.addEventListener('input', function () {
        let inputValue = this.value;
        let numbersOnly = /^\d+$/;
        if (!inputValue.match(numbersOnly)) {
            this.value = '';
            if (this.className.includes('billInput')) {
                disable(customTipInput)
                disable(noOfPeopleInput)
                selectTipsBtn.forEach((tip) => {
                    disable(tip);
                    tip.classList.remove('enable');
                })
            }
        } else {
            // Input is valid
            if (this.className.includes('billInput')) {
                billInputValue = parseInt(this.value);
                enabled(customTipInput)
                enabled(noOfPeopleInput)
                selectTipsBtn.forEach((tip) => {
                    enabled(tip)
                    tip.classList.add('enable');
                })
            }

            if (this.className.includes('custom_Tip')) {
                handleSelectedTip(0)
                customTipAmount = parseInt(this.value);
                currentTipAmount = customTipAmount;
            }

            if (this.className.includes('noOfPeople')) {
                noOfPeopleValue = parseInt(this.value);
                console.log(currentTipAmount)
            }
            if (currentTipAmount && noOfPeopleValue) {
                enabled(generateBillInput);
                generateBillInput.classList.add('enable');
            }

        }
    });
});


selectTipsBtn.forEach((tip) => {
    disableTipBtn(tip);
    enableTipBtn(tip);

    tip.addEventListener('click', (e) => {
        currentTipAmount = parseInt(e.target.value);
        handleSelectedTip(currentTipAmount)
    })
});

function disableTipBtn(tip) {
    disable(tip);
    tip.classList.remove('enable');
};

function enableTipBtn(tip) {
    enabled(tip);
    tip.classList.remove('enable');
};

function handleSelectedTip(currentTipAmount) {
    console.log(`This is selectedTipAmount ${currentTipAmount}`)
};

// generate bill 
function generateBill() {
    let resultOfTipAmount = (billInputValue * currentTipAmount) / 100;
    let resultOfTotalAmount = billInputValue + resultOfTipAmount;
    let resultOfEachPersonBill = resultOfTotalAmount / noOfPeopleValue;
    document.querySelector('#tipAmount').innerText = `₹ ${resultOfTipAmount.toFixed(2)}`
    document.querySelector('#totalAmount').innerText = `₹ ${resultOfTotalAmount.toFixed(2)}`
    document.querySelector('#eachPersonBill').innerText = `₹ ${resultOfEachPersonBill.toFixed(2)}`
    enabled(restBtn)


};


// click event on generat bill input button
generateBillInput.addEventListener('click', generateBill);

// rest the value input box and result amount to empty
restBtn.addEventListener('click', function () {
    resetTheValue()
    disable(restBtn)
});

function resetTheValue() {
    document.querySelector('#tipAmount').innerText = ''
    document.querySelector('#totalAmount').innerText = ''
    document.querySelector('#eachPersonBill').innerText = ''
    billINput.value = '';
    customTipInput.value = '';
    noOfPeopleInput.value = '';
    currentTipAmount = '';
    customTipAmount = '';
    noOfPeopleValue = '';
    disable(generateBillInput)
    disable(customTipInput)
    disable(noOfPeopleInput)
    generateBillInput.classList.remove('enable')
    selectTipsBtn.forEach((tip) => {
        disable(tip)
        tip.classList.remove('enable');
    })
};

// enable the input 
function enabled(element) {
    element.disabled = false;
};

// disable the input 
function disable(element) {
    element.disabled = true;
};
