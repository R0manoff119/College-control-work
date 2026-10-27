let birthday = new Date("2009-05-19");
let today = new Date();

let age = today.getFullYear() - birthday.getFullYear();

if (today.getMonth() < birthday.getMonth()) {
    age--;
} else if (today.getMonth() == birthday.getMonth()) {
    if (today.getDate() < birthday.getDate()) {
        age--;
    }
}

console.log(age);