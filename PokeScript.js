function pokeRandom(){
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

        var mayus = nombre.split(" ");
        for (var i = 0; i < mayus.length; i++) {
            mayus[i] = mayus[i].charAt(0).toUpperCase() + mayus[i].slice(1);
        } 
        var pokeNombreMayuscula = mayus.join(" ");

        document.getElementById("imagenWhite").innerHTML = `<img class="bynfilter" src=`+pokeSprite+` id="img">`;
        document.getElementById("imagen").innerHTML = `<img src=`+pokeSprite+` id="img">`;
        document.getElementById("nombre").innerHTML = pokeNombreMayuscula;
    })
}
pokeRandom();


