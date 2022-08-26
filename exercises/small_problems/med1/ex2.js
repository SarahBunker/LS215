/*
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

input number, n
  where n is the number of digits from the end that are rotated
output number
  with last n digits rotated once

rules
  when n is 1 it returns the same number

// Examples
(735291, 4) === 732915);

length = 6
first digits [7, 3], index 0, 1
last n digits [5, 2, 9, 1]  index 2, 3, 4, 5



// Data structure
input number
  convert to string
  convert string to array
  split into two sub array
    last n digits
    first digits
  combine into new array
  combine into string
  convert into number
output number

// Algorithm
convert input number into string
convert into array of chars
split index is length - // NOTE:
last n digits is from split index to the end
first digits are from start to split index (exclusive)
rotate last n digits
combine first digits and rotated last n digits
join into string
convert string to a number
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

console.log(rotateRightmostDigits(735291, 1) === 735291);      // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219);      // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912);      // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915);      // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913);      // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917);      // 352917
