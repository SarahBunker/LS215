/*
Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

computes difference between
  square of (sums of first n positive integers)
  sum (squares of first n positive integers)

first n positive integers are the integers from 1 to n

reduce the sum of the integers
square result
assign to variable A
map the sqauares of integers
reduce the sum of the squares
assign to variable B
return difference of A - B
*/

function sumSquareDifference(inputNumber) {
  let firstIntegers = [];
  for (let i = 1; i <= inputNumber; i ++ ) {
    firstIntegers.push(i);
  }

  let squareOfSums = (firstIntegers.reduce( (total, current) => total += current))**2

  let sumOfSquares = firstIntegers.map( integer => integer**2 )
                                  .reduce( (total, current) => total += current);
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(3)   === 22);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)  === 2640);     // 2640
console.log(sumSquareDifference(1)   === 0);      // 0
console.log(sumSquareDifference(100) === 25164150);    // 25164150
