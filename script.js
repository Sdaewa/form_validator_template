const form = document.getElementById('form');
const passwordEl1 = document.getElementById('password1');
const passwordEl2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');



let isValid = false;
let passwordMatch = false;


function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    };

    if (passwordEl1.value === passwordEl2.value) {
        passwordMatch = true;
        passwordEl1.style.borderColor = 'green';
        passwordEl2.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Passwords dont match';
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red';
        passwordEl1.style.borderColor = 'red';
        passwordEl2.style.borderColor = 'red';
        return;
    };

    if (isValid && passwordMatch) {
        message.textContent = 'Success';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}


function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
}


function processFormData(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passwordMatch) {
        storeFormData();
    };
}



form.addEventListener('submit', processFormData);