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