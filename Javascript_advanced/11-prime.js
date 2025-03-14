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

excecuteWithPerformance = (times) => {
  setTimeout(() => {
    const t0 = performance.now();
    for (let i = 0; i < times; i++) {
      countPrimeNumbers();
    }
    const t1 = performance.now();
    const time = t1 - t0;
    console.log(
      `Execution time of calculating prime numbers ${times} times was ${time} milliseconds.`
    );
  }, 0);
};

excecuteWithPerformance(100);
