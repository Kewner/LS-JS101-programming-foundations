const rlsync = require('readline-sync');
const MESSAGES = require('./2-loan-messages-v2.json');

function prompt(msg, payment, term) {
  if (payment && term) {
    console.log(`=> ${MESSAGES[msg]}`, payment, term);
  } else if (MESSAGES[msg]) {
    console.log(`=> ${MESSAGES[msg]}`);
  } else {
    console.log(`=> ${msg}`);
  }
}

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

function calculateMonthly(amount, rate, term) {
  return amount * (rate / (1 - Math.pow((1 + rate), (-term))));
}

function displayMonthlyPayment(amount, rate, payment, term) {
  if (amount === 0) {
    prompt('noLoan');
  } else if (rate === 0) {
    payment = Number((amount / term).toFixed(2));
    prompt('monthlyPayment', payment, term);
  } else {
    prompt('monthlyPayment', payment, term);
  }
}

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

  displayMonthlyPayment(loanAmount, monthlyRate, monthlyPayment, monthsTerm);

  prompt('anotherCalculation');
  let calculateAgain = rlsync.question('').toLowerCase();

  while (calculateAgain !== 'y' && calculateAgain !== 'n') {
    prompt('answerCheck');
    calculateAgain = rlsync.question('').toLowerCase();
  }

  if (calculateAgain === 'n') break;
}

prompt('bye');