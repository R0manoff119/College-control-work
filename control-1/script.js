let nameInput = document.getElementById("name");
let button = document.getElementById("btn");

button.addEventListener("click", function(){
    let names = nameInput.value;

    if(names === ""){
        console.log("Введите имя");
    }
    else{
        console.log("Имя " + names);
    }
})

const password = "123456";

if(password.length < 6 || password.length > 20){
    console.log("Пароль слишком короткий или длинный");
}
else{
    console.log("Пароль проходит");
}

let ageInput = document.querySelector("#age");
const age = Number(ageInput.value);

if(age >= 10){
    console.log("Регистрация завершена");
}
else{
    console.log("Регистрация недоступна");
}
