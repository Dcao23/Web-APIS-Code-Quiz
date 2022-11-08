var questions = [
{
question: "What is used to run the same code over and over again, each with a different value?",
choices: ["A. console logs", " B. element selector ", " C. For loops ", " D. If statements"],
correctAnswer: "C. For loops",
},
{
question: "What is used to access an HTML element by id?",
choices: ["A. querySelector ", "B. global scope ", "C. getElementById", "D. targetElement"],
correctAnswer: "C. getElementById",
},
{
question: "When using a return statement, what happens to the function?",
choices: ["A. the function returns new variables", "B. the function will stop executing", "C. the function returns the existing variables", "D. the function will continue to run"],
correctAnswer: "B. the function will stop executing",
},
{
question: "How do you call a function?",
choices: ["A. var.callfunction();", "B. function.call();", "C. function();", "D. callfunction();"],
correctAnswer: "C. function();",
},
{
question: "Where can you find the code in the browser?",
choices: ["A. in the elements tab", "B. in the console tab", "C. in the sources tab", "D. in VSC"],
correctAnswer: "A. in the elements tab",
},
{
question: "What is used to add a function to a button?",
choices: ["A. addButton.function()", "B. addfunctionlistener()", "C. addEventListener()", "D. addButtonListener()"],
correctAnswer: "C. addEventListener()",
},
{
question: "What kind of variable can be accessed by any function?", 
choices: ["A. an array", "B. global scope", "C. target.all", "D. variableAll"],
correctAnswer: "B. global scope",
},
{
question: "Where can we find a variable within a local scope?",
choices: ["A. in the console log", "B. outside the function", "C. in the HTML index", "D. within a function"],
correctAnswer: "D. within a function",
},
{
question: "A special variable that can hold more than one value is: ",
choices: ["A. local scope", "B. an array", "C. a string", "D. for loop"],
correctAnswer: "B. an array",
},
{
question: "Which operator represents equal value and equal type?",
choices: ["A. ==", "B. ===", "C. !=", "D. &&"],
correctAnswer: "B. ===",
},
]

var timerEl = document.querySelector(".timer");
var startBtn = document.querySelector(".startbtn");
var questionsEl = document.querySelector(".displayQ");
var choice = document.querySelector(".a");
var choice = document.querySelector(".b");
var choice = document.querySelector(".c");
var choice = document.querySelector(".d");
var timeLeft = 20;

// Create a timer function
function startTimer() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft + " seconds left until the next question";
    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// Create a start question function
function startQuiz() {
    startTimer();
    retreiveQuestions();
    retreiveAnswers();
};

function retreiveQuestions() {
  for (i = 0; i < questions.length; i++) {
  questionsEl.textContent = questions[i];
  }
};

// The buttons should hold a data-attribute if the answer is correct or incorrect
function retreiveAnswers() {
  for (let i = 0; i < choice.length; i++) {
  choice.textContent = choice[i];
  }
// create for loop, add question choices, create a button for each choice, choiceEl.textContent = choices[i]; append to button div
};

// Choosing the right answer displays correct, choosing the wrong answer displays incorrect
function checkAnswer() {
  // if statement for correct answer choices, else if wrong timeLeft--
}

function correct() {
  nextQuestion
};

function incorrect() {
  timeLeft--;
}

function gameOver() {
  // var score =
// Save initials & render score
// Reset page
}

startBtn.addEventListener("click", startQuiz);