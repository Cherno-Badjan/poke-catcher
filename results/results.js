//import renderResultsTable function
import { renderResultsTable } from '../results/render-results.js';
import { getPokeStats } from '../localStorageUtils.js';
import { makeLabelArray, makeSeenArray, makeCaughtArray } from '../results/munge-utils.js';

const pokeStats = getPokeStats();


//Call imported function
renderResultsTable();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();
    location.href = '../index.html';
});

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: makeLabelArray(pokeStats),
        datasets: [{
            label: 'Number of times seen',
            backgroundColor: 'turquoise',
            borderColor: 'turquoise',
            data: makeSeenArray(pokeStats)
        },
        {
            label: 'Number of times caught',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: makeCaughtArray(pokeStats)
        },
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
        }
    }
});
