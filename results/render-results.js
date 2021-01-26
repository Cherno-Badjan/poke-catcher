import { findById } from '../utils.js';
import { getPokeStats } from '../localStorageUtils.js';
import { pokeData } from '../pokemon-data.js';

const tableBody = document.getElementById('table-body');



export function renderResultsTable() {
    const resultsStats = getPokeStats();
    for (let item of resultsStats) {
        const pokemonItem = findById(pokeData, item._id);



        const tr = document.createElement('tr');
        const nameTd = document.createElement('td');
        const caughtTd = document.createElement('td');
        const seenTd = document.createElement('td');


        nameTd.textContent = pokemonItem.pokemon;
        caughtTd.textContent = item.caught;
        seenTd.textContent = item.seen;

        tr.append(nameTd, caughtTd, seenTd);


        tableBody.append(tr);

    }
}