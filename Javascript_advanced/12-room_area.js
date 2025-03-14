// Define an object representing room dimensions
const roomDimensions = {
  width: 50, // Room width in units
  length: 100, // Room length in units

  // Method to calculate the area of the room
  getArea() {
    return this.width * this.length; // Multiply width by length
  },
};

// Create a bound function that ensures 'this' refers to roomDimensions
const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Call the bound function and log the result
console.log(boundGetArea()); // Output: 5000
