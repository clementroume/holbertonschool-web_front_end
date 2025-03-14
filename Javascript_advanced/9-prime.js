const countPrimeNumbers = () => {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
  return count;
};

const t0 = performance.now();
const primeNumbers = countPrimeNumbers();
const t1 = performance.now();

const time = t1 - t0;
console.log(`Count prime numbers from 2 to 100: ${primeNumbers}`);
console.log(
  `Execution time of printing countPrimeNumbers was ${time} milliseconds.`
);
