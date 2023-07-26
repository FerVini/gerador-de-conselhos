const url = 'https://api.adviceslip.com/advice'

const numeroConselho = document.querySelector('span') 
const conselho = document.querySelector('h1')
const botao = document.querySelector('button')

async function processaDados() {

    const response = await fetch(url); 
    const data = await response.json()

    const idConselho = data.slip.id
    const textoConselho = data.slip.advice

    numeroConselho.innerText = idConselho
    conselho.innerText = textoConselho
}

botao.addEventListener('click', () => {
    processaDados()
})