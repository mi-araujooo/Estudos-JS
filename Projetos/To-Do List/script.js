const input = document.getElementById("adicionar")
const botao = document.querySelector(".add")
const listaTarefas = document.querySelector(".lista-tarefas")

botao.addEventListener("click", maisBloco)

function maisBloco() {
    let texto = input.value
    const textSemEspaco = texto.trim()

    if(textSemEspaco.length != 0){
        input.value = ""
        const newDiv = document.createElement("div");
        newDiv.classList.add("espaco_tarefas")

        let bt = document.createElement("button")
        bt.textContent = "✓"
        bt.classList.add("btn-concluir")
        newDiv.appendChild(bt)

        let espaco_txt = document.createElement("div")
        espaco_txt.classList.add("espaco_txt")
        newDiv.appendChild(espaco_txt)

        let tx = document.createElement("span")
        tx.textContent = texto
        tx.classList.add("texto-tarefa")
        espaco_txt.appendChild(tx)

        let edit = document.createElement("button")
        edit.innerHTML = `<i class="fa-solid fa-pen"></i>`
        edit.classList.add("btn-edit")
        espaco_txt.appendChild(edit)

        let del = document.createElement("button")
        del.classList.add("btn-del")
        del.innerHTML = `<i class="fa-solid fa-trash"></i>`

        del.onclick = function(){
            const tarefa = del.closest(".espaco_tarefas")
            tarefa.classList.add("saindo")
              setTimeout(() => {
                tarefa.remove()
            }, 250)
        }
        bt.onclick = function () {
            const concluida = bt.classList.toggle("ativo")

            tx.classList.toggle("concluido", concluida)
            espaco_txt.classList.toggle("concluido", concluida)
            newDiv.classList.toggle("concluida", concluida)

            edit.disabled = concluida
        }
        edit.onclick = function () {
            const tarefa = del.closest(".espaco_tarefas")
            const texto = tarefa.querySelector(".texto-tarefa")
            texto.contentEditable = true
            texto.focus()

            texto.addEventListener("blur", () => {
                texto.contentEditable = false
            })
        }

        espaco_txt.appendChild(del)

        listaTarefas.appendChild(newDiv)
    
    }else{
        alert("Não foi possivel adicionar a tarefa. Escreva a tarefa por favor!")
        return alert
    }
}