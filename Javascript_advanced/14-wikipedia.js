// Function to create a new paragraph element and append it to the document body
const createElement = (data) => {
  const p = document.createElement('p'); // Create a <p> element
  p.textContent = data; // Set the paragraph's text content to the fetched data
  document.body.appendChild(p); // Append the paragraph to the document body
};

// Function to fetch data from Wikipedia and pass it to a callback function
const queryWikipedia = (callback) => {
  const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

  // Open a GET request to the Wikipedia API (requesting an extract of the "Stack Overflow" page)
  xhr.open(
    'GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*',
    true
  );

  // Event handler that triggers when the request state changes
  xhr.onreadystatechange = () => {
    // Check if the request is complete (readyState 4) and successful (status 200)
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText); // Parse the JSON response
      const pages = response.query.pages; // Get the "pages" object from the response
      const pageId = Object.keys(pages)[0]; // Retrieve the first page ID dynamically
      const extract = pages[pageId].extract; // Extract the summary text of the article

      callback(extract); // Pass the extracted text to the callback function
    }
  };

  xhr.send(); // Send the API request
};

// Call queryWikipedia and pass createElement as the callback function
// This will fetch the Wikipedia data and display it in the document
queryWikipedia(createElement);
