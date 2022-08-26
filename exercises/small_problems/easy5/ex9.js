// Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

/*
input string argument
returns new string
  words from string in reverse order

rules
  empty string returns an empty string
  case sensitive
  words split on spaces

return an empty string if input string is empty
split into words
reverse array of words
join reversed array
return new array

*/

function reverseSentence(sentence) {
  return sentence .split(' ')
                  .reverse()
                  .join(' ');
}


console.log(reverseSentence('')                    === "");                       // ""
console.log(reverseSentence('Hello World')         === "World Hello");            // "World Hello"
console.log(reverseSentence('Reverse these words') === "words these Reverse");    // "words these Reverse"
