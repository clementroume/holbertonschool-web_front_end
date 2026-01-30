// Logs the start of the execution queue
console.log('Start of the execution queue');

// Schedules a callback function to execute after 0 milliseconds (as soon as the call stack is clear)
setTimeout(() => {
  console.log('Final code block to be executed');
}, 0);

// Loop that prints numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Logs the end of the loop execution
console.log('End of the loop printing');
