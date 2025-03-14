// Object representing the stock of items available
const stock = {
  macbook: 2, // 2 MacBooks in stock
  iphone: 4, // 4 iPhones in stock
};

// Function to process the payment if the item is available
const processPayment = (itemName) => {
  const key = itemName.toLowerCase(); // Convert item name to lowercase for consistency
  stock[key] -= 1; // Reduce stock by 1
  console.log(`Payment is being processed for item ${itemName}`);
};

// Function to handle the error when an item is out of stock
const processError = (itemName) => {
  console.log(`No more ${itemName} in stock`);
  console.log(`Payment is not being processed`);
};

// Function to verify stock and process the order accordingly
const processOrder = (itemName, callbackPayment, callbackError) => {
  console.log(`Verifying the stock of ${itemName}`);

  const key = itemName.toLowerCase(); // Convert item name to lowercase for lookup

  // Check if the item exists in stock
  if (stock.hasOwnProperty(key)) {
    if (stock[key] > 0) {
      callbackPayment(itemName); // If stock is available, process payment
    } else {
      callbackError(itemName); // If stock is empty, trigger error callback
    }
  } else {
    console.log(`Item ${itemName} is not offered`);
    console.log(`Payment is not being processed`);
  }
};

// Main function to prompt user input and process the order
const main = () => {
  const userInput = prompt(
    'Please enter the item you would like to purchase (Macbook, iPhone)'
  );
  processOrder(userInput, processPayment, processError);
};

main(); // Start the program
