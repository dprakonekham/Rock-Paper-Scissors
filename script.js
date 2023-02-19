function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice,computerChoice){
    cChoiceDisplay.textContent = computerChoice.toUpperCase() + "!";
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
const rockButton = document.getElementById('rBtn');
const paperButton = document.getElementById('pBtn');
const scissorsButton = document.getElementById('sBtn');
const playerScore = document.getElementById('pScore');
const computerScore = document.getElementById('cScore');
const resetButton = document.getElementById('resetBtn');
const pChoiceDisplay = document.getElementById('pChoice');
const cChoiceDisplay = document.getElementById('cChoice');


rockButton.addEventListener(`click`,function(e){
    game('rock');
});

paperButton.addEventListener(`click`,function(e){
    game('paper');
});

scissorsButton.addEventListener(`click`,function(e){
    game('scissors');
});
resetButton.addEventListener(`click`,function(e){
    reset();
});

let playerWins = 0;
let computerWins = 0;

function game(playerChoice){
    pChoiceDisplay.textContent = playerChoice.toUpperCase() + "!";
    let gameOutcome = playRound(playerChoice,getComputerChoice())
    if(gameOutcome == 1){
        playerWins++;
    } else if(gameOutcome == 2){
        computerWins++;
    }

    playerScore.textContent = "My Score: " + playerWins;
    computerScore.textContent = "Computer Score: " + computerWins;

    if(playerWins == 5 || computerWins ==5){
        //Show the reset button
        resetButton.style.display = "block";
        //Disable the buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

function reset(){
    //Set the wins to 0
    playerWins = 0;
    computerWins = 0;
    playerScore.textContent = "My Score: " + playerWins;
    computerScore.textContent = "Computer Score: " + computerWins;
    //Rehide the reset button
    resetButton.style.display = "none";
    //Renable the buttons
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    pChoiceDisplay.textContent = "";
    cChoiceDisplay.textContent = "";
}
