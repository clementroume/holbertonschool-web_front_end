// Function that displays a welcome message with the given full name
const welcomeMessage = (fullName) => {
  alert(`Welcome ${fullName}!`);
};

// Function that calls welcomeMessage with "Guillaume"
const guillaume = () => {
  welcomeMessage('Guillaume');
};

// Function that calls welcomeMessage with "Alex"
const alex = () => {
  welcomeMessage('Alex');
};

// Function that calls welcomeMessage with "Fred"
const fred = () => {
  welcomeMessage('Fred');
};

// Example usage:
// guillaume(); // Displays an alert: "Welcome Guillaume!"
// alex(); // Displays an alert: "Welcome Alex!"
// fred(); // Displays an alert: "Welcome Fred!"
