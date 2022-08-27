/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

input:
  3 numbers
output:
  string
  'equilateral'
    three numbers are equal
  'isosceles'
    two numbers are equal, third is different
  'scalene'
    all three sides are different lengths
  'invalid'
    all numbers must be greater then 0
    sum of two smallest numbers must be greater then the third

rules:
  numbers can be decimals

// Datastructure
store sides in array
output string

// Algorithm
store sides in array
sort array as numbers
guard clause
  check if smallest number is less then or equal to zero
    return "invalid"
  check if first two added are greate then third
    return "invalid"

check if smallest number equals largest number
  return 'equilateral'
check if the middle number matches the largest number or the smallest number
  return 'isosceles'
otherwise
  retuern 'scalene'
*/

function triangle(a, b, c) {
  let sides = [a, b, c];
  sides.sort( (a,b) => a - b );

  if (sides.some( side => side <= 0)) return 'invalid';
  if (sides[0] + sides[1] <= sides[2]) return 'invalid';

  if (sides[0] === sides[2]) return 'equilateral'
  if (sides[1] === sides[2] || sides[1] === sides[0]) return 'isosceles'
  
  return 'scalene';
}

console.log(triangle(3, 3, 3)   === "equilateral");        // "equilateral"
console.log(triangle(3, 3, 1.5) === "isosceles");      // "isosceles"
console.log(triangle(3, 2, 2) === "isosceles");      // "isosceles"
console.log(triangle(3, 4, 5)   === "scalene");        // "scalene"
console.log(triangle(0, 3, 3)   === "invalid");        // "invalid"
console.log(triangle(3, 1, 1)   === "invalid");        // "invalid"
