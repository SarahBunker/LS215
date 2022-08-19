// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

// swap the case of every letters
// ignore all other characters

// helper method swapcase for char
// check if character is in the alphabet >> if not return character
// check if lower case
  // return uppercase
// check if uppercase
  // return lowercase


// split string into characters splitting on empty string
// map chars passing to swapcase helpermethod
// combine back into string joining on empty string

let swapChar = function(char) {
  if (char.match(/[^a-z]/i)) return char;
  if (char.match(/[a-z]/)) return char.toUpperCase();
  return char.toLowerCase();
}

// console.log(swapChar('a') === 'A');
// console.log(swapChar('A') === 'a');
// console.log(swapChar('$') === '$');

let swapCase = function(string) {
  return string.split('').map(swapChar).join("");
}


console.log(swapCase('CamelCase')         );              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV') );      // "tONIGHT ON xyz-tv"
