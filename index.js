
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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('#displayResult')


let getHumanChoice = () => {
    if (rock){
    humanMove = 'ROCK'
    } else if(paper){
    humanMove = 'PAPER'
    } else{
    humanMove = 'SCISSORS'}
    return humanMove;
}
console.log(humanMove);

let humanChoice = 0;
let computerChoice = 0;
let tie = 0;
let round = 0;
let Result = "";

function declareResult(){  
 humanMove = humanMove.toUpperCase()
 if (humanMove === 'PAPER' || humanMove === 'ROCK' || humanMove === 'SCISSORS'){
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
    }}
    else{Result ='undefined'}
}

function score(){
    if (Result === 'tie') {
      tie ++;
    } else if(Result === 'win'){
      humanChoice ++;
    } else if(Result === 'lose'){
      computerChoice ++;
    }else{
        "error"
    }
}

function playRound(){
   // for (let i = 1; i <=5; i++){
    getComputerChoice();
    getHumanChoice();
    declareResult();
    score();
   // round++
    

    
}
 playRound()
 rock.addEventListener('click' , playRound);
 paper.addEventListener('click' , playRound);
 scissors.addEventListener('click' , playRound);
 display.addEventListener('click' , () => {
   `I chose : ${computerMove} 
    You chose : ${humanMove}
    ${Result}
    Your Score : ${humanChoice} , My Score: ${computerChoice}  , Tie : ${tie}` 
 })