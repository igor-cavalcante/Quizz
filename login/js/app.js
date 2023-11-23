var body = document.querySelector("body");

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

let alerts = document.querySelector(".alerts");

let loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click",function(e){

    e.preventDefault();
    
    let loginEmail = document.querySelector("#loginEmail").value;
    let loginPassoword = document.querySelector("#loginPassword").value;
    let email = localStorage.getItem("email");
    let password = localStorage.getItem("password");
    console.log(loginEmail,loginPassoword,email,password);
    
    let login = 0;
    
    if(loginEmail==email){
        login = login + 1;
    }else{
        alert("email errado");
    }
    
    if(loginPassoword==password){
        login = login + 1;
    }else{
        alert("Senha errada");
    }
    
    if(login==2){
        localStorage.setItem("logado","true");
        returnHome();
    }else{
        alert("tente novamente");
    }
});

btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function register(){
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    
    console.log(name);
    console.log(email);
    console.log(password);

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    body.className = "sign-in-js";

    alerts.innerHTML ="Usuário Registrado."
    alerts.style.display = "flex";
    setTimeout(function(){
        alerts.style.display = "none";
    }, 3000);
}

function returnHome(){
    window.location.href = "../../index.html";
}