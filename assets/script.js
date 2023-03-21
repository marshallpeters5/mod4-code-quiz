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
  document.getElementById('a0').textContent = question.answers[0].a;
  document.getElementById('a1').textContent = question.answers[1].b;
  document.getElementById('a2').textContent = question.answers[2].c;
  document.getElementById('a3').textContent = question.answers[3].d;
}

function nextQuestion() {
  showQuestion(questionList[currentQuestion])

}

function answerChoice() {
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
    answers: [
      {a: 'Marshall', correct: true},
      {b: 'John', correct: false},
      {c: 'Steve', correct: false},
      {d: 'Zachary', correct: false}
    ]
  },
  {
    question:'How many fingers am I holding up?', 
    answers: [
      {a: '2', correct: true},
      {b: '4', correct: false},
      {c: '9', correct: false},
      {d: '12.. wait what?', correct: false}
    ]
  },
  {
  question:'What do you do at a stop sign?', 
  answers: [
    {a: 'Stop', correct: true},
    {b: 'Blow through it', correct: false},
    {c: 'Rolling stop.', correct: false},
    {d: 'None of the above', correct: false}
    ]
  }
]

startButton.addEventListener("click", quizBegin);
answerButtonEl.forEach(function(answer){
answer.addEventListener("click", answerChoice)
})