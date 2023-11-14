//Script by: Roberto Ochoa Cuevas

//Get cells
let cells = boardSize * boardSize;
let cell = [];

const cell1 = document.getElementById('cell-0-0');

turns = ['x','o']; 

function draw(index){
    index.addEventListener('click',function(){
        index.textContent = turns[0];
        console.log(index)
        console.log('separacion')
    })
}
arrayCells.forEach(function(index) {
    draw(index);
}); 