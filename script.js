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
        console.log(playerChoice)
        if(acceptableChoices.includes(playerChoice.toLowerCase())){
            acceptableChoice = 1;
        }
        else{
            console.log("Not acceptable. type Rock, Paper, or Scissors");
        }
    }
    return playerChoice.toLowerCase;
}

let player = getPlayerChoice();
let computer = getComputerChoice();