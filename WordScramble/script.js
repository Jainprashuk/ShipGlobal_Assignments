// Array of words with their original, scrambled forms, and a hint for each
const words = [
    { original: 'javascript', scrambled: 'scijptrava', hint: 'A programming language' },
    { original: 'developer', scrambled: 'evolpedre', hint: 'Someone who writes code' },
    { original: 'frontend', scrambled: 'tnfodren', hint: 'Client-side development' },
    { original: 'backend', scrambled: 'dbnakee', hint: 'Server-side development' },
    { original: 'scramble', scrambled: 'rmbsecal', hint: 'To mix up letters' }
];

// Variable to hold the current word object
let currentWord = {};
// Variable to keep track of the number of attempts
let attempts = 0;
// Variables for managing the timer
let timer;
let timeLeft = 30;

// Function to get a new word and reset the game state
function getNewWord() {
    // Select a random word from the words array
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];

    // Update the scrambled word and hint on the webpage
    document.getElementById('scrambled-word').textContent = currentWord.scrambled;
    document.getElementById('hint-text').textContent = currentWord.hint;

    // Clear feedback message and reset the input field
    document.getElementById('feedback').textContent = '';
    document.getElementById('user-input').value = '';

    // Reset attempts and update the displayed number of attempts
    attempts = 0;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    // Reset the timer for the new word
    resetTimer();
}

// Function to check the user's guess
function checkGuess() {
    // Get the user's guess from the input field
    const userGuess = document.getElementById('user-input').value.trim();

    // Compare the guess with the original word
    if (userGuess === currentWord.original) {
        // If correct, display a success message and stop the timer
        document.getElementById('feedback').textContent = 'Correct! Well done!';
        stopTimer();
    } else {
        // If incorrect, display an error message and increase the attempt counter
        document.getElementById('feedback').textContent = 'Incorrect guess. Try again!';
        attempts++;
        document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    }
}

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        // Update the timer display on the webpage
        document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;

        // If time runs out, stop the timer and reveal the original word
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').textContent = 'Time is up! The word was: ' + currentWord.original;
        }
    }, 1000); // Timer updates every second
}

// Function to reset the timer for a new word
function resetTimer() {
    // Reset time left to 30 seconds and update the display
    timeLeft = 30;
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;

    // Stop any existing timer and start a new one
    if (timer) clearInterval(timer);
    startTimer();
}

// Function to stop the timer
function stopTimer() {
    if (timer) clearInterval(timer);
}

// Event listeners for button clicks
document.getElementById('submit-btn').addEventListener('click', checkGuess);
document.getElementById('new-word-btn').addEventListener('click', getNewWord);

// Initialize the game by getting the first word
getNewWord();
