function getComputerChoice () {
    let ans = Math.random()
    let result
    if (ans <= 3) {
        result = "Rock";
    } else if (ans > 3 && ans <= 7) {
        result = "Paper";
    } else {
        result = "Scissors";
    }

    return result
}

function getHumanChoice() {
    let choice = prompt("enter a choice for rock paper scissors!")
    return choice
}




test();

function test() {
    let humanChoice = getHumanChoice()
    let compChoice = getComputerChoice()
    
    if (humanChoice == "rock") {
        if (compChoice == "Rock") {
            humanChoice = prompt("same choice choose again:");
        }

        if (compChoice == "Paper") {
            alert("you lost!");
        } else if (compChoice == "Scissors"){
            alert("you won");
        }
    } else if (humanChoice == "paper") {
        if (compChoice == "Paper") {
            humanChoice = prompt("same choice choose again:");
        }

        if (compChoice == "Scissors") {
            alert("you lost!");
        } else if (compChoice == "Rock"){
            alert("you won");
        }
    } else if (humanChoice == "scissors") {
        if (compChoice == "Scissors") {
            humanChoice = prompt("same choice choose again:");
        }

        if (compChoice == "Rock") {
            alert("you lost!");
        } else if (compChoice == "Paper"){
            alert("you won");
        }
    }
}

