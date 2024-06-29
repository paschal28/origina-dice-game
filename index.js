// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Select the left <img> element by its id
var leftDiceImage = document.getElementById("left-dice");

// Update the src attribute to point to the random dice image
leftDiceImage.src = "images/dice" + randomNumber1 + ".png";

// Log the value to the console for testing
console.log("Random Number:", randomNumber1);
console.log("Left Dice Image Source:", leftDiceImage.src);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var rightDiceImage = document.getElementById("right-dice");

// Update the src attribute to point to the random dice image
rightDiceImage.src = "images/dice" + randomNumber2 + ".png";

// Log the value to the console for testing
console.log("Random Number:", randomNumber1);
console.log("rightDice Image Source:", rightDiceImage.src);




var resultHeading = document.getElementById("result");

// Determine the winner and update the text content of the <h1> element
if (randomNumber1 > randomNumber2) {
    resultHeading.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    resultHeading.textContent = "Player 2 Wins!";
} else {
    resultHeading.textContent = "It's a Draw!";
}