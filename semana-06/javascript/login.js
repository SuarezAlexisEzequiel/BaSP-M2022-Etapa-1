//DOM
var btnSubmit = document.getElementById('login-submit');
var inputEmail = document.getElementById('login-email');
var inputPassword = document.getElementById('login-pwd');
var elementsEmail = document.getElementsByClassName('normal-e');
var elementsPwd = document.getElementsByClassName('normal-p');

var emailFormat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var emailValidateRes;
var pwdValidateRes;

btnSubmit.addEventListener('click', validateLoginInfo);
inputEmail.addEventListener('blur', validateEmail);
inputEmail.addEventListener('focus', inFocusEmail);
inputPassword.addEventListener('blur', validatePassword);
inputPassword.addEventListener('focus', inFocusPwd);

function validateEmail (e) {
    var containerE = e.target.parentElement;
    if (emailFormat.test(e.target.value) == true) {
        emailValidateRes = 'Correct';
        e.target.className = 'valid';
        containerE.className = 'valid';
    } else {
        emailValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerE.className = 'invalid';
    }
}

function validatePassword(e) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < e.target.value.length; i++) {
        if (numbers.includes(e.target.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    var containerP = e.target.parentElement;
    if (e.target.value.length >= 8 && num >= 1 && char >= 1) {
        pwdValidateRes = 'Correct';
        e.target.className = 'valid';
        containerP.className = 'valid';
    } else {
        pwdValidateRes = 'Incorrect';
        e.target.className = 'invalid';
        containerP.className = 'invalid';
    }
}

function inFocusEmail(x) {
    var containerFE = x.target.parentElement;
    containerFE.className = 'normal';
}
function inFocusPwd(y) {
    var containerFP = y.target.parentElement;
    containerFP.className = 'normal';
}


function validateLoginInfo (e) {
    e.preventDefault();
    window.alert('Email: ' + emailValidateRes + '\nPassword: ' + pwdValidateRes);
    console.log('Email: ' + emailValidateRes + '\nPassword: ' + pwdValidateRes);
}