//Script by: Roberto Ochoa Cuevas

//Get cells
let cells = boardSize * boardSize;
let cell = [];

//Set turns and get turns text to display it
turns = ['x','o'];
actualTurn = turns[0]; 
turnsText = document.getElementById('turnText');
//Set the text to show the actual turn
turnsText.textContent = "it's" + " "+ actualTurn + " " +"turn" ;

//Function to show te X's and the O's
function draw(index){
    index.addEventListener('click',function(){ //Add event listener to all the cells
        if (index.textContent == '') { //Check if the cell is in blank
            index.textContent = actualTurn; //Draw the X or O
            // Change turn logic
            if(actualTurn == turns[0]){
                actualTurn = turns[1];
            }else{
                actualTurn = turns[0];
            }

            turnsText.textContent = "it's" + " "+ actualTurn + " " +"turn" ; //display next turn
            cellsUsed++; //Add 1 to the cells Used

            setTimeout(function () { //Set time Out To Draw first and then announce the winner. 
                winner();
            }, 0);

        }else{ //If the cell isn't blank:
            alert("This cell is already in use");
        }
    })
}
arrayCells.forEach(function(index) { //For each to add the event listener to all the cells
    draw(index);//Run the function
}); 