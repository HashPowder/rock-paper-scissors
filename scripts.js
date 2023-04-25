let hand = ["rock", "paper", "scissors"]

function getComputerChoice() {
    for (let i = 0; i < 1; i++) {
        let randomIndex = Math.floor(Math.random() * hand.length)
        console.log(hand[randomIndex])
    }
    
}
getComputerChoice()