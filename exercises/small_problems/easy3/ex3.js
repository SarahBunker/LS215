// let get = require('readline-sync')
let rlSync = require('readline-sync');

let age = rlSync.question("What is your age? ");
let retirementAge = rlSync.question("At what age would you like to retire? ");
let today = Date()
let currentYear = today.getFullYear();
let workYearsLeft = retirementAge - age;
console.log(`It's ${currentYear}. You will retire in ${currentYear + workYearsLeft}.`);
console.log(`You have only ${workYearsLeft} years of work to go!`);
