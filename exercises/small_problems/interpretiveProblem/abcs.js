/*
Given list of spelling blocks
write a function that takes a word string as an argument and returns true if the word can be spelled using each block only once false otherwise

input: word string
output: boolean of whether the string uses any block more then once

rules:
  can only use each block once
  word is case insensitive

-------------------------
Examples
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
  U and H are on the same block
isBlockWord('jest');       // true

-------------------------
Data Structure
put blocks in nested arrays
store used characters in a string

input word string
output boolean

Main Method
initalize usedLetters to an empty string
initialize nested block array << spellingBlocks
iterate through letters in word
  check if currentLetter is included in usedLetters
    return false if the currentLetter is ever already included
  iterate through spellingBlocks
  if letter is included in letters of the currentSpellingBlock
    join the letters of the currentSpellingBlock together as a string
    add the string to usedLetters
return true
*/

function isBlockWord(word) {
  let usedLetters = '';
  let spellingBlocks = [['B', 'O'],   ['X', 'K'],   ['D', 'Q'],   ['C', 'P'],   ['N', 'A'],
                        ['G', 'T'],   ['R', 'E'],   ['F', 'S'],   ['J', 'W'],   ['H', 'U'],
                        ['V', 'I'],   ['L', 'Y'],   ['Z', 'M']];
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i ++ ) {
    let char = word[i]
    if (usedLetters.includes(char)) return false
    spellingBlocks.forEach( block => {
      if (block.includes(char)) usedLetters += block.join('');
    })
  }
  return true;
}

console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest')  === true);       // true

console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest')  === true);       // true
console.log(isBlockWord('floW')  === true);       // true
console.log(isBlockWord('APPLE') === false);      // false
console.log(isBlockWord('apple') === false);      // false
console.log(isBlockWord('apPLE') === false);      // false
console.log(isBlockWord('Box')   === false);        // false
