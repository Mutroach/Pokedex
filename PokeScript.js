let pokeNumber = Math.round(Math.random() * (150 - 1) + 1 );
let pokeurl = ("https://pokeapi.co/api/v2/pokemon/"+pokeNumber);
let pokeSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokeNumber+".png";

fetch(pokeurl)
.then(response => response.json())
.then(data => {

    let habilidad = data.abilities[0].ability.name;
    let alto = data.height;
    let peso = data.weight;
    let nombre = data.name;

//    document.getElementById("central").innerHTML = nombre;
    document.getElementById("imagen").innerHTML = `<img src=`+pokeSprite+` id="img">`;
    document.getElementById("nombre").innerHTML = nombre;
})

