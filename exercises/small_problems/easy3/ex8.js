// input string
// Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

// input: string
// - words
// output
// - string
// - words have first and last letters swapped

// rules
//    words are separated by spaces
//    words have at least one letter
//    string contains at least one word >> no empty strings
//    string only has words and spaces  >> I will will only have a-z and spaces
//    no leading or trailing or repeated spaces

// question
//    characters in words / no, just worry about the cases belo

// examples
//   - case sensitive
//   - single letter words stay the same
//   - no punctuation

// Data structure
// input string
// array of words << splitting string on spaces
// array of chars << splitting word on ''
      // chars are stored as strings
// string word << join on ''
// string of words << join array of words with " "
// output string

// algorithm
// switch letters of word and return new word
//    split word into chars [s, a, n, d, b, o, x]
//    access first character s
//    access last character x
//    switch elements in array of chars [x, a, n, d, b, o, s]
//    join elements on '' in array of chars xandbos
//    return word
// iterate through words and switch letters 'Oh what a'
//    split string into words array [Oh, what, a]
//    iterate through words array
//      switch letters of words
//    join words on  ''
//    return new string


let swapWord = function(word) {
  let chars = word.split('');
  // let firstChar = chars[0]
  // let lastChar = chars[chars.length - 1]
  // chars[0] = lastChar
  // chars[chars.length - 1] = firstChar
  [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]]
  return chars.join('');
}

console.log(swapWord('Hello') === 'oellH');
console.log(swapWord('H') === 'H');

let swap = function(inputString) {
  return inputString.split(' ')
                    .map(swapWord)
                    .join(' ');

}

console.log(swap('a sentence of words'));

console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde')                         === "ebcdA");                          // "ebcdA"
console.log(swap('a')                             === "a");                              // "a"
