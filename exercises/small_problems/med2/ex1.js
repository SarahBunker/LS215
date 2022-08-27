/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

input string
  contains at least one character
output object
  percentage of
    lowercase letters in string
    uppercase letters in string
    neither characters in string
  percentages stored as a string
  percentages stored to two decimal places
    50% is "50.00"

rules
  spaces count as neither

// examples
abCdef 123
lowercase: 11111 > 5
uppercase: 1 > 1
neither: 1111 > 4

'AbCd +Ef'
lowercase: 'bdf' > 3
uppercase: 'ACE' > 3
neither: ' +' > 2

'123'
lowercase: ''
uppercase: ''
neither: '123' > 3

// Datastructure
input string
array of chars << split string on ""
filtered arrays of each type
lengths of arrays stored as numbers
percents stored as numbers
convert percents to strings
output object
  keys are lowercase, uppercase, and neither
  values are string of percent

// Algorithm
split string into array of characters
find total characters
initialize results object
use helper function to store percent for lowercase, uppercase and neither
return results object

helper function
store percent (name of percent, regex)
  filter chars array into characters that match regex
  find percentage by dividing length of filtered array by array length
  times percentage by 100
  store percentage as string in results object
*/

function letterPercentages(string) {
  let chars = string.split('');
  let results = {}
  function storePercent(groupName, regex) {
    let filteredChars = chars.filter( char => char.match(regex) );
    let percentage = filteredChars.length / chars.length * 100;
    results[groupName] = percentage.toFixed(2);
  }

  storePercent('lowercase', /[a-z]/);
  storePercent('uppercase', /[A-Z]/);
  storePercent('neither',   /[^a-z]/i);

  return results;
}

console.log(letterPercentages('abCdef 123') ); // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef')   ); // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123')        ); // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
