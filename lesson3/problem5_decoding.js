/*
write an encoding and decoding functions for the rails cipher
Decoding
input encoded message, number of rails
output is decoded message

Using the same spacing pattern as previous
remove letters from the front of the string
place them in an array of characters where the current index is determined by the spacing pattern
when you get to an index greater then or equal to the length of the index
reset the index to railIndex
once you fill the array then join them together to make a decoded string

---------------------------------------------
Examples

W . . . E . . . C . . . R . . . L . . . T . . . E  WECRLTE
. E . R . D . S . O . E . E . F . E . A . O . C .  ERDSOEEFEAOC
. . A . . . I . . . V . . . D . . . E . . . N . .  AIVDEN

first row is every fourth letter starting with the first letter
next row is every other letter starting with the second letter
next row is every fourth letters starting with the third letter

W . . . . . I . . . . . R . . . . . E . . . . . E  WIREE
. E . . . D . S . . . E . E . . . E . A . . . C .  EDSEEEAC
. . A . E . . . C . V . . . D . L . . . T . N . .  AECVDLTN
. . . R . . . . . O . . . . . F . . . . . O . . .  ROFO

WIREEEDSEEEACAECVDLTNROFO

first row is every 6th letter starting with the first letter
next row starts with the second letter, then the next index is 4 away, the next index is 2 away
third rail starts with 3rd letter, then the next index is 2 away, then 4 away, then 2 away...
forth and last rail starst with 4th letter, then the next index is 6 away, then the next index is 6 away

W . . . . . . . C . . . . . . . L . . . . . . . E  WCLE
. E . . . . . S . O . . . . . F . E . . . . . C .  ESOFEC
. . A . . . I . . . V . . . D . . . E . . . N . .  AIVDEN
. . . R . D . . . . . E . E . . . . . A . O . . .  RDEEAO
. . . . E . . . . . . . R . . . . . . . T . . . .  ERT

WCLEESOFECAIVDENRDEEAOERT

first row is every 8th letter starting with the first letter
2nd row starts with second character, next letter is 6 away, then 2 away, then 6 away...
3rd row starts with 3rd character, next letter is 4 away then 4 away, then 4 away
4th row starst with 4th character, next letter is 2 away then 4 away, then 2 away
last row is every 8th letters starting with the fith letter

------------------------------------------
Data Structure
input: string
  number to store initial rail spacing
  number to store current rail spacing
output: string

--------------------------------------------
Algorithym

spacingFirstRow is ((number of rails minus 1) times 2)
set initialSpacing is spacingFirstRow
initialize decodedArray to empty array
set array length to length of encodedMessage
iterate from 0 to one less then the number of rails firstIndex
  call helper passing encodedMessage, decodedArray, firstIndex, spacingFirstRow, and initialSpacing
  pass string, firstIndex, spacingFirstRow, and initialSpacing to helpermethod
  initialSpacing is initialSpacing - 2
  if initialSpacing is 0 set it to spacingFirstRow
return decodedArray joined to a string

helper method
addRailChars
input: encodedMessage, decodedArray, firstIndex, spacingFirstRow, and initialSpacing
set railSpacing to initialSpacing
loop
  starting at firstIndex
  end when index is greater then or equal to the length of the decodedArray
  char is removing first character from encodedMessage
  add char to decodedArray at currentIndex
  currentIndex += railSpacing
  railSpacing = spacingFirstRow - railSpacing
  if railSpacing is 0 set to spacingFirstRow
*/

let railsDecode = function(encodedMessage, numRails) {
  if (numRails === 1 || numRails >= encodedMessage.length) return encodedMessage;
  let spacingFirstRow = (numRails -1) * 2;
  let initialSpacing = spacingFirstRow;
  let decodedArray = [];
  decodedArray.length = encodedMessage.length;
  let encodedMessageArray = encodedMessage.split('')
  for (let railIndex = 0; railIndex < numRails; railIndex ++) {
    addRailChars(encodedMessageArray, decodedArray, railIndex, spacingFirstRow, initialSpacing);
    initialSpacing -= 2;
    if (initialSpacing === 0) initialSpacing = spacingFirstRow;
  }
  return decodedArray.join('')
}

let addRailChars = function(encodedMessage, decodedArray, firstIndex, spacingFirstRow, initialSpacing) {
  // console.log(encodedMessage);
  let railSpacing = initialSpacing;
  for (let index = firstIndex; index < decodedArray.length;) {
    // console.log(`index ${index}`);
    // console.log(`railSpacing ${railSpacing}`);
    let char = encodedMessage.shift();
    // console.log(`char ${char}`)
    decodedArray[index] = char;
    index += railSpacing;
    if (railSpacing < spacingFirstRow) {
      railSpacing = spacingFirstRow - railSpacing;
    }
  }
}

// MESSAGE XOXOXOXOXOXOXOXOXO
// X . X . X . X . X . X . X . X . X . X .
// . 0 . O . O . 0 . O . O . O . O . O . O
// ENCODED XXXXXXXXXOOOOOOOOO

// X . X . X . X . X . X . X . X . X . X .
// . 0 . 0 . 0 . 0 . 0 . O . 0 . 0 . 0 . 0



console.log('Decoding Section --------------------------------------------------------')
console.log(railsDecode('', 4) === '');
console.log(railsDecode('decoding with one rail', 1) === 'decoding with one rail');
console.log(railsDecode('XXXXXXXXXOOOOOOOOO', 2) === 'XOXOXOXOXOXOXOXOXO');
console.log(railsDecode('TEITELHDVLSNHDTISEIIEA', 3) === 'THEDEVILISINTHEDETAILS');
console.log(railsDecode('More rails than letters', 24) === 'More rails than letters');

// let decodedArray = [];
// decodedArray.length = "WEAREDISCOVEREDFLEEATONCE".length;
// let message = "WECRLTEERDSOEEFEAOCAIVDEN".split('');
//
// console.log(addRailChars(message, decodedArray, 0, 4, 4));
// console.log(addRailChars(message, decodedArray, 1, 4, 2));
// console.log(addRailChars(message, decodedArray, 2, 4, 4));



let railsEncode = function(message, numRails) {
  if (numRails === 1 || numRails > message.length) return message;
  let spacingFirstRow = (numRails - 1) * 2
  let initialSpacing = spacingFirstRow;
  // message = message.replace(/[^a-z]/ig, '');
  let encodedMessage = ''
  for (let railIndex = 0; railIndex < numRails; railIndex += 1) {
    let substring = selectRailChars(message, railIndex, spacingFirstRow, initialSpacing);
    // console.log(substring);
    encodedMessage += substring;
    initialSpacing -= 2;
    if (initialSpacing === 0) initialSpacing = spacingFirstRow;
  }
  return encodedMessage;
}

let selectRailChars = function(message, firstIndex, spacingFirstRow, initialSpacing) {
  let railString = '';
  let railSpacing = initialSpacing;
  for (let index = firstIndex; index < message.length;) {
    railString += message[index];
    index += railSpacing;
    if (railSpacing < spacingFirstRow) {
      railSpacing = spacingFirstRow - railSpacing;
    }
  }
  return railString;
}

console.log('Encoding Section --------------------------------------------------------')
console.log(railsEncode('', 4) === '');
console.log(railsEncode('coding with one rail', 1) === 'coding with one rail');
console.log(railsEncode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');
console.log(railsEncode('WEAREDISCOVEREDFLEEATONCE', 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
console.log(railsEncode('WEAREDISCOVEREDFLEEATONCE', 4) === 'WIREEEDSEEEACAECVDLTNROFO');
console.log(railsEncode('WEAREDISCOVEREDFLEEATONCE', 5) === 'WCLEESOFECAIVDENRDEEAOERT');
console.log(railsEncode('EXERCISES', 4) === 'ESXIEECSR');
console.log(railsEncode('More rails than letters', 24) === 'More rails than letters');

// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 0, 4, 4) === "WECRLTE");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 1, 4, 2) === "ERDSOEEFEAOC");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 2, 4, 4) === "AIVDEN");
//
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 0, 6, 6) === "WIREE");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 1, 6, 4) === "EDSEEEAC");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 2, 6, 2) === "AECVDLTN");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 3, 6, 6) === "ROFO");
//
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 0, 8, 8) === "WCLE");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 1, 8, 6) === "ESOFEC");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 2, 8, 4) === "AIVDEN");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 3, 8, 2) === "RDEEAO");
// console.log(selectRailChars("WEAREDISCOVEREDFLEEATONCE", 4, 8, 8) === "ERT");

console.log('Combined Section --------------------------------------------------------')
console.log(railsDecode(railsEncode('', 4), 4) === '');
console.log(railsDecode(railsEncode('coding with one rail', 1), 1) === 'coding with one rail');
console.log(railsDecode(railsEncode('XOXOXOXOXOXOXOXOXO', 2), 2) === 'XOXOXOXOXOXOXOXOXO');
console.log(railsDecode(railsEncode('WEAREDISCOVEREDFLEEATONCE', 4), 4) === 'WEAREDISCOVEREDFLEEATONCE');
console.log(railsDecode(railsEncode('EXERCISES', 4), 4) === 'EXERCISES');
console.log(railsDecode(railsEncode('More rails than letters', 24), 24) === 'More rails than letters');
