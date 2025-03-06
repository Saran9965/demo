const quizData = [
    { question: "Which of the following statements about Python is true?",options:['case-sentive','not suppot oops','cannot handle large dataset','compiled language'],answer:'case-sentive'},
    { question: "What is the correct extension for Python files?",options:['.py','.python','.pt','.pyt'],answer:'.py'},
    { question: "Which keyword is used to exit a loop in Python?",options:['stop','exit','break','return'],answer:'break'},
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
    { question: "What is 5 + 3?", options: ["5", "8", "10", "15"], answer: "8" },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
  
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}
loadQuestion();



