// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// initialize new array
// split string into chars
// iterate through characters
//   add current character twice to new array
// return new array combined into a string

function repeater(string) {
  return string.split('')
                .reduce( (newArray, char) =>  {
                  newArray.push(char, char)
                  return newArray
                }, [])
                .join('');
}

console.log(repeater('Hello')     === "HHeelllloo");        // "HHeelllloo"
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");    // "GGoooodd  jjoobb!!"
console.log(repeater('')          === "");             // ""
