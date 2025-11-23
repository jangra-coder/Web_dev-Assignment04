// Lab Assignment 4 - JavaScript Quiz Game
// Runs completely inside browser console

// 1. Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "Which language is used to style web pages?",
        answer: "css"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "Which company created JavaScript?",
        answer: "netscape"
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        answer: "let"
    }
];

// 2. Function to run the quiz
function runQuiz() {
    let score = 0; // 3. Score initialization

    // 4. Loop through questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // 5. User input
        let userAnswer = prompt(quizQuestions[i].question);

        // If user cancels prompt
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // 6. Normalize the input
        userAnswer = userAnswer.toLowerCase().trim();

        // 7. Check answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // 9. Display final score
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}

// 10. Run Quiz
runQuiz();
