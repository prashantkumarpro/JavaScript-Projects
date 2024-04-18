const calculateBMI = document.querySelector('#calculte_bmi');
const yourBMI = document.querySelector('#bmi');
const userHeight = document.querySelector('#user_height');
const userWeight = document.querySelector('#user_weight');



calculateBMI.addEventListener('click', () => {
    const heightValue = parseInt(userHeight.value) / 100; // convert height to meter
    const weightValue = parseInt(userWeight.value);

    if (!isNaN(heightValue) && !isNaN(weightValue) && heightValue > 0 && weightValue > 0) {
        let BMI = weightValue / (heightValue * heightValue)
        yourBMI.textContent = BMI.toFixed(1);
    } else {
        alert('Please enter valid height and weight values.')
    }
})
