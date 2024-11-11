const RPS = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    console.log(choice);
    document.getElementById("computerchoice").innerHTML =
    "Computer chose " + RPS[choice]
    return RPS[choice];

}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?")
    if (RPS.includes(choice.toLowerCase())) {
        document.getElementById("humanchoice").innerHTML = 
        "You chose " + choice;
        return choice.toLowerCase();
    } else {
        document.getElementById("humanchoice").innerHTML = 
        "You must choose rock, paper, or scissors!";
        getHumanChoice();
    }
}

function determineOutcome(choiceA, choiceB) {
    let A = RPS.indexOf(choiceA);
    let B = RPS.indexOf(choiceB);
    console.log(A,B);
    console.log(A == B);
    console.log(A == (B + 1) % 3);
    console.log(B == (A + 1) % 3);
    if (A == B) {
        return "Draw";
    }
    else if (A = (B + 1) % 3) {
        return choiceA;
    }
    else if (B == (A + 1) % 3) {
        return choiceB; 
    }
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(humanChoice);
    console.log(computerChoice);
    return determineOutcome(humanChoice, computerChoice);
}

console.log(playRound());