const uploadButton = document.querySelector('#file_uploade');
uploadButton.addEventListener('change', function (event) {
    console.log(event.target.files[0].name)
    const file = event.target.files[0];
    let clutter = '';
    if (file) {
        clutter = `<p> ${file.name}</p>`
        document.querySelector('.file').innerHTML = clutter;
        
    } else {
        console.log('file is not selected')
    }
})

