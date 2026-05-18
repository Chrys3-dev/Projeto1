const sla = () => {
    let fundo = document.querySelector('body')

    if(fundo.style.backgroundColor === 'white'){
        fundo.style.backgroundColor = 'black'
    }else {
        fundo.style.backgroundColor = 'white'
    }
}