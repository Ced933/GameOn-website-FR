




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


// let mindate = new Date(-8640000000000000)

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
let regex = /^[a-zA-Z-\s]+$/;
// j'autorise les lettre en minuscule en majuscule les tirets et les espace répété plusieur fois
// let result = regex.test(firstName);

let regexEmail = /[a-z-A-Z0-9]+@+[a-z-A-Z0-9]+.+[a-z-A-Z]/g;
// let resultEmail = regexEmail.test(email);



// condition firstName ----------------------------------------------------
    if(regex.test(firstName.value) == false){
      e.preventDefault();
      message.textContent = 'Les chiffres et les caractère spéciaux sont interdit';
      message.classList.add("error-message-name"); 
}
 
    if(firstName.value.trim() === '' || firstName.value.length < 2 ){
      // si la valeur de l'input est = à vide en retirant les espaces trim() ..  
     e.preventDefault(); 
    message.textContent = 'Remplir le champs, deux lettres minimum';
    message.classList.add("error-message-name");
    
}

// condition lastName -----------------------------------------------------------

if(regex.test(lastName.value) == false){
  e.preventDefault();
  messageLastName.textContent = 'Les chiffres et les caractère spéciaux sont interdit';
  messageLastName.classList.add("error-message-name"); 
}

if(lastName.value.trim() === '' || lastName.value.length < 2 ){
  // si la valeur de l'input est = à vide en retirant les espaces trim() ..  
 e.preventDefault(); 
 messageLastName.textContent = 'Remplir le champs, deux lettres minimum';
 messageLastName.classList.add("error-message-name");

}
// // Email condition ----------------------------------------------------------------

if(regexEmail.test(email.value) == false){
  e.preventDefault();
  messageEmail.textContent = "Ceci n'est pas une adresse email";
  messageEmail.classList.add("error-message-name");
  
}


});
 

