const generateMeme = document.querySelector('#generate-meme');
const memeContent = document.querySelector('.meme');

// Event listner for generateMeme button 
generateMeme.addEventListener('click', function () {
    getMeme()
})


// Generate the memes
function getMeme() {
    memeContent.innerHTML = `<h3 class='loading'>Loading</h3>`;

    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((res) => res.json())
        .then((data) => updateUI(data)) // Update the meme UI
        .catch((err) => {
         
            console.error('Error fetching meme:', err);
        });
}

function updateUI(data) {
    const { title, author, url } = data;
    memeContent.innerHTML = `<h2 class="heading">${title}</h2>
    <div class="meme_img">
        <img src="${url}" alt="">
    </div>
    <p>Meme by:${author}</p>`

}

getMeme()