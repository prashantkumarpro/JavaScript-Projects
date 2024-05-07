const parentCheckBox = document.querySelector('#parentCheckBox');
const container = document.querySelector('.container');
const contentTheme = document.querySelector('.contentTheme');

// stored dark in localStorage
const storedTheme = localStorage.getItem('theme');
const storedContantTheme = localStorage.getItem('contentDarkTheme');



if (storedContantTheme) {
    contentTheme.checked = storedContantTheme;
}

if (storedTheme) {
    parentCheckBox.checked = true;
    container.classList.add(storedTheme)
}

parentCheckBox.addEventListener('click', function () {
    if (parentCheckBox.checked) {
        contentTheme.checked = true;
        localStorage.setItem('contentDarkTheme', true)
        container.classList.add('dark')
        localStorage.setItem('theme', 'dark');
    } else {
        contentTheme.checked = false;
        container.classList.remove('dark')
        localStorage.removeItem('contentDarkTheme', true)
        localStorage.removeItem('theme');
    }
})

contentTheme.addEventListener('click', function () {
    if (contentTheme.checked) {
        localStorage.setItem('contentDarkTheme', true)
    } else {
        localStorage.removeItem('contentDarkTheme', true)
    }
})
