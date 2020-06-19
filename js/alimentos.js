$(document).ready(function() {
    $("#visualizarAlimento").hide();
    $("#adicionarAlimento").hide();

});

function showCadastrar() {
    $("#visualizarAlimento").hide();
    $("#adicionarAlimento").show();
}

function showVisualizar() {
    $("#visualizarAlimento").show();
    $("#adicionarAlimento").hide();
}