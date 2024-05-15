const typingText = document.querySelector('.typingText');
const words = ['Developer.', 'Coder.', 'Teacher.', 'Programmer.']
let wordIndex = 0;
let charIndex = 0;
let skipUpdater = 0;

function tyepdText() {

    if (words[wordIndex].length > charIndex) {
        typingText.innerText += words[wordIndex][charIndex]
        charIndex++;
    }
    else {
        charIndex = 0
        typingText.innerText = ''
        wordIndex++
    }
    if (words.length === wordIndex) {
        wordIndex = 0;
    }
    if (charIndex === words[wordIndex].length) {
        
    }



}

let myIntervelId = setInterval(tyepdText, 200)













