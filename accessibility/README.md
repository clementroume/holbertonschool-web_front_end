# Accessibility - Holberton School  

Welcome to the **Accessibility** project repository! This project is part of the **Holberton School Full-Stack** curriculum, focusing on building web applications that are **inclusive** and **usable by everyone**, including people with disabilities.  

---  

## Table of Contents  

- [Description](#description)  
- [Project Structure](#project-structure)  
- [Learning Objectives](#learning-objectives)  

---  

## Description  

Web accessibility ensures that all users, regardless of disabilities, can navigate, understand, and interact with websites effectively. This project explores the fundamental principles of accessibility, including **ARIA (Accessible Rich Internet Applications), WCAG (Web Content Accessibility Guidelines), and assistive technologies**.  

The objective is to create web pages that comply with accessibility standards and provide a better user experience for individuals with **visual, auditory, motor, and cognitive impairments**.  

The project includes:  
- Analyzing the importance of accessibility in modern web development.  
- Implementing **WCAG conformance levels (A, AA, AAA)** and evaluating their impact.  
- Exploring **tools and techniques** for testing web accessibility.  
- Applying best practices in HTML and CSS to enhance accessibility.  

By following these principles, the project aims to produce **barrier-free** web applications that ensure equal access to digital content for everyone.  

---  

## Project Structure  

The `accessibility` directory includes the following files, each serving a specific purpose to improve various aspects of web accessibility:

| File                         | Description                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `00-index.html`              | Initial HTML file containing the base structure of the project.                                                     |
| `00-styles.css`              | Initial CSS file defining the base styling, including some default styles for accessibility testing.                |
| `keyboard/01-index.html`     | HTML file containing improvements to the focus behavior for keyboard accessibility in the "Works" section.          |
| `keyboard/01-styles.css`     | CSS file implementing styles for the improved focus behavior on interactive elements.                               |
| `00-article.html`            | HTML file for implementing skip links, enabling better navigation for users with screen readers or keyboard users.  |
| `skip-links/01-index.html`   | HTML file implementing the skip links functionality to skip to the primary content or navigation.                    |
| `skip-links/01-article.html` | HTML file for applying the skip links feature to the article page.                                                  |
| `skip-links/01-styles.css`   | CSS file implementing the visual styles for the skip links to ensure they are accessible and easy to spot.          |
| `fix-a11y/00-index.html`     | Starter HTML file for the accessibility contrast task, where color contrast issues are addressed.                    |
| `fix-a11y/01-index.html`     | HTML file where contrast issues are resolved by modifying body styles and ensuring sufficient color contrast.        |
| `fix-a11y/02-index.html`     | HTML file with the addition of the `<title>` element for improved navigation and SEO.                               |
| `fix-a11y/03-index.html`     | HTML file where the `lang` attribute is added to the `<html>` tag for better screen reader interpretation.            |
| `fix-a11y/04-index.html`     | HTML file where `alt` attributes are added to images for improved accessibility and screen reader usage.              |
| `fix-a11y/05-index.html`     | HTML file where form elements are properly labeled for better screen reader navigation.                              |
| `fix-a11y/06-index.html`     | HTML file where aria-labels are added to icon links for better accessibility.                                         |
| `fix-a11y/07-index.html`     | HTML file where the `user-scalable=no` meta tag is removed to allow users to zoom in and out freely.                 |
| `fix-a11y/08-index.html`     | HTML file where heading levels are adjusted for a better document structure, and landmarks are properly defined.      |
| `fix-a11y/09-index.html`     | HTML file where semantic landmark elements (header, main, nav, section, footer) are applied for better navigation.     |
| `fix-a11y/10-index.html`     | HTML file where non-list elements are transformed into proper list structures for accessibility improvement.         |

---  

## Learning Objectives  

At the end of this project, the following concepts should be clearly understood and applied:

- **The main purpose of ARIA** (Accessible Rich Internet Applications) and its appropriate usage, enhancing the accessibility of dynamic content.
- **WCAG (Web Content Accessibility Guidelines)** conformance levels (A, AA, AAA) and their impact on web development, ensuring websites are usable by all.
- **The importance of web accessibility** for users with various disabilities, helping to create more inclusive and user-friendly web experiences.
- **The best tools and techniques** for testing and improving web accessibility, including the use of **Axe**, **WAVE**, and browser extensions to identify and resolve issues.

Mastering these concepts ensures the development of **accessible, user-friendly**, and **inclusive** web applications that comply with global accessibility standards.

---
