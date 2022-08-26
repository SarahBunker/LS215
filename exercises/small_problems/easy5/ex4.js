// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

// input: nonempty string argument
// returns: middle character(s)
//   if the string has an odd length
//     returns middle character
//   if the string is even length
//     return two middile characters

/*
I - L o v e - J a  v  a  S  c  r  i  p  t
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16  17    position

string length = 17
middle is character at position 9, index 8
half of 17 is 8.5

L a u n c h - S c  h  o  o  l
1 2 3 4 5 6 7 8 9 10 11 12 13    position

length 13
middle character at position 7, index 6
half of 13 is 6.5

L a u n c h
1 2 3 4 5 6    position

length is 6
middle characters are at positions 3 and 4, index 2 and 3
half of 6 is 3

L a u n c h s c h  o  o l
1 2 3 4 5 6 7 8 9 10 11 12    position

middle characters are at positions 6 and 7, index 5 and 6


// find length of string
// middle index is round up of (length / 2) - 1
// initialize empty string
// add charater that is at middle index
// if length is even also add the character at the middleindex + 1

*/

function centerOf(string) {
  let length = string.length;
  let middleIndex = Math.ceil(length / 2) - 1
  let results = string[middleIndex];
  if (length % 2 === 0) results += string[middleIndex + 1];
  return results;
}

console.log(centerOf('I Love JavaScript') === "a"); // "a"
console.log(centerOf('Launch School')     === " ");     // " "
console.log(centerOf('Launch')            === "un");            // "un"
console.log(centerOf('Launchschool')      === "hs");      // "hs"
console.log(centerOf('x')                 === "x");                 // "x"
