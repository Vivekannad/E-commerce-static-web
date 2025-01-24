const logInBtn = document.getElementById("loginBtn");
const regBtn = document.getElementById("registerBtn");
const logInPage = document.getElementById("logInPage");
const registerPage = document.getElementById("registerPage");

logInBtn.addEventListener("click", () => {
    logInBtn.classList.add("after");
    regBtn.classList.remove("after");
    registerPage.classList.add("display");
    logInPage.classList.remove("display");

});
regBtn.addEventListener("click", () => {
    regBtn.classList.add("after");
    logInBtn.classList.remove("after");
    registerPage.classList.remove("display");
    logInPage.classList.add("display");
});