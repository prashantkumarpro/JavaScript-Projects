const inputText = document.querySelector('.inputText');

inputText.addEventListener('input', handleTextTransform);

function handleTextTransform(e) {
    toUpperCase(e);
    toLowerCase(e);
    toCamelCase(e);
    toPascalCase(e);
    toSnakeCase(e);
    toKebabCase(e);
    toTrimmed(e);
}


// Text Transformers functions

// Text transform to UpperCase
function toUpperCase(e) {
    let text = document.querySelector('.upperCase');
    text.innerText = (e.target.value).toUpperCase();
}

// Text transform to LowerCase
function toLowerCase(e) {
    let text = document.querySelector('.lowerCase');
    text.innerText = (e.target.value).toLowerCase();
}

// Text transform to CamelCase
function toCamelCase(e) {
    let userInput = e.target.value;
    let splitString = userInput.split(" ");

    let camelCaseString = splitString.map((word, index) => {
        return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');

    let text = document.querySelector('.camelCase');
    text.textContent = camelCaseString;
}

// Text transform to PascalCase
function toPascalCase(e) {
    let userInput = e.target.value;
    let splitString = userInput.split(" ");

    let PascalCase = splitString.map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');

    let text = document.querySelector('.PascalCase');
    text.textContent = PascalCase;

}

// Text transform to SnakeCase
function toSnakeCase(e) {
    let userInput = e.target.value;
    let splitString = userInput.trim().split(" ");

    let SnakeCase = splitString.map((word, index) => {
        return word.toLowerCase();
    }).join('_');

    let text = document.querySelector('.SnakeCase');
    text.textContent = SnakeCase;

}

// Text transform to KebabCase 
function toKebabCase(e) {
    let userInput = e.target.value;
    let splitString = userInput.trim().split(" ");

    let KebabCase = splitString.map((word, index) => {
        return word.toLowerCase();
    }).join('-')

    let text = document.querySelector('.KebabCase');
    text.textContent = KebabCase;

}

// Text transform to Trimed
function toTrimmed(e) {
    let inputText = e.target.value;
    // Replace all sequences of one or more spaces with an empty string
    let trimedText = inputText.replace(/ +/g, '');

    let text = document.querySelector('.trim');
    text.textContent = trimedText;
}



