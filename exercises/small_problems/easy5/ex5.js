// function negative(number) {
//   return (number > 0) ? -number : number;
// }

function negative(number) {
  return Math.abs(number) * -1;
}

console.log(negative(5)  === -5);     // -5
console.log(negative(-3) === -3);    // -3
console.log(negative(0)  === -0);     // -0
