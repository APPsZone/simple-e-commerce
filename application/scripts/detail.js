console.log("Ini dari Detail")

window.onload = function() {
    consumedQueryParamsData();
};



function consumedQueryParamsData() {
    const searchURL = window.location.search;

    //<span class="material-icons-outlined">
    //star
    //</span>

    const queryParams = new URLSearchParams(searchURL);

    const productName = queryParams.get('name')
    const productPrice = queryParams.get('price')
    const productRating = queryParams.get('rating')
    const productImage = queryParams.get('img')
    console.log(productName);
    console.log(productPrice);
    console.log(productRating);

    const productNameElement = document.getElementById('product-name')
    const productPriceElement = document.getElementById('product-price')
    const productrRatingElement = document.getElementById('product-rating')
    const productImgElement = document.getElementById('product-image')

    productNameElement.innerText = productName;
    productPriceElement.innerText = productPrice;
    productImgElement.src = productImage;

    for (let i = 0; i < 5; i += 1) {
        const star = document.createElement("span")
        star.innerText = "star"
        star.classList.add("material-icons-outlined")

        if (i < productRating) {
            star.classList.add('red')
        }
        productrRatingElement.appendChild(star)
    }
}

function incrementCounter() {
    const counterElement = document.getElementById("counter")
    counterElement.innerText = Number(counterElement.innerText) + 1;
}

function decrementCounter() {
    const counterElement = document.getElementById("counter")

    if (Number(counterElement.innerText) > 1) {
        counterElement.innerText = Number(counterElement.innerText) - 1;
    }
}

