/*
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.


*/

function fridayThe13ths(year) {
  const DAYS = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat'];
  let count = 0;
  for (let month = 0; month < 12; month ++) {
    let newDate = new Date(year, month, 13);
    let dayOfWeek = newDate.getDay()
    if (DAYS[dayOfWeek] === 'fri') {
      count += 1
    };
  }
  return count;
}

console.log(fridayThe13ths(1986) === 1);      // 1
console.log(fridayThe13ths(2015) === 3);      // 3
console.log(fridayThe13ths(2017) === 2);      // 2

console.log(fridayThe13ths(2021) === 1);
