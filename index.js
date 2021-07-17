window.addEventListener('load', init)

// Global elemnts
// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}
// to change the level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

// Dom\Html elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highScore = document.querySelector('#highscore');
const words = [
    'sehrgar',
    'ahmoqona',
    'uzoqlik',
    'tabiat',
    'animatsiya',
    'lacetti',
    'malibu',
    'jirafa',
    'liverpool',
    'yuqori',
    'boshlang\'ich',
    'kalkulyator',
    'kompyuter',
    'dasturxon',
    'taekvando',
    'bobo',
    'Microsoft',
    'umumiy',
    'Farg\'ona',
    'munosabat',
    'inson',
    'taklifnoma',
    'bog\'lovchi',
    'g\'alaba',
    'muqobil',
    'xursand',
    'websayt',
    'modellash',
    'lamborghini',
    'tesla',
    'leopard',
    'chelsea',
    'professional',
    'bilimsiz',
    'yaratmoq',
    'o\'ylamoq',
    'ustoz',
    'kungfu',
    'ota-ona',
    'bobo-buvi',
    'alligator',
    'O\'zbekistan',
    'hayratlanmoq',
    'xafaqon',
    'ixtiro',
    'quruvchi',
    'blender',
    'kinofilm',
    'Stanford',
    'MIT',
    'Harvard',
    'student',
    'uzbekcoders',
    'nanodegree',
    'Udacity',
    'musobaqa',
    'muvafaqqiyat',
    'munosabat',
    'jonli',
    'raqamli',
    'markaz',
    'texnologiyalar',
    'umr',
    'butunjahon'
];
const scores = [];

// Initialize our game
function init() {
    //  Show number of seconds in head
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input', startMatching)
    // countdown
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkstatus, 50);
}

// Shows random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);
    // output
    currentWord.innerHTML = words[randIndex];
}
// start matching words
function startMatching() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    // if score is -1, display 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
        
}

// Match current word to input
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
            message.innerHTML = "To'g'ri!!!";
            if (message.innerHTML = "To'g'ri!!!"){
                message.style.color = 'green';
            }
            return true;
        } else {
            message.innerHTML = '';
            return false;
    }
}

// Countdown timer
function countdown() {
    if(time > 0) {
        // Decrease time
        time--;
        seconds.textContent = time;
    } else if(time === 0){
        // game over
        isPlaying = false;
        scores.push(score);
        seconds.textContent = time;
    }
    // shoow time
    timeDisplay.innerHTML = time;
    let highestScore = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > highestScore) {
            highestScore = scores[i];
        }
    }
    highScore.textContent = highestScore;
}
// checkstatus
function checkstatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = "O'yin tugadi!!!";
        if (message.innerHTML === "O'yin tugadi!!!") {
            message.style = 'color: #db2626; font-weight: 650; font-size: 1.5rem; letter-spacing: 2px';
        }
        score = -1;
    }
}