// Function that creates a classroom with a given number of students
const createClassRoom = (numbersOfStudents) => {
  // Inner function that creates a closure around the seat number
  const studentSeat = (seat) => {
    return () => {
      return seat; // This function remembers the seat number
    };
  };

  let students = []; // Array to store student seat functions

  // Loop to create seat functions for each student
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1)); // Store a function that returns the seat number
  }

  return students; // Return the array of functions
};

// Create a classroom with 10 students
const classRoom = createClassRoom(10);

console.log(classRoom[0]()); // Output: 1 (First student's seat)
console.log(classRoom[3]()); // Output: 4 (Fourth student's seat)
console.log(classRoom[9]()); // Output: 10 (Last student's seat)
