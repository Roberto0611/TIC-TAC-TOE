//Script by: Roberto Ochoa Cuevas

let cellsUsed = 0; //let to count the cells used

//Tie logic
function tieLogic(){
    for (let x = 0; x < arrayCells.length; x++) { //For loop for each element in arrayCells
        if(arrayCells[x].textContent == 'o' || arrayCells[x].textContent == 'x'){ //Condition to know if there's something printed in the cells
            cellsUsed++;//Add 1 to the cells used
        }
        if(cellsUsed == 45){ //Count to know if all the cells are used
            alert("it's a tie") 
        }
    }
};
