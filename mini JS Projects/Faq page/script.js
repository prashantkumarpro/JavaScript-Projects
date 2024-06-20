
const sections = document.querySelectorAll('.section')
    .forEach(section => {
        section.addEventListener('click', function (e) {
            if (e.currentTarget) {
                const contentElem = e.currentTarget.children[1];
                const signElem = e.currentTarget.children[0].children[1];

                if (contentElem.classList.contains('active')) {
                    contentElem.classList.remove('active')
                    contentElem.style.maxHeight = null;
                    signElem.innerText = '+'
                } else {
                    contentElem.classList.add('active')
                    contentElem.style.maxHeight = contentElem.scrollHeight + 'px'
                    signElem.innerText = '-'
                };
            }
        })
    })
