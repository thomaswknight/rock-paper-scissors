const RPS = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
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
    if (A == B) {
        document.getElementById("outcome").innerHTML = 
        "Draw!";
        return "draw";
    }
    else if (A == (B + 1) % 3) {
        document.getElementById("outcome").innerHTML = 
        "You win!";
        return "human";
    }
    else if (B == (A + 1) % 3) {
        document.getElementById("outcome").innerHTML = 
        "You lose!";
        return "computer"; 
    }
}

function updateScore(outcome) {
    if (outcome == "human") {
        humanScore ++;
    }
    else if (outcome == "computer") {
        computerScore ++;
    }
}


function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let outcome = determineOutcome(humanChoice, computerChoice);
    console.log(outcome);
    updateScore(outcome);
    console.log(humanScore, computerScore)
}

function playGame() {
    let i = 5;
    while (i) {
        playRound();
        i --;
    }
    if (humanScore > computerScore) {
        console.log("you win!");
    }
    else {
        console.log("you lose")
    }
}
playGame()