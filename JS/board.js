//
arrayCells = [[]];

//Get board element
const boardContainer = document.getElementById('board');

// Define the board (3x3)
const boardSize = 3;

// Generate the board with loops
for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
        // Create a div ( cell)
        const cell = document.createElement('div');

        //add Cell class to the div
        cell.classList.add('cell');

        //Add an ID to the cell
        cell.id = `cell-${i}-${j}`;

        // add the cell to the board
        boardContainer.appendChild(cell);
        arrayCells.push(document.getElementById(`cell-${i}-${j}`));
    }
}