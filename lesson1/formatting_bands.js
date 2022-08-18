/*
There are problems with this data, though, so we first have to clean it up before we can use it:

The band countries are wrong: all the bands should have 'Canada' as the country.
The band name should have all words capitalized.
Remove all dots from the band names.
Write a function that can process the input band Array and return an Array that contains the fixed information:

cleanup >> transformation

helpers> remove dots from band names
      > capitalize word


*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalize(sentence) {
  let transformedName =  sentence.split(' ').map(function (word) {
    let array = word.split('');
    array[0] = array[0].toUpperCase();
    return array.join('');
  });
  return transformedName.join(' ');
}

console.log(capitalize('cat and mouse'));

function processBands(data) {
  return data.map( function (band) {
    let newBandName = band.name.replace(/\./g, '');
    newBandName = capitalize(newBandName); //.split(' ').map(capitalize);
    return {name: newBandName, country: 'Canada', active: band.active};
  });
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
