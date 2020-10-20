// If we wanted to, we could've decided that mutating the function argument is
// the right approach. Can you implement a doubleNumbers function that mutates
// its argument?

function doubleNumbers(numbers) {
  numbers.forEach((num, idx) => {
    numbers.push(num * 2);
    numbers.shift(idx);
  })

  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12]

// LS solution:
function doubleNumbers1(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * 2;

    counter += 1;
  }

  return numbers;
}

// A couple items of note:
// - Rather than returning a new array, this function returns a reference to
//   the (mutated) original array.
// - Lines 5 and 6 can be shortened to 1 line:
//   numbers[counter] = numbers[counter] * 2 or even numbers[counter] *= 2.
