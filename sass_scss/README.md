# Sass & Scss - Holberton School

Welcome to the **Sass & Scss** project repository! This project is part of the **Holberton School Web Front-End** curriculum, focused on leveraging Sass features to enhance CSS styling capabilities and improve code maintainability.

---

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Learning Objectives](#learning-objectives)

---

## Description

This project introduces **Sass**, a CSS preprocessor, and its core features like variables, mixins, imports, loops, extends, and media queries. Each task in the repository is designed to deepen your knowledge of Sass, enabling you to create more efficient, maintainable, and scalable stylesheets. Through this project, you'll gain hands-on experience in writing Sass & Scss, exploring advanced features, and applying them to real-world front-end challenges.

The tasks start simple, demonstrating fundamental concepts such as variable usage and nesting, and gradually introduce more complex concepts like loops, conditionals, media queries, and custom functions. You'll also explore powerful Sass features such as `@extend`, `@import`, `@mixin`, and more to enhance CSS functionality.

---

## Project Structure

The `sass_scss` directory includes the following files:

| File                     | Description                                                                                                                                                        |
| ------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `0-debug_log.scss`       | Sass file demonstrating the use of `@debug` to print "Hello world" in the debug output.                                                                            |
| `1-color_variable.scss`  | Sass file utilizing a variable to define and reuse a color (`$color`) for the text color in the `<body>` and `<p>` tags.                                           |
| `2-color_variables.scss` | Sass file defining two color variables (`$text-color` and `$background-color`) and applying them to the text and background colors of various elements.            |
| `3-nested_tag.scss`      | Sass file using nested selectors to manage margins for `<body>` and `<p>` tags. Demonstrates the power of nesting in Sass for cleaner, hierarchical code.          |
| `4-nested_class.scss`    | Sass file illustrating the use of nested classes. It defines a `.red` class within the `body` element, which changes the text color to red.                        |
| `5-nested_child.scss`    | Sass file using the `& >` operator to target only direct child elements of the `<body>` tag, applying a red color to the `.red` class.                             |
| `6-nested_hover.scss`    | Sass file showing how to change the color of a button when hovered using the `&:hover` selector for nested states.                                                 |
| `7-nested_deeper.scss`   | Sass file using nested selectors to define font sizes for `<body>`, `<h1>`, and nested `.smaller` classes, showcasing deeper nesting.                              |
| `8-mixin_margins.scss`   | Sass file applying custom margin values using a mixin (`@mixin margin`). The mixin is included in `body` and `div` with different values.                          |
| `9-extend_list.scss`     | Sass file demonstrating the use of `@extend` to share the `.info` class's properties across `.success` and `.warning` classes, reducing redundancy.                |
| `10-import_colors.scss`  | Sass file showing how to use `@import` to bring in color variables from an external file (`10-colors.scss`) and apply them to different classes.                   |
| `11-loop_photos.scss`    | Sass file using the `@each` directive to loop over a list of names and generate classes for background images based on the names.                                  |
| `12-loop_header.scss`    | Sass file using the `@for` loop to dynamically generate font sizes for `<h1>` to `<h6>` tags based on the loop index.                                              |
| `100-loop_col.scss`      | Sass file demonstrating how to use a `@for` loop to create classes (`col-1`, `col-2`, etc.) with different widths, providing a flexible column system.             |
| `101-media_query.scss`   | Sass file utilizing a media query to change the font size of `<h1>` tags based on the screen width. Demonstrates the use of media queries in Sass.                 |
| `102-media_query.scss`   | Sass file with multiple media queries, adjusting the font size of `<h1>` tags based on different screen widths, and targeting a `.small` class with color changes. |
| `103-sort_strings.scss`  | Sass file showcasing a custom sorting function using a comparison function (`_str-compare`) and a quick-sort algorithm to sort a list of strings.                  |

---

## Learning Objectives

By the end of this project, the following concepts should be clearly understood and explainable without external assistance:

- What Sass means and how it differs from plain CSS.
- How to write Sass/Scss files and use them in web projects.
- The differences between Sass and Scss syntax and when to use each.
- How to declare and use variables in Sass.
- The power of nesting in Sass and how it helps organize styles.
- How to use `@import`, `@use`, and `@forward` to modularize Sass code.
- How to create reusable blocks of styles with `@mixin` and `@include`.
- How to extend styles across multiple selectors with `@extend`.
- The use of Sass functions and operators to handle calculations and logic.
- How to work with loops (`@for`, `@each`) to generate dynamic styles based on data.

Exploring Sass through this project helps streamline CSS styling workflows and make them more maintainable. By leveraging advanced Sass features, developers can write cleaner, more modular, and reusable stylesheets, improving both development efficiency and the performance of web applications.

---
