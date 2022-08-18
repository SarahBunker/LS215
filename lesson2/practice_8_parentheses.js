// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

// determine if the parentheses are balanced
// rules
//   have to have an equal number of '(' and ')'
//   when you add a `)` there has to be an unmatched `(` previously

// Algorithym
// check if there are an equal number of both kinds of parentheses
//    return false if there are not
// check if they are all matching
// initialize unmatched to zero
// iterate through characters
// if the current character is `(`
//    add one to unmatched
// if the current character is `)`
//    subtract one from unmatched
// break from loop if unmatched is ever negative
// outside of loop return true if unmatched equals 0 false otherwise

let equalParentheses = function(string) {
  let left = string.match(/\(/) || [];
  let right = string.match(/\)/)|| [];
  return (left.length === right.length);
}

let isBalanced = function(string) {
  if (!equalParentheses(string)) return false;

  let unmatched = 0;

  for(let i = 0; i < string.length; i++ ) {
    if (unmatched < 0) break;
    if (string[i] === '(') unmatched += 1;
    if (string[i] === ')') unmatched -= 1;
  }

  return unmatched === 0;
}




console.log(isBalanced('What (is) this?')      === true);   // true
console.log(isBalanced('What is) this?')       === false);  // false
console.log(isBalanced('What (is this?')       === false);  // false
console.log(isBalanced('((What) (is this))?')  === true);   // true
console.log(isBalanced('((What)) (is this))?') === false);  // false
console.log(isBalanced('Hey!')                 === true);   // true
console.log(isBalanced(')Hey!(')               === false);  // false
console.log(isBalanced('What ((is))) up(')     === false);  // false
