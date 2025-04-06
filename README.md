# Scrimba > Building a Basketball Scoreboard

This project involved creating an interactive basketball game scoreboard based on the design provided in the following Figma file:

[Figma Design](https://www.figma.com/design/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?node-id=0-1&p=f&t=BmxJn91uex3uGiaX-0)

The primary goal was to implement the visual design and interactive functionality using core web development technologies. This project served as a practical exercise in applying the following concepts:

**Key Concepts Applied:**

* **HTML `onclick` Attribute with Parameters:** This project utilized the `onclick` attribute to trigger JavaScript functions directly from HTML elements. A key learning was the efficient use of parameters within these functions to reduce code redundancy. Instead of multiple functions for different scoring actions, parameters were passed to a single function to dynamically update the score for the appropriate team and point value.

* **CSS Flexbox for Layout:** Flexbox was employed to create a responsive and well-structured layout for the scoreboard elements, ensuring proper alignment and spacing across different screen sizes.

* **JavaScript DOM Manipulation:** JavaScript was used to dynamically update the scoreboard display based on user interactions (button clicks). This involved selecting HTML elements and modifying their content to reflect the current score.

* **Function Definition and Optimization:** The development process involved a significant focus on writing efficient and maintainable JavaScript functions. The initial approach involved multiple functions for each scoring action (e.g., one function to add 1 point to the home team, another to add 2 points, etc.). Through iterative refinement and a deeper understanding of function parameters and conditional logic (`if` statements), the codebase was optimized to use a single, versatile function to handle all scoring updates for both teams. This demonstrates an understanding of code reusability and reducing redundancy.

**Learning Journey Highlight:**

A notable part of this project was the evolution of the JavaScript scoring logic. Starting with six separate functions, the code was progressively refactored to a single function with parameters to handle different scoring events. This iterative process demonstrates problem-solving skills and a commitment to writing cleaner, more efficient code.