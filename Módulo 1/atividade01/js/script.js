window.addEventListener('load', start) //Só será executado quando a pg terminar de carregar

let sliderRed = null
let sliderGreen = null
let sliderBlue = null
let textRed = null
let textGreen = null
let textBlue = null

function start () { //Função que será inicializada com tudo que irá ocorrer no programa
    input()
    rangeValue()
    changeText()
}

function input () {  //Seleciona cada elemento
    sliderRed = document.querySelector("#sliderRed")
    sliderGreen = document.querySelector("#sliderGreen")
    sliderBlue = document.querySelector("#sliderBlue")
    textRed = document.querySelector("#textRed")
    textGreen = document.querySelector("#textGreen")
    textBlue = document.querySelector("#textBlue")
}

function rangeValue() { //Quando tiver um input no range, chamar função para alterar texto
    sliderRed.addEventListener('input', changeText)
    sliderGreen.addEventListener('input', changeText)
    sliderBlue.addEventListener('input', changeText)
}

function changeText() { // Quero que o valor do text seja o valor do range
    console.log(textRed.innerHTML = sliderRed.value)
    console.log(textGreen.innerHTML = sliderGreen.value)
    console.log(textBlue.innerHTML = sliderBlue.value)
}







