// basic sentiment analysis
// use list of posisitive words and a list of negative words to determine if there are more posisitive then negative words
// sentiment is negative if the count is equal

// Implement a function that takes some text as an argument and logs some information about whether the text has a positive, negative, or neutral sentiment.


let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';


// iterate through positive words/ negative words, count number of matches for each word, store in a hash with the word and count
// iterate through words in text, check if text is in the positive/negative words, add word to hash with 1 if not already in hash, otherwise increment hash
// reduce each hash to an array with the total instances and a string with the list of words;
// calculate sentiment, use conditionals to output the final sentiment.

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

// function sentiment(text) {
//   let wordList = text.toLowerCase().match(/[a-z']+/g);
//   let positiveHash = { words: "", count: 0};
//   let negativeHash = { words: "", count: 0};
//   wordList.forEach( (word) => {
//     if (positiveWords.includes(word)) {
//       positiveHash.count += 1;
//       if (positiveHash.words === '') {
//         positiveHash.words = word;
//       } else {
//         positiveHash.words += `, ${word}`;
//       }
//     }
//     if (negativeWords.includes(word)) {
//       negativeHash.count += 1;
//       if (negativeHash.words === '') {
//         negativeHash.words = word;
//       } else {
//         negativeHash.words += `, ${word}`;
//       }
//     }
//   })
//   let sentiment = 'Neutral';
//   let sentimentCount = positiveHash.count - negativeHash.count;
//   if (sentimentCount < 0) sentiment = 'Negative';
//   if (sentimentCount > 0) sentiment = 'Positive';
//
//   console.log(`There are ${positiveHash.count} positive words in the text.`);
//   console.log(`Positive sentiments: ${positiveHash.words}`);
//   console.log();
//   console.log(`There are ${negativeHash.count} negative words in the text.`);
//   console.log(`Negative sentiments: ${negativeHash.words}`);
//   console.log();
//   console.log(`The sentiment of the text is ${sentiment}.`);
// }

function sentiment(text) {
  let wordList = text.toLowerCase().match(/[a-z']+/g);
  let positiveList = wordList.filter( (word) => positiveWords.includes(word) );
  let negativeList = wordList.filter( (word) => negativeWords.includes(word) );

  let sentiment = 'Neutral';
  let sentimentCount = positiveList.length - negativeList.length;
  if (sentimentCount < 0) sentiment = 'Negative';
  if (sentimentCount > 0) sentiment = 'Positive';

  console.log(`There are ${positiveList.length} positive words in the text.`);
  console.log(`Positive sentiments: ${positiveList.join(', ')}`);
  console.log();
  console.log(`There are ${negativeList.length} negative words in the text.`);
  console.log(`Negative sentiments: ${negativeList.join(', ')}`);
  console.log();
  console.log(`The sentiment of the text is ${sentiment}.`);
}

sentiment(textExcerpt);
