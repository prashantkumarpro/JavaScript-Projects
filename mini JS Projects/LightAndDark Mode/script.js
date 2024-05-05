const parentCheckBox = document.querySelector('#parentCheckBox');
const container = document.querySelector('.container');
const contatnTheme = document.querySelector('.contatnTheme');

const storedTheme = localStorage.getItem('theme')
if (storedTheme) {
    parentCheckBox.checked = true;
    contatnTheme.checked = true;
    container.classList.add(storedTheme)
}

parentCheckBox.addEventListener('click', function () {
    if (parentCheckBox.checked) {
        contatnTheme.checked = true;
        container.classList.add('dark')
        localStorage.setItem('theme', 'dark')

    } else {
        contatnTheme.checked = false;
        container.classList.remove('dark')
        localStorage.removeItem('theme');

    }
})