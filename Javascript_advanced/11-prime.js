// Function to count prime numbers from 2 to 100
const countPrimeNumbers = () => {
  let count = 0; // Counter for prime numbers

  // Loop through numbers from 2 to 100
  for (let i = 2; i <= 100; i++) {
    let isPrime = true; // Assume the number is prime

    // Check divisibility by numbers smaller than i
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        // If divisible by another number, it's not prime
        isPrime = false;
        break; // Stop the loop as soon as a divisor is found
      }
    }

    // If the number is still prime, increase the counter
    if (isPrime) {
      count++;
    }
  }

  return count; // Return the total count of prime numbers
};

// Function that executes countPrimeNumbers multiple times and measures execution time
const executeWithPerformance = (times) => {
  setTimeout(() => {
    // Record the start time
    const t0 = performance.now();

    // Execute the function countPrimeNumbers "times" times
    for (let i = 0; i < times; i++) {
      countPrimeNumbers();
    }

    // Record the end time
    const t1 = performance.now();

    // Calculate the total execution time
    const time = t1 - t0;

    // Display the result
    console.log(
      `Execution time of calculating prime numbers ${times} times was ${time} milliseconds.`
    );
  }, 0); // setTimeout with 0 delay ensures execution after synchronous tasks
};

// Call the function with 100 repetitions
executeWithPerformance(100);
