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

// Quiz Questions =======================
let currentQuestion = 0;

let questions = [
  {
    question: "Commonly used data types DO NOT include",
    answers: {
      a: "Strings",
      b: "Booleans",
      c: "Alerts",
      d: "Numbers",
      e: "None of the above",
    },
    correctAnswer: "b",
  },

  {
    question: "What does API stand for?",
    answers: {
      a: "Application Programming Instance",
      b: "Application Program Instance",
      c: "Application Programming Interface",
      d: "None of the above",
    },
    correctAnswer: "c",
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
    correctAnswer: "a",
  },
  {
    question: "What is a callback function?",
    answers: {
      a: "A function inside of an object",
      b: "A function inside of a stylesheet",
      c: "A function inside of a function",
      d: "A function inside of the DOM",
    },
    correctAnswer: "c",
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

function startQuiz() {
  startTimer();
}

//Need to set "Penalty" Function for when question is answered wrong - 10 seconds are deducted from the timer

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
});
