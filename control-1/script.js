let numbers = [7, 3, 9, 1, 5];

let a = [...numbers].sort((x, y) => x - y);
console.log(a);

let b = [...numbers].sort((x, y) => y - x);
console.log(b);

console.log(Math.min(...numbers));

console.log(Math.max(...numbers));