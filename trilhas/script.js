// selecionar todos os elementos com a classe Pasta
document.querySelectorAll('.pasta').forEach(folder => {
    folder.onclick = function(e){
        const ul = folder.nextElementSibling // pega o elemento posterior da pasta
        const d = ul.style.display // apartir da ul pegamos a visibilidade o display
        ul.style.display = d === 'block' ? 'none' : 'block' // alternando entre block e none mostrar e esconder
    }
})