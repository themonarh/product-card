import { products } from "./products.js";   

const productsTemplate = document.getElementById('product-template');
const productCards = document.getElementById('product-list');

const clones = products.map(product => {
    const productClone = productsTemplate.content.cloneNode(true);
    productClone.querySelector('.product-image').src = product.img;
    productClone.querySelector('.product-category').textContent = product.category;
    productClone.querySelector('.product-name').textContent = product.name;
    productClone.querySelector('.product-description').textContent = product.description;
    productClone.querySelector('.product-compound').textContent = product.compound.join(', ');
    return productClone;
});

const resultReduce = products.reduce((acc, product) => {
    acc.push({ [product.name]: product.description });
    return acc;
}, []);

console.log(resultReduce);

const countProductCards = Number(prompt('Сколько отобразить карточек? (1-5)'));

if (countProductCards < 1 || count > 5 || isNaN(count)) {
    alert('Ошибка');
} else {
    productCards.innerHTML = ''; 
    products.slice(0, count).forEach(product => {
        const productClone = productsTemplate.content.cloneNode(true);
        productCards.appendChild(productClone);
    });
}