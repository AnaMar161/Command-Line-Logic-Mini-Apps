
// Number guessing game script 

const numInputEl = document.getElementById('numInput');
const submitForm = document.getElementById('guessForm') || document.querySelector('form');
const resultBox = document.getElementById('result') || document.createElement('div');

function isBetweenOneAndHundred(val) {
  const n = Number(val);
  return Number.isFinite(n) && n >= 1 && n <= 100;
}

function randomInt1to100() {
  // Math.random() → [0, 1)
  // Multiply by 100 → [0, 100)
  // Math.floor → integer in [0, 99]
  // Add 1 → integer in [1, 100]
  return Math.floor(Math.random() * 100) + 1;
}

submitForm.addEventListener('submit', e => {
  e.preventDefault(); // stop page reload

  const userGuess = Number(numInputEl && numInputEl.value);

  if (!isBetweenOneAndHundred(userGuess)) {
    resultBox.textContent = 'Please enter a number between 1 and 100';
    resultBox.classList.remove('hidden');
    return;
  }

  const randomInt = randomInt1to100();
  const isMatch = randomInt === userGuess;

  // Show the outcome
  resultBox.textContent = isMatch ? 'True' : 'False';
  resultBox.classList.remove('hidden');
  console.log('Random number:', randomInt, 'User guess:', userGuess, 'Match:', isMatch);
});

