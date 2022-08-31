/*
Rules

Spelling Blocks
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

two letters per block
limited to spelling words that do not use both letters from any given block
Can only use each block only once
letters are case insensitive when applying rules

input word string
output boolean - can string be spelled using the spelling blocks above

-----------------
// Examples
isBlockWord('BATCH');      // true B:O, N:A, G:T, C:P,  H:U
isBlockWord('BUTCH');      // false U and H use same block
isBlockWord('jest');       // true J:W, R:E, F:S, G:T

------------------
// Data Structure
input: string
  convert string to array of letters
  store rules
    store spelling blocks in two hashes
    one hash has the values listed first as keys and the letters listed second
    second hash is reverse, the keys become the values and the values become the keys
  have a subarray of the values already seen that you can compare the value to
output: boolean

----------------
// Algorithm
create spelling block hash with lowercase letters
lowercase string
convert to array of characters
iterate through characters with index
  sub array is from index zero to current index (non inclusive)
  if current character is part of subarray return false
  use spelling block hashes to get pair of current character
    trying to access a property of a hash that doesn't exist returns undefined
    use conditional and pick the one that returns a value
  if pair of current character is part of subarray return false
return true
*/

const SPELLING_BLOCK = { b: 'o', x: 'k', d: 'q', c: 'p', n: 'a',
                        g: 't', r: 'e', f: 's', j: 'w', h: 'u',
                        v: 'i', l: 'y', z: 'm'};
const REVERSE_SPELL  = { o: 'b', k: 'x', q: 'd', p: 'c', a: 'n',
                        t: 'g', e: 'r', s: 'f', w: 'j', u: 'h',
                        i: 'v', y: 'l', m: 'z'};

function isBlockWord(word) {
  let lowercase = word.toLowerCase()
  lowercase .split('')
            .forEach( (char, index) => {
              let previousLetters = lowercase.slice(0, index);
              if (previousLetters.includes(char)) return false;
              let letterPair = SPELLING_BLOCK[char] || REVERSE_SPELL[char];
              if (previousLetters.includes(letterPair)) return false;
            });
  return true;
}

console.log(isBlockWord('BATCH') === true );      // true
console.log(isBlockWord('BUTCH') === true );      // false
console.log(isBlockWord('jest')  === true );       // true
