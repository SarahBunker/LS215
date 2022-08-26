/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

find the words that are number words and convert to digit character

in string with possible number words
out string with number words converted to digits

store number words as elements of array
iterate through number words array
  reassign new string to replace all intences of number word with index
return new string

*/

function wordToDigit(string) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  NUMBER_WORDS.forEach ( (word, index) => {
    let regex = new RegExp('\\b' + word + '\\b', 'g')
    string = string.replace(regex, index);
  })
  console.log(string);
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.') === "Please call me at 5 5 5 1 2 3 4. Thanks.");
console.log(wordToDigit('The weight is done.') === "The weight is done.");
