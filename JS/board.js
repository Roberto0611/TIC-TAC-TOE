// Obtiene el elemento del tablero
const boardContainer = document.getElementById('board');

// Define el tamaño del tablero (3x3 en este caso)
const boardSize = 3;

// Genera las celdas del tablero usando un bucle anidado
for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
        // Crea un elemento div para representar cada celda
        const cell = document.createElement('div');

        // Asigna una clase "cell" a cada celda
        cell.classList.add('cell');

        // Agrega un identificador único a cada celda (por ejemplo, "cell-0-0", "cell-0-1", etc.)
        cell.id = `cell-${i}-${j}`;

        // Agrega la celda al tablero
        boardContainer.appendChild(cell);
    }
}
