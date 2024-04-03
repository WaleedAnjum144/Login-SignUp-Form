let signBtn = document.querySelector(".signup");
let loginBtn = document.querySelector(".login");
let nameField = document.querySelector(".namefield");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let password = document.querySelector(".password");

loginBtn.addEventListener("click" , ()=>{
    nameField.style.maxHeight='0';
    title.innerHTML = "Login";
    password.innerHTML = "Lost Password:";
    loginBtn.classList.remove("disable");
    signBtn.classList.add("disable");
    underline.style.transform = "translateX(22px)";
   

});

signBtn.addEventListener("click" , ()=>{
    nameField.style.maxHeight='60px';
    title.innerHTML = "Sign Up";
    password.innerHTML = "Password Suggestions:";
    loginBtn.classList.add("disable");
    signBtn.classList.remove("disable");
    underline.style.transform = "translateX(0)";
   

});