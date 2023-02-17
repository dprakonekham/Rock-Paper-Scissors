function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice(){
    let acceptableChoice = 0;
    let acceptableChoices = ["rock", "paper", "scissors"];
    let playerChoice;

    while(acceptableChoice==0){
        playerChoice = prompt("Type Rock, Paper, or Scissors")
        if(acceptableChoices.includes(playerChoice.toLowerCase())){
            acceptableChoice = 1;
        }
        else{
            console.log("Not acceptable. type Rock, Paper, or Scissors");
        }
    }
    return playerChoice.toLowerCase()
}

function playRound(getPlayerChoice,getComputerChoice){
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

function game(){
    let gameCounter = 0;
    let playerWins = 0;
    let computerWins = 0;
    while(gameCounter != 5){
        console.log("Player wins: " + playerWins)
        console.log("Computer wins: " + computerWins)
        let gameOutcome = playRound(getPlayerChoice(),getComputerChoice());
        if(gameOutcome == 1){
            playerWins++;
        } else if(gameOutcome == 2){
            computerWins++;
        }
        gameCounter++;
    }
    console.log("Player wins: " + playerWins)
    console.log("Computer wins: " + computerWins)
}


game();