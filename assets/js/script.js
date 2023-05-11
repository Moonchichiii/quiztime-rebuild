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


console.log(startButton);

function startQuiz() {

}
