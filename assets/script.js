var startButton = document.getElementById('start');
var timerEl = document.getElementById('timer');
var questionContent = document.getElementById('question-content')
var questionList = [
  {
  Question:"What is your name?", 
  Answers: ["A. Steve", "B. Joe", "C. Manny", "D. John"]
  }
]

function countdown() {
    var timeLeft = 120;
    timerEl.textContent = "Time Remaining: " + 120;
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time Remaining: " + timeLeft;
        if(timeLeft == -1){
          clearInterval(timeInterval);
          timerEl.textContent = " ";
          displayMessage();
        }
    }, 1000);
  }

function showQuestion() {
  questionContent.classList.remove('hidden');
}

function quizBegin() {
    startButton.classList.add('hidden');
    showQuestion();
    countdown();
}

startButton.addEventListener("click", quizBegin);