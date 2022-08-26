function fibonacci(nth) {
  if (nth === 1 || nth === 2) return 1;
  let previous = 1;
  let current = 1;
  let next = 0;
  for (let n = 3; n <= nth; n ++) {
    next = previous + current;
    previous = current;
    current = next;
  }
  // console.log(next);
  return next;
}
console.log(fibonacci(1)  === 1) ;       // 1
console.log(fibonacci(2)  === 1) ;       // 1
console.log(fibonacci(3)  === 2) ;       // 2
console.log(fibonacci(4)  === 3) ;       // 3
console.log(fibonacci(5)  === 5) ;       // 5
console.log(fibonacci(12) === 144) ;      // 144
console.log(fibonacci(20) === 6765) ;      // 6765

console.log(fibonacci(20) === 6765);       // 6765
console.log(fibonacci(50) === 12586269025);       // 12586269025
console.log(fibonacci(75) === 2111485077978050);       // 2111485077978050
