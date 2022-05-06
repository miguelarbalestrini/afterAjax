const pokeID = document.getElementById("pokeID");
const APIURL = 'https://pokeapi.co/api/v2/pokemon/';


const getDataAjax = () => {
    $.ajax({
        method: "GET",
        url: APIURL,
        success: (respuesta) => {
            console.log(respuesta);
        },
        error: (state, responseText) => {
            console.log(state);
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: `${responseText}, El server respondió con ${state.status}`,
            })
        }
    });
}

const getDataFetch = (pokemon) => {
    fetch(`${APIURL}${pokemon}`)
        .then(response => response.json())
        .then(data => renderData(data))
        .catch((error) => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Algo salió mal',
                text: ` ${error}`,
            })
        })
}

const getDataFetchAsync = async (pokemon) => {
    try {
        let response = await fetch(`${APIURL}${pokemon}`);
        let data = await response.json();
        renderData(data);
    }
    catch(error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: ` ${error}`,
        })
    }
}

$(document).ready(function () {
    //Declaramos la url del API
    //Agregamos un botón con jQuery
    //Escuchamos el evento click del botón agregado
    // getDataAjax();
});

let counter = 0;
const renderData = (pokemon) => {
    if (pokemon != undefined) {
        const pokedex = document.getElementById('pokedex');
        pokedex.innerHTML += (`
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

document.getElementById('render').onclick = (() => {
    console.log(pokeID.value, 'VALUE')
    let pokemonID = Number(pokeID.value);
    if (Number.isInteger(pokemonID) && pokemonID > 0 && pokemonID < 899) {
        // getDataFetch(pokemonID);
        getDataFetchAsync(pokemonID);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'No ingresaste un pokemon válido',
            text: 'Tiene que ser un entero entre 1 y 898!',
        })
    }
});