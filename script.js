let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch(randomNumber) {
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

function playRound(humanSelection, computerSelection) {
    if(humanSelection = "rock") {
        if(computerSelection = "rock") {
            console.log("It's a draw")
        } else if(computerSelection = "paper") {
            console.log("The computer wins")
        } else if (computerSelection = "scissors") {
            console.log("You win")
        }
    }

    else if(humanSelection = "paper") {
        if(computerSelection = "rock") {
            console.log("You win")
        } else if(computerSelection = "paper") {
            console.log("It's a draw")
        } else if (computerSelection = "scissors") {
            console.log("The computer wins")
        }
    }

    else if(humanSelection = "scissors") {
        if(computerSelection = "rock") {
            console.log("The computer wins")
        } else if(computerSelection = "paper") {
            console.log("You win")
        } else if(computerSelection = "scissors") {
            console.log("It's a draw")
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);