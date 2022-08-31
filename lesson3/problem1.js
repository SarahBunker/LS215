/*
Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:
  less than 10 digits, assume that it is a bad number.
  is 10 digits, assume that it is good.
  is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
  11 digits and the first number is not 1, then it is a bad number.
  is more than 11 digits, assume that it is a bad number.
  For bad numbers, just a return a string of 10 0s.
  input can contain other special characters such as spaces, dash, dot, and parentheses >> ignore

input dirty number string
output clean number string
  only include numbers
  output return 10 0's if bad number

------------------------------
// Examples
// bad numbers

1234 // less then 10 digits
22222222222 // 11 digits and first number is not a 1
111111111111  // more then 11 digits

12+34 // less then 10 digits
22(22)2222222 // 11 digits and first number is not a 1
1111-111-11.111  // more then 11 digits

// good numbers

1234567891   // 10 numbers
12345678912  // 11 numbers and first number is a one

(123)456-7891   // 10 numbers
1.234.567.8912  // 11 numbers and first number is a one

--------------------------------
//Data Structure
input string
output string

---------------------------------
// algorithym
remove all non numeric functions
set bad number to 10 zeros in string
if string length === 10 return number string
if string length === 11 and first character is a one
  return last 10 characters
else
  if string length > 11 return bad number
  if string length < 10 return bad number
  string was length 11 but first character was not a 1.
*/

function cleanPhoneNumbers(string) {
  string = string.replace(/[^\d]/g, '');
  if (string.length === 10) return string;
  if (string.length === 11 && string[0] === '1') return string.slice(1);
  return '0000000000'
}

let dirtyNumber = '03434.,sed12';
console.log(cleanPhoneNumbers(dirtyNumber))
// examples
// bad numbers
console.log(cleanPhoneNumbers('1234') === '0000000000');// less then 10 digits
console.log(cleanPhoneNumbers('22222222222') === '0000000000');  //11 digits and first number is not a 1
console.log(cleanPhoneNumbers('111111111111') === '0000000000');  // more then 11 digits
// special characters
console.log(cleanPhoneNumbers('12+34 ') === '0000000000');
console.log(cleanPhoneNumbers('22(22)2222222') === '0000000000');
console.log(cleanPhoneNumbers('1111-111-11.111') === '0000000000');

// good numbers
console.log(cleanPhoneNumbers('1234567891') === '1234567891'); // 10 numbers
console.log(cleanPhoneNumbers('12345678912') === '2345678912'); // 11 numbers, first number is a one, trim 1 in return
console.log(cleanPhoneNumbers('(123)456-7891') === '1234567891'); // 10 numbers
console.log(cleanPhoneNumbers('1.234.567.8912') === '2345678912'); // 11 numbers, first number is a one, trim 1 in return
// console.log(cleanPhoneNumbers() === '');
// console.log(cleanPhoneNumbers() === '');
// console.log(cleanPhoneNumbers() === '');
