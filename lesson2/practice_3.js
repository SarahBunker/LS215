console.log('#1---------------------------------------------------------------')
// Create a variable named firstName and set it equal to your first name. Set another variable named lastName to your last name. Join the two together, separated by a space, and store the result in a variable named fullName. Log the value of fullName.

const firstName = 'Sarah';
const lastName = 'Bunker';
const fullName = firstName + " " + lastName;
console.log(fullName);

console.log('#2---------------------------------------------------------------')

console.log(firstName.concat(lastName));

console.log('#3---------------------------------------------------------------')

console.log(fullName.split(' '));

console.log('#4---------------------------------------------------------------')

const language = 'JavaScript';
const idx = language.indexOf('S');
console.log(idx);

console.log('#5---------------------------------------------------------------')

const charCode = language.charCodeAt(idx);
console.log(charCode);

console.log('#6---------------------------------------------------------------')

console.log(String.fromCharCode(charCode));

console.log('#7---------------------------------------------------------------')

console.log(language.lastIndexOf('a'));

console.log('#8---------------------------------------------------------------')

let a = 'a';
let b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

console.log('#9---------------------------------------------------------------')

const aIndex = language.indexOf('a');
const vIndex = language.indexOf('v');
console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log('#10---------------------------------------------------------------')

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

console.log('#11---------------------------------------------------------------')

let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase()
console.log(compoundSentence);

console.log('#12---------------------------------------------------------------')

console.log(fact1[0]);
console.log(fact2[0]);

console.log('#13---------------------------------------------------------------')

const pi = 22/7;
console.log(String(pi).indexOf('14'));

console.log('#14---------------------------------------------------------------')

let boxNumber = 365.0.toString();
console.log(boxNumber);

console.log('#15---------------------------------------------------------------')

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

console.log('#16---------------------------------------------------------------')

// Write a program that asks for a user's name, then greets the user with that name. If the user appends a ! to his name (e.g., 'Bill!'), the computer should "yell" its greeting: that is, it should log everything to the console in uppercase. You can check whether the name ends with a ! using String.prototype.endsWith (ES6 only). You can remove the ! from the user's name with String.prototype.slice.

// ask for user name
// greet user with name
//   check if name ends with !
//    remove exclamation mark
//    set greeting to shouting
//      interpolate string with uppercase name
//   else
//    write normal greeting
//      interpolate name with normal greeting
//  log greeting

let readLine = require("readline-sync");

let name = readLine.question("What is your name? ");
let greeting;
if (name[name.length - 1] === '!') {
  name = name.slice(0, name.length - 1);
  greeting = `HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING? `;
} else {
  greeting = `Hello ${name}.`
}
console.log(greeting);
