// récupération des id des inputs
const inputs = document.querySelectorAll("#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 ");
// pour le clique de la soumission du formulaire(l'événement se trouve à la fin du code de cette page)
const form = document.querySelector("form");
const inputSubmit = form[form.length -1];

// allez d'une input à l'autre
inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        switch(e.target.id) {
            case "first": firstInput(e.target.value);
            break;
            case "last": lastInput(e.target.value);
            break;
            case "email": emailInput(e.target.value);
            break;
            case "birthdate": birthdateInput(e.target.value);
            break;
            case "quantity": quantityInput(e.target.value);
            break;
            case "checkbox1": checkboxInput(e.target.value);
            default: null;
        }
    })
});
// l'input du prénom
function firstInput(value) {
    const first = document.querySelector('#first');
    const errorInput = document.getElementById('errorFirst');
    let validate = false;

    if (value.length < 2) {
        first.style.border = '2px solid red';
        errorInput.innerHTML = "Veuillez entre 2 caratères sur le champs du prénom.";
        validate = false;
    } else {
        first.style.border = 'unset';
        errorInput.innerHTML = '';
        first.style.border = '2px solid #6EFF33';
        validate = true;  
    }
    return validate;
};
// l'input du nom
function lastInput(value) {
    const last = document.querySelector('#last');
    const errorInput = document.getElementById('errorLast');
    let validate = false;

    if (value.length < 2) {
        last.style.border = '2px solid red';
        errorInput.innerHTML = "Veuillez entre 2 caratères sur le champs du nom.";
    } else {
        last.style.border = 'unset';
        errorInput.innerHTML = '';
        last.style.border = '2px solid #6EFF33';
        validate = true;  
    }
    return validate;
};
// l'input de l'email
function emailInput(value) {
    const email = document.querySelector('#email');
    const errorInput = document.getElementById('errorMail');
    let validate = false;

    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        email.style.border = '2px solid red';
        errorInput.innerHTML = "Veuillez entrer un mail valide.";
    } else {
        email.style.border = 'unset';
        errorInput.innerHTML = '';
        email.style.border = '2px solid #6EFF33';
        validate = true;  
    }
    return validate;
};
// l'input de la date de naissance
function birthdateInput(value) {
    const birthdate = document.querySelector('#birthdate');
    const errorInput = document.getElementById('errorBirthDate');
    let validate = false;

    if (!value.match(/^([0-9]{4})\-([0-9]{2})\-([0-9]{2})$/)) {
        birthdate.style.border = '2px solid red';
        errorInput.innerHTML = "Veuillez entrer une date de naissance.";
        validate = false;
    } else {
        errorInput.innerHTML = '';
        birthdate.style.border = '2px solid #6EFF33';
        validate = true;  
    }
    return validate;
};
// l'input des quantitées de tournoi participé
function quantityInput(value) {
    const quantity = document.querySelector('#quantity');
    const errorInput = document.getElementById('errorQuantity');
    let validate = false;

    if (value < 0) {
        quantity.style.border = '2px solid red';
        errorInput.innerHTML = "Vous ne pouvez pas entrer un nombre négatif.";
    } else {
        quantity.style.border = 'unset';
        errorInput.innerHTML = '';
        quantity.style.border = '2px solid #6EFF33';
        validate = true;  
    }
    return validate;
};
// acceptation des termes et conditions
function checkboxInput() {
    const errorInput = document.getElementById('errorTerm');
    let validate = false;

    if (!checkbox1.checked) {
        errorInput.innerHTML = "Vous devez accepter les termes et conditions du site.";
    } else {
        errorInput.innerHTML = '';
        validate = true;  
    }
    return validate;
};
// la localisation
const checkboxContainer = () => {
    const errorDisplay = document.getElementById("errorChecked");
    const radios = document.querySelectorAll('input[name="location"]');
    validate = false;
  
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        errorDisplay.innerHTML = "";
        errorDisplay.style.display = "none";
        validate = true;
        break;
      }
       else {
        errorDisplay.innerHTML = "Veuillez sélectionner un choix.";
        errorDisplay.style.color = "red";
        errorDisplay.style.fontSize = "0.6em";
        validate = false; 
      }
    }
    return validate; 
  };
  // récupération des valeurs dans les inputs
const validateForm = (e) => {
    e.preventDefault();
    const modalValue = (inputs) => {
        let data = [];

        for (let i = 0; i < inputs.length; i++) {
            if (
                inputs[i].type === "text" ||
                inputs[i].type === "email" ||
                inputs[i].type === "date" ||
                inputs[i].type === "number"
            ) {
                data.push(inputs[i].value);
            }
            if (inputs[i].type === "checkbox") {
                let currentValue = "";

                if (inputs[i].checked) {
                    currentValue = inputs[i].value;
                }
                data.push(currentValue);
            }
        }
        return data;
    };
// vérifie la valeur des inputs
    const formValid = (values) => {
        let validInput = [];

        validInput.push(firstInput(values[0]));
        validInput.push(lastInput(values[1]));
        validInput.push(emailInput(values[2]));
        validInput.push(birthdateInput(values[3]));
        validInput.push(quantityInput(values[4]));
        validInput.push(checkboxInput(values[5]));
        validInput.push(checkboxContainer());

        let validate = true;

        for(let i = 0; i < validInput.length; i++) {
            if (validInput[i] === false) {
                validate = false;
                break;
            }
        }
        return validate;
    };
// affiche le message de confirmation si les valeurs sont valide
    if(formValid(modalValue(inputs))) {
        modalBody.style.display = 'none';
        bodyMsg.style.display = "block";

    } else {
        modalBody.style.display = 'block';
        bodyMsg.style.display = 'none';
    }
};

inputSubmit.addEventListener('click', (e) => validateForm(e));