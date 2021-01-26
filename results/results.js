//import renderResultsTable function
import { renderResultsTable } from '../results/render-results.js';

//Call imported function
renderResultsTable();

const button = document.querySelector('button');

button.addEventListener('click', () => {
    localStorage.clear();
    location.href = '../index.html';
});
