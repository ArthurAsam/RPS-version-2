let playerScore = 0; 
let computerScore = 0 ; 
let paraScore = document.createElement('p'); 
let paraText = document.createElement('p'); 
let humanSelection; 
let wrapper = document.querySelector('.button-wrapper'); 
let scoreBoard = document.querySelector('.scoreboard'); 
let gameCounter = 0 ; 


let computerSelection = function(){
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

function getPlayerSelection(event){
  let target = event.target; 

  switch(target.id){
    case 'rock':
      console.log('okay cool')
      humanSelection = target.id
      playGame(humanSelection, computerSelection())
      break ; 
    case 'paper':
      console.log('okay cool')
      humanSelection = target.id
      playGame(humanSelection, computerSelection())
      break; 
    case 'scissors':
      console.log('okay cool')
      humanSelection = target.id
      playGame(humanSelection, computerSelection())
      break; 
  }
}
  

wrapper.addEventListener('click', getPlayerSelection)






function playGame(humanSelection, computerSelection){
  
  playRound(humanSelection, computerSelection)

  function playRound(humanSelection, computerSelection){
    ++gameCounter
    if(humanSelection === 'paper' && computerSelection === 'rock'){
     ++playerScore
     
     paraScore.textContent = `Player1: ${playerScore} Computer: ${computerScore}`
     scoreBoard.appendChild(paraScore)
      paraText.textContent = `You won paper beats rock! ${gameCounter}`
     scoreBoard.appendChild(paraText); 
     
   
    } else if(humanSelection === 'paper' && computerSelection === 'scissors'){
     ++computerScore
     paraScore.textContent = `Player1: ${playerScore} Computer: ${computerScore}`
     scoreBoard.appendChild(paraScore)
      paraText.textContent = `You lose scissors beats paper ${gameCounter}`
     scoreBoard.appendChild(paraText); 

    } else if (humanSelection === 'rock' && computerSelection === 'paper'){
     ++computerScore
     paraScore.textContent = `Player1: ${playerScore} Computer: ${computerScore}`
     scoreBoard.appendChild(paraScore)
      paraText.textContent = `You lose paper beats rock ${gameCounter}`
     scoreBoard.appendChild(paraText); 

    } else if(humanSelection === 'rock' && computerSelection === 'scissors'){
     ++playerScore
     paraScore.textContent = `Player1: ${playerScore} Computer: ${computerScore}`
     scoreBoard.appendChild(paraScore)
      paraText.textContent = `You won rock beats scissors ${gameCounter}`
     scoreBoard.appendChild(paraText); 

    } else if(humanSelection === 'scissors' && computerSelection === 'paper'){
     ++playerScore
     paraScore.textContent = `Player1: ${playerScore} Computer: ${computerScore}`
     scoreBoard.appendChild(paraScore)
      paraText.textContent = `You won scissors beat paper ${gameCounter}`
     scoreBoard.appendChild(paraText); 

    } else if(humanSelection === 'scissors' && computerSelection === 'rock'){
     ++computerScore
     paraScore.textContent = `Player1: ${playerScore} Computer: ${computerScore}`
     scoreBoard.appendChild(paraScore)
      paraText.textContent = `You lose rock beats scissors ${gameCounter}`
     scoreBoard.appendChild(paraText); 
    } else { 
      paraScore.textContent = `Player1: ${playerScore} Computer: ${computerScore}`
      scoreBoard.appendChild(paraScore)
       paraText.textContent = `That\'s a draw ${gameCounter}`
      scoreBoard.appendChild(paraText); 
    }
   }
   if (gameCounter >= 5){

    const buttons = document.querySelectorAll('button')
    buttons.forEach(button =>{
      button.disabled = true; 
    })
    if (playerScore > computerScore){
        const finalPara = document.createElement('p'); 
        finalPara.textContent = 'Player1 Won the Game!'
        scoreBoard.appendChild(finalPara)
        setTimeout(() =>{
          playerScore = 0 ; 
          computerScore = 0
          scoreBoard.remove(paraScore); 
          scoreBoard.remove(paraText); 
          scoreBoard.remove (finalPara)
          wrapper.removeEventListener('click', getPlayerSelection)
          gameCounter = 0
          location.reload()
        }, 7000)
      } else if (computerScore > playerScore){
        const finalPara = document.createElement('p'); 
        finalPara.textContent = 'Computer Won the Game!'
        scoreBoard.appendChild(finalPara)
        setTimeout(() =>{
          playerScore = 0 ; 
          computerScore = 0
          scoreBoard.remove(paraScore); 
          scoreBoard.remove(paraText); 
          scoreBoard.remove (finalPara)
          wrapper.removeEventListener('click', getPlayerSelection)
          gameCounter = 0
          location.reload()
        }, 7000)
       } else {
        const finalPara = document.createElement('p'); 
        finalPara.textContent = 'It is a tie game!'
        scoreBoard.appendChild(finalPara)
        setTimeout(() =>{
          playerScore = 0 ; 
          computerScore = 0
          scoreBoard.remove(paraScore); 
          scoreBoard.remove(paraText); 
          scoreBoard.remove (finalPara)
          wrapper.removeEventListener('click', getPlayerSelection)
          gameCounter = 0
          location.reload()
        }, 7000)
       }


       
   } 
  
}


// for (let i = 0; i < 5; i++){
//   let computerSelection = getComputerChoice()
//   playGame(humanSelection, computerSelection)
  
//  }

//  console.log(`Final score; Player1: ${playerScore} | Computer: ${computerScore}`)
//  
