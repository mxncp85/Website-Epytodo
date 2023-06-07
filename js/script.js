const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
loginMeBtn = document.querySelector("#login-me"),
signupMeBtn = document.querySelector("#signup-me"),
forgotPwBtn = document.querySelector("#forgot-pw"),
pwShowHide = document.querySelectorAll(".pw_hide");

// Website part
formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password"){
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

forgotPwBtn.addEventListener("click", (e) => {
    e.preventDefault();
});

loginMeBtn.addEventListener("click", (e) => {
    e.preventDefault();
});

signupMeBtn.addEventListener("click", (e) => {
    e.preventDefault();
});