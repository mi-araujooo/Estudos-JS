//maiúscula
let maiAtiv = true
const maius = document.getElementById("btnMaius");
maius.addEventListener("click", () => {
    maiAtiv = !maiAtiv
})

//minúscula
let minAtiv = false
const minus = document.getElementById("btnMinus")
minus.addEventListener("click", () => {
    minAtiv = !minAtiv
})

//números
let numAtiv = false
const num = document.getElementById("btnNum")
num.addEventListener("click", () => {
    numAtiv = !numAtiv
})

//simbolos
let simAtiv = false
const simbol = document.getElementById("btnSimbol")
simbol.addEventListener("click", () => {
    simAtiv = !simAtiv
})

//range
const range = document.getElementById("range");
const texto = document.getElementById("valorRange");
range.addEventListener("input", () => {
    texto.textContent = range.value;
});


function sorteio() {
    let listaFinal = []
    const tamanho = Number(range.value);
    let senha = ""

    const listaMinus = "abcdefghijklmnopqrstuvwxyz"
    const listaMaius = listaMinus.toLocaleUpperCase()
    const numeros = "0123456789"
    const simbolos = "@#$%*:;/~[]"



    if (maiAtiv) listaFinal.push(...listaMaius)
    if (minAtiv) listaFinal.push(...listaMinus)
    if (numAtiv) listaFinal.push(...numeros)
    if (simAtiv) listaFinal.push(...simbolos)

    if (listaFinal.length === 0) {
        alert("Escolha pelo menos um requisito!");
        return;
    }else{
        for (let i = 0; i < tamanho; i++) {
            let indice = Math.floor(Math.random() * listaFinal.length);
            senha += listaFinal[indice]
        }
    }

    const barra = document.getElementById("barraForca");
    const porcentagem = document.getElementById("porcentagem")
    const requisitosAtivos = [maiAtiv, minAtiv, numAtiv, simAtiv].filter(r => r).length;
    let score_final = requisitosAtivos + tamanho
    let scorePercentual = (score_final / 14) * 100
    barra.style.width = scorePercentual + "%";
    porcentagem.textContent = Math.round(scorePercentual) + "%";

    document.getElementById("campoSenha").textContent = senha;
}

sorteio()