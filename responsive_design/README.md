# Responsive Web Design - Holberton School

Welcome to the **Responsive Web Design** project repository! This project is part of the **Holberton School Full-Stack** curriculum, focused on creating websites that adapt seamlessly to various screen sizes and devices.

---

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Learning Objectives](#learning-objectives)

---

## Description

This project introduces the core principles of **Responsive Web Design**. It focuses on the use of **CSS media queries**, **mobile-first design**, **responsive typography**, and other techniques to ensure websites are visually appealing and function properly across all devices.

Through a series of hands-on tasks, one will learn how to make layouts flexible, design for various breakpoints, and optimize the user experience on desktops, tablets, and mobile devices. By the end of the project, a solid foundation in responsive design will be built, preparing one to tackle the challenges of modern web development.

---

## Project Structure

The `responsive_web_design` directory includes the following files:

| File               | Description                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `00-index.html`    | Starting HTML file for the project, containing the basic structure and initial content.                                                                            |
| `00-styles.css`    | Starting CSS file for the project, linked to the HTML file and containing initial styles.                                                                          |
| `01-index.html`    | No changes.                                                                                                                                                        |
| `01-styles.css`    | Fixes the hero banner background by updating the `background-position`, `background-size`, and `min-height` properties as specified.                               |
| `02-index.html`    | No changes.                                                                                                                                                        |
| `02-styles.css`    | CSS file updating `.container` by changing `width` to `max-width` to make the container flexible.                                                                  |
| `02-1-index.html`  | No changes.                                                                                                                                                        |
| `02-1-styles.css`  | CSS file with media queries added for different screen sizes and fixes for images, grid layout, and navbar.                                                        |
| `03-index.html`    | HTML file with updated `<img>` tags, using `srcset` for responsive images at various resolutions.                                                                  |
| `03-styles.css`    | No changes.                                                                                                                                                        |
| `04-index.html`    | HTML file updated with a hidden input checkbox (`menu-btn`), a label (`menu-icon`), and a span (`navicon`) for a clickable mobile navigation icon.                 |
| `04-styles.css`    | CSS file updated to style the mobile navigation, including `flex-direction` for column layout, `max-height` for animation, and global variable overrides.          |
| `05-index.html`    | No changes.                                                                                                                                                        |
| `05-styles.css`    | CSS file updated to create a responsive hamburger icon using the `menu-icon` and `navicon` classes with pseudo-elements for the design and animations.             |
| `06-index.html`    | No changes.                                                                                                                                                        |
| `06-styles.css`    | CSS file updated to add behavior based on the `menu-btn` state, implementing dynamic menu display, transitions, and additional responsive adjustments.             |
| `07-index.html`    | No changes.                                                                                                                                                        |
| `07-styles.css`    | CSS file updated to implement responsive typography using media queries to adjust `font-size` in the `html` selector for different screen sizes.                   |
| `08-index.html`    | No changes.                                                                                                                                                        |
| `08-styles.css`    | CSS file updated to enhance the "Works" section with a media query targeting `max-width: 767px`, styling `card-inner`, `card-title`, and links within the section. |
| `09-index.html`    | No changes.                                                                                                                                                        |
| `09-styles.css`    | CSS file updated to enhance the "Footer" section with a media query targeting `max-width: 767px`, styling `.social.nav`and `.footer-nav`.                          |
| `10-index.html`    | HTML file updated to add the `article-page` class to the `body` tag.                                                                                               |
| `10-styles.css`    | CSS file updated to fix the top header background in the `section-hero` class when inside the `article-page` class.                                                |
| `100-article.html` | New HTML file provided for making the article page responsive.                                                                                                     |
| `100-styles.css`   | CSS file updated with responsive styles for the `post` and `post-comments` sections using media queries for max-width: 767px.                                      |

---

## Learning Objectives

By the end of this project, the following concepts should be clearly understood and explainable without external assistance:

- The definition, importance, and principles of **Responsive Web Design**.
- How to implement **mobile-first design** and why it is a best practice in CSS.
- The role and syntax of **CSS media queries** for adapting styles to different screen sizes and devices.
- Effective use of flexible CSS units (`%`, `em`, `rem`, `vw`, `vh`) to create responsive layouts.
- Techniques for optimizing typography to ensure readability across various devices, using responsive font scaling.
- Methods for creating, styling, and enhancing responsive navigation menus, including hamburger menus for mobile devices.
- The difference between **responsive design** and **adaptive design**, and the appropriate use cases for each approach.
- Strategies for optimizing images through responsive breakpoints, `srcset`, and `sizes` attributes.
- The importance of defining and managing breakpoints effectively to create seamless user experiences.
- Techniques for making page sections, such as the hero banner, works section, and footer, responsive and visually appealing.
- Utilization of `checkbox` and CSS to create interactive behavior, such as toggling menus, without JavaScript.
- Best practices for maintaining consistency and performance while implementing responsive design across a project.

Mastery of these concepts enables the creation of web applications that are visually appealing, functional, and accessible on any device, ensuring a high-quality user experience.

---
