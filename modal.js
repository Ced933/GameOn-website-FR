




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
const messageRadiobox = document.querySelector("#message-4");
const messageCheckbox = document.querySelector("#message-5");
const messageBirthday = document.querySelector("#message-6");
const messageQuantity = document.querySelector("#message-7");


let date = document.querySelector("#birthdate");
// permet d'avoir la date
let dateNow = new Date();
// permet d'avoir la date par jour (en chiffre et nombre) 
let day = dateNow.getDate();
// permet d'avoir la date par mois (en chiffre et nombre) janvier etant l'index 0 on mettra +1 pour que cellaa affiche les mois de 1 à 12 
let month = dateNow.getMonth()+ 1;
// permet d'avoir les années (en nombre)
let year = dateNow.getFullYear();
// vu que le calendrier prend en compte deux chiffre même s'il y a un mois ou un jour en dessou de la dixaine on rajoutera une condition 
// qui dira si jour ou mois est inférieur à 10 alors tu me mettra un 0 pour pouvoir avoir 2 chiffre 
if(day < 10){
  day ='0'+ day;
}

if(month < 10){
  month ='0'+ month;
}
// on cree une variable fulldate avec toutes les variable 
let Fulldate = year + "-" + month + "-"+ day; 

// setAttribute prend 2 paramettre l'attribut qu'on veut cibler et la valeur par laquelle on veut remplacer  
date.setAttribute("max", Fulldate);




let quantity = document.querySelector('#quantity');





let nyc = document.querySelector('#location1');
let sf = document.querySelector('#location2');
let se = document.querySelector('#location3');
let cg = document.querySelector('#location4');
let bo = document.querySelector('#location5');
let po = document.querySelector('#location6');

let checkbox = document.querySelector('#checkbox1');

let modalBody = document.querySelector('#my-form');

let submitSuccess = document.querySelector('#div-success-sub');
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


let regexEmail = /[a-z-A-Z0-9]+@+[a-z-A-Z0-9]+.+[a-z-A-Z]/g;



// condition firstName ----------------------------------------------------
    if(regex.test(firstName.value) == false){
      e.preventDefault();
      message.textContent = 'Les chiffres et les caractère spéciaux sont interdit';
      message.classList.add("error-message-name");
      return 
}
 
    else if(firstName.value.trim() === '' || firstName.value.length < 2 ){
      // si la valeur de l'input est = à vide en retirant les espaces trim() ..  
     e.preventDefault(); 
    message.textContent = 'Remplir le champs, deux lettres minimum';
    message.classList.add("error-message-name");
    return 
}
else{
  message.textContent = "";
}


// condition lastName -----------------------------------------------------------

if(regex.test(lastName.value) == false){
  e.preventDefault();
  messageLastName.textContent = 'Les chiffres et les caractère spéciaux sont interdit';
  messageLastName.classList.add("error-message-name");
  return  
}

else if(lastName.value.trim() === '' || lastName.value.length < 2 ){
  // si la valeur de l'input est = à vide en retirant les espaces trim() ..  
 e.preventDefault(); 
 messageLastName.textContent = 'Remplir le champs, deux lettres minimum';
 messageLastName.classList.add("error-message-name");
 return 
}
else{
  messageLastName.textContent = "";
}


// // Email condition ----------------------------------------------------------------

if(regexEmail.test(email.value) == false){
  e.preventDefault();
  messageEmail.textContent = "Ceci n'est pas une adresse email";
  messageEmail.classList.add("error-message-name");
  return 
}
else{
  messageEmail.textContent = "";
}

// date ---------------------------------------------------
if( !date.value){
  e.preventDefault();
  messageBirthday.textContent = "Vous devez entrer votre date de naissance.";
  messageBirthday.classList.add("error-message-name");
  return
}
else{
  messageBirthday.textContent = "";
}
// number----------------------
if(!quantity.value){
  e.preventDefault();
  messageQuantity.textContent = "Entrez une valeur numérique";
  messageQuantity.classList.add("error-message-name");
return
}
else{
  messageQuantity.textContent = "";
}
// Radiobox condition ------------------------------------------------

if( !nyc.checked && sf.checked === false && se.checked === false && cg.checked === false && bo.checked === false && po.checked === false){
 
  e.preventDefault();
  messageRadiobox.textContent = "Il faut choisir ! ";
  messageRadiobox.classList.add("error-message-name");
  return 
}
else{
  messageRadiobox.textContent = "";
}
// Checkbox condition -------------------------------------------------
 if(!checkbox.checked){
  e.preventDefault();
  messageCheckbox.textContent = "Vous devez accepter nos conditions d'utilisation ";
  messageCheckbox.classList.add("error-message-name");
  return 
}
else{
  messageCheckbox.textContent = "";
}

e.preventDefault();
  // si toutes les conditions sont remplis alors je fais disparaître le formulaire 
 
  myForm.style.display="none";
  // et je fais apparaitre le message  
  submitSuccess.style.display = "block";
});
 

