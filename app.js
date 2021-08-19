let userScore = 0;
let computerScore = 0;

// Pick HTML elements
const userScoreElement = document.querySelector('#user-score');
const computerScoreElement = document.querySelector('#computer-score');
const scoreBoardElement = document.querySelector('.score-board');
const resultElement = document.querySelector('.result');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const random = Math.round(Math.random() * 2);

  return choices[random];
};

const updateScoreElements = () => {
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
};

const win = (userChoice, computerChoice) => {
  document.getElementById(userChoice).classList.add('victory');
  setTimeout(() => document.getElementById(userChoice).classList.remove('victory'), 300)
  userScore++;

  // VARIABLES to make it mor readable
  const capitalizedUserChoice = `${userChoice[0].toUpperCase()}${userChoice.slice(1)}`

  // Capitalize result text
  resultElement.textContent = `${capitalizedUserChoice} beats ${computerChoice}, you win!`;
}

const lose = (userChoice, computerChoice) => {
  document.getElementById(userChoice).classList.add('defeat');
  setTimeout(() => document.getElementById(userChoice).classList.remove('defeat'), 300)
  computerScore++;

  const capitalizedComputerChoice = `${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}`

  resultElement.textContent = `${capitalizedComputerChoice} beats ${userChoice}, you lose!`;
}

const draw = (userChoice, computerChoice) => {
  document.getElementById(userChoice).classList.add('draw');
  setTimeout(() => document.getElementById(userChoice).classList.remove('draw'), 300)
  resultElement.textContent = `Draw!`;
}

const game = (userChoice) => {
  const computerChoice = getComputerChoice();

  // check every case
  switch (userChoice) {
    case 'rock':
      if (computerChoice === 'paper') {
        lose(userChoice, computerChoice);
      } else if (computerChoice === 'scissors') {
        win(userChoice, computerChoice);
      } else {
        draw(userChoice, computerChoice);
      }
      break;
    case 'paper':
      if (computerChoice === 'scissors') {
        lose(userChoice, computerChoice);
      } else if (computerChoice === 'rock') {
        win(userChoice, computerChoice);
      } else {
        draw(userChoice, computerChoice);
      }
      break;
    case 'scissors':
      if (computerChoice === 'rock') {
        lose(userChoice, computerChoice)
      } else if (computerChoice === 'papers') {
        win(userChoice, computerChoice)
      } else {
        draw(userChoice, computerChoice);
      }
      break;
    default:
      break;
  }
};

const setEventListeners = () => {
  rockBtn.addEventListener('click', () => {
    game('rock');
    updateScoreElements();
  });
  paperBtn.addEventListener('click', () => {
    game('paper');
    updateScoreElements();
  });
  scissorsBtn.addEventListener('click', () => {
    game('scissors');
    updateScoreElements();
  });
};

setEventListeners();
