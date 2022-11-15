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
const btnSubmit = document.querySelector('.btn-submit');// a voir 

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Pour fermer le formulaire avec l'icone croix
function closeModal() {
  document
    .getElementById('closed')
    .addEventListener("click", function() {
      modalbg.style.display = "none";  
  });
}

btnSubmit.addEventListener('submit', confirmModal);

//function confirmModal(e) {
  //e.preventDefault();
  //const name = formData.get('first')
