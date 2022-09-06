/*
Vigenere Cipher
series of Caeser Ciphers based on the letters of a keyword

input: message, keyword
output: encrypted message

rules
  each letter of keyword is converted to a shift value
  the values are rotated through for to cipher each alphabetic character
  the letters (a-z) are equivalent to (0-25)
  the letters (A-Z) are also equivalent to 0-25
    the shift value is equal to index value in the alphabet
  the case of the keyword doesn't matter
    EX 'MEat' === 'mEaT' as keywords
  keword shift value isn't moved forward if the character isn't in the alphabet
    only encrypts alphabetic characters
-------------------------------------
Examples
keyword "meat" => 12, 4, 0, 19
  these keys are applied to each alphabetic character sequentially on repeat until all alphabetic characters are ciphered

-------------------------------------
Datastructure
input: message string, keyword string
convert message to array of chars
convert keyword to array of chars
  map to array of numbers < shift values
  add last shift index as property of array
map array of chars to ciphered chars
convert to string

------------------------------------
Algorithm

Main Method
vigenereCipher
input( message, keword)
shiftArray is shiftValues(keyword)
add property of last index with value -1
iterate through chars of message
  map to ciphered characters
    if character is non alphabetic skip to next letter
    key is nextShiftValue
    return cipher(char, key)
  join into string
  return new string


helper method
shiftValues
input(keyword)
using string of alphabet
chars keyword converted to array of chars
map chars to value in string of alphabet
return new array

nextShiftValue
input array of shift values w/ last shift index as property
add one to last shift index
if shift index is greater then or equal to the length of the shift array
  set shift index to 0
return shift value at shift index
*/
function shiftValues(keyword) {
  keyword = keyword.toUpperCase();
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return keyword.split('')
                .map( char => alphabet.indexOf(char));
}

function nextShiftValue(shiftArray) {
  shiftArray.currentIndex += 1;
  if (shiftArray.currentIndex >= shiftArray.length) shiftArray.currentIndex = 0;
  return shiftArray[shiftArray.currentIndex];
}

let shiftArray = shiftValues('meat');
shiftArray.currentIndex = 3
console.log(shiftArray);
console.log(nextShiftValue(shiftArray));

function cipher(char, key) {
  let lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  if (!char.match(/[a-z]/i)) return char;
  let uppercase = !!(char.match(/[A-Z]/));
  char = char.toLowerCase();
  let index = lowercaseArray.indexOf(char);
  let extendedIndex = index + key;
  let shortIndex = extendedIndex % 26;
  let cipheredChar = lowercaseArray[shortIndex]
  if (uppercase) cipheredChar = cipheredChar.toUpperCase();
  return cipheredChar;
}

// vigenereCipher
// input( message, keword)
// shiftArray is shiftValues(keyword)
// add property of last index with value -1
// iterate through chars of message
//   map to ciphered characters
//     if character is non alphabetic skip to next letter
//     key is nextShiftValue
//     return cipher(char, key)
//   join into string
//   return new string

function vigenereCipher(message, keyword) {
  let shiftArray = shiftValues(keyword);
  shiftArray.currentIndex = -1;
  return message.split('')
                .map( char => {
                  if (char.match(/[^a-z]/i)) return char;
                  let key = nextShiftValue(shiftArray);
                  return cipher(char, key);
                })
                .join('')
}

console.log(vigenereCipher("Pineapples don't go on pizzas!", 'meat') === "Bmnxmtpeqw dhz'x gh ar pbldal!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'A') === "Pineapples don't go on pizzas!");
console.log(vigenereCipher("Pineapples don't go on pizzas!", 'Aa') === "Pineapples don't go on pizzas!");
console.log(vigenereCipher("Dog", 'Rabbit') === "Uoh");

// console.log(shiftValues("meat"));
