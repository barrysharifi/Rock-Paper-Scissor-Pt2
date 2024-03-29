function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'] //list of choice
    const randomNumber = Math.floor(Math.random() * 3) //generates randome number 0 to 2
    let selection = choices[randomNumber].toLowerCase() //chooses a choice based on the random number and the array position
    return selection
}


function playRound(playerSelection, computerSelection) {
    console.log('player picked ' + playerSelection)
    console.log('computer picked ' + computerSelection)
    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie!`
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "player wins!"
    }
    else {
        return "computer wins!"
    }

}



function playerChoice() {
    let input = prompt('Type Rock, Paper, or Scissors')
    input = input.toLowerCase()
    return input
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerDecision = playerChoice()
        const computerDecision = getComputerChoice()
        console.log(playRound(playerDecision, computerDecision))
    }
}
playGame()

