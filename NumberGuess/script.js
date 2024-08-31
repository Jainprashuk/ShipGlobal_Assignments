// Variables to store the target number and track the number of attempts
let targetNumber;
let attempts = 0;
const maxAttempts = 5; // Maximum number of allowed attempts

// References to the input, buttons, and feedback elements in the DOM
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const restartGameButton = document.getElementById('restart-game');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

// Function to start a new game
function startGame() {
    // Generate a random number between 1 and 100
    targetNumber = Math.floor(Math.random() * 100) + 1;

    // Reset the number of attempts
    attempts = 0;

    // Clear the input field
    guessInput.value = '';

    // Clear any feedback messages
    feedback.textContent = '';

    // Update the attempts display
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    // Enable the submit button and hide the restart button
    submitGuessButton.disabled = false;
    restartGameButton.style.display = 'none';
}

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field and convert it to a number
    const userGuess = Number(guessInput.value);

    // Validate the user's input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    // Increment the attempts counter
    attempts++;

    // Update the attempts display
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    // Check if the user's guess matches the target number
    if (userGuess === targetNumber) {
        feedback.textContent = `Congratulations! You've guessed the number in ${attempts} attempts.`;
        submitGuessButton.disabled = true; // Disable the submit button after a correct guess
        restartGameButton.style.display = 'block'; // Show the restart button
    } 
    // If the guess is lower than the target number
    else if (userGuess < targetNumber) {
        feedback.textContent = 'Your Number is Low !.';
    } 
    // If the guess is higher than the target number
    else {
        feedback.textContent = 'Your Number is High !.';
    }

    // If the maximum number of attempts is reached and the user hasn't guessed correctly
    if (attempts >= maxAttempts && userGuess !== targetNumber) {
        feedback.textContent = `Sorry, you've used all ${maxAttempts} attempts. The number was ${targetNumber}.`;
        submitGuessButton.disabled = true; // Disable the submit button
        restartGameButton.style.display = 'block'; // Show the restart button
    }
}

// Attach event listeners to the submit and restart buttons
submitGuessButton.addEventListener('click', checkGuess);
restartGameButton.addEventListener('click', startGame);

// Start the game when the page loads
window.onload = startGame;
