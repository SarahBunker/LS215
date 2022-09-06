/*
bank of switches, every switch connected to a light initialally off
first iteration toggle every lightswitch
[111111]
second iteration toggle every other lightswitch
[101010]
third iteration toggle every third lightswitch
[100011]
fourth iteration toggle every 4th lightswitch
[100111]
fith iteration toggle every 5th lightswitch
[100101]
6th iteration toggle every 6th lightswitch
[100100]
...

input number of switches
output array of switch numbers that are on

rules
  switch numbers start with 1
  all lights initialally turned off
  for the nth round all switches that are a multiple of n are toggled
  the number of rounds equals the number of switches

Main Method
lights on
input: numSwitches
start with an array of elements with length equal to the numSwitches
set each element to the boolean false
iterate from 1 to numSwitches // roundNumber
  onePass(roundNumber, lightArray)
map all true values to light number by taking index and adding one
filter all numbers, not false values
return filtered array

helper method
onePass
input: roundNumber, lightArray
iterate through lightArray
  if current index  + 1 is evenly divisable by round number
  toggleSwitch(index, lightArray)

toggle switch
input index, lightArray
  if lightArray[index] is true set to false otherwise set to true
*/

// function toggleSwitch(index, lightArray) {
//   lightArray[index] = !lightArray[index]
// }

let lightArray = [];
for (let i = 0; i < 5; i ++) {lightArray[i] = false };

// console.log(toggleSwitch(1, lightArray));
// console.log(lightArray);

function onePass(roundNumber, lightArray) {
  for (let index = 0; index < lightArray.length; index ++) {
    if ( (index + 1) % roundNumber === 0 ) lightArray[index] = !lightArray[index];
  }
  return lightArray;
}

// console.log(onePass(1, lightArray));

function lightsOn(numSwitches) {
  let lightArray = [];
  for (let i = 0; i < numSwitches; i ++) {lightArray[i] = false };
  for (let roundNumber = 1; roundNumber <= numSwitches; roundNumber ++) {
    onePass(roundNumber, lightArray);
  }
  return lightArray.map( (light, index) => { return light ? index + 1 : light })
                    .filter( light => light);
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
