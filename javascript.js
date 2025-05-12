let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.random();
    console.log(choice);
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

function getHumanChoice(){
    let choice = prompt("Rock, paper, scissors, shoot: ");
    choice = choice.toUpperCase();
    if (choice == "ROCK"){
        return "ROCK";
    }
    else if(choice == "PAPER"){
        return "PAPER";
    }
    else if (choice == "SCISSORS"){
        return "SCISSORS";
    }
    else{
        console.log("The Player didn't choose any of the signs.");
    }
}

function playRound(ComputerChoice, HumanChoice){
    if(HumanChoice == "ROCK"){
        if(ComputerChoice == "ROCK"){
            console.log("Draw. No one gets a point.");
        }
        if(ComputerChoice == "PAPER"){
            console.log("You lose! PAPER beats ROCK");
            computerScore++;
        }
        if(ComputerChoice == "SCISSORS"){
            console.log("You win! ROCK beats SCISSORS.");
            humanScore++;
        }
    }
    if(HumanChoice == "PAPER"){
        if(ComputerChoice == "ROCK"){
            console.log("You win! PAPER beats ROCK.");
            humanScore++;
        }
        if(ComputerChoice == "PAPER"){
            console.log("Draw. No one gets a point.");
        }
        if(ComputerChoice == "SCISSORS"){
            console.log("You lose! SCISSORS beat PAPER");
            computerScore++;
        }
    }
    if(HumanChoice == "SCISSORS"){
        if(ComputerChoice == "ROCK"){
            console.log("You lose! ROCK beats SCISSORS");
            computerScore++;
        }
        if(ComputerChoice == "PAPER"){
            console.log("You win! SCISSORS beat PAPER.");
            humanScore++;
        }
        if(ComputerChoice == "SCISSORS"){
            console.log("Draw. No one gets a point.");
        }
    }
}

console.log(getComputerChoice());
console.log(getHumanChoice());