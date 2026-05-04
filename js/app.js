const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const pokemonType = document.querySelector('.pokemon__type');
const pokemonWeight = document.querySelector('.pokemon__weight');
const pokemonHeight = document.querySelector('.pokemon__height');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const btNext = document.querySelector('.btn-next');
const btPrev = document.querySelector('.btn-prev');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    try {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (APIResponse.status === 200) {
            const data = await APIResponse.json();
            return data;
        }
        return false;
    } catch (error) {
        return false;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'Buscando...';
    pokemonNumber.innerHTML = '';
    pokemonType.innerHTML = '...';
    pokemonWeight.innerHTML = '...';
    pokemonHeight.innerHTML = '...';
    pokemonImage.style.display = 'none';

    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImage.style.display = 'block';    
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        
        const types = data.types.map(t => t.type.name).join(' / ');
        pokemonType.innerHTML = types;
        

        pokemonWeight.innerHTML = (data.weight / 10).toFixed(1);
        pokemonHeight.innerHTML = (data.height / 10).toFixed(1);

        pokemonImage.src = data['sprites']['other']['showdown']['front_default'] || data['sprites']['front_default'];

        input.value = '';
        searchPokemon = data.id;
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'No encontrado';
        pokemonNumber.innerHTML = '???';
        pokemonType.innerHTML = '-';
        pokemonWeight.innerHTML = '-';
        pokemonHeight.innerHTML = '-';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

btPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

btNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);