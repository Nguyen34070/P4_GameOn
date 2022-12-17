// fonction pour les erreurs dans les input
function checkFields() {
    const first = document.getElementById('first');
    const last = document.getElementById('last');
    const email =  document.getElementById('email');
    const birthdate =  document.getElementById('birthdate');
    const quantity =  document.getElementById('quantity');
    const term = document.getElementById('checkbox1');
    isValid = false;

   // erreur pour le prénom
   if (
    (!first.value || first.value.length < 2 )||
    (!last.value || last.value.length < 2 ) ||
    (!validateEmail(email.value)) ||
    (!validateBirtdate(birthdate.value) ) ||
    (quantity.value < 0) ||
    (!term.checked)
    ) {
       if (first.value.length < 2 ) {
         first.style.border = '2px solid red';
         document.getElementById('errorFirst').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
       } else {
         first.style.border = 'unset';
         document.getElementById('errorFirst').innerHTML = '';
         first.style.border = '2px solid rgb(5, 190, 5)';
       }
   
   // erreur pour le nom
       if (last.value.length < 2 ) {
         last.style.border = '2px solid red';
         document.getElementById('errorLast').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
       } else {
         last.style.border = 'unset';
         document.getElementById('errorLast').innerHTML = '';
         last.style.border = '2px solid rgb(5, 190, 5)';
       }
   
   // erreur pour le mail    
       if(!validateEmail(email.value)){
         email.style.border = '2px solid red';
         document.getElementById('errorMail').innerHTML = 'Veuillez entrer un email valide.';
       } else {
         email.style.border = 'unset';
         document.getElementById('errorMail').innerHTML = '';
         email.style.border = '2px solid rgb(5, 190, 5)';
       }
   
   // erreur date de naissance
       if(!validateBirtdate(birthdate.value)){
         birthdate.style.border = '2px solid red';
         document.getElementById('errorBirthDate').innerHTML = 'Veuillez entrer votre date de naissance.';
       } else {
         birthdate.style.border = 'unset';
         document.getElementById('errorBirthDate').innerHTML = '';
         birthdate.style.border = '2px solid rgb(5, 190, 5)';
       }
   
   // erreur pour le nombre de participation dans des tournoi    
       if(quantity.value < 0){
         quantity.style.border = '2px solid red';
         document.querySelector('#errorQuantity').innerHTML = 'Vous ne pouvez pas entrer un nombre négatif';
       } else {
         quantity.style.border = 'unset';
         document.querySelector('#errorQuantity').innerHTML = '';
         quantity.style.border = '2px solid rgb(5, 190, 5)';
       }
   
   // erreur pour les acceptation  
       if(!term.checked) {
         document.getElementById('errorTerm').innerHTML = 'Vous devez accepter les termes et conditions.';
       } else {
         document.getElementById('errorTerm').innerHTML = '';
       }

  // fin de validation des input pour retourner true
      } else {
        document.querySelectorAll('#errorFirst', '#errorLast', '#errorMail', '#errorBirthDate', '#errorQuantity', '#errorTerm').innerHTML = '';
        document.getElementById('email').style.border = 'unset';
        showConfirmMsg();
        return true;
      }
   };  
   // regex pour la validation du mail
   function validateEmail(email) {
     let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     return re.test(email);
   };

   // regex pour la validation de la date de naissance
   function validateBirtdate(birthdate) {
     let re = /^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;
     return re.test(birthdate);
   };

   // fonction pour la localisation
   const checkboxContainer = () => {
    const errorDisplay = document.getElementById("errorChecked");
    const radios = document.querySelectorAll('input[name="location"]');
    isValid = false;
  
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked && checkFields === true) {
        errorDisplay.innerHTML = "";
        showConfirmMsg();
        break;
      } else if (radios[i].checked) {
        errorDisplay.style.display = "none";
      }
       else {
        errorDisplay.innerHTML = "Veuillez sélectionner un choix.";
        errorDisplay.style.color = "red";
        errorDisplay.style.fontSize = "0.6em";
      }
    }
    return isValid; 
  };

