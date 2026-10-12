let students = [
    {name: "Анна", grades: [4, 5, 5]},
    {name: "Иван", grades: [5, 5, 4]},
    {name: "Ричард", grades: [3, 4, 4]},
    {name: "Мария", grades: [5, 5, 5]}
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