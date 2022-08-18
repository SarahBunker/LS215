// Implement a function that determines whether a string has any character that appears more than once. The function should return true if, and only if, all characters in the string are unique. We should ignore multiple spaces and case differences; focus instead on the non-space characters without regard to case.

//  determine if a string has any characters that apear more then once
// return true if no repeated characters
// ignore multiple spaces
// ignore case differences

// remove all spaces from string
// convert string to lowercse
// convert string to array of chars
// iterate through array of chars
//  check if current value is in the previous portion of the array
    // can mark which letters you have seen,
    // can also use slic or substring


function isAllUnique(string) {
  let charsSeen = [];
  for(let i = 0; i < string.length; i ++) {
    if (string[i] === ' ') continue;

    if (charsSeen.includes(string[i].toLowerCase())) {
      return false;
    }
    charsSeen.push(string[i].toLowerCase())
  }
  return true
  // ...
}

let a = isAllUnique('The quick brown fox jumped over a lazy dog');  // false
let b = isAllUnique('123,456,789');                                 // false
let c = isAllUnique('The big apple');                               // false
let d = isAllUnique('The big apPlE');                               // false
let e = isAllUnique('!@#$%^&*()');                                  // true
let f = isAllUnique('abcdefghij klmnopqr stuvwxyz');                  // true


console.log(a,b,c,d);
console.log(e,f);
