// Welcome Page Elements ======================
const welcomeEl = document.querySelector("#welcome");

// Start button is assigned to the startButton id
const startButtonEl = document.querySelector("#startButton");

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

// Universal =======================
const timerEl = document.querySelector("#timer");

var score = 0;
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

function buildQuiz() {
  // Create a variable to store the user output
  const output = [];

  // For each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // Variable to store list of possible answers

    const answers = [];

    // and for each available answer ....
    for (letter in currentQuestion.answers) {
      // add an HTML radio button
      answers.push(
        `<label> <input type="radio"question${questionNumber}" class="btn" value=${letter}">${letter}:${currentQuestion.answers[letter]}</label>`
      );
    }

    // Add this question and its answers to the output

    output.push(`<div class="questions"> ${currentQuestion.question} </div>
    <div class="answers"> ${answer.join("")}</div>`);
  });

  // Finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  // gather answers container from our quiz
  const answerContainer = quizContainer.querySelector(".answers");

  let numCorrect = 0;

  // for each question

  myQuestions.forEach((currentQuestion, questionNumber) => {
    // Find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // If answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    // If answer is wrong or blank
    else {
      // Color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // Show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// On user submit, show results

submitButton.addEventListener("click", showResults);

//Need to set "Penalty" Function for when question is answered wrong - 10 seconds are deducted from the timer

// Will store score to localStorage here - needs to save as a string convert to a string and then a JSON structure

// Key value pair for initial input and high score - score will be the time remaining on the clock - reference robot-gladiators

// Create a highscores HTML?

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
  buildQuiz();
  startTimer();
});
// Questions =======================

const myQuestions = [
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
