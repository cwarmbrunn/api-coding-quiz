// Welcome Page Elements ======================
const welcomeEl = document.querySelector("#welcome");

// Quiz Questions ===================

const quizContentEl = document.querySelector("#quiz-questions");

// High Score Elements ===================
const highScoresEl = document.querySelector("#highscores");

const highScoreBtnEl = document.querySelector("#highScoreBtn");
// Initials

var initials;

// Start button is assigned to the startButton id
const startButtonEl = document.querySelector("#startButton");

// Back button is assigned to the goBack id
const goBackButtonEl = document.querySelector("#goBackBtn");

// Clear button is assigned to the clearHighScores id

const clearScoresButtonEl = document.querySelector("#clearHighScoresBtn");

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
    correctAnswer: "Alerts",
  },

  {
    question: "What does API stand for?",
    answers: {
      a: "Application Programming Instance",
      b: "Application Program Instance",
      c: "Application Programming Interface",
      d: "None of the above",
    },
    correctAnswer: "Application Programming Interface",
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
    correctAnswer: "Event Listener",
  },
  {
    question: "What is a callback function?",
    answers: {
      a: "A function inside of an object",
      b: "A function inside of a stylesheet",
      c: "A function inside of a function",
      d: "A function inside of the DOM",
    },
    correctAnswer: "A function inside of a function",
  },
];
// Universal =======================
const timerEl = document.querySelector("#timer");

var interval;
var time = null;
var count = 90;

let scores = JSON.parse(localStorage.getItem("user")) || [];

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
  if (count <= 0) {
    count = 0;
    endQuiz();
  }
}

// Start Quiz Function - Timer Runs
function startQuiz() {
  startTimer();
}
// Check Answer Function
function checkAnswer(userInput) {
  console.log("The user has selected the answer: " + userInput);
  // Conditional for Correct Answer - Verification
  if (userInput === questions[currentQuestion].correctAnswer) {
    alert("Correct!");
    getNextQuestion();
  } else {
    alert("Incorrect! Penalty of 10 Seconds!");
    getNextQuestion();
    count -= 10;
  }
  currentQuestion++;
  getNextQuestion();
}

function getNextQuestion() {
  if (!questions[currentQuestion]) {
    return endQuiz();
  }
  // Insert Question Text - Heading 1
  document.getElementById("question-text").innerHTML =
    "<h1 class='question'> Q:" +
    " " +
    questions[currentQuestion].question +
    "</h1>";

  // Insert Options - Choice A

  document.getElementById(
    "option-1"
  ).innerHTML = `<button class='opt-1' data-ans="${questions[currentQuestion].answers.a}">${questions[currentQuestion].answers.a}</button>`;

  // Event Listener - Choice A

  document.querySelector(".opt-1").addEventListener("click", function () {
    var user_ans = this.getAttribute("data-ans");
    checkAnswer(user_ans);
  });

  // Insert Options - Choice B
  document.getElementById(
    "option-2"
  ).innerHTML = `<button class='opt-2' data-ans="${questions[currentQuestion].answers.b}">${questions[currentQuestion].answers.b}</button>`;

  // Event Listener - Choice B
  document.querySelector(".opt-2").addEventListener("click", function () {
    var user_ans = this.getAttribute("data-ans");
    checkAnswer(user_ans);
  });

  // Insert Options - Choice C
  document.getElementById(
    "option-3"
  ).innerHTML = `<button class='opt-3' data-ans="${questions[currentQuestion].answers.c}">${questions[currentQuestion].answers.c}</button>`;

  // Event Listener - Choice C
  document.querySelector(".opt-3").addEventListener("click", function () {
    var user_ans = this.getAttribute("data-ans");
    checkAnswer(user_ans);
  });

  // Insert Options - Choice D
  document.getElementById(
    "option-4"
  ).innerHTML = `<button class='opt-4' data-ans="${questions[currentQuestion].answers.c}">${questions[currentQuestion].answers.d}</button>`;

  // Event Listener - Choice D
  document.querySelector(".opt-4").addEventListener("click", function () {
    var user_ans = this.getAttribute("data-ans");
    checkAnswer(user_ans);
  });
}

// Function to End Quiz

function endQuiz() {
  clearInterval(time);
  initials = prompt("Enter Initials");
  alert(
    `Quiz has ended - congrats ${initials}! Your score was ${count} points.`
  );

  show(highScoresEl);
  hide(quizContentEl);
  hide(timerEl);
  var savedHighScores = localStorage.getItem("user");
  var scoresArray;

  if (savedHighScores === null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHighScores);
  }
  var userScore = {
    initials: initials,
    score: count,
  };
  console.log(userScore);
  scoresArray.push(userScore);

  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);

  showHighScores();
}
function showHighScores() {
  hide(timerEl);
  hide(quizContentEl);
  hide(welcomeEl);
  show(highScoresEl);
  show(highScoreBtnEl);

  var savedHighScores = localStorage.getItem("high scores");

  if (savedHighScores === null) {
    return;
  }
  console.log(savedHighScores);
  var storedHighScores = JSON.parse(savedHighScores);
  console.log(storedHighScores);

  for (var j = 0; j < storedHighScores.length; j++) {
    var newHighScore = document.createElement("p");
    newHighScore.innerHTML =
      storedHighScores[j].initials + ": " + storedHighScores[j].score;
    highScoresEl.appendChild(newHighScore);
  }
}
function restartQuiz() {
  clearInterval(time);
  count = 90;
  currentQuestion = 0;
  hide(timerEl);
  hide(quizContentEl);
  hide(highScoresEl);
  hide(highScoreBtnEl);
  show(welcomeEl);
}
// Hides Elements
function hide(element) {
  element.style.display = "none";
}

// Displays Element

function show(element) {
  element.style.display = "block";
}

if (startButtonEl) {
  // When user clicks the start button, run the following functions
  startButtonEl.addEventListener("click", function () {
    hide(welcomeEl);
    hide(highScoresEl);
    hide(highScoreBtnEl);
    show(timerEl);
    show(quizContentEl);
    startQuiz();
    getNextQuestion();
  });
}

// When user clicks the go back button, run the following function
goBackButtonEl.addEventListener("click", function () {
  restartQuiz();
});

// When user clicks the clear high scores button, run the following function
clearScoresButtonEl.addEventListener("click", function () {
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("high scores");
  highScoresEl.innerText = "High Scores Cleared!";
});
