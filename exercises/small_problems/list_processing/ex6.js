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

console.log(substrings('abcde'));

// // returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
