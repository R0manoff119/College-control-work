
const text = `   javascript — это язык программирования, который широко используется в веб-разработке. JAVASCRIPT позволяет создавать интерактивные веб-страницы, а также серверные приложения и игры. Многие разработчики начинают свой путь именно с javascript, потому что он относительно прост в освоении и имеет огромное сообщество.   javascript поддерживается всеми современными браузерами, и это делает его универсальным инструментом для создания сайтов. Однако, JAVASCRIPT имеет свои особенности: например, динамическую типизацию, асинхронность и событийную модель. Эти особенности могут показаться сложными новичкам, но именно они дают языку гибкость.   Изучая javascript, важно практиковаться каждый день и писать как можно больше кода. Javascript-код можно запускать прямо в консоли браузера, не устанавливая ничего дополнительно. Многие компании используют javascript для создания интерфейсов, работы с данными и построения серверной логики. Существует множество библиотек и фреймворков, которые расширяют возможности javascript. Новичкам стоит начать с основ: переменные, функции, массивы и объекты.   javascript постоянно развивается: каждый год выходят новые версии стандарта и добавляются новые возможности. Сообщество javascript активно обсуждает предложения и улучшения языка. Если вы хотите стать востребованным специалистом, javascript — отличный выбор для старта. В заключение: javascript — это мощный, гибкий и востребованный язык, который стоит освоить каждому, кто хочет работать в современной веб-разработке.`;

let result = "";
let space = false;

for (let i = 0; i < text.length; i++) {
    let letter = text[i];

    if (letter == " " || letter == "\n") {
        if (result.length > 0 && space == false) {
            result += " ";
            space = true;
        }
    } else {
        result += letter.toLowerCase();
        space = false;
    }
}

let newText = "";

for (let i = 0; i < result.length; i++) {
    if (result[i] == "j" &&
        result[i + 1] == "a" &&
        result[i + 2] == "v" &&
        result[i + 3] == "a" &&
        result[i + 4] == "s" &&
        result[i + 5] == "c" &&
        result[i + 6] == "r" &&
        result[i + 7] == "i" &&
        result[i + 8] == "p" &&
        result[i + 9] == "t") {
        newText += "JavaScript";
        i += 9;
    } else if (result[i] == "-" || result[i] == "—") {
        newText += " ";
    } else {
        newText += result[i];
    }
}

result = newText;

let sentences = [""];
let number = 0;

for (let i = 0; i < result.length; i++) {
    if (result[i] == ".") {
        number++;
        sentences[number] = "";
    } else {
        sentences[number] += result[i];
    }
}

result = "";

for (let i = 0; i < sentences.length; i++) {
    let sentence = sentences[i];
    let first = true;

    for (let j = 0; j < sentence.length; j++) {
        if (sentence[j] != " " || first == false) {
            if (first == true && sentence[j] >= "a" && sentence[j] <= "z") {
                result += sentence[j].toUpperCase();
            } else {
                result += sentence[j];
            }
            first = false;
        }
    }

    if (i < sentences.length - 1) {
        result += ". ";
    }
}

result = result.replace("мощный", "универсальный");

console.log(result[0] == "J" &&
    result[1] == "a" &&
    result[2] == "v" &&
    result[3] == "a" &&
    result[4] == "S" &&
    result[5] == "c" &&
    result[6] == "r" &&
    result[7] == "i" &&
    result[8] == "p" &&
    result[9] == "t");

console.log(result[result.length - 1] == ".");
console.log(result);

