var cor_atual = "#000000"
var contador



function ver_valor() {
    largura = document.getElementById("largura").value
    altura = document.getElementById("altura").value

    ln = document.getElementById("ln")
    an = document.getElementById("an")

    ln.innerHTML = largura
    an.innerHTML = altura
}

function clicou() {
    contador = 1
    console.log("clicou")
}

function soltou() {
    contador = 0
    console.log("soltou")
}

function limpar() {
    console.clear()
    criar_grade()
}

function apagar() {
    document.getElementById("modo").innerHTML = "Apagar"
    cor_atual = "white" 
}

function trocar_cor(cor) {
    cor_atual = cor
    console.log("Cor trocada para: " + cor)
    document.getElementById("modo").innerHTML = "Pintar" 
}

function pintar(pixel) {
    if (contador == 1) {
        if (pixel.style.backgroundColor != cor_atual) {
            pixel.style.backgroundColor = cor_atual
            console.log("Pintou o pixel " + pixel.id + " com a cor: " + cor_atual)
        }
    }
}

function criar_grade() {

    l = document.getElementById("largura").value
    a = document.getElementById("altura").value

    if (!a) {a = 1}
    if (!l) {l = 1}

    console.log(a, l)

    let art = document.getElementById("art")
    let tags = ""
    let pixel_number = 0
    let pixel_l

    for (let pixel_a = 0; pixel_a < a; pixel_a++) {
        tags += "<div class=\"row\">"
        for (let pixel_l = 0; pixel_l < l; pixel_l++) {
            tags += "<div id=" + String(pixel_number) + " onmouseover=\"pintar(this)\" class=\"pixel\"></div>"
            pixel_number++
        } tags += "</div>"
    } art.innerHTML = tags
}

