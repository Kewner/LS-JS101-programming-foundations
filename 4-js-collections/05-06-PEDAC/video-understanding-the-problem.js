// Algorithm (in plain English)
// ===========================================================================
// 1. Create an empty 'rows' array to contain all of the rows
// 2. Create a 'row' array and add it to the overall 'rows' array
//    - See 'Sub-problem 2' below
// 3. Repeat step 2 until all the necessary rows have been created
//    - All rows have been created when length of the 'rows' array is equal to input integer
// 4. Sum the final row
// 5. Return the sum

// Sub-problem 2: Create a 'row' array and add it to the overall 'rows' array
// ---------------------------------------------------------------------------
// Rules:
// - Row is an array
// - Array contains integers
// - Integers are consecutive even numbers
// - Integers in each row form part of a larger overall sequence
// - Rows are of different lengths
// - Input: the information needed to create the output
//      - The starting integer
//      - Length of the row
// - Output: the row itself [8, 10, 12]

// Examples:
// start: 2, length: 1 --> [2]
// start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]

// Data structures:
// - An array of integers

// Algorithm:
// 1. Create an empty 'row' array to contain the integers
// 2. Add the starting integer
// 3. Increment the starting integer by 2 to get the next integer
// 4. Repeat steps 2 & 3 until the array has reached the correct length
// 5. Return the 'row' array

// Implementation:
// Start the loop
//    - Add start integer to the row array
//    - Increment the start integer by 2
//    - Break out of the loop if length of row array equals rowLength

function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  // Calculating the starting integer:
  // Rule: First integer of row is equal to last integer of preceding row + 2
  // Algorithm:
  // - Get the last row from the rows array (which is the preceding row) 
  // - Get the last integer of that row
  // - Add 2 to the integer

  for (let currentRowNum = 1; currentRowNum <= rowNumber; currentRowNum += 1) {
    let row = createRow(startInteger, currentRowNum);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = rows.pop();
  return finalRow.reduce((acc, cur) => acc + cur);
}

// helper function (sub-problem 2)
function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }

  return row; 
}

// test cases
console.log(sumEvenNumberRow(1)); // 2 = 2
console.log(sumEvenNumberRow(2)); // 4 + 6 = 10
console.log(sumEvenNumberRow(4)); // 14 + 16 + 18 + 20 = 68

// console.log(createRow(2, 1)); // [2]
// console.log(createRow(4, 2)); // [4, 6]
// console.log(createRow(8, 3)); // [8, 10, 12]