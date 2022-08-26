/*
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

input:
  - array

output:
  - return undefined if input is not an array
  - new array with the first element moved to the end of the array
  - return an empty array if the input is empty

rules
  - array elements can be numbers, strings, or objects
  - array elements can be a mixture of datatypes
  - single element arrays remain unchanged

//data structure
input array
output new array

//algorithm
guard clauses
  return undefined if the input is not an array
  return an empty array if the input is an empty array
select the first element of the array
select the second and onwards elements of the array
return an array with the first element at the end of the other elements
*/

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let firstElement = array[0];
  let newArray = array.slice(1)
  newArray.push(firstElement);
  return newArray;
}


console.log(rotateArray([7, 3, 5, 2, 9, 1])   );       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c'])      );          // ["b", "c", "a"]
console.log(rotateArray(['a'])                );                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c'])     );         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])                   );                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray() );                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array             );                                 // [1, 2, 3, 4]
