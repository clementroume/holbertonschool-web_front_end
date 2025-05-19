# Cookies & Local Storage - Holberton School  

Welcome to the **Cookies & Local Storage** project repository! This project is part of the **Holberton School Full-Stack** curriculum, focused on mastering client-side storage techniques, including cookies, local storage, and session storage. This repository contains a series of practical exercises to understand and master client-side storage techniques.

---

## Table of Contents  

- [Description](#description)  
- [Project Structure](#project-structure)  
- [Learning Objectives](#learning-objectives)  

---

## Description  

This project explores the concepts of **Cookies**, **Local Storage**, and **Session Storage** in web development. Through various tasks, the goal is to create, read, and manipulate cookies using both vanilla JavaScript and the `js-cookie` library. In addition, the differences between local storage and session storage are examined, with a focus on efficient client-side data persistence.  

The tasks are structured progressively, starting with basic cookie handling and moving towards more complex scenarios involving data storage across sessions.  

---

## Project Structure  

The `cookies-local-storage` directory includes the following files:  

| File             | Description                                                                                       |
| ---------------- | :------------------------------------------------------------------------------------------------ |
| `0-index.html`   | Starter HTML template with two input fields (firstname and email), and two buttons for setting and displaying cookies.                    |
| `1-index.html`   | Extension of `0-index.html` with cookie expiration set to 10 days.                                |
| `2-index.html`   | Extension of `1-index.html` with a `getCookie` function to read cookie values, and an enhanced `showCookies` function displaying email and firstname. |
| `3-index.html`   | Complete login form with display logic. Includes `showForm`, `hideForm`, `deleteCookiesAndShowForm`, and `showWelcomeMessageOrForm` functions. |
| `4-index.html`   | Refactor of `3-index.html` to use `js-cookie` for all cookie manipulations. Includes CDN integration and new `setCookiesAndShowWelcomeMessage` function. |
| `5-index.html`   | Basic shopping cart application using localStorage, enabling persistent data even after closing the browser. Includes an `availableItems` array, `addItemToCart`, `createStore`, and `displayCart` functions for interactive item management. |
| `6-index.html`   | Extension of `5-index.html` replacing Local Storage with Session Storage for temporary cart data.  |
| `7-index.html`   | Advanced shopping cart system using Session Storage with features to add, remove, and clear items. Includes `getCartFromStorage`, `addItemToCart`, `removeItemfromCart`, `clearCart`, `createStore`, `displayCart`, and `updateCart` functions. |
| `src/index.js`   | Empty JavaScript file as required by the project setup.                                           |
| `package.json`   | Contains project dependencies and configuration for webpack.                                      |
| `webpack.config.js` | Webpack configuration for the project. |

---

## Learning Objectives  

The following concepts are expected to be mastered by the end of this project:  

- Understanding how to create cookies using JavaScript.  
- Setting specific configurations for cookies (expiration, path, domain).  
- Reading cookies with JavaScript.  
- Using the `js-cookie` library for efficient cookie manipulation.  
- Utilizing browser web storage (`localStorage` and `sessionStorage`).  
- Distinguishing between **local storage** and **session storage**.
- Building interactive interfaces and updating the DOM dynamically using Vanilla JavaScript.

Mastering these techniques ensures efficient client-side data management and enhances user experience by maintaining state across sessions.  
