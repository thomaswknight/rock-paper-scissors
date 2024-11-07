const RPS = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    return RPS[computerChoice];
}
console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?")
    console.log(humanChoice)
    console.log(humanChoice in RPS)
    for (i in RPS) { console.log(i)}
    console.log(RPS)

    if (RPS.includes(humanChoice.toLowerCase())) {
        document.getElementById("humanchoice").innerHTML = 
        "you chose " + humanChoice;
    } else {
        document.getElementById("humanchoice").innerHTML = 
        "You must choose rock, paper, or scissors!";
    }
}

getHumanChoice();