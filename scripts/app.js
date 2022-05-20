// Delcare initial variables and establish choice array for Computer Selection
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function clearMSG() {
    document.getElementById("outcomeTxt").textContent=""
    document.getElementById("outcomeTxt").style.color=""
}

function ScoreTick() {
    document.getElementById("compScoreTxt").textContent = computerScore;
    document.getElementById("playerScoreTxt").textContent = playerScore
}


//Player Selection
function playerChoice(choice) {
    playerSelection = choice
    if (playerScore === 0) {
        if (computerScore === 0) {
            clearMSG()
        }
    }
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

function scoreCheck() {
    if (playerScore === 5){
        winner();
    } else if (computerScore === 5){
        winner();
    }
}

function winner() {
    if (playerScore > computerScore) {
        document.getElementById("outcomeTxt").textContent="Congratulations.  You have bested the computer";
        document.getElementById("outcomeTxt").style.color="green";
    } else document.getElementById("outcomeTxt").textContent="You have let the computer win.  Feel Bad", document.getElementById("outcomeTxt").style.color="red";
    playerScore = 0;
    computerScore = 0;
    }

//Game Winner Determination
function outcome() {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. You lose.`
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. You win.`
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. Draw...lame.`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. You win.`
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. Draw...lame.`
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. You lose.`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. You lose.`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. You win.`
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        document.getElementById("outcomeTxt").textContent=`You chose ${playerSelection}. The computer chose ${computerSelection}. Draw...lame.`
    }
    ScoreTick()
    scoreCheck()
}