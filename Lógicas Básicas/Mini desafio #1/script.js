const botao = document.querySelector(".adicionar")
const lista = document.querySelector(".lista")
const input = document.getElementById("input")

botao.addEventListener("click", maisUm)

function maisUm() {
    const texto = input.value
    const semEspaco = texto.trim()

    if(semEspaco.length !== 0){
        input.value = ""

        const novo = document.createElement("div")
        novo.classList.add("item")

        const espaço = document.createElement("div")
        espaço.classList.add("espaço_txt")

        const bt_ok = document.createElement("button")
        bt_ok.classList.add("bt_ok")
        bt_ok.textContent = "OK"
        novo.appendChild(bt_ok)

        const txt = document.createElement("span")
        txt.classList.add("txt")
        txt.textContent = texto
        espaço.appendChild(txt)
        novo.appendChild(espaço)

        bt_ok.onclick = function () {
            txt.classList.toggle("fim")
        }

        lista.appendChild(novo)
    }
}