const typingText = document.querySelector('.typingText');
const words = ['Developer.', 'Coder.', 'Teacher.']


let word = words[0];
let index = 0;

function typedAndRemove(word, index) {
    setInterval(() => {
        if (index < word.length) {
            typingText.innerHTML = typingText.innerHTML + word[index];
            index++;
        } 
        else {
            index = 0;
            typingText.innerHTML = "";

        }


    }, 200)
}
typedAndRemove(word, index)


// else if (index === word.length) {
//     typingText.innerHTML = typingText.innerHTML.slice(0, -1)
// }









