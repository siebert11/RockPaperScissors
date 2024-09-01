let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) + 1;
    
    if (choice <= 33) {
        return "rock";
    } else if (choice > 33 && choice <= 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
}

function palyRound(humanCoice, computerChoice) {
    if (humanCoice === computerChoice) {
        console.log("it's a draw");
        
    } else if (
        (humanCoice === "rock" && computerChoice === "scissors") ||
        (humanCoice === "paper" && computerChoice === "rock") ||
        (humanCoice === "scissors" && computerChoice === "paper") 
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("computer win this round !");
        computerScore++;
    }
}

function playGame() {
    for (i = 0; i <= 4; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        palyRound(humanSelection, computerSelection);
        console.log(`Your score is : ${humanScore} and the Computer score is : ${computerScore}`);
        
    }


    if (humanScore > computerScore) {
        console.log("YOU WIN!");
        
    } else {
        console.log("YOU LOSE!");
        
    }
}


playGame();