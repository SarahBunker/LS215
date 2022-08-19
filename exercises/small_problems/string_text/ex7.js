// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

// can't use index to determine if it is upper or lower case
// can remove the non-alphabetic characters, use the same formula,
// then just remake the string, adding the non-alphabetic characters back in.

// could have a variable that you toggle, based on the toggle you either uppercase or lowercase the next alphabetic character;

let staggeredCase = function(string) {
  let capitalize = true;
  return string
        .split('')
        .map( (char, index) => {
          if (char.match(/[^a-z]/i)) return char;
          if (capitalize) {
            capitalize = false;
            return char.toUpperCase();
          }
          capitalize = true;
          return char.toLowerCase();
        })
        .join('');
}


console.log(staggeredCase('I Love Launch School!')       === "I lOvE lAuNcH sChOoL!"      );
console.log(staggeredCase('ALL CAPS')                    === "AlL cApS"                   );
console.log(staggeredCase('ignore 77 the 444 numbers')   === "IgNoRe 77 ThE 444 nUmBeRs"  );
