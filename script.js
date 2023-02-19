function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice,getComputerChoice){
    if(getPlayerChoice == "rock"){
        if(getComputerChoice == "rock"){
            console.log("You picked Rock and the Computer chose Rock. You tie!");
            return 3;
        }else if(getComputerChoice == "paper"){
            console.log("You picked Rock and the Computer chose paper. You lose!");
            return 2;
        }else{
            console.log("You picked Rock and the Computer chose Scissors. You win!");
            return 1;
        }
    }else if(getPlayerChoice == "paper"){
        if(getComputerChoice == "rock"){
            console.log("You picked Paper and the Computer chose Rock. You win!");
            return 1;
        }else if(getComputerChoice == "paper"){
            console.log("You picked Paper and the Computer chose paper. You tie!");
            return 3;
        }else{
            console.log("You picked Paper and the Computer chose Scissors. You lose!");
            return 2;
        }
    }else if(getPlayerChoice == "scissors"){
        if(getComputerChoice == "rock"){
            console.log("You picked Scissors and the Computer chose Rock. You lose!");
            return 2;
        }else if(getComputerChoice == "paper"){
            console.log("You picked Scissors and the Computer chose paper. You win!");
            return 1;
        }else{
            console.log("You picked Scissors and the Computer chose Scissors. You tie!");
            return 3;
        }
    }
    //returns 1 if you win, 2 if you lose, 3 if you tie
}
const rockButton = document.getElementById('rBtn')
const paperButton = document.getElementById('pBtn')
const scissorsButton = document.getElementById('sBtn')

rockButton.addEventListener(`click`,function(e){
    playRound('rock',getComputerChoice())
});

paperButton.addEventListener(`click`,function(e){
    playRound('paper',getComputerChoice())
});

scissorsButton.addEventListener(`click`,function(e){
    playRound('scissors',getComputerChoice())
});

/*
rockButton.addEventListener(`click`, playRound)
paperButton.addEventListener(`click`, )
scissorsButton.addEventListener(`click`, )
*/

/*
function game(){
    let gameCounter = 0;
    let playerWins = 0;
    let computerWins = 0;
    while(gameCounter != 5){
        let gameOutcome = playRound(getPlayerChoice(),getComputerChoice());
        if(gameOutcome == 1){
            playerWins++;
        } else if(gameOutcome == 2){
            computerWins++;
        }
        console.log("Player wins: " + playerWins)
        console.log("Computer wins: " + computerWins)
        gameCounter++;
    }
}
*/

