
// function to "onclick" inside the index.html
function Login() {
  var gameNameInput = document.getElementById("username");
  var playerUsername = gameNameInput.value;

  if (!playerUsername) {
    alert("Please choose a username to play!");
    return;
  }

  window.localStorage.setItem("username", playerUsername);
  window.location.href = "quiz.html";
}


var playerUsername = window.localStorage.getItem("username");
document.getElementById("username-displayed").textContent = playerUsername;



// displaying the local time for the user. 
setInterval(function() {
document.getElementById("time").innerHTML = new Date().toLocaleTimeString();  },  1000);



// start button (startQuiz)
var startButton = document.getElementById("start-btn");
startButton.addEventListener('click', startQuiz);

// next button, skip questions inside the quiz.
var questionElement = document.getElementById("questions");
var nextButton = document.getElementById("next-btn");
nextButton.addEventListener('click', nextQuestion);

// random question and current question.
var shuffleQuestion, currentQuestionIndex;

// answer-buttons.
var answerButtonElement = document.getElementById("answer-buttons");

function startQuiz() {
  // removing the quiz instructions
  var gameInstructions = document.getElementById("instructions");
  gameInstructions.classList.add("hide");

  // displaying the question container
  var questionContainer = document.getElementById("question-container");
  questionContainer.classList.remove("hide");

  // removing the start button
  startButton.classList.add("hide");

  // displaying the scoreboard.
  var scoreBoard = document.getElementById("scoreboard");
  scoreBoard.classList.remove("hide");

  // displaying the next button
  nextButton.classList.remove("hide");

  // displaying the first question from the shuffled list
  shuffleQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showQuestion(shuffleQuestion[currentQuestionIndex]);
}



function nextQuestion() {
  resetState();
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffleQuestion.length) {
    showQuestion(shuffleQuestion[currentQuestionIndex]);
  } else {
    endQuiz();
  }
}

// displays the questions.
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    // creates the buttons and adds the answers to the button.
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');

    // if correct answer is clicked.
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonElement.appendChild(button);

    nextButton.disabled = false;
  });
}

// clearing the answerButtonElement
function resetState() {
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}

var correctScore = 0;
var incorrectScore = 0;

function selectAnswer(event) {
  var selectedButton = event.target;
  var correct = selectedButton.dataset.correct;

  var correctScoreElement = document.getElementById("correct");
  var incorrectScoreElement = document.getElementById("incorrect");

  // if the answer is correct, the number will turn green.
  if (correct) {
    correctScore++;
    correctScoreElement.style.color = "green";

    // the color will stay for 2 seconds.
    setTimeout(function() {
      correctScoreElement.style.color = "";
    }, 2000);
  } else {
    incorrectScore++;
    incorrectScoreElement.style.color = "red";

    // the color will stay for 2 seconds.
    setTimeout(function() {
      incorrectScoreElement.style.color = "";
    }, 2000);
  }

  nextButton.disabled = true;

  correctScoreElement.innerText = correctScore;
  incorrectScoreElement.innerText = incorrectScore;

  setTimeout(nextQuestion, 1500);
}

function endQuiz() {
  localStorage.setItem('correctScore', correctScore);
  localStorage.setItem('incorrectScore', incorrectScore);
  window.location.href = "finished.html";

  if (correctScore === 0 && incorrectScore === 0) {
    alert("You have not played the game and your score is zero.");
  } else {
    localStorage.setItem('correctScore', correctScore);
    localStorage.setItem('incorrectScore', incorrectScore);
    window.location.href = "finished.html";
  }
}


var questions = [
  {
    question: 'In which city is the famous Edvard Eriksen statue, The Little Mermaid?',
    answers: [
      { text: 'Copenhagen', correct: true },
      { text: 'Oslo', correct: false },
      { text: 'Stockholm', correct: false }
    ]
  },
  {
    question: 'Which of these cities has the largest population?',
    answers: [
      { text: 'Shanghai', correct: true },
      { text: 'New Delhi', correct: false },
      { text: 'Mexico City', correct: false }
    ]
  },
  {
    question: 'The highest waterfall in Europe is in which country?',
    answers: [
      { text: 'Norway', correct: true },
      { text: 'Iceland', correct: false },
      { text: 'Finland', correct: false }
    ]
  },
  
  {
    question: 'From which Star Wars film has this quote: “Always remember, your focus determines your reality.',
    answers: [
      { text: 'The Force Awakens', correct: false },
      { text: 'The Empire Strikes Back', correct: false },
      { text: 'The Phantom Menace', correct: true }
    ]
  },
  {
    question: 'Where is bunny chow from?',
    answers: [
      { text: 'Usa', correct: false },
      { text: 'South Africa', correct: true },
      { text: 'Australia', correct: false }
    ]
  },
  {
    question: 'Where is tom yum from?',
    answers: [
      { text: 'Thailand', correct: true },
      { text: 'Japan', correct: false },
      { text: 'Sri Lanka', correct: false }
    ]
  },
  {
    question: 'What colour is Neptune?',
    answers: [
      { text: 'Blue', correct: true },
      { text: 'Red', correct: false },
      { text: 'Green', correct: false }
    ]
  },
  {
    question: 'Which company launched the perfume Eau Sauvage in 1966?',
    answers: [
      { text: 'Christian Dior', correct: true },
      { text: 'Hermès', correct: false },
      { text: 'Saint Laurent', correct: false }
    ]
  },
  {
    question: 'From which port city in England did the Titanic leave in 1912?',
    answers: [
      { text: 'Liverpool', correct: false },
      { text: 'Southampton', correct: true },
      { text: 'Dover', correct: false }
    ]
  },
  {
    question: 'Which Hollywood director made his directorial debut with Duel in 1971?',
    answers: [
      { text: 'Steven Spielberg', correct: true },
      { text: 'George Lucas', correct: false },
      { text: 'Martin Scorcese', correct: false }
    ]
  },

];