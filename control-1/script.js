let number = 0;

function changeNumber() {
    number += 1;
    document.getElementById("number").innerHTML = "Количество: " + number;
}

document.onkeydown = function(event) {
    document.getElementById("keyboard").innerHTML = "Нажата клавиша: " + event.key;
};

let player = document.getElementById("player");
let posX = 0;
let posY = 0;

document.onkeydown = function(event) {
    document.getElementById("keyboard").innerHTML = "Нажата клавиша: " + event.key;

    switch (event.key) {
        case "ArrowUp":
            posY -= 10;
            break;
        case "ArrowDown":
            posY += 10;
            break;
        case "ArrowLeft":
            posX -= 10;
            break;
        case "ArrowRight":
            posX += 10;
            break;
    }

    posX = Math.max(0, Math.min(posX, 310));
    posY = Math.max(0, Math.min(posY, 310));

    player.style.left = posX + "px";
    player.style.top = posY + "px";
};

function clearAll() {
    number = 0;
    posX = 0;
    posY = 0;

    document.getElementById("number").innerHTML = "Количество: 0";
    document.getElementById("keyboard").innerHTML = "Клавиша не нажата";

    player.style.left = "0px";
    player.style.top = "0px";
}