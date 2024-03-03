//Guess the number
// Choose Range
var minRange = 1;
var maxRange = 100;

// Generate a random number in range
var targetNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

var guess;
var attempts = 0;

// loop to guess number
while (true) {
    guess = parseInt(prompt(`Guess the number between ${minRange} and ${maxRange}:`));

    // Check validity
    if (isNaN(guess)) {
        alert("Invalid input. Please enter a valid number.");
        continue;
    }
    // count attempts
    attempts++;
    // Check the guess
    if (guess === targetNumber) {
        alert(`You've guessed the number ${targetNumber} in ${attempts} attempts!`);
        break;
    } else if (guess < targetNumber) {
        alert("too low, Try again.");
    } else {
        alert("too high, Try again.");
    }
}