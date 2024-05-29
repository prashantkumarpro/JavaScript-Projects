const boxElements = document.querySelectorAll('.box');
const searchName = document.querySelector('input[type="text"]');

// Initialize an empty array to store the usernames
const fruitsNames = []

boxElements.forEach(function (box) {
    const fruitName = box.textContent.toLowerCase()
    fruitsNames.push(fruitName)
})

// Add an event listener to the search input to listen for 'input' events
searchName.addEventListener('input', (e) => {
    const inputVal = e.target.value.toLowerCase();

    // If input is emtyp display all boxes and return early
    if (inputVal === '') {
        boxElements.forEach(box => {
            box.style.display = ''
        })
        return;
    }

    const filterdFruit = fruitsNames.filter(item => item.toLowerCase().includes(inputVal))
    for (let index = 0; index < fruitsNames.length; index++) {

        if (filterdFruit.includes(fruitsNames[index])) {
            boxElements[index].style.display = '';
        } else {
            boxElements[index].style.display = 'none';
        }
    }
})


