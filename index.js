
let computerMove= '';
let humanMove = '';
 let getComputerChoice= ()=> {
    randomMove = Math.random();
    if(randomMove >= 0 && randomMove <= 1/3){
      computerMove = 'ROCK';
    } else if(randomMove >= 1/3 && randomMove <= 2/3){
        computerMove = 'PAPER';
    }else if (randomMove >= 2/3 && randomMove <= 1){
        computerMove = 'SCISSORS'
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

let humanScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;
let Result = "";

function declareResult(){  
 humanMove = humanMove.toUpperCase()
 if (humanMove === 'PAPER' || humanMove === 'ROCK' || humanMove === 'SCISSORS'){
    if (computerMove === 'PAPER' && humanMove === 'PAPER'){
        Result = "WE TIE";
    } else if (computerMove === 'ROCK' && humanMove=== 'ROCK'){
        Result = "WE TIE";
    } else if (computerMove === 'SCISSORS' && humanMove === 'SCISSORS'){
        Result = "WE TIE";
    }
    
    else if (computerMove === 'PAPER' && humanMove === 'SCISSORS'){
        Result = "YOU WIN";
    } else if (computerMove === 'ROCK' && humanMove === 'PAPER'){
        Result = "YOU WIN";
    } else if (computerMove === 'SCISSORS' && humanMove === 'ROCK'){
        Result = "YOU WIN";
    }
    
    else if (computerMove === 'PAPER' && humanMove === 'ROCK'){
        Result = "YOU LOSE";
    } else if (computerMove === 'ROCK' && humanMove === 'SCISSORS'){
        Result = "YOU LOSE";
    } else if (computerMove === 'SCISSORS' && humanMove === 'PAPER'){
        Result = "YOU LOSE";
    }}
    else{Result ='undefined'}
}

function score(){
    if (Result === 'WE TIE') {
      tie ++;
    } else if(Result === 'YOU WIN'){
      humanScore ++ ;
    } else if(Result === 'YOU LOSE'){
      computerScore ++;
    }else{
        "error"
    }
}

function playRound(){
   for (let i = 1; i <=1; i++){
    getComputerChoice();
    getHumanChoice();
    declareResult();
    score();
    round ++;
   display.innerHTML = 
`<p>Round : ${round}</p>
<p>I chose : ${computerMove} </p>
<p>You chose : ${humanMove} </p>
<p>${Result}</p>
<p>Your Score : ${humanScore} , My Score: ${computerScore}  , Tie : ${tie}</p>`
}}


['rock', 'paper', 'scissors'].forEach(id => {
    document.getElementById(id).addEventListener('click', playRound);
});


  