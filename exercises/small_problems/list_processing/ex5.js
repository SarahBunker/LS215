/*
// Problem

in: string
out: list of all substrings that include the first letter

explicit:
  list orderded shortest to longest
implicit:

mutating?
-------------------------------------------------
// Examples

- edge cases
-------------------------------------------------
// DataStructure

-------------------------------------------------
// Algorithym

// "abc"
initialze empty results array // reuslt = []
convert string to an array // [ a, b, c]
iterate through indexes of array [ 0, 1, 2]
  add a subtring to results array
    substring is take from original array
    starts at index 0 goes to current index plus 1    substring from 0 to 1 > a, 0 to 2 > ab,
return results array

- take example(s) through Algorithym
*/

"use strict"

let leadingSubstrings = function(string) {
  return string.split('').reduce( function(results, _ , index) {
    results.push(string.substring(0, index + 1));
    return results
  }, []);
}



console.log(leadingSubstrings('abc')  );      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a')    );        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
