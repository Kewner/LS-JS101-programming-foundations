// Here's an exercise for you: suppose we wanted to transform the numbers based
// on their position in the array rather than their value? Try coding a solution
// that doubles the numbers that have odd indices:

function multiply(numbers, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNum = numbers[counter];
    multipliedNums.push(currentNum * multiplier);
  }

  return multipliedNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3));  // [3, 12, 9, 21, 6, 18]
console.log(myNumbers); // [1, 4, 3, 7, 2, 6];