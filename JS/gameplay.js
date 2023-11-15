//Script by: Roberto Ochoa Cuevas

//Get cells
let cells = boardSize * boardSize;
let cell = [];

//Set turns and get turns text to display it
turns = ['x','o'];
actualTurn = turns[0]; 
turnstext = document.getElementById('turnText');
//Set the text to show the actual turn
turnstext.textContent = "it's" + " "+ actualTurn + " " +"turn" ;

//Function to show te X's and the O's
function draw(index){
    index.addEventListener('click',function(){ //Add event listener to all the cells
        index.textContent = actualTurn; //Draw the X or O

        if(actualTurn == turns[0]){// Change turn logic
            actualTurn = turns[1];
            turnstext.textContent = "it's" + " "+ actualTurn + " " +"turn" ; //display next turn
        }else{
            actualTurn = turns[0];
            turnstext.textContent = "it's" + " "+ actualTurn + " " +"turn" ; //display next turn
        }
    })
}
arrayCells.forEach(function(index) { //For each to add the event listener to all the cells
    draw(index);//Run the function
}); 