/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

input: number
output: number rotated to the maximum rotation

rules
  maximum rotation
    rotate the full number
    then keep the first digit in place and rotate the other digits
    then keep the first two digits in place and rotate the remaining digits
    continue until n is 1
  return rotated number

735291
  352917  > 3 52917
  329175  > 32 9175
  321759  > 321 759
  321597  > 3215 97
  321579

//
loop from n = length of digit array to 1
reassign number to the result of passing number to rotateRightmostDigits
return number

*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let firstElement = array[0];
  let newArray = array.slice(1)
  newArray.push(firstElement);
  return newArray;
}

function rotateRightmostDigits(number, n) {
  if (n === 1) return number;

  let digits = String(number).split('');
  let splitIndex = digits.length - n;
  let lastN = rotateArray(digits.splice(splitIndex));
  let firstDigits = digits.splice(0, splitIndex);
  return Number(firstDigits.concat(lastN).join(''));
}

function maxRotation(number) {
  let numDigits = String(number).length
  for (let n = numDigits; n >= 1; n --) {
    number = rotateRightmostDigits(number, n);
  }
  return number;
}

console.log(maxRotation(735291)     === 321579);          // 321579
console.log(maxRotation(3)          === 3);               // 3
console.log(maxRotation(35)         === 53);              // 53
console.log(maxRotation(105)        === 15);             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146) === 7321609845);      // 7321609845
