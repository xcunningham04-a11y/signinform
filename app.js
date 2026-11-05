
const signInButton = document.getElementById("sign-in-btn");
const signUpButton = document.getElementById("sign-up-btn");
const backButton = document.getElementById("back-to-login");

const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");


function showLogin() {
    signUpForm.style.display = "none";
    signInForm.style.display = "flex";
}


function showSignUp() {
    signInForm.style.display = "none";
    signUpForm.style.display = "flex";
}


showLogin();


signUpButton.addEventListener("click", showSignUp);
signInButton.addEventListener("click", showLogin);
backButton.addEventListener("click", showLogin);
