// Function that welcomes a user by their full name
const welcome = (firstName, lastName) => {
  // Create the full name by combining first and last name
  const fullName = `${firstName} ${lastName}`;

  // Inner function that displays an alert with the welcome message
  const displayFullName = () => {
    alert(`Welcome ${fullName}!`); // Uses the fullName variable from the outer function
  };

  // Immediately call the inner function to display the message
  displayFullName();
};

// Example usage:
// welcome("John", "Doe"); // Displays an alert: "Welcome John Doe!"
