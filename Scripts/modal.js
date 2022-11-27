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
const confirmBtn = document.querySelector('.confirmMsg');// a voir !!
const modalBody = document.querySelector('.content');// a voir !!

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Pour fermer le formulaire avec l'icone croix
function closeModal() {
  document
    .querySelector('.close')
    .addEventListener("click", function() {
      modalbg.style.display = "none"; 
      window.location.reload();
  });
}
// modal message
function showConfirmMsg() {
  confirmBtn.style.display = "block";
  modalBody.style.display = "none";
}
btnSubmit.addEventListener("click", showConfirmMsg);

function launchMsg() {
  modalbg.style.display = "none";
  confirmBtn.style.display= "none";
  window.location.reload();
}
btnSubmit.addEventListener("click", launchMsg);

function checkFields() {
  //const msg_firt =  'Veuillez entrer'
  //const array = ['first', 'last']
 // array.forEach((value2) => {
    //const element = document.getElementById(value2);
    //if (!value2.value || value2.value.length < 2) {
      //document.getElementById(value2).style.border = '2px solid red';
   // const element = document.getElementById(value2);
    //document.getElementById('error_' + ).innerHTML = 'msg_+value2'
 // })
 const first =  document.getElementById('first');
 const last =  document.getElementById('last');
 const email =  document.getElementById('email');
 const birthdate =  document.getElementById('birthdate');
 const quantity =  document.getElementById('quantity');
 const radioChecked = document.querySelectorAll('input[name="location"]');

 
 if (
  (!first.value || first.value.length < 2 )||
  (!last.value || last.value.length < 2 ) ||
  (!validateEmail(email.value)) ||
  (!validateBirtdate(birthdate.value) ) ||
  (quantity.value < 0) ||
  (!radioChecked) 
  ) {
    if (!first.value || first.value.length < 2 ) {
      first.style.border = '2px solid red';
      document.getElementById('errorName1').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    } else {
      first.style.border = 'unset';
      document.getElementById('errorName1').innerHTML = '';
    } 

    if (!last.value || last.value.length < 2 ) {
      last.style.border = '2px solid red';
      document.getElementById('errorName2').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    } else {
      last.style.border = 'unset';
      document.getElementById('errorName2').innerHTML = '';
    }
    
    if(!validateEmail(email.value)){
      email.style.border = '2px solid red';
      document.getElementById('errorName3').innerHTML = 'Veuillez entrer un email valide.';
    } else {
      email.style.border = 'unset';
      document.getElementById('errorName3').innerHTML = '';
    }

    if(!validateBirtdate(birthdate.value)){
      birthdate.style.border = '2px solid red';
      document.getElementById('errorName4').innerHTML = 'Veuillez entrer votre date de naissance.';
    } else {
      birthdate.style.border = 'unset';
      document.getElementById('errorName4').innerHTML = '';
    }
    if(quantity.value < 0){
      quantity.style.border = '2px solid red';
      document.querySelector('#errorName5').innerHTML = 'Vous ne pouvez pas entrer un nombre négatif';
    } else {
      quantity.style.border = 'unset';
      document.querySelector('#errorName5').innerHTML = '';
    }
    if(!radioChecked.checked) {
      document.querySelector('#errorName6').innerHTML = 'Vous devez choisir une localisation';
      //document.querySelector('.checkbox-icon').style.border = "2px solid red"  A VOIR CAR NE SELECTIONNE QU'UNE SEULE ICONE A LIEU DES 6
    } else {
      document.querySelector('#errorName6').innerHTML = '';
    }

 } else {
      document.querySelectorAll('#errorName1', '#errorName2', '#errorName3').innerHTML = '';
      document.getElementById('email').style.border = 'unset';
      showConfirmMsg();
      return false;
 }

}

function validateEmail(email) {
  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

function validateBirtdate(birthdate) {
  let re = /^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;
  console.log(birthdate);
  console.log(re.test(birthdate));
  return re.test(birthdate);
};
