import { products } from "./products.js";   

const productsTemplate = document.getElementById('product-template');
const productCards = document.getElementById('product-list');

function renderProducts(products) {
    productCards.innerHTML = '';

    products.forEach(product => {
        const productClone = productsTemplate.content.cloneNode(true);

        productClone.querySelector('.product-image').src = `./images/${product.img}.png`;
        productClone.querySelector('.product-category').textContent = product.category;
        productClone.querySelector('.product-name').textContent = product.name;
        productClone.querySelector('.product-description').textContent = product.description;
        productClone.querySelector('.product-compound').textContent = product.compound.join(', ');

        productCards.appendChild(productClone);
    });
}

const getArray = products.reduce((acc, product) => {
    acc.push({ [product.name]: product.description });
    return acc;
}, []);

console.log(getArray);

function getProductCount() {
    const count = Number(prompt('Сколько отобразить карточек? (1-5)'));

    if (count < 1 || count > 5 || isNaN(count)) {
        alert('Ошибка: нужно ввести число от 1 до 5');
        return getProductCount();
    }

    return count;
}

const count = getProductCount();
const slicedProducts = products.slice(0, count);

renderProducts(slicedProducts);