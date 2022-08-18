/*
// Problem

in: array of numbers
out: sum of sums

explicit:
  assume array contains at least one number
implicit:

mutating? no
-------------------------------------------------
// Examples

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 1 + (1 + 2) + (1 + 2 + 3) + (1 + 2 + 3 + 4) + (1 + 2 + 3 + 4 + 5)  = 35 = 1 * 5 + 2 * 4  + 3 * 3 + 4 * 2 + 5 * 1

// = (1*4 )+ (5*3) + (7*2) + (3*1)
//   0        1       2       3
// array length = 4
// 4 - 0 = 4
// 4 - 1 = 3
// 4 - 2 = 2
// 4 - 3 = 1

1 * 5 + 2 * 4  + 3 * 3 + 4 * 2 + 5 * 1
0       1        2       3       4
array length = 5

- edge cases
-------------------------------------------------
// DataStructure

-------------------------------------------------
// Algorithym

intiialize total to 0
iterate through numbers in array
  determine how many times this number will be added in Sum of Sums > occurances
    occurances is array length minus the current index
  add to the total the current number times the occurances
return total

- take example(s) through Algorithym
*/

let sumOfSums = function(array) {
  return array.reduce( function(total, currentNumber, index) {
    let occurrences = array.length - index;
    return total + occurrences * currentNumber;
  }, 0)
}


console.log(sumOfSums([3, 5, 2])       === 21) ;        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])    === 36) ;     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])             === 04) ;              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]) === 35) ;  // 35
