/*
Caesar Cipher
substitution Cipher
  every leter in the original message is substitued with the character n positions away
  key is distance shifted
  can be used to encode and decode messages

input: string, key (shift value)
output: encoded string

rules
  case matters  ('y' goes to 'd' shifted 5 times)
    a letter that is uppercase will stay uppercase when shifted
  only alphabetic characters are encrypted
  other characters are kept the same
  if the shift for a given character exceeds the alphabet it wraps around
  key can be zero in which case there is no shift
  the key can also be greater then 26

------------------------------------
Examples

// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

---------------------------
Datastructure
tools
lowercase letters in an array

split word into an array of characters
modify array of characters based on cipher
join array of characters into string

----------------------------
Algorithm

caesarEncrypt
characters is word split into characters
map through chars ciphering each character
join new array into string

helper method
cipher
input (char, key)
skip if letter is not in alphabet case insenstive
check if char is uppercase
  set boolean to true if uppercase
  use regex match
convert to lowercase
if char included in lowercase array
  find index
  extended index is key plus index
  short index is extended index modulus 26
  ciphered char is lowercase letter array at shortened index
  if letter was uppercase convert back to uppercase
  return ciphered char
*/

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

console.log(cipher('*', 2));
console.log(cipher('y', 5));
console.log(cipher('a', 47));

function caesarEncrypt(message, key) {
  return message.split('')
                .map(char => cipher(char, key))
                .join('');
}

// simple shift
console.log(caesarEncrypt('A', 0) === "A");       // "A"
console.log(caesarEncrypt('A', 3) === "D");       // "D"

// wrap around
console.log(caesarEncrypt('y', 5)  === 'd');       // "d"
console.log(caesarEncrypt('a', 47) === 'v');      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// empty string
console.log(caesarEncrypt('', 4) === '');
