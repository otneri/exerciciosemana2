// Exercicio 8
// var ano = prompt ('Informe um ano');
// var anoAtual = new Date().getFullYear();
// var resultado = anoAtual - parseInt(ano);
// alert ('O resultado é: '+ resultado)

// Exercicio 9
var resultado = document.getElementById('resultado');

function incrementar () {
    var valor = resultado.textContent;
    resultado.innerText = parseInt(valor) +1;
}

function decrementar () {
    var valor = resultado.textContent;
    resultado.innerText = parseInt(valor) -1;
}

// Exercicio 10

function alteraTitulo () {
    var titulo = document.getElementById('titulo');
    var inputValue = document.getElementById('inputTitulo').value;
    titulo.innerText = inputValue;
}