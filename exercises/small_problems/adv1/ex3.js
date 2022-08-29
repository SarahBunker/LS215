function transpose(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i ++) {
    newMatrix[i] = [];
  }
  // console.log(newMatrix);
  for (let i = 0; i < matrix[0].length; i ++) {
    for (let j = 0; j < matrix.length; j++) {
      // console.log(`i: ${i}    j: ${j}`)
      newMatrix[i][j] = matrix[j][i];
      // console.log(newMatrix);
    }
  }
  return newMatrix;
}

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
