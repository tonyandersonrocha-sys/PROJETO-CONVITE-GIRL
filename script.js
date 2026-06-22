
let frases = [
    "Tem certeza?",
    "Pensa bem",
    "Última chance.",
    "Olha que eu conheço vingadores.",
    "Please."
];

let contador = 0;

let comida = "";
let atividade = "";
let cinema = "";
let filme = "";
let data = "";
let hora = "";

function fugir(){

    let botoes = document.getElementById("nao");
    botoes.innerHTML = frases[contador];

    let x = Math.random() * 400;
    let y = Math.random() * 500;

    botoes.style.position = "absolute";
    botoes.style.left = x + "px";
    botoes.style.top = y + "px";

    document.getElementById("mensagem").innerHTML =
    frases[contador];   

    contador++;

    if(contador >= frases.length){
        contador = 0;
    }
}
function aceitar(){

    document.getElementById("tela1").style.display = "none";

    document.getElementById("tela2").style.display = "block";

}

function proximaTela(){

    document.getElementById("tela2").style.display = "none";

    document.getElementById("tela3").style.display = "block";

}

function tela4(){

data =
document.getElementById("data").value;

hora =
document.getElementById("hora").value;

if(
data==="" ||
hora===""
){

alert(
"Escolha data e hora 😎"
);

return;

}

document
.getElementById("tela3")
.style.display=
"none";

document.getElementById("tela4").style.display = "block";

}

function tela5(){

    document.getElementById("tela4").style.display = "none";

    document.getElementById("tela5").style.display = "block";

}
function tela6(){

    document.getElementById("tela5").style.display = "none";

    document.getElementById("tela6").style.display = "block";

}
function tela7(){

    document.getElementById("tela6").style.display = "none";

    document.getElementById("tela7").style.display = "block";

}

function tela8(){

    document.getElementById("tela7").style.display = "none";

    document.getElementById("tela8").style.display = "block";

}

function escolherComida(valor){

    comida = valor;

    document.getElementById("comidaEscolhida").innerHTML =
    "Selecionado: " + valor;

    document.getElementById("btnComida").innerHTML =
    "QUE DLÇ BORA 😎";

}

function escolherAtividade(valor){

    atividade = valor;

    document.getElementById("atividadeEscolhida").innerHTML =
    "Selecionado: " + valor;

    document.getElementById("btnAtividade").innerHTML =
    "TOP HEIN, CONTINUE 😎";

}

function escolherCinema(valor){

    cinema = valor;

    document.getElementById("cinemaEscolhido").innerHTML =
    "Selecionado: " + valor;

    document.getElementById("btnCinema").innerHTML =
    "CINEMINHA BOM, SEGUE 😎";

}

function escolherFilme(valor){

    filme = valor;

    document.getElementById("filmeEscolhido").innerHTML =
    "Selecionado: " + valor;

    document.getElementById("btnFilme").innerHTML =
    "AÍ SIM 😎";

}

function finalizar(){

document.getElementById("tela7").style.display = "none";
document.getElementById("tela8").style.display = "block";

let texto =
"🤎 Se prepara que no dia e hora marcados eu vou te buscar!\n\n" +

"📅 Data: " + (data || "não escolhida") + "\n" +

"⏰ Hora: " + (hora || "não escolhida") + "\n\n" +

"🍔 Comida: " + (comida || "não escolhida") + "\n\n" +

"🎉 Vibe: " + (atividade || "não escolhida") + "\n\n" +

"🎬 Cinema: " + (cinema || "não escolhido") + "\n\n" +

"🍿 Filme: " + (filme || "não escolhido");

document.getElementById("resumo").textContent =
texto;

}


