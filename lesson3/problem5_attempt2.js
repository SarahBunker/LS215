/*
write an encoding and decoding functions for the rails cipher
Encoding
input string, number of rails
output is encoded string

select letters to fill rails
add each rail of letters to encodedString
return encodedString

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
input: string, need to remove all spaces
  substrings for each rail to add to encoded string
  number to store initial rail spacing
  number to store current rail spacing
output: string

--------------------------------------------
Algorithym

spacingFirstRow is ((number of rails minus 1) times 2)
set initialSpacing is spacingFirstRow
convert message to message without spaces
iterate from 0 to one less then the number of rails firstIndex
  pass string, firstIndex, spacingFirstRow, and initialSpacing to helpermethod
  return value is characters on rail as string
  add to encoded string
  initialSpacing is initialSpacing - 2
  if initialSpacing is 0 set it to spacingFirstRow
return encoded string

helper method
selectRailChars
input: string, firstIndex, spacingFirstRow, and initialSpacing
set railString to empty string
set railSpacing to initialSpacing
loop
  starting at firstIndex
  end when index is greater then or equal to the length of the string
  add char at current index to railString
  currentIndex += railSpacing
  railSpacing = spacingFirstRow - railSpacing
  if railSpacing is 0 set to spacingFirstRow
return railString
*/

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

console.log('Decoding Section --------------------------------------------------------')
// console.log(railsDecode('', 4) === '');
// console.log(railsDecode('decoding with one rail', 1) === 'decoding with one rail');
// console.log(railsDecode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');
// console.log(railsDecode('TEITELHDVLSNHDTISEIIEA', 3) === 'THEDEVILISINTHEDETAILS');
// console.log(railsDecode('More rails than letters', 24) === 'More rails than letters');

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
