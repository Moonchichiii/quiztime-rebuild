// login // username display

function Login() {
    var gameNameInput = document.getElementById("username");
    var username = gameNameInput.value;

    if (!username) {
      alert("Please choose a username!");
      return;
    }

    window.localStorage.setItem("username", username);
    window.location.href = "quiz.html";
  }


  var username = window.localStorage.getItem("username");
  document.getElementById("username-displayed").textContent = username;


  // Local time of the users

  setInterval(function() {
    document.getElementById("time").innerHTML = new Date().toLocaleTimeString();  },  1000);

// Start button (start quiz)

/* jshint esversion: 6 */

const startButton = document.getElementById("start-btn");
startButton.addEventListener('click', startQuiz);

const questionElement = document.getElementById("questions");
const nextButton = document.getElementById("next-btn");
nextButton.addEventListener('click', nextQuestion);

let shuffleQuestion, currentQuestionIndex;

const answerButtonElement = document.getElementById("answer-buttons"); 







function startQuiz() {  
  var gameInstructions = document.getElementById("instructions");
  gameInstructions.classList.add("hide");

  var questionContainer = document.getElementById("question-container");  
  startButton.classList.add("hide");
  
  
  
  questionContainer.classList.remove("hide");

  var scoreBoard = document.getElementById("scoreboard");
  scoreBoard.classList.remove("hide");

  nextButton.classList.remove("hide");

  shuffleQuestion = questions.sort(() => Math.random() - 0.5)
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

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {

  const button = document.createElement('button');
  button.innerText = answer.text;
  button.classList.add('btn'); 

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonElement.appendChild(button);

    nextButton.disabled = false;
    
  });
}







const questions = [
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