var setaDireita = window.document.getElementById("setadireita")
var Bruna = window.document.getElementById("bruna")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Samantha.style ="display:flex"
    Bruna.style = "display:none"
    setaEsquerda.style = "display:flex"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    Samantha.style ="display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}
