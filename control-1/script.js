let numbers = [1, 4, 6, 8, 10];

let ref = numbers.map(number => number * 3);
console.log(ref);

let numbers2 = [3, 8, 12, 5, 17, 20, 4];

let bigNumber = numbers2.filter(number => number > 10);
console.log(bigNumber);

let numbers3 = [10, 20, 30, 40, 50];

let sum = numbers3.reduce((total, number) => total + number, 0);
console.log(sum);

let average = sum / numbers3.length;
console.log(average);

let students = [
    {name: "Анна", age: 18, grades: 4},
    {name: "Иван", age: 18, grades: 5},
    {name: "Ричард", age: 19, grades: 3}
];

let names = students.map(student => student.name);
console.log(names);

let topStudent = students.filter(student => student.grades === 5);
console.log(topStudent);

let sumGrades = students.reduce((sum, student) => sum + student.grades, 0);
console.log(sumGrades);

let ivan = students.find(student => student.name === "Иван");
console.log(ivan);
