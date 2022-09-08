// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   for (let number = 2; number <= n/2; number ++) {
//     if (n % number === 0) return false;
//   }
//   return true;
// }
//
// function listPrimes(number) {
//   let primes = [];
//   for (num = 2; num <= number; num ++) {
//     if (isPrime(num)) primes.push(num);
//   }
//   return primes;
// }
//
// // console.log(listPrimes(933555431 / 2));
//
// // let largeNumber = 933555431
// // let halfLargeNumber = largeNumber / 2
//
// let halfLargeNumber = 10;
//
// let numberPool = []
// for (let i = 2; i <= halfLargeNumber; i ++ ) {
//   numberPool.push(i);
// }
//
// for (let index = 1; index < numberPool.length; index ++) {
//   if (numberPool[index] === 0) continue;
//   for (let factor = 2; factor <= halfLargeNumber; factor ++) {
//     console.log(`numberPool: ${numberPool[index]}`)
//     console.log(`factor: ${factor}`)
//     console.log(numberPool[index] % factor);
//     if (numberPool[index] % factor === 0) {
//       console.log('Zeroed out')
//       numberPool[index] = 0;
//       console.log(numberPool);
//       break;
//     }
//   }
// }
//
// let primes = numberPool.filter( num => num > 0);
// console.log(numberPool);

function listPrimes(endNumber) {
  let numberPool = [];
  for (let i = 2; i <= endNumber; i ++) {
    numberPool.push(i);
  }

  for (let index = 0; index < numberPool.length; index ++) {
    let factor = numberPool[index];
    for (let j = index + 1; j < numberPool.length; j ++) {
      if (numberPool[j] % factor === 0 ) {numberPool[j] = 0}
    }
    numberPool = numberPool.filter(number => number > 0);
  }
  return numberPool;
}

let largeNumber = 10;







console.log(listPrimes(largeNumber));
