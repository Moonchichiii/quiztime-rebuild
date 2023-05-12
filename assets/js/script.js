// login // username displayed // 

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




setInterval(function() {
document.getElementById("time").innerHTML = new Date().toLocaleTimeString();  },  1000);



// start button (startQuiz) 

const startButton = document.getElementById("start-btn");
startButton.addEventListener('click', startQuiz);


// next button,skip questions inside the quiz. 


const questionElement = document.getElementById("questions");
const nextButton = document.getElementById("next-btn");
nextButton.addEventListener('click', nextQuestion);

// random question and currentquestion. 

let shuffleQuestion, currentQuestionIndex;


// answer-buttons.

const answerButtonElement = document.getElementById("answer-buttons"); 





function startQuiz() {  
  
  var gameInstructions = document.getElementById("instructions");
  gameInstructions.classList.add("hide");
  startButton.classList.add("hide");  


  nextButton.classList.remove("hide");

  shuffleQuestion = questions.sort(() => Math.random() -0.5)
  currentQuestionIndex = 0;


};







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