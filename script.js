let playerScore = 0; 
let computerScore = 0 ; 

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random()* 3)
  let computerChoice; 
  if (randomNumber === 0){
    return computerChoice = 'rock'; 
  } else if (randomNumber === 1){
     return computerChoice = 'paper'
  } else {
    return computerChoice = 'scissors'
  }
}

let getHumanChoice = function(){
  return prompt('Pick a choice between "rock" "paper" or "scissors"', '')
}; 

const computerSelection = getComputerChoice(); 
const humanSelection = getHumanChoice().toLowerCase()

function playRound(humanSelection, computerSelection){
 if(humanSelection === 'paper' && computerSelection === 'rock'){
  ++playerScore
  console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
  return "You Won! Paper beats Rock"

 } else if(humanSelection === 'paper' && computerSelection === 'scissors'){
  ++computerScore
  console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
  return "You Lose! Scissors beats Paper"
 } else if (humanSelection === 'rock' && computerSelection === 'paper'){
  ++computerScore
  console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
  return 'You Lose! Paper beats Rock'
 } else if(humanSelection === 'rock' && computerSelection === 'scissors'){
  ++playerScore
  console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
  return 'You Won! Rock beats Scissors'
 } else if(humanSelection === 'scissors' && computerSelection === 'paper'){
  ++playerScore
  console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
  return 'You Won! Scissors beats Paper'
 } else if(humanSelection === 'scissors' && computerSelection === 'rock'){
  ++computerScore
  console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
  return 'You lose! Rock beats Scissors'
 } else { 
  return 'It\'s a draw!'
 }
}

console.log(playRound(humanSelection,computerSelection))