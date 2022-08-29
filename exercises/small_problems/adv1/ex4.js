const matrix = [
  [3, 4, 1],
  [9, 7, 5],
];

/*
3  4  1
9  7  5

9  3
7  4
5  1

1  5  8
4  7  2
3  9  6

3  4  1
9  7  5
6  2  8

the first column becomes the first row in reverse order
the second column becomes the second row in reverse order

access elements in a column as array
  transpose array
reverse the subarrays
*/

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function transpose(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i ++) {
    newMatrix[i] = [];
  }
  
  for (let i = 0; i < matrix[0].length; i ++) {
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
}

function rotate90(matrix) {
  let newMatrix = transpose(matrix);
  return newMatrix.map( columnArray => columnArray.reverse());
}

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
const newMatrix0 = rotate90(matrix);

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
console.log(newMatrix0);
