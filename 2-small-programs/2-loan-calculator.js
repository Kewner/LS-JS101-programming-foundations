const rlsync = require('readline-sync');
const messages = require('./2-loan-messages.json');

// function to print message from json
function prompt(msg) {
  if (messages[msg]) {
    message = messages[msg];
    console.log(`=> ${message}`)
  } else {
    console.log(`=> ${msg}`);
  }
}

// function to validate number input
function validateInput(input) {
  if (input.trim() === '') {
    input = NaN;
  } else {
    input = Number(input);
  }

  while (isNaN(input) || input < 0) {
    prompt('Please enter a positive number.');
    input = validateInput(rlsync.question(''));
  }
  return input;
}

// function to calculate monthly payment
function calculateMonthly(amount, rate, term) {
  return amount * (rate / (1 - Math.pow((1 + rate), (-term))));
}

// main program
while (true) {
  console.clear();
  prompt('welcome');

  prompt('getAmount');
  let loanAmount = validateInput(rlsync.question(''));

  prompt('getApr');
  let monthlyRate = validateInput(rlsync.question('')) / 100 / 12;

  prompt('getTerm');
  let monthsTerm = validateInput(rlsync.question(''));

  while (monthsTerm < 1) {
    prompt('minimalDuration');
    monthsTerm = validateInput(rlsync.question(''));
  }

  let monthlyPayment = calculateMonthly(loanAmount, monthlyRate, monthsTerm);
  monthlyPayment = Number(monthlyPayment).toFixed(2);

  if (loanAmount === 0) {
    prompt('noLoan');
  } else if (monthlyRate === 0) {
    monthlyPayment = loanAmount / monthsTerm;
    prompt(`You will be paying $${monthlyPayment} each month for` +
           ` ${monthsTerm} month(s).`);
  } else {
    prompt(`You will be paying $${monthlyPayment} each month for` +
           ` ${monthsTerm} month(s).`);
  }

  prompt('anotherCalculation');
  let calculateAgain = rlsync.question('');

  while (calculateAgain !== 'y' && calculateAgain !== 'n') {
    prompt('answerCheck');
    calculateAgain = rlsync.question('');
  }

  if (calculateAgain === 'n') break;
}

prompt('bye');