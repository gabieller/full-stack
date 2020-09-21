window.addEventListener('load', start) //Só será executado quando a pg terminar de carregar

let globalNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco']
let inputName = null
let isEditing = false
let currentIndex = null

function start() {
    inputName = document.querySelector('#inputName')

    preventFormSubmit()
    activateInput()
    render()
}

function preventFormSubmit() {
    function handleFormSubmit(event) {  //Dentro porque vai ser usado só aqui
        event.preventDefault() //Evitar que o form recarregue quando eu envio
    }

    let form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)
}

function activateInput() {
    function insertName(newName) {
        globalNames.push(newName)
        render()
    }

    function updateName(newName) {
        globalNames[currentIndex] = newName
        render()
    }

    function handleTyping(event) {
        let hasText = !!event.target.value && event.target.value.trim() !== ''

        if (!hasText) {
            clearInput()
            return
        }

        if (event.key === 'Enter') { //Quando enter for pressionado
        if (isEditing){
            updateName(event.target.value)
        } else {
            insertName(event.target.value)
        }
        isEditing = false
        clearInput()
    }
}

    inputName.addEventListener('keyup', handleTyping) //Monitoramento da digitação
    inputName.focus() //Foco visual no campo input
}

function render() { //Pegar o elemento da div e inserir elementos dinamicamente nele
    function createDeleteButton(index) { //Deletar o botão ao clicar
        function deleteName() {
            globalNames.splice(index,1)
            render()
        }

        let button = document.createElement('button')
        button.classList.add('deleteButton')
        button.textContent = 'x'
        button.addEventListener('click', deleteName)
        return button
    }

    function createSpan(name, index) {
        function editItem() {
            inputName.value = name
            inputName.focus()
            isEditing = true
            currentIndex = index

        }

        let span = document.createElement('span') //Pegando o texto
        span.classList.add('clickable')
        span.textContent = name
        span.addEventListener('click', editItem)
        return span
    }

    let divNames = document.querySelector('#names')
    divNames.innerHTML = '' //Limpando no campo de inserção
    // Crir ul
    // Fazer n li's conforme tamanho do array (globalNames)
    let ul = document.createElement('ul') //Criar elemento do HTML usando JS
    
    for (let i=0; i < globalNames.length; i++ ) { //Percorrendo todos os nomes e criando o botão
        let currentName = globalNames[i]
        
        let li = document.createElement('li')
        let button = createDeleteButton(i)
        let span =  createSpan(currentName, i)


        
        li.appendChild(button)
        li.appendChild(span)

        ul.appendChild(li)
    }
    divNames.appendChild(ul)
    clearInput() //Limpar o input
}

function clearInput() {
    inputName.value = ''
    inputName.focus()
}