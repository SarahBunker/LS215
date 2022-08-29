

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/ig, '');
    let index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/\${[a-z]+}/ig, replaceText);
}

const template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
                '${verb} the ${adjective} yellow ' +
                '${noun}, who ${adverb} ${verb} his ' +
                '${noun} and looks around.';

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

console.log(madlibs(template1));
console.log();
console.log(madlibs(template1));
console.log();
console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".
console.log();
console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
