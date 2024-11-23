function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch(randomNumber){
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Pick rock, paper or scissors");

    switch(humanChoice.trim().toLowerCase()) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
        default:
            alert("Try again, invalid choice")
            humanChoice = getHumanChoice();
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    
}