let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let choice = Math.random();
    if (choice < 0.34){
        return "ROCK";
    }
    else if(choice >= 0.34 && choice < 0.67){
        return "PAPER";
    }
    else{
        return "SCISSORS";
    }
}

const winner = document.querySelector(".roundwinner");
const score = document.querySelector(".score");
const result = document.querySelector(".result");

function playRound(ComputerChoice, HumanChoice){
    if(HumanChoice == "ROCK"){
        if(ComputerChoice == "ROCK"){
            winner.textContent = "Draw.No one gets a point.";
        }
        if(ComputerChoice == "PAPER"){
            winner.textContent = "You lose! PAPER beats ROCK";
            computerScore++;
        }
        if(ComputerChoice == "SCISSORS"){
            winner.textContent = "You win! ROCK beats SCISSORS.";
            humanScore++;
        }
    }
    if(HumanChoice == "PAPER"){
        if(ComputerChoice == "ROCK"){
            winner.textContent = "You win! PAPER beats ROCK.";
            humanScore++;
        }
        if(ComputerChoice == "PAPER"){
            winner.textContent = "Draw. No one gets a point.";
        }
        if(ComputerChoice == "SCISSORS"){
            winner.textContent = "You lose! SCISSORS beat PAPER";
            computerScore++;
        }
    }
    if(HumanChoice == "SCISSORS"){
        if(ComputerChoice == "ROCK"){
            winner.textContent = "You lose! ROCK beats SCISSORS";
            computerScore++;
        }
        if(ComputerChoice == "PAPER"){
            winner.textContent = "You win! SCISSORS beat PAPER.";
            humanScore++;
        }
        if(ComputerChoice == "SCISSORS"){
            winner.textContent = "Draw. No one gets a point.";
        }
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id.toUpperCase();
        const computerChoice = getComputerChoice();
        playRound(computerChoice, humanChoice);
        score.textContent = "Player: " + humanScore + ":" + computerScore + " The Computer";
        if(humanScore == 5){
        result.textContent = "Congratulations! You won the match!";
        buttons.forEach((button) => button.disabled = true);
        }
        if(computerScore == 5){
        result.textContent = "I'm sorry, but you lost. Computer is the winner";
        buttons.forEach((button) => button.disabled = true);
        }
    });
});

