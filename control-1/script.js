let students = [
    { name: "Иван", grades: [5, 4, 5, 5] },
    { name: "Петр", grades: [4, 4, 5, 3] },
    { name: "Анна", grades: [5, 5, 5, 4] }
];

let names = students.map(student => student.name);

function average(grades) {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function studentAverage(student) {
    return average(student.grades);
}

let goodStudents = students.filter(student => studentAverage(student) >= 4.5);

console.log(names);
console.log(goodStudents);
