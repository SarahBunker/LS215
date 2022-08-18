// Write a function that returns a list of all substrings of a string that are palindromic.
// each substring must consist of the same sequence of characters forwards as backwards.
// The substrings in the returned list should be sorted by their order of appearance in the input string.
// Duplicate substrings should be included multiple times.

// use substrings function from previous problem

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

/*
// Problem

in: string
out: array of substrings that are palindromes

explicit:
  case sensitive
  includes all characters
  order is based off the order the first letter of the palindrome,
  shorter palindromes come before longer  palindromes
  duplicate substrings are included
implicit:

mutating?
-------------------------------------------------
// Examples

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

- edge cases
-------------------------------------------------
// DataStructure

-------------------------------------------------
// Algorithym

determine palindrome
  convert string to array
  reverse array
  convert back to string
  compare reversed string with original
  return boolean if they are equal or not

convert string to an array of all substrings
iterate through substrings and select the substrings that are palindromes
return selected array

- take example(s) through Algorithym
*/

"use strict"

let leadingSubstrings = function(string) {
  return string.split('').reduce( function(results, _ , index) {
    results.push(string.substring(0, index + 1));
    return results
  }, []);
}

let substrings = function(string) {
  let results = []
  for (let i = 0; i < string.length; i++) {
    let innerloopString = string.slice(i);
    results.push(...leadingSubstrings(innerloopString));
  }
  return results;
}

let isPalindrome = function(string) {
  return (string.length > 1) && (string === string.split('').reverse().join(''));
}

let palindromes = function(string) {
  return substrings(string).filter( isPalindrome );
}

console.log(isPalindrome('ada'));

console.log(palindromes('abcd')                           );       // []
console.log(palindromes('madam')                          );      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye')  );
console.log(palindromes('knitting cassettes')             );
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]


// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
