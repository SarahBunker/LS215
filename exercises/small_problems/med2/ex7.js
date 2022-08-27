/*
given an array sort it using a bubble sort
bubble sort
  compare the first two elements
  if the first element is larger > swap the elements
  then compare the next two elements

  one pass is going through all consecutive pairs of elements
  continue to pass through array until no changes are made to the array

repeat until a complete pass is made without performing any swaps
  * boolean that you toggle
  make copy of array at start of pass and compare to array at the end of the pass

iterate through all consecutive pairs of elements
  interate from index 0 to length of array - 2
  access first element of pair using index
  access second element of pair using index + 1

Swap elements
  access first and second element of pair stored in array
  set equal to second and first element of pair stored in array

--------------------
Main function
set boolean noSwaps = false
while noSwaps is false pass through array
  set noSwaps = true
  call helper pass through array function

helper functions
# pass through array
iterate through all consecutive pairs of elements
  interate from index 0 to length of array - 2
  access first element of pair using index
  access second element of pair using index + 1
  if first element is greater then second element
    set noSwap to false
    pass indexes to helper swap elements function

# swap elements
  using indexes and array decomposition switch element places
*/

function bubbleSort(array) {
  function swapElements(index) {
    [array[index], array[index + 1]] = [array[index + 1], array[index]]
  }

  function passThroughArray() {
    for (let i = 0; i <= array.length - 2; i ++) {
      if (array[i] > array[i+1]) {
        elementsSwaped = true;
        swapElements(i);
      }
    }
  }

  do {
    elementsSwaped = false;
    passThroughArray();
  } while (elementsSwaped)
}




const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
