// Here's an exercise for you: suppose we wanted to transform the numbers based
// on their position in the array rather than their value? Try coding a solution
// that doubles the numbers that have odd indices:

function doubleOddIndices(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNum = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNum * 2);
    } else {
      doubledNums.push(currentNum);
    }
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers));  // [ 1, 8, 3, 14, 2, 12 ]
console.log(myNumbers); // [1, 4, 3, 7, 2, 6];