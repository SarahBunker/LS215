// Write a function that takes one argument, an array containing integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.

// calculate total
// calculate average
// round down to nearest whole integer

function average(array) {
  let total = array.reduce( (total, currentValue) => total += currentValue);
  return parseInt(total/array.length, 10);
}

console.log(average([1, 5, 87, 45, 8, 8])    === 25);       // 25
console.log(average([9, 47, 23, 95, 16, 52]) === 40);    // 40
