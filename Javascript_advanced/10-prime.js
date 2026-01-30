// Function to count prime numbers between 2 and 100
const countPrimeNumbers = () => {
  let count = 0; // Counter for prime numbers

  // Loop through numbers from 2 to 100
  for (let i = 2; i <= 100; i++) {
    let isPrime = true; // Assume the number is prime

    // Check divisibility from 2 to i-1
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        // If divisible, it's not prime
        isPrime = false;
        break; // Exit inner loop early
      }
    }

    // If the number is still prime, increment the counter
    if (isPrime) {
      count++;
    }
  }

  return count; // Return total count of prime numbers
};

// Measure execution time of running countPrimeNumbers 100 times
const t0 = performance.now(); // Start timing
for (let i = 0; i < 100; i++) {
  countPrimeNumbers(); // Call function 100 times
}
const t1 = performance.now(); // End timing

const time = t1 - t0; // Compute execution time

// Log the execution time result
console.log(
  `Execution time of calculating prime numbers 100 times was ${time} milliseconds.`
);
