const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  // const username = loginInput.value;
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
