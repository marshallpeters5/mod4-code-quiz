var startButton = document.getElementById('start');
var timerEl = document.getElementById('timer');
var questionContent = document.getElementById('question-content');
var questionEl = document.getElementById('question');
var answerButtonEl = document.querySelectorAll('.answer-btn');
var introText = document.getElementById('intro');
var highScore = document.getElementById('high-score')
var currentQuestion;
var timeLeft = 120
var correctCount = 0
var incorrectCount = 0

// counts down a timer, when the timer hits zero, 'game over is displayed'
function countdown() {
    timerEl.textContent = "Time Remaining: " + 120
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time Remaining: " + timeLeft
        if(timeLeft <= -1){
          clearInterval(timeInterval)
          timerEl.textContent = "Game Over"
          displayMessage();
        }
    }, 1000);
  }

// mostly working as intended, shows the question content
function showQuestion(question, questionContent) {
  questionEl.textContent = question.question;
  document.getElementById('0').textContent = question.answers[0];
  document.getElementById('1').textContent = question.answers[1];
  document.getElementById('2').textContent = question.answers[2];
  document.getElementById('3').textContent = question.answers[3];
}

function nextQuestion() {
  if (currentQuestion > 2) {
    questionContent.classList.add('hidden')
    highScore.classList.remove('hidden')
  } else {
  showQuestion(questionList[currentQuestion])
  }
}

// mostly broken, struggling to get this to display and recognize which answers are correct
function answerChoice(event) {
  var userChoice = event.target
  var chosenAnswers = userChoice.slice
  var correctAnswers = ["Marshall", "8", "Gently stop" ]
  if (userChoice == correctAnswers){
  alert("Correct!")
  correctCount++;
  } else {
    alert("Incorrect!")
    incorrectCount++;
    timeLeft -= 30
  }
  currentQuestion++;
  nextQuestion();
}
// working!
function quizBegin() {
  questionContent.classList.remove('hidden')
  startButton.classList.add('hidden')
  introText.classList.add('hidden')
    currentQuestion = 0
    nextQuestion()
    countdown()
}

//a neat list of arrays within an array
var questionList = [
  {
    question:'What is your name?', 
    answers: ["Marshall", "John", "Steve", "Zachary"
    ]
  },
  {
    question:'How many fingers am I holding up?', 
    answers: ["2", "5", "8", "12.. wait what?"
    ]
  },
  {
  question:'What do you do at a stop sign?', 
  answers: ["Gently stop", "Blow through it", "Try to hit pedestrians", "Scream"
    ]
  }
]

// an unideal solution to getting my event listeners to work
startButton.addEventListener("click", quizBegin);
answerButtonEl.forEach(function(answer){
answer.addEventListener("click", answerChoice)
})