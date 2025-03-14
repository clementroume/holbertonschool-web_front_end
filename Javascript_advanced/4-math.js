// Function that returns another function to divide a number by the firstNumber
const divideBy = (firstNumber) => {
  return (secondNumber) => {
    return secondNumber / firstNumber; // Returns the result of secondNumber divided by firstNumber
  };
};

// Function that returns another function to add a number to the firstNumber
const addBy = (firstNumber) => {
  return (secondNumber) => {
    return firstNumber + secondNumber; // Returns the sum of firstNumber and secondNumber
  };
};

// Creating functions that add specific values
const addBy100 = addBy(100); // Function that adds 100 to any given number
const addBy1000 = addBy(1000); // Function that adds 1000 to any given number

// Creating functions that divide by specific values
const divideBy10 = divideBy(10); // Function that divides any given number by 10
const divideBy100 = divideBy(100); // Function that divides any given number by 100

// Testing the functions
console.log(addBy100(20)); // Output: 120 (100 + 20)
console.log(divideBy10(20)); // Output: 2 (20 / 10)
console.log(divideBy100(200)); // Output: 2 (200 / 100)
console.log(addBy1000(20)); // Output: 1020 (1000 + 20)
