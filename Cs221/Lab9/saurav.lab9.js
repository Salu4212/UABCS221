function playGame() { // 
    
    const userChoice = document.getElementById("userChoice").value.toLowerCase(); //This will convert user input into lower case. 
    const computerChoice = getComputerChoice(); // This will generate random choice for computer.
    
    if (isValidChoice(userChoice)) {  // This will check if the user input is valid.
        console.log("User chose: " + userChoice);  // This will Log the users choice to console.
        console.log("Computer chose: " + computerChoice);  // This will log the computers choice.
        
        const result = determineWinner(userChoice, computerChoice);  // This will Determine the winner based on the choices and get the result.
        displayResult(result);  // this will display the result in html.
    } else {
        console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");  // This will display an error if the user choce is invalid.
    }
}

function getComputerChoice() {   // This function will randomely select the choice for computer.
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];  // This will return the computer choice.
}

function isValidChoice(choice) {  // This will check if the validation of user input.
    return choice === "rock" || choice === "paper" || choice === "scissors";
}
// This fuction will compare the choices of computer and user and displays the winners.
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {  // Thia will check if it's a tie.
        return "It's a tie!";
    } else if (
        // This will Check if the user wins based on the rules of the game.
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "User wins!";  // This will display if user wins.
    } else {
        return "Computer wins!";  // This will display if the Computer wins.
    }
}
// This function will update the HTML file to show the game result and asks if the user wants to play again.
function displayResult(result) {  // This will get result element from html.
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;  // This will update the content to show the result.
    
}
