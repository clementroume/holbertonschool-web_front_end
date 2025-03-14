// Function that creates a mode-changing function with specific styles
const changeMode = (size, weight, transform, background, color) => {
  return () => {
    // Apply the provided styles to the body
    document.body.style.fontSize = size + 'px'; // Set font size
    document.body.style.fontWeight = weight; // Set font weight
    document.body.style.textTransform = transform; // Set text transformation
    document.body.style.backgroundColor = background; // Set background color
    document.body.style.color = color; // Set text color
  };
};

// Main function to set up the webpage
const main = () => {
  // Creating different mode-changing functions with predefined styles
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Creating a paragraph element and adding text to it
  const p = document.createElement('p');
  p.innerHTML = 'Welcome Holberton!';
  document.body.appendChild(p); // Append the paragraph to the body

  // Creating the "Spooky" button
  const spookyButton = document.createElement('button');
  spookyButton.innerHTML = 'Spooky'; // Set button text
  spookyButton.onclick = spooky; // Attach the spooky mode function to button click
  document.body.appendChild(spookyButton); // Append button to the body

  // Creating the "Dark mode" button
  const darkButton = document.createElement('button');
  darkButton.innerHTML = 'Dark mode'; // Set button text
  darkButton.onclick = darkMode; // Attach the dark mode function to button click
  document.body.appendChild(darkButton); // Append button to the body

  // Creating the "Scream mode" button
  const screamButton = document.createElement('button');
  screamButton.innerHTML = 'Scream mode'; // Set button text
  screamButton.onclick = screamMode; // Attach the scream mode function to button click
  document.body.appendChild(screamButton); // Append button to the body
};

// Call the main function to set up the page
main();
