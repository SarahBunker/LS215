// Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.

/*

233                         // decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1

233                          // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155                          // decimal


- convert string to array of chars
- reverse Array
- map convert char to number
iterate through array
- reduce chars ()   // reduce((previousValue, currentValue, currentIndex) => { code } )
  - initialize total to 0
  - add to total each number times 8 to the power of the current index
- return total
*/

function octalToDecimal(numberString) {
  let numberArray = numberString.split('').reverse()
  let numbers = numberArray.map((digitalChar, index) => {
    return Number(digitalChar) * Math.pow(8, index);
  })
  return numbers.reduce((total, current) => total + current);
}

console.log(octalToDecimal('233'));

console.log(octalToDecimal('1')   === 1);           // 1
console.log(octalToDecimal('10')  === 8);          // 8
console.log(octalToDecimal('130') === 88);         // 88
console.log(octalToDecimal('17')  === 15);          // 15
console.log(octalToDecimal('2047')=== 1063);        // 1063
console.log(octalToDecimal('011') === 9);         // 9

// can do the whole thing in one reduce
