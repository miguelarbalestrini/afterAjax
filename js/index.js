let pokeID = $("#pokeID");
const APIURL = 'http://pokeapi.co/api/v2/pokemon/';

const getData = (pokemon) => {
    $.ajax({
        method: "GET",
        url: APIURL + `${pokemon}/`,
        success: function (respuesta) {
            // console.log(respuesta);
            // console.log(respuesta.sprites.front_default);
            // $("body").prepend(`<img src='${respuesta.sprites.front_default}'></img>`);
            // data = JSON.parse(respuesta); 
            console.log(respuesta);
            renderData(respuesta);
        },
    });
}

$(document).ready(function () {
    //Declaramos la url del API
    // getTestData();
    //Agregamos un botón con jQuery
    //Escuchamos el evento click del botón agregado
    // getData();
});

let counter = 0;
const renderData = (pokemon) => {
    console.log(pokemon, 'DATA');
    if (pokemon != undefined) {
        const pokedex = $('#pokedex');
        pokedex.append(`
        <div class="card" style="width: 18rem;">
            <img src="${pokemon.sprites.front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${pokemon.name}</h5>
                <ul>
                    <li>Pokemon id: ${pokemon.id}</li>
                    <li>Height: ${pokemon.height}</li>
                    <li>Weight: ${pokemon.weight}</li>
                </ul>
            </div>
        </div>
        `);
    }
}

$('#render').click(() => {
    console.log(pokeID[0].value, 'VALUE')
    let pokemonID = Number(pokeID[0].value);
    if (Number.isInteger(pokemonID)) {
        getData(pokemonID);
    }
    else {
        alert("Tiene que ser un número!");
    }
});