/*
rules
featured number
  odd number
  multiple of 7
  all digits occur only once >> no repeating digits

  examples:
  79 is featured
  98 is not << not odd
  97 is not << not a multiple of 7
  133 is not << digit 3 appears twice

function
input: integer
output: next largest featured number
  return error message if number is >= 9876543201, the largest featured number

main function
guard clause
  return error if input number is greater then or equal to largest featured number << can store as a constant
current number is multiple lower then given number
  multiple lower then given number = Integer of number / 7
iteratively
  add 7
  check if number is featured
    return number if featured

determine if a number is featured
  assume a mutlple of 7
  check if odd
    return false if not odd
  check if digits are unique
    return false if not unique
  otherwise return true

check if digits are unique
  convert to a string
  iterate through array of characters
    check if current character matches more then once
      return false
  otherwise return true

*/

function hasUniqueDigits(number) {
  let stringNumber = String(number);
  return stringNumber.split('').every( (char) => {
    let regex = new RegExp(char, 'g');
    return stringNumber.match(regex).length === 1;
  });
}

// console.log(hasUniqueDigits(133) === false);
// console.log(hasUniqueDigits(9876543201) === true);

function isFeaturedNumber(number) {
  return (hasUniqueDigits(number) && number % 2 == 1);
}

// console.log(isFeaturedNumber(133) === false);
// console.log(isFeaturedNumber(9876543201) === true);

// main function
// guard clause
//   return error if input number is greater then or equal to largest featured number << can store as a constant
// current number is multiple lower then given number
//   multiple lower then given number = Integer of number / 7
// iteratively
//   add 7
//   check if number is featured
//     return number if featured

function featured(number) {
  const LARGEST_FEATURED_NUMBER = 9876543201;
  if (number >= LARGEST_FEATURED_NUMBER) return "There is no possible number that fulfills those requirements.";

  let currentNumber = number - number % 7;
  while (true) {
    currentNumber += 7;
    if (isFeaturedNumber(currentNumber)) return currentNumber;
  }
}

console.log(featured(12)         );//=== 21);           // 21

console.log(featured(12)         === 21);           // 21
console.log(featured(20)         === 21);           // 21
console.log(featured(21)         === 35);           // 35
console.log(featured(997)        === 1029);          // 1029
console.log(featured(1029)       === 1043);         // 1043
console.log(featured(999999)     === 1023547);       // 1023547
console.log(featured(999999987)  === 1023456987);    // 1023456987
console.log(featured(9876543186) === 9876543201);   // 9876543201
console.log(featured(9876543200) === 9876543201);   // 9876543201
console.log(featured(9876543201) === "There is no possible number that fulfills those requirements.");   // "There is no possible number that fulfills those requirements."
