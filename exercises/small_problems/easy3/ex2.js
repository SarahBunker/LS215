let rlSync = require('readline-sync');

let numbers = [];
// let num1 = rlSync.question("Enter a number: ");
for (let i = 1; i <= 5; i ++) {
  let nextNumber = rlSync.question("Enter a number: ");
  numbers.push(nextNumber);
}

// const numbers = [25, 15, 20, 17, 23, 17];
let lastNumber = rlSync.question("Enter the last (number to look for) number: ");
let message = '';
if (numbers.includes(lastNumber)) {
  message = `The number ${lastNumber} appears in [${numbers.join(', ')}].`
} else {
  message = `The number ${lastNumber} does not appear in [${numbers.join(', ')}].`
}

console.log(message);

let lastNumber = rlSync.question("Enter the number to check if included value greater then: ");

function isIncluded(arr, val) {
  let included = false;
  return arr.some( (element) => {
    if (element > val) included = true;
  })
  return included;
}

let message = '';
if (isIncluded(numbers, lastNumber)) {
  message = `The number ${lastNumber} appears in [${numbers.join(', ')}].`
} else {
  message = `The number ${lastNumber} does not appear in [${numbers.join(', ')}].`
}

console.log(message);
