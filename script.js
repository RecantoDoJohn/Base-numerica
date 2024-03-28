const valorelemt = document.querySelector(".valor")
const resposta = document.querySelector(".resposta")
const primeiro = document.querySelector("#primo")
const segundo = document.querySelector("#seguda")
var de, para, test = 0

function aparecer() {
    switch (primeiro.value) {
        case "Binario":
            de = 2
            break
        case "Decimal":
            de = 10
        case "Octal":
            de = 8
            break
        case "Hexadecimal":
            de = 16
            break
    } switch (segundo.value) {
        case "Binario":
            para = 2
            break
        case "Decimal":
            para = 10
        case "Octal":
            para = 8
            break
        case "Hexadecimal":
            para = 16
            break
    }
    valorBruto = valorelemt.value
    test = conversor(valorBruto, de, para)
    if (test != "NaN") {
        resposta.innerHTML = test 
    } else {
        resposta.innerHTML = `Erro: digite um valor em ${primeiro.value}`
    }
}

function conversor(num, de, para) {
    return parseInt(num, de).toString(para)
}