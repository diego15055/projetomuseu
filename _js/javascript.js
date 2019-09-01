function exibirArtigo(id, callbackSucesso, callbackErro) {
    if (true) {
        callbackSucesso("Funcoes de callback em JS", "Funcoes de callback sao muito utilizadas...")
    } 
    else {
        callbackErro("Erro ao receber arquivos")
    }
}


var callbackSucesso = function(titulo, descricao) {
    document.write("<h1>" + titulo + "</h1>")
    document.write("<hr />")
    document.write("<p>" + descricao + "</p>")
}

var callbackErro = function(erro) {
    document.write("<p> Erro: " + erro + "</p>")    
}




exibirArtigo(1, callbackSucesso, callbackErro)
