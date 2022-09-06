/*
write a function that displays an 8 pointed star in an nxn grid
n is an odd integer

input: n, size of grid

rules
  smallest star is 7x7 grid, n = 7

------------------------------------------------------------
Examples
star(7);
// logs
*  *  *  star, two spaces, star, two spaces, star
 * * *   space, star, space, star, space, star space
  ***    two spaces, 3 stars, two spaces
*******  7 stars
  ***
 * * *
*  *  *

star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

---------------------------------------------------------
Datastructure
each row as an array of strings
convert to strings to output star

---------------------------------------------------------
Algorithm
// star (n)
set nestedStarArray to 7x7 star
iterate from 7 to n
  addStarLevel(nestedStarArray)
  increment n by 2
iterate through rows of star
  output each row converted to a string

helper method
// addStarLevel
input current nested star array
currentFirstRow << access the current first row
new first row = newFirstLastRow(currentFirstRow)
currentLasttRow << access the current last row
new last row = newFirstLastRow(currentLasttRow)

iterate through all current rows and push a space to front of row
mutate middle row [row at index length nested star array / 2 rounded down]
  change first element from space to star
  add star at end of row

push new first row to front of nested star array
push new last row to end of nested star array


// newFirstLastRow
input(row);
make copy of row
add a space at index 1 and index 1 from the end
return copy

// baseStar
return 7x7 nestedStarArray
*/

function baseStar() {
  let result = [
    ['*', ' ', ' ', '*', ' ', ' ', '*'],
    [' ', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', '*', '*', '*', ' ', ' '],
    ['*', '*', '*', '*', '*', '*', '*'],
    [' ', ' ', '*', '*', '*', ' ', ' '],
    [' ', '*', ' ', '*', ' ', '*', ' '],
    ['*', ' ', ' ', '*', ' ', ' ', '*'],
  ]
  return result;
}

function newFirstLastRow(row) {
  let newRow = row.slice(0);
  newRow.splice(1, 0, ' ');
  newRow.splice(row.length -2, 0, ' ');
  return newRow;
}

// console.log(newFirstLastRow(['*', ' ', ' ', '*', ' ', ' ', '*']));

function addStarLevel(nestedStarArray) {
  let newFirstRow = newFirstLastRow(nestedStarArray[0]);
  let newLastRow = newFirstLastRow(nestedStarArray[nestedStarArray.length - 1]);
  nestedStarArray.forEach( row => row.unshift(' '));
  let currentMiddleRow = nestedStarArray[parseInt(nestedStarArray.length / 2, 10)]
  currentMiddleRow[0] = '*'
  currentMiddleRow.push('*');
  nestedStarArray.unshift(newFirstRow);
  nestedStarArray.push(newLastRow);
}

function star(n) {
  let nestedStarArray = baseStar();
  for (let level = 7; level < n; level += 2) {
    addStarLevel(nestedStarArray);
  }

  nestedStarArray.forEach( row => console.log(row.join('')));
}

star(7);
console.log('123456789')
star(9);
console.log('12345678901')
star(11);
