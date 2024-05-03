const parentCheckBox = document.querySelector('#parentCheckBox');
const container = document.querySelector('.container');
const contatnTheme = document.querySelector('.contatnTheme');

parentCheckBox.addEventListener('click', function () {
    if (parentCheckBox.checked) {
        contatnTheme.click();
        container.classList.add('theme')

    } else {
        contatnTheme.click();
        container.classList.remove('theme')

    }
})