// Fonction de la navbar
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
const btnSubmit = document.querySelector('.submitBtn');// a voir !!
const bodyMsg = document.querySelector('.body_message_confirm');// a voir !!
const modalBody = document.querySelector('.content');// a voir !!

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermeture du formulaire avec l'icone croix avec la fonction native d'actualisation de la page
function closeModal() {
  document
    .querySelector('.close')
    .addEventListener("click", function() {
      modalbg.style.display = "none"; 
  });
}

// affichage du message de la confirmation d'inscription
function showConfirmMsg() {
  bodyMsg.style.display = "block";
  modalBody.style.display = "none";
}
btnSubmit.addEventListener("click", showConfirmMsg);

// fermeture du message de confirmation d'inscription
function closeMsg() {
  modalbg.style.display = "none";
  bodyMsg.style.display= "none";
  window.location.reload();
}
btnSubmit.addEventListener("click", closeMsg);