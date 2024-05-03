const mobileNumber = document.querySelector('#mobileNumber');
let previousValue = ''
mobileNumber.addEventListener('input', (e) => {
    let inputValue = e.target.value;


    if (/^\d+$/.test(inputValue)) {
        mobileNumber.value = inputValue;
    } else {
        mobileNumber.value = inputValue.slice(0, inputValue.length - 1)
    }


    let firstThreeDigits;
    let nextSixDigits;
    if (inputValue.length === 4 && previousValue.length < inputValue.length) {
        firstThreeDigits = inputValue.slice(0, 3);
        nextSixDigits = inputValue.slice(3, inputValue.length)
        mobileNumber.value = `+(${firstThreeDigits}) - ${nextSixDigits}`
    } else if (inputValue.length === 9 && previousValue.length > inputValue.length) {
        mobileNumber.value = `${inputValue.slice(2, 5)}`
    }

    previousValue = inputValue;
    console.log(previousValue)
});
