function wordSizes(string) {
  if (string.length === 0) return {};
  return string.split(' ')
                .reduce( (wordCount, word) => {
                  word = word.match(/[a-z]/ig).join('')
                  let wordLength = word.length;
                  if (wordCount[wordLength] === undefined) {
                    wordCount[wordLength] = 0;
                  }
                  wordCount[wordLength] += 1;
                  return wordCount;
                }, {});
}

console.log(wordSizes('Four score and seven.')                      );  // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!') );  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")                             );  // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes('')                                           );  // {}
