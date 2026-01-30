// Function to process payment
const processPayment = (amount) => {
  console.log(`Collecting payment of ${amount}`);
};

// Function to process an order
const processOrder = (orderId, amount) => {
  console.log(`${orderId} is being processed`); // Log order start
  processPayment(amount); // Call function to process payment
  console.log(`${orderId} has been fully processed`); // Log order completion
};

// Start of execution
console.log('Processing orders');

// Process multiple orders
processOrder(12321, 10.99);
processOrder(12322, 12.99);
processOrder(12323, 15.0);

// End of execution
console.log('All the orders have been processed');
