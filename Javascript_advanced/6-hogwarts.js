// Defining a class 'studentHogwarts' to manage student scores
class studentHogwarts {
  // Private property to store the student's score
  privateScore = 0;
  // Property to store the student's name
  name = null;

  // Private method to modify the score, cannot be accessed outside the class
  #changeScoreBy(points) {
    this.privateScore += points;
  }

  // Method to set the student's name
  setName(newName) {
    this.name = newName;
  }

  // Method to reward the student by increasing the score
  rewardStudent() {
    this.#changeScoreBy(1);
  }

  // Method to penalize the student by decreasing the score
  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  // Method to get the student's name and score as a string
  getScore() {
    return this.name + ': ' + this.privateScore;
  }
}

// Creating an instance for 'Harry'
let harry = new studentHogwarts();
harry.setName('Harry'); // Setting the name to 'Harry'

// Rewarding Harry 4 times
for (let i = 0; i < 4; i++) harry.rewardStudent();

// Displaying Harry's final score
console.log(harry.getScore()); // Output: "Harry: 4"

// Creating an instance for 'Draco'
let draco = new studentHogwarts();
draco.setName('Draco'); // Setting the name to 'Draco'

// Rewarding Draco once
draco.rewardStudent();

// Penalizing Draco 3 times
for (let i = 0; i < 3; i++) draco.penalizeStudent();

// Displaying Draco's final score
console.log(draco.getScore()); // Output: "Draco: -2"
