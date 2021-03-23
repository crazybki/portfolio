const emailApi = "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";

const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const emailAdress = document.querySelector('.emailadress');
const thanksmessage = document.querySelector('.firstname');


firstName.addEventListener('input', checkFirstName);

function checkFirstName() {
    const firstNameReg = /^[a-z/A-Z\-]{3,}$/;
    let userInput = firstName.value;
    let checkName = firstNameReg.test(userInput);

    if (checkName) {
        firstName.style.borderColor = 'green';
        firstName.style.borderWidth = '2px';
    } else {
        firstName.style.borderColor = 'red';
        firstName.style.borderWidth = '2px';
    }

    if (userInput < 2) {
        firstName.style.borderColor = '#6C6E66';
        firstName.style.borderWidth = '2px';
    }
};


lastName.addEventListener('input', checkLastName);

function checkLastName() {
    const lastNameReg = /^[a-z/A-Z\-]{3,}$/;
    let lastNameInput = lastName.value;
    let lastNameCheck = lastNameReg.test(lastNameInput);

    if (lastNameCheck) {
        lastName.style.borderColor = 'green';
        lastName.style.borderWidth = '2px';
    } else {
        lastName.style.borderColor = 'red';
        lastName.style.borderWidth = '2px';
    }

    if (lastNameInput < 2) {
        lastName.style.borderColor = '#6C6E66';
        lastName.style.borderColor = '2px';
    }
}


emailAdress.addEventListener('input', checkEmail);

function checkEmail() {
    const emailReg = /\S+@\S+\.\S+/;
    let emailInput = emailAdress.value;
    let emailCheck = emailReg.test(emailInput);
    console.log(emailCheck)

    if (emailCheck) {
        emailAdress.style.borderColor = 'green';
        emailAdress.style.borderWidth = '2px';
    } else {
        emailAdress.style.borderColor = 'red';
        emailAdress.style.borderWidth = '2px'
    }

    if (emailInput < 5) {
        emailAdress.style.borderColor = '#6C6E66';
        emailAdress.style.borderWidth = '2px';
    }
}
