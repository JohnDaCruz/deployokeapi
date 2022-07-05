function idPk(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(api => api.json())
        .then(response => {
            const divPoke = document.querySelector('#conteudo')
            const namePoke = response.name
            const imgPoke = response.sprites.front_default
            console.log(response)

            criarElementos(divPoke, namePoke, imgPoke)
        })

}
function iterPoke(n) {
    for (let i = 1; i < n; i++) { idPk(i) }
}

function criarElementos(divPoke, namePoke, imgPoke) {
    var divPai = document.createElement('div')
    var divFilho = document.createElement('div')
    var pokeText = document.createElement('h3')
    var img = document.createElement('img')

    pokeText.textContent = namePoke
    img.src = imgPoke

    divFilho.appendChild(img)
    divFilho.appendChild(pokeText)
    divPai.appendChild(divFilho)
    divPoke.appendChild(divPai)

    divPai.classList.add('pokemons')
}
iterPoke(1024)





