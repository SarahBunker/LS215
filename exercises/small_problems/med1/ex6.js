/*
1 1 2 3 5

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

if n is 1 or 2 return 1
otherwise return F(n - 1) + F(n - 2)
*/

function fibonacci(n) {
  if (n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(1)  === 1) ;       // 1
console.log(fibonacci(2)  === 1) ;       // 1
console.log(fibonacci(3)  === 2) ;       // 2
console.log(fibonacci(4)  === 3) ;       // 3
console.log(fibonacci(5)  === 5) ;       // 5
console.log(fibonacci(12) === 144) ;      // 144
console.log(fibonacci(20) === 6765) ;      // 6765
