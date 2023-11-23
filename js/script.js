
window.onload = function logadologin() {
    const login2 = document.querySelector(".login");
    let username = document.querySelector("#username");
    let user_and_logout = document.querySelector("#user_and_logout");
    
    if (localStorage.getItem("logado") == "true") {
        login2.style.display = "none";
        user_and_logout.style.display = "flex";
        username.innerHTML = localStorage.getItem("name");
    }

    let logout = document.getElementById("logout");
    logout.addEventListener('click', function(){
        localStorage.setItem("logado", "false");
        window.location.reload();
    });
}

