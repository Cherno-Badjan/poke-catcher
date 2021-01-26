//Create magic string variable
const POKESTATS = 'POKESTATS';

//Import findByID function
import { findById } from './utils.js';

//Write getPokeStats function (this function captures the data for the number of times a pokemon was seen/caught and sends it to local storage)

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }

    return stats;
}

//Write setPokeStats function (this function adds new stats(seen/caught) to local storage)

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

//Write increaseSeen function(this function uses the getPokeStats + findByID function to determine if pokemon has been seen & identify the pokemon by ID. If it has not been seen, set seen counter to 1 and push to newStat array else, increase seen counter by one (seen++) and use the setPokeStats function to send info to localStorage.

export function increaseSeen(_id) {
    const stats = getPokeStats();

    const poke = findById(stats, _id);

    if (!poke) {
        const newStat = {
            _id: _id,
            seen: 1,
            caught: 0,
        };

        stats.push(newStat);
    } else {
        poke.seen++;


    }

    setPokeStats(stats);
}
//Write increaseCaught function(this function uses the getPokeStats and findByID function to track the number of times a pokemon has been caught & identify the pokemon by ID. The caught counter is increased by one (caught++). The info is then sent to localStorage using the setPokeStats function.

export function increaseCaught(_id) {
    const stats = getPokeStats();

    const poke = findById(stats, _id);

    poke.caught++;


    setPokeStats(stats);
}
