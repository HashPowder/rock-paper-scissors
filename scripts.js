let hand = ["rock", "paper", "scissors"]
let computerSelection = getComputerChoice()
let playerSelection = "rock"

function getComputerChoice() {
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * hand.length)
        return hand[randomIndex]
    }
}

 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else {
        return "You Lose!"
    }
 }

 console.log( playRound() )



// function game() {
//     for (let i = 1; i < 6; i++) {
//        return playRound(i)
//     }
// }
// game()

