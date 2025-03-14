// Function to count prime numbers between 2 and 100
const countPrimeNumbers = () => {
  let count = 0; // Counter for prime numbers

  // Loop through numbers from 2 to 100
  for (let i = 2; i <= 100; i++) {
    let isPrime = true; // Assume the number is prime

    // Check divisibility from 2 to i-1
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false; // If divisible, it's not prime
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

// Measure the execution time of countPrimeNumbers function
const t0 = performance.now(); // Start time
const primeNumbers = countPrimeNumbers(); // Call function
const t1 = performance.now(); // End time

const time = t1 - t0; // Compute execution time

// Log the results
console.log(`Count prime numbers from 2 to 100: ${primeNumbers}`);
console.log(
  `Execution time of printing countPrimeNumbers was ${time} milliseconds.`
);
