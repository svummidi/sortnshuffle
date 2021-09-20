import NumberGrid from "./numbergrid.js";

// Initialize the grid
const grid = new NumberGrid('gridWrapper', 9, true);

//generate grid
grid.generate();

// Event Listeners
const sortBtn = document.getElementById('sort');
const shuffleBtn = document.getElementById('shuffle');

sortBtn.addEventListener('click', () => {
    grid.sort();
});

shuffleBtn.addEventListener('click', () => {
    grid.shuffle();
})