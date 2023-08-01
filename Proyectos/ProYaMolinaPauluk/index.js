const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const ciudad = document.getElementById('ciudad');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();
    const ciudadValue = ciudad.value.trim();

    if(usernameValue === '') {
        setError(username, 'Debe elegir un nombre de usuario');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'E-mail es necesario');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Debe proveer una direccion de email valida');
    } else {
        setSuccess(email);
    }

    if(telefonoValue === '') {
        setError(telefono, 'El numero telefonico es requerido');
    } else if ((telefonoValue.length < 10 ) ) 
    {
        setError(telefono, 'El telefono debe ser un numero de al menos 10 caracteres')
    } else {
        setSuccess(telefono);
    }

    if(ciudadValue === '') {
        setError(ciudad, 'Debe introducir su ciudad');

    } else {
        setSuccess(ciudad);
    }

};
