```javascript
let a = 1;

let b = setInterval(function() {
    console.log(a);

    if (a == 25) {
        clearInterval(b);
        console.log("Готово");
    }

    a++;
}, 1000);

let c = 25;

let d = setInterval(function() {
    console.log(c);

    if (c == 1) {
        clearInterval(d);
        console.log("Готово");
    }

    c--;
}, 1000);

let e = 0;

function f() {
    console.log("Красный");

    setTimeout(function() {
        console.log("Жёлтый");

        setTimeout(function() {
            console.log("Зелёный");

            e++;

            if (e < 2) {
                setTimeout(f, 3000);
            } else {
                console.log("Готово");
            }

        }, 2000);

    }, 3000);
}

f();

let g = 15;

let h = setInterval(function() {
    console.log(g);

    g--;

    if (g < 0) {
        clearInterval(h);
        console.log("Время вышло!");
    }
}, 1000);

let i = prompt("Через сколько секунд напомнить?");

setTimeout(function() {
    console.log("Напоминание!");
}, i * 1000);
```
