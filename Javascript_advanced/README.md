# JavaScript Advanced - Holberton School

Welcome to the **JavaScript Advanced** project repository! This project is part of the **Holberton School Full-Stack** curriculum, focusing on advanced JavaScript concepts such as closures, callbacks, binding, execution stack, and AJAX requests.

---

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Learning Objectives](#learning-objectives)

---

## Description

This project explores **advanced JavaScript** topics, such as closures, callbacks, and the use of **`setTimeout`** and **`bind`** to manage execution order and maintain context (`this`). It also focuses on interacting with APIs via **AJAX** (using `XMLHttpRequest`).

The tasks in this project focus on:

- Understanding the **execution stack** and how to manage execution time.
- Manipulating the **execution order** with **setTimeout** and other asynchronous methods.
- Understanding **closure** and how **`bind`** can affect the `this` context.
- Making **AJAX** calls to external APIs and handling responses with callbacks.

The project gives a deeper understanding of how JavaScript operates behind the scenes and how to optimize and manage asynchronous behavior.

---

## Project Structure

The `Javascript_advanced` directory includes the following files:

| File                    | Description                                                                                                                                                                                                                                                                   |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0-welcome.js`          | Defines a function `welcome` that takes two arguments, constructs a `fullName`, and displays an alert message with the full name. Demonstrates the use of lexical scoping and nested functions.                                                                               |
| `1-nested_functions.js` | Creates a series of nested functions that demonstrate closure and scope chain. The `outer` function alerts the global variable, and the `inner` function accesses both global and local variables. Demonstrates how closures allow inner functions to access outer variables. |
| `2-function_me.js`      | Defines a closure through the `welcomeMessage` function that accepts a `fullName` argument and displays a welcome message. Uses closure to create separate contexts for different names.                                                                                      |
| `3-classrooms.js`       | Defines a function `createClassRoom` which creates a classroom with a given number of students. Inside, it defines `studentSeat` to return the seat number for each student as a closure.                                                                                     |
| `4-math.js`             | Defines two functions: `divideBy` and `addBy`, which return closures performing division and addition operations respectively. Demonstrates creating closures to encapsulate logic with specific parameters.                                                                  |
| `5-mode.js`             | Defines a `changeMode` function that changes the page's style (font size, weight, text transform, background color, and text color) using closures. The `main` function offers theme options like "Spooky", "Dark mode", and "Scream mode" using closures.                    |
| `6-hogwarts.js`         | Defines a `studentHogwarts` class with private methods and properties, where the score is updated using a private method. Demonstrates encapsulation and using closures to manage state within an object.                                                                     |
| `7-timeout.js`          | Logs the start of the execution queue, runs a loop printing numbers from 1 to 100, and uses `setTimeout` to schedule a code block to be executed after the loop. This demonstrates JavaScript's event loop and stack order behavior.                                          |
| `8-payments.js`         | Demonstrates stack order in functions by processing multiple orders, logging each step in the process including payment collection, and processing order completion.                                                                                                          |
| `9-prime.js`            | Implements a function to count prime numbers between 2 and 100, and uses the performance API to measure the execution time of the function. Logs the number of prime numbers and execution time.                                                                              |
| `10-prime.js`           | Reuses the function `countPrimeNumbers` from `9-prime.js`, and executes it 100 times. Measures and logs the time taken to execute the function 100 times.                                                                                                                     |
| `11-prime.js`           | Reuses the function `countPrimeNumbers` from `10-prime.js`, and executes it 100 times. Uses `setTimeout` to defer execution to the end of the execution stack, logging the total execution time.                                                                              |
| `12-room_area.js`       | Defines an object `roomDimensions` with properties for `width`, `length`, and a method `getArea`. Creates a bound version of `getArea` using `bind` to ensure proper context.                                                                                                 |
| `13-bind_user.js`       | Demonstrates the use of **`bind`** to ensure the correct context (`this`) when invoking a function that belongs to an object. This is particularly useful when working with event handlers and callbacks.                                                                     |
| `14-wikipedia.js`       | Defines `createElement` to create and append a paragraph element, and `queryWikipedia` to fetch Stack Overflow data from Wikipedia using XMLHttpRequest. The `createElement` function is passed as a callback to display the data.                                            |
| `100-stock.js`          | Manages an online store's stock, processing payments and handling errors with callbacks. The program verifies the stock and processes or denies orders based on availability.                                                                                                 |

---

## Learning Objectives

By the end of this project, the following concepts should be mastered:

- Understanding and managing the **execution stack** and **timing** of JavaScript functions.
- Using **`setTimeout`** to manipulate the order of execution in the call stack.
- Implementing **closures** and **binding** functions to ensure the correct context (`this`).
- **Making AJAX requests** using vanilla JavaScript to interact with external APIs, and **using callbacks** to handle asynchronous data retrieval and processing effectively.
- Passing functions as **callbacks** to handle asynchronous data retrieval and processing.

These tasks will enhance your skills in advanced JavaScript and prepare you for building complex web applications that require asynchronous data handling and optimized function execution.
