const inputText = document.querySelectorAll(
    "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
  );



const firstChecker = (value) => {
    const firstInput = document.querySelector('.first-container');
    const errorDisplay = document.querySelector('.first-container > span');
    let isValid = false;

    if(value.length < 2) {
        firstInput.classList("error");
        errorDisplay.textContent = "Veuillez entre 2 caractères ou plus pour le champ du prénom.";
    }else{
        errorDisplay.textContent = "";
        isValid = true;
    }
    return isValid
};

const formValid = (values) => {
    let validText = [];

    validText.push(firstChecker(values[0]));

    let isValid = true;

    for (let i = 0;i < validText.length; i++) {
        if(validText[i] === false) {
            isValid = false;
            break;
        }
    }
    return isValid;
}