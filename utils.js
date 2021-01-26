//Import data from pokemon-data.js
import { pokeData } from './pokemon-data.js';

//Import functions (increaseCaught and increaseSeen) and grab DOM elements.

import { increaseSeen, increaseCaught } from './localStorageUtils.js';

//Initialize the numberOfTurns and set to 0. (User is allowed 10 tries)

let numberOfTurns = 0;

//Declare function getRandomPokemon (this function will go through the pokemon data and randomly generate a pokemon. IT then returns the index of said random pokemon. Use Math.random * data.length)

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokeData.length);

    return pokeData[randomIndex];
}

//Declare findByID function(Copy and paste from shopping cart lab. Takes in array and ID and uses it to identify the pokemon by ID)
export function findById(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}


//Declare setThreePokemon function(This function uses the getRandomPokemon function to grab three random pokemons. It then uses a while loop to check if any of the pokemons generated are the same. If they are, generate new pokemons else use the renderImage function to display images of pokemon to user (append to HTML element). Use the incrementSeen function to increase the 'seen' property of the pokemons displayed. Clear textContent of the HTML element. This function also increases the numberOfTurns by one (numberOfTurns++))
export function setThreePokemon() {
    numberOfTurns++;

    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne._id === pokeTwo._id || pokeTwo._id === pokeThree._id || pokeOne._id === pokeThree._id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }

    const img1 = renderImage(pokeOne);
    const img2 = renderImage(pokeTwo);
    const img3 = renderImage(pokeThree);

    increaseSeen(pokeOne._id);
    increaseSeen(pokeTwo._id);
    increaseSeen(pokeThree._id);

    const div = document.getElementById('pokemon');

    div.textContent = '';

    div.append(img1, img2, img3);
}

//Declare renderImage function(This function takes in a pokemonItem from the data, creates an image element, and has an event listener added to listen for a click on the image. In the cool zone of said event listener, we use the increaseCaught function which takes in the pokemon.id as an argument and increases the number of times caught for the pokemon clicked on. It also tracks the numberOfTurns. If numberOfTurns < 10, we call the setThreePokemon function to generate three unique pokemons. Else, we redirect to a new window and display the results of the 10 tries.)
export function renderImage(pokemonItem) {

    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        increaseCaught(pokemonItem._id);
        if (numberOfTurns < 11) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }
    });

    return image;
}
