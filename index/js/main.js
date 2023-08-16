var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPass = document.getElementById("signUpPass");
var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById('signInBtn');
var errorMessage = document.getElementById("errorMessage");
var successMessage = document.getElementById("successMessage");
var confirmMessage = document.getElementById("confirmMessage");
var userContainer = [];



if (localStorage.getItem("users") != null) {
  userContainer = JSON.parse(localStorage.getItem("users"));
}
// Add data
function addData() {
  if (
    validsignUpName() == true &&
    validSignUpMail() == true &&
    validSignUpPass() == true
  ) {
    var user = {
      userName: signUpName.value,
      userEmail: signUpEmail.value,
      userPass: signUpPass.value,
    };
    userContainer.push(user);
    localStorage.setItem("users", JSON.stringify(userContainer));
    successMessage.classList.remove("d-none");
  } else {
    errorMessage.classList.remove("d-none");
  }
}
// validation actions

signUpBtn.addEventListener("click", function() {
  addData();
  clearData();
});
signUpName.addEventListener("input", function () {
  if (validsignUpName() == true) {
    signUpName.classList.add("is-valid");
    signUpName.classList.remove("is-invalid");
  } else {
    signUpName.classList.add("is-invalid");
    signUpName.classList.remove("is-valid");
  }
});
signUpEmail.addEventListener("input", function () {
  if (validSignUpMail() == true) {
    signUpEmail.classList.add("is-valid");
    signUpEmail.classList.remove("is-invalid");
  } else {
    signUpEmail.classList.add("is-invalid");
    signUpEmail.classList.remove("is-valid");
  }
});
signUpPass.addEventListener("input", function () {
  if (validSignUpPass() == true) {
    signUpPass.classList.add("is-valid");
    signUpPass.classList.remove("is-invalid");
  } else {
    signUpPass.classList.add("is-invalid");
    signUpPass.classList.remove("is-valid");
  }
});
//clear data


function clearData() {
  signUpName.value = "";
  signUpEmail.value = "";
  signUpPass.value = "";
}
// validation functions
function validsignUpName() {
  var regex = /^[a-zA-Z]{4,}\D$/;
  return regex.test(signUpName.value);
}
function validSignUpMail() {
  var regex = /^[a-zA-Z][a-zA-Z]{3,}\w{1,}@(yahoo|gmail)\.com$/;
  return regex.test(signUpEmail.value);
}

function validSignUpPass() {
  var regex = /^\w{4,}$/;
  return regex.test(signUpPass.value);
}

// signIn section
// function getSignIn() {
//   var userName = {
//     email: signInEmail.value,
//     password: signInPass.value,
//   };
//   for (var i = 0; i < userContainer; i++) {
//     if (
//       userContainer[i].signUpEmail.value == userName.email &&
//       userContainer[i].signUpPass.value == userName.password
//     ){
//       console.log(hello);

//     }
  
//   else{ console.log('not hello');}
// }
// }

signInBtn.addEventListener("click", function() {
  window.location.href="/signIn/html/signIn.html"

});


