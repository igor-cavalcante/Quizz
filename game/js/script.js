
//Define o tempo de espera para o jogo começar
let wait = 5;

//Pega o elemento que serve de timer no html
let initialCountdown = document.getElementById("initial-countdown");

//Inicia uma variável que executa uma função para atualizar o timer a cada 1s
let start = setInterval(updateIniCountdown,1000);

//A função que atualiza o timer inicial
function updateIniCountdown(){

    //O tempo é decrescido em 1
    wait--;

    //Se o tempo é 0, exibir "Vai!", se não, exibir tempo normal
    if(wait==0){
        initialCountdown.innerHTML = "Vai!";
    }else{
        initialCountdown.innerHTML = wait;
    }

    //Se o tempo chegou em 0, para de executar o timer, tira ele da tela, 
    //muda a questão e inicia o timer das questões
    if(wait<0){
        clearInterval(start);
        initialCountdown.style.display = "none";
        changeQuestion();
        //Timer das questões, mesma lógica que o anterior
        let countdown = setInterval(updateCountdown,1000);
    }
}
//Define o tempo por questão
let questionTime = 45;

//Pega o elemento que serve de timer da questão
let questionCountdown = document.getElementById("countdown");

//Função para atualizar o tempo da questão, mesma lógica da anterior
function updateCountdown(){
    questionTime--;
    
    //Se o tempo chegou em 0, muda a questão e reseta o timer 
    if(questionTime==0){
        changeQuestion();
        questionTime = 45;
    }
    questionCountdown.innerHTML = questionTime;
}

// Pega o elemento onde vai escrever a questão
let question = document.getElementById("question");

// Lista de questões
let questionsList = [
    "Qual tag HTML é usada para criar uma lista ordenada?",
    "Qual propriedade CSS é usada para definir a cor de fundo de um elemento?",
    "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
    "Qual tag HTML é usada para criar um link para outra página da web?",
    "Qual propriedade CSS é usada para definir a largura de uma borda?",
    "Qual operador é usado para verificar a igualdade de valor e tipo em JavaScript?",
    "Qual tag HTML é usada para criar uma imagem?",
    "Qual seletor CSS é usado para aplicar um estilo a todos os elementos de uma classe específica?",
    "Qual função JavaScript é usada para imprimir mensagens no console?",
    "Qual atributo HTML é usado para definir o texto alternativo para uma imagem?",
];

// Alternativas de cada questão
let q1 = [
    "a) <ul>",// 0
    "b) <li>",// 1
    "c) <ol>",// 2
    "d) <dl></dl>"// 3
];// correta: 2
let q2 = [
    "a) background-color",
    "b) text-color",
    "c) border-color",
    "d) foreground-color"
];// correta: 0
let q3 = [
    "a) variable",
    "b) let",
    "c) const",
    "d) var"
];// correta: 1
let q4 = [
    "a) <link>",
    "b) <a>",
    "c) <url>",
    "d) <href>"
];// correta: 1
let q5 = [
    "a) border-width",
    "b) border-size",
    "c) border-thickness",
    "d) border-style"
];// correta: 0
let q6 = [
    "a) ==",
    "b) =",
    "c) ===",
    "d) !==",
];// correta: 2
let q7 = [
    "a) <image>",
    "b) <img>",
    "c) <picture>",
    "d) <figure>"
];// correta: 1
let q8 = [
    "a) #",
    "b) .",
    "c) :",
    "d) *"
];// correta: 1
let q9 = [
    "a) console.log()",
    "b) print()",
    "c) display()",
    "d) write()"
];// correta: 0
let q10 = [
    "a) alt",
    "b) title",
    "c) description",
    "d) image-text"
];// correta: 0

// Lista de alternativas na mesma posição que sua respectiva questão
let optionsList = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

// Lista de respostas na mesma posição que sua questão
let answersList = [2,0,1,1,0,2,1,1,0,0];

// Pega os elementos de opções
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");

// Lista de opções
let options = [op1,op2,op3,op4]
            //  0   1   2   3

//variauavel que amarzena os pontos
const scoreElement = document.getElementById("points");
let score = 1;

// Variável pra armazenar o número da questão atual
var keep = 0;

// Váriavel para armazenar se a questão foi respondida ou não
var answered = 0;

// Array que vai armazenar as questões que não devem se repetir
let noRepeat = [];

// Função que muda a questão
function changeQuestion(){
    

    // Variável para repetir o while até encontrar uma questão que ainda não foi
    let x = 0;
    
    // Se os tamanho de noRepeat (Lista de questões respondidas) e o tamanho de
    // questionsList (Lista de todas as questões) forem iguais, significa que todas
    // as questões já foram respondidas, então o loop não é executado  
    if(noRepeat.length==questionsList.length){
        x=1;
        // alert("Você respondeu todas as questões");
        // Volta para a página inicial
        // window.location.href = "../index.html";
        result();
    };

    // Enquanto x = 0, procurar uma questão nova
    while(x==0){

        // Math.random() gera um numero aleatório entre 0 e 1, 
        // o resultado é multiplicado por 10 e arredondado pelo Math.Floor()
        //
        // Exemplo de resultado:
        // Math.random = 0.97
        // 0.97 * 10 = 9.7
        // Math.Floor(9.7) = 10
        var random = Math.floor(Math.random() * 10);
        
        // Se o index (Posição) da questão atual é menor que 0 significa que ela não
        // existe na lista noRepeat, ou seja, ainda não foi exibida. Se é maior ou igual a 0
        // a questão já foi exibida, e o loop repete até encontrar uma questão nova.
        if(noRepeat.indexOf(random) < 0){
            // O número da questão atual é armazenado
            keep = random;
            
        
            // O texto da questão é alterado para uma questão aleatória
            question.textContent = questionsList[random];
        
            // Guarda as alternativas da questão aleatória
            let q = optionsList[random];
            
            // Substitui o texto das opções pelas alternativas da questão 
            for(let i = 0; i < 4; i++){
                options[i].textContent = q[i];
            };
            // x recebe 1 para terminar o loop
            x=1;
            // A questão é adicionada a lista noRepeat
            noRepeat.push(keep);
        }else{
            x=0;
        };
        
    };
   
};

// Função para responder a questão, com o parametro "a" que
// representa a opção clicada
function answerQuestion(a){

    // Mais uma questão foi respondida
    answered +=1;

    // Se a opção escolhida for igual a opção correta
    // da lista de respostas, é um acerto, se não, é um erro
    if(a == answersList[keep]){

        // Se foi um acerto, ganha pontos
        score+=Math.floor(2.2*questionTime);

        // A opção selecionada fica verde para indicar o acerto
        options[a].classList.add("points-acerto");
        setTimeout(function() {
            options[a].classList.remove("points-acerto");
        }, 500);
    }else{

        // Se foi um erro, a opção selecionada fica vermelha
        options[a].classList.add("points-error");
        setTimeout(function() {
            options[a].classList.remove("points-error");
        }, 500);
    };

    // Muda a questão e reseta o timer
    setTimeout(function(){
        changeQuestion();
        questionTime = 45;
        scoreElement.innerText = score;
    }, 500);
};

// Tela final com o resultado
let resultScreen = document.getElementById("result");

// Pontos finais

let finalScore = document.getElementById("final-points");

// Função para mostrar o resultado final
function result(){
    finalScore.innerHTML = score;
    resultScreen.style.display = "flex";
}