// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// ---
let firstName = document.querySelector("#first");
let lastName = document.querySelector("#last");
let email = document.querySelector("#email");
let myForm = document.querySelector("#my-form");
let quantity = document.querySelector("#quantity");

const message = document.querySelector("#message");
const messageLastName = document.querySelector("#message-2");
const messageEmail = document.querySelector("#message-3");
const messageRadiobox = document.querySelector("#message-4");
const messageCheckbox = document.querySelector("#message-5");
const messageBirthday = document.querySelector("#message-6");
const messageQuantity = document.querySelector("#message-7");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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

// ---------------------------------------------- PARTIE CALENDRIER ---------------------------------------
let date = document.querySelector("#birthdate");
// permet d'avoir la date
let dateNow = new Date();
// permet d'avoir la date par jour (en chiffre et nombre)
let day = dateNow.getDate();
// permet d'avoir la date par mois (en chiffre et nombre) janvier étant l'index 0 on mettra +1 pour que cella affiche les mois de 1 à 12
let month = dateNow.getMonth() + 1;
// permet d'avoir les années (en nombre)
let year = dateNow.getFullYear();
// vu que le calendrier prend en compte deux chiffres même s'il y a un mois ou un jour en dessous de la dizaine on rajoutera une condition
// qui dira si jour ou mois est inférieur à 10 alors tu me mettra un 0 pour pouvoir avoir 2 chiffres
if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = "0" + month;
}
// On crée une variable fulldate avec toutes les variables
let Fulldate = year + "-" + month + "-" + day;

// setAttribute prend 2 paramètres l'attribut qu'on veut cibler et la valeur par laquelle on veut remplacer
date.setAttribute("max", Fulldate);

// ------------------------------------------------------ PARTIE RADIO CHECK -------------------------------------------
let nyc = document.querySelector("#location1");
let sf = document.querySelector("#location2");
let se = document.querySelector("#location3");
let cg = document.querySelector("#location4");
let bo = document.querySelector("#location5");
let po = document.querySelector("#location6");
// ------------------------------------------------------ PARTIE CHECKBOX -------------------------------------------

let checkbox = document.querySelector("#checkbox1");

// ------------------------------------------------------ PARTIE MESSAGE SUCCESS -------------------------------------------
// div avec message success
let submitSuccess = document.querySelector("#div-success-sub");

// ------------------------------------------------------ FONCTION POUR VERIFIER LE FORMULAIRE -------------------------------------------

myForm.addEventListener("submit", function (e) {
  let regex = /^[a-zA-Z-\s]+$/;
  // J'autorise les lettres en minuscules, en majuscules les tirets et les espaces répétés plusieurs fois

  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // condition firstName ----------------------------------------------------

  if (firstName.value.trim() === "" || firstName.value.length < 2) {
    // si la valeur de l'input est = à vide en retirant les espaces trim() ..
    e.preventDefault();
    message.textContent = "Remplir le champs, deux lettres minimum";
    message.classList.add("error-message-name");
    firstName.style.border = "2px solid red";
    return;
  } else if (regex.test(firstName.value) == false) {
    e.preventDefault();
    message.textContent =
      "Les chiffres et les caractère spéciaux sont interdit";
    message.classList.add("error-message-name");
    firstName.style.border = "2px solid red";
    // le return ici permet de valider une condition à la fois
    return;
  } else {
    message.textContent = "";
    firstName.style.border = "none";
  }

  // condition lastName -----------------------------------------------------------
  if (lastName.value.trim() === "" || lastName.value.length < 2) {
    // si la valeur de l'input est = à vide en retirant les espaces uniquement au debut et à la fin de la valeur vérifié trim() ..
    e.preventDefault();
    messageLastName.textContent = "Remplir le champs, deux lettres minimum";
    messageLastName.classList.add("error-message-name");
    lastName.style.border = "2px solid red";
    return;
  } else if (regex.test(lastName.value) == false) {
    e.preventDefault();
    messageLastName.textContent =
      "Les chiffres et les caractère spéciaux sont interdit";
    messageLastName.classList.add("error-message-name");
    lastName.style.border = "2px solid red";
    return;
  } else {
    messageLastName.textContent = "";
    lastName.style.border = "none";
  }

  // // Email condition ----------------------------------------------------------------

  if (regexEmail.test(email.value) == false) {
    e.preventDefault();
    messageEmail.textContent = "Ceci n'est pas une adresse email";
    messageEmail.classList.add("error-message-name");
    email.style.border = "2px solid red";
    return;
  } else {
    messageEmail.textContent = "";
    email.style.border = "none";
  }

  // Date condition ---------------------------------------------------
  if (!date.value) {
    e.preventDefault();
    messageBirthday.textContent = "Vous devez entrer votre date de naissance.";
    messageBirthday.classList.add("error-message-name");
    date.style.border = "2px solid red";
    return;
  } else {
    messageBirthday.textContent = "";
    date.style.border = "none";
  }
  // number condition ----------------------
  if (!quantity.value) {
    e.preventDefault();
    messageQuantity.textContent = "Entrez une valeur numérique";
    messageQuantity.classList.add("error-message-name");
    quantity.style.border = "2px solid red";
    return;
  } else {
    messageQuantity.textContent = "";
    quantity.style.border = "none";
  }
  // Radiobox condition ------------------------------------------------

  if (
    !nyc.checked &&
    sf.checked === false &&
    se.checked === false &&
    cg.checked === false &&
    bo.checked === false &&
    po.checked === false
  ) {
    e.preventDefault();
    messageRadiobox.textContent = "Il faut choisir ! ";
    messageRadiobox.classList.add("error-message-name");

    return;
  } else {
    messageRadiobox.textContent = "";
  }
  // Checkbox condition -------------------------------------------------
  if (!checkbox.checked) {
    e.preventDefault();
    messageCheckbox.textContent =
      "Vous devez accepter nos conditions d'utilisation ";
    messageCheckbox.classList.add("error-message-name");
    return;
  } else {
    messageCheckbox.textContent = "";
  }

  e.preventDefault();
  // si toutes les conditions sont remplis alors je fais disparaître le formulaire
  myForm.style.display = "none";
  // et je fais apparaitre le message
  submitSuccess.style.display = "block";
});
