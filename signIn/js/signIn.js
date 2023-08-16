var signInEmail = document.getElementById("signInEmail");
var signInPass = document.getElementById("signInPass");
var signInBtn = document.getElementById("signInBtn");
var errorMessage = document.getElementById('errorMessage');

var userContainer = [];

userContainer = JSON.parse(localStorage.getItem("users"));



function getSignIn(){

    for (var i = 0; i < userContainer.length; i++) {

        if (
          userContainer[i].userEmail == signInEmail.value &&
          userContainer[i].userPass  == signInPass.value
        ) {
          var usermessage = userContainer[i].userName;
          localStorage.setItem('username' , usermessage);
          window.location.href="/home/html/home.html";
          break;
        }
        else{
          errorMessage.classList.remove('d-none');
        }
      }
}

signInBtn.addEventListener("click", function () {
    getSignIn()
});




