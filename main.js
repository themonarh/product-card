// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container');
const colorChangeCardListBtn = document.querySelector('#colorChangeCardListBtn');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';
const redColorHash = '#FF0000';
const yellowColorHash = '#FFFF00';

colorChangeCardListBtn.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = greenColorHash);
});

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#colorChangeFirstCardBtn');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
});

// Открыть google

const openGoogleButton = document.querySelector('#googlePageOpenBtn');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open('https://google.com');
    } else {
        return;
    }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#outputConsoleLogBtn');

outputLogButton.addEventListener('click', () => outputConsoleLogBtn('ДЗ №4'));

function outputConsoleLogBtn(message) {
    alert(message);
    console.log(message);
}

// Вывод текста в лог при наведении на заголовок

const title = document.querySelector(".label");

title.addEventListener("mouseenter", () => {
    console.log(title.textContent);
});

// Переключение цвета кнопки туда-обратно

const colorChangeBackForthBtn = document.getElementById('colorChangeBackForthBtn');

colorChangeBackForthBtn.addEventListener('click', () => {
    colorChangeBackForthBtn.classList.toggle('activeColorBtn');
});


