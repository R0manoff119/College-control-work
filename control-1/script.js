
const fullName = "   иВАНОВ иВАН иВАНОВИЧ ";
const birthDate = "2005-12-15";
const email = "   Ivanov.Ivan@Example.COM";
const registrationDate = "2026-09-10";

// 1. Обработка имени
let name = fullName.trim().toLowerCase();
name = name.split(" ");

for (let i = 0; i < name.length; i++) {
    name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
}

name = name.join(" ");

// 2. Обработка электронной почты
let userEmail = email.trim().toLowerCase();

let hasAt = userEmail.includes("@");
let endsCom = userEmail.endsWith(".com");

// 3. Дата рождения и возраст
let birthday = new Date(birthDate);
let today = new Date();

let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

let birthdayDay = days[birthday.getDay()];

let age = today.getFullYear() - birthday.getFullYear();

if (today.getMonth() < birthday.getMonth()) {
    age--;
} else if (today.getMonth() == birthday.getMonth()) {
    if (today.getDate() < birthday.getDate()) {
        age--;
    }
}

// 4. Количество дней с момента регистрации
let registration = new Date(registrationDate);

let difference = today.getTime() - registration.getTime();
let registrationDays = Math.floor(difference / (1000 * 60 * 60 * 24));

// 5. Отчёт
console.log("ОТЧЁТ");
console.log("Имя:", name);
console.log("Email:", userEmail);
console.log("Есть @:", hasAt);
console.log("Заканчивается на .com:", endsCom);
console.log("Дата рождения:", birthDate);
console.log("День рождения:", birthdayDay);
console.log("Возраст:", age);
console.log("Дата регистрации:", registrationDate);
console.log("Дней с регистрации:", registrationDays);
