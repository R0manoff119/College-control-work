
let students = [
    {name: "Анна", grades: [2, 5, 5], age: 17, group: "ИСП-1"},
    {name: "Иван", grades: [5, 5, 4], age: 18, group: "ИСП-2"},
    {name: "Ричард", grades: [3, 4, 4], age: 17, group: "ИСП-3"},
    {name: "Мария", grades: [5, 5, 5], age: 19, group: "ИСП-4"}
];

students.forEach(student => {
    let sum = student.grades.reduce((sum, grade) => sum + grade, 0);
    student.average = sum / student.grades.length;
});

let a = [...students].sort((student1, student2) => student2.average - student1.average);
console.log(a);

let b = [...students].sort((student1, student2) => student1.name.localeCompare(student2.name));
console.log(b);

let c = [...students].sort((student1, student2) => student2.average - student1.average);
console.log(c[0].name, c[1].name);

let m = students.some(student => student.age === 17);
console.log(m);
