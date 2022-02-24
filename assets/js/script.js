// Welcome Page Elements ======================
const welcomeEl = document.querySelector("#welcome");

// Start button is assigned to the startButton id
const startButtonEl = document.querySelector("#startButton");

// Connection to Quiz Questions via Window Object
var quizQuestions = window.quizQuestions;

// Submission Elements / ========================

// Submit button is assigned to the submitButton id
const submitButtonEl = document.querySelector("#submitButton");
const goBackButtonEl = document.querySelector("#goBackButton");

// User results are assigned to the results id
const userResultsEl = document.querySelector("#results");
const quizFormEl = document.querySelector("#quiz");

// High Score Page Elements

const highScoresEl = document.querySelector("#highScores");

// Universal =======================
const timerEl = document.querySelector("#timer");

//const viewScoresButton = document.querySelector("#");//
var score = 0;
var currentQ = 0;
var highScores = [];
var interval;
var time = null;
var count = 90;
// Timer Countdown Functionality

function startTimer() {
  time = setInterval(updateTimer, 1000);
}

function renderQuestion() {}
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

function showQuestions() {}

//Need to set "Penalty" Function for when question is answered wrong - 10 seconds are deducted from the timer

// Will store score to localStorage here - needs to save as a string convert to a string and then a JSON structure

// Key value pair for initial input and high score - score will be the time remaining on the clock - reference robot-gladiators

function showResults() {}

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
  hide(userResultsEl);
  startTimer();
  show(quizQuestionsEl);
});
