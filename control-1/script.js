let button = document.getElementById("btn");

button.addEventListener("click", function(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = Number(document.getElementById("age").value);

    if(name === "" || email === ""){
        console.log("Заполните все поля");
    }
    else if(age > 18){
        console.log("Регистрация завершена");
    }
    else{
        console.log("Регистрация недоступна");
    }
});
