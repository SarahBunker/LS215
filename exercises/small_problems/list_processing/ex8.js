/*
// Problem
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.


in:
out:

explicit:
implicit:

mutating?
-------------------------------------------------
// Examples

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

- edge cases
-------------------------------------------------
// DataStructure

-------------------------------------------------
// Algorithym

initialize empty new array
iterate through array
  get fruit name from first element of subarray
  get iteration number from second element of subarray
  iterate the number of times
    add the fruit name to the new array
return new array


- take example(s) through Algorithym
*/

let buyFruit = function(array) {
  return array.reduce(function(groceryList, subarray) {
    let fruitName = subarray[0];
    let numIterations = subarray[1];
    for(let count = 1; count <= numIterations; count += 1) {
      groceryList.push(fruitName);
    }
    return groceryList;
  }, [])
}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
