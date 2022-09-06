/*
Luhn formula
check number against included check digit < appended to partial number to generate a full number
number must pass the following tests
- count from the rightmost digit, move left
  - double the value of every second digit
  - for any digit that becomes 10 or more after beginb doubled, subtract 9 from the result
    1111 becomes  2121
    8763 becomes 7733  (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
- add all the digits together
  - 1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checkSum of 6
  - 8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
- if the last digit is zero (divisible by 10 evenly) then the number is valid

input: number as string
  can include other characters besides numbers that should be ignored
return: boolean of wether the number is valid according to Luhn formula

---------------------------
// Examples
1111 >>  2121 >> 1+ 2+ 1+ 2 = 6
checkSum doesn't end in zero, so invalid

8763 >> (8*2 -9) 7 (6* 2 - 9) 3 >> 7733 >> 20
checkSum ends in zero, so valid

2323 2005 7766 3554
4343 4005 5736 6514
total is 60
ends in 0 so valid

-------------------------------
// Data structure
input string
<< clean string of all non numeric characters
- convert to array
- mutate array
- sum array >> number
output boolean

-------------------------------
// Algorithym
remove all non numeric characters from string
convert to array of characters
revers array of characters
map to array of digits
  ever second digit double
  subtract 9 if greater then 9
reduce to sum of a digits
return boolean of whether the value is evenly divisible by 10


write a function that can add a check digit to make the number valid per the Luhn formula
return the original number plus that digit
input 2323 2005 7766 355
return 2323 2005 7766 3554

-------------
// Algorithm
make copy of string with zero added to end
check if valid Luhn number
  return number string if valid
find checkSum of numberstring with zero added to end
calculate check digit using checkSum
replace zero at end with check digit
return new number string

calculate check digit
given checkSum
take last digit of number
  divide number by 10 and take remainder
check digit is 10 minus  ^ number

calculate checkSum
clean string
split
reverse
reduce to
  transform to numbers
  double if odd index
  subtract 9 if greater then 10
  add to total
return sum
*/

function checkSum(string) {
  let cleaned = string.replace(/[\D]/g,'');
  let check_sum = cleaned.split('')
                        .reverse()
                        .reduce( (total, current, index) => {
                          let num = Number(current);
                          if (index % 2 === 1) num *=2;
                          if (num > 9) num -= 9;
                          total += num;
                          return total;
                        }, 0)
  return check_sum;
}

// console.log(checkSum('1111'))

function validLuhn(string) {
  return (checkSum(string) % 10 === 0);
}

// console.log(validLuhn('lakner13234'))
// console.log(validLuhn('1111'))

// invalid
console.log(validLuhn('1111') === false);
console.log(validLuhn('11 11') === false);
console.log(validLuhn('2323 2005 7766 3553') === false);

//valid
console.log(validLuhn('8763') === true);
console.log(validLuhn('2323 2005 7766 3554') === true);

function checkDigit(checkSum) {
  return (10 - checkSum % 10);
}

// console.log(checkDigit(6));

// make copy of string with zero added to end
// check if valid Luhn number
//   return number string if valid
// find checkSum of numberstring with zero added to end
// calculate check digit using checkSum
// replace zero at end with check digit
// return new number string

function addCheckDigit(string) {
  let copy = string.slice(0);
  if (validLuhn(copy)) return string;
  let check_sum = checkSum(copy + '0');
  let check_digit = checkDigit(check_sum);
  return string + check_digit;
}

console.log('Part Two');
console.log(validLuhn('2323 2005 7766 3554'));
console.log(addCheckDigit("2323 2005 7766 355") === '2323 2005 7766 3554');
console.log(validLuhn('8763'))
console.log(addCheckDigit("876") === '8763')
console.log(validLuhn('2323 2005 7766 35535'))
console.log(addCheckDigit("2323 2005 7766 3553") === '2323 2005 7766 35535')
// console.log(validLuhn('11114'))
// console.log(addCheckDigit("1111") === '11114')
