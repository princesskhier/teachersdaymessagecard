Teacher's Day Flip Card
This project is a simple, interactive Teacher's Day e-card built using HTML, CSS, and JavaScript. It features a 3D flip effect when the card is hovered over or clicked, revealing a personalized message.

Features
Interactive Flip Effect: The card flips 180 
∘
  to reveal the back when hovered over or clicked.

Accessibility: The flip functionality also works using the Enter or Space keys when the card is focused, thanks to the tabindex="0" attribute and JavaScript implementation.

Custom Styling: A vibrant, gradient background and clean, modern card styling are applied using CSS.

Dynamic Content: The heartfelt message for the teacher is stored and injected into the HTML using JavaScript.

Project Structure
File Name	Description
index.html	The main HTML file containing the structure of the card and linking to the CSS and JavaScript files.
css.css	The styling file, which handles the layout, colors, gradients, 3D perspective, and the flip animation.
script.js	The JavaScript file that manages the interactivity (click/keypress flip) and dynamically inserts the personalized message.

Export to Sheets
Key CSS Concepts
The 3D flip effect is achieved using the following CSS properties:

perspective: 1000px;: Applied to the parent container (.card-container) to give the 3D elements a sense of depth.

transform-style: preserve-3d;: Applied to the inner, rotating element (.flip-card-inner) so its children are positioned in 3D space.

backface-visibility: hidden;: Applied to both the front and back faces to hide the back of the element when it is facing away from the user.

transform: rotateY(180deg);: Used on the back face to initially flip it, and applied to the inner container on hover/click to animate the flip.

Key JavaScript Concepts
The script.js file performs two main tasks:

Flipping the Card:

It listens for a click event and a keydown event on the card element (#flipCard).

On a click, or when Enter or Space is pressed, it toggles the flipped class on the card, which triggers the CSS animation.

e.preventDefault() is used on keydown events to prevent default browser behavior (like scrolling when the spacebar is pressed).

Inserting the Message:

It defines the heartfelt message in a string variable named customMessage.

It uses document.getElementById('messageText').textContent = customMessage; to safely insert the text into the designated paragraph element on the back of the card.

Customization
To personalize the card, you can easily modify the following files:

script.js: Change the value of the customMessage variable to write a new note to the teacher.

index.html: Update the teacher's name in the <h2> tag and the student's name in the .signature paragraph on the back of the card.

css.css: Adjust the background gradients on the body, .flip-card-front, and .flip-card-back to change the card's color scheme.
