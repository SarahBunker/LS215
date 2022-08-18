/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

- assuming all
*/

/*
// Problem

in: two arrays
out: one array with the multiples
  array in ascending order
  can have multiples

explicit:
  both arguments will have elements
implicit:
  can have multiples

mutating? no
-------------------------------------------------
// Examples

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
  2 * 4 = 8
    * 3 = 6
    * 1 = 2
    * 2 = 4

  4 * 4 = 16
  4 * 3 = 12
  4 * 1 = 4
  4 * 2 = 8

  [ 2, 4, 4, 6, 8, 8, 12, 16]
- edge cases

-------------------------------------------------
// DataStructure
two subarrays
store mutiplies in new array

-------------------------------------------------
// Algorithym

- initialze new array
iterate through first input array index is i
  iterate through second array index is j
    add i * j to new array

sort new array
return new array

- take example(s) through Algorithym
*/

let compareNumbers = function(a, b) {return a - b};

let multiplyAllPairs = function(array1, array2) {
  let newArray = []
  array1.forEach( function(itemA1) {
    array2.forEach((itemA2) => {newArray.push(itemA1 * itemA2)});

  })
  return newArray.sort(compareNumbers);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
