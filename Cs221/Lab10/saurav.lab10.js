var choices = ["rock", "paper", "scissors"];
var resultText = document.querySelector(".result p");
// write me example of java script code for rock paper and secissor game//
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {  // If not a tie and user doesn't win, user loses

    }
    return "Computer wins!";
}

function playGame(userChoice) {  // Function to determine the game result
    const computer = computerChoice();
    const result = determineWinner(userChoice, computer);
    resultText.textContent = `You chose ${userChoice}. Computer chose ${computer}. ${result}`;
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
