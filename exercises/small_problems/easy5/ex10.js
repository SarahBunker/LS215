// Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

/*

input
  string with one or more words

returns
  new string with words from original string
  and words with 5 or more letters have letters in reverse order

rules
  string argument will only contain letters and spaces
  words are separated by a single space

separate sentence into Words
transform words
  call reverse word helper function
join words back into sentence

# reverse words function
if word length is < 5 return word
split words into characters
reverse array of characters
return joined array of characters
*/

function reverseWords(sentence) {
  function reverseWord(word) {
    if (word.length < 5) return word;
    return word.split('')
                .reverse()
                .join('');
  }

  return sentence.split(' ')
                  .map(reverseWord)
                  .join(' ');
}

console.log(reverseWords('Professional')          === "lanoisseforP");             // "lanoisseforP"
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')         === "hcnuaL loohcS");            // "hcnuaL loohcS"
