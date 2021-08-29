let peso = "";
let altura = "";
let movimientos = "";

function pokeRandom() {
    let pokeNumber = Math.round(Math.random() * (150 - 1) + 1 );
    let pokeurl = ("https://pokeapi.co/api/v2/pokemon/"+pokeNumber);
    let pokeSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokeNumber+".png";

    fetch(pokeurl)
    .then(response => response.json())
    .then(data => {
        movimientos = data.abilities[0].ability.name;
        altura = data.height;
        peso = data.weight;
        let nombre = data.name;

        var mayus = nombre.split(" ");
        for (var i = 0; i < mayus.length; i++) {
            mayus[i] = mayus[i].charAt(0).toUpperCase() + mayus[i].slice(1);
        } 
        var pokeNombreMayuscula = mayus.join(" ");

        document.getElementById("imagenWhite").innerHTML = `<img class="bynfilter" src=`+pokeSprite+` id="img">`;
        document.getElementById("imagen").innerHTML = `<img src=`+pokeSprite+` id="img">`;
        document.getElementById("nombre").innerHTML = pokeNombreMayuscula;
        document.getElementById("stats").innerHTML = "";
    })
}
pokeRandom();

function pokePeso() {
    document.getElementById("stats").innerHTML = '<div class="stats" id="peso"><p>Peso: ' + peso + '</p></div>';
}

function pokeAltura() {
    document.getElementById("stats").innerHTML = '<div class="stats" id="altura"><p>Altura: ' + altura + '</p></div>';
}

function pokeMovimientos() {
    document.getElementById("stats").innerHTML = '<div class="stats" id="movimientos"><p>Movimientos: ' + movimientos + '</p></div>';
}