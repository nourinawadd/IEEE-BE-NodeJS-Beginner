function* fibonacciGenerator() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    t = b;
    b = a + b;
    a = t;
  }
}

const fibGen = fibonacciGenerator();
console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3