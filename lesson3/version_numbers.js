// Problem
// Write a function that takes any two version numbers in this format and compares them, with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
// If either version number contains characters other than digits and the . character, we should return null.

// input: two versions numbers
// - starts with a number
// - can be followed by a period and another numbers
// - can be followed by any number of [period, another number]
// - always ends in a number
// - verision numbers only contain digits and periods
// - can have numbers with multiple digits ex 1.18.2 and 13.37

// output
// If version1 > version2, we should return 1.
// If version1 < version2, we should return -1.
// If version1 === version2, we should return 0.
//   - 1 and 1.0 are equal
//   - 1.2 and 1.2.0.0 are equal
//   - version numbers are equal if you can add [.0] to the shorter version number until they are same length and they are the same
// If either version number contains characters other than digits and the . character, we should return null.

// questions
// what if the version has repeated periods? 1..0
// Can the first number be zero? 0.13  << yes
// Is this a valid version number? 1.2.0.1
// what if the version number is an empty string? ''
// Can you end with a period? 1.0.

// Examples
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
// version numbers are compared with the first number
// if the first number is larger for one of the versions then that version is greater
// if not then the second number is compared.
// this continues until one of them is bigger or one of the strings runs out of numbers
// if one of the versions is shorter then you can compare if they are equal

// Data Structure
// input likely a string of numbers and periods
// convert to an array spliting on periods
// convert string elements to numbers
// ouput integer

// Algorithm
// validate input >> return null if inputs are not valid
//    checking if version number is valid
//     - regex check if the string contains characters other then . or 0-9
//        return false if they do.
//   otherwise return true
// Check if versions are equal >> return 0 if versions are equal
//    adds '.0' to end of smaller one until they are the same or greater length
//       if they are the same length check if the strings are equal
//          return true if equal
//    return false otherwise
// >> return result of comparing numbers
// compare numbers in versions to determine which is bigger
//    split versions to two arrays, split on periods
//    iterate through the numbers
//      return -1 if version2 is bigger
//      return 1 otherwise (version1 is bigger)

"use strict"

let validInput = function(version) {
  let regex = /[^.0-9]/
  if (version.match(regex)) return false;
  return true
}

let versionsEqual = function(versionA, versionB) {
  let short = (versionA.length < versionB.length) ? versionA : versionB;
  let long = (versionA.length > versionB.length) ? versionA : versionB;
  while (short.length <= long.length) {
    short = short + '.0';
    if (short === long) {
      return true;
    }
  }
  return false;
}

let compareNumbers = function(versionA, versionB) {
  let arrayA = versionA.split('.');
  let arrayB = versionB.split('.');
  for (let i = 0; i < versionA.length && i < versionB.length; i++) {
    if (arrayA[i] === arrayB[i]) continue;
    return Number(arrayA[i]) > Number(arrayB[i]) ? 1 : -1
  }
  console.log('Error');
  return undefined;
}

function compareVersions(version1, version2) {
  if (!(validInput(version1) && validInput(version2))) return null;
  if (versionsEqual(version1, version2)) return 0;
  return compareNumbers(version1, version2);
}

console.log(validInput('1.0x') == false);
console.log(validInput('1.0.0.0') == true);

console.log(versionsEqual('1', '1.0'));
//
console.log(compareVersions('1', '1.0') ===  0);
console.log(compareVersions('1.2', '1.2.0.0') ===  0);

console.log(compareVersions('1.18.2x', '13.37') ===  null);
console.log(compareVersions('1.18.2', '13.37xx') ===  null);
console.log(compareVersions('1.18.2', '13.37 ') ===  null);
console.log(compareVersions('1', '1.O') ===  null);

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '0.1') ===  1);
console.log(compareVersions('1.18.2', '1.2.0.0') ===  1);
console.log(compareVersions('1.18.2', '13.37') ===  -1);

// console.log(compareVersions('1.18.2', '1.2.0.0'));
