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

function getHumanChoice(){
    let choice = prompt("Rock, paper, scissors, shoot: ");
    console.clear();
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

function playGame(){
    for(let i = 0; i < 5; i++){
    const HumanSelection = getHumanChoice();
    const ComputerSelection = getComputerChoice();
    console.log("You chose " + HumanSelection);
    console.log("Computer chose " + ComputerSelection);
    playRound(ComputerSelection, HumanSelection);
    console.log("The score is: ");
    console.log("The Player: " + humanScore);
    console.log("The Computer: " + computerScore);
    }
    if(humanScore > computerScore){
        console.log("CONGRATULATIONS!! YOU WON THE GAME");
    }
    else if (computerScore > humanScore){
        console.log("I'm sorry, but you lost the game. Computer wins");
    }
    else {
        console.log("It's a draw. Nice try!");
    }
}

playGame();