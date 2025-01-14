//Ativar links do Menu
const links = document.querySelectorAll(".cabecalho li a");
function ativarLink(link) {
    const url = window.location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}
links.forEach(ativarLink)

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto);

//Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativo");
    const ativo = resposta.classList.contains("ativo");
    pergunta.setAttribute("aria-expanded", ativo);
    console.log(ativo)
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas)