// convert number to string
// split string into array of chars
// tranform array of chars into array of numbers
// return array of numbers

function digitList(number) {
  return String(number).split('')
                        .map( char => Number(char) )
}

console.log(digitList(12345)  );  // [1, 2, 3, 4, 5]
console.log(digitList(7)      );  // [7]
console.log(digitList(375290) );  // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)    );  // [4, 4, 4]
