// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.
//
// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

/*
input two integers
  first integer is the count >> how many elements in array that is returned
  second integer is the starting number

output
  array of length count
  first element is starting number
  second element is starting number * 2
  ...

  until array has length of count

rules
  - if starting number is zero then it will be an array of zeros of length count
  - if count is zero then it returns an empty array

initialize new array
set current value to starting number
iterate from 1 to count (inclusive)
  current value is *= counter
  add current value to new array
return new array
*/

function sequence(count, initialNumber) {
  let newArray = [];
  for (let counter = 1; counter <= count; counter ++ ) {
    newArray.push(initialNumber * counter);
  }
  return newArray;
}

console.log(sequence(5, 1)      );          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)     );         // [-7, -14, -21, -28]
console.log(sequence(3, 0)      );          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
