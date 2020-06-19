$(document).ready(function() {
    $("#visualizarPeso").hide();
    $("#cadastrarPeso").hide();

});

function showCadastrar() {
    $("#visualizarPeso").hide();
    $("#cadastrarPeso").show();
}

function showVisualizar() {
    $("#visualizarPeso").show();
    $("#cadastrarPeso").hide();
}

//adicionar peso
var listElement = document.querySelector('#visualizarPeso td');
var inputElement = document.querySelector('#adicionarPeso input');
var addBtn = document.querySelector('#adicionarPeso button');

var pesagens = [];

function render pesagens() {
    for (pesagem of pesagens) {
        var pesagemElement = document.createElement('td');
        var pesagemText = document.createTextNode(pesagem);

        pesagemElement.appendChild('pesagemText');
    }
}

renderPesagens();