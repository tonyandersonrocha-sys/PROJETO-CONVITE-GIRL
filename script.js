
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

    let botaoNao = document.getElementById("nao");

    botaoNao.innerHTML = frases[contador];

    let area = document.querySelector(".botoes");

    let larguraArea = area.clientWidth;
    let alturaArea = area.clientHeight;

    let larguraBotao = botaoNao.offsetWidth;
    let alturaBotao = botaoNao.offsetHeight;

    let maxX = larguraArea - larguraBotao;
    let maxY = alturaArea - alturaBotao;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";

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

    if(comida === ""){
        alert("Escolha primeiro o que você está afim 👆");
        return;
    }

    document.getElementById("tela4").style.display = "none";
    document.getElementById("tela5").style.display = "block";
}
function tela6(){

    if(atividade === ""){
        alert("Escolha primeiro qual é a vibe 👆");
        return;
    }

    document.getElementById("tela5").style.display = "none";
    document.getElementById("tela6").style.display = "block";
}
function tela7(){

    if(cinema === ""){
        alert("Escolha primeiro o cinema 👆");
        return;
    }

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
    if(filme === ""){
    alert("Escolha primeiro o filme 🍿");
    return;
}

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


