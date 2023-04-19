const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const result = document.querySelector("#result");
const buttons = document.querySelectorAll(".choice");

let playerChoice;
let computerChoice;
let winner;

buttons.forEach(button => button.addEventListener("click", ()=>{
    playerChoice = button.textContent;
    player.textContent=`Player: ${playerChoice}`;
    computerChoice = getComputerChoice();
    computer.textContent=`Computer: ${computerChoice}`;
    winner = getWinner();
    result.textContent = winner;
}));

function getComputerChoice(){
    let number = Math.floor((Math.random()*3)+1);
    switch(number){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    }
}

function getWinner(){
    if (playerChoice==computerChoice)
        return "Draw!!";
    else if (playerChoice=="ROCK")
        return (computerChoice=="SCISSORS") ? "You win!!" : "You lose :(";
    else if (playerChoice=="PAPER")
        return (computerChoice=="SCISSORS") ? "You lose :(" : "You win!!";
    else if (playerChoice=="SCISSORS")
        return (computerChoice=="PAPER") ? "You win!!" : "You lose :(";
}
