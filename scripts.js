let hand = ["rock", "paper", "scissors"]

function getComputerChoice() {
    for (let i = 0; i < 1; i++) {
        let randomIndex = Math.floor(Math.random() * hand.length)
        return hand[randomIndex]
    }
}

 function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === hand[0] && computerSelection === hand[1]) {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === hand[1] && computerSelection === hand[2]) {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === hand[2] && computerSelection === hand[0]) {
        return "You Lose! Rock beats Scissors"
    } else {
        return "You Win!"
    }
 }
const computerSelection = getComputerChoice()
const playerSelection = prompt()
console.log( playRound(playerSelection, computerSelection) )