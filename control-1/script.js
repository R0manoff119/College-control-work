let date = new Date();

let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

console.log(date.toLocaleDateString("ru-RU"));
console.log(days[date.getDay()]);