/*
takes text as input
plugs selection of randomized nouns, verbs, adjectives, and adverbs into text
returns text

build list of nouns, verbs, adjectives, and adverbs directly into program
program reads text and replaces random word of appropriate type into text

need to choose structure of text template
defining the input part of problem

Data structure
input: ?
  * String
    have patterns that you use regex to replace with correct word type
    use noun, verb, adjective, and adverb with dashes in front and back
  Array
    have elements with a pattern that you use regex to replace with correct word type.
    then join into a string of words
output: string

// algorithm
create list of
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly

helper function, random array element
given array of elements
find redom number between 0 and 1
times random number by length off array
round down to nearest whole integer



*/

function sampleArray(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function addRandomWord(wordtype, array, template) {
  let regex = new RegExp(`-${wordtype}-`);
  while (template.match(regex)) {
    let randomWord = sampleArray(array);
    template = template.replace(regex, randomWord);
  }
  return template
}

function madlibs(template) {
  const ADJECTIVE_LIST = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  const NOUN_LIST = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  const VERB_LIST = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  const ADVERB_LIST  = ['easily', 'lazily', 'noisily', 'excitedly'];
  template = addRandomWord('adjective', ADJECTIVE_LIST , template);
  template = addRandomWord('noun'   , NOUN_LIST, template);
  template = addRandomWord('verb'   , VERB_LIST, template);
  template = addRandomWord('adverb' , ADVERB_LIST, template);
  return template;
}

let template1 = "The -adjective- brown -noun- -adverb- \n-verb- the -adjective- yellow\n-noun-, who -adverb- -verb- his \n-noun- and looks around."

// The -adjective- brown -noun- -adverb-
// -verb- the -adjective- yellow
// -noun-, who -adverb- -verb- his
// -noun- and looks around.


let template2 = "The -noun- -verb- the -noun-'s -noun-"


 // The "fox" "bites" the "dog"'s "tail".

// console.log(sampleArray(['quick', 'lazy', 'sleepy', 'noisy', 'hungry']))
// console.log(addRandomWord('noun'))

console.log(madlibs(template1));
console.log();
console.log(madlibs(template1));
console.log();
console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".
console.log();
console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
