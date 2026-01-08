const vermelho = document.querySelector(".vermelho")
const verde = document.querySelector(".verde")
const azul = document.querySelector(".azul")
const amarelo = document.querySelector(".amarelo")

const começar = document.querySelector(".comecar")
const placar = document.getElementById("placar")

const popup = document.getElementById("popup")
const popupTitulo = document.getElementById("popup-titulo")
const popupBtn = document.getElementById("popup-btn")


let estado = "esperando"
let interval = 1000
let sequencia_sort = []
let indiceJogadas = 0
let rodadas = 0

começar.addEventListener("click", () => {
    sequencia_sort = []
    indiceJogadas = 0
    sorteio()
})

function sorteio() {
    estado = "sorteando"
    const sorteado = Math.floor(Math.random() * 4) + 1
    sequencia_sort.push(sorteado)
    mostrar()
}

function mostrar() {
    estado = "mostrando"
    let indice = 0

    const id = setInterval(() => {
        if (sequencia_sort.length > indice) {
            if (sequencia_sort[indice] === 1) {
                verde.classList.add("ligado")
                setTimeout(() => {
                    verde.classList.remove("ligado")
                    indice += 1
                }, interval);
            } else if (sequencia_sort[indice] === 2) {
                vermelho.classList.add("ligado")
                setTimeout(() => {
                    vermelho.classList.remove("ligado")
                    indice += 1
                }, interval);
            } else if (sequencia_sort[indice] === 3) {
                amarelo.classList.add("ligado")
                setTimeout(() => {
                    amarelo.classList.remove("ligado")
                    indice += 1
                }, interval);
            } else if (sequencia_sort[indice] === 4) {
                azul.classList.add("ligado")
                setTimeout(() => {
                    azul.classList.remove("ligado")
                    indice += 1
                }, interval);
            }
        } else {
            estado = "jogadas"
            clearInterval(id)
        }
    }, interval);
}


vermelho.addEventListener("click", () => jogadas(2))
verde.addEventListener("click", () => jogadas(1))
azul.addEventListener("click", () => jogadas(4))
amarelo.addEventListener("click", () => jogadas(3))


function jogadas(clicada) {
    if (estado !== "jogadas") return

    if (indiceJogadas < sequencia_sort.length) {
        if (sequencia_sort[indiceJogadas] == clicada) {
        } else {
            popup.classList.add("ativo")
            popupTitulo.textContent = "VOCÊ PERDEU!"
            setTimeout(() => {
                popup.classList.remove("ativo")
                sequencia_sort = []
                indiceJogadas = 0
                rodadas = 0
                placar.textContent = rodadas
                estado = "gameover"
            }, 1500);

        }
    }
    indiceJogadas++

    if (indiceJogadas == sequencia_sort.length) {
        popup.classList.add("ativo")
        popupTitulo.textContent = "ACERTOU A RODADA!"
        setTimeout(() => {
            popup.classList.remove("ativo")
            rodadas += 1
            placar.textContent = rodadas
            indiceJogadas = 0
            sorteio()
        }, 1500);
    }
}
