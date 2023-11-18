//Script by: Roberto Ochoa Cuevas

let cellsUsed = 0; //let to count the cells used
function winner() {
    // verify lines
    for (let i = 0; i < 3; i++) { //For loop to check every line in the board
      if (
        arrayCells[i * 3].textContent !== '' && //Check that the cell has content (multiplied by 3 because we have a 3x3 board)
        arrayCells[i * 3].textContent === arrayCells[i * 3 + 1].textContent && //Check if the cell has the same content as the one at the side
        arrayCells[i * 3].textContent === arrayCells[i * 3 + 2].textContent//Check if the cell has the same content as the one at the side
      ) {
        let winner =  arrayCells[i * 3].textContent;
        alert('WINNER WINNER CHICKEN DINNER' + ' ' + winner + " " + "it's the winner"); //Alert winner
        resetGame();
        return;
      }
    }
    // Verify columns
    for (let i = 0; i < 3; i++) { //For loop to check every column in the board
      if (
        arrayCells[i].textContent !== '' && 
        arrayCells[i].textContent === arrayCells[i + 3].textContent &&
        arrayCells[i].textContent === arrayCells[i + 6].textContent
      ) {
        let winner =  arrayCells[i+3].textContent;
        alert('WINNER WINNER CHICKEN DINNER' + ' ' + winner + " " + "it's the winner"); //Alert winner
        resetGame();
        return;
      }
    }
    //Verify Diagonals
    if(
        arrayCells[2].textContent !== '' && //Checking cells (2,4,6)
        arrayCells[4].textContent !== '' &&
        arrayCells[6].textContent !== '' &&
        arrayCells[2].textContent == arrayCells[4].textContent &&
        arrayCells[2].textContent == arrayCells[6].textContent
    ) {
        let winner =  arrayCells[2].textContent;
        alert('WINNER WINNER CHICKEN DINNER' + ' ' + winner + " " + "it's the winner"); //Alert winner
        resetGame();
        return;
    }
    if(
        arrayCells[0].textContent !== '' &&//Checking cells (0,4,8)
        arrayCells[4].textContent !== '' &&
        arrayCells[8].textContent !== '' &&
        arrayCells[0].textContent == arrayCells[4].textContent &&
        arrayCells[0].textContent == arrayCells[8].textContent
    ) {
        let winner =  arrayCells[0].textContent;
        alert('WINNER WINNER CHICKEN DINNER' + ' ' + winner + " " + "it's the winner"); //Alert winner
        resetGame();
        return;
    }

    tieLogic();//If there's no winner , check if there's a tie
  }

//Tie logic
function tieLogic(){
    if (cellsUsed == 9) {
        alert("ITS A TIE");
        resetGame()
    }
};
