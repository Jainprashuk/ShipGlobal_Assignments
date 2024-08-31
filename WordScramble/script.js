const words = [
    { original: 'javascript', scrambled: 'scijptrava', hint: 'A programming language' },
    { original: 'developer', scrambled: 'evolpedre', hint: 'Someone who writes code' },
    { original: 'frontend', scrambled: 'tnfodren', hint: 'Client-side development' },
    { original: 'backend', scrambled: 'dbnakee', hint: 'Server-side development' },
    { original: 'scramble', scrambled: 'rmbsecal', hint: 'To mix up letters' }
];

let currentWord = {};
let attempts = 0;
let timer;
let timeLeft = 30;

function getNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    document.getElementById('scrambled-word').textContent = currentWord.scrambled;
    document.getElementById('hint-text').textContent = currentWord.hint;
    document.getElementById('feedback').textContent = '';
    document.getElementById('user-input').value = '';
    attempts = 0;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    resetTimer();
}

function checkGuess() {
    const userGuess = document.getElementById('user-input').value.trim();
    if (userGuess === currentWord.original) {
        document.getElementById('feedback').textContent = 'Correct! Well done!';
        stopTimer();
    } else {
        document.getElementById('feedback').textContent = 'Incorrect guess. Try again!';
        attempts++;
        document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').textContent = 'Time is up! The word was: ' + currentWord.original;
        }
    }, 1000);
}

function resetTimer() {
    timeLeft = 30;
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
    if (timer) clearInterval(timer);
    startTimer();
}

function stopTimer() {
    if (timer) clearInterval(timer);
}

document.getElementById('submit-btn').addEventListener('click', checkGuess);
document.getElementById('new-word-btn').addEventListener('click', getNewWord);

// Initialize the game
getNewWord();
