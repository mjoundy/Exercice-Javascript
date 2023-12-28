let firstName = document.getElementById("firstname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("message");
let form = document.querySelector("form");

console.log(firstName.value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (password.value.length < 8) {
    alert("Your password less then 8 characters, try again!");
  }
  if (email.value.includes("@") === false) {
    alert("email is not valid");
  }
});
// console.log("@/".includes("m"))

console.log(email.value);
