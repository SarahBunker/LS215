// Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a single space.

// input string
// output array
  // string with word space length of word
  // empty strings and no arguments returns an empty array

// split words on single space
// map words
  // determine word length
  // add space and word length to end of string
// return new array

let wordLengths = function(string = '') {
  if (string.length === 0) return [];
  return string.split(' ')
               .map( (word) => `${word} ${word.length}`);
}


console.log(wordLengths('cow sheep chicken')                 );
console.log(wordLengths('baseball hot dogs and apple pie')   );
console.log(wordLengths("It ain't easy, is it?")             );
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths('')                                  );      // []
console.log(wordLengths()                                    );        // []
