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

// Hide the Highscore Form 
// document.getElementById("highscoreForm").style.visibility = "hidden";

// Start button is assigned to the startButton id
const startButtonEl = document.querySelector("#startButton");

const SubmitButtonEl = document.querySelector("#submitBtn");
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
    correctAnswer: "Booleans",
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

//User score will be stored below -
//this will grab anything that already exists in localStorage (if there is something)
//and if there is nothing then it will set it to just an empty array
//that way we can keep old info and not overwrite it
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
  // if currentQuestion is over 4 - run endQuiz
  if (currentQuestion < 3) {
    endQuiz();
  }
  // Conditional for when timer reaches 0
  if (count === -1) {
    // Clear interval
    clearInterval(time);
    // send to highscore HTML page to add their initials and score
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
  if (currentQuestion < questions.length) {
    if (userInput === questions[currentQuestion].correctAnswer) {
      alert("Correct!");
      getNextQuestion();
    } else {
      alert("Incorrect! Penalty of 10 Seconds!");
      getNextQuestion();
      count -= 10;
    }

    // Conditional for Incorrect Answer
  } else {
    setInterval(time);
    endQuiz();
  }

  getNextQuestion();
}

function getNextQuestion() {
  if (!questions[currentQuestion]) return;
  questions[currentQuestion].question;
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
  // when the last questions is answered
  document.getElementById("highscoreForm").style.visibility = "visible";

  score = count;

  var scoreInput = document.querySelector("#score");
  var userInput = document.querySelector("#userID");

  // User variables go here
  var user = {
    // userInput: userInput.value(),
    userInput: userInput?.value,
    //called the optional chaining operator. Checks if userInput.value exists first; if it doesn't exist, we should get undefined rather than a potentially-fatal error.
    scoreInput: count,
  };

  scores.push(user);
  localStorage.setItem("user", JSON.stringify(scores));
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
    startQuiz();
    getNextQuestion();
  });
}

// Submit Scores Button
if (SubmitButtonEl) {
  SubmitButtonEl.addEventListener(
    "click",
    (window.location.href = "highscores.html")
  );
}
