function isPalindrome(string) {
  return (string.split('').reverse().join('') === string);
}

function isRealPalindrome(string) {
  let alplanumerics = string.split('')
                            .filter( char => char.match(/[a-z\d]/i))
                            .join('');
  return isPalindrome(alplanumerics.toLowerCase());
}

console.log(isRealPalindrome("Madam, I'm Adam"));

console.log(isRealPalindrome('madam')           === true);               // true
console.log(isRealPalindrome('Madam')           === true);               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam") === true);     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653')          === true);              // true
console.log(isRealPalindrome('356a653')         === true);             // true
console.log(isRealPalindrome('123ab321')        === false);            // false
