//Script by: Roberto Ochoa Cuevas

function resetGame(){
    for (let index = 0; index < arrayCells.length; index++) {
        arrayCells[index].textContent = '';
    }
    cellsUsed = 0;
}