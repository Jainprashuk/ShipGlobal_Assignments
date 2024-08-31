// script.js
let targetNumber;
let attempts = 0;
const maxAttempts = 5;

const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const restartGameButton = document.getElementById('restart-game');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    feedback.textContent = '';
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    submitGuessButton.disabled = false;
    restartGameButton.style.display = 'none';
}

function checkGuess() {
    const userGuess = Number(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === targetNumber) {
        feedback.textContent = `Congratulations! You've guessed the number in ${attempts} attempts.`;
        submitGuessButton.disabled = true;
        restartGameButton.style.display = 'block';
    } else if (userGuess < targetNumber) {
        feedback.textContent = 'Your Number is Low !.';
    } else {
        feedback.textContent = 'Your Number is High !.';
    }

    if (attempts >= maxAttempts && userGuess !== targetNumber) {
        feedback.textContent = `Sorry, you've used all ${maxAttempts} attempts. The number was ${targetNumber}.`;
        submitGuessButton.disabled = true;
        restartGameButton.style.display = 'block';
    }
}

submitGuessButton.addEventListener('click', checkGuess);
restartGameButton.addEventListener('click', startGame);

// Start the game when the page loads
window.onload = startGame;
