const userInfo = {
    name: "Руслан",
    age: 19,
    country: "Казахстан",
    city: "Астана",
    work: "Клининг",
    height: 183,
    weight: 85
}

const carInfo = {
    brand: "Li Auto",
    model: "Li 9",
    year: 2026,
    color: "black",
    transmission: "Electric",
    power: 449
}

carInfo.owner = userInfo;

function checkMaxSpeed() {
    if ("maxSpeed" in carInfo)
        return; 
    else
        carInfo.maxSpeed = 180;
}

checkMaxSpeed();

console.log(carInfo);

const autoGermany = {
    brand: "BMW",
    power: 600,
};

function showObjectValue(obj, key) {
    console.log(obj[key]);
}

showObjectValue(autoGermany, "power");

const productList = ["Молоко", "Хлеб", "Яйца", "Творог", "Помидоры"]

const marvelFilms = [
    {
        title: "Железный человек",
        year: 2009,
        mainArtist: "Роберт Дауни младший",
        genre: "Фантастика, экшен",
    },
    {
        title: "Мстители",
        year: 2012,
        mainArtist: "Роберт Дауни младший",
        genre: "Фантастика, экшен",
    },
    {
        title: "Тор",
        year: 2011,
        mainArtist: "Крис Хемсворт",
        genre: "Фантастика, экшен",
    }
];

marvelFilms.push({
        title: "Мстители: Война бесконечности",
        year: 2018,
        mainArtist: "Их много",
        genre: "Фантастика, боевик"

});

console.log(marvelFilms);

// 9 Задание

const harryPotter = [
    {
        title: "Гарри Поттер и узник Азкабана",
        year: 2004,
        genre: "Фантастика",
    },
    {
        title: "Гарри Поттер и Орден Феникса",
        year: 2007,
        genre: "Фантастика",
    },
    {
        title: "Гарри Поттер и принц-полукровка",
        year: 2009,
        genre: "Фантастика",
    }
]

const marvelPlusHarryPotter = [...marvelFilms, ...harryPotter]
    console.log(marvelPlusHarryPotter)


const updatedProductions = marvelPlusHarryPotter.map(production => {
    return {
        ...production,
        isRare: production.year < 2000
    };
});

console.log(updatedProductions);
