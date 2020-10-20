// Using the code below as a starting point, write a while loop that logs the
// elements of array at each index, and terminates after logging the last
// element of the array.

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

// Further Exploration
// What would the code output if array was empty? Why is that?

// It would output nothing: array.length would be 0, so index is never less.