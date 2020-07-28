const readline = require('readline-sync');
const MESSAGES = require('./rock_paper_scissors_bonus3_msgs.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

let roundNumber = 1;
let playerWins = 0;
let computerWins = 0;

// Displays messages from json, takes arguments in case of template literals
function prompt(msgKey, optionalArg1, optionalArg2 = '') {
  if (optionalArg1 || optionalArg2) {
    console.log(`=> ${MESSAGES[msgKey]}`, optionalArg1, optionalArg2);
  } else {
    console.log(`=> ${MESSAGES[msgKey]}`);
  }
}

// Expands abbreviated user input
function expandChoice(choice) {
  choice = choice.toLowerCase();
  if (choice === 'r') {
    choice = 'rock';
  } else if (choice === 'p') {
    choice = 'paper';
  } else if (choice === 'sc') {
    choice = 'scissors';
  } else if (choice === 'sp') {
    choice = 'spock';
  } else if (choice === 'l') {
    choice = 'lizard';
  }
  return choice;
}

// Decides and returns current round winner
function decideRoundWinner(choice, computerChoice) {
  prompt('youChose', choice, computerChoice);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard') ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock')) {
    return 'playerRound';
  } else if ((computerChoice === 'rock' && choice === 'scissors') ||
             (computerChoice === 'rock' && choice === 'lizard') ||
             (computerChoice === 'paper' && choice === 'rock') ||
             (computerChoice === 'paper' && choice === 'spock') ||
             (computerChoice === 'scissors' && choice === 'paper') ||
             (computerChoice === 'scissors' && choice === 'lizard') ||
             (computerChoice === 'spock' && choice === 'rock') ||
             (computerChoice === 'spock' && choice === 'scissors') ||
             (computerChoice === 'lizard' && choice === 'paper') ||
             (computerChoice === 'lizard' && choice === 'spock')) {
    return 'computerRound';
  } else {
    return 'nobody';
  }
}

// Adds points to round winner score
function keepScore(roundWinner) {
  switch (roundWinner) {
    case 'playerRound':
      playerWins += 1;
      break;
    case 'computerRound':
      computerWins += 1;
      break;
  }
}

// Decides and returns game winner
function decideGameWinner() {
  if (playerWins === 5) {
    return 'playerGame';
  } else if (computerWins === 5) {
    return 'computerGame';
  }
}

// Displays round winner and game winner
function displayWinner(winner) {
  switch (winner) {
    case 'playerRound':
      prompt('youWonRound');
      break;
    case 'playerGame':
      prompt('youWonGame');
      break;
    case 'computerRound':
      prompt('youLostround');
      break;
    case 'computerGame':
      prompt('youLostGame');
      break;
    case 'nobody':
      prompt('tie');
      break;
  }
}

prompt('welcome');
prompt('rules');

while (true) {
  prompt('chooseOne', roundNumber, VALID_CHOICES.join(', '));
  let choice = expandChoice(readline.question());

  while (!VALID_CHOICES.includes(choice)) {
    prompt('noValidChoice');
    choice = expandChoice(readline.question());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let roundWinner = decideRoundWinner(choice, computerChoice);
  keepScore(roundWinner);
  displayWinner(roundWinner);

  let gameWinner = decideGameWinner();
  displayWinner(gameWinner);

  roundNumber += 1;

  // When the game is over: reset scores and round number, ask to play again
  if (playerWins === 5 || computerWins === 5) {
    playerWins = 0;
    computerWins = 0;
    roundNumber = 1;

    prompt('playAgain');
    let answer = readline.question().toLowerCase();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('pleaseYesOrNo');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== 'y') {
      break;
    } else {
      console.clear();
    }
  }

}

prompt('goodbye');