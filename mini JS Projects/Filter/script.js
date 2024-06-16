const productsContainer = document.querySelector('.products-container');
const selectElem = document.querySelector('select');
const sortPriceElem = document.querySelector('.sort-price');


let products;
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {

        products = data;
        // Display all products initially
        displayProducts(products);

        // Add event listener for filtering
        selectElem.addEventListener('change', () => {
            if (selectElem.value === "All") {
                products = data;
                displayProducts(products);
            } else {
                const filteredPro = data.filter(item => selectElem.value.toLowerCase() === item.category)
                products = filteredPro;
                displayProducts(products)
            }
        });

        if (sortPriceElem.value === 'low to high') {
            const priceLowToHigh = products.sort((a, b) => b.price - a.price);
            displayProducts(priceLowToHigh)
        }

        // Add event listener for sorting price
        sortPriceElem.addEventListener('change', () => {
            if (sortPriceElem.value === 'low to high') {
                const priceLowToHigh = products.sort((a, b) => b.price - a.price);
                displayProducts(priceLowToHigh)
            } else {
                const priceHighToLow = products.sort((a, b) => a.price - b.price);
                displayProducts(priceHighToLow)
            }
        })

    })
    .catch(err => {
        console.error('Error fetching data:', err);
        productsContainer.textContent = 'Failed to load products. Please try again later.';
    });

function displayProducts(data) {

    // Clear previous products
    productsContainer.replaceChildren();

    data.forEach(product => {
        const { title, id, image, price } = product;

        const prductCard = `
        <div class="product" id=${id}>
                <img src=${image} alt="bag">
                <div class="content"> 
                    <p>${title.slice(0, 12)+ '...'}</p>
                    <p>$ ${price}</p>
                </div>
        </div>
        `
        productsContainer.insertAdjacentHTML("afterbegin", prductCard)

    })
}








