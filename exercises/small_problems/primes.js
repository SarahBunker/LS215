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

// ----------------------------------------

function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  for (let number = 2; number <= n/2; number ++) {
    if (n % number === 0) return false;
  }
  return true;
}

//-------------------------------------------
// Given a positive number n find the prime factor decomposition of n
//
// input number
// output string in form:
//    "(p1**n1)(p2**n2)...(pk**nk)"

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

function nextPrime(currentPrime, listOfPrimes) {
  let index = listOfPrimes.indexOf(currentPrime);
  return listOfPrimes[index + 1];
}

function primeFactors(n){
  let factors = {};
  let currentPrime = 2;
  let listOfPrimes = listPrimes(n/2);

  while (n > 1) {
    while( n % currentPrime === 0) {
      console.log(factors);
      if (!factors[currentPrime]) factors[currentPrime] = 0;
      factors[currentPrime] += 1;
      n = n / currentPrime;
    }
    currentPrime = nextPrime(currentPrime, listOfPrimes);
  }
  console.log(factors);
  return Object.entries(factors).reduce( (result, [p, n]) => {
    result += (n > 1)? `(${p}**${n})` : `(${p})`;
    return result;
  }, "")
}

console.log( primeFactors(6) === '(2)(3)');
console.log( primeFactors(12) === '(2**2)(3)');
// Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")
