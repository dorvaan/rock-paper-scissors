// Delcare initial variables and establish choice array for Computer Selection
const choices = ["Rock", "Paper", "Scissors"];

//Player Selection
function playerChoice(choice) {
    playerSelection = choice
}

// Computer Selection
function computerPlay() {
    computerSelection = Math.floor(Math.random() * choices.length);
    if (computerSelection === 0) {
        computerSelection = "Rock";
    } else if (computerSelection === 1) {
        computerSelection = "Paper";
    } else if (computerSelection === 2) {
        computerSelection = "Scissors";
    }
}

//Winner Determination
function outcome() {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You lose`)
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You win`)
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. It's a draw`)
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You win`)
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. It's a draw`)
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You lose`)
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You lose`)
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. You win`)
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log(`You chose ${playerSelection}. The computer chose ${computerSelection}. It's a draw`)
    }
}