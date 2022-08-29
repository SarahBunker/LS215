// Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

// the elements in the first array are the first elements of each of the subarrays.
// the elements in the second array are the second elements of each of the new subarrays
/*
intialize an array of arrays
  number of sub arrays is the same as the original matrix
itterate index from zero to one less then number of rows in original
  access each row
  iterate through elements of row with current index
    add current element to new array at indices where row and column are switched
return new array of arrays

*/

function transpose(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i ++) {
    newMatrix[i] = [];
  }
  // console.log(newMatrix);
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[0].length; j++) {
      newMatrix[i][j] = matrix[j][i];
      // console.log(newMatrix);
    }
  }
  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
