/* binary search
linear search: check each business page to see if it is the correct business
slightly better, go through the letters A-Z to find the business

binary search:
relys on data being sorted
cuts the data in half and discards the data that doesn't contain the data you are looking for
return index of search item
  return -1 otherwise

['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge']\\, 'Zooper'];
0                 1             2               3             4             5           6             7           8            \\   9

if low index >= high index return -1
set low index to 0                        0
set high index to array length - 1        8
middle value parseInt((high - low) / 2)
retrieve middle value (assume truncation to integer)
return middle index if middle value is search value
if middle value is less then search value
  discard the lower half including middle value
    set low to middle index + 1
  repeat process
if middle value is greater then search value
  discard the upper half of the data including the middle value
    set high to middle index - 1
  repeat process
*/
let iterations = 0;
function binarySearch(array, searchItem) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let middle = low + parseInt((high - low) / 2);
    // console.log(`low: ${low}, middle: ${middle}, high: ${high}`);
    if (array[middle] === searchItem) return middle;
    if (array[middle] < searchItem) {
      low = middle + 1;
    }
    if (array[middle] > searchItem) {
      high = middle - 1;
    }
  }

  return -1;
}


// const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge'];
const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria')    === 7);                   // 7
console.log(binarySearch(yellowPages, 'Apple Store') === 0);                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77) === -1);    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89) === 7);    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)  === 1);     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter') === -1);  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler') === 6);  // 6

// let middleIndex = Math.ceil(yellowPages.length/2)
// console.log(yellowPages[middleIndex])
// console.log(yellowPages.slice(0, middleIndex));
// console.log(yellowPages.slice(middleIndex + 1));
