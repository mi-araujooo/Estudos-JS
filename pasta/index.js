function criarSaudacao(saudacao) {
    return function (nome){
        return `${saudacao}, ${nome}!`
    }
}
