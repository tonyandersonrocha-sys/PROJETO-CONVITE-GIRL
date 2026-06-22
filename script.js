let frases = [
  "Tem certeza? 🥺",
  "Pensa bem... 😳",
  "Última chance! 😭",
  "Olha que eu conheço os Vingadores 😎",
  "Por favorzinho... 🥺"
];

let contador = 0;

let comida = "";
let atividade = "";
let cinema = "";
let filme = "";
let data = "";
let hora = "";

/* Troca de tela */
function mostrarTela(idTela) {
  document.querySelectorAll(".tela").forEach(function(tela) {
    tela.classList.remove("ativa");
  });

  document.getElementById(idTela).classList.add("ativa");
}

/* Botão NÃO fugindo */
function fugir() {
  const botaoNao = document.getElementById("nao");
  const area = document.getElementById("areaBotoes");

  const larguraArea = area.clientWidth;
  const alturaArea = area.clientHeight;

  const larguraBotao = botaoNao.offsetWidth;
  const alturaBotao = botaoNao.offsetHeight;

  const maxX = larguraArea - larguraBotao;
  const maxY = alturaArea - alturaBotao;

  const x = Math.max(0, Math.random() * maxX);
  const y = Math.max(0, Math.random() * maxY);

  botaoNao.style.position = "absolute";
  botaoNao.style.left = x + "px";
  botaoNao.style.top = y + "px";

  botaoNao.textContent = frases[contador];
  document.getElementById("mensagem").textContent = frases[contador];

  contador++;

  if (contador >= frases.length) {
    contador = 0;
  }
}

/* Tela 1 */
function aceitar() {
  mostrarTela("tela2");
}

/* Tela 2 */
function proximaTela() {
  mostrarTela("tela3");
}

/* Data e hora */
function irParaComida() {
  data = document.getElementById("data").value;
  hora = document.getElementById("hora").value;

  if (data === "" || hora === "") {
    alert("Escolha a data e o horário do nosso encontro 😎");
    return;
  }

  mostrarTela("tela4");
}

/* Comida */
function escolherComida(valor, botao) {
  comida = valor;

  document.querySelectorAll("#tela4 .opcao").forEach(function(opcao) {
    opcao.classList.remove("selecionada");
  });

  botao.classList.add("selecionada");

  document.getElementById("comidaEscolhida").textContent =
    "Selecionado: " + valor;

  const btnComida = document.getElementById("btnComida");

  btnComida.textContent = "QUE DELÍCIA, BORA 😎";
  btnComida.disabled = false;
  btnComida.classList.remove("desativado");
}

function irParaVibe() {
  if (comida === "") {
    alert("Escolha uma comida primeiro 👆");
    return;
  }

  mostrarTela("tela5");
}

/* Vibe */
function escolherAtividade(valor, botao) {
  atividade = valor;

  document.querySelectorAll("#tela5 .opcao").forEach(function(opcao) {
    opcao.classList.remove("selecionada");
  });

  botao.classList.add("selecionada");

  document.getElementById("atividadeEscolhida").textContent =
    "Selecionado: " + valor;

  const btnAtividade = document.getElementById("btnAtividade");

  if (valor === "🎬 Cinema") {
    btnAtividade.textContent = "ESCOLHER CINEMA →";
  } else {
    btnAtividade.textContent = "CONTINUAR →";
  }

  btnAtividade.disabled = false;
  btnAtividade.classList.remove("desativado");
}

function continuarDepoisDaVibe() {
  if (atividade === "") {
    alert("Escolha uma vibe primeiro 👆");
    return;
  }

  if (atividade === "🎬 Cinema") {
    mostrarTela("tela6");
  } else {
    cinema = "Não se aplica";
    filme = "Não se aplica";
    finalizar();
  }
}

/* Cinema */
function escolherCinema(valor, botao) {
  cinema = valor;

  document.querySelectorAll("#tela6 .opcao").forEach(function(opcao) {
    opcao.classList.remove("selecionada");
  });

  botao.classList.add("selecionada");

  document.getElementById("cinemaEscolhido").textContent =
    "Selecionado: " + valor;

  const btnCinema = document.getElementById("btnCinema");

  btnCinema.textContent = "ESCOLHER FILME →";
  btnCinema.disabled = false;
  btnCinema.classList.remove("desativado");
}

function irParaFilme() {
  if (cinema === "") {
    alert("Escolha um cinema primeiro 👆");
    return;
  }

  mostrarTela("tela7");
}

/* Filme */
function escolherFilme(valor, botao) {
  filme = valor;

  document.querySelectorAll("#tela7 .opcao").forEach(function(opcao) {
    opcao.classList.remove("selecionada");
  });

  botao.classList.add("selecionada");

  document.getElementById("filmeEscolhido").textContent =
    "Selecionado: " + valor;

  const btnFilme = document.getElementById("btnFilme");

  btnFilme.textContent = "MARCAR NOSSO DATE 🤎";
  btnFilme.disabled = false;
  btnFilme.classList.remove("desativado");
}

/* Final */
function finalizar() {
  if (atividade === "🎬 Cinema" && filme === "") {
    alert("Escolha um filme primeiro 🍿");
    return;
  }

  mostrarTela("tela8");

  const dataFormatada = new Date(data + "T00:00:00").toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "long",
      year: "numeric"
    }
  );

  const texto =
`📅 ${dataFormatada}
⏰ ${hora}

🍔 ${comida}
✨ ${atividade}

🎬 ${cinema}
🍿 ${filme}`;

  document.getElementById("resumo").textContent = texto;
}