/*
rails cipher
implement encoding and decoding for the rail fence cipher

input string and number of rails
ouput encoded/decoded string

message is written downwards on successive rails, when it reaches the bottom then it moves up
like a zigzag
Finally message is read off in rows


example
message  WE ARE DISCOVERED FLEE AT ONCE
rows 3
cipher
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
WECRLTEERDSOEEFEAOCAIVDEN

// build letters on rails
// to select letters on first rail take the first letter and then every (number of rails plus 1) letter until end of string
// to select letters on next rail take the second letter and then every

rules:
  one rail returns the same string
  length of rails is the same length as original string


EXERCISES
E . . . . . S . . . . . . . . . . . . . . . . . .
. X . . . I . E . . . . . . . . . . . . . . . . .
. . E . C . . . S . . . . . . . . . . . . . . . .
. . . R . . . . . ? . . . . . . . . . . . . . . .
ESXIEECSR
0123210123


// Create Cipher
set asscending to true
set current rail to 0
initialize a nested array with subarrays to represent each rail
  number of subarrays is number of rails
  length of subarray is length of input string
iterate through the characters of the string with the index
  get current rail using current rail index
  add current character to current rail at current index
  update
    if current rail index is equal to the number of rails minus one
      set ascending to false
    if curren rail index is equal to zero
      set ascending to true
    set current rail index to
      if ascending add 1
      else subtract 1

// Encode cipher
pass string to create cipher to get nested array
reduce the nested array
  for each subarray join with an empty string
  concate each subarray to the total
return reduced array

// Decode
create a copy of the string
Create nested array to get subarrays with places using create Cipher
iterate through subarray
  iterate through elements of subarray
  forEach only considers the properties with values
    remove charater from start of string and replace current element with the element removed from start of string
build decoded string
start with empty string
iterate through indexes
  for each index iterate through arrays until accessing the property at that index returns a value
  add that value to the string
return built string
*/

let array = ['a'];
array[6] = 'b'

console.log(array.join(""));

function createCipher(string, numRails) {
  let asscending = true;
  let railIndex = 0;
  let filledRails = [];
  for (let i = 1; i <= numRails; i ++ ) {
    filledRails.push([]);
  }
  if (string.length === 0) return filledRails;
  console.log(string.length);
  string.split('').forEach( (char, index) => {
    // console.log(asscending);
    // console.log(`railIndex: ${railIndex}`);
    // console.log(`index: ${index}`);
    // console.log(filledRails[railIndex][index]);
    filledRails[railIndex][index] = char
    if (railIndex === numRails - 1) asscending = false;
    if (railIndex === 0) asscending = true;
    railIndex += asscending ? 1 : -1;
  });
  return filledRails;
}

// console.log(createCipher('WEAREDISCOVEREDFLEEATONCE', 3));
// createCipher('Encoding', 4).forEach( (subarray) )

function railsEncode(string, numRails) {
  let cipher = createCipher(string, numRails);
  console.log(cipher);
  return cipher.reduce( (newString, singleRail) => {
    newString += singleRail.join('');
  },'')
}

function railsDecode(string, numRails) {

}

console.log(railsEncode('', 4));

console.log(railsEncode('', 4) === '');
// console.log(railsEncode('coding with one rail', 1) === 'coding with one rail');
// console.log(railsEncode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');
// console.log(railsEncode('WEAREDISCOVEREDFLEEATONCE', 3) === 'WECRLTEERDSOEEFEAOCAIVDEN');
// console.log(railsEncode('EXERCISES', 4) === 'ESXIEECSR');
// console.log(railsEncode('More rails than letters', 24) === 'More rails than letters');

// console.log(railsDecode('', 4) === '');
// console.log(railsDecode('decoding with one rail', 1) === 'decoding with one rail');
// console.log(railsDecode('XOXOXOXOXOXOXOXOXO', 2) === 'XXXXXXXXXOOOOOOOOO');
// console.log(railsDecode('TEITELHDVLSNHDTISEIIEA', 3) === 'THEDEVILISINTHEDETAILS');
// console.log(railsDecode('More rails than letters', 24) === 'More rails than letters');


// Questions
// handling spaces?
