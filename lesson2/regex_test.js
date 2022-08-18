console.log('#1---------------------------------------------------------------')
// Write a method that returns true if its argument looks like a URL, false if it does not.
let isUrl = function(string) {
  let regex = /^https?:\/\/\S+$/;
  return !!string.match(regex);
}

console.log(isUrl('http://launchschool.com')   === true) ;   // -> true
console.log(isUrl('https://example.com')       === true) ;       // -> true
console.log(isUrl('https://example.com hello') === false) ; // -> false
console.log(isUrl('   https://example.com')    === false) ;    // -> false

console.log('#2---------------------------------------------------------------')
// Write a method that returns all of the fields in a haphazardly formatted string. A variety of spaces, tabs, and commas separate the fields, with possibly multiple occurrences of each delimiter.

let fields = function(string) {
  let regex = /[\t ,]+/
  return string.split(regex);
}

console.log(fields("Pete,201,Student")    );
console.log(fields("Pete \t 201    ,  TA"));
console.log(fields("Pete \t 201")         );
console.log(fields("Pete \n 201")         );
// -> ['Pete', '201', 'Student']
// -> ['Pete', '201', 'TA']
// -> ['Pete', '201']
// -> ['Pete', '\n', '201']
console.log('#3---------------------------------------------------------------')
let mysteryMath = function(string) {
  let regex = /[\+\-\*\\]/;
  return string.replace(regex, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2')          );
console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '4 ? 3 - 5 = 2'
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

console.log('#4---------------------------------------------------------------')

mysteryMath = function(string) {
  let regex = /[\+\-\*\\]/g;
  return string.replace(regex, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2')          );
console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '4 ? 3 - 5 = 2'
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

console.log('#5---------------------------------------------------------------')
// Write a method that changes the first occurrence of the word apple, blueberry, or cherry in a string to danish.

let danish = function(string) {
  let regex = /\b(apple|blueberry|cherry)\b/i;
  return string.replace(regex, 'danish');
}

console.log(danish('An apple a day keeps the doctor away') );
console.log(danish('My favorite is blueberry pie')         );
console.log(danish('The cherry of my eye')                 );
console.log(danish('apple. cherry. blueberry.')            );
console.log(danish('I love pineapple')                     );
// -> 'An danish a day keeps the doctor away'
// -> 'My favorite is danish pie'
// -> 'The danish of my eye'
// -> 'danish. cherry. blueberry.'
// -> 'I love pineapple'

console.log('#6---------------------------------------------------------------')
// Challenge: write a method that changes strings in the date format 2016-06-17 to the format 17.06.2016. You must use a regular expression and should use methods described in this section.

let formatDate = function(string) {
  let regex = /(\d{4})-(\d{2})-(\d{2})/;
  return string.replace(regex, '$3.$2.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

console.log('#7---------------------------------------------------------------')

formatDate = function(string) {
  let regexDash = /(\d{4})-(\d{2})-(\d{2})/;
  let regexSlash = /(\d{4})\/(\d{2})\/(\d{2})/;
  let newString = string.replace(regexDash, '$3.$2.$1');
  newString = newString.replace(regexSlash, '$3.$2.$1');
  return newString;
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)

console.log('#################################################################')

/*
Check whether the pattern ss appears in the string Mississippi.
Check whether the letter i occurs three or more times in Mississippi.
Find and replace all instances of Mrs with Ms in a document.
Does a file name begin with Bob and end with .txt or .md?
Does a string have any non-alphanumeric characters in it?
Did the user enter a valid integer?
Are there any whitespace characters in the string?
Find and replace all non-alphanumeric characters in a string with -.
Locate all email addresses in a document.
Split a line of text into fields assuming that each whitespace character delimits two values.*/

let string = 'Mississippi';
if (string.match(/ss/)) {
  console.log('This word has ss.');
}

if (string.match(/i/g).length >= 3) {
  console.log('This word has 3 or more of the letter I.');
}

let text = "Mrs was most often used by a woman when married, in conjunction with her husband's first and last names (e.g., Mrs. John Smith). A widow would also be addressed with the same title as when she was married. Mrs was rarely used before a woman's first name, her birth name, or a hyphenated surname her husband was not using. For example, Mrs. Jane Smith, Mrs. Miller (wife of John Smith), or Mrs. Miller-Smith were considered incorrect by many etiquette writers, especially of the early 20th century."

let newText = text.replace(/Mrs\./g, 'Ms');
console.log(newText);

let file1 = "Bob.txt";
let file2 = "AnaBob.txt";
let file3 = "Bob.md";
let file4 = "BobAnna.txt";

let files = [file1, file2, file3, file4];

files.forEach( (fileName) => {
  let regex = /^Bob.*\.(txt|md)$/
  if (fileName.match(regex)) {
    console.log(`${fileName} is a match.`);
  }
})

string = 'lknm32309z, ,0ra'
if (string.match(/\W/)) {
  console.log(`The string: "${string}" has non alphanumeric characters.`);
}

//Are there any whitespace characters in the string?

if (string.match(/\s/)) {
  console.log(`The string: "${string}" has whitespace characters.`);
}

// Find and replace all non-alphanumeric characters in a string with -.
console.log(`The string: "${string}" without non alphanumeric characters is:`)
let newString = string.replace(/\W/g, '-');
console.log(newString);

// Locate all email addresses in a document.
// Split a line of text into fields assuming that each whitespace character delimits two values.

let data = 'lskdf slkjdfoe  sldkf \n lskdfj';

let newData = data.split(/\s+/);
console.log(newData);
