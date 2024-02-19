function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'] //list of choice
    const randomNumber = Math.floor(Math.random() * 3) //generates randome number 0 to 2
    return choices[randomNumber] //chooses a choice based on the random number and the array position
}
console.log(getComputerChoice())