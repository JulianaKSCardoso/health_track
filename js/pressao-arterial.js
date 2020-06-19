$(document).ready(function() {
    $("#visualizarPressao").hide();
    $("#adicionarPressao").hide();

});

function showCadastrar() {
    $("#visualizarPressao").hide();
    $("#adicionarPressao").show();
}

function showVisualizar() {
    $("#visualizarPressao").show();
    $("#adicionarPressao").hide();
}