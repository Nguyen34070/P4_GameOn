// fonction pour les erreurs dans les input
function checkFields() {
    const first =  document.getElementById('first');
    const last =  document.getElementById('last');
    const email =  document.getElementById('email');
    const birthdate =  document.getElementById('birthdate');
    const quantity =  document.getElementById('quantity');
    const radioChecked = document.querySelectorAll('input[name="location"]');
   
   // condition pour que les messages d'erreur s'affiche en même temps
    if (
     (!first.value || first.value.length < 2 )||
     (!last.value || last.value.length < 2 ) ||
     (!validateEmail(email.value)) ||
     (!validateBirtdate(birthdate.value) ) ||
     (quantity.value < 0) ||
     (!radioChecked) 
     ) {
   // erreur pour le prénom    
       if (!first.value || first.value.length < 2 ) {
         first.style.border = '2px solid red';
         document.getElementById('errorName1').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
       } else {
         first.style.border = 'unset';
         document.getElementById('errorName1').innerHTML = '';
       }
   
   // erreur pour le nom
       if (!last.value || last.value.length < 2 ) {
         last.style.border = '2px solid red';
         document.getElementById('errorName2').innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
       } else {
         last.style.border = 'unset';
         document.getElementById('errorName2').innerHTML = '';
       }
   
   // erreur pour le mail    
       if(!validateEmail(email.value)){
         email.style.border = '2px solid red';
         document.getElementById('errorName3').innerHTML = 'Veuillez entrer un email valide.';
       } else {
         email.style.border = 'unset';
         document.getElementById('errorName3').innerHTML = '';
       }
   
   // erreur date de naissance
       if(!validateBirtdate(birthdate.value)){
         birthdate.style.border = '2px solid red';
         document.getElementById('errorName4').innerHTML = 'Veuillez entrer votre date de naissance.';
       } else {
         birthdate.style.border = 'unset';
         document.getElementById('errorName4').innerHTML = '';
       }
   
   // erreur pour le nombre de participation dans des tournoi    
       if(quantity.value < 0){
         quantity.style.border = '2px solid red';
         document.querySelector('#errorName5').innerHTML = 'Vous ne pouvez pas entrer un nombre négatif';
       } else {
         quantity.style.border = 'unset';
         document.querySelector('#errorName5').innerHTML = '';
       }
   
   // erreur pour les localisation     
       if(!radioChecked.checked) {
         document.querySelector('#errorName6').innerHTML = 'Vous devez choisir une localisation';
       } else {
         document.querySelector('#errorName6').innerHTML = '';
       }
   
   // erreur pour tout le formulaire
    } else {
         document.querySelectorAll('#errorName1', '#errorName2', '#errorName3').innerHTML = '';
         document.getElementById('email').style.border = 'unset';
         showConfirmMsg();
         return true;
    }
   }
   
   // regex pour la validation du mail
   function validateEmail(email) {
     let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     return re.test(email);
   };
   // regex pour la validation de la date de naissance
   function validateBirtdate(birthdate) {
     let re = /^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/;
     console.log(birthdate);
     console.log(re.test(birthdate));
     return re.test(birthdate);
   };