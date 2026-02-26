function getCityTemperature() {
    let city = "Астана";
    let temperature = -25;
    console.log(`В городе ${city} сейчас температура ${temperature} градусов.`);
}

let SPEED_OF_LIGHT = 299792458;

function getNameLightSpeed() {
    if (SPEED_OF_LIGHT === 299792458) {
        console.log("Скорость света");
    } else if (SPEED_OF_LIGHT > 299792458) {
        console.log("Сверхсветовая скорость");
    } else if (SPEED_OF_LIGHT < 299792458) {
        console.log("Субсветовая скорость");
    }
}

getNameLightSpeed();

let socks = 'носки';
let price = 1000;

function buyProduct(budget) {
    if (budget >= price) {
        console.log(`Вы купили ${socks}!`)
    } else {
        let difference = price - budget
        console.log(`У вас не хватает ${difference} тенге для покупки`)
    }
}

buyProduct(700);

function eatFood() {
    let cat = "cat";
    let food = "fish";
    console.log(`${cat} eat ${food}`);
}

eatFood();