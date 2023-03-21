var startButton = document.getElementById('start');
var timerEl = document.getElementById('timer');
var questionContent = document.getElementById('question-content');
var questionEl = document.getElementById('question');
var answerButtonEl = document.querySelectorAll('.answer-btn');
var introText = document.getElementById('intro');
var currentQuestion;
var timeLeft = 120
var correctCount = 0
var incorrectCount = 0


function countdown() {
    timerEl.textContent = "Time Remaining: " + 120
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time Remaining: " + timeLeft
        if(timeLeft == -1){
          clearInterval(timeInterval)
          timerEl.textContent = " "
          displayMessage();
        }
    }, 1000);
  }

function showQuestion(question, questionContent) {
  questionEl.textContent = question.question;
  document.getElementById('0').textContent = question.answers[0];
  document.getElementById('1').textContent = question.answers[1];
  document.getElementById('2').textContent = question.answers[2];
  document.getElementById('3').textContent = question.answers[3];
}

function nextQuestion() {
  showQuestion(questionList[currentQuestion])

}

function answerChoice(answer) {
  if (currentQuestion){
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

function quizBegin() {
  questionContent.classList.remove('hidden')
  startButton.classList.add('hidden')
  introText.classList.add('hidden')
    currentQuestion = 0
    nextQuestion()
    countdown()
}

var questionList = [
  {
    question:'What is your name?', 
    answers: ["Marshall", "John", "Steve", "Zachary"
    ], correct: 0
  },
  {
    question:'How many fingers am I holding up?', 
    answers: ["2", "5", "8", "12.. wait what?"
    ], correct: 2
  },
  {
  question:'What do you do at a stop sign?', 
  answers: ["Stop.", "Blow through it.", "Try to hit pedestrians.", "Scream into the void."
    ], correct: 0
  }
]

startButton.addEventListener("click", quizBegin);
answerButtonEl.forEach(function(answer){
answer.addEventListener("click", answerChoice)
})