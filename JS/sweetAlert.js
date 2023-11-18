function alertWinner(winner){
    Swal.fire({
        title: "WINNER WINNER CHICKEN DINNER " + " " + winner + " " + "Was the winner",
        confirmButtonText: "Play again",
        timer: 5000,
        timerProgressBar: true
    }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
            resetGame();
        }
    });
}

function alertTie(){
    Swal.fire({
        title: "IT'S A TIE!!",
        confirmButtonText: "Play again",
        timer: 5000,
        timerProgressBar: true 
    }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
            resetGame();
        }
    });
}