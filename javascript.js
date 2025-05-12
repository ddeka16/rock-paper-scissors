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
console.log(getComputerChoice());