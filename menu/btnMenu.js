// talvez uma gambiarra pura e que acabei me estressando kakaka 
// mas funcionou no final kkaka nao como deveria mas ta la

// pegando cada elemente pela classe
const navegacao = document.querySelector('.nav')
const cadastro = document.querySelector('.cadastro')
const conteudo = document.querySelector('.conteudo')
const rodape = document.querySelector('.rodape')
const copy = document.querySelector('.copy')

const menu = document.querySelector('.lista-nav')
const btnOpen = document.querySelector('.open-menu')
const btnClose = document.querySelector('.close-menu')


// adicionando um evento quando for clicado
btnOpen.addEventListener('click', function() {
    menu.classList.remove('close')
    
    btnOpen.classList.add('close')
    btnClose.classList.remove('close')

    navegacao.classList.add('close')
    cadastro.classList.add('close')
    conteudo.classList.add('close')
    rodape.classList.add('close')
    copy.classList.add('close')
})


btnClose.addEventListener('click', function() {
    menu.classList.add('close')
    
    btnOpen.classList.remove('close')
    btnClose.classList.add('close')

    navegacao.classList.remove('close')
    cadastro.classList.remove('close')
    conteudo.classList.remove('close')
    rodape.classList.remove('close')
    copy.classList.remove('close')
})
