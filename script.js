const sla = () => {
    let fundo = document.querySelector('body')

    if(fundo.style.backgroundColor === 'white'){
        fundo.style.backgroundColor = 'black'
    }else {
        fundo.style.backgroundColor = 'white'
    }

    novo()
}

const novo = () => {
   let existe = document.querySelector('.p')
   let div = document.querySelector('div')

   if(!existe){
     let paragrafo = document.createElement("p")
     paragrafo.className  = "p"
     paragrafo.textContent = "Mais um parágrafo"
     div.appendChild(paragrafo)
   }
}