// let isUppercase = function(string) {
//   return (string.toUpperCase() === string);
// }

// let isUppercase = function(string) {
//   return (!string.match(/[a-z]/));
// }

let isUppercase = function(string) {
  return (!/[a-z]/.test(string));
}

console.log(isUppercase('t')          === false);               // false
console.log(isUppercase('T')          === true);               // true
console.log(isUppercase('Four Score') === false);      // false
console.log(isUppercase('FOUR SCORE') === true);      // true
console.log(isUppercase('4SCORE!')    === true);         // true
console.log(isUppercase('')           === true);                // true
