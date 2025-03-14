// Global variable accessible throughout the script
var globalVariable = 'Welcome';

const outer = () => {
  // Displays the global variable
  alert(globalVariable);

  // Local variable defined inside outer()
  const course = 'Holberton';

  const inner = () => {
    // Accesses both the global variable and outer()'s local variable
    alert(`${globalVariable} ${course}`);

    // Local variable defined inside inner()
    const exclamation = '!';

    const inception = () => {
      // Accesses variables from outer(), inner(), and the global scope
      alert(`${globalVariable} ${course}${exclamation}`);
    };

    // Call the deepest function in the closure chain
    inception();
  };

  // Call the inner function
  inner();
};

// Call the outer function
outer();
