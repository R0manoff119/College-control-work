
let number = 1;

let timer = setInterval(function() {
    console.log(number);

    if (number == 25) {
        clearInterval(timer);
        console.log("Счёт завершён");
    }

    number++;
}, 1000);

let number2 = 25;

let timer2 = setInterval(function() {
    console.log(number2);

    if (number2 == 1) {
        clearInterval(timer2);
        console.log("Отсчёт завершён");
    }

    number2--;
}, 1000);

let count = 0;

function trafficLight() {
    console.log("Красный");

    setTimeout(function() {
        console.log("Жёлтый");

        setTimeout(function() {
            console.log("Зелёный");

            count++;

            if (count < 2) {
                setTimeout(trafficLight, 3000);
            } else {
                console.log("Работа светофора завершена");
            }

        }, 2000);

    }, 3000);
}

trafficLight();

let time = 15;

let timer3 = setInterval(function() {
    console.log(time);

    time--;

    if (time < 0) {
        clearInterval(timer3);
        console.log("Время вышло!");
    }
}, 1000);

let reminderTime = prompt("Через сколько секунд напомнить?");

setTimeout(function() {
    console.log("Напоминание!");
}, reminderTime * 1000);
```
