/*
mergeSort
recursive sorting algorith

breaks array elements into nested subarrays
  split array into two subarrays that each have half the elements
  split each subarray into two subarrays
    continue until each sub-element is only one element in an array
    length of subarray is one
combines nested subarrays back together in a sorted order
  go up one level from the single element arrays
  combine both single element subarrays into a new sorted array using merge
  go up another level and combine the two subarrays

arrays will have all the same type of element (strings or numbers)
arrays can have an odd number of elements

[9, 5, 7, 1] -->
split array into two subarrays with half the elements
from index 0 to half the original index length rounded to an integer
store subarray as elements of new array
[[9, 5], [7, 1]] -->
iterate through the elements of the new array
  [9,5]
  split array into two subarrays with half the elements
  from index 0 to half the original index length rounded to an integer
  store subarray as elements of new array
  -- > [[9], [5]]
  Once the subarrays can't be split anymore
  merge the two arrays
  -- > [5, 9]

  [7, 51]
  split array into two subarrays with half the elements
  from index 0 to half the original index length rounded to an integer
  store subarray as elements of new array
  -- > [[7], [1]]
  Once the subarrays can't be split anymore
  merge the two arrays
  -- > [1, 7]

merge next pair of nested subarray
-- > [1, 5, 7, 9]

--------------------------------------------------------------------
[6, 2, 7, 1, 4]
split array into two subarrays with half the elements
store subarray as elements of new array
-- > [[6, 2, 7], [1, 4]]
iterate through elements of array
  [6, 2, 7]
  split array into two subarrays with half the elements
  store subarray as elements of new array
  -- > [[6, 2], [7]]
  iterate through elements of array
    [6, 2]
    split array into two subarrays with half the elements
    store subarray as elements of new array
    -- > [[6], [2]]
    once the array can't be split any more merge the two elements
    -- > [2, 6]

  [[2,6], 7]
  merge next pair of elements
  -- > [2, 6, 7]


-- > [1, 2, 4, 6, 7]

*/

function merge(input1, input2) {
  let array1 = input1.splice(0);
  let array2 = input2.splice(0);
  let result = [];

  while (array1.length > 0 && array2.length > 0) {
    result.push( (array1[0] < array2[0]) ? array1.shift() : array2.shift() );
  }

  return result.concat( array1.length === 0 ? array2 : array1 );
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let subArray1 = array.slice(0, array.length / 2);
  let subArray2 = array.slice(array.length / 2);

  subArray1 = mergeSort(subArray1);
  subArray2 = mergeSort(subArray2);

  return merge(subArray1, subArray2);
}

// function mergeSort(array) {
//   if (array.length === 1) {
//     return array;
//   }
//
//   let subArray1 = array.slice(0, array.length / 2);
//   let subArray2 = array.slice(array.length / 2);
//
//   subArray1 = mergeSort(subArray1);
//   subArray2 = mergeSort(subArray2);
//
//   return merge(subArray1, subArray2);
// }

console.log(mergeSort([9, 5, 7, 1])   );           // [1, 5, 7, 9]
console.log(mergeSort([5, 3])         );                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'])   );// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]) );
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
