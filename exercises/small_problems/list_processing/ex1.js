// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

// let sum = function (integer) {
//   let string = String(integer);
//   let digits = string.split('');
//   return digits.reduce( function(total, current) {
//     return total + Number(current);
//   }, 0)
// }

let sum = function (integer) {
  return String(integer)
          .split('')
          .reduce((total, current) => total + Number(current), 0)
}


console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
