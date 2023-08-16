var welcomeMessage = document.getElementById("welcomeMessage");
var logOutBtn = document.getElementById("logOut");
var userContainer = [];
var massage = localStorage.getItem("username");
console.log(massage);

logOutBtn.addEventListener("click", function () {
  window.location.href = "/signIn/html/signIn.html";
  localStorage.removeItem('username');
});
function getMessageWelcome() {
  welcomeMessage.innerHTML = `Hello   ${ massage}`;
}
getMessageWelcome();


