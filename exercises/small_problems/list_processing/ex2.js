// Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

/*
// Problem

in: an array of integers between 0 and 19
out: a new array of integers sorted based on english word for each number

explicit:
  don't mutate the original array
  sort based on english name for integer
implicit:
  returned array is integers, not strings

mutating?
-------------------------------------------------
// Examples
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

eight, eighteen, eleven, fifteen..

-------------------------------------------------
// DataStructure

array with numberNames
input array > make copy
ouput array is the copy mutated

-------------------------------------------------
// Algorithym

- make copy of array
- convert each integer to its english name
- sort
- convert each name back to its integer
  return the index of the name
return new array

*/

// let numberNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

// let alphabeticNumberSort = function(numArray) {
//   let result = numArray.map( (number) => numberNames[number]);
//   return result.sort().map( (name) => numberNames.indexOf(name));
// }

let wordSort = function(num1, num2) {
  const NUMBER_NAMES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  if (num1 === num2) return 0;
  return NUMBER_NAMES[num1] > NUMBER_NAMES[num2] ? 1 : -1;
}

let alphabeticNumberSort = function(array) {
  return array.slice().sort(wordSort);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 8, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
