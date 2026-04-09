import { products } from "./products.js";   

const productsTemplate = document.getElementById('product-template');
const productCards = document.getElementById('product-list');

function renderProducts(products, count) {
    productCards.innerHTML = '';

    products.slice(0, count).forEach(product => {
        const productClone = productsTemplate.content.cloneNode(true);

        productClone.querySelector('.product-image').src = product.img;
        productClone.querySelector('.product-category').textContent = product.category;
        productClone.querySelector('.product-name').textContent = product.name;
        productClone.querySelector('.product-description').textContent = product.description;
        productClone.querySelector('.product-compound').textContent = product.compound.join(', ');

        productCards.appendChild(productClone);
    });
}

const resultReduce = products.reduce((acc, product) => {
    acc[product.name] = product.description;
    return acc;
}, {});

console.log(resultReduce);

function getProductCount() {
    const count = Number(prompt('Сколько отобразить карточек? (1-5)'));

    if (count < 1 || count > 5 || isNaN(count)) {
        alert('Ошибка');
        return 1;
    }

    return count;
}

const count = getProductCount();
renderProducts(products, count);