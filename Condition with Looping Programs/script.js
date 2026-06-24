const quiz = [
{
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyper Transfer Markup Language",
    d: "None of these",
    correct: "a"
},
{
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "CSS",
    c: "Python",
    d: "Java",
    correct: "b"
},
{
    question: "Which keyword declares a variable in JavaScript?",
    a: "string",
    b: "int",
    c: "var",
    d: "float",
    correct: "c"
},
{
    question: "Which company developed JavaScript?",
    a: "Google",
    b: "Microsoft",
    c: "Apple",
    d: "Netscape",
    correct: "d"
},
{
    question: "Which symbol is used for comments in JavaScript?",
    a: "//",
    b: "##",
    c: "<!-- -->",
    d: "**",
    correct: "a"
}
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

function loadQuestion() {
    let q = quiz[currentQuestion];

    document.getElementById("question").innerText = q.question;
    document.getElementById("optionA").innerText = q.a;
    document.getElementById("optionB").innerText = q.b;
    document.getElementById("optionC").innerText = q.c;
    document.getElementById("optionD").innerText = q.d;

    // Remove selected color when new question loads
    document.querySelectorAll(".option").forEach(button => {
        button.classList.remove("selected");
    });

    selectedAnswer = "";
}

function checkAnswer(answer) {
    selectedAnswer = answer;

    // Remove previous selection
    document.querySelectorAll(".option").forEach(button => {
        button.classList.remove("selected");
    });

    // Highlight selected answer
    if (answer === "a") {
        document.getElementById("optionA").classList.add("selected");
    } else if (answer === "b") {
        document.getElementById("optionB").classList.add("selected");
    } else if (answer === "c") {
        document.getElementById("optionC").classList.add("selected");
    } else if (answer === "d") {
        document.getElementById("optionD").classList.add("selected");
    }
}

function nextQuestion() {
    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === quiz[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML = `
            <h1>Quiz Completed 🎉</h1>
            <h2>Your Score: ${score}/${quiz.length}</h2>
        `;
    }
}

loadQuestion();