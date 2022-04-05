




function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// ---
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector('#email');
let myForm = document.querySelector("#my-form");

const message = document.querySelector("#message");
const messageLastName = document.querySelector("#message-2");
const messageEmail = document.querySelector("#message-3");
const close = document.querySelector(".close");



let regex =/^([^0-9]*)$/;
let result = regex.test(firstName);
let resultlastName = regex.test(lastName);
let regexEmail = /[a-z-A-Z]+@+[a-z-A-Z]+.+[a-z-A-Z]/g;
let resultEmail = regex.test(email);
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// quitter le formulaire grâce à la croix 
function quitModal() {
  modalbg.style.display = "none";
}
// Pour enlever le comportement par defautl du button submit 
myForm.addEventListener('submit', function(e){
// condition firstName ----------------------------------------------------
    if(result){
      e.preventDefault();
      message.textContent = 'Les chiffres sont interdit';
      message.classList.add("error-message-name");
      
}
 
    if(firstName.value.length < 2){
     e.preventDefault(); 
    message.textContent = 'Deux lettres minimum';
    message.classList.add("error-message-name");
    
}
 if(firstName.value === ''){
    
    e.preventDefault();
    message.textContent = 'Le champs est vide';
    message.classList.add("error-message-name");
  }
// condition lastName -----------------------------------------------------------

  if(resultlastName){
    e.preventDefault();
    messageLastName.textContent = 'Les chiffres sont interdit';
    messageLastName.classList.add("error-message-name");
    
 }

  if(lastName.value.length < 2){
   e.preventDefault(); 
   messageLastName.textContent = 'Deux lettres minimum';
   messageLastName.classList.add("error-message-name");
  
}
if(lastName.value === ''){
    
  e.preventDefault();
  messageLastName.textContent = 'Le champs est vide';
  messageLastName.classList.add("error-message-name");
}

// Email condition ----------------------------------------------------------------
if(resultEmail){
  e.preventDefault();
  messageEmail.textContent = "Ceci n'est pas une adresse email";
  messageEmail.classList.add("error-message-name");
  
}
if(email.value === ''){
    
  e.preventDefault();
  messageEmail.textContent = 'Le champs est vide';
  messageEmail.classList.add("error-message-name");
}
});
 

