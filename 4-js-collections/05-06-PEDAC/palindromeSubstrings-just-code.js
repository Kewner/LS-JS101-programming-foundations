// return array with all substrings with a length of at least 2
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

// return if string is palindrome
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// return array with all substrings which are palindromes
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

// test cases
console.log(palindromeSubstrings("supercalifragilisticexpialidocious")) // ["ili"]
console.log(palindromeSubstrings("abcddcbA")) // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")) // []
console.log(palindromeSubstrings("")) == [] // []