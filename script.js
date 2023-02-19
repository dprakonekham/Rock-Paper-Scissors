function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice,computerChoice){
    if(playerChoice == "rock"){
        if(computerChoice == "rock"){
            console.log("You picked Rock and the Computer chose Rock. You tie!");
            return 3;
        }else if(computerChoice == "paper"){
            console.log("You picked Rock and the Computer chose paper. You lose!");
            return 2;
        }else{
            console.log("You picked Rock and the Computer chose Scissors. You win!");
            return 1;
        }
    }else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            console.log("You picked Paper and the Computer chose Rock. You win!");
            return 1;
        }else if(computerChoice == "paper"){
            console.log("You picked Paper and the Computer chose paper. You tie!");
            return 3;
        }else{
            console.log("You picked Paper and the Computer chose Scissors. You lose!");
            return 2;
        }
    }else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            console.log("You picked Scissors and the Computer chose Rock. You lose!");
            return 2;
        }else if(computerChoice == "paper"){
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
    game('rock')
});

paperButton.addEventListener(`click`,function(e){
    game('paper')
});

scissorsButton.addEventListener(`click`,function(e){
    game('scissors')
});

let playerWins;
let computerWins;

function game(playerChoice){
    let gameOutcome = playRound(playerChoice,getComputerChoice())
    if(gameOutcome == 1){
        playerWins++;
    } else if(gameOutcome == 2){
        computerWins++;
    }

}

function reset(){
    playerWins = 0;
    computerWins = 0;
}
