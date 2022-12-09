function firstcheck() {
    const first = document.querySelector('#first');
    first = false;
    if (first.value.length < 2) {
        first.classList.add('error')
        first.getElementsByClassName.border = '2px solid red';
        document.getElementById('errorfirst').innerHTML = "Veuillez entre 2 caratères sur le champs du prénom."
    } else {
        first.style.border = 'unset';
        document.getElementById('errorFirst').innerHTML = '';
        first.style.border = '2px solid rgb(5, 190, 5)';
        return true;  
    }
}
