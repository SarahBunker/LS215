// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

// input is an array
//   - assume that elements of array are all numbers
// output is an array
//   - assuming new array

// examples
//   edge cases
//     - empty array: returns empty array

// Data structue
//   input is array
//   output array

// Algorithym

// calculate running total
///  intialize new array   []
//   initalize/declare a running total variable   0 , 2, 7, 20
//   iterate through input array  [2, 5, 13]
    // add each current element to the running total
    // add running total to new array
//  return new array

// let runningTotal = function(inputArray) {
//   let newArray = [];
//   let runningTotal = 0;
//   for (let i = 0; i < inputArray.length; i ++) {
//     runningTotal += inputArray[i];
//     newArray.push(runningTotal);
//   }
//   return newArray;
// }

let runningTotal = function(inputArray) {
  let runningTotal = 0;
  return inputArray.reduce( (newArray, currentElement) => {
    runningTotal += currentElement;
    newArray.push(runningTotal);
    return newArray;
  } , []);
}

console.log(runningTotal([2, 5, 13])          );             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]) );    // [14, 25, 32, 47, 67]
console.log(runningTotal([3])                 );                    // [3]
console.log(runningTotal([])                  );                     // []
