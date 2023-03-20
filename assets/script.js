var startButton = document.getElementById('start');
var timerEl = document.getElementById('timer');
var questionContent = document.getElementById('question-content');
var questionEl = document.getElementById('question');
var answerButtonEl = document.getElementsByClassName('answer-btn');
var introText = document.getElementById('intro');
var randomQuestion;
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
  questionEl.textContent = question.question
  for (var i = 0; i < question.length; i++)
  answers = []
  for(letter in questions[i].answers){
    answers.push(
        letter + ': ' + questions[i].answers[letter]
    );
  }
}

function nextQuestion() {
  showQuestion(randomQuestion[currentQuestion])
}

function answerChoice() {
  if (correct){
  alert("Correct!")
  correctCount++;
  } else {
    alert("Incorrect!")
    incorrectCount++;
    timeLeft -= 30
  }
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
answerButtonEl.addEventListener("click", answerChoice)