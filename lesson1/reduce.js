function myReduce(array, func, initial) {
  let tempArray = array.slice();
  if (initial === undefined) {
    initial = tempArray[0];
    tempArray = tempArray.slice(1);
  }
  let accumulator = initial;
  array.forEach( currentValue => {
    accumulator = func(accumulator, currentValue);
  })
  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest) );           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10)  );            // 49


function longestWord(words) {
  return myReduce(words,longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
