// Write a function that takes an array of integers as input, multiplies all of the integers together, divides the result by the number of entries in the array, and returns the result as a string with the value rounded to three decimal places.

// multiples all integers together
// divides result by number of entries in array
// return result as string rounded to three decimal places

function showMultiplicativeAverage(array) {
  let total = array.reduce( (previousValue, currentValue) => previousValue *= currentValue);
  let average = total/array.length;
  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5])                === "7.500");     // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]) === "28361.667");    // "28361.667"
