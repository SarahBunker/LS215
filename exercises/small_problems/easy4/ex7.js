// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

function multiplyList(array1, array2) {
  return array1.reduce( (newArray, currentValue, index) => {
    newArray.push(currentValue * array2[index]);
    return newArray;
  },[]);
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]) );    // [27, 50, 77]
