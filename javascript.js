function getComputerChoice(){
    let choice = Math.random();
    console.log(choice);
    if (choice < 0.34){
        return "Rock";
    }
    else if(choice >= 0.34 && choice < 0.67){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, paper, scissors, shoot: ");
    if (choice == "Rock"){
        return "Rock";
    }
    else if(choice == "Paper"){
        return "Paper";
    }
    else if (choice == "Scissors"){
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoice());
console.log(getHumanChoice());