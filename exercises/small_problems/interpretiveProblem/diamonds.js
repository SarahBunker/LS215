/*
write  a function that displays a 4 pointed diamond in an nxn grid

rules
  n is an odd integer < function argument
  assume n is odd

-------------
Examples

diamond(1);
// logs
*

diamond(3);
// logs
 *
***
 *


diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

stars modifier is 2
Number of stars begins with 1
initialize an empty string
  add the number of stars
  find total number of spaces by subtracting number of stars from n
  add half the spaces to the front and half to the end
ouput string
reset string
add stars modifier to the number of stars
  add the number of stars to empty string
  find total number of spaces
  add half the spaces to the front of the string and half to the end of the string
add stars modifier to the number of stars
  add the number of stars to empty string
  find total number of spaces
  add half the spaces to the front of the string and half to the end of the string
...
if the number of stars equals n
  set stars modifier to -2
break once number of stars is less then zero

main method
set numStars to 1
set starsModifier to 2
while numStars > 0
  if numStars equals n set starsModifier to -2
  let newRow = '*' * numStars
  let totalNumSpaces = n - numStars;
  let newRow = ' ' * totalNumSpaces / 2 + newRow + ' ' * totalNumSpaces / 2
  output newRow
  numStars += starsModifier;
*/

function diamond(n) {
  let numStars = 1;
  let starsModifier = 2;
  while (numStars > 0) {
    if (numStars === n) starsModifier = -2;
    let stars = substring('*', numStars);
    let spaces = substring(' ', (n - numStars)/2);
    console.log(spaces + stars + spaces);
    numStars += starsModifier;
  }
}

function substring(char, repetions) {
  if (repetions === char) return char;
  let newString = ''
  for(let i = 1; i <= repetions; i ++) {
    if (i === 1 || i === repetions) {
      newString += char;
    } else {
      newString += ' ';
    }
  }
  return newString;
}
// set numStars to 1
// set starsModifier to 2
// while numStars > 0
//   if numStars equals n set starsModifier to -2
//   let newRow = '*' * numStars
//   let totalNumSpaces = n - numStars;
//   let newRow = ' ' * totalNumSpaces / 2 + newRow + ' ' * totalNumSpaces / 2
//   output newRow
//   numStars += starsModifier;

diamond(1);
diamond(3);
diamond(9);
