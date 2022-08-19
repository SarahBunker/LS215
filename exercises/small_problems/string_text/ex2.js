// remove all the vowels from the strings in an array
// map array to new array of strings
// for each string remove the vowels
//   remove case insensitive
// return the new array

let removeVowels = function(stringArray) {
  return stringArray.map( function(string) {
    return string.replace(/[aeiou]/ig, '');
  })
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])        );         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']) );  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])               );                 // ["BC", "", "XYZ"]
