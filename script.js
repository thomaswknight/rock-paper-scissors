const RPS = ["rock", "paper", "scissors"]
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    document.getElementById("computerchoice").innerHTML =
    "computer chose " + RPS[choice]
    return RPS[choice];
}

function getHumanChoice() {
    let message = "rock, paper, or scissors?";
    let choice = prompt(message)
    while (RPS.includes(choice.toLowerCase()) == false){
        message = "you must choose rock, paper, or scissors!";
        choice = prompt(message);
    }
    if (RPS.includes(choice.toLowerCase())) {
        document.getElementById("humanchoice").innerHTML = 
        "you chose " + choice;
        return choice.toLowerCase();
    }
}

function determineOutcome(choiceA, choiceB) {
    let A = RPS.indexOf(choiceA);
    let B = RPS.indexOf(choiceB);
    if (A == B) {
        document.getElementById("outcome").innerHTML = 
        "draw!";
        return "draw";
    }
    else if (A == (B + 1) % 3) {
        document.getElementById("outcome").innerHTML = 
        choiceA + " wins!";
        return "human";
    }
    else if (B == (A + 1) % 3) {
        document.getElementById("outcome").innerHTML = 
        choiceB + " wins!";
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
    document.getElementById("score").innerHTML = 
    humanScore + " : " + computerScore;
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
    let message = "";
    for (let i = 0; i , 5; i ++) {
        playRound();
    }
    if (humanScore > computerScore) {
        message = "you win!";
    }
    else if (computerScore > humanScore) {
        message = "you lose!";
    }
    else {
        message = "it's a draw!";
    }
    console.log(message);
    document.getElementById("score").innerHTML += 
    "** " + message + "**";
}
playGame()