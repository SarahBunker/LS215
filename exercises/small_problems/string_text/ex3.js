// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

// count characters that are uppercase, lowercase, and neither in a string
// input string
// output object with three properties that have the value as the count of each instance

// rules
//  - spaces, +, numbers << count as neither
//  - empty string returns an object with properties all zero

// examples
// bCd +Ef
// uppercase: ACE
// lowercase: bdf
// neither: space, +

// data
// input string
// output object
// numbers to hold counts

// algorithym
// assign to variable
// count length of array from maching all lowercase letters
//                                          uppper case letters
//                                    not upper or lowercase letters
// return object with the properties set to the three variables

let letterCaseCount = function(string) {
  let lowercaseLetters =  string.match(/[a-z]/g) || [];
  let uppercaseLetters =  string.match(/[A-Z]/g) || [];
  let otherCharacters =  string.match(/[^a-z]/ig) || [];

  return {lowercase: lowercaseLetters.length, uppercase: uppercaseLetters.length, neither: otherCharacters.length}
}


console.log(letterCaseCount('abCdef 123') );  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')   );    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')        );         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')           );            // { lowercase: 0, uppercase: 0, neither: 0 }
