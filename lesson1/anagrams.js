// Write a Function named anagram that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".

/*
- check if a word is an anagram of a given word
  Anagrams are words or phrases you spell by rearranging the letters of another word or phrase
  - create sorted copies of both words and check if they are equal

- filter words in array that are anagrams of given word
- return filtered array
*/

let checkAnagram = (word1, word2) => {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function anagram(word, list) {
  return list.filter(listWord => checkAnagram(word, listWord));
}

console.log(checkAnagram('listen', 'enlist'))

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
