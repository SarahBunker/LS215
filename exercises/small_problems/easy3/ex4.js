
function isPalindrome(string) {
  return (string.split('').reverse().join('') === string);
}

console.log(isPalindrome('madam')          === true);               // true
console.log(isPalindrome('Madam')          === false);               // false (case matters)
console.log(isPalindrome("madam i'm adam") === false);      // false (all characters matter)
console.log(isPalindrome('356653')         === true);              // true
