function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice,computerChoice){
    cChoiceDisplay.textContent = computerChoice.toUpperCase() + "!";
    if(playerChoice == "rock"){
        if(computerChoice == "rock"){
            winnerDisplay.textContent = "You tie!";
            return 3;
        }else if(computerChoice == "paper"){
            winnerDisplay.textContent = "You lose!";
            return 2;
        }else{
            winnerDisplay.textContent = "You win!";
            return 1;
        }
    }else if(playerChoice == "paper"){
        if(computerChoice == "rock"){
            winnerDisplay.textContent = "You win!";
            return 1;
        }else if(computerChoice == "paper"){
            winnerDisplay.textContent = "You tie!";
            return 3;
        }else{
            winnerDisplay.textContent = "You lose!";
            return 2;
        }
    }else if(playerChoice == "scissors"){
        if(computerChoice == "rock"){
            winnerDisplay.textContent = "You lose!";
            return 2;
        }else if(computerChoice == "paper"){
            winnerDisplay.textContent = "You win!";
            return 1;
        }else{
            winnerDisplay.textContent = "You tie!";
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
const winnerDisplay = document.getElementById('winnerTxt');
const playerImageDisplay = document.getElementById('iContainerP');
const computerImageDisplay = document.getElementById('iContainerC');


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
//resetButton.style.display = "none";

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
        resetButton.style.display = "flex";
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
    winnerDisplay.textContent = "";
}
