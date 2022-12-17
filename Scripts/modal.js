// affichage de la navbar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelector('.submitBtn');
const bodyMsg = document.querySelector('.body_message_confirm');
const modalBody = document.querySelector('.content');
const closeBtn = document.querySelector('.close');

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fermeture du message de confirmation d'inscription
function closeMsg() {
  modalbg.style.display = "none";
  window.location.reload();
}
btnSubmit.addEventListener("click", closeMsg);

// fermeture du formulaire avec l'icone croix avec la fonction native d'actualisation de la page
function closeModal() {
  modalbg.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);