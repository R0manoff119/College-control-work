let date = new Date();

let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

console.log(date.toLocaleDateString("ru-RU"));
console.log(days[date.getDay()]);



let date = new Date();

let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

console.log(date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear());
console.log(days[(date.getDay() + 6) % 7]);