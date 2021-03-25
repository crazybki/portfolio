const emailApi = "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";

const getAllElements = document.querySelectorAll('.formElements');

getAllElements.forEach(formElements => {
    formElements.addEventListener('input', validator);
});

function validator() {
    const txtInputReg = /^[a-z/A-Z\-]{3,}$/;
    const emailInputReg = /\S+@\S+\.\S+/;
    let textFromUser = this.value
    let emailFromuser = this.value
    let checkEmail = emailInputReg.test(emailFromuser)
    let checkInput = txtInputReg.test(textFromUser)

    if (checkInput || checkEmail) {
        this.style.borderColor = 'green';
        this.style.borderWidth = '2px';
    } else {
        this.style.borderColor = 'red';
        this.style.borderWidth = '2px';
    }

    if (textFromUser < 4) {
        this.style.borderColor = '#6C6E66';
        this.style.borderWidth = '2px';
    }
}


