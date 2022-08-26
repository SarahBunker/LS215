function reverseNumber(number) {
  let reverseString =  String(number) .split('')
                                      .reverse()
                                      .join('');
  return Number(reverseString);
}

console.log(reverseNumber(12345) === 54321);    // 54321
console.log(reverseNumber(12213) === 31221);    // 31221
console.log(reverseNumber(456)   === 654);      // 654
console.log(reverseNumber(12000) === 21);    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1)     === 1);        // 1
