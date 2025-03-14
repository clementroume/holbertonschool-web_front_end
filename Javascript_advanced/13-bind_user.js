// Define an object representing a user with various properties
const user = {
  hobby: 'Calligraphy',
  favoriteSport: 'Hockey',
  astrologicalSign: 'Aries',
  firstName: 'Guillaume', // User's first name
  lastName: 'Johns', // User's last name
  location: 'Netherlands', // User's location
  occupation: 'Engineer', // User's occupation
};

// Function that logs a welcome message including the user's first name and occupation
function logWelcomeUser(welcomeString) {
  console.log(
    `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
  );
}

// Bind the function to the user object so 'this' refers to 'user'
const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Call the bound function with a welcome message
bindLogWelcomeUser('Welcome'); // Output: "Welcome, Guillaume. Your occupation is: Engineer"
