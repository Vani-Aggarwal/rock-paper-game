
let computerMove= '';
let humanMove = '';
 let getComputerChoice= ()=> {
    randomMove = Math.random();
    if(randomMove >= 0 && randomMove <= 1/3){
      computerMove = 'rock';
    } else if(randomMove >= 1/3 && randomMove <= 2/3){
        computerMove = 'paper';
    }else if (randomMove >= 2/3 && randomMove <= 1){
        computerMove = 'scissors'
    }
    return computerMove;
}
getComputerChoice()

let getHumanChoice = () => {
    humanMove = prompt("Rock Paper Scissors. Choose & type one!");
    return humanMove? humanMove : '';
}
getHumanChoice()


    let humanChoice = 0;
    let computerChoice = 0;
    let tie = 0;


let Result = "";

function declareResult(){  
 humanMove = humanMove.toUpperCase()
        if (computerMove === 'paper' && humanMove === 'PAPER'){
            Result = "tie";
        } else if (computerMove === 'rock' && humanMove=== 'ROCK'){
            Result = "tie";
        } else if (computerMove === 'scissors' && humanMove === 'SCISSORS'){
            Result = "tie";
        }
        
        else if (computerMove === 'paper' && humanMove === 'SCISSORS'){
            Result = "win";
        } else if (computerMove === 'rock' && humanMove === 'PAPER'){
            Result = "win";
        } else if (computerMove === 'scissors' && humanMove === 'ROCK'){
            Result = "win";
        }
        
        else if (computerMove === 'paper' && humanMove === 'ROCK'){
            Result = "lose";
        } else if (computerMove === 'rock' && humanMove === 'SCISSORS'){
            Result = "lose";
        } else if (computerMove === 'scissors' && humanMove === 'PAPER'){
            Result = "lose";
        }
}
declareResult();
console.log(Result)

function score(){
    if (Result === 'tie') {
      tie += 1;
    } else if(Result === 'win'){
      humanChoice ++;
    } else if(Result === 'lose'){
      computerChoice ++;
    }else{
        "error"
    }
}
score();
console.log(`I chose : ${computerMove} 
You chose : ${humanMove}
${Result}
Your Score : ${humanChoice} , My Score: ${computerChoice}  , Tie : ${tie}`)


