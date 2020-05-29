const READLINE = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let LANGUAGE;

// Get a message from JSON file, in selected language
function messages(message, lang = 'english') {
  if (lang !== '1' && lang !== '2' && lang !== '3') {
    lang = '1';
  }

  return MESSAGES[lang][message];
}

// Function to prompt a message
function prompt(msgKey) {
  let message = messages(msgKey, LANGUAGE);
  console.log(`=> ${message}`);
}

// Function to ask the user for input
function askInput(msgKey) {
  let message = messages(msgKey, LANGUAGE);
  console.log(`=> ${message}`);
  return READLINE.question();
}

// Ask user to choose language
LANGUAGE = askInput('chooseLanguage').toLowerCase();

// Function to check if the given number is valid
function invalidNumber(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    number = invalidNumber(askInput('notValidNum'));
  }
  return number;
}

// Function to check if the operation choice is valid
function invalidOperation(operation) {
  while (!['1', '2', '3', '4'].includes(operation)) {
    operation = invalidOperation(askInput('mustChoose'));
  }
  return operation;
}

prompt('welcome');

// Set a variable to determine if the program should run (again).
let onOrOff = true;

// Keep running the calculator as long as onOrOff = true
while (onOrOff) {
  let number1 = invalidNumber(askInput('askFirstNum'));
  let number2 = invalidNumber(askInput('askSecondNum'));
  let operation = invalidOperation(askInput('whatOperation'));

  let output;

  // Perform operation
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  // Print the result
  console.log(`The result is: ${output}`);

  // Ask if the user wants to do another calculation
  let anotherCalculation = askInput('anotherCalculation');

  // User input sets onOrOff to true or false
  while (anotherCalculation !== 'y' && anotherCalculation !== 'n') {
    prompt('yesOrNo');
    anotherCalculation = READLINE.question();
  }

  if (anotherCalculation === 'n') onOrOff = false;
}

prompt('goodbye');