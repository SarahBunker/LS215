// Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// initialize new array
// split string into chars
// iterate through characters
//   add current character twice to new array if character is a consonant
//   otherwise just add the current character
// return new array combined into a string

function doubleConsonants(string) {
  return string.split('')
                .reduce( (newArray, char) =>  {
                  newArray.push(char)
                  if (char.match(/[a-z]/i) && char.match(/[^aeiou]/i)) newArray.push(char)
                  return newArray
                }, [])
                .join('');
}

console.log(doubleConsonants('String')        === "SSttrrinngg");          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')  === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')      === "JJullyy 4tthh");        // "JJullyy 4tthh"
console.log(doubleConsonants('')              === "");                // ""
