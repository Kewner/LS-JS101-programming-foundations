// What is the difference between the following two code snippets?
// Check the MDN documentation on while and do...while.

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// The above loop won't output anything, because it first checks if the
// conditional is true. If it's not, it quits the loop.

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

// The above loop will output 'Woooot!', because it terminates the code
// once before ever checking the conditional.