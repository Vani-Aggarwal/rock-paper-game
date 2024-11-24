let computerMove= '';
let humanMove = '';
let userInput = '';
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

const rock = document.querySelector("#rock");
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('paper');
const display =  document.querySelector("#displayResult");


function getHumanChoice(event){
    humanMove = event.target.textContent;
    return humanMove;
}


let humanScore = 0;
let computerScore = 0;
let tie = 0;
let round = 0;
let result = "";

function declareResult(){  
 if (humanMove === 'PAPER' || humanMove === 'ROCK' || humanMove === 'SCISSORS'){
    if (computerMove === 'PAPER' && humanMove === 'PAPER'){
        result = "WE TIE";
    } else if (computerMove === 'ROCK' && humanMove=== 'ROCK'){
        result = "WE TIE";
    } else if (computerMove === 'SCISSORS' && humanMove === 'SCISSORS'){
        result = "WE TIE";
    }
    
    else if (computerMove === 'PAPER' && humanMove === 'SCISSORS'){
        result = "YOU WIN";
    } else if (computerMove === 'ROCK' && humanMove === 'PAPER'){
        result = "YOU WIN";
    } else if (computerMove === 'SCISSORS' && humanMove === 'ROCK'){
        result = "YOU WIN";
    }
    
    else if (computerMove === 'PAPER' && humanMove === 'ROCK'){
        result = "YOU LOSE";
    } else if (computerMove === 'ROCK' && humanMove === 'SCISSORS'){
        result = "YOU LOSE";
    } else if (computerMove === 'SCISSORS' && humanMove === 'PAPER'){
        result = "YOU LOSE";
    }}
    
    else{
        result = "undefined"
    }
}

function score(){
    if (result === 'WE TIE') {
      tie ++;
    } else if(result === 'YOU WIN'){
      humanScore ++ ;
    } else if(result === 'YOU LOSE'){
      computerScore ++;
    }else{
        "error"
    }
}

function playRound(){
        getComputerChoice();
       getHumanChoice(event);
        declareResult();
        score();
        round ++;
        display.innerHTML = 
    `<p>Round : ${round}</p1>
    <p>I chose : ${computerMove} </p>
    <p>You chose : ${humanMove} </p>
    <p>${result}</p>
    <p>Your Score : ${humanScore} , My Score: ${computerScore}  , Tie : ${tie}</p>`
    displayResult();
    
}


function displayResult(){
    if(humanScore === 5){
       display.innerHTML = `<h1> YOU HAVE WON </h1>`
    }else if(computerScore === 5){
        display.innerHTML = `<h1> I HAVE WON </h1>`
    }else if(tie === 5){
        display.innerHTML =  `<h1> WE TIED </h1>`
}}


['rock', 'paper', 'scissors'].forEach(id => {
    document.getElementById(id).addEventListener('click', playRound);
});



  