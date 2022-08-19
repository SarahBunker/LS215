// capitalize all the words in a string
// and all subsequent characters in lowercase.
// ignore quoted words >> or its just that the first character is a quote?
// word is any sequence of non-whitespace characters

// words - split based on whitespace characters
// map words
  // split word into array
  // replace first element with uppercase version of character
  // return new word by joining array with ''
// combine words by joining array with ' '

let wordCap = function(string) {
  let words = string.split(/\s/);
  let capWords = words.map( function(word) {
    let chars = word.split('').map( (char) => char.toLowerCase());
    chars[0] = chars[0].toUpperCase();
    return chars.join("")
  })
  return capWords.join(" ");
}

console.log(wordCap('four score and seven')    ===  "Four Score And Seven" );       // "Four Score And Seven"
console.log(wordCap('the javaScript language') ===  "The Javascript Language" );    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word') ===  'This Is A "quoted" Word' );    // 'This Is A "quoted" Word'
