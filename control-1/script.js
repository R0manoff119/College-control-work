// 1. Создать два массива и объединить их

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];

console.log(result);


// 2. Деструктуризация объекта студента

let student2 = {
    name: "Жорик брат",
    age: 20,
    group: "РК 26-1",
    grades: [4, 5, 3, 5, 2, 2, 2, 2, 2, 2, 2]
};

let { name, age, group, grades } = student2;

console.log(name);
console.log(age);
console.log(group);
console.log(grades);


// 3. Создать нового студента на основе существующего

let newStudent = {
    ...student2
};

console.log(newStudent);


// 4. Функция подсчёта среднего значения

function average(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum / numbers.length;
}

console.log(average(4, 5, 3, 5, 2));
