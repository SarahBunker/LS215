// Write a function called doubler that doubles every value in an array

// asking questions from interviewer, building a list of requirements:
// - elements that are numbers should be multiplied by 2
// - elements that are strings should be repeated twice via concatenation
// - other types of elements should be duplicated in the array
// - the input array should not be mutated
// - elements that are special number values should remain unchanged
// - elements that are any other type of number should be treated normally (multiplied by 2)
// - elements that are empty strings should remain unchanged
// - elements that are any other type of string should be treated normally (repeated twice)
// - the input array can contain a mixture of different types of elements
// - non-primitive elements should have their reference duplicated, not their value
// - elements that appear more than once should be treated normally (as specified above)
// - elements that contain nested arrays or objects should be treated normally (duplicated)
// - if the input array contains empty slots (a "sparse array"), they should be removed
// - if an inner array (element) contains empty slots, they should remain unchanged
// - if the input array contains any object properties, they should remain unchanged
// - if an inner array (element) contains any object properties, they should remain unchanged
// - if the array is empty, return an empty array
// - if multiple arguments are passed, ignore all but the first
// - if the argument is a string, treat it as an array of characters
// - if the argument is a non-negative integer, treat it as an array of digits

// - if the argument is an object, treat it as an array of its property values
// - all other kinds of inputs are invalid, and should return the string 'Invalid input'

// creating test cases

let testArray = function(array, expectedArray) {
  if (array.length !== expectedArray.length) return false;
  for (let i = 0; i < array.length; i ++ ) {
    if (array[i] !== expectedArray[i]) return false;
  }
  return true;
}

let testOutput = function(output, expectedOutput) {
  if (Array.isArray(output)) {
    console.log(testArray(output, expectedOutput))
    return testArray(output, expectedOutput)
  }
  console.log(output === expectedOutput);
  return output === expectedOutput;
}

testOutput(doubler([1,2,3,4]), [2,4,6,8]);
testOutput(doubler(['bean', 'sprout']), ['beanbean', 'sproutsprout']);
testOutput(doubler([{},[]]), [{},{},[], []]);
testOutput(doubler([true, false]), [true, true, false, false])
testOutput(doubler([1, true, ['a', 'b']]), [2, true, true], ['a', 'b'], ['a', 'b'])

const array1 = [1,2]
const newArray1 = doubler(array1);
console.log(array1 !== newArray1);

testOutput(doubler([undefined, NaN, Infinity]), [undefined, NaN, Infinity]);
testOutput(doubler([1.2, 3.4, -5]), [2.4, 6.8, -10]);
testOutput(doubler(['', "", 'cat'], ['', "", 'catcat']));
testOutput(doubler([array1], [array1, array1]));
testOutput(doubler([1,,3]), [2,6]);
testOutput(doubler([1, [1,3]]), [2, [1,3]]);
testOutput(doubler([1, {cat: 'cat'}]), [2, {cat: 'cat'}]);
testOutput(doubler([1, cat: 'cat']), [2, cat: 'cat']);
testOutput(doubler([1, [1, cat: 'cat'])]), [2, [1, cat: 'cat'])])
testOutput(doubler([]), []);
testOutput(doubler([], [1, 2]), []);
testOutput(doubler([1, 2], [5, 10]), [2, 4]);
testOutput(doubler('cat'), ['cc', 'aa', 'tt']);
testOutput(doubler(123), [2,4,6]);
testOutput(doubler({cat: 'cat', dog: 'dog'}), ['catcat', 'dogdog']);
testOutput(doubler(-123), 'Invalid input');
testOutput(doubler(true), 'Invalid input');
testOutput(doubler(), 'Invalid input');
testOutput(doubler(undefined), 'Invalid input');
testOutput(doubler(null), 'Invalid input');

// elements that appear more than once should be treated normally (as specified above)
doubler([1, 1, true, true, {}, {}]);   // [2, 2, true, true, true, true, {}, {}, {}, {}]

// if the input array contains any object properties, they should remain unchanged
let array = [1, 2];
array.foo = 'bar';
doubler(array);                        // [2, 4, foo: "bar"]
