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

function getHumanChoice(){
  return prompt('Pick a choice between "rock" "paper" or "scissors"', '')
}; 


function playGame(humanSelection, computerSelection){
  playRound(humanSelection, computerSelection)

  function playRound(humanSelection, computerSelection){
    if(humanSelection === 'paper' && computerSelection === 'rock'){
     ++playerScore
     console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
     console.log("You Won! Paper beats Rock")
   
    } else if(humanSelection === 'paper' && computerSelection === 'scissors'){
     ++computerScore
     console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
     console.log("You Lose! Scissors beats Paper")
    } else if (humanSelection === 'rock' && computerSelection === 'paper'){
     ++computerScore
     console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
     console.log('You Lose! Paper beats Rock')
    } else if(humanSelection === 'rock' && computerSelection === 'scissors'){
     ++playerScore
     console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
     console.log('You Won! Rock beats Scissors')
    } else if(humanSelection === 'scissors' && computerSelection === 'paper'){
     ++playerScore
     console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
     console.log('You Won! Scissors beats Paper')
    } else if(humanSelection === 'scissors' && computerSelection === 'rock'){
     ++computerScore
     console.log(`Player1: ${playerScore} Computer: ${computerScore}`)
     console.log('You lose! Rock beats Scissors')
    } else { 
     console.log('That\'s a draw!')
    }
   }

  
}

for (let i = 0; i < 5; i++){
  let humanSelection = getHumanChoice()
  let computerSelection = getComputerChoice()
  playGame(humanSelection, computerSelection)
  
 }

 console.log(`Final score; Player1: ${playerScore} | Computer: ${computerScore}`)
 if (playerScore > computerScore){
  console.log('Player1 Won the Game!')
 } else if (computerScore > playerScore){
  console.log('Computer Won the Game!')
 } else  {
  console.log('It\'s a tie match!')
 }
 playerScore = 0 ; 
 computerScore = 0
