// write a function that staggers the capitalization
// even indexes are capitalized
// odd indexes are lowercase
// spaces and non-alphabetetic characters aren't affected, but still count as an element at an index
  // ingore the numbers, ingore spaces, ingore underscores

// split string into chars
// map chars with index
  // if index is even
    // return char converted to uppercase
  // return char converted to lowercase
// join array

// let staggeredCase = function(string) {
//   let chars = string.split('');
//   let changedChars = chars.map( (char, index) => {
//     if (index % 2 === 0) return char.toUpperCase();
//     return char.toLowerCase();
//   })
//   return changedChars.join('');
// }

let staggeredCase = function(string) {
  return string
        .split('')
        .map( (char, index) => {
          if (index % 2 === 0) return char.toUpperCase();
          return char.toLowerCase();
        })
        .join('');
}


console.log(staggeredCase('I Love Launch School!')       === "I LoVe lAuNcH ScHoOl!"      );
console.log(staggeredCase('ALL_CAPS')                    === "AlL_CaPs"                   );
console.log(staggeredCase('ignore 77 the 4444 numbers')  ==="IgNoRe 77 ThE 4444 nUmBeRs"  );
