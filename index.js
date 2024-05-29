function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'] //list of choice
    const randomNumber = Math.floor(Math.random() * 3) //generates randome number 0 to 2
    let selection = choices[randomNumber].toLowerCase() //chooses a choice based on the random number and the array position
    return selection
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie!`
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')
    
    ) {
        playerScore++
        return "player wins!"
        
    }else {
        computerScore++
        return "computer wins!"
        
    }

}
let playerScore = 0
let computerScore = 0

const rock = document.getElementById("btn-1")
const paper = document.getElementById("btn-2")
const scissor = document.getElementById("btn-3")
const resultsDiv = document.getElementById("results")

rock.addEventListener('click', ()=>{
    const result = playerChoice('rock')
    updateResults(result)
 })
 paper.addEventListener('click', ()=>{
    const result = playerChoice('paper')
    updateResults(result)
 })
 scissor.addEventListener('click', ()=>{
    const result = playerChoice('scissors')
    updateResults(result)
 })

function playerChoice(playerSelection) {
//     // let input = prompt('Type Rock, Paper, or Scissors')
//     input = input.toLowerCase()
//     return input
if (playerScore === 5 || computerScore === 5){
    return 
}
let computerChoice = getComputerChoice()
return playRound(playerSelection, computerChoice)

}

function updateResults(result){
    resultsDiv.innerHTML = `Player: ${playerScore} : Computer ${computerScore}`
   
    if (playerScore === 5){
        resultsDiv.innerHTML += "<p>The Human Player wins the game!</p>"
    } else if (computerScore === 5){
        resultsDiv.innerHTML += "<p>The Computer wins the game!"
    } else {
        resultsDiv.innerHTML += `<p>${result}</p>`
    }
}




// function playGame() {
//      for (let i = 0; i < 5; i++) {
//         const playerDecision = playerChoice()
//         const computerDecision = getComputerChoice()
//         console.log(playRound(playerDecision, computerDecision))
//      }
// }
// playGame()

