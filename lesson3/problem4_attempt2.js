/*
Given a list of numbers written in shorthand (only significant part written) return list of complete numbers

rules
  The numbers are always increasing.
  numbers separated by dash (-), colon (;), or two dots (..) represent ranges
  range limits are inclusive
  can have multiple numbers in a range
  can have significant digits start with a 0
  can have significant digits have more then one digit

-----------------
examples
1, 3, 7, 2, 4, 1 => [1, 3, 7, 12, 14, 21]
go through numbers separated by commas
  if next number is smaller then previous number increase the tenth digit
    10 is insignificant digit place because we have ones digits
  add each number to return list
return list of numbers

1-3, 1-2    => [1, 2, 3, 11, 12]
1:3, 1:2    => [1, 2, 3, 11, 12]
1..3, 1..2  => [1, 2, 3, 11, 12]
go through ranges separated by commas
  separate numbers using list of three separators
    make sure to escape any special characters
  iterate through numbers // mapping numbers to full numbers
    if current number is smaller then previous number
      increase the insignificant digit place
  Using first and last number in array from range
    add each number to the results array

"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

-----------------------
Data Structure
input: string
  split into ranges and individual numbers (array of strings) <= split on comma
  split into significant numbers in range (array of strings) <= split on 3 separators
      single numbers will be arrays with only one element
    convert each short-hand number to full number (string)
    convert number string to number data type (number)
  sub array for each range
    contains numbers in that range
    add to results array
output: array of numbers

---------------------------------------
Algorithm
set previousFullNumber to 0
set resultsArray to []
ranges <= split on commas
iterate through ranges
  numbers in range <= split on three separators
    - make sure single numbers converted to an array
  map numbers in range to full numbers
    fullNumber is convertFullNumber pass previousFullNumber and currentNumber
    set previousFullNumber to fullNumber
    return fullNumber
  loop from first number in range to last number in range inclusive
    add each number to results array

helper function
convertFullNumber
  input: previousFullNumber (number), currentNumberString (string)
    currentNumber is currentNumberString converted to a number
    placeValue is insignificantDigitPlaceValue (previousFullNumber (number), currentNumberString (string))
    while currentNumber (number) < previousFullNumber (number)
      currentNumber is currentNumber plus placeValue
    return currentNumber

insignificantDigit
  input: previousFullNumber (number), currentNumber (string)
  numDigits is currentNumbers length
  placeValue is 10 to the power of numDigits
  currentValue is integer value of deviding the previousFullNumber by placeValue
  insignificantDigit is currentValue + 1
  return insignificantDigit
*/

let insignificantDigitPlaceValue = function(previousFullNumber, currentNumberString) {
  let numDigits = currentNumberString.length;
  let placeValue = 10**numDigits;
  return placeValue;
}

let convertFullNumber = function(previousFullNumber, currentNumberString) {
  let currentNumber = Number(currentNumberString);
  let placeValue = insignificantDigitPlaceValue(previousFullNumber, currentNumberString);
  while (currentNumber < previousFullNumber) {
    currentNumber += placeValue;
  }
  return currentNumber;
}

let longHandRange = function(shorthand) {
  let previousFullNumber = 0;
  let results = [];
  let ranges = shorthand.split(/, /);
  ranges.forEach( range => {
    let rangeNumbers = range.split(/[-:\.\.]/);
    let fullNumbers = rangeNumbers.map( currentNumberString => {
      let fullNumber = convertFullNumber(previousFullNumber, currentNumberString);
      previousFullNumber = fullNumber;
      return fullNumber;
    })
    for (let number = fullNumbers[0]; number <= fullNumbers[fullNumbers.length -1]; number ++) {
      results.push(number);
    }
  })
  return results;
}

console.log(longHandRange("1, 3"    )); //=> [1, 3]
console.log(longHandRange("1, 3, 7, 2, 4, 1"    )); //=> [1, 3, 7, 12, 14, 21]
console.log(longHandRange("1-3, 1-2"            )); //=> [1, 2, 3, 11, 12])
console.log(longHandRange("1:3, 1:2"            )); //=> [1, 2, 3, 11, 12])
console.log(longHandRange("1..3, 1..2"          )); //=> [1, 2, 3, 11, 12])
console.log(longHandRange("1:5:2"               )); //--> 1, 2, 3, 4, 5, 6, ... 12
console.log(longHandRange("104-2"               )); //--> 104, 105, ... 112
console.log(longHandRange("104-02"              )); //--> 104, 105, ... 202
console.log(longHandRange("545, 64:11"          )); //--> 545, 564, 565, .. 611

// console.log(insignificantDigitPlaceValue(545, '64')     === 100);
// console.log(insignificantDigitPlaceValue(564, '11')     === 100);
// console.log(insignificantDigitPlaceValue(7, '2')        === 10);
// console.log(insignificantDigitPlaceValue(12, '4')       === 10);
// console.log(insignificantDigitPlaceValue(14, '1')       === 10);
// console.log(insignificantDigitPlaceValue(104, '2')      === 10);
// console.log(insignificantDigitPlaceValue(104, '02')     === 100);
//
// console.log(convertFullNumber(545, '64')     === 564);
// console.log(convertFullNumber(564, '11')     === 611);
// console.log(convertFullNumber(7, '2')        === 12);
// console.log(convertFullNumber(12, '4')       === 14);
// console.log(convertFullNumber(14, '1')       === 21);
// console.log(convertFullNumber(104, '2')      === 112);
// console.log(convertFullNumber(104, '02')     === 202);
