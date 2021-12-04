var namepoke = document.querySelector(".name");
let codigo = document.querySelector(".id");
let pokemon = document.querySelector(".pokemon");
let next = document.querySelector(".next");

var id = 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        pokemon.innerHTML = `<img src="${data.sprites.front_shiny}">`

        namepoke.innerHTML = `<h2>${data.name}</h2>`

        codigo.innerHTML = `<h2>${data.order}</h2>`

    })

    function nextpoke() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {

        pokemon.innerHTML = `<img src="${data.sprites.front_default}">`

        namepoke.innerHTML = `<h2>${data.name}</h2>`

        codigo.innerHTML = `<h2>${data.order}</h2>`

    })
    }

next.addEventListener('click', function() {
    id = id + 1;
    nextpoke()
})


    
