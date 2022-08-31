/*
given a list of numbers in shorthand return the complete list of numbers
rules
  numbers are always increasing
  shorthand
    only include the significant part of the digit
  different separators can be used to show a range dash, colon, double periods
    ["-", ":", ".."]
  range limits are always inclusive
  ranges can be continous

examples

"1, 3, 7, 2, 4, 1" => [1, 3, 7, 12, 14, 21]
"1-3, 1-2" => [1, 2, 3, 11, 12])
"1:3, 1:2" => [1, 2, 3, 11, 12])
"1..3, 1..2"  => [1, 2, 3, 11, 12])

"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
"104-2" --> 104, 105, ... 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

input string of comma separated ranges
output is an array of numbers in all of the ranges in order

----------------------
initialize current number as 0
initialize result array to empty array
split string into array of rangestrings
  split on ', '
iterate through range strings
  push parse one range to results array < make sure to decompose
return results array

parse one range < given range and current number
  split into numbersstrings
  map
    convert to number types
    add 10 until greater then current number
    set current number to number
  add numbers from lowest number in numbers array to greatest number in numbers array to an array
  return array
*/

function parseRange(string, currentNumber) {
  let numbers = string.split(/[-:]|[.]{2}/).map( char => {
    console.log(`currentNumber: ${currentNumber}`);
    let number = convertToNumber(char, currentNumber);
    while (number < currentNumber) {
      number += 10;
    }
    console.log(`number: ${number}`);
    console.log(`currentNumber: ${currentNumber}`);
    currentNumber = number;
    return number;
  })

  let resultsArray = []
  for (let num = numbers[0]; num <= numbers[numbers.length - 1]; num ++ ) {
    resultsArray.push(num)
  }

  return resultsArray;
}

function convertToNumber(string, currentNumber) {
  let currentString = String(currentNumber);
  console.log(`currentString: ${currentString}`);
  while (currentString.length - 1 > string.length) {
    string = '0' + string;
  }
  console.log(`string: ${string}`);
  console.log(`string: ${string}`);
  if (currentString.length > string.length) {
    string = '1' + string;
  }
  console.log(`string: ${string}`);
  return Number(string);
}

// console.log(parseRange('1:5:2'));
// console.log(parseRange('1:5:2:4'));
// console.log(parseRange('1'));

// initialize current number as 0
// initialize result array to empty array
// split string into array of rangestrings
//   split on ', '
// iterate through range strings
//   push parse one range to results array < make sure to decompose
// return results array

function longHandRange(shorthand) {
  let currentNumber = 0;
  let results = [];
  let ranges = shorthand.split(', ')
                        .forEach( range => {
                          let subrange = parseRange(range, currentNumber);
                          results.push(...subrange);
                          currentNumber = results[results.length -1];
                        })
  return results;
}

// console.log(longHandRange("1, 3, 7, 2, 4, 1"    )); //=> [1, 3, 7, 12, 14, 21]
// console.log(longHandRange("1-3, 1-2"            )); //=> [1, 2, 3, 11, 12])
// console.log(longHandRange("1:3, 1:2"            )); //=> [1, 2, 3, 11, 12])
// console.log(longHandRange("1..3, 1..2"          )); //=> [1, 2, 3, 11, 12])
// console.log(longHandRange("1:5:2"               )); //--> 1, 2, 3, 4, 5, 6, ... 12
console.log(longHandRange("104-2"               )); //--> 104, 105, ... 112
console.log(longHandRange("104-02"              )); //--> 104, 105, ... 202
// console.log(longHandRange("545, 64:11"          )); //--> 545, 564, 565, .. 611
