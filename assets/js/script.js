// Welcome Page Elements //
const welcomeEl = document.querySelector("#welcome");

// Start button is assigned to the startButton class
const startButtonEl = document.querySelector("#startButton");

// Welcome Page Elements End //

// Quiz Input Section
const quizQuestionsEl = document.querySelector("#javaQuestions");

// Submit button is assigned to the submitButton class
const submitButtonEl = document.querySelector("#submitButton");

// Quiz Input Selection End //

// Universal //
const timerEl = document.querySelector("#timer");
//const viewScoresButton = document.querySelector("#");//
var score = 0;
var currentQuestion = 0;
var highScores = [];
var interval;
var count = 90;
// Timer Countdown Functionality

var time = setInterval(startTimer, 1000);

function startTimer() {
  // Add inner HTML to the "timer" element
  document.getElementById("timer").innerHTML =
    "<p> Time Left: " + count + " second(s) left";
  // Subtract time from countdown
  count--;
  // Conditional for when timer reaches 0
  if (count === -1) {
    // Clear interval
    clearInterval(time);
  }
}

//Need to set "Penalty" Function for when question is answered wrong - 10 seconds are deducted from the timer

function generateQuestion() {
  quizQuestionsEl.textContent = console.log(javaQuestions);
}

// Hides Elements
function hide(element) {
  element.style.display = "none";
}

// Displays Element

function show(element) {
  element.style.display = "block";
}
// Results Container
const resultsContainer = document.getElementById("results");

// Will store score to localStorage here - needs to save as a string convert to a string and then a JSON structure

// Key value pair for initial input and high score - score will be the time remaining on the clock - reference robot-gladiators

// Create a highscores HTML?

function showResults() {}

// Display quiz right away!

// When user clicks the start button, trigger startTimer function
startButtonEl.addEventListener("click", function () {
  hide(welcomeEl);
  startTimer();
  generateQuestion();
  show(quizQuestionsEl);
});

// When the submit button is clicked - show the results

/* submitButton.addEventListener("click", showResults); */
