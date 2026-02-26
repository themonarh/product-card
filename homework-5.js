function cityTemperature() {
    let city = "Астана";
    let temperature = "-25";
    console.log(`В городе ${city} сейчас температура ${temperature} градусов.`);
}

let speedOfLight = 299792458;

function speedOfLightInKm() {
    if (speedOfLight === 299792458) {
        console.log("Скорость света");
    } else if (speedOfLight > 299792458) {
        console.log("Сверхсветовая скорость");
    } else if (speedOfLight < 299792458) {
        console.log("Субсветовая скорость");
    }
}

speedOfLightInKm();

let socks = 'носки';
let price = 1000;

function calculate(budget) {
    if (budget >= price) {
        console.log(`Вы купили ${socks}!`)
    } else {
        let difference = price - budget
        console.log(`У вас не хватает ${difference} тенге для покупки`)
    }
}

calculate(700);

function catEat() {
    let cat = "кот";
    let food = "рыба";
    console.log(`${cat} ест ${food}`);
}

catEat();
