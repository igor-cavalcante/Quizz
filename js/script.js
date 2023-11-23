
// Ao carregar a página
window.onload = function logadologin() {
    //Pega o botão de entrar 
    const login = document.querySelector(".login");
    //Pega o nome do usuário
    let username = document.querySelector("#username");
    //Pega a div que mostra o nome e a opcção de sair
    let user_and_logout = document.querySelector("#user_and_logout");
    
    //Se o usuário está logado
    if (localStorage.getItem("logado") == "true") {
        //O botão de entrar para de ser exibido, e a div, com o nome de usuário
        //e o botão de sair, aparece no lugar de 'entrar'
        login.style.display = "none";
        user_and_logout.style.display = "flex";
        username.innerHTML = localStorage.getItem("name");
    }

    //Quando o usuário clica em sair, a página recarrega e a opção de entrar volta a aparecer
    let logout = document.getElementById("logout");
    logout.addEventListener('click', function(){
        localStorage.setItem("logado", "false");
        window.location.reload();
    });
}

