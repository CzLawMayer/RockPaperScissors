function playGame() {
let humanScore = 0;
let computerScore = 0;


function GetComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
        if (randomChoice === 0) {
            return "rock";
    }   else if (randomChoice === 1) {
        return "paper";
    }   else {
        return "scissors";
    }
}

function GetHumanChoice() {
const humanChoice = prompt("Pick: rock, paper, or scissors").toLowerCase();
console.log("You chose:", humanChoice);
return humanChoice;
}

function playRound() {
    const player = GetHumanChoice();
    const computer = GetComputerChoice();

    console.log("Computer chose: " + computer);

    if (player === computer) {
        console.log("It's a tie!");
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {   
        console.log('You win!');
        humanScore++
    }
    else {
        console.log('You lose!');
        computerScore++
    }

    console.log("you: " + humanScore + " " + "computer: " + computerScore)
    console.log("------------------------------");
}

playRound();
playRound();
playRound();
playRound();
playRound();

if (humanScore > computerScore) {
    console.log("You win the game!");
} else if (humanScore < computerScore) {
    console.log("The computer wins the game!");
} else {
    console.log("It's a tie!");
}

}

playGame();