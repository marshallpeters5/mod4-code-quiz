var startButton = document.getElementById('start');
var timerEl = document.getElementById('timer');
var questionContent = document.getElementById('question-content');
var questionEl = document.getElementById('question');
var answerButtonEl = document.getElementsByClassName('answer-btn');
var introText = document.getElementById('intro');
var randomQuestion;
var currentQuestion;


function countdown() {
    var timeLeft = 120
    timerEl.textContent = "Time Remaining: " + 120
    var timeInterval = setInterval(function () {
      timeLeft--
      timerEl.textContent = "Time Remaining: " + timeLeft
        if(timeLeft == -1){
          clearInterval(timeInterval)
          timerEl.textContent = " "
          displayMessage();
        }
    }, 1000);
  }

function showQuestion(question) {
  questionEl.innerText = question.question
}

function showAnswer(answer) {
  answerButtonEl.textContent = answers.text
}

function nextQuestion() {
  showQuestion(randomQuestion[currentQuestion])
}

function answerChoice() {

}

function quizBegin() {
  questionContent.classList.remove('hidden')
  startButton.classList.add('hidden')
  introText.classList.add('hidden')
    randomQuestion = questionList.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
    countdown()
}

const questionList = [
  {
    question:'What is your name?', 
    answers: [
      {text: 'A. Marshall', correct: true},
      {text: 'B. John', correct: false},
      {text: 'B. Steve', correct: false},
      {text: 'B. Zachary', correct: false}
    ]
  },
  {
    question:'How many fingers am I holding up?', 
    answers: [
      {text: 'A. 2', correct: true},
      {text: 'B. 4', correct: false},
      {text: 'B. 9', correct: false},
      {text: 'B. 12.. wait what?', correct: false}
    ]
  },
  {
  question:'What do you do at a stop sign?', 
  answers: [
    {text: 'A. Stop', correct: true},
    {text: 'B. Blow through it', correct: false},
    {text: 'B. Rolling stop.', correct: false},
    {text: 'B. None of the above', correct: false}
    ]
  }
]

startButton.addEventListener("click", quizBegin);