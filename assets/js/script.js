// Welcome Page Elements ======================
const welcomeEl = document.querySelector("#welcome");

// Controls Button Assignments ===================

/*
const restartBtn = document.getElementById('restart);
const prevBtn = document.getElementById('prev);
const nextBtn = document.getElementById('next');
const userScore = document.getElementById('user-score);
const questionText = document.getElementById('question-text')
*/

// Start button is assigned to the startButton id
const startButtonEl = document.querySelector("#startButton");

//

const Opt1El = document.querySelector(".opt-1");
const Opt2El = document.querySelector(".opt-2");
const Opt3El = document.querySelector(".opt-3");
const Opt4El = document.querySelector(".opt-4");

// Quiz Questions =======================
let currentQuestion = 0;

let questions = [
  {
    question: "Commonly used data types DO NOT include?",
    answers: {
      a: "Strings",
      b: "Booleans",
      c: "Alerts",
      d: "Numbers",
    },
    correctAnswer: "b: Booleans",
  },

  {
    question: "What does API stand for?",
    answers: {
      a: "Application Programming Instance",
      b: "Application Program Instance",
      c: "Application Programming Interface",
      d: "None of the above",
    },
    correctAnswer: "c: Application Programming Interface",
  },
  {
    question:
      "What is the observation of a user behavior, such as a click, called?",
    answers: {
      a: "Event Listener",
      b: "Event Attribute",
      c: "Event ",
      d: "None of the Above",
    },
    correctAnswer: "a:Event Listener",
  },
  {
    question: "What is a callback function?",
    answers: {
      a: "A function inside of an object",
      b: "A function inside of a stylesheet",
      c: "A function inside of a function",
      d: "A function inside of the DOM",
    },
    correctAnswer: " c: A function inside of a function",
  },
];
// Universal =======================
const timerEl = document.querySelector("#timer");

var interval;
var time = null;
var count = 90;
// Timer Countdown Functionality

function startTimer() {
  time = setInterval(updateTimer, 1000);
}

// Function to update timer incrementally
function updateTimer() {
  // Add inner HTML to the "timer" element
  document.getElementById("timer").innerHTML =
    "<p> Time Left: " + count + " second(s) left</p>";
  // Subtract time from countdown
  count--;

  // Conditional for when timer reaches 0
  if (count === -1) {
    // Clear interval
    clearInterval(time);
  }
}

// Start Quiz Function - Timer Runs
function startQuiz() {
  startTimer();
}
// Check Answer Function
function checkAnswer() {
  // Conditional for Correct Answer - Verification
  if (
    (questions[currentQuestion].answers =
      questions[currentQuestion].correctAnswer)
  ) {
    alert("Correct!");

    // Increase Question
    currentQuestion++;

    // Conditional for Incorrect Answer
  } else if (
    questions[currentQuestion].answers !=
    questions[currentQuestion].correctAnswer
  ) {
    alert("Incorrect Answer"); // Penalty of 10 Seconds
  }
}

function getNextQuestion() {
  questions[currentQuestion].question;

  // Insert Question Text - Heading 1
  document.getElementById("question-text").innerHTML =
    "<h1 class='question'> Q:" +
    " " +
    questions[currentQuestion].question +
    "</h1>";

  // Insert Options - Choice A

  document.getElementById("option-1").innerHTML =
    "<button class='opt-1'>" +
    questions[currentQuestion].answers.a +
    "</button>";

  // Insert Options - Choice B
  document.getElementById("option-2").innerHTML =
    "<button class='opt-2'>" +
    questions[currentQuestion].answers.b +
    "</button>";

  //Insert Options - Choice C
  document.getElementById("option-3").innerHTML =
    "<button class='opt-3'>" +
    questions[currentQuestion].answers.c +
    "</button>";

  // Insert Options - Choice D
  document.getElementById("option-4").innerHTML =
    "<button class ='opt-4'>" +
    questions[currentQuestion].answers.d +
    "</button>";
}

// Will store score to localStorage here - needs to save as a string convert to a string and then a JSON structure

// Key value pair for initial input and high score - score will be the time remaining on the clock - reference robot-gladiators

// Hides Elements
function hide(element) {
  element.style.display = "none";
}

// Displays Element

function show(element) {
  element.style.display = "block";
}
// When user clicks the start button, run the following functions
startButtonEl.addEventListener("click", function () {
  hide(welcomeEl);
  startQuiz();
  getNextQuestion();
});

Opt1El.addEventListener("click", function () {
  checkAnswer();
});
