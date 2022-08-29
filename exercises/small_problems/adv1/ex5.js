/*
take two sorted subarrays
return new array containing all eleements from both input arrays in sorted order
can't use sort
build results array one element at a time in the proper order
solution shouldn't mutate input arrays

create copies of both input arrays
initialize new array empty array
iterate
  check which element is smaller between the first elements of both arrays
  remove the smallest element and add to new array
  if one array is empty add the rest of the other array and brak from loop
*/

// function getSmallestElement(array1, array2) {
//   if (array1[0] < array2[0]) {
//     return array1.shift();
//   }
//   return array2.shift();
// }
//
// function merge(input1, input2) {
//   let array1 = input1.splice(0);
//   let array2 = input2.splice(0);
//   let result = [];
//   while (true) {
//     if (array1.length === 0) {
//       result = result.concat(array2);
//       break;
//     }
//
//     if (array2.length === 0) {
//       result = result.concat(array1);
//       break;
//     }
//
//     result.push(getSmallestElement(array1, array2));
//   }
//   // console.log(array1, array2);
//   // console.log(getSmallestElement(array1, array2));
//   // console.log(array1, array2);
//   // console.log();
//   return result;
// }

function merge(input1, input2) {
  let array1 = input1.splice(0);
  let array2 = input2.splice(0);
  let result = [];

  while (array1.length > 0 && array2.length > 0) {
    result.push( (array1[0] < array2[0]) ? array1.shift() : array2.shift() );
  }

  return result.concat( array1.length === 0 ? array2 : array1 );
}

console.log(merge([1, 5, 9], [2, 6, 8]) );      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2])    );         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5])        );             // [1, 4, 5]
console.log(merge([1, 4, 5], [])        );             // [1, 4, 5]

console.log(`undefined < 1 ${undefined < 1}`)
console.log(`undefined > 1 ${undefined > 1}`)
