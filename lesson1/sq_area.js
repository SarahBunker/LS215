// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.
// - calculate area of one rectangles
// - map areas of all rectangles
// - reduce sum of areas

let calcArea = (rectangle) => rectangle[0] * rectangle[1];

let totalArea = function(rectangles) {
  let areas = rectangles.map( calcArea );
  return areas.reduce((total, current) => total + current);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.
// filter squares out of list of rectangles
// pass new list to totalArea Function

let totalSquareArea = function(rectangles) {
  let squares = rectangles.filter((rectangle) => rectangle[0] === rectangle[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));    // 121
