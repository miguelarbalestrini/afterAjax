let pokeID = $("#pokeID");
const APIURL = 'https://pokeapi.co/api/v2/pokemon/';


const getData = (pokemon) => {
    $.ajax({
        method: "GET",
        url: APIURL + `${pokemon}/`,
        success: (respuesta) => {
            // console.log(respuesta);
            // console.log(respuesta.sprites.front_default);
            // $("body").prepend(`<img src='${respuesta.sprites.front_default}'></img>`);
            // data = JSON.parse(respuesta);
            renderData((respuesta));
        },
        error: (state, responseText) => {
            console.log(state);
            alert(` ${responseText}, El server respondió con ${state.status}`)

        }
    });
}

$(document).ready(function () {
    //Declaramos la url del API
    //Agregamos un botón con jQuery
    //Escuchamos el evento click del botón agregado
    // getData();
});

let counter = 0;
const renderData = (pokemon) => {
    if (pokemon != undefined) {
        const pokedex = $('#pokedex');
        pokedex.prepend(`
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
    if (Number.isInteger(pokemonID) && pokemonID > 0 && pokemonID < 899) {
        getData(pokemonID);
    }
    else {
        alert("Tiene que ser un entero entre 1 y 898!");
    }
});