// Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

/*
input array

output nested array with two elements that are arrays
  first half of original array is in first sub array element
  second half of original array is  in the second sub array element
  if the array is odd put the middle element in the first half array

rules:
  still outputs an array with two subarray elements even if one of the sub array elements is empty

examples
1 2 3 4
0 1 2 3
length = 4

1 5 2 4 3
0 1 2 3 4
length = 5
*/

function halvsies(array) {
  let len = array.length;
  let halfway = Math.ceil(len/2);
  return [array.slice(0, halfway), array.slice(halfway)]
}

console.log(halvsies([1, 2, 3, 4]));

console.log(halvsies([1, 2, 3, 4])    );  // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]) );  // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])             );  // [[5], []]
console.log(halvsies([])              );  // [[], []]
