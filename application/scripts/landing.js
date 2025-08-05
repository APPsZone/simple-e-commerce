function onProductClick(element) {
    console.log("Product Clicked", element);

    const productItemElement = element.parentElement.parentElement;
    const productName = productItemElement.getElementsByTagName("h3") [0].innerText;
    const productPrice = productItemElement.getElementsByClassName("price") [0].innerText;
    const productRating = productItemElement.getElementsByClassName("red").length;
    const productImg = element.parentElement.parentElement.getElementsByTagName("img") [0].src
    const parentDireSplitBySlash = window.location.pathname.split('/');
    const splitDir = parentDireSplitBySlash.slice(0, parentDireSplitBySlash.length - 1);
    splitDir.push("detail.html")
    
    const finalDir = splitDir.join('/');

    window.location.href= `${finalDir}?name=${productName}&price=${productPrice}&rating=${productRating}&img=${productImg}`
}