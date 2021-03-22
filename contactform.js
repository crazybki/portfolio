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


    } else {

    }
};

lastName.addEventListener('input', checkLastName);

function checkLastName() {
    const lastNameReg = /^[a-z/A-Z\-]{3,}$/;
    let lastNameInput = lastName.value;
}

