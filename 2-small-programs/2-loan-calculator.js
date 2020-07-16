const RLSYNC = require('readline-sync');

function askInput(prompt) {
  let answer = Number(RLSYNC.question(`=> ${prompt}\n`));

  while (isNaN(answer) || answer < 0) {
    answer = RLSYNC.question('Please enter a number of at least 0.\n');
  }
  return answer;
}

function askDurationInput(prompt) {
  let answer = Number(RLSYNC.question(`=> ${prompt}\n`));

  while (isNaN(answer) || answer <= 0) {
    answer = RLSYNC.question('Please enter a number greater than 0.\n');
  }
  return answer;
}

while (true) {
  console.clear();
  console.log('=> Welcome to Loan Calculator!');

  let monthlyPayment;
  let loanAmount = askInput('What amount of money would you like to loan?');
  let apr = askInput("What's the Annual Percentage Rate (in percents?)");
  let monthlyRate = apr / 100 / 12;
  let durationMonths = askDurationInput("What's the loan term (in" +
                                         " months, at least 1)?");

  if (loanAmount === 0) {
    monthlyPayment = loanAmount;
    durationMonths = 0;
  } else if (monthlyRate > 0) {
    monthlyPayment = loanAmount *
    (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-durationMonths))));
  } else if (monthlyRate === 0) {
    monthlyPayment = loanAmount / durationMonths;
  }

  monthlyPayment = monthlyPayment.toFixed(2);

  console.log(`=> Your monthly payment will be $${monthlyPayment}` +
  ` for ${durationMonths} month(s).`);

  console.log('=> Would you like to do another calculation? y/n');
  let again = RLSYNC.question().toLowerCase();

  while (again !== 'y' && again !== 'n') {
    console.log("=> Please enter 'y' for yes or 'n' for no.");
    again = RLSYNC.question().toLowerCase();
  }

  if (again === 'n') {
    console.log('=> Goodbye!');
    break;
  }
}