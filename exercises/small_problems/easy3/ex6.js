function isPalindrome(string) {
  return (string.split('').reverse().join('') === string);
}

function isPalindromicNumber(number) {
  return (isPalindrome(String(number)));
}



console.log(isPalindromicNumber(34543)  === true);        // true
console.log(isPalindromicNumber(123210) === false);       // false
console.log(isPalindromicNumber(22)     === true);           // true
console.log(isPalindromicNumber(5)      === true);            // true

console.log(isPalindromicNumber(00500)      === true);            // true
