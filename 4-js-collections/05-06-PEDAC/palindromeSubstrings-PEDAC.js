// PROBLEM
// =========================

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings("")) == []
// should log: []


// UNDERSTANDING THE PROBLEM
// =========================

// Questions that could be asked:
//    - What is a substring?
//    - What is a palindrome?
//    - Should the function return a new object?
//    - What should happen when the input is not a string?

// Input: a string
// Output: an array with all substrings from string which are palindromes

// Explicit rules:
//    - palindrome words are case sensitive: 'abBA' is not a palindrome
//    - return an array with all substrings which are palindromes

// Implicit rules:
//    - if the string doesn't contain any palindromes, return empty array
//    - if the string is empty, return empty array

// DATA STRUCTURE / ALGORITHM
// ==========================

// Data structure: we will use an array, since that's the desired output.

// (High-level) Algorithm:
// - declare a result variable and initialize it to an empty array.
// - create an array name substrArray that contains all of the substrings of
//          - how to do this needs to be figured out.
//   the input string that are at least 2 characters long.
// - loop through the words in the substrArray array.
// - if the word is a palindrome, append it to the result array.
//          - how to do this needs to be figured out.
// - return the result array.

// First code, based on the high-level algorithm:

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

// we call the functions 'substrings' and 'isPalindrome'; before writing them,
// let's figure out the algorithms, starting with 'substrings'.

// use a small example first:
//      - input: 'halo'
//      - output: ['ha', 'hal', 'halo', 'al', 'alo', 'lo']

// 1. declare a 'result' array.
// 2. for loop over each starting index from 0 through the next to last index
//      - create a substrLength var with a value of 2 for the length of substring
//      - for each substring length of 2 until there are no substrings of that length:
//            - extract substring of indicated length starting at indicated index
//            - append the substring to the 'result' array
//            - increment substrLength by 1
//      - end of inner loop
//    end of outer loop
// 3. return the 'result' array.

function substrings(str) {
  let result = [];

  for (let startIdx = 0; startIdx < str.length - 1; startIdx += 1) {
    let substrLength = 2;

    while (substrLength <= str.length - startIdx) {
      result.push(str.slice(startIdx, startIdx + substrLength));
      substrLength += 1;
    }
  }

  return result;
}

// now let's write the algorithm and code for the 'isPalindrome' function.

// Check whether the string value is equal to its reversed value.
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// Test cases:
console.log(palindromeSubstrings("supercalifragilisticexpialidocious")) // ["ili"]
console.log(palindromeSubstrings("abcddcbA")) // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")) // []
console.log(palindromeSubstrings("")) == [] // []


// TAKEAWAY!
// =======================
// The main takeaway is that you should be able to write a plain English
// solution to the problem. If you can't do that, you won't be able to code it
// either. You also don't need any "fancy" functions to solve these problems.