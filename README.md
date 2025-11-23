# Web_dev-Assignment04 Submission
# Rahul (043)

# JavaScript Quiz Game – Lab Assignment 4

## Introduction
This is my Lab Assignment 4 where I created a simple quiz game using JavaScript.  
The quiz now runs through an **HTML file**, and all logic is written inside a separate `quiz.js` file.  
When the HTML page loads, the JavaScript starts the quiz, and all prompts and alerts appear in the browser.

## What the Program Does
- Asks 5 quiz questions one by one  
- Takes answers using `prompt()`  
- Converts the answer to lowercase and trims extra spaces  
- Checks if the answer is correct  
- Shows feedback using `alert()`  
- Displays the final score at the end

## Project Structure
/project-folder
│
├── index.html → Used to run the JavaScript file
├── quiz.js → Contains the quiz program
└── README.md → This file


## How to Run the Quiz
1. Open the folder containing `index.html` and `quiz.js`.
2. Double-click on **index.html** to open it in the browser.
3. The quiz will automatically start when the page loads.  
   (Or click the button if you are using the version with a Start button.)
4. Answer the questions shown in the prompts.

## How It Works
- All questions are stored in an array of objects.
- A function `runQuiz()` contains the entire quiz logic.
- A `for` loop goes through every question.
- `toLowerCase()` and `trim()` ensure the answer is compared correctly.
- Score is counted and shown at the end.

## Files Included
- **index.html** – loads and runs the quiz
- **quiz.js** – JavaScript logic for the quiz
- **README.md** – documentation written in simple student style

## Conclusion
This assignment helped me understand arrays, loops, functions, input handling, and alerts in JavaScript.  
I also learned how to link a JavaScript file with an HTML file and run everything inside the browser.