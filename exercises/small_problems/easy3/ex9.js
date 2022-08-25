// split string into words
// iterate through words
  // determine word length
  // check if word length is a property of hash
    // if not add propery with key of length a value of zero
  // add one to length property value
// return hash

function wordSizes(string) {
  if (string.length === 0) return {};
  return string.split(' ')
                .reduce( (wordCount, word) => {
                  let wordLength = word.length;
                  if (wordCount[wordLength] === undefined) {
                    wordCount[wordLength] = 0;
                  }
                  wordCount[wordLength] += 1;
                  return wordCount;
                }, {});
}

console.log(wordSizes('Four score and seven.')                      );  // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!') );  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")                             );  // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')                                           );  // {}
