//import renderResultsTable function
import { renderResultsTable } from '../results/render-results.js';

//Call imported function
renderResultsTable();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();
    location.href = '../index.html';
});

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Poke Catcher Results',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});