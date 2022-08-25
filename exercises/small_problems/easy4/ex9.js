// Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences.

// input array of elements
// output to console
//    element and count of element

// tally
// initialize an object
// iterate through array
// check if currenet element is part of object
//   if it is
//     set value to 1 plus current value
//   otherwise set value to 1;

// main
// count is return of tally input array
// iterate through properties of count
//   output key name and count for each property

function tally(array) {
  return array.reduce( (count, element) => {
    count[element] = count[element] ? count[element] += 1 : 1;
    return count;
  }, {});
}

function countOccurrences(array) {
  let count = tally(array)
  let properties = Object.keys(count);
  properties.forEach( key => {
    console.log(`${key} => ${count[key]}`);
  })
  // console.log(properties);
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
