// Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.
//
// Example:

function union(arr1, arr2) {
  let newArray = [];
  arr1.forEach( element => addUnique(newArray, element));
  arr2.forEach( element => addUnique(newArray, element));
  return newArray;
}

function addUnique(array, element) {
  if (array.includes(element)) return;
  array.push(element);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
