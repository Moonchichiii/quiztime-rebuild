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
